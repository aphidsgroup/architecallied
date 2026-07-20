import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";
import { expertiseAreas } from "@/content/expertise";
import { studySeries } from "@/content/media";
import {
  filterProjects,
  getLocations,
  getVisibleProjects,
  parseFilters,
} from "@/lib/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectFilters } from "@/components/projects/project-filters";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description: `Architecture projects by ${site.name}, Chennai and Bhubaneswar.`,
  path: "/projects",
});

/**
 * Direction A projects page.
 * - With no visible projects: an authored "practice archive in preparation"
 *   composition — typology structure, publishing status and direct contact.
 *   NO inactive filter controls are rendered (audit defect fixed).
 * - With projects: the full filter system activates as a premium index
 *   (URL-persisted, keyboard/touch accessible).
 * No loading UI: data is a local typed module; nothing suspends.
 */
export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const all = getVisibleProjects();
  const locations = getLocations(all);
  const filters = parseFilters(params, locations);
  const projects = filterProjects(all, filters);

  return (
    <div className="px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <p className="label text-ink-muted">01 — Projects</p>
      <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.02]">
        The practice <em className="text-gold-ink">archive</em>
      </h1>

      {all.length > 0 ? (
        <>
          <div className="mt-14">
            <ProjectFilters
              filters={filters}
              locations={locations}
              resultCount={projects.length}
            />
          </div>
          {projects.length > 0 ? (
            <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <li key={p.slug}>
                  <ProjectCard project={p} />
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-16 max-w-2xl">
              <h2 className="font-display text-2xl font-normal">
                No projects match
              </h2>
              <p className="mt-4 text-ink-muted">
                No projects match the selected filters.
              </p>
              <Button asChild variant="outline" className="mt-8">
                <Link href="/projects" scroll={false}>
                  Clear all filters
                </Link>
              </Button>
            </div>
          )}
        </>
      ) : (
        /* AUTHORED EMPTY ARCHIVE — no inactive filters, no "0 projects" */
        <>
          <div className="mt-16 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] font-light leading-snug">
                An archive in preparation
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-ink-muted">
                Project documentation and photography are being prepared for
                publication and will appear here, indexed by typology,
                location and status. Until the archive opens,{" "}
                {site.clientStatement.toLowerCase()}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button asChild>
                  <a href={`mailto:${site.email}`}>Request credentials</a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/expertise">Explore our expertise</Link>
                </Button>
              </div>
            </div>

            {/* Future structure of the archive, stated honestly */}
            <div className="md:col-span-5 md:col-start-8">
              <figure className="mb-10">
                <Image
                  src={studySeries[5].src}
                  alt={studySeries[5].alt}
                  width={studySeries[5].width}
                  height={studySeries[5].height}
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="aspect-[16/9] w-full border rule object-cover"
                />
                <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm text-ink-muted">
                  <span>Plate 06 — Figure and ground</span>
                  <span className="label shrink-0 text-gold-ink">AI brand study</span>
                </figcaption>
              </figure>
              <h2 className="label text-ink-muted">
                The archive will be indexed by
              </h2>
              <ol className="mt-6 border-t rule">
                {expertiseAreas.map((a, i) => (
                  <li
                    key={a.typology}
                    className="flex items-baseline gap-5 border-b rule py-4"
                  >
                    <span className="font-display text-lg text-gold-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl">{a.typology}</span>
                    <span className="label ml-auto text-ink-muted">
                      In preparation
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
