# CONTENT_REQUIRED — Archi-tec Allied website

Items the practice must supply or confirm before the related content can be published. Nothing below has been invented; missing items use honest empty states or draft-marked copy.

## Blocking real content (site launches without them, with honest placeholders)
1. **Projects** — for each project: title, location, typology, services, client (if publishable), year, status, areas, narrative (brief/context/challenge/response/materials/climate/outcome), photography with usage rights, credits. Until supplied, /projects shows an honest empty state and no project pages exist.
2. **Client list publication** — confirm relationship, preferred display name and permission for every client in docs/research/client-permissions.md. Until then the site states: "Client credentials are available on request."
3. **Principal Architect biography + portrait** — required before /about/principal is created.
4. **Team information** — required before /about/people.
5. **Positioning statement / practice description** — current About and hero copy is DRAFT, marked for client review in src/content/site.ts (`draft: true` flags).
6. **Founding year** — not stated in supplied materials; not published.
7. **Awards, publications, testimonials, sustainability metrics** — none supplied; none published.
8. **Social media profiles** — none supplied; no social links rendered.
9. **Careers information** — required before /careers.
10. **Insights/articles** — required before /insights.
11. **Production domain** — SITE_URL env var currently uses a placeholder; set before deployment. Canonicals/OG/sitemap depend on it.
12. **Privacy policy review** — /privacy contains an accurate minimal policy (no analytics, no forms storing data); have it reviewed if analytics or a form backend is added.
13. **Century Gothic licence** — if the practice buys a web licence, the Jost substitution can be revisited.

## Safe reversible assumptions taken (recorded per instruction)
- "Bhoomikal" spelling kept as supplied in the brief (slide 5 shows "bhoomikal"); confirm locality spelling (possibly "Bomikhal").
- Chennai pin rendered as "Chennai – 600017" per brief (slide shows 600 017).
- Interface gold #C6A75E used for UI accents; logo files remain #C5A75F untouched.
- English-only site assumed.
- mailto/tel direct contact links used; no form backend.

15. (superseded by #14a below) Practice films to replace curated media — the Films section currently embeds clearly-labelled third-party architecture films, and the Studies section uses AI-generated brand imagery. Replace both with practice films and real project photography when available.

14a. **REAL PHOTOGRAPHY — highest priority.** The client has asked for real photographic imagery site-wide. It cannot be sourced from the build environment. Drop seven JPGs into public/images/photos/ (photo-residential.jpg, photo-commercial.jpg, photo-institutional.jpg, photo-industrial.jpg, photo-interiors.jpg, photo-planning.jpg ~1600x1200; photo-panorama.jpg ~2400x800) — own photography or properly licensed stock — and rebuild: every imagery slot (home plates, expertise stage, about panorama, projects plate, hero cursor trail) switches to the photos automatically. Record each file's licence in ATTRIBUTIONS.md.
