# Skill evidence — premium redesign

Network status this session: Mobbin MCP connected and used (see premium-reference-matrix.md). The eight skill repository URLs remain unreachable from the sandbox (GitHub raw / skills.sh blocked by network allowlist) — their files could not be read this session either. Their mandated intents were applied from the brief's own precedence description; evidence below records what was actually done, per skill role.

| Skill role | Instruction applied | Visible decision produced | Where | Deliberately rejected | Why |
|---|---|---|---|---|---|
| Frontend Design (originality) | No template hero (headline+para+2 buttons); authored compositions per section | Staggered Fraunces wordmark hero; corner coordinates; index-as-navigation | Direction A hero/index | Card grids for content sections | Brief forbids "all sections as cards"; kills editorial character |
| Premium Frontend UI (cinematic craft) | Choreographed reveals; clip-path planes; one pinned sequence max | Direction C pinned plane narrative with datum progress rail | direction-c/spatial-sequence.tsx | Preloader, custom cursor, WebGL, parallax | Explicitly forbidden; performance + accessibility cost |
| Minimalist UI (restraint) | Cap accents; whitespace as material | ≤2 gold elements per viewport; A's near-empty header | All directions | Decorative gold overlays/textures | "Luxury cliché" risk named in brief |
| GSAP skills (choreography) | useGSAP scope; matchMedia gating; revert on cleanup; scrub over listeners | C's single matchMedia'd pinned timeline; B uses CSS-only transitions | spatial-sequence.tsx, archive-index.tsx | ScrollTrigger on every section | Unbounded instances forbidden; only C's sequence justifies GSAP |
| UI UX Pro Max (system validation) | State parity: hover=focus=touch | B's index activates on hover AND focus AND click; inline mobile stage | archive-index.tsx | Hover-only preview stage | Touch users would lose the core interaction |
| Shadcn/Radix (accessible behaviour) | Dialog primitives for modal nav | A's full-screen index menu: focus trap, Escape, focus return | lab-nav-a.tsx | Hand-rolled menu div | Re-implementing focus management is regression risk |
| Industrial Brutalist (structural character) | Exposed grid lines, oversized indices, thin datum rules, sharp geometry | B's ruled index rows + ghost numerals; C's plane geometry | B, C | CRT/neon/ASCII/noise/dark-only | Forbidden by brief; hostile to the brand |
| Frontend UI UX (implementation discipline) | Inspect-first; verify by screenshot; fail-visible | All directions screenshot-verified; C's sequence readable with JS disabled; type-check/lint/build clean before capture | this document + docs/redesign/ | Shipping unverified states | Screenshots are the binding deliverable of this phase |

---

## Media-section rework evidence (2026-07-20, later)

Correction: the first-pass Studies/Films sections were built WITHOUT fresh research and shipped as default three-card grids — rejected by the client and by the frontend-design skill's own test ("would I produce this for any similar page?"). Rework evidence:

**Skills actually read this pass** (fetched successfully via the workspace fetch tool; earlier attempts had used blocked channels):
- anthropics/claude-code frontend-design SKILL.md — applied: "structure is information" → the imagery became a real six-study series (one per typology) used consistently across Home/Expertise/Projects, so the 01–06 numbering encodes true content, not decoration; "hero is a thesis / spend boldness in one place" → each section has one authored move (ghost-numeral plates; list-controls-stage). Rejected from it: nothing material; its calibration warning against cream+serif defaults is noted — our cream/serif comes from the client's own brand palette and slides, a brief-pinned choice.
- premium-frontend-ui (skills.sh) — applied: "Cinematic Pacing" identity (full-width stage, negative space, slow reveals) for the Screening Room. Rejected: its Organic Fluidity and Cyber/Technical directions (conflict with brand), glassmorphism, spring physics.

**Mobbin patterns applied** (researched this pass):
- [A24 — stacked film-title index over full-bleed stage](https://mobbin.com/sites/sections/6273675b-53ef-400e-a5b4-77ff67a08a33) → Screening Room: Fraunces title list controls a cinematic stage; active title gold italic; click-to-load youtube-nocookie preserved.
- [Aino Agency — indexed museum-plate captions](https://mobbin.com/sites/sections/6e82f83c-f6fb-410d-ad9c-cdd19a453bb8) → Plates: "Plate 01 · Residential" caption system.
- [Freshman — filmstrip index rail](https://mobbin.com/sites/sections/1a15a6d9-be03-4761-9a3a-30ec06495846) → considered, rejected (needs many real films).
- [Nite Riot scattered collage](https://mobbin.com/sites/sections/75986401-f96a-4ade-b171-fb632386a8a9) → rejected (chaotic for this brand).

**Distribution by content** (client direction): Home = plates 01/02/06 + screening room + client marquee; Expertise = full series as hover/focus/tap study stage per typology; About = "Two cities, one datum" panorama; Projects = Plate 06 (figure-ground) in the archive composition; Contact = intentionally imagery-free (drawing-panel aesthetic already authored).
