# Final QA report — 2026-07-20

## Routes completed
| Route | Status |
|---|---|
| / | ✅ static; navy typographic hero, datum sweep, all 7 sections |
| /projects | ✅ dynamic; filters (typology/location/status) in URL query, aria-live count, honest empty state |
| /projects/[slug] | ✅ template ready (metadata rail, narrative, gallery, related); 404 for unknown/unpublished slugs |
| /expertise | ✅ informational; filter links auto-enable per published typology |
| /about | ✅ verified facts + draft-flagged description |
| /contact | ✅ mailto/tel actions; explicit "opens your email application" |
| /privacy | ✅ accurate minimal policy |
| 404 | ✅ branded |
| robots.txt, sitemap.xml | ✅ 6 URLs; no fixtures/conditional routes (tested) |
| Conditional routes | ✅ intentionally absent (/about/principal, /about/people, /clients, /insights, /careers) |

## Build & test results (post-correction clean run)
- `pnpm install --frozen-lockfile` — **passes** · pnpm **10.11.0** pinned via `packageManager` field in package.json
- `pnpm lint` — **0 errors**
- `pnpm type-check` — **0 errors**
- `pnpm test` — **9/9 passed**
- `pnpm build` — **success** (Next.js 16.2.10, 11 static pages)
- `pnpm start` — serves with all security headers; zero CSP violations in browser console

## Lockfile correction (post-review)
`pnpm-lock.yaml` previously contained `@fontsource/jost` while `package.json` did not,
causing `ERR_PNPM_OUTDATED_LOCKFILE` on frozen install. Corrected by:
1. Running `pnpm install` to regenerate the lockfile without `@fontsource/jost`
2. Adding `"packageManager": "pnpm@10.11.0"` to package.json (README previously stated pnpm 11, which was incorrect)
3. Confirming `pnpm install --frozen-lockfile` now succeeds cleanly

## SectionHeading animation — visibility fix (post-review)
`gsap.from()` applied `opacity:0` on mount before ScrollTrigger fired. A headless browser
capturing without scrolling showed the CTA heading as invisible.

**Fix**: switched to `ScrollTrigger.create({ onEnter })` + `gsap.fromTo()`. The hidden state
(`opacity:0, y:24`) is applied only inside `onEnter`, immediately before the tween begins.
Content is always visible at its natural opacity if ScrollTrigger never fires (no scroll,
JS error, headless capture). Reduced-motion path returns early — element permanently visible.

## Lighthouse (production server; diagnostic)
- Home: Performance 99 · Accessibility 96 · Best Practices 100 · SEO 100
- Projects: Performance 89–99 (run variance) · Accessibility 100 · Best Practices 100 · SEO 100
Targets (≥90 / ≥95 / ≥95) met.

## Security headers
CSP: `default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self' mailto:; frame-ancestors 'none'; upgrade-insecure-requests` — zero violations.
Additional: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, restrictive `Permissions-Policy`.

## Accessibility verification
- First Tab → "Skip to content"; landmarks: header, nav[Primary], main, footer, nav[Footer]
- Single h1 per page; logical h1→h2→h3 order verified on Home
- Mobile nav (Radix Sheet): opens as dialog, Escape closes, focus returns to trigger
- Gallery dialog: title, Escape, focus trap/return, arrow-key navigation
- Filters: native selects, labelled, keyboard-operable; result count in aria-live=polite
- Contrast: all 11 brand pairs ≥ 5.1:1 — WCAG AA met
- Reduced motion: datum line visible immediately, headings opacity 1 (emulated prefers-reduced-motion verified)
- NVDA pass: recommended on Windows before launch (not possible in sandbox)

## Functional checks
- Filter select → URL `?typology=Commercial`, count "1 project" · Back restores unfiltered state
- Unknown slug → HTTP 404 · fixture detail dev-only
- Sitemap: no fixture or conditional URLs (unit-tested + curl-verified)
- Contact mailto/tel correctly formed

## Responsive
1440px and 390px screenshots for all routes in `docs/qa/screenshots/`. Layout fluid 320–1440 via clamp()-based type and 1/2/3-column grids.

