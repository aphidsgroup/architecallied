"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "lucide-react";

/**
 * Back-to-top button — glassmorphism treatment in the site palette
 * (translucent navy glass, gold arrow, fine beige rule). Appears fixed at
 * the bottom-right after scrolling past one viewport; scrolls smoothly to
 * the top (instantly under prefers-reduced-motion). Sits below the header
 * (z-40 < header z-50) and is raised to bottom-24 so it stacks ABOVE the
 * always-visible WhatsApp button (bottom-6) without overlapping it.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={[
        "fixed bottom-24 right-6 z-40 inline-flex size-12 items-center justify-center md:size-14",
        // glassmorphism in brand palette
        "rounded-full border border-beige/25 bg-navy/30 text-gold shadow-lg shadow-navy/20 backdrop-blur-md",
        "transition-all duration-300 hover:border-gold/50 hover:bg-navy/50 hover:text-gold",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      ].join(" ")}
    >
      <ArrowUpIcon aria-hidden className="size-5 md:size-6" />
    </button>
  );
}
