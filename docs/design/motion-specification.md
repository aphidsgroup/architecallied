# Motion specification

Principles: motion explains structure; content never depends on animation; everything respects prefers-reduced-motion (instant final state).

| Element | Tech | Behaviour | Duration/ease |
|---|---|---|---|
| Hero datum sweep | Pure CSS SVG stroke-dashoffset | Draws once on load, 0.4s delay | 1.2s cubic-bezier(0.65,0,0.35,1) |
| Hero heading/planes | CSS opacity+translateY | Staggered entrance 80ms | 0.7s ease-out |
| Section headings | GSAP + useGSAP, scoped, reverted on cleanup | opacity 0→1, y 24→0, once, ScrollTrigger start 80% | 0.7s power2.out |
| Project grid filter change | CSS transition on cards | opacity/translate micro-transition | 0.25s |
| Active filter underline | CSS transform scaleX | grows from left | 0.3s |
| Mobile nav | Radix/Shadcn Sheet defaults | slide-in, focus trap | default |
| Links/buttons | CSS | colour/underline-offset | 0.2s |

GSAP rules: only core + ScrollTrigger, registered once client-side; useGSAP({scope}); transforms/opacity only; max ~4 ScrollTrigger instances per page; no pinning, no scrub, no scroll hijack. matchMedia("(prefers-reduced-motion: reduce)") → gsap.set final states / animations skipped; CSS handled via media query.
