# Typography exploration (coded, tested with real content)

Method: each candidate system was implemented in a full coded homepage direction using the actual brand name, hero statement, navigation, metadata and body copy — then reviewed in rendered screenshots at 1440/390. All faces are SIL OFL, vendored from @fontsource-variable (licences in src/fonts/lab/), self-hosted via next/font/local, max two families per system.

## System A — Editorial contrast: Fraunces (opsz variable) + Jost
Used in Direction A. Fraunces roman/italic at display size gives true editorial authorship (the italic gold "allied" is the single strongest brand moment produced in this exploration); Jost handles utility/metadata cleanly. Numerals and small caps excellent. Risk: serif display must never be used at body size on navy (checked: body remains Jost). **Verdict: strongest brand voice.**

## System B — Grotesk modernism: Space Grotesk (wght variable) + Jost
Used in Direction B. Space Grotesk's idiosyncratic terminals give the index rows character at large sizes; tabular-feeling numerals suit archive numbering. Risk: reads slightly "tech" in long headlines; mitigated by editorial layout. **Verdict: best for data/index-driven presentation.**

## System C — Architectural grotesk widths: Archivo (wdth variable), single family
Used in Direction C. Width contrast (78%–125%) inside one family creates the display hierarchy (expanded caps vs condensed) with zero extra font weight cost; strong uppercase and numerals. Risk: uppercase-heavy settings reduce warmth; body kept sentence-case. **Verdict: most spatial/cinematic; most economical (one family).**

## Rendering notes
- All three verified legible at 390px; no ultra-light weights below 44px anywhere.
- Rejected candidates: Syne (reads "creative-agency"), Outfit/Sora (SaaS default favourites), ultra-light Jost display (current site's weakness), any non-self-hostable faces.
- Final recommendation follows the direction choice: the selected direction adopts its tested system site-wide; Jost remains the utility/body companion for A and B.
