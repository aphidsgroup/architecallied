"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";
import { nav, site } from "@/content/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Header() {
  const pathname = usePathname();
  const onDark = pathname === "/";

  return (
    <header
      className={cn(
        "absolute inset-x-0 top-0 z-40",
        onDark ? "surface-dark" : "border-b rule bg-white",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1360px] items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          aria-label={`${site.name} — home`}
          className="inline-flex items-center"
        >
          <Logo variant={onDark ? "onDark" : "onLight"} />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:block">
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
                      onDark
                        ? "text-beige hover:text-white"
                        : "text-navy hover:text-ink-muted",
                      active && "underline decoration-gold decoration-2",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger
            className={cn(
              "inline-flex size-11 items-center justify-center md:hidden",
              onDark ? "text-beige" : "text-navy",
            )}
            aria-label="Open menu"
          >
            <MenuIcon aria-hidden className="size-6" />
          </SheetTrigger>
          <SheetContent aria-describedby={undefined}>
            <SheetTitle className="label text-beige-muted">Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation
            </SheetDescription>
            <nav aria-label="Mobile" className="mt-10">
              <ul className="flex flex-col gap-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        aria-current={
                          pathname.startsWith(item.href) ? "page" : undefined
                        }
                        className="flex min-h-12 items-center border-b rule text-2xl font-light text-cream hover:text-gold"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
            <p className="mt-auto text-sm text-beige-muted">
              <a className="hover:text-beige" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
