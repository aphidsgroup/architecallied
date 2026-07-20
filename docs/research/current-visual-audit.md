# Current visual audit — pre-redesign (2026-07-20)

Method: live production build inspected in headless Chromium at 1440×900 and 390×800 (fresh captures), plus review of all 14 QA screenshots. Each stated weakness was verified, not assumed.

| Dimension | Verdict | Evidence |
|---|---|---|
| Hero impact | **Weak-competent.** Large navy field reads as empty rather than monumental: wordmark ≈88px occupies <15% of viewport; the two clip-path planes are nearly invisible (navy-soft on navy, gold/10); datum line is small (max-w-2xl, 1.5px) and terminates without consequence | cur-hero-1440 |
| Typography | **Uniform.** Single family (Jost 300/400/600) at conventional scale steps; no editorial contrast between display and utility voices; hero statement set like a subtitle | all pages |
| Navigation | **Template-grade.** Standard right-aligned uppercase link row + hamburger sheet; nothing authored | header on every page |
| Section composition | **Repetitive.** Every section = same 1360px container, 12-col grid, label→heading→content stack; rhythm is even and therefore flat | home-1440 |
| Rhythm | Alternating navy/cream/white bands is the only pacing device; section heights similar; no dense/open contrast | home-1440 |
| Image/art direction | **Absent.** No imagery, textures or material presence anywhere; "Imagery forthcoming" boxes in fixtures | site-wide |
| Component originality | Buttons, selects, cards, dl-rows are all standard patterns; only the datum line is proprietary and it is under-used | — |
| Interaction quality | Hover = underline/colour swap only; no interaction worth remembering | — |
| Animation choreography | Basic fade/translate entrances + one line draw; no system connecting them | motion spec |
| Mobile composition | Correct but compressed desktop, not reinterpreted; hero at 390px is mostly empty navy | home-390 |
| Projects empty state | **Confirmed defect.** Three enabled-looking filters + "0 projects" above the empty-state panel signals unfinished, not curated | projects-1440 |
| Expertise presentation | Plain 2-col text list with no descriptions visible on home; /expertise is six similar rows | expertise-1440 |
| Approach section | Standard numbered list on navy; oversized indices help but layout is predictable | home-1440-b |
| Leadership section | Generic two-column text block | home-1440-b |
| Contact CTA / page | Right half of /contact viewport is empty; CTA section is heading+two buttons (the template pattern to avoid) | cur-contact-1440 |
| Footer | Conventional 4-col + legal row | all pages |
| Brand memorability | Colours are distinctive; composition is not. Remove the logo and this could be any tasteful studio | overall |

## Additional observations (not in the brief)
- The header monogram + lowercase wordmark lockup is the strongest branded moment on the site — the hero doesn't build on it.
- Gold is used timidly (labels, one border); it never behaves like a material.
- The 45° language of the logo appears only in two invisible hero planes; nowhere else.
- `/expertise` numbers (01–06) and `/about` fact table are the germ of an index system worth amplifying.
- Focus states are correct but visually generic (browser-style ring recoloured).

## Conclusion
Technically sound; visually unauthored. The redesign must attack: hero monumentality, editorial type contrast, a real datum identity system, section-specific compositions, an authored projects empty state, and one memorable interaction per key section.
