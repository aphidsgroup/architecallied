import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { personJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "About",
  description: `${site.name} — architecture practice led by ${site.principal.name}, ${site.principal.qualification}, with offices in Chennai and Bhubaneswar.`,
  path: "/about",
});

/**
 * Direction A practice page: positioning as an editorial statement,
 * leadership woven into the narrative, offices as a drawn fact table.
 * Verified facts only; description is DRAFT (site.positioning.draft).
 */
export default function AboutPage() {
  return (
    <div className="px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <p className="label text-ink-muted">03 — Practice</p>
      <h1 className="mt-4 max-w-5xl font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-light leading-[1.1]">
        An architecture practice led by{" "}
        <em className="text-gold-ink">{site.principal.name}</em>,{" "}
        {site.principal.qualification} — working from Chennai and Bhubaneswar
      </h1>

      <div className="mt-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="font-display text-xl leading-relaxed md:text-2xl">
            {site.positioning.description}
          </p>
          <p className="mt-8 border-l-2 border-gold pl-6 text-ink-muted">
            {site.clientStatement}
          </p>
        </div>

        <dl className="h-fit md:col-span-5 md:col-start-8">
          <div className="grid grid-cols-2 gap-4 border-t-2 border-navy py-4">
            <dt className="label text-ink-muted">Practice</dt>
            <dd className="lowercase">{site.displayName}</dd>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t rule py-4">
            <dt className="label text-ink-muted">Principal Architect</dt>
            <dd>
              {site.principal.name}, {site.principal.qualification}
            </dd>
          </div>
          {site.offices.map((o, i) => (
            <div key={o.label} className="grid grid-cols-2 gap-4 border-t rule py-4">
              <dt className="label text-ink-muted">{o.label}</dt>
              <dd>
                {o.lines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
                <span className="label mt-2 block text-gold-ink">
                  {i === 0 ? "13.08°N 80.27°E" : "20.27°N 85.84°E"}
                </span>
              </dd>
            </div>
          ))}
          <div className="border-t rule" />
        </dl>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
    </div>
  );
}
