import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";
import { SocialLinks } from "@/components/social-links";

/**
 * Direction A colophon footer — the conclusion of every page: the practice
 * email set as a monument, then offices, contact and a quiet legal line.
 */
export function Footer() {
  return (
    <footer className="surface-dark bg-navy text-beige">
      <div className="px-6 pb-10 pt-24 md:px-10">
        <a href={`mailto:${site.email}`} className="group block">
          <span className="label text-gold">Enquiries</span>
          <span className="mt-4 block break-words font-display text-[clamp(1.5rem,3.5vw,3rem)] font-light leading-tight text-cream underline decoration-gold/40 decoration-1 underline-offset-8 transition-colors group-hover:decoration-gold motion-reduce:transition-none">
            {site.email}
          </span>
        </a>

        {/* Client correction (deck slide 132): footer text scaled up. */}
        <div className="mt-20 grid gap-10 border-t border-beige/10 pt-10 md:grid-cols-12">
          {site.offices.map((office) => (
            <address key={office.label} className="not-italic md:col-span-3">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                {office.label}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-beige md:text-lg">
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
          ))}
          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
              Direct
            </h2>
            <ul className="mt-4 space-y-2 text-base text-beige md:text-lg">
              <li>
                <a className="inline-flex min-h-11 items-center hover:text-gold md:min-h-0" href={site.phone.mobile.href}>
                  {site.phone.mobile.display}
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center hover:text-gold md:min-h-0" href={site.phone.landline.href}>
                  {site.phone.landline.display}
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center break-all hover:text-gold md:min-h-0" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
              Index
            </h2>
            <nav aria-label="Footer">
              <ul className="mt-4 space-y-2 text-base md:text-lg">
                {[...nav, { label: "Privacy", href: "/privacy" }].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center text-beige hover:text-gold md:min-h-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Copyright bar: logo, social icons, copyright line
            (principal-architect name removed per deck slide 132). */}
        <div className="mt-16 flex flex-col gap-8 border-t border-beige/10 pt-8 md:flex-row md:items-center md:justify-between">
          <Image
            src="/brand/logo-gold.png"
            alt="archi-tec allied"
            width={120}
            height={60}
            className="h-10 w-auto object-contain object-left"
          />
          <SocialLinks className="-mx-2 flex items-center gap-1 md:mx-0 md:gap-2" />
          <p className="text-xs uppercase tracking-[0.2em] text-beige-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
