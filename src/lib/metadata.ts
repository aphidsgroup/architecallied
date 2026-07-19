import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * SITE_URL must be set to the production domain before deployment
 * (see .env.local.example and CONTENT_REQUIRED.md). The placeholder keeps
 * canonicals well-formed during development.
 */
export const SITE_URL =
  process.env.SITE_URL ?? "https://architecallied.example.com";

export function absoluteUrl(path: string): string {
  return `${SITE_URL.replace(/\/$/, "")}${path}`;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url: absoluteUrl(path),
      siteName: site.name,
      type: "website",
      images: [{ url: absoluteUrl("/brand/og-default.png"), width: 1200, height: 630, alt: `${site.name} logo` }],
    },
  };
}
