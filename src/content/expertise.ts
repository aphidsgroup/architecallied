import type { Typology } from "./projects";

/**
 * Expertise content — the practice's real project categories, described from
 * the delivered portfolio (Version 2.0). Items link to the filtered projects
 * archive only when at least one published project exists for that category
 * (enforced in the Expertise page via lib/projects utilities).
 */

export interface ExpertiseArea {
  typology: Typology;
  description: string;
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    typology: "Railway Stations",
    description:
      "Airport-style multimodal station redevelopments — air-concourses, segregated arrival and departure flows, and passenger-first amenities, from Bhubaneswar and Cuttack to the Amrit Bharat stations of the Trichy Division.",
  },
  {
    typology: "Office Buildings",
    description:
      "Civic and administrative headquarters — smart-city command centres, tax-governance complexes and naturally ventilated, GRIHA-rated workplaces.",
  },
  {
    typology: "Group Housing",
    description:
      "Integrated townships and planned housing for industry and railway personnel — livable, walkable communities with clubhouses, sports and full utility networks.",
  },
  {
    typology: "Sports Complex",
    description:
      "Multi-sport stadia and aquatics facilities designed for competition and crowds — tracks, turf fields, Olympic pools and spectator galleries.",
  },
  {
    typology: "Market Complex",
    description:
      "Modern commercial and wholesale-market hubs planned for logistics, hygiene and natural ventilation, from retail complexes to technology-enabled fish markets.",
  },
  {
    typology: "Educational",
    description:
      "School campuses for institutions and research establishments, organised around learning and everyday routine.",
  },
  {
    typology: "Urban Development",
    description:
      "City-scale infrastructure and landmark elements — inter-state bus terminals and sculptural gateway arches that mark a threshold in the public realm.",
  },
];

export const services: string[] = [
  "Master planning",
  "Architectural design",
  "Structural engineering",
  "MEP services design",
  "Pre-tender costing",
  "Landscape planning",
];
