import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  buildFilterQuery,
  filterProjects,
  getLocations,
  parseFilters,
} from "@/lib/projects";
import type { Project } from "@/content/projects";

const make = (over: Partial<Project>): Project => ({
  slug: "s",
  title: "t",
  location: "Chennai",
  typology: "Residential",
  status: "Completed",
  images: [],
  published: true,
  ...over,
});

describe("parseFilters", () => {
  const locations = ["Chennai", "Bhubaneswar"];
  it("accepts valid values", () => {
    expect(
      parseFilters(
        { typology: "Residential", location: "Chennai", status: "Design" },
        locations,
      ),
    ).toEqual({ typology: "Residential", location: "Chennai", status: "Design" });
  });
  it("drops unknown/malicious values", () => {
    expect(
      parseFilters(
        { typology: "<script>", location: "Paris", status: "Nope" },
        locations,
      ),
    ).toEqual({ typology: undefined, location: undefined, status: undefined });
  });
  it("takes first value of arrays", () => {
    expect(
      parseFilters({ typology: ["Commercial", "Residential"] }, locations)
        .typology,
    ).toBe("Commercial");
  });
});

describe("filterProjects", () => {
  const projects = [
    make({ slug: "a", typology: "Residential", location: "Chennai", status: "Completed" }),
    make({ slug: "b", typology: "Commercial", location: "Bhubaneswar", status: "Design" }),
  ];
  it("filters by each dimension and combines", () => {
    expect(filterProjects(projects, { typology: "Commercial" })).toHaveLength(1);
    expect(filterProjects(projects, { location: "Chennai" })[0].slug).toBe("a");
    expect(
      filterProjects(projects, { typology: "Residential", status: "Design" }),
    ).toHaveLength(0);
    expect(filterProjects(projects, {})).toHaveLength(2);
  });
});

describe("getLocations / buildFilterQuery", () => {
  it("dedupes and sorts locations", () => {
    expect(
      getLocations([make({}), make({ location: "Bhubaneswar" }), make({})]),
    ).toEqual(["Bhubaneswar", "Chennai"]);
  });
  it("builds a canonical query string", () => {
    expect(buildFilterQuery({})).toBe("");
    expect(buildFilterQuery({ typology: "Residential", status: "Design" })).toBe(
      "?typology=Residential&status=Design",
    );
  });
});

describe("fixture/production exclusion", () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();
  });

  it("sitemap sources contain no fixtures and no conditional routes", async () => {
    const sitemap = (await import("@/app/sitemap")).default;
    const urls = sitemap().map((e) => e.url);
    expect(urls.some((u) => u.includes("fixture"))).toBe(false);
    for (const banned of ["/about/principal", "/about/people", "/clients", "/insights", "/careers"]) {
      expect(urls.some((u) => u.endsWith(banned))).toBe(false);
    }
    // Launch-capable routes present
    for (const route of ["/projects", "/expertise", "/about", "/contact", "/privacy"]) {
      expect(urls.some((u) => u.endsWith(route))).toBe(true);
    }
  });

  it("getPublishedProjects never returns fixtures even when enabled", async () => {
    vi.stubEnv("NEXT_PUBLIC_ENABLE_FIXTURES", "true");
    const { getPublishedProjects, getVisibleProjects } = await import("@/lib/projects");
    expect(getPublishedProjects().every((p) => !p.slug.startsWith("fixture-"))).toBe(true);
    // In non-production test env with the flag on, fixtures ARE visible…
    expect(getVisibleProjects().some((p) => p.slug.startsWith("fixture-"))).toBe(true);
    // …and every fixture is unmistakably labelled.
    getVisibleProjects()
      .filter((p) => p.slug.startsWith("fixture-"))
      .forEach((p) => expect(p.title).toMatch(/^\[FIXTURE\]/));
  });

  it("fixtures stay hidden when flag is off", async () => {
    vi.stubEnv("NEXT_PUBLIC_ENABLE_FIXTURES", "false");
    const { getVisibleProjects } = await import("@/lib/projects");
    expect(getVisibleProjects().some((p) => p.slug.startsWith("fixture-"))).toBe(false);
  });
});
