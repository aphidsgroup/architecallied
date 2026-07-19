"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Restrained GSAP entrance for section headings (motion spec):
 * opacity/translate once on scroll into view; scoped, reverted on cleanup.
 *
 * Visibility guarantee: the element is NOT hidden on mount. The `from` state
 * (opacity:0, y:24) is applied only inside the onEnter callback, immediately
 * before the tween begins. This ensures content is always readable if:
 *   - JS fails or is slow to hydrate
 *   - ScrollTrigger never fires (headless browser, no scroll)
 *   - prefers-reduced-motion is active
 *   - The screenshot tool captures without scrolling
 *
 * Skipped entirely under prefers-reduced-motion.
 */
export function SectionHeading({
  as: Tag = "h2",
  children,
  className,
  id,
}: {
  as?: "h1" | "h2" | "h3";
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const el = ref.current?.querySelector("[data-sh]");
      if (!el) return;

      ScrollTrigger.create({
        trigger: ref.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          // Apply hidden state only at the moment animation begins —
          // never before — so content is visible if this callback never fires.
          gsap.fromTo(
            el,
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          );
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref}>
      <Tag data-sh id={id} className={cn("font-normal", className)}>
        {children}
      </Tag>
    </div>
  );
}
