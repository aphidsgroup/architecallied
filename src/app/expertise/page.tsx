import { expertiseAreas, services } from "@/content/expertise";
import { typologiesWithPublishedWork } from "@/lib/projects";
import { ExpertiseIndex } from "@/components/expertise/expertise-index";
import { pageMetadata } from "@/lib/metadata";
import { getPlates } from "@/lib/photos";

export const metadata = pageMetadata({
  title: "Expertise",
  description:
    "Typologies and services offered by Archi-tec Allied: residential, commercial, institutional, industrial, interiors and master planning.",
  path: "/expertise",
});

/**
 * Direction A expertise: the typology index drives the study-series stage —
 * each typology reveals its plate (hover/focus/tap; inline on mobile).
 */
export default function ExpertisePage() {
  return (
    <div className="px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <p className="label text-ink-muted">02 — Expertise</p>
      <h1 className="mt-4 max-w-4xl font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.02]">
        Six typologies, <em className="text-gold-ink">one method</em>
      </h1>
      <p className="mt-6 max-w-lg text-ink-muted">
        Each typology carries its own study from the practice&apos;s plate
        series — massing, light and rhythm rehearsed in the practice palette.
      </p>

      <div className="mt-16">
        <ExpertiseIndex
          areas={[...expertiseAreas]}
          linkable={typologiesWithPublishedWork()}
          stages={getPlates()}
        />
      </div>

      <section
        aria-labelledby="services-h"
        className="mt-28 grid gap-10 border-t-2 border-navy pt-14 md:grid-cols-12"
      >
        <h2 id="services-h" className="font-display text-3xl font-light md:col-span-5">
          Services
        </h2>
        <ul className="md:col-span-6 md:col-start-7">
          {services.map((s, i) => (
            <li key={s} className="flex items-baseline gap-5 border-b rule py-4 text-lg">
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
