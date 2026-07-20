"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/**
 * HERO IMAGE TRAIL — images spawn at the cursor as it moves across the
 * hero and fade away behind it (the Codrops "image trail" pattern,
 * implemented per the official GSAP skills: pooled elements, transform/
 * autoAlpha-only tweens, scoped useGSAP with automatic cleanup).
 *
 * Strictly additive: the hero composition is unchanged; this is an
 * absolutely positioned, pointer-events-none overlay. Active only when
 * (pointer: fine) and (min-width: 1024px) and motion is not reduced —
 * touch, mobile and reduced-motion users never see it.
 *
 * Image sources come from the photo pipeline (lib/photos.ts): AI study
 * plates today, the practice's real photographs automatically once they
 * are dropped into /public/images/photos/.
 */
const POOL = 7;
const SPAWN_DISTANCE = 150; // px of cursor travel between spawns

export function HeroImageTrail({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = ref.current;
      const hero = container?.parentElement;
      if (!container || !hero || images.length === 0) return;

      const mm = gsap.matchMedia();
      mm.add(
        "(pointer: fine) and (min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const items = Array.from(
            container.querySelectorAll<HTMLElement>("[data-trail]"),
          );
          let last = { x: -9999, y: -9999 };
          let slot = 0;
          let imgIndex = 0;

          const spawn = (x: number, y: number) => {
            const el = items[slot];
            slot = (slot + 1) % items.length;
            imgIndex = (imgIndex + 1) % images.length;
            const img = el.querySelector("img");
            if (img) img.src = images[imgIndex].src;

            gsap.killTweensOf(el);
            gsap
              .timeline()
              .fromTo(
                el,
                {
                  x,
                  y,
                  xPercent: -50,
                  yPercent: -50,
                  scale: 0.55,
                  rotation: gsap.utils.random(-9, 9),
                  autoAlpha: 0,
                },
                {
                  scale: 1,
                  autoAlpha: 1,
                  duration: 0.4,
                  ease: "power2.out",
                },
              )
              .to(
                el,
                {
                  y: y + 40,
                  scale: 0.92,
                  autoAlpha: 0,
                  duration: 0.7,
                  ease: "power2.in",
                },
                "+=0.25",
              );
          };

          const onMove = (e: MouseEvent) => {
            const r = hero.getBoundingClientRect();
            const x = e.clientX - r.left;
            const y = e.clientY - r.top;
            if (Math.hypot(x - last.x, y - last.y) > SPAWN_DISTANCE) {
              last = { x, y };
              spawn(x, y);
            }
          };

          hero.addEventListener("mousemove", onMove);
          return () => hero.removeEventListener("mousemove", onMove);
        },
      );
      return () => mm.revert();
    },
    { scope: ref, dependencies: [images] },
  );

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[5] hidden overflow-hidden lg:block"
    >
      {Array.from({ length: POOL }).map((_, i) => (
        <div
          key={i}
          data-trail
          className="invisible absolute left-0 top-0 w-56 border border-beige/25 opacity-0 shadow-none"
        >
          {/* Plain img: sources swap rapidly from a tiny local set; no
              next/image optimisation round-trips needed for a 224px ghost. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[0]?.src}
            alt=""
            width={224}
            height={168}
            className="block aspect-[4/3] w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
