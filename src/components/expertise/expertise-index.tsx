"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ResolvedImage } from "@/lib/photos";
import type { ExpertiseArea } from "@/content/expertise";
import { cn } from "@/lib/utils";

/**
 * Expertise index with a study stage: hovering, focusing or tapping a
 * typology row shows its plate from the study series. Desktop: sticky
 * stage on the right. Mobile/touch: the plate renders inline beneath the
 * active row — no hover dependency. Every row is a real button
 * (aria-expanded); project links appear only for published typologies.
 */
export function ExpertiseIndex({
  areas,
  linkable,
  stages,
}: {
  areas: ExpertiseArea[];
  linkable: string[];
  stages: ResolvedImage[];
}) {
  const [active, setActive] = useState(0);
  const linkSet = new Set(linkable);

  const stage = (i: number, cls?: string) => {
    const s = stages[i];
    if (!s) return null;
    return (
      <figure className={cls}>
        <Image
          src={s.src}
          alt={s.alt}
          width={s.width}
          height={s.height}
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="aspect-[4/3] w-full border rule object-cover"
        />
        <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm text-ink-muted">
          <span>Plate {s.n} — {s.caption}</span>
          <span className="label shrink-0 text-gold-ink">{s.kindLabel}</span>
        </figcaption>
      </figure>
    );
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <ol className="lg:col-span-6">
        {areas.map((area, i) => (
          <li key={area.typology} className="border-t rule last:border-b">
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-expanded={active === i}
              data-active={active === i}
              className="group relative flex w-full items-baseline gap-5 py-7 text-left"
            >
              <span
                aria-hidden
                className={cn(
                  "font-display text-2xl transition-colors",
                  active === i ? "text-gold-ink" : "text-ink-muted/60",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="min-w-0">
                <span
                  className={cn(
                    "block font-display text-[clamp(1.8rem,4vw,3.25rem)] font-light leading-none transition-colors",
                    active === i ? "text-navy" : "text-ink-muted",
                  )}
                >
                  {area.typology}
                </span>
                <span
                  className={cn(
                    "mt-3 block max-w-md text-sm leading-relaxed text-ink-muted transition-opacity md:text-base",
                    active === i ? "opacity-100" : "opacity-60",
                  )}
                >
                  {area.description}
                </span>
              </span>
              <span aria-hidden className="filter-active-line absolute -bottom-px left-0 h-0.5 w-full bg-gold" />
            </button>
            {linkSet.has(area.typology) && (
              <Link
                href={`/projects?typology=${encodeURIComponent(area.typology)}`}
                className="label mb-5 inline-flex min-h-11 items-center text-navy underline decoration-gold underline-offset-4"
              >
                View {area.typology.toLowerCase()} projects
              </Link>
            )}
            {/* Mobile: plate inline under active row */}
            {active === i && <div className="pb-7 lg:hidden">{stage(i)}</div>}
          </li>
        ))}
      </ol>
      <div className="hidden lg:col-span-5 lg:col-start-8 lg:block">
        <div className="sticky top-24">{stage(active, "card-enter")}</div>
      </div>
    </div>
  );
}
