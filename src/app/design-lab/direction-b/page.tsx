import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { ArchiveIndex, type IndexEntry } from "./archive-index";

/**
 * DIRECTION B — KINETIC PRACTICE ARCHIVE (design lab; verified copy only)
 * The homepage as a living index: typologies, offices and principles listed
 * as an archive that drives a visual preview stage. Dense header, open
 * stage; Space Grotesk numerals; kinetic gold datum as the selection system.
 * No projects are invented — the archive states its own status honestly.
 */
const ENTRIES: IndexEntry[] = [
  { n: "01", title: "Residential", category: "Typology", meta: "status: archive in preparation", description: "Homes shaped around light, ventilation and the rhythms of the household.", variant: 0 },
  { n: "02", title: "Commercial", category: "Typology", meta: "status: archive in preparation", description: "Workplaces planned for clarity of movement and a considered public face.", variant: 1 },
  { n: "03", title: "Institutional", category: "Typology", meta: "status: archive in preparation", description: "Learning, healthcare and civic environments organised around people.", variant: 2 },
  { n: "04", title: "Industrial", category: "Typology", meta: "status: archive in preparation", description: "Facilities where process, safety and expansion logic drive the plan.", variant: 3 },
  { n: "05", title: "Chennai", category: "Office", meta: "head office — T. Nagar", description: "#1, Masilamani Street, T. Nagar, Chennai – 600017.", variant: 4 },
  { n: "06", title: "Bhubaneswar", category: "Office", meta: "branch office — Jharapada", description: "35C, Jayadurga Nagar, Jharapada, Bhoomikal, Bhubaneswar, Odisha 751010.", variant: 5 },
  { n: "07", title: "Context first", category: "Principle", meta: "method 1 of 4", description: "Site, climate and use before form — the design grows from what is already there.", variant: 2 },
  { n: "08", title: "Built to endure", category: "Principle", meta: "method 3 of 4", description: "Materials and details chosen for how they age, not how they photograph.", variant: 5 },
];

export default function DirectionB() {
  return (
    <div className="bg-cream text-navy">
      {/* Compact archive header */}
      <header className="sticky top-0 z-40 border-b rule bg-cream/95 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4 md:px-10">
          <Link href="/design-lab" className="flex items-center gap-3">
            <Image src="/brand/logo-black.png" alt="" width={64} height={32} className="h-6 w-auto" />
            <span className="font-space text-sm lowercase tracking-wide">archi-tec allied</span>
          </Link>
          <nav aria-label="Archive" className="flex items-center gap-6">
            <span className="label hidden text-ink-muted sm:inline">Practice archive</span>
            <a href={`mailto:${site.email}`} className="label min-h-11 content-center text-navy underline decoration-gold underline-offset-4 hover:text-ink-muted">
              Enquire
            </a>
          </nav>
        </div>
      </header>

      {/* Archive masthead */}
      <section className="border-b rule px-6 pb-10 pt-16 md:px-10">
        <h1 className="font-space text-[clamp(2.5rem,7vw,6rem)] font-light leading-[1.02]">
          The practice,
          <br />
          <span className="text-ink-muted">as an index.</span>
        </h1>
        <div className="mt-8 flex flex-wrap items-baseline gap-x-10 gap-y-2 text-sm text-ink-muted">
          <span><span className="font-space text-navy">08</span> entries</span>
          <span><span className="font-space text-navy">06</span> typologies</span>
          <span><span className="font-space text-navy">02</span> offices</span>
          <span className="text-gold" style={{ color: "#8a713a" }}>published works: in preparation</span>
        </div>
      </section>

      {/* Index + stage */}
      <section aria-label="Practice index" className="px-6 py-14 md:px-10">
        <ArchiveIndex entries={ENTRIES} />
      </section>

      {/* Archive status — honest, authored */}
      <section aria-labelledby="b-status" className="surface-dark border-y rule bg-navy px-6 py-20 text-beige md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 id="b-status" className="font-space text-3xl font-light text-cream md:text-4xl">
              Archive in preparation
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-beige-muted">
              Project documentation and photography are being prepared for
              publication. Until the archive opens, {site.clientStatement.toLowerCase()}
            </p>
          </div>
          <div className="content-end md:col-span-4 md:col-start-9">
            <p className="label text-gold">Direct line</p>
            <a href={site.phone.mobile.href} className="mt-3 block font-space text-2xl text-cream hover:text-gold">
              {site.phone.mobile.display}
            </a>
            <a href={`mailto:${site.email}`} className="mt-1 block text-beige-muted underline decoration-gold/40 underline-offset-4 hover:text-beige">
              {site.email}
            </a>
          </div>
        </div>
      </section>

      {/* Footer as archive colophon */}
      <footer className="px-6 py-10 md:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-baseline">
          <p className="font-space text-sm">
            {site.name} — Principal Architect {site.principal.name}, {site.principal.qualification}
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-ink-muted">
            Chennai · Bhubaneswar · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
