/**
 * Typed project content layer. Designed so a CMS can replace this file
 * without rewriting page components.
 *
 * IMPORTANT — content integrity:
 * - `publishedProjects` is EMPTY until Archi-tec Allied supplies real,
 *   verified projects with photography rights (see CONTENT_REQUIRED.md).
 * - Development fixtures live in fixtures.dev.ts and are ONLY included when
 *   NEXT_PUBLIC_ENABLE_FIXTURES === "true" AND NODE_ENV !== "production".
 *   They never enter production builds, navigation, sitemap, metadata or JSON-LD.
 */

export const TYPOLOGIES = [
  "Residential",
  "Commercial",
  "Institutional",
  "Industrial",
  "Interiors",
  "Master Planning",
] as const;
export type Typology = (typeof TYPOLOGIES)[number];

export const PROJECT_STATUSES = ["Completed", "Under Construction", "Design"] as const;
export type ProjectStatus = (typeof PROJECT_STATUSES)[number];

export interface ProjectImage {
  /** Path under /public — remote URLs are not permitted. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  location: string;
  typology: Typology;
  services?: string[];
  client?: string;
  year?: number;
  status: ProjectStatus;
  siteArea?: string;
  builtUpArea?: string;
  brief?: string;
  context?: string;
  challenge?: string;
  architecturalResponse?: string;
  materialStrategy?: string;
  climateResponse?: string;
  userOutcome?: string;
  images: ProjectImage[];
  team?: string[];
  consultants?: string[];
  awards?: string[];
  publications?: string[];
  relatedProjects?: string[];
  /** Only `published: true` projects render anywhere in production. */
  published: boolean;
}

/**
 * Real, verified projects. NONE SUPPLIED YET — do not add entries without
 * verified facts and photography rights from Archi-tec Allied.
 */
export const publishedProjects: Project[] = [];
