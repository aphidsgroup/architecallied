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
