"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as DialogPrimitive from "@radix-ui/react-dialog";

/**
 * Direction A navigation: near-invisible header (monogram + "Index") that
 * opens a full-screen indexed overlay. Radix Dialog gives focus trap,
 * Escape-close and focus return. Destinations set in monumental Fraunces;
 * offices + contact as a utility rail.
 */
const DEST = [
  ["01", "Projects", "/projects"],
  ["02", "Expertise", "/expertise"],
  ["03", "Practice", "/about"],
  ["04", "Contact", "/contact"],
] as const;

export function LabNavA() {
  const [open, setOpen] = useState(false);
  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-5 md:px-10">
        <Link href="/design-lab" aria-label="archi-tec allied — design lab index">
          <Image src="/brand/logo-gold.png" alt="" width={64} height={32} className="h-7 w-auto" />
        </Link>
        <DialogPrimitive.Trigger className="label flex min-h-11 items-center gap-3 text-beige hover:text-gold">
          Index
          <span aria-hidden className="block h-px w-10 bg-gold" />
        </DialogPrimitive.Trigger>
      </header>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-navy" />
        <DialogPrimitive.Content className="surface-dark fixed inset-0 z-50 overflow-y-auto bg-navy focus:outline-none">
          <DialogPrimitive.Title className="sr-only">Site index</DialogPrimitive.Title>
          <DialogPrimitive.Description className="sr-only">
            Full-screen navigation. Press Escape to close.
          </DialogPrimitive.Description>

          <div className="flex min-h-svh flex-col px-6 py-6 md:px-10">
            <div className="flex items-center justify-between">
              <Image src="/brand/logo-gold.png" alt="archi-tec allied" width={64} height={32} className="h-7 w-auto" />
              <DialogPrimitive.Close className="label flex min-h-11 items-center gap-3 text-beige hover:text-gold">
                Close
                <span aria-hidden className="block h-px w-10 bg-gold" />
              </DialogPrimitive.Close>
            </div>

            <nav aria-label="Index" className="my-auto py-12">
              <ol className="space-y-2 md:space-y-0">
                {DEST.map(([n, label, href]) => (
                  <li key={href} className="group border-b border-beige/10">
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-6 py-4 md:gap-10 md:py-6"
                    >
                      <span className="label w-8 text-gold">{n}</span>
                      <span className="font-fraunces text-[clamp(2.5rem,8vw,6.5rem)] font-light leading-none text-cream transition-transform duration-300 group-hover:translate-x-4 group-hover:text-gold motion-reduce:transition-none">
                        {label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="grid gap-6 border-t border-beige/10 pt-6 text-sm text-beige-muted md:grid-cols-3">
              <p>Head Office — T. Nagar, Chennai</p>
              <p>Branch — Bhubaneswar, Odisha</p>
              <a href="mailto:architecallied@gmail.com" className="hover:text-gold md:text-right">
                architecallied@gmail.com
              </a>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
