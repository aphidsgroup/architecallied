"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Direction B core interaction: a practice index (typologies, offices,
 * principles — no invented projects) controlling a visual preview stage.
 * Desktop: hover/focus switches the stage; keyboard fully supported (the
 * entries are buttons; focus = activation). Touch/mobile: the stage is
 * rendered inline beneath the active entry (accordion pattern), no hover
 * dependency. Stage compositions are abstract brand geometry derived from
 * the logo's 45° language — explicitly NOT project imagery.
 */
export interface IndexEntry {
  n: string;
  title: string;
  category: "Typology" | "Office" | "Principle";
  meta: string;
  description: string;
  /** plane composition variant */
  variant: 0 | 1 | 2 | 3 | 4 | 5;
}

function Stage({ entry, className }: { entry: IndexEntry; className?: string }) {
  const planes: Record<number, React.ReactNode> = {
    0: (
      <>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-navy-soft" style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0 100%)" }} />
        <div className="absolute bottom-0 right-[12%] h-3/4 w-1/4 bg-beige/90" style={{ clipPath: "polygon(0 18%, 100% 0, 100% 100%, 0 100%)" }} />
      </>
    ),
    1: (
      <>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-navy-soft" style={{ clipPath: "polygon(0 0, 100% 0, 55% 100%, 0 100%)" }} />
        <div className="absolute bottom-[15%] left-[30%] h-1/2 w-2/5 border border-gold/60" />
      </>
    ),
    2: (
      <>
        <div className="absolute inset-x-[15%] top-0 h-2/3 bg-navy-soft" style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 50% 100%, 0 70%)" }} />
        <div className="absolute bottom-[10%] left-[20%] h-px w-3/5 bg-gold" />
      </>
    ),
    3: (
      <>
        <div className="absolute bottom-0 left-[8%] h-4/5 w-1/3 bg-beige/90" />
        <div className="absolute bottom-0 left-[28%] h-3/5 w-1/3 bg-navy-soft" style={{ clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 100%)" }} />
      </>
    ),
    4: (
      <>
        <div className="absolute inset-y-[12%] right-[10%] w-1/2 border border-beige/40" />
        <div className="absolute inset-y-[24%] right-[18%] w-1/2 bg-navy-soft" />
        <div className="absolute bottom-[24%] right-[18%] h-px w-1/2 bg-gold" />
      </>
    ),
    5: (
      <>
        <div className="absolute bottom-0 left-0 h-2/3 w-full bg-navy-soft" style={{ clipPath: "polygon(0 100%, 0 30%, 35% 0, 100% 55%, 100% 100%)" }} />
        <div className="absolute bottom-[20%] left-[12%] h-px w-1/4 bg-gold" />
      </>
    ),
  };
  return (
    <div className={cn("relative overflow-hidden bg-navy", className)} aria-hidden={false}>
      {planes[entry.variant]}
      <span className="absolute left-6 top-4 font-space text-[clamp(4rem,8vw,7.5rem)] font-light leading-none text-cream/20">
        {entry.n}
      </span>
      <div className="absolute inset-x-6 bottom-5">
        <p className="label text-gold">{entry.category} — {entry.meta}</p>
        <p className="mt-2 font-space text-xl text-cream md:text-2xl">{entry.title}</p>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-beige-muted">{entry.description}</p>
        <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-beige-muted/70">
          Abstract brand study — not project imagery
        </p>
      </div>
    </div>
  );
}

export function ArchiveIndex({ entries }: { entries: IndexEntry[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-0 lg:grid-cols-12">
      {/* Index list */}
      <ul className="lg:col-span-6" role="list">
        {entries.map((e, i) => (
          <li key={e.n} className="border-b rule">
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-expanded={active === i}
              data-active={active === i}
              className="group relative flex w-full items-baseline gap-5 py-5 pr-4 text-left"
            >
              <span className={cn("font-space text-sm transition-colors", active === i ? "text-gold" : "text-ink-muted")}>
                {e.n}
              </span>
              <span className={cn(
                "font-space text-[clamp(1.5rem,3.2vw,2.75rem)] font-light leading-none transition-[letter-spacing,color] duration-300 motion-reduce:transition-none",
                active === i ? "text-navy tracking-wide" : "text-ink-muted",
              )}>
                {e.title}
              </span>
              <span className="label ml-auto hidden text-ink-muted sm:inline">{e.category}</span>
              {/* kinetic datum: grows under active entry */}
              <span aria-hidden className="filter-active-line absolute -bottom-px left-0 h-0.5 w-full bg-gold" />
            </button>
            {/* Mobile / touch: stage inline under active entry */}
            {active === i && (
              <div className="lg:hidden">
                <Stage entry={e} className="mb-5 aspect-[4/3] w-full" />
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Desktop stage */}
      <div className="hidden lg:col-span-6 lg:block lg:pl-12">
        <div className="sticky top-24">
          <Stage key={entries[active].n} entry={entries[active]} className="aspect-[4/3] w-full card-enter" />
        </div>
      </div>
    </div>
  );
}
