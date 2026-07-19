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
 * Direction A expertise: a large typology index — oversized Fraunces
 * numerals and titles with the description on the editorial right column.
 * Items link to the filtered archive only when published work exists.
 */
export default function ExpertisePage() {
  const linkable = new Set(typologiesWithPublishedWork());

  return (
    <div className="px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <p className="label text-ink-muted">02 — Expertise</p>
      <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.02]">
        Six typologies, <em className="text-gold-ink">one method</em>
      </h1>

      <ol className="mt-20">
        {expertiseAreas.map((area, i) => (
          <li key={area.typology} className="group border-t rule last:border-b">
            <div className="grid items-baseline gap-3 py-9 md:grid-cols-12 md:gap-6">
              <span
                aria-hidden
                className="font-display text-2xl text-gold-ink/80 md:col-span-1"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-[clamp(1.9rem,4.5vw,3.5rem)] font-light leading-none md:col-span-5">
                {area.typology}
              </h2>
              <div className="md:col-span-5 md:col-start-8">
                <p className="leading-relaxed text-ink-muted">
                  {area.description}
                </p>
                {linkable.has(area.typology) && (
                  <Link
                    href={`/projects${buildFilterQuery({ typology: area.typology })}`}
                    className="label mt-4 inline-flex min-h-11 items-center text-navy underline decoration-gold underline-offset-4 hover:text-gold-ink"
                  >
                    View {area.typology.toLowerCase()} projects
                  </Link>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <section
        aria-labelledby="services-h"
        className="mt-28 grid gap-10 border-t-2 border-navy pt-14 md:grid-cols-12"
      >
        <h2
          id="services-h"
          className="font-display text-3xl font-light md:col-span-5"
        >
          Services
        </h2>
        <ul className="md:col-span-6 md:col-start-7">
          {services.map((s, i) => (
            <li
              key={s}
              className="flex items-baseline gap-5 border-b rule py-4 text-lg"
            >
              <span aria-hidden className="font-display text-sm text-gold-ink">
                {String(i + 1).padStart(2, "0")}
              </span>
              {s}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
