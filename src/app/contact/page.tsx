import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { DatumSweep } from "@/components/datum-sweep";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Contact ${site.name}: ${site.email}, ${site.phone.mobile.display}. Offices in T. Nagar, Chennai and Bhubaneswar, Odisha.`,
  path: "/contact",
});

/**
 * Direction A contact: a closing spread. Monumental address typography,
 * the two offices compared like drawing panels with city datums, direct
 * actions. Honest mailto enquiry (no simulated form). Coordinates are
 * public city-level facts.
 */
export default function ContactPage() {
  return (
    <div className="px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <p className="label text-ink-muted">04 — Contact</p>
      <h1 className="mt-4 font-display text-[clamp(2.5rem,7vw,5.5rem)] font-light leading-[1.02]">
        Speak with <em className="text-gold-ink">the practice</em>
      </h1>

      {/* Primary action: the address as monument */}
      <a href={`mailto:${site.email}`} className="group mt-16 block border-y-2 border-navy py-10">
        <span className="label text-ink-muted">Email — opens your email application</span>
        <span className="mt-3 block break-words font-display text-[clamp(1.5rem,4.5vw,3.75rem)] font-light leading-tight text-navy group-hover:text-gold-ink">
          {site.email}
        </span>
      </a>
      <div className="grid sm:grid-cols-2">
        <a href={site.phone.mobile.href} className="group border-b rule py-6 sm:pr-10">
          <span className="label text-ink-muted">Mobile</span>
          <span className="mt-2 block font-display text-2xl text-navy group-hover:text-gold-ink md:text-3xl">
            {site.phone.mobile.display}
          </span>
        </a>
        <a href={site.phone.landline.href} className="group border-b rule py-6 sm:pl-10">
          <span className="label text-ink-muted">Landline</span>
          <span className="mt-2 block font-display text-2xl text-navy group-hover:text-gold-ink md:text-3xl">
            {site.phone.landline.display}
          </span>
        </a>
      </div>

      {/* Office comparison — drawing panels */}
      <section aria-label="Offices" className="mt-24 grid gap-px overflow-hidden border rule bg-navy/15 md:grid-cols-2">
        {site.offices.map((o, i) => (
          <article key={o.label} className="relative bg-cream p-8 md:p-12">
            <span aria-hidden className="font-display text-6xl font-light text-navy/10">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h2 className="mt-4 font-display text-3xl font-light">{o.city}</h2>
            <p className="label mt-1 text-gold-ink">{o.label}</p>
            <address className="mt-6 max-w-xs text-lg not-italic leading-relaxed">
              {o.lines.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
            <p className="label mt-6 text-ink-muted">
              {i === 0 ? "13.08°N 80.27°E" : "20.27°N 85.84°E"} — city datum
            </p>
          </article>
        ))}
      </section>

      {/* Enquiry — honest mailto */}
      <section aria-labelledby="enquiry-h" className="mt-24 max-w-xl">
        <h2 id="enquiry-h" className="font-display text-2xl font-normal">
          Start an enquiry
        </h2>
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
      </section>

      <DatumSweep className="mt-24 h-8 w-full max-w-xl" />
    </div>
  );
}
