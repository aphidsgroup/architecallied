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
    typology: "Group Housing",
    services: ["Architecture"],
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
    typology: "Office Buildings",
    year: 2025,
    status: "Ongoing",
    brief: "Development fixture for template testing. Not a real project.",
    images: [],
    published: false,
  },
  {
    slug: "fixture-school-block",
    title: "[FIXTURE] School Block",
    location: "Chennai",
    typology: "Educational",
    status: "Tender Stage",
    brief: "Development fixture for template testing. Not a real project.",
    images: [],
    published: false,
  },
];
