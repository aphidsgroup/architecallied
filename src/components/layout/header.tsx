"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { nav, site } from "@/content/site";
import { TYPOLOGIES } from "@/content/projects";
import { getPublishedProjects } from "@/lib/projects";
import { cn } from "@/lib/utils";

/**
 * Version 2.0 navigation (client corrections, deck slides 132–134):
 * - Full-bleed bar: scaled-up logo + "archi-tec allied" wordmark at the
 *   far-left corner (slide 133 "logo size to be scaled up").
 * - A single "Menu" trigger at the far-right corner replaces the old
 *   "Index" button (slide 133 "alternate option instead Index") — opening a
 *   full-screen overlay with large destination links, project categories and
 *   contact details, rather than an inline horizontal link row.
 * - Sticky on every page (slide 134): transparent light-on-hero at the top,
 *   solid cream with dark text after scrolling / on inner pages.
 * - Radix Dialog powers the overlay: focus trap, Escape-to-close and focus
 *   return to the trigger are handled for us.
 */

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

  const lightText = onHome && !scrolled;
  const solid = scrolled || !onHome;

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          solid ? "border-b rule bg-cream/95 backdrop-blur-sm" : "bg-transparent",
          lightText && "surface-dark",
        )}
      >
        <div className="flex h-20 items-center justify-between px-6 md:h-24 md:px-10">
          {/* Full reload to the homepage from anywhere — a plain anchor +
              forced navigation, so the site loads fresh ("like newly opened",
              hero animations replay) rather than an in-app SPA transition.
              The full document load is intentional, so the Next.js Link rule
              is disabled here on purpose. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.assign("/");
            }}
            aria-label={`${site.name} — home (reload)`}
            className="flex items-center gap-3 md:gap-4"
          >
            <Image
              src={lightText ? "/brand/logo-gold.png" : "/brand/logo-black.png"}
              alt=""
              width={160}
              height={80}
              priority
              className="h-12 w-auto md:h-[4.25rem]"
            />
            <span
              className={cn(
                "hidden sm:inline-block text-2xl lowercase leading-none tracking-wide md:text-3xl",
                lightText ? "text-beige" : "text-navy",
              )}
            >
              {site.displayName}
            </span>
          </a>

          {/* Desktop inline navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "label transition-colors",
                    lightText ? "text-beige hover:text-gold" : "text-navy hover:text-gold-ink",
                    active && (lightText ? "text-gold" : "text-gold-ink")
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Explore trigger */}
          <DialogPrimitive.Trigger
            className={cn(
              "label flex min-h-11 items-center gap-3 transition-colors md:hidden",
              lightText ? "text-beige hover:text-gold" : "text-navy hover:text-gold-ink",
            )}
          >
            Explore
            <span aria-hidden className="block h-px w-6 bg-gold" />
          </DialogPrimitive.Trigger>
        </div>
      </header>

      {/* Full-screen menu overlay */}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-navy" />
        <DialogPrimitive.Content className="surface-dark fixed inset-0 z-[60] overflow-y-auto bg-navy focus:outline-none">
          <DialogPrimitive.Title className="sr-only">Explore</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Site navigation. Press Escape to close.
          </DialogPrimitive.Description>

          <div className="flex min-h-svh flex-col px-6 py-6 md:px-10">
            <div className="flex items-center justify-between">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.assign("/");
                }}
                aria-label={`${site.name} — home (reload)`}
              >
                <Image
                  src="/brand/logo-gold.png"
                  alt=""
                  width={160}
                  height={80}
                  className="h-12 w-auto md:h-[4.25rem]"
                />
              </a>
              <DialogPrimitive.Close className="label flex min-h-11 items-center gap-3 text-beige hover:text-gold">
                Close
                <span aria-hidden className="block h-px w-10 bg-gold" />
              </DialogPrimitive.Close>
            </div>

            <nav aria-label="Primary" className="my-auto py-10">
              <ol>
                {nav.map((item, i) => {
                  const active = pathname.startsWith(item.href);
                  return (
                    <li key={item.href} className="group border-b border-beige/10">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className="flex items-baseline gap-6 py-4 md:gap-10 md:py-6"
                      >
                        <span className="label w-8 text-gold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={cn(
                            "font-display text-[clamp(2.5rem,8vw,6rem)] font-light leading-none transition-transform duration-300 group-hover:translate-x-3 group-hover:text-gold motion-reduce:transition-none",
                            active ? "italic text-gold" : "text-cream",
                          )}
                        >
                          {item.label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>

              {activeCategories.length > 0 && (
                <div className="mt-10">
                  <p className="label text-beige-muted">Project categories</p>
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {activeCategories.map((c) => (
                      <li key={c}>
                        <Link
                          href={`/projects?typology=${encodeURIComponent(c)}`}
                          onClick={() => setOpen(false)}
                          className="inline-flex min-h-11 items-center text-beige hover:text-gold"
                        >
                          {c}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </nav>

            <div className="grid gap-6 border-t border-beige/10 pt-6 text-sm text-beige-muted md:grid-cols-3">
              <p>Head Office — T. Nagar, Chennai</p>
              <p>Branch — Bhubaneswar, Odisha</p>
              <a
                href={`mailto:${site.email}`}
                className="hover:text-gold md:text-right"
              >
                {site.email}
              </a>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
