import fs from "node:fs";
import path from "node:path";
import { studySeries, panorama } from "@/content/media";

/**
 * PHOTO PIPELINE — real photography drop-in system (server-only).
 *
 * Real architectural photographs cannot be sourced from the build
 * environment (external image hosts are unreachable) and must not be
 * fabricated. Instead, every imagery slot on the site resolves through
 * this module: if a correctly named file exists in /public/images/photos/,
 * the REAL PHOTO is used everywhere automatically on the next build/dev
 * reload; otherwise the slot falls back to the AI-generated study plate.
 *
 * To switch the whole site to real photography, drop these files in
 * /public/images/photos/ (JPG, ~1600×1200 for plates, ~2400×800 panorama):
 *   photo-residential.jpg   photo-commercial.jpg   photo-institutional.jpg
 *   photo-industrial.jpg    photo-interiors.jpg    photo-planning.jpg
 *   photo-panorama.jpg
 * Licensing/attribution: record each file's source in ATTRIBUTIONS.md.
 */

const PHOTO_DIR = path.join(process.cwd(), "public", "images", "photos");
const FILES = [
  "photo-residential.jpg",
  "photo-commercial.jpg",
  "photo-institutional.jpg",
  "photo-industrial.jpg",
  "photo-interiors.jpg",
  "photo-planning.jpg",
] as const;

export interface ResolvedImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** true → real photograph supplied by the practice; false → AI study plate */
  isPhoto: boolean;
  /** Caption/kind label the UI must show. */
  kindLabel: string;
  n: string;
  typology: string;
  caption: string;
  tone: "light" | "dark";
}

function exists(file: string): boolean {
  try {
    return fs.existsSync(path.join(PHOTO_DIR, file));
  } catch {
    return false;
  }
}

/** Resolve the six typology slots (index 0–5 matching studySeries). */
export function getPlates(): ResolvedImage[] {
  return studySeries.map((s, i) => {
    const file = FILES[i];
    if (file && exists(file)) {
      return {
        src: `/images/photos/${file}`,
        alt: `${s.typology} — photograph from the practice`,
        width: 1600,
        height: 1200,
        isPhoto: true,
        kindLabel: "Photograph",
        n: s.n,
        typology: s.typology,
        caption: s.caption,
        tone: s.tone,
      };
    }
    return {
      src: s.src,
      alt: s.alt,
      width: s.width,
      height: s.height,
      isPhoto: false,
      kindLabel: "AI brand study",
      n: s.n,
      typology: s.typology,
      caption: s.caption,
      tone: s.tone,
    };
  });
}

export function getPanorama() {
  if (exists("photo-panorama.jpg")) {
    return {
      src: "/images/photos/photo-panorama.jpg",
      alt: "Panoramic photograph supplied by the practice",
      caption: panorama.caption,
      width: panorama.width,
      height: panorama.height,
      isPhoto: true,
      kindLabel: "Photograph",
    };
  }
  return { ...panorama, isPhoto: false, kindLabel: "AI brand imagery — not built work" };
}

/** Sources for the hero cursor trail (client component receives these). */
export function getTrailImages(): { src: string; alt: string }[] {
  return getPlates().map((p) => ({ src: p.src, alt: "" }));
}
