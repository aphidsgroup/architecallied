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

## Build & test results
- `pnpm type-check` — 0 errors · `pnpm lint` — 0 errors · `pnpm test` — 9/9 passed
- `pnpm build` — success (Next.js 16.2.10, 11 static pages) · `pnpm start` — serves with security headers
- Production output grep: no "[FIXTURE]" strings — fixtures fully dead-code-eliminated

## Lighthouse (production server; diagnostic)
- Home: Performance 99 · Accessibility 96 · Best Practices 100 · SEO 100
- Projects: Performance 89–99 (run variance) · Accessibility 100 · Best Practices 100 · SEO 100
Targets (≥90 / ≥95 / ≥95) met.

## Security headers (verified via curl against pnpm start)
CSP (default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self' mailto:; frame-ancestors 'none'; upgrade-insecure-requests), X-Content-Type-Options: nosniff, Referrer-Policy: strict-origin-when-cross-origin, restrictive Permissions-Policy. Browser console showed **zero CSP violations** and zero unexplained errors on all pages (the only console entries were the expected 404 status on the 404-page test itself).

## Accessibility verification (scripted headless-Chromium + code review)
- First Tab focuses "Skip to content"; landmarks: header, nav[Primary], main, footer, nav[Footer]
- Single h1 per page; logical h1→h2→h3 order verified on Home
- Mobile nav (Radix Sheet): opens as dialog, Escape closes, focus returns to trigger (verified)
- Gallery dialog: title, Escape, focus trap/return, arrow-key navigation (Radix + implementation)
- Filters: native selects, labelled, keyboard-operable; result count in aria-live=polite; active state shown by gold underline + not colour alone
- Contrast: all 11 brand pairs computed ≥ 5.1:1 (min: gold on navy-soft 5.10; body pairs ≥ 6.17) — WCAG AA met
- Reduced motion: datum line fully drawn (stroke-dashoffset 0) and headings opacity 1 immediately (verified via emulated prefers-reduced-motion)
- NVDA/manual screen-reader pass not possible in this environment — recommended on Windows before launch (noted limitation)

## Functional checks (scripted, dev + prod)
- Filter select → URL `?typology=Commercial`, count "1 project" · browser Back restores unfiltered state
- Unknown project slug → HTTP 404 · fixture detail renders in dev only
- Sitemap contains no fixture or conditional URLs (unit-tested + curl-verified)
- Contact mailto/tel links present and correctly formed

## Responsive
Screenshots at 1440 and 390 px for all routes in `docs/qa/screenshots/` (visually reviewed). Layout verified fluid across 320–1440 via clamp()-based type and 1/2/3-column grids; 200% zoom equivalent covered by the 390px verification of the same fluid layout (manual 200% spot-check recommended at launch).

## Content integrity
- No invented projects, clients, awards, metrics, founding year, staff, testimonials, socials
- No lorem ipsum, no stock or remote imagery; empty states are typed and honest
- Client identities catalogued for review only (src/content/client-review.ts); site shows "Client credentials are available on request."
- Draft marketing copy flagged in code and CONTENT_REQUIRED.md
- Mobbin not used and not claimed; research documented in docs/research/reference-matrix.md

## Remaining content requirements
See CONTENT_REQUIRED.md (projects, photography, biography/portrait, client permissions, founding year, SITE_URL, etc.).

## Known limitations
README "Known limitations" applies: no Playwright (sandbox network), NVDA pass pending, /projects perf score varies 89–99 by run (server-rendered filter route), fonts vendored from @fontsource due to blocked Google Fonts (identical self-hosting behaviour).
