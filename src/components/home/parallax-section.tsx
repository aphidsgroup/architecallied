"use client";

import { useRef, useLayoutEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * ParallaxSection — wraps any content in a GSAP ScrollTrigger-driven parallax.
 * The inner content translates on the Y axis as the section scrolls into and
 * out of view, creating a subtle depth/layering effect between sections.
 *
 * Props:
 *  - speed: multiplier for the parallax offset. 0 = no movement, 1 = full scroll height.
 *           Typical range: 0.1 (subtle) – 0.3 (pronounced). Default: 0.15
 *  - direction: "up" | "down" — which way the content drifts. Default: "up"
 *  - className: outer wrapper class (controls layout, padding, colour, etc.)
 *  - innerClassName: inner translateY target (keep this just the content wrapper)
 */
export function ParallaxSection({
  children,
  speed = 0.15,
  direction = "up",
  className,
  innerClassName,
  as: Tag = "section",
  ...rest
}: {
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
  innerClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  const outerRef = useRef<HTMLElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Dynamic import to keep the SSR bundle clean
    let ctx: { revert: () => void } | null = null;

    async function init() {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      if (!outerRef.current || !innerRef.current) return;

      const sign = direction === "up" ? -1 : 1;
      const yAmount = outerRef.current.offsetHeight * speed;

      ctx = gsap.context(() => {
        gsap.fromTo(
          innerRef.current,
          { y: sign * yAmount * -0.5 },
          {
            y: sign * yAmount * 0.5,
            ease: "none",
            scrollTrigger: {
              trigger: outerRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      }, outerRef);
    }

    init();

    return () => {
      ctx?.revert();
    };
  }, [speed, direction]);

  return (
    <Tag ref={outerRef} className={cn("overflow-hidden", className)} {...rest}>
      <div ref={innerRef} className={cn("will-change-transform", innerClassName)}>
        {children}
      </div>
    </Tag>
  );
}

/**
 * ParallaxHeading — a lightweight heading-only parallax that makes the
 * section heading drift upward subtly as the user scrolls past it.
 * Use this inside normal <section> elements (no overflow:hidden needed).
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
        // Fade + rise in when entering viewport
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
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
