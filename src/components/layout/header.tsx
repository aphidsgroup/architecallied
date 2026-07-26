"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MenuIcon, XIcon } from "lucide-react";
import { nav, site } from "@/content/site";
import { TYPOLOGIES } from "@/content/projects";
import { getPublishedProjects } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * Version 2.0 navigation (client correction, deck slides 132–134):
 * a PERSISTENT top navigation bar on every page — scaled-up logo, no
 * wordmark text ("name to be removed"), horizontal links, sticky while
 * scrolling ("column on top of every page scrolling").
 *
 * - At the top of the home hero the bar is transparent with light text;
 *   after scrolling (and on all inner pages once scrolled) it becomes a
 *   solid cream bar with a bottom rule and dark text.
 * - Desktop: inline links. Mobile: an accessible disclosure panel
 *   (aria-expanded/-controls, Escape to close).
 * - Project categories are offered as quick links inside the mobile panel.
 */

// Categories that actually have published projects (built at module load).
const activeCategories = TYPOLOGIES.filter((t) =>
  getPublishedProjects().some((p) => p.typology === t),
);

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const lightText = onHome && !scrolled && !open;
  const solid = scrolled || open || !onHome;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid ? "border-b rule bg-cream/95 backdrop-blur-sm" : "bg-transparent",
        lightText && "surface-dark",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 md:h-24 md:px-8">
        <Link href="/" aria-label={`${site.name} — home`} className="flex items-center">
          <Image
            src={lightText ? "/brand/logo-gold.png" : "/brand/logo-black.png"}
            alt={site.name}
            width={132}
            height={66}
            priority
            className="h-11 w-auto md:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-10">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "label inline-flex min-h-11 items-center underline-offset-8 transition-colors",
                      lightText ? "text-beige hover:text-gold" : "text-navy hover:text-gold-ink",
                      active &&
                        "underline decoration-gold decoration-1 " +
                          (lightText ? "text-gold" : "text-gold-ink"),
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className={cn(
            "inline-flex size-11 items-center justify-center lg:hidden",
            lightText ? "text-beige" : "text-navy",
          )}
        >
          {open ? <XIcon aria-hidden className="size-6" /> : <MenuIcon aria-hidden className="size-6" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {/* Mobile disclosure panel */}
      {open && (
        <div id="mobile-nav" className="border-t rule bg-cream lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-[1440px] px-4 py-4">
            <ul className="flex flex-col">
              {nav.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href} className="border-b rule">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className="flex min-h-14 items-center font-display text-2xl font-light text-navy"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {activeCategories.length > 0 && (
              <div className="mt-5">
                <p className="label text-ink-muted">Project categories</p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {activeCategories.map((c) => (
                    <li key={c}>
                      <Link
                        href={`/projects?typology=${encodeURIComponent(c)}`}
                        onClick={() => setOpen(false)}
                        className="inline-flex min-h-11 items-center text-navy underline decoration-gold underline-offset-4"
                      >
                        {c}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex min-h-11 items-center text-sm text-ink-muted"
            >
              {site.email}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
