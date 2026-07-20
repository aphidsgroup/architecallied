/**
 * Media content: brand imagery, curated films and the client logo wall.
 *
 * BRAND STUDIES — AI-generated abstract architectural compositions produced
 * in the brand palette for this website (2026-07-20). They are brand/editorial
 * imagery and are ALWAYS captioned as such in the UI. They are NOT photographs
 * and NOT Archi-tec Allied projects (ATTRIBUTIONS.md).
 *
 * FILMS — curated third-party architecture films, embedded from YouTube's
 * privacy-enhanced domain, loaded only on click. Clearly labelled as curated
 * viewing, not practice work. Replace with practice films when available
 * (CONTENT_REQUIRED.md).
 *
 * CLIENTS — logos extracted from the practice's own presentation (slides 8–9)
 * at Archi-tec Allied's instruction. Display-name confirmations and any
 * outstanding permissions remain tracked in src/content/client-review.ts.
 */

export interface Study {
  /** Series index — a real sequence: one study per practice typology. */
  n: string;
  typology: string;
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** Dominant field, used to pick overlay treatment. */
  tone: "light" | "dark";
}

/**
 * THE STUDY SERIES — six AI-generated compositions, one per typology.
 * A genuine sequence (structure encodes the practice's expertise), used
 * consistently: plates on Home, the study stage on Expertise, and the
 * archive plate on Projects. Always captioned as AI brand imagery.
 */
export const studySeries: Study[] = [
  { n: "01", typology: "Residential", src: "/images/brand/study-01-residential.png", alt: "Abstract study of a courtyard house: two navy volumes around a lit court with a tree circle and gold ground datum", caption: "Courtyard light", width: 1600, height: 1200, tone: "light" },
  { n: "02", typology: "Commercial", src: "/images/brand/study-02-commercial.png", alt: "Abstract study of an office tower at dusk: mullioned navy shaft with a gold sky-lobby band", caption: "Tower rhythm", width: 1600, height: 1200, tone: "dark" },
  { n: "03", typology: "Institutional", src: "/images/brand/study-03-institutional.png", alt: "Abstract study of a colonnade: navy piers with deep shadow returns beneath a long entablature and sun disc", caption: "Colonnade", width: 1600, height: 1200, tone: "light" },
  { n: "04", typology: "Industrial", src: "/images/brand/study-04-industrial.png", alt: "Abstract study of sawtooth industrial sheds with north-light roofs over a long plinth of openings", caption: "North light", width: 1600, height: 1200, tone: "light" },
  { n: "05", typology: "Interiors", src: "/images/brand/study-05-interiors.png", alt: "Abstract study of an interior: a tall window of light and a floating stair in a deep navy room", caption: "Room of light", width: 1600, height: 1200, tone: "dark" },
  { n: "06", typology: "Master Planning", src: "/images/brand/study-06-planning.png", alt: "Abstract figure-ground plan study: navy city blocks around a circular park crossed by a gold axis", caption: "Figure and ground", width: 1600, height: 1200, tone: "light" },
];

export const panorama = {
  src: "/images/brand/panorama-two-cities.png",
  alt: "Abstract night panorama of two skylines — Chennai and Bhubaneswar — joined by a single gold datum line stepping at 45 degrees",
  caption: "Two cities, one datum — Chennai · Bhubaneswar",
  width: 2400,
  height: 800,
} as const;

export interface Film {
  /** YouTube video ID, embedded via youtube-nocookie.com on user click only. */
  youtubeId: string;
  title: string;
  attribution: string;
  duration?: string;
}

export const curatedFilms: Film[] = [
  {
    youtubeId: "4AYE3w5TWHs",
    title: "3 warp-speed architecture tales",
    attribution: "Bjarke Ingels — TED",
  },
  {
    youtubeId: "iQsnObyii4Q",
    title: "Why great architecture should tell a story",
    attribution: "Ole Scheeren — TED",
  },
  {
    youtubeId: "dSsfIEcg3Mo",
    title: "The Promise — Architect B.V. Doshi (trailer)",
    attribution: "Official documentary trailer",
  },
];

export interface ClientLogo {
  src: string;
  /** Company name where legible in the source presentation. */
  name: string;
}

/** Order follows the source slides. Unclear marks carry a generic name. */
export const clientLogos: ClientLogo[] = [
  { src: "/images/clients/client-01.png", name: "Canara Bank" },
  { src: "/images/clients/client-02.png", name: "CIPET" },
  { src: "/images/clients/client-03.png", name: "Consolidated Construction Consortium Ltd" },
  { src: "/images/clients/client-04.png", name: "CPCL" },
  { src: "/images/clients/client-05.png", name: "Air Force Naval Housing Board" },
  { src: "/images/clients/client-06.png", name: "BARC" },
  { src: "/images/clients/client-07.png", name: "Breeze Hotel" },
  { src: "/images/clients/client-08.png", name: "BSNL" },
  { src: "/images/clients/client-09.png", name: "Repco Bank" },
  { src: "/images/clients/client-10.png", name: "Client mark" },
  { src: "/images/clients/client-11.png", name: "Nuclear Power Corporation of India" },
  { src: "/images/clients/client-12.png", name: "Indian Bank" },
  { src: "/images/clients/client-13.png", name: "LIC" },
  { src: "/images/clients/client-14.png", name: "Jain Estates" },
  { src: "/images/clients/client-15.png", name: "RRPL" },
  { src: "/images/clients/client-16.png", name: "Maharishi Vidya Mandir" },
  { src: "/images/clients/client-17.png", name: "Malar Properties" },
  { src: "/images/clients/client-18.png", name: "Larsen & Toubro" },
  { src: "/images/clients/client-19.png", name: "Madras Fertilizers Limited" },
  { src: "/images/clients/client-20.png", name: "NatWest" },
  { src: "/images/clients/client-21.png", name: "PARSN" },
  { src: "/images/clients/client-22.png", name: "Punjab National Bank" },
  { src: "/images/clients/client-23.png", name: "Client mark" },
  { src: "/images/clients/client-24.png", name: "Yuga Homes Ltd" },
  { src: "/images/clients/client-25.png", name: "GENCO" },
  { src: "/images/clients/client-26.png", name: "G. Kuppuswamy Naidu Memorial Hospital" },
  { src: "/images/clients/client-27.png", name: "IRWO" },
  { src: "/images/clients/client-28.png", name: "Client mark" },
  { src: "/images/clients/client-29.png", name: "Victory Signarts" },
  { src: "/images/clients/client-30.png", name: "Co-optex" },
  { src: "/images/clients/client-31.png", name: "Serene" },
  { src: "/images/clients/client-32.png", name: "TREC-STEP" },
  { src: "/images/clients/client-33.png", name: "Andhra Bank" },
  { src: "/images/clients/client-34.png", name: "UCAL Fuel Systems Ltd" },
  { src: "/images/clients/client-35.png", name: "Periyar Maniammai University" },
  { src: "/images/clients/client-36.png", name: "URC" },
];
