import {
  publishedProjects,
  PROJECT_STATUSES,
  TYPOLOGIES,
  type Project,
  type ProjectStatus,
  type Typology,
} from "@/content/projects";

import { devFixtures } from "@/content/fixtures.dev";

/**
 * Fixture gate: dev fixtures are only ever visible when explicitly enabled
 * AND not in a production build. The NODE_ENV comparison is statically
 * replaced at build time, so the fixture branch is dead code in production
 * bundles (verified by grepping the production build output for "[FIXTURE]"
 * — see docs/qa/final-report.md). Fixtures are additionally excluded from
 * sitemap/metadata/JSON-LD because those derive from getPublishedProjects().
 */
function fixturesEnabled(): boolean {
  return (
    process.env.NODE_ENV !== "production" &&
    process.env.NEXT_PUBLIC_ENABLE_FIXTURES === "true"
  );
}

/** All projects visible in the current environment (grid/detail rendering). */
export function getVisibleProjects(): Project[] {
  if (fixturesEnabled()) {
    return [...publishedProjects.filter((p) => p.published), ...devFixtures];
  }
  return publishedProjects.filter((p) => p.published);
}

/** Only real published projects — the ONLY source for sitemap, metadata, JSON-LD. */
export function getPublishedProjects(): Project[] {
  return publishedProjects.filter((p) => p.published);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getVisibleProjects().find((p) => p.slug === slug);
}

export interface ProjectFilterState {
  typology?: string;
  location?: string;
  status?: string;
}

/** Parse and sanitise filters from URL search params. Unknown values are dropped. */
export function parseFilters(
  params: Record<string, string | string[] | undefined>,
  validLocations: string[],
): ProjectFilterState {
  const one = (v: string | string[] | undefined) =>
    Array.isArray(v) ? v[0] : v;
  const typology = one(params.typology);
  const location = one(params.location);
  const status = one(params.status);
  return {
    typology: TYPOLOGIES.includes(typology as Typology) ? typology : undefined,
    location:
      location && validLocations.includes(location) ? location : undefined,
    status: PROJECT_STATUSES.includes(status as ProjectStatus)
      ? status
      : undefined,
  };
}

export function filterProjects(
  projects: Project[],
  f: ProjectFilterState,
): Project[] {
  return projects.filter(
    (p) =>
      (!f.typology || p.typology === f.typology) &&
      (!f.location || p.location === f.location) &&
      (!f.status || p.status === f.status),
  );
}

/** Distinct locations among visible projects, sorted. */
export function getLocations(projects: Project[]): string[] {
  return [...new Set(projects.map((p) => p.location))].sort();
}

/** Typologies that have at least one published project (for expertise links). */
export function typologiesWithPublishedWork(): Typology[] {
  const pub = getPublishedProjects();
  return TYPOLOGIES.filter((t) => pub.some((p) => p.typology === t));
}

export function relatedProjects(project: Project, limit = 3): Project[] {
  const pool = getVisibleProjects().filter((p) => p.slug !== project.slug);
  const explicit = (project.relatedProjects ?? [])
    .map((slug) => pool.find((p) => p.slug === slug))
    .filter((p): p is Project => Boolean(p));
  const sameTypology = pool.filter(
    (p) => p.typology === project.typology && !explicit.includes(p),
  );
  return [...explicit, ...sameTypology].slice(0, limit);
}

export function buildFilterQuery(f: ProjectFilterState): string {
  const q = new URLSearchParams();
  if (f.typology) q.set("typology", f.typology);
  if (f.location) q.set("location", f.location);
  if (f.status) q.set("status", f.status);
  const s = q.toString();
  return s ? `?${s}` : "";
}
