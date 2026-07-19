import Link from "next/link";
import { nav, site } from "@/content/site";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="surface-dark bg-navy text-beige">
      <div className="mx-auto max-w-[1360px] px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo variant="onDark" />
            <p className="mt-6 max-w-xs text-sm text-beige-muted">
              {site.clientStatement}
            </p>
          </div>

          {site.offices.map((office) => (
            <address
              key={office.label}
              className="not-italic md:col-span-3"
            >
              <h2 className="label text-gold">{office.label}</h2>
              <p className="mt-4 text-sm leading-relaxed">
                {office.lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </address>
          ))}

          <div className="md:col-span-2">
            <h2 className="label text-gold">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a className="inline-flex min-h-11 items-center hover:text-white md:min-h-0" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center hover:text-white md:min-h-0" href={site.phone.mobile.href}>
                  {site.phone.mobile.display}
                </a>
              </li>
              <li>
                <a className="inline-flex min-h-11 items-center hover:text-white md:min-h-0" href={site.phone.landline.href}>
                  {site.phone.landline.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t rule pt-8 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="label inline-flex min-h-11 items-center text-beige-muted hover:text-beige"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="label inline-flex min-h-11 items-center text-beige-muted hover:text-beige"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>
          <p className="text-xs text-beige-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
