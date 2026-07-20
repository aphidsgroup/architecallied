"use client";

import { useState } from "react";
import { PlayIcon } from "lucide-react";
import { curatedFilms } from "@/content/media";
import { cn } from "@/lib/utils";

/**
 * SCREENING ROOM — the film list controls the stage (pattern researched via
 * Mobbin: A24's stacked-title film index over a full-bleed still). Titles
 * are set monumentally in Fraunces; the active title is gold italic and
 * drives a cinematic 21:9-ish stage. Nothing loads from YouTube until the
 * visitor presses play on the stage (privacy-enhanced youtube-nocookie).
 * Hover, focus, click and touch all select; keyboard fully supported.
 */
export function ScreeningRoom() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState<number | null>(null);
  const film = curatedFilms[active];

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      {/* Film index */}
      <ol className="lg:col-span-5" aria-label="Curated films">
        {curatedFilms.map((f, i) => (
          <li key={f.youtubeId} className="border-b border-beige/10 first:border-t">
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-expanded={active === i}
              className="group flex w-full items-baseline gap-5 py-5 text-left"
            >
              <span className={cn("label transition-colors", active === i ? "text-gold" : "text-beige-muted")}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${f.youtubeId}/hqdefault.jpg`}
                alt=""
                width={96}
                height={54}
                className={cn(
                  "hidden aspect-video w-24 shrink-0 self-center border object-cover transition-opacity sm:block",
                  active === i ? "border-gold/60 opacity-100" : "border-beige/15 opacity-60",
                )}
              />
              <span>
                <span
                  className={cn(
                    "font-display text-[clamp(1.4rem,2.6vw,2.25rem)] font-light leading-tight transition-colors",
                    active === i ? "italic text-gold" : "text-cream group-hover:text-beige",
                  )}
                >
                  {f.title}
                </span>
                <span className="mt-1 block text-sm text-beige-muted">{f.attribution}</span>
              </span>
            </button>
          </li>
        ))}
        <li className="pt-5 text-sm text-beige-muted">
          Curated viewing from other voices — not our own work. Films load
          from YouTube only when you press play.
        </li>
      </ol>

      {/* Stage */}
      <div className="lg:col-span-7">
        <div className="relative aspect-video w-full overflow-hidden border border-beige/15 bg-navy-soft">
          {playing === active ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${film.youtubeId}?autoplay=1&rel=0`}
              title={`${film.title} — ${film.attribution}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(active)}
              aria-label={`Play film: ${film.title} — ${film.attribution} (loads YouTube)`}
              className="group absolute inset-0 h-full w-full text-left"
            >
              {/* Real video thumbnail (YouTube CDN) under a navy scrim for
                  text legibility; graceful navy field if it fails to load. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${film.youtubeId}/maxresdefault.jpg`}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-95"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-navy via-navy/45 to-navy/15"
              />
              {/* authored stage: ghost numeral + datum + title */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-10 font-display text-[11rem] font-light leading-none text-cream/10 md:text-[15rem]"
              >
                {String(active + 1).padStart(2, "0")}
              </span>
              <span aria-hidden className="absolute left-8 top-8 block h-px w-20 bg-gold" />
              <span className="absolute bottom-8 left-8 right-8">
                <span className="label text-gold">{film.attribution}</span>
                <span className="mt-3 block font-display text-2xl font-light leading-snug text-cream md:text-4xl">
                  {film.title}
                </span>
                <span className="mt-5 inline-flex items-center gap-3 text-beige-muted transition-colors group-hover:text-gold">
                  <span className="flex size-12 items-center justify-center border border-current">
                    <PlayIcon aria-hidden className="size-4" />
                  </span>
                  <span className="label">Play — loads YouTube</span>
                </span>
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
