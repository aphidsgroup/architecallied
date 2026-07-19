import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/metadata";
import { getPublishedProjects } from "@/lib/projects";

/**
 * Launch-capable routes plus PUBLISHED projects only. Conditional routes
 * (/about/principal, /about/people, /clients, /insights, /careers) and dev
 * fixtures never appear here (tests in src/lib/__tests__/projects.test.ts).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["/", "/projects", "/expertise", "/about", "/contact", "/privacy"];
  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
    ...getPublishedProjects().map((p) => ({
      url: absoluteUrl(`/projects/${p.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
