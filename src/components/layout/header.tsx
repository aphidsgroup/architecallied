"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Direction A navigation (selected 2026-07-20): a near-invisible header —
 * monogram left, "Index" trigger right — opening a full-screen indexed menu
 * with monumental Fraunces destinations and an office/contact utility rail.
 * Radix Dialog provides focus trap, Escape-close and focus return; without
 * JS the header links (logo → home) and footer nav keep every route
 * reachable. One component serves desktop and mobile.
 */
const DEST = [
  { n: "01", label: "Projects", href: "/projects" },
  { n: "02", label: "Expertise", href: "/expertise" },
  { n: "03", label: "Practice", href: "/about" },
  { n: "04", label: "Contact", href: "/contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const onDark = pathname === "/";

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <header
        className={cn(
          "absolute inset-x-0 top-0 z-40",
          onDark ? "surface-dark" : "border-b rule bg-white",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5 md:px-10">
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="flex items-center gap-3"
          >
            <Image
              src={onDark ? "/brand/logo-gold.png" : "/brand/logo-black.png"}
              alt=""
              width={64}
              height={32}
              priority
              className="h-7 w-auto"
            />
            <span
              className={cn(
                "text-lg lowercase leading-none tracking-wide",
                onDark ? "text-beige" : "text-navy",
              )}
            >
              {site.displayName}
            </span>
          </Link>
          <DialogPrimitive.Trigger
            className={cn(
              "label flex min-h-11 items-center gap-3",
              onDark ? "text-beige hover:text-gold" : "text-navy hover:text-gold-ink",
            )}
          >
            Index
            <span aria-hidden className="block h-px w-10 bg-gold" />
          </DialogPrimitive.Trigger>
        </div>
      </header>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy" />
        <DialogPrimitive.Content className="surface-dark fixed inset-0 z-50 overflow-y-auto bg-navy focus:outline-none">
          <DialogPrimitive.Title className="sr-only">
            Site index
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Full-screen navigation. Press Escape to close.
          </DialogPrimitive.Description>

          <div className="flex min-h-svh flex-col px-6 py-5 md:px-10">
            <div className="flex items-center justify-between">
              <Image
                src="/brand/logo-gold.png"
                alt="archi-tec allied"
                width={64}
                height={32}
                className="h-7 w-auto"
              />
              <DialogPrimitive.Close className="label flex min-h-11 items-center gap-3 text-beige hover:text-gold">
                Close
                <span aria-hidden className="block h-px w-10 bg-gold" />
              </DialogPrimitive.Close>
            </div>

            <nav aria-label="Primary" className="my-auto py-12">
              <ol>
                {DEST.map(({ n, label, href }) => {
                  const active = pathname.startsWith(href);
                  return (
                    <li key={href} className="group border-b border-beige/10">
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? "page" : undefined}
                        className="flex items-baseline gap-6 py-4 md:gap-10 md:py-6"
                      >
                        <span className="label w-8 text-gold">{n}</span>
                        <span
                          className={cn(
                            "font-display text-[clamp(2.5rem,8vw,6.5rem)] font-light leading-none transition-transform duration-300 group-hover:translate-x-4 group-hover:text-gold motion-reduce:transition-none",
                            active ? "italic text-gold" : "text-cream",
                          )}
                        >
                          {label}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
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
