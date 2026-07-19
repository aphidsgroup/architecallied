"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Restrained GSAP entrance for section headings only (motion spec):
 * opacity/translate once on scroll into view; scoped, reverted on cleanup;
 * skipped entirely under prefers-reduced-motion. Content is visible by
 * default — animation only ever starts FROM a hidden state it sets itself,
 * so a failed script leaves the heading readable.
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
      gsap.from("[data-sh]", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
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
