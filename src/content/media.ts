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

export interface BrandStudy {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export const brandStudies: BrandStudy[] = [
  {
    src: "/images/brand/study-elevation.png",
    alt: "Abstract study of two navy building volumes with a gold datum line against an evening-toned field",
    caption: "Elevation study I — massing and datum",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/brand/study-courtyard.png",
    alt: "Abstract study of courtyard light: a beige wedge of light cutting across a deep navy field",
    caption: "Study II — courtyard light",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/brand/study-screen.png",
    alt: "Abstract study of a rhythmic vertical screen of navy fins over a cream field",
    caption: "Study III — screen rhythm",
    width: 1600,
    height: 1200,
  },
];

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
