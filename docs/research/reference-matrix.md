# Reference research matrix

Method: direct fetch/inspection of the two supplied reference sites on 2026-07-20. Mobbin was NOT used (MCP unavailable). Patterns only — no layouts, code, copy, imagery or branding copied.

| # | Source | Page/section | Pattern observed | Why it works / fails | Decision | Archi-tec Allied translation |
|---|--------|--------------|------------------|----------------------|----------|------------------------------|
| 1 | Hafeez Contractor (HC) | Home nav | Project-first IA: Projects is the first nav item | Portfolio is the product; visitors want work first | Adopt | Nav order: Projects, Expertise, About, Contact |
| 2 | HC | /projects?categories=… | Typology filtering persisted in URL query params | Shareable/bookmarkable filtered views, back/forward works | Adopt | Typology + location + status filters in URL query state |
| 3 | HC | Home "Areas of expertise" | Expertise chips deep-link into filtered project grid | Connects services to evidence | Adapt | Only link expertise→filter once ≥1 published project exists in that category; until then informational only |
| 4 | HC | Project detail (The 42) | Compact metadata block: typology, location, client, status+year, team, key figure | Scannable facts beside imagery builds credibility | Adopt | Typed metadata list; render only populated verified fields |
| 5 | HC | Project detail | Related projects by shared typology | Keeps browsing momentum | Adopt | relatedProjects in template (needs ≥2 published projects) |
| 6 | HC | Office section | Split About: firm / principal / people / culture | Scales for a large firm; empty pages for a small one | Adapt | Single /about now; /about/principal and /about/people are conditional routes gated on verified content |
| 7 | HC | Footer | Address, enquiry emails, careers link, compact sitemap | Direct contact routes, no forms | Adopt | Footer: both offices, mailto/tel links, mini-nav |
| 8 | HC | Home hero | Full-screen video/imagery hero | Needs real footage; would force fake content | Reject | Solid navy typographic hero with angular planes + datum line |
| 9 | HC | Home | Auto-advancing carousels (featured, news) | Accessibility and control issues; content-hungry | Reject | Static selected-work grid; no carousels, no auto-advance |
| 10 | HC | Global | Light/dark mode toggle | Extra surface, dilutes brand palette | Reject | Single brand palette |
| 11 | HC | Home | News/press strip with external citations | Needs genuine press; would require fabrication | Reject (defer) | /insights conditional route only when real articles exist |
| 12 | Morphogenesis (M) | Home intro | Positioning paragraph naming founders, year, philosophy up front | Establishes authorship and credibility instantly | Adapt | Draft positioning naming S. Ravikumar, B.Arch; founding year withheld until verified |
| 13 | M | Home SOUL© | Named, structured design process (4 pillars) | Turns philosophy into memorable structure | Adapt | "Practice approach" section: numbered plain-language principles (context, clarity, longevity, stewardship) marked DRAFT — no invented trademark or metrics |
| 14 | M | Home facts | Quantified proof: awards count, countries, publications | Powerful but must be true | Reject (defer) | No metrics until verified; credibility carried by tone + "Client credentials available on request" |
| 15 | M | Who we are/clients/people | Tabbed about with client-logo wall | Logo wall needs confirmed permission | Reject for launch | Client-credential statement; client-review pipeline in src/content/client-review.ts |
| 16 | M | Project narratives | Context→response→outcome storytelling per project | Evidence-based narrative depth differentiates from listing-style portfolios | Adopt | Project fields: context, challenge, architecturalResponse, materialStrategy, climateResponse, userOutcome |
| 17 | M | Global | Editorial pacing: alternating dense/spacious sections | Reads as a publication, feels considered | Adopt | Home alternates navy/cream/white bands with generous whitespace |
| 18 | M | /expertise | JS-only rendering, content blocked without JS | Fragile, bad for SEO/a11y | Reject | Server-rendered static pages throughout |
| 19 | Both | Global | Restrained palettes, typography-led hierarchy | Premium without ornament | Adopt | Jost-led hierarchy on navy/beige/cream system |
| 20 | Both | Project grids | Image-dominant cards with title + typology + location caption | Standard, effective discovery unit | Adopt | Project card component ready; honest empty state until photography exists |
