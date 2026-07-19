# Skills and component sources used

## Requested skill repositories
The build environment's network allowlist blocked GitHub raw content, skills.sh and ui.shadcn.com, so the requested third-party skill files (Frontend Design, Shadcn SKILL.md, UI UX Pro Max, GSAP skills, Minimalist UI, Industrial Brutalist UI, Premium Frontend UI, Frontend UI UX) could NOT be downloaded and were NOT installed. No unverified third-party scripts, hooks, agents or MCP servers were executed.

Their documented intents were applied from the approved brief's precedence list instead:
- Frontend Design / Minimalist UI → visual authorship and restraint (docs/design/design-system.md)
- Industrial Brutalist UI → grids, exposed alignment, crisp rules, large type only — no CRT/neon/aggressive brutalism
- Premium Frontend UI → selective craftsmanship; its forbidden list (preloaders, cursors, scroll hijack…) enforced
- GSAP skills → useGSAP scoping, cleanup/revert, reduced-motion guards (src/components/section-heading.tsx)
- Shadcn → accessible primitive behaviour via Radix

## Shadcn workflow note
`shadcn init/add` requires https://ui.shadcn.com, which the environment blocks (HTTP 403 from the network allowlist; `pnpm dlx shadcn@latest info` fails the same way). Components were therefore vendored manually in shadcn style on Radix primitives installed from npm:
- src/components/ui/button.tsx (Button + CVA variants)
- src/components/ui/dialog.tsx (Radix Dialog — gallery)
- src/components/ui/sheet.tsx (Radix Dialog as side panel — mobile nav)
- src/components/ui/separator.tsx
components.json is present so the real CLI can manage the project on an unrestricted machine.

## Cowork-local skills
Anthropic pptx/pdf skill tooling context was available; PPTX inspection used python-pptx + LibreOffice rendering (all slides visually verified).
