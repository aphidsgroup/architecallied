import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { expertiseAreas } from "@/content/expertise";
import { LabNavA } from "./lab-nav-a";

/**
 * DIRECTION A — MONOLITHIC EDITORIAL (design lab; verified copy only)
 * Architectural monograph: monumental Fraunces typography on a deep navy
 * field, corner-pinned utility coordinates, vertical practice index,
 * art-book principle spreads, colophon footer. Gold as a material fine line.
 * City coordinates are public geographic facts (approximate, city-level).
 */
export default function DirectionA() {
  return (
    <div className="surface-dark bg-navy text-beige">
      <LabNavA />

      {/* HERO — monumental stagger, corner utilities */}
      <section className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 md:px-10">
        <p className="pointer-events-none absolute left-6 top-24 hidden text-xs uppercase tracking-[0.2em] text-beige-muted md:left-10 lg:block">
          Est. Chennai — 13.08°N 80.27°E
        </p>
        <p className="pointer-events-none absolute right-6 top-24 hidden text-xs uppercase tracking-[0.2em] text-beige-muted md:right-10 lg:block">
          Bhubaneswar — 20.27°N 85.84°E
        </p>
        <p className="pointer-events-none absolute bottom-10 left-6 hidden text-xs uppercase tracking-[0.2em] text-beige-muted md:left-10 lg:block">
          Principal Architect — S. Ravikumar, B.Arch
        </p>
        <p className="pointer-events-none absolute bottom-10 right-6 hidden text-xs uppercase tracking-[0.2em] text-gold md:right-10 lg:block">
          Architecture · Interiors · Master Planning
        </p>

        <h1 className="font-fraunces font-light leading-[0.92] text-cream">
          <span className="block text-[clamp(4rem,14vw,12.5rem)]">archi-tec</span>
          <span className="block pl-[8vw] text-[clamp(4rem,14vw,12.5rem)] italic text-gold">
            allied
          </span>
        </h1>
        <p className="mt-10 max-w-md pl-[2px] text-lg leading-relaxed text-beige md:pl-[8vw]">
          {site.positioning.tagline}
        </p>

        {/* datum: hero baseline */}
        <svg aria-hidden viewBox="0 0 1200 60" className="mt-14 h-8 w-full" preserveAspectRatio="none">
          <path d="M0 50 H760 L840 10 H1200" stroke="var(--color-gold)" strokeWidth="1" fill="none" pathLength={1000} className="datum-path" />
        </svg>
      </section>

      {/* PRACTICE INDEX — vertical editorial rows */}
      <section aria-labelledby="a-index" className="border-t border-beige/10 px-6 py-28 md:px-10">
        <h2 id="a-index" className="label text-gold">The practice, indexed</h2>
        <ol className="mt-10">
          {[
            ["01", "Selected work", "A curated archive is in preparation. Documentation and photography under review.", "/projects"],
            ["02", "Expertise", "Residential to master planning — six typologies, one method.", "/expertise"],
            ["03", "Practice", `Led by ${site.principal.name}, ${site.principal.qualification}. Chennai and Bhubaneswar.`, "/about"],
            ["04", "Enquiries", "Client credentials are available on request.", "/contact"],
          ].map(([n, title, sub, href]) => (
            <li key={n} className="group border-b border-beige/10">
              <Link href={href} className="grid items-baseline gap-2 py-8 md:grid-cols-12 md:gap-6">
                <span className="font-fraunces text-2xl text-gold/70 md:col-span-1">{n}</span>
                <span className="font-fraunces text-[clamp(2rem,5vw,4rem)] font-light leading-none text-cream transition-colors group-hover:text-gold md:col-span-6">
                  {title}
                </span>
                <span className="text-sm leading-relaxed text-beige-muted md:col-span-4 md:col-start-9">
                  {sub}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {/* APPROACH — art-book spread on cream */}
      <section aria-labelledby="a-approach" className="bg-cream px-6 py-28 text-navy md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <h2 id="a-approach" className="label self-start text-ink-muted md:col-span-2">
            Approach
          </h2>
          <div className="md:col-span-9 md:col-start-4">
            <p className="font-fraunces text-[clamp(1.75rem,3.6vw,3.25rem)] font-light leading-[1.25]">
              Every site brings its own climate, street and habits of use.{" "}
              <em className="text-gold" style={{ color: "#8a713a" }}>The design grows from what is already there</em>{" "}
              — organised simply, built to age well, and carried with the same
              care from first drawing to final handover.
            </p>
            <ul className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {[
                ["Context first", "Site, climate and use before form."],
                ["Clarity of plan", "Buildings people understand without instruction."],
                ["Built to endure", "Materials chosen for how they age."],
                ["Careful stewardship", "Budget and construction held to the drawing's standard."],
              ].map(([t, d], i) => (
                <li key={t} className="border-t border-navy/15 pt-4">
                  <span className="font-fraunces text-xl text-navy">
                    <span className="mr-3 text-sm text-ink-muted">0{i + 1}</span>
                    {t}
                  </span>
                  <p className="mt-1 text-sm text-ink-muted">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRINCIPAL — integrated editorial statement */}
      <section aria-labelledby="a-principal" className="px-6 py-28 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 id="a-principal" className="font-fraunces text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-tight text-cream">
              {site.name} is led by{" "}
              <span className="italic text-gold">{site.principal.name}</span>,{" "}
              {site.principal.qualification}
            </h2>
            <p className="mt-8 max-w-lg text-beige-muted">
              Practising from the head office in T. Nagar, Chennai, with a
              branch office in Bhubaneswar, Odisha. {site.clientStatement}
            </p>
          </div>
          <dl className="self-end text-sm md:col-span-4 md:col-start-9">
            {site.offices.map((o) => (
              <div key={o.label} className="border-t border-beige/10 py-4">
                <dt className="label text-gold">{o.label}</dt>
                <dd className="mt-2 text-beige-muted">{o.lines.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CONTACT FINALE + COLOPHON FOOTER */}
      <footer className="border-t border-beige/10 px-6 pb-10 pt-24 md:px-10">
        <a href={`mailto:${site.email}`} className="group block">
          <span className="label text-gold">Enquiries</span>
          <span className="mt-4 block break-words font-fraunces text-[clamp(1.75rem,5.5vw,4.5rem)] font-light leading-tight text-cream underline decoration-gold/40 decoration-1 underline-offset-8 transition-colors group-hover:decoration-gold">
            {site.email}
          </span>
        </a>
        <div className="mt-20 flex flex-col justify-between gap-8 border-t border-beige/10 pt-8 md:flex-row md:items-end">
          <Image src="/brand/logo-gold.png" alt="archi-tec allied" width={120} height={60} className="h-10 w-auto" />
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs uppercase tracking-[0.2em] text-beige-muted">
            <a href={site.phone.mobile.href} className="min-h-11 content-center hover:text-gold">{site.phone.mobile.display}</a>
            <a href={site.phone.landline.href} className="min-h-11 content-center hover:text-gold">{site.phone.landline.display}</a>
            <span className="min-h-11 content-center">© {new Date().getFullYear()} {site.name}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
