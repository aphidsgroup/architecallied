import Link from "next/link";

/** Internal lab index — not linked anywhere in production. */
export default function DesignLabIndex() {
  const dirs = [
    ["direction-a", "A — Monolithic Editorial", "Fraunces + Jost · navy monograph · monumental typography"],
    ["direction-b", "B — Kinetic Practice Archive", "Space Grotesk + Jost · index-driven · preview stage"],
    ["direction-c", "C — Spatial Narrative", "Archivo widths · sticky planes · cinematic sequence"],
  ];
  return (
    <div className="mx-auto max-w-3xl px-6 py-32">
      <p className="label text-gold">Internal — design lab</p>
      <h1 className="mt-4 text-4xl font-light">Redesign directions</h1>
      <ul className="mt-12 divide-y rule border-y rule">
        {dirs.map(([slug, title, meta]) => (
          <li key={slug}>
            <Link href={`/design-lab/${slug}`} className="block py-6 hover:bg-cream">
              <span className="text-2xl">{title}</span>
              <span className="mt-1 block text-sm text-ink-muted">{meta}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-sm text-ink-muted">
        Temporary exploration routes. Excluded from sitemap and navigation; removable after selection.
      </p>
    </div>
  );
}
