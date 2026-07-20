"use client";

import { useState } from "react";
import { PlayIcon } from "lucide-react";
import type { Film } from "@/content/media";

/**
 * Click-to-load film embed. Nothing is requested from YouTube until the
 * visitor activates the card; then a privacy-enhanced youtube-nocookie
 * iframe loads. The resting card is an authored navy poster (no third-party
 * thumbnail requests, no CSP img-src widening).
 */
export function FilmCard({ film }: { film: Film }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="border rule">
      <div className="surface-dark relative aspect-video bg-navy">
        {playing ? (
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
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex h-full w-full flex-col justify-between p-6 text-left"
            aria-label={`Play film: ${film.title} — ${film.attribution} (loads YouTube)`}
          >
            <span className="label text-gold">{film.attribution}</span>
            <span>
              <span className="font-display text-xl font-light leading-snug text-cream md:text-2xl">
                {film.title}
              </span>
              <span className="mt-4 flex items-center gap-3 text-beige-muted transition-colors group-hover:text-gold">
                <span className="flex size-11 items-center justify-center border border-current">
                  <PlayIcon aria-hidden className="size-4" />
                </span>
                <span className="label">Play — loads YouTube</span>
              </span>
            </span>
            {/* datum corner */}
            <span aria-hidden className="absolute right-0 top-0 h-px w-16 bg-gold" />
          </button>
        )}
      </div>
      <figcaption className="flex items-baseline justify-between gap-4 px-4 py-3 text-sm text-ink-muted">
        <span>{film.title}</span>
        <span className="label shrink-0">Curated viewing</span>
      </figcaption>
    </figure>
  );
}
