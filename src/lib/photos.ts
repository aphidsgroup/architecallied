import { studySeries, panorama } from "@/content/media";
import { expertiseAreas } from "@/content/expertise";
import { getPublishedProjects } from "@/lib/projects";
import type { Project } from "@/content/projects";

/**
 * IMAGERY RESOLVER (Version 2.0).
 *
 * The site now has a real portfolio, so every imagery slot draws from real
 * project photography first: home plates, the expertise stage, the hero
 * cursor trail and the about panorama all use actual project images. The
 * AI study series remains only as a graceful fallback for a category that
 * has no published project yet.
 */

export interface ResolvedImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  isPhoto: boolean;
  kindLabel: string;
  n: string;
  typology: string;
  caption: string;
  /** Project link when the plate is backed by a real project. */
  href?: string;
  tone: "light" | "dark";
}

function firstProjectOf(typology: string): Project | undefined {
  return getPublishedProjects().find((p) => p.typology === typology);
}

/**
 * One plate per expertise category, in expertiseAreas order. Backed by a
 * real project's lead image where one exists; otherwise the AI study plate.
 */
export function getPlates(): ResolvedImage[] {
  return expertiseAreas.map((area, i) => {
    const study = studySeries[i] ?? studySeries[0];
    const n = String(i + 1).padStart(2, "0");
    const project = firstProjectOf(area.typology);
    const hero = project?.images[0];
    if (project && hero) {
      return {
        src: hero.src,
        alt: hero.alt,
        width: hero.width,
        height: hero.height,
        isPhoto: true,
        kindLabel: "Project",
        n,
        typology: area.typology,
        caption: project.title,
        href: `/projects/${project.slug}`,
        tone: "dark",
      };
    }
    return {
      src: study.src,
      alt: study.alt,
      width: study.width,
      height: study.height,
      isPhoto: false,
      kindLabel: "AI brand study",
      n,
      typology: area.typology,
      caption: study.caption,
      tone: study.tone,
    };
  });
}

/** A wide, landscape project image for the about spread; AI panorama fallback. */
export function getPanorama() {
  for (const p of getPublishedProjects()) {
    const wide = p.images.find((im) => im.width / im.height >= 1.6);
    if (wide) {
      return {
        src: wide.src,
        alt: wide.alt,
        caption: `${p.title} — ${p.location}`,
        width: wide.width,
        height: wide.height,
        isPhoto: true,
        kindLabel: "Project",
      };
    }
  }
  return { ...panorama, isPhoto: false, kindLabel: "AI brand imagery — not built work" };
}

/**
 * Hero cursor-trail sources — lightweight ~480px WebP thumbnails of project
 * heroes (public/images/trail/), generated so the trail stays cheap to load
 * and decode. Falls back to plate images if the thumbnails are absent.
 */
const TRAIL_THUMBS = [
  "/images/trail/01.webp",
  "/images/trail/02.webp",
  "/images/trail/03.webp",
  "/images/trail/04.webp",
  "/images/trail/05.webp",
  "/images/trail/06.webp",
  "/images/trail/07.webp",
  "/images/trail/08.webp",
  "/images/trail/09.webp",
  "/images/trail/10.webp",
];

export function getTrailImages(): { src: string; alt: string }[] {
  return TRAIL_THUMBS.map((src) => ({ src, alt: "" }));
}
