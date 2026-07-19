import Image from "next/image";
import Link from "next/link";
import { nav, site } from "@/content/site";

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
          <span className="mt-4 block break-words font-display text-[clamp(1.75rem,5.5vw,4.5rem)] font-light leading-tight text-cream underline decoration-gold/40 decoration-1 underline-offset-8 transition-colors group-hover:decoration-gold motion-reduce:transition-none">
            {site.email}
          </span>
        </a>

        <div className="mt-20 grid gap-10 border-t border-beige/10 pt-10 md:grid-cols-12">
          {site.offices.map((office) => (
            <address key={office.label} className="not-italic md:col-span-3">
              <h2 className="label text-gold">{office.label}</h2>
              <p className="mt-3 text-sm leading-relaxed text-beige-muted">
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
          ))}
          <div className="md:col-span-3">
            <h2 className="label text-gold">Direct</h2>
            <ul className="mt-3 space-y-1 text-sm text-beige-muted">
              <li>
                <a className="inline-flex min-h-11 items-center hover:text-beige md:min-h-0" href={site.phone.mobile.href}>
                  {site.phone.mobile.display}
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center hover:text-beige md:min-h-0" href={site.phone.landline.href}>
                  {site.phone.landline.display}
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h2 className="label text-gold">Index</h2>
            <nav aria-label="Footer">
              <ul className="mt-3 space-y-1 text-sm">
                {[...nav, { label: "Privacy", href: "/privacy" }].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-flex min-h-11 items-center text-beige-muted hover:text-beige md:min-h-0"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-beige/10 pt-8 md:flex-row md:items-end">
          <Image
            src="/brand/logo-gold.png"
            alt="archi-tec allied"
            width={120}
            height={60}
            className="h-10 w-auto"
          />
          <p className="text-xs uppercase tracking-[0.2em] text-beige-muted">
            Principal Architect — {site.principal.name}, {site.principal.qualification} · ©{" "}
            {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
