"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Direction C signature: ONE pinned narrative sequence (the site's only
 * pinned element, per motion rules). Four practice principles presented as
 * architectural planes that slide/clip while an oversized numeral advances
 * and the datum line extends. Fail-visible: all four panels are stacked and
 * fully readable if GSAP never runs; the pin only choreographs them.
 * Under prefers-reduced-motion or below 768px the sequence renders as
 * simple stacked panels with no pinning.
 */
const STEPS = [
  { n: "01", title: "Context first", body: "Every site brings its own climate, street and habits of use. The design grows from what is already there." },
  { n: "02", title: "Clarity of plan", body: "Simple, legible organisation — buildings that people understand without instruction." },
  { n: "03", title: "Built to endure", body: "Materials and details chosen for how they age, not how they photograph." },
  { n: "04", title: "Careful stewardship", body: "Budgets, approvals and construction held to the same standard as the drawing." },
];

export function SpatialSequence() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const steps = gsap.utils.toArray<HTMLElement>("[data-step]");
        // Stack panels for the pinned choreography (JS-applied, so no-JS = readable stack)
        gsap.set(steps.slice(1), { yPercent: 100 });
        gsap.set("[data-plane]", { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "+=2400",
            pin: "[data-viewport]",
            scrub: 0.6,
          },
        });
        steps.forEach((s, i) => {
          if (i === 0) return;
          tl.to(steps[i - 1].querySelector("[data-copy]"), { opacity: 0.25, duration: 0.35 }, i)
            .to(s, { yPercent: 0, duration: 1, ease: "none" }, i)
            .to("[data-datum-fill]", { scaleX: (i + 1) / STEPS.length, duration: 1, ease: "none" }, i);
        });
        tl.to("[data-plane]", { clipPath: "polygon(0 30%, 100% 0%, 100% 100%, 0 100%)", duration: 3, ease: "none" }, 0);
        gsap.set("[data-datum-fill]", { scaleX: 1 / STEPS.length });
      });
      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <section ref={ref} aria-labelledby="c-seq-h" className="surface-dark relative bg-navy text-beige">
      <h2 id="c-seq-h" className="sr-only">Practice principles</h2>
      <div data-viewport className="relative min-h-svh overflow-hidden md:h-svh">
        {/* transforming background plane */}
        <div
          data-plane
          aria-hidden
          className="absolute inset-0 bg-navy-soft"
          style={{ clipPath: "polygon(0 55%, 100% 30%, 100% 100%, 0 100%)" }}
        />
        {/* datum progress rail */}
        <div aria-hidden className="absolute inset-x-6 top-20 md:inset-x-12">
          <div className="h-px w-full bg-beige/15" />
          <div data-datum-fill className="h-px w-full origin-left bg-gold" style={{ transform: "scaleX(0.25)" }} />
        </div>

        {STEPS.map((s) => (
          <article
            key={s.n}
            data-step
            className="relative flex min-h-svh flex-col justify-center px-6 py-24 md:absolute md:inset-0 md:px-12"
          >
            <div data-copy className="grid gap-6 md:grid-cols-12 md:items-end">
              <span aria-hidden className="font-archivo text-[clamp(6rem,22vh,16rem)] font-thin leading-none text-cream/15 md:col-span-5" style={{ fontStretch: "125%" }}>
                {s.n}
              </span>
              <div className="md:col-span-6 md:col-start-7 md:pb-10">
                <h3 className="font-archivo text-[clamp(2rem,5vw,4rem)] font-light leading-tight text-cream" style={{ fontStretch: "110%" }}>
                  {s.title}
                </h3>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-beige-muted">{s.body}</p>
                <p className="label mt-8 text-gold">Principle {s.n} / 04</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
