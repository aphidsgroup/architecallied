import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getProjectBySlug,
  getPublishedProjects,
  relatedProjects,
} from "@/lib/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { breadcrumbJsonLd } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/metadata";

/**
 * Static params come ONLY from published real projects. Fixtures render in
 * dev via getProjectBySlug, but generate no metadata, sitemap entries or
 * JSON-LD, and production knows nothing about them.
 */
export function generateStaticParams() {
  return getPublishedProjects().map((p) => ({ slug: p.slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  // Metadata only for published real projects — never for fixtures.
  const project = getPublishedProjects().find((p) => p.slug === slug);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description:
      project.brief ??
      `${project.typology} project in ${project.location} by Archi-tec Allied.`,
    path: `/projects/${project.slug}`,
  });
}

const NARRATIVE_SECTIONS: {
  key:
    | "context"
    | "challenge"
    | "architecturalResponse"
    | "materialStrategy"
    | "climateResponse"
    | "userOutcome";
  heading: string;
}[] = [
  { key: "context", heading: "Context" },
  { key: "challenge", heading: "Challenge" },
  { key: "architecturalResponse", heading: "Architectural response" },
  { key: "materialStrategy", heading: "Material strategy" },
  { key: "climateResponse", heading: "Climate response" },
  { key: "userOutcome", heading: "Outcome for users" },
];

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const isPublished = getPublishedProjects().some((p) => p.slug === slug);
  const related = relatedProjects(project);
  const banner = project.images[0];

  const meta: [string, string | undefined][] = [
    ["Typology", project.typology],
    ["Location", project.location],
    ["Client", project.client],
    ["Status", project.status],
    ["Year", project.year?.toString()],
    ["Site area", project.siteArea],
    ["Built-up area", project.builtUpArea],
    ["Services", project.services?.join(", ")],
  ];

  return (
    <article className="pb-24 pt-20">
      {banner ? (
        <div className="relative aspect-[16/9] max-h-[70svh] w-full">
          <Image
            src={banner.src}
            alt={banner.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      <div className="mx-auto max-w-[1360px] px-4 md:px-6">
        <header className="pt-14">
          <p className="label text-ink-muted">
            <Link href="/projects" className="hover:underline">
              Projects
            </Link>{" "}
            / {project.typology}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-tight">
            {project.title}
          </h1>
        </header>

        <div className="mt-14 grid gap-14 lg:grid-cols-12">
          {/* Metadata rail — render only populated fields */}
          <dl className="h-fit border-t rule lg:col-span-4">
            {meta
              .filter(([, v]) => Boolean(v))
              .map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-2 gap-4 border-b rule py-3"
                >
                  <dt className="label text-ink-muted">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
          </dl>

          <div className="lg:col-span-7 lg:col-start-6">
            {project.brief && <p className="text-xl leading-relaxed">{project.brief}</p>}
            {NARRATIVE_SECTIONS.filter(({ key }) => project[key]).map(
              ({ key, heading }) => (
                <section key={key} className="mt-12">
                  <h2 className="label text-gold">{heading}</h2>
                  <p className="mt-4">{project[key]}</p>
                </section>
              ),
            )}

            {(project.team?.length || project.consultants?.length) ? (
              <section className="mt-12 grid gap-8 sm:grid-cols-2">
                {project.team?.length ? (
                  <div>
                    <h2 className="label text-gold">Team</h2>
                    <ul className="mt-4 space-y-1">
                      {project.team.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {project.consultants?.length ? (
                  <div>
                    <h2 className="label text-gold">Consultants</h2>
                    <ul className="mt-4 space-y-1">
                      {project.consultants.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>
            ) : null}
          </div>
        </div>

        {project.images.length > 1 && (
          <div className="mt-20">
            <h2 className="label text-ink-muted">Gallery</h2>
            <div className="mt-6">
              <ProjectGallery title={project.title} images={project.images} />
            </div>
          </div>
        )}

        {related.length > 0 && (
          <section className="mt-24 border-t rule pt-14" aria-labelledby="related-h">
            <h2 id="related-h" className="text-2xl font-normal">
              Related projects
            </h2>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <ProjectCard project={p} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      {/* Breadcrumb JSON-LD only for genuine published projects */}
      {isPublished && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              breadcrumbJsonLd([
                { name: "Projects", path: "/projects" },
                { name: project.title, path: `/projects/${project.slug}` },
              ]),
            ),
          }}
        />
      )}
    </article>
  );
}
