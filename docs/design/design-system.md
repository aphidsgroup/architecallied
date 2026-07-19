# Archi-tec Allied design system

Direction: **Architectural editorial minimalism with restrained structural brutalism.**
Feel: precise, established, context-aware, editorial, contemporary, trustworthy, premium without extravagance.

## Colour tokens (CSS variables, Tailwind 4 @theme)
| Token | Value | Use |
|---|---|---|
| --color-navy | #1F2A44 | Primary surface (hero, footer), primary text on light |
| --color-beige | #E8DCC8 | Secondary surface, text on navy |
| --color-gold | #C6A75E | Interface accent: fine rules, active indicators, small details |
| --color-cream | #F5F0E8 | Supporting surface |
| --color-white | #FFFFFF | Base surface |
| --color-navy-soft | #2A3757 | Elevated navy surface (cards on navy) |
| --color-ink-muted | #4A5468 | Secondary text on light |
| --color-beige-muted | #B9AE97 | Secondary text on navy (contrast-checked) |
Logo gold stays #C5A75F in assets — never recoloured.

Pairing rules: navy text on cream/beige/white; white or beige text on navy; gold accents on navy; gold never used as body text on light surfaces. Gold on navy passes contrast for large text/labels only — pair with non-colour cues.

## Typography — Jost via next/font/google (self-hosted)
| Role | Weight | Size (desktop/mobile) | Tracking |
|---|---|---|---|
| Display | 300 | clamp 44–88px | -0.01em |
| H2 | 400 | clamp 32–48px | 0 |
| H3 | 400 | 24px | 0 |
| Body | 400 | 17px/1.65 | 0 |
| Meta/labels | 600 | 12–13px uppercase | 0.14em |
Light 300 only at display sizes ≥44px; never for body.

## Spacing & grid
- 4px base scale; section padding 96–160px desktop, 64–96px mobile.
- 12-col grid, max-width 1360px, gutters 24/16px. Asymmetric compositions: text 5–6 cols offset, deliberate whitespace cols.
- Fine rules: 1px navy/15% on light, beige/20% on navy; gold 1–2px rules only as accents (≤2 per screen).

## Breakpoints
320 / 390 / 768 / 1024 / 1440 (design targets). Tailwind sm 640, md 768, lg 1024, xl 1280.

## Geometry & borders
- Corners 0px (buttons/cards) to 2px (inputs). No pills except filter chips at 2px.
- Angular language: 45° clipped planes (clip-path) echoing the logo's diagonals — hero and section transitions only, max 3 per page. Never repeat the monogram itself as decoration.
- No shadows except focus rings and dialog overlay. Borders express structure.

## Image treatment
- next/image, aspect 4:3 (cards) / 16:9 (banners), no filters, 0 radius, 1px rule frame on light surfaces. No stock imagery anywhere.

## Datum sweep (signature element)
A single fine gold line (1.5px) travelling horizontally then breaking upward at 45° — abstracted from the logo's baseline, not the monogram. Max 3 uses:
1. Hero: SVG stroke-dasharray/dashoffset draw-in (CSS animation, no GSAP plugin).
2. Projects filter: active-filter underline indicator.
3. Optional section transition rule on Home (static).
Reduced motion: line fully drawn immediately.

## Accessibility
WCAG 2.2 AA. Focus: 2px gold outline + 2px offset on navy; 2px navy outline on light. Target ≥44px. All states testable by keyboard. No colour-only meaning (active filters get underline + weight change).

## Forbidden (from brief)
Gradients, glassmorphism, neon, bento grids, floating cards, heavy shadows, pill containers, emoji icons, gold overload, CRT/terminal/cyberpunk styling, dark-only, noise overlays, preloaders, custom cursors, scroll hijack, horizontal scroll, WebGL, parallax, decorative text splitting, video backgrounds.

## Pre-code self-critique (Phase 2 gate) and revisions
- **Generic risk:** "4 numbered principles on dark band" is a common pattern → revised: principles set on an asymmetric 5/7 grid with a single vertical gold rule, indices as oversized Jost 300 numerals; copy kept terse and concrete.
- **Derivative risk:** hero angular planes could read as generic geometric decoration → revised: exactly two planes, both derived from the 45° logo angle, anchored to the viewport edge, never floating; removed a planned third plane.
- **Over-design risk:** gold rules everywhere → hard cap of two gold accents per viewport; all other rules navy/beige at low alpha.
- **Content weakness:** Selected-work section with zero projects risks looking broken → revised into a deliberate editorial statement block with datum rule, not an apologetic empty card grid.
- **Usability risk:** lowercase display wordmark for headings could hurt scanning → lowercase reserved for the brand lockup only; page headings use sentence case.
- **Simplification:** dropped planned grid/list toggle on /projects (no material benefit at launch volume); dropped breadcrumb UI on 1-level routes (JSON-LD breadcrumbs only on project detail).
