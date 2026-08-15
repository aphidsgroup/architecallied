import Link from "next/link";
import { DatumSweep } from "@/components/datum-sweep";
import { SectionHeading } from "@/components/section-heading";
import { ClientMarquee } from "@/components/home/client-marquee";
import { HeroImageTrail } from "@/components/home/hero-image-trail";
import { PlatesSection } from "@/components/home/plates-section";
import { ScreeningRoom } from "@/components/home/screening-room";
import { ParallaxHeading } from "@/components/home/parallax-section";
import { site } from "@/content/site";
import { getPublishedProjects } from "@/lib/projects";
import { pageMetadata } from "@/lib/metadata";
import { getTrailImages } from "@/lib/photos";

export const metadata = pageMetadata({
  title: `${site.name} — Architecture practice, Chennai`,
  description:
    "Architecture practice led by Principal Architect S. Ravikumar, B.Arch. Head office in T. Nagar, Chennai; branch office in Bhubaneswar.",
  path: "/",
});

/**
 * Home — sticky stacking sections: each panel sticks to the top of the
 * viewport while the next one slides up and covers it, creating a
 * layer-on-layer depth effect as the user scrolls.
 */
export default function HomePage() {
  const projectCount = getPublishedProjects().length;
  const trailImages = getTrailImages();

  return (
    // Stacking container — each child section is sticky
    <div className="relative">

      {/* ── 1. HERO ── sticky z-10 */}
      <section
        style={{ zIndex: 10 }}
        className="sticky top-0 surface-dark relative flex min-h-svh flex-col justify-center overflow-hidden bg-navy px-6 pt-28 text-beige md:px-10 md:pt-32"
      >
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

        <h1 className="hero-rise hero-rise-1 relative z-10 font-display font-light leading-[0.9] text-cream">
          <span className="block text-[clamp(4.5rem,16vw,15rem)]">archi-tec</span>
          <span className="block pl-[8vw] text-[clamp(4.5rem,16vw,15rem)] italic text-gold">
            allied
          </span>
        </h1>
        <p className="hero-rise hero-rise-2 relative z-10 mt-10 max-w-xl text-xl leading-relaxed text-beige md:pl-[8vw] md:text-2xl">
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

      {/* ── 2. SELECTED WORK — slides over hero ── sticky z-20 */}
      <section
        style={{ zIndex: 20 }}
        aria-labelledby="plates-h"
        className="sticky top-0 bg-white px-6 py-28 text-navy shadow-[0_-12px_40px_rgba(0,0,0,0.18)] md:px-10"
      >
        <div className="grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="label text-ink-muted">Selected work</p>
            <ParallaxHeading>
              <SectionHeading
                id="plates-h"
                className="mt-4 font-display text-[clamp(1.9rem,4vw,3.25rem)] font-light leading-tight"
              >
                Building the public realm across{" "}
                <em className="text-gold-ink">India</em>
              </SectionHeading>
            </ParallaxHeading>
          </div>
          <p className="label content-end pb-2 text-gold-ink md:col-span-4 md:col-start-9 md:text-right">
            From the practice portfolio
          </p>
        </div>
        <div className="mt-14">
          <PlatesSection />
        </div>
      </section>

      {/* ── 3. APPROACH — slides over selected work ── sticky z-30 */}
      <section
        style={{ zIndex: 30 }}
        aria-labelledby="approach-h"
        className="sticky top-0 bg-cream px-6 py-28 text-navy shadow-[0_-12px_40px_rgba(0,0,0,0.15)] md:px-10"
      >
        <div className="grid gap-12 md:grid-cols-12">
          <h2 id="approach-h" className="label self-start text-ink-muted md:col-span-2">
            Approach
          </h2>
          <div className="md:col-span-9 md:col-start-4">
            <ParallaxHeading>
              <SectionHeading className="font-display text-[clamp(1.75rem,3.6vw,3.25rem)] font-light leading-[1.25]">
                Every site brings its own climate, street and habits of use.{" "}
                <em className="text-gold-ink">
                  The design grows from what is already there
                </em>{" "}
                — organised simply, built to age well, and carried with the same
                care from first drawing to final handover.
              </SectionHeading>
            </ParallaxHeading>
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

      {/* ── 4. SCREENING ROOM — slides over approach ── sticky z-40 */}
      <section
        style={{ zIndex: 40 }}
        aria-labelledby="films-h"
        className="sticky top-0 surface-dark bg-navy px-6 py-28 text-beige shadow-[0_-12px_40px_rgba(0,0,0,0.25)] md:px-10"
      >
        <p className="label text-gold">Project films</p>
        <ParallaxHeading>
          <SectionHeading
            id="films-h"
            className="mt-4 max-w-2xl font-display text-[clamp(1.9rem,4vw,3.25rem)] font-light leading-tight text-cream"
          >
            The work, <em className="text-gold">in motion</em>
          </SectionHeading>
        </ParallaxHeading>
        <div className="mt-14">
          <ScreeningRoom />
        </div>
      </section>

      {/* ── 5. CLIENTS — slides over screening room ── sticky z-50 */}
      <section
        style={{ zIndex: 50 }}
        aria-labelledby="clients-h"
        className="sticky top-0 bg-cream px-6 py-28 text-navy shadow-[0_-12px_40px_rgba(0,0,0,0.15)] md:px-10"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <p className="label text-ink-muted">Our clients</p>
            <ParallaxHeading>
              <SectionHeading
                id="clients-h"
                className="mt-4 font-display text-[clamp(1.9rem,4vw,3.25rem)] font-light leading-tight"
              >
                Trusted across institutions and industry
              </SectionHeading>
            </ParallaxHeading>
          </div>
          <p className="label text-gold-ink">From the practice archive</p>
        </div>
        <div className="mt-12">
          <ClientMarquee />
        </div>
      </section>

      {/* ── 6. PRINCIPAL — final layer, slides over clients ── sticky z-60 */}
      <section
        style={{ zIndex: 60 }}
        aria-labelledby="principal-h"
        className="sticky top-0 surface-dark bg-navy px-6 py-28 text-beige shadow-[0_-12px_40px_rgba(0,0,0,0.25)] md:px-10"
      >
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <ParallaxHeading>
              <SectionHeading
                id="principal-h"
                className="font-display text-[clamp(2rem,4.5vw,3.75rem)] font-light leading-tight text-cream"
              >
                {site.name} — Architecture{" "}
                <em className="text-gold">grounded in context</em>, built to endure.
              </SectionHeading>
            </ParallaxHeading>
            <p className="mt-8 max-w-lg text-beige-muted">
              {site.positioning.description} {site.clientStatement}
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

    </div>
  );
}
