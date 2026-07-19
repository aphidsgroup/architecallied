import type { Typology } from "./projects";

/**
 * Expertise content — informational only. Items must NOT link to a
 * project filter unless at least one published project exists for that
 * typology (enforced in the Expertise page via lib/projects utilities).
 * Descriptions are DRAFT copy requiring client review (CONTENT_REQUIRED.md).
 */

export interface ExpertiseArea {
  typology: Typology;
  /** DRAFT — requires client review. */
  description: string;
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    typology: "Residential",
    description:
      "Homes and housing shaped around how people actually live — light, ventilation, privacy and the rhythms of the household.",
  },
  {
    typology: "Commercial",
    description:
      "Workplaces and commercial buildings planned for clarity of movement, efficient servicing and a considered public face.",
  },
  {
    typology: "Institutional",
    description:
      "Learning, healthcare and civic environments organised around the people they serve and the routines they support.",
  },
  {
    typology: "Industrial",
    description:
      "Functional industrial facilities where process, safety and expansion logic drive the plan.",
  },
  {
    typology: "Interiors",
    description:
      "Interior architecture continuous with the building — material, light and detail resolved as one.",
  },
  {
    typology: "Master Planning",
    description:
      "Site and campus planning that sets a durable framework for phased growth.",
  },
];

/** DRAFT — requires client review. */
export const services: string[] = [
  "Architectural design",
  "Interior architecture",
  "Master planning",
  "Project coordination",
];
