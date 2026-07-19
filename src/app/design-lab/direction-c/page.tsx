import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import { SpatialSequence } from "./spatial-sequence";

/**
 * DIRECTION C — SPATIAL NARRATIVE (design lab; verified copy only)
 * A cinematic single narrative: monumental Archivo expanded statement,
 * one pinned principle sequence of sliding architectural planes, an office
 * geography spread drawn like a site plan, and a closing contact spread.
 * Widths of one variable family (Archivo wdth) provide the type contrast.
 */
export default function DirectionC() {
  return (
    <div className="bg-white text-navy">
      {/* Minimal fixed utility bar */}
      <header className="fixed inset-x-0 top-0 z-40 mix-blend-difference">
        <div className="flex items-center justify-between px-6 py-5 text-cream md:px-12">
          <Link href="/design-lab" className="font-archivo text-sm lowercase tracking-widest" style={{ fontStretch: "125%" }}>
            archi-tec allied
          </Link>
          <a href={`mailto:${site.email}`} className="label min-h-11 content-center">
            Enquire
          </a>
        </div>
      </header>

      {/* OPENING STATEMENT — expanded caps, edge-to-edge */}
      <section className="flex min-h-svh flex-col justify-end px-6 pb-16 pt-32 md:px-12">
        <p className="label text-ink-muted">Chennai · Bhubaneswar</p>
        <h1 className="mt-6 font-archivo font-light uppercase leading-[0.95] tracking-tight text-navy">
          <span className="block text-[clamp(2.75rem,9.5vw,9rem)]" style={{ fontStretch: "125%" }}>Architecture</span>
          <span className="block text-[clamp(2.75rem,9.5vw,9rem)] text-ink-muted" style={{ fontStretch: "78%" }}>grounded in</span>
          <span className="block text-[clamp(2.75rem,9.5vw,9rem)]" style={{ fontStretch: "125%" }}>context<span style={{ color: "#8a713a" }}>.</span></span>
        </h1>
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
          <p className="max-w-md text-lg leading-relaxed text-ink-muted">
            {site.positioning.description}
          </p>
          <Image src="/brand/logo-black.png" alt="" width={120} height={60} className="h-12 w-auto" />
        </div>
      </section>

      {/* PINNED SPATIAL SEQUENCE */}
      <SpatialSequence />

      {/* OFFICE GEOGRAPHY — drawn like a plan spread */}
      <section aria-labelledby="c-geo" className="bg-cream px-6 py-28 md:px-12">
        <h2 id="c-geo" className="font-archivo text-3xl font-light uppercase md:text-5xl" style={{ fontStretch: "125%" }}>
          Two offices, one practice
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden border rule bg-navy/15 md:grid-cols-2">
          {site.offices.map((o, i) => (
            <article key={o.label} className="relative bg-cream p-8 md:p-12">
              <span aria-hidden className="font-archivo text-6xl font-thin text-navy/15" style={{ fontStretch: "125%" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {/* abstract plan mark — brand geometry, not a real site plan */}
              <svg aria-hidden viewBox="0 0 200 120" className="mt-6 h-28 w-auto">
                <path d={i === 0 ? "M10 110 H120 L160 70 H190 M40 110 V50 L80 20 H140" : "M10 90 H80 L120 40 H190 M60 90 V30 H110"} stroke="var(--color-navy)" strokeWidth="1.5" fill="none" opacity="0.5" />
                <circle cx={i === 0 ? 120 : 80} cy={i === 0 ? 110 : 90} r="4" fill="#8a713a" />
              </svg>
              <h3 className="mt-6 font-archivo text-2xl" style={{ fontStretch: "110%" }}>{o.city}</h3>
              <p className="label mt-1" style={{ color: "#8a713a" }}>{o.label}</p>
              <address className="mt-4 text-sm not-italic leading-relaxed text-ink-muted">
                {o.lines.map((l) => <span key={l} className="block">{l}</span>)}
              </address>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-muted">
                {i === 0 ? "13.08°N 80.27°E" : "20.27°N 85.84°E"} — city datum
              </p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink-muted">
          Line drawings are abstract brand geometry, not building plans.
        </p>
      </section>

      {/* CLOSING SPREAD — leadership + contact as finale */}
      <footer className="surface-dark bg-navy px-6 pb-10 pt-28 text-beige md:px-12">
        <p className="max-w-3xl font-archivo text-[clamp(1.75rem,4.5vw,3.5rem)] font-light leading-tight text-cream" style={{ fontStretch: "110%" }}>
          Led by {site.principal.name}, {site.principal.qualification}.
          <span className="text-beige-muted"> {site.clientStatement}</span>
        </p>
        <div className="mt-16 grid gap-8 border-t border-beige/10 pt-10 md:grid-cols-3">
          <a href={`mailto:${site.email}`} className="group">
            <span className="label text-gold">Email</span>
            <span className="mt-2 block break-words text-lg text-cream group-hover:text-gold">{site.email}</span>
          </a>
          <a href={site.phone.mobile.href} className="group">
            <span className="label text-gold">Mobile</span>
            <span className="mt-2 block text-lg text-cream group-hover:text-gold">{site.phone.mobile.display}</span>
          </a>
          <a href={site.phone.landline.href} className="group">
            <span className="label text-gold">Landline</span>
            <span className="mt-2 block text-lg text-cream group-hover:text-gold">{site.phone.landline.display}</span>
          </a>
        </div>
        <div className="mt-16 flex items-end justify-between border-t border-beige/10 pt-8">
          <Image src="/brand/logo-gold.png" alt="archi-tec allied" width={120} height={60} className="h-10 w-auto" />
          <p className="text-xs uppercase tracking-[0.2em] text-beige-muted">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </footer>
    </div>
  );
}