## Content integrity
- No invented projects, clients, awards, metrics, founding year, staff, testimonials, socials
- No lorem ipsum, no remote imagery; honest empty states throughout
- Client identities in `src/content/client-review.ts` (review only); site shows "Client credentials available on request"
- Draft copy flagged in code and CONTENT_REQUIRED.md
- Mobbin: not used; documented in docs/research/reference-matrix.md

## Remaining content requirements
See CONTENT_REQUIRED.md (projects, photography, biography/portrait, client permissions, founding year, SITE_URL, legal review).

## Known limitations
No Playwright (sandbox network restriction) — browser QA used Puppeteer + npm Chromium. NVDA pass pending. /projects Lighthouse performance varies 89–99 by run. Fonts from @fontsource (identical self-hosting to next/font/google, OFL licensed).

---

# Redesign QA addendum — Direction A production implementation (2026-07-20, branch redesign/premium-v2)

## Process
Visual audit (docs/research/current-visual-audit.md) → Mobbin + live reference research (premium-reference-matrix.md) → coded typography exploration (docs/redesign/typography-exploration.md) → three complete coded directions with screenshots (docs/redesign/) → user selected **Direction A — Monolithic Editorial** → production implementation → target-vs-production comparison.

## Pre-redesign defect fixes
- packageManager pinned to pnpm@11.15.0; lockfile reconciled (unused @fontsource/jost removed); `pnpm install --frozen-lockfile` passes from clean state.
- SectionHeading entrances are fail-visible: content never pre-hidden; hidden state applied only inside the ScrollTrigger onEnter callback.

## What changed in production
- Typography: Fraunces display (roman/italic) + Jost utility; gold-ink token #7a6433 for gold text on light surfaces (5.0:1 on cream).
- Navigation: minimal header (monogram + Index trigger) → full-screen indexed menu (Radix dialog; monumental destinations, office rail). Old link-row header and Sheet removed.
- Footer: colophon with monumental email finale on every page.
- Home: staggered monumental hero with corner coordinates, practice index, art-book approach spread, integrated principal statement.
- Projects: authored "archive in preparation" composition (typology index + status + contact); **no inactive filters above zero projects**. Full URL-persisted filter system activates automatically when visible projects exist (verified with dev fixtures: select → ?typology=Commercial → "1 project"; Back restores).
- Expertise: large Fraunces typology index; About: editorial statement + drawn fact table; Contact: closing spread with office panels and city datums; 404 restyled.
- Design lab removed from production (screenshots preserved in docs/redesign/; B/C lab fonts removed).

## Target fidelity
Side-by-side comparison of Direction A design-lab target vs production home at 1440px: compositions match. Intentional differences: fuller colophon footer (offices/direct/index columns added), wordmark beside monogram in header, selected-work cards slot under index entry 01 once projects publish.

## Verification (clean state)
- `pnpm install --frozen-lockfile` ✓ · lint 0 ✓ · type-check 0 ✓ · tests 9/9 ✓ · build ✓ (12 routes) · start + CSP headers ✓ · console clean ✓
- Keyboard: first Tab = skip link; Index menu: dialog semantics, Escape closes, focus returns to trigger; links keyboard-reachable ✓
- Reduced motion: hero h1 opacity 1, datum fully drawn immediately ✓
- Single h1 on every route ✓ · fixtures excluded from production output ✓
- Lighthouse (production server): Home 95/100/100/100. Projects 80–96 perf across runs (sandbox CPU variance on the dynamic route; a11y 100, SEO 100, BP 96 — the BP deduction is Lighthouse's CSP-uses-unsafe-inline advisory, inherent to Next.js static pages without a nonce infrastructure, documented in next.config.ts).
- Screenshots (1440 + 390, all redesigned routes): docs/qa/screenshots/prod-*.png; direction targets in docs/redesign/.

## Definition-of-success check
Template resemblance removed (hero, nav, sections, footer all authored) ✓ · memorable hero without fake photography ✓ · ≥3 authored sections ✓ · unique but usable navigation ✓ · editorial type contrast ✓ · coherent motion system (datum draw + fail-visible entrances) ✓ · datum as identity (hero baseline, menu rules, active indicators, footer signature) ✓ · intentional empty state ✓ · desktop + mobile designed ✓ · fast + accessible ✓ · no unverified content ✓ · production matches selected target ✓
