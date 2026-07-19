import { MailIcon, PhoneIcon } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${site.name}: ${site.email}, ${site.phone.mobile.display}. Offices in T. Nagar, Chennai and Bhubaneswar, Odisha.`,
  path: "/contact",
});

/**
 * Direct contact only — no simulated form. The enquiry action is an honest
 * mailto link that clearly states it opens the visitor's email application
 * (page-specifications.md). A real backend, if approved later, requires
 * server validation, spam protection, rate limiting and delivery monitoring.
 */
export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <p className="label text-ink-muted">Contact</p>
      <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-tight">
        Speak with the practice
      </h1>

      <div className="mt-16 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex min-h-14 items-center gap-4 border rule px-5 py-4 hover:border-navy"
              >
                <MailIcon aria-hidden className="size-5 text-gold" />
                <span className="text-lg group-hover:underline group-hover:underline-offset-4">
                  {site.email}
                </span>
              </a>
            </li>
            <li>
              <a
                href={site.phone.mobile.href}
                className="group flex min-h-14 items-center gap-4 border rule px-5 py-4 hover:border-navy"
              >
                <PhoneIcon aria-hidden className="size-5 text-gold" />
                <span className="text-lg group-hover:underline group-hover:underline-offset-4">
                  {site.phone.mobile.display}
                </span>
                <span className="label ml-auto text-ink-muted">Mobile</span>
              </a>
            </li>
            <li>
              <a
                href={site.phone.landline.href}
                className="group flex min-h-14 items-center gap-4 border rule px-5 py-4 hover:border-navy"
              >
                <PhoneIcon aria-hidden className="size-5 text-gold" />
                <span className="text-lg group-hover:underline group-hover:underline-offset-4">
                  {site.phone.landline.display}
                </span>
                <span className="label ml-auto text-ink-muted">Landline</span>
              </a>
            </li>
          </ul>

          <div className="mt-12 border-l-2 border-gold pl-6">
            <h2 className="text-xl font-normal">Start an enquiry</h2>
            <p className="mt-3 text-ink-muted">
              The button below opens your email application with a new message
              addressed to the practice.
            </p>
            <Button asChild className="mt-6">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Project enquiry — Archi-tec Allied")}`}
              >
                Write to us
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <div className="grid gap-10 sm:grid-cols-2">
            {site.offices.map((office) => (
              <address key={office.label} className="not-italic">
                <h2 className="label text-gold">{office.label}</h2>
                <p className="mt-4 text-lg leading-relaxed">
                  {office.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </address>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
