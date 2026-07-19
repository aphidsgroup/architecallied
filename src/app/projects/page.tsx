import Link from "next/link";
import { site } from "@/content/site";
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
 * No loading UI: the data source is a local typed module — nothing suspends
 * and nothing is fetched, so a skeleton would be dishonest.
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
    <div className="mx-auto max-w-[1360px] px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <p className="label text-ink-muted">Projects</p>
      <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-tight">
        The work of the practice
      </h1>

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
      ) : all.length === 0 ? (
        /* Honest production empty state — no projects published yet. */
        <div className="mt-16 max-w-2xl border-l-2 border-gold pl-8">
          <h2 className="text-2xl font-normal">
            Project portfolio in preparation
          </h2>
          <p className="mt-4 text-ink-muted">
            We are preparing our project documentation and photography for
            publication. Until then, we are glad to share relevant experience
            and credentials directly — please get in touch.
          </p>
          <Button asChild className="mt-8">
            <Link href="/contact">Contact the practice</Link>
          </Button>
        </div>
      ) : (
        /* Filters returned nothing. */
        <div className="mt-16 max-w-2xl">
          <h2 className="text-2xl font-normal">No projects match</h2>
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
    </div>
  );
}
