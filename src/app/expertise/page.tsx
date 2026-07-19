import Link from "next/link";
import { expertiseAreas, services } from "@/content/expertise";
import { typologiesWithPublishedWork, buildFilterQuery } from "@/lib/projects";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Expertise",
  description:
    "Typologies and services offered by Archi-tec Allied: residential, commercial, institutional, industrial, interiors and master planning.",
  path: "/expertise",
});

/**
 * Informational page. An expertise item links to the filtered project grid
 * ONLY when at least one published project exists in that typology.
 */
export default function ExpertisePage() {
  const linkable = new Set(typologiesWithPublishedWork());

  return (
    <div className="mx-auto max-w-[1360px] px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <p className="label text-ink-muted">Expertise</p>
      <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-tight">
        What we design
      </h1>

      <ul className="mt-16 border-t rule">
        {expertiseAreas.map((area, i) => (
          <li
            key={area.typology}
            className="grid gap-4 border-b rule py-8 md:grid-cols-12"
          >
            <span aria-hidden className="text-2xl font-light text-gold md:col-span-1">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="text-2xl font-normal md:col-span-4">
              {area.typology}
            </h2>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-ink-muted">{area.description}</p>
              {linkable.has(area.typology) && (
                <Link
                  href={`/projects${buildFilterQuery({ typology: area.typology })}`}
                  className="label mt-4 inline-flex min-h-11 items-center text-navy underline decoration-gold underline-offset-4"
                >
                  View {area.typology.toLowerCase()} projects
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>

      <section aria-labelledby="services-h" className="mt-24 grid gap-8 md:grid-cols-12">
        <h2 id="services-h" className="text-2xl font-normal md:col-span-5">
          Services
        </h2>
        <ul className="md:col-span-6 md:col-start-7">
          {services.map((s) => (
            <li key={s} className="border-b rule py-4 text-lg">
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
