import type { Project } from "./projects";

/**
 * DEVELOPMENT FIXTURES — NOT REAL PROJECTS.
 * Used only to exercise the project grid, filters and detail template during
 * development. Gated in src/lib/projects.ts: included only when
 * NEXT_PUBLIC_ENABLE_FIXTURES === "true" and NODE_ENV !== "production".
 * Every title is prefixed "[FIXTURE]" so accidental exposure is obvious.
 * No images are attached (no fake photography is permitted).
 */
export const devFixtures: Project[] = [
  {
    slug: "fixture-riverside-residence",
    title: "[FIXTURE] Riverside Residence",
    location: "Chennai",
    typology: "Residential",
    services: ["Architecture", "Interiors"],
    year: 2024,
    status: "Completed",
    brief: "Development fixture for template testing. Not a real project.",
    images: [],
    published: false,
  },
  {
    slug: "fixture-office-campus",
    title: "[FIXTURE] Office Campus",
    location: "Bhubaneswar",
    typology: "Commercial",
    year: 2025,
    status: "Under Construction",
    brief: "Development fixture for template testing. Not a real project.",
    images: [],
    published: false,
  },
  {
    slug: "fixture-school-block",
    title: "[FIXTURE] School Block",
    location: "Chennai",
    typology: "Institutional",
    status: "Design",
    brief: "Development fixture for template testing. Not a real project.",
    images: [],
    published: false,
  },
];
