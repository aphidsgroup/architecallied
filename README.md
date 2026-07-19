# Archi-tec Allied — practice website

Editorial-minimal architecture-practice website for **archi-tec allied** (Archi-tec Allied), Chennai & Bhubaneswar. Built with the approved specification in `docs/design/` and the content-integrity rules in `CONTENT_REQUIRED.md`.

## Stack (exact versions pinned in pnpm-lock.yaml)
- Next.js **16.2.10** (App Router; latest patched stable at build time, 2026-07-20)
- React 19.2.4 · TypeScript 5 (strict) · Tailwind CSS 4.3.3
- GSAP 3.15.0 + @gsap/react 2.1.2 (section-heading entrances only)
- Radix UI primitives (shadcn-style components vendored in `src/components/ui/` — see `docs/research/skills-used.md`)
- Jost (SIL OFL) self-hosted via `next/font/local` from `src/fonts/`
- Vitest (unit + fixture/sitemap-exclusion tests)
- pnpm 11

## Commands
```bash
pnpm install         # install (allowBuilds for sharp is preconfigured)
pnpm dev             # develop at http://localhost:3000
pnpm lint            # ESLint — zero errors
pnpm type-check      # tsc --noEmit — zero errors
pnpm test            # Vitest — 9 tests
pnpm build && pnpm start   # production build + serve (CSP active)
```

## Environment (`.env.local`, template in `.env.local.example`)
- `SITE_URL` — production origin. **Required before deployment**; drives canonicals, OG, robots, sitemap.
- `NEXT_PUBLIC_ENABLE_FIXTURES` — `true` shows clearly-labelled dev fixture projects in `pnpm dev` only. Hard-excluded from production builds, sitemap, metadata and JSON-LD (tested).

## Editing content
All content is typed local data in `src/content/`:
- `site.ts` — verified facts (name, principal, offices, contacts) + DRAFT positioning copy flagged `draft: true`
- `projects.ts` — project schema + `publishedProjects` (currently empty)
- `expertise.ts`, `team.ts` — informational content
- `client-review.ts` — client publication pipeline (nothing here renders)

### Publishing a project
1. Add verified facts + rights-cleared photography under `public/images/<slug>/`.
2. Append a `Project` object to `publishedProjects` in `src/content/projects.ts` with `published: true`.
3. `pnpm test && pnpm build`. The project page, metadata, sitemap entry and related-project links generate automatically; expertise items for its typology begin linking to the filtered grid.

### Approving client logos
Work through `src/content/client-review.ts` + `docs/research/client-permissions.md` with the practice; only after written confirmation change an entry to `approved` and build a `/clients` route. Until then the site says only: "Client credentials are available on request."

## Brand assets
Production logo crops in `public/brand/` were derived non-destructively from the supplied PNGs (originals preserved at repo root and `source-assets/`). Process + QA: `docs/brand/logo-processing.md`. Logo gold #C5A75F is never recoloured; interface gold is #C6A75E.

## Security
CSP and security headers are configured in `next.config.ts` (static-compatible policy; `frame-ancestors 'none'`, no X-Frame-Options by design). Verified against production build — see `docs/qa/final-report.md`.

## Deployment notes
Not deployed (per instruction). Before deploying: set `SITE_URL`, review DRAFT copy flags, run the full test matrix in `docs/qa/final-report.md`. Any host that runs `next start` or supports Next.js 16 works; `/projects` is server-rendered (query filters), the rest is static.

## Known limitations
- No published projects/photography yet — `/projects` intentionally shows an honest empty state.
- Conditional routes (`/about/principal`, `/about/people`, `/clients`, `/insights`, `/careers`) deliberately do not exist until verified content arrives.
- Contact is mailto/tel by design; a form backend needs validation, spam protection, rate limiting and a privacy-policy update.
- Playwright browser smoke tests could not run in the build sandbox (browser download blocked); equivalent checks were scripted with puppeteer-core + @sparticuz/chromium and documented in the QA report. Re-run `docs/qa` checks with Playwright locally if desired.
- Draft copy marked in `src/content/site.ts` and `src/content/expertise.ts` requires client review.
