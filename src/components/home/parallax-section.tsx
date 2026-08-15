"use client";

import { useRef, useLayoutEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * ParallaxHeading — heading fades and rises into view when it enters the viewport.
 * Uses GSAP ScrollTrigger for a smooth entrance animation.
 */
export function ParallaxHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx: { revert: () => void } | null = null;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!ref.current) return;

      ctx = gsap.context(() => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          },
        );
      }, ref);
    }

    init();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
}
