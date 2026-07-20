import Link from "next/link";
import { DatumSweep } from "@/components/datum-sweep";
import { SectionHeading } from "@/components/section-heading";
import { ClientMarquee } from "@/components/home/client-marquee";
import { HeroImageTrail } from "@/components/home/hero-image-trail";
import { PlatesSection } from "@/components/home/plates-section";
import { ScreeningRoom } from "@/components/home/screening-room";
import { site } from "@/content/site";
import { getPublishedProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { pageMetadata } from "@/lib/metadata";
import { getPlates, getTrailImages } from "@/lib/photos";

export const metadata = pageMetadata({
  title: `${site.name} — Architecture practice, Chennai`,
  description:
    "Architecture practice led by Principal Architect S. Ravikumar, B.Arch. Head office in T. Nagar, Chennai; branch office in Bhubaneswar.",
  path: "/",
});

/**
 * Home — Direction A: Monolithic Editorial (selected from the design lab,
 * docs/redesign/). Monumental Fraunces hero with corner coordinates, the
 * practice presented as a vertical index, an art-book approach spread, an
 * integrated principal statement; the global colophon footer concludes the
 * page with the monumental email. Draft copy flags live in src/content.
 * City coordinates are public, city-level geographic facts.
 */
export default function HomePage() {
  const selected = getPublishedProjects().slice(0, 3);
  const trailImages = getTrailImages();
  const platesArePhotos = getPlates().every((p) => p.isPhoto);

  return (
    <>
      {/* HERO — monumental staggered wordmark, corner utilities */}
      <section className="surface-dark relative flex min-h-svh flex-col justify-center overflow-hidden bg-navy px-6 pt-20 text-beige md:px-10">
        {/* Cursor image trail — additive overlay; hero composition unchanged */}
        <HeroImageTrail images={trailImages} />
        <p className="pointer-events-none absolute left-6 top-24 z-10 hidden text-xs uppercase tracking-[0.2em] text-beige-muted md:left-10 lg:block">
          Est. Chennai — 13.08°N 80.27°E
        </p>
        <p className="pointer-events-none absolute right-6 top-24 z-10 hidden text-xs uppercase tracking-[0.2em] text-beige-muted md:right-10 lg:block">
          Bhubaneswar — 20.27°N 85.84°E
        </p>
        <p className="pointer-events-none absolute bottom-10 left-6 z-10 hidden text-xs uppercase tracking-[0.2em] text-beige-muted md:left-10 lg:block">
          Principal Architect — {site.principal.name}, {site.principal.qualification}
        </p>
        <p className="pointer-events-none absolute bottom-10 right-6 z-10 hidden text-xs uppercase tracking-[0.2em] text-gold md:right-10 lg:block">
          Architecture · Interiors · Master Planning
        </p>

        <h1 className="hero-rise hero-rise-1 relative z-10 font-display font-light leading-[0.92] text-cream">
          <span className="block text-[clamp(4rem,14vw,12.5rem)]">archi-tec</span>
          <span className="block pl-[8vw] text-[clamp(4rem,14vw,12.5rem)] italic text-gold">
            allied
          </span>
        </h1>
        <p className="hero-rise hero-rise-2 relative z-10 mt-10 max-w-md text-lg leading-relaxed text-beige md:pl-[8vw]">
          {site.positioning.tagline}
        </p>

        <svg
          aria-hidden
          viewBox="0 0 1200 60"
          className="hero-rise hero-rise-3 relative z-10 mt-14 h-8 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50 H760 L840 10 H1200"
            stroke="var(--color-gold)"
            strokeWidth="1"
            fill="none"
            pathLength={1000}
            className="datum-path"
          />
        </svg>
      </section>

      {/* THE PRACTICE, INDEXED */}
      <section
        aria-labelledby="index-h"
        className="surface-dark border-t border-beige/10 bg-navy px-6 py-28 text-beige md:px-10"
      >
        <h2 id="index-h" className="label text-gold">
          The practice, indexed
        </h2>
        <ol className="mt-10">
          {[
            ["01", "Selected work", "A curated archive is in preparation. Documentation and photography under review.", "/projects"],
            ["02", "Expertise", "Residential to master planning — six typologies, one method.", "/expertise"],
            ["03", "Practice", `Led by ${site.principal.name}, ${site.principal.qualification}. Chennai and Bhubaneswar.`, "/about"],
            ["04", "Enquiries", "Client credentials are available on request.", "/contact"],
          ].map(([n, title, sub, href]) => (
            <li key={n} className="group border-b border-beige/10">
              <Link
                href={href}
                className="grid items-baseline gap-2 py-8 md:grid-cols-12 md:gap-6"
              >
                <span className="font-display text-2xl text-gold/70 md:col-span-1">
                  {n}
                </span>
                <span className="font-display text-[clamp(2rem,5vw,4rem)] font-light leading-none text-cream transition-colors group-hover:text-gold md:col-span-6">
                  {title}
                </span>
                <span className="text-sm leading-relaxed text-beige-muted md:col-span-4 md:col-start-9">
                  {sub}
                </span>
              </Link>
            </li>
          ))}
        </ol>

        {/* Selected work cards appear here once real projects are published */}
        {selected.length > 0 && (
          <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {selected.map((p) => (
              <li key={p.slug}>
                <ProjectCard project={p} />
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* PLATES — the study series (Mobbin-researched museum-plate composition) */}
      <section
        aria-labelledby="plates-h"
        className="bg-white px-6 py-28 text-navy md:px-10"
      >
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label text-ink-muted">The study series</p>
            <SectionHeading
              id="plates-h"
              className="mt-4 font-display text-[clamp(1.9rem,4vw,3.25rem)] font-light leading-tight"
            >
              Plates <em className="text-gold-ink">01–06</em> — massing, light
              and rhythm
            </SectionHeading>
          </div>
          <p className="label content-end pb-2 text-gold-ink md:col-span-4 md:col-start-9 md:text-right">
            {platesArePhotos
              ? "Photography — the practice"
              : "AI-generated brand imagery — not built work"}
          </p>
        </div>
        <div className="mt-14">
          <PlatesSection />
        </div>
      </section>

      {/* APPROACH — art-book spread on cream */}
      <section
        aria-labelledby="approach-h"
        className="bg-cream px-6 py-28 text-navy md:px-10"
      >
        <div className="grid gap-12 md:grid-cols-12">
          <h2 id="approach-h" className="label self-start text-ink-muted md:col-span-2">
            Approach
          </h2>
          <div className="md:col-span-9 md:col-start-4">
            <SectionHeading className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-light leading-[1.25]">
              Every site brings its own climate, street and habits of use.{" "}
              <em className="text-gold-ink">
                The design grows from what is already there
              </em>{" "}
              — organised simply, built to age well, and carried with the same
              care from first drawing to final handover.
            </SectionHeading>
            <ul className="mt-16 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {[
                ["Context first", "Site, climate and use before form."],
                ["Clarity of plan", "Buildings people understand without instruction."],
                ["Built to endure", "Materials chosen for how they age."],
                ["Careful stewardship", "Budget and construction held to the drawing's standard."],
              ].map(([t, d], i) => (
                <li key={t} className="border-t border-navy/15 pt-4">
                  <h3 className="font-display text-xl font-normal text-navy">
                    <span aria-hidden className="mr-3 text-sm text-ink-muted">
                      0{i + 1}
                    </span>
                    {t}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SCREENING ROOM — film index controls the stage (A24 pattern via Mobbin) */}
      <section
        aria-labelledby="films-h"
        className="surface-dark bg-navy px-6 py-28 text-beige md:px-10"
      >
        <p className="label text-gold">Screening room</p>
        <SectionHeading
          id="films-h"
          className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.25rem)] font-light leading-tight text-cream"
        >
          Watching, thinking, <em className="text-gold">building</em>
        </SectionHeading>
        <div className="mt-14">
          <ScreeningRoom />
        </div>
      </section>

      {/* OUR CLIENTS — running logo rows (R→L / L→R / R→L) */}
      <section
        aria-labelledby="clients-h"
        className="bg-cream px-6 py-28 text-navy md:px-10"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="label text-ink-muted">Our clients</p>
            <SectionHeading
              id="clients-h"
              className="mt-4 font-display text-[clamp(1.9rem,4vw,3.25rem)] font-light leading-tight"
            >
              Trusted across institutions and industry
            </SectionHeading>
          </div>
          <p className="label text-gold-ink">From the practice archive</p>
        </div>
        <div className="mt-12">
          <ClientMarquee />
        </div>
      </section>

      {/* PRINCIPAL — integrated editorial statement */}
      <section
        aria-labelledby="principal-h"
        className="surface-dark bg-navy px-6 py-28 text-beige md:px-10"
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <SectionHeading
              id="principal-h"
              className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-tight text-cream"
            >
              {site.name} is led by{" "}
              <em className="text-gold">{site.principal.name}</em>,{" "}
              {site.principal.qualification}
            </SectionHeading>
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
        <DatumSweep className="mt-20 h-8 w-full max-w-xl" />
      </section>
    </>
  );
}
