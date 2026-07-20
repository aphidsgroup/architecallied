# Redesign directions — overview & deliverables (design lab)

Live routes (branch redesign/premium-v2, excluded from sitemap/nav, noindex):
- /design-lab/direction-a — Monolithic Editorial
- /design-lab/direction-b — Kinetic Practice Archive
- /design-lab/direction-c — Spatial Narrative

Screenshots: docs/redesign/direction-{a,b,c}/ (1440 full page, 390 full page, plus nav-open / interaction / mid-sequence states). All copy is verified content from src/content; no projects, clients or facts invented. Stage/plan graphics are labelled abstract brand studies.

## Direction A — Monolithic Editorial (Fraunces + Jost)
Concept: the practice as an architectural monograph. Monumental staggered Fraunces wordmark (roman cream / italic gold), city-coordinate labels pinned to viewport corners, a vertical practice index (01–04) as the main navigation surface, an art-book approach spread on cream, principal integrated as an editorial statement, and a colophon footer whose email address is the final monument.
- Nav: near-invisible header → full-screen Radix-dialog index with clamp(2.5rem,8vw,6.5rem) destinations + office rail; Escape/focus-trap/focus-return.
- Motion: hero datum draw (CSS), index hover translate, heading entrances only. Least motion of the three.
- Components: corner-utility hero, editorial index rows, pull-quote principle spread, statement leadership, monumental mailto finale.
- Accessibility: single h1, index rows are real links, all text ≥AA (dark-gold #8a713a used for gold-on-cream text), reduced-motion = static.
- Performance risk: lowest (fonts + CSS only).
- Unmistakably Archi-tec Allied: gold italic wordmark + datum baseline + coordinates of the two real offices.

## Direction B — Kinetic Practice Archive (Space Grotesk + Jost)
Concept: the homepage as a living index. Eight verified entries (4 typologies, 2 offices, 2 principles) drive a preview stage of abstract 45° plane compositions; the gold datum underline is the selection indicator connecting list to stage. Dense masthead ("08 entries · 06 typologies · 02 offices · published works: in preparation") makes the empty archive an honest, designed fact.
- Interaction: hover/focus/click all activate (buttons, aria-expanded); mobile renders the stage inline under the active entry — no hover dependency.
- Motion: stage crossfade 250ms, datum scaleX 300ms; most energetic direction.
- Components: archive masthead, index+stage explorer, honest status band, direct-line block, colophon strip.
- Accessibility: keyboard = focus activates stage; stage text on solid navy; every stage labelled "Abstract brand study — not project imagery".
- Performance risk: low; one client component.
- Unmistakably Archi-tec Allied: the archive literally lists the real practice; logo-derived plane geometry per entry.

## Direction C — Spatial Narrative (Archivo widths)
Concept: one cinematic narrative. Expanded/condensed uppercase opening statement ("ARCHITECTURE / grounded in / CONTEXT."), the site's single pinned GSAP sequence — four principles as sliding architectural planes with an advancing gold datum rail and oversized ghost numerals — then an office-geography spread drawn like plan documents (labelled abstract), closing in a navy leadership/contact finale. Header uses mix-blend-difference to survive both fields.
- Motion: one scrubbed pin (desktop, motion-safe only); ≤768px and reduced-motion render the four panels as a plain readable stack — fail-visible by construction (panels are stacked in DOM; GSAP only choreographs).
- Components: width-contrast statement, pinned plane sequence, plan-drawn office spread, closing contact spread.
- Accessibility: sequence readable without any JS; contrast checked; coordinates are public city-level facts.
- Performance risk: highest of the three (scrub + pin) but bounded: one timeline, transform/clip-path only.
- Unmistakably Archi-tec Allied: the datum line is the narrative's spine; plane geometry from the logo's angles.
