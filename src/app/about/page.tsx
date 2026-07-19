import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import { personJsonLd } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: "About",
  description: `${site.name} — architecture practice led by ${site.principal.name}, ${site.principal.qualification}, with offices in Chennai and Bhubaneswar.`,
  path: "/about",
});

/**
 * Verified facts only. The description paragraph is DRAFT marketing copy
 * (site.positioning, draft: true) pending client review.
 * /about/principal and /about/people intentionally do not exist yet —
 * see CONTENT_REQUIRED.md.
 */
export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1360px] px-4 pb-24 pt-32 md:px-6 md:pt-40">
      <p className="label text-ink-muted">About</p>
      <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] font-light leading-tight">
        The practice
      </h1>

      <div className="mt-16 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="text-xl leading-relaxed">
            {site.positioning.description}
          </p>
          <p className="mt-6 text-ink-muted">{site.clientStatement}</p>
        </div>

        <div className="md:col-span-5 md:col-start-8">
          <div className="border-t rule">
            <div className="grid grid-cols-2 gap-4 border-b rule py-4">
              <dt className="label text-ink-muted">Practice</dt>
              <dd className="lowercase">{site.displayName}</dd>
            </div>
            <div className="grid grid-cols-2 gap-4 border-b rule py-4">
              <dt className="label text-ink-muted">Principal Architect</dt>
              <dd>
                {site.principal.name}, {site.principal.qualification}
              </dd>
            </div>
            {site.offices.map((o) => (
              <div key={o.label} className="grid grid-cols-2 gap-4 border-b rule py-4">
                <dt className="label text-ink-muted">{o.label}</dt>
                <dd>
                  {o.lines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
    </div>
  );
}
