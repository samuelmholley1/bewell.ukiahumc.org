# Be Well Center — Build Progress Log
**Started:** February 13, 2026
**Repo:** bewell.ukiahumc.org
**Stack:** Next.js 15.5.9 · React 19 · TypeScript 5 · Tailwind v4 · Yarn Berry 4.10.2

---

## Build Log

### Phase 0: Clone & Setup
- [x] Clone donate.ukiahseniorcenter.org as base
- [x] Copy into workspace, init fresh git
- [x] Verify base structure intact

### Phase 1: Cleanup
- [x] Delete demo/loading/unused components
- [x] Delete lib/, hooks/, ErrorBoundary
- [x] Delete vestigial docs (CODEBASE_AUDIT, QUICKBOOKS, README)
- [x] Delete package-lock.json, .env.local
- [x] Update package.json name/description
- [x] Clean public/ (removed logo.png, og.png, ukiah_senior_center_logo.pdf, zero_tip.png)
- [x] Update site.webmanifest (name, colors)

### Phase 2: Brand Assets
- [x] Rename logo PNGs to kebab-case
- [x] Copy logos to public/
- [x] Create OG image placeholder

### Phase 3: Tailwind v4 CSS
- [x] Replace globals.css with @theme + @layer components
- [x] Verified NO tailwind.config.js created
- [x] Update layout.tsx with next/font (Inter + Merriweather)

### Phase 4: Components (Initial MVP)
- [x] Header.tsx, Footer.tsx, Button.tsx, LoadingStates.tsx, Modal.tsx, Toast.tsx, Section.tsx
- [x] Hero, WhatWeAre, WhoItsFor, ProcessTimeline, GetInvolved, FAQ, RootedInUkiah

### Phase 5: Assembly (Initial MVP)
- [x] page.tsx (import all sections + waitlist placeholder)
- [x] layout.tsx (Header + Footer wrapping children, metadata, OG tags)

### Phase 6: Git + Deploy
- [x] Create GitHub repo: samuelmholley1/bewell.ukiahumc.org
- [x] Initial commit + push (42 files, 7225 insertions)
- [ ] Vercel deployment (user handles)

### Phase 7: Redesign — Donor/Volunteer/Board Recruitment Focus
- [x] Streamlined from 8 sections → 5 (Hero → The Need → The Vision → How to Help → Contact)
- [x] Rewrote Hero.tsx — emotional hook, single CTA, photo placeholder
- [x] Created TheNeed.tsx — gap in Mendocino County services, photo placeholder
- [x] Created TheVision.tsx — 3-bullet vision, photo placeholder
- [x] Created HowToHelp.tsx — 3 cards: Donate / Volunteer / Join Our Board
- [x] Created Contact.tsx — email + phone cards, church attribution
- [x] Updated Header.tsx — 4 nav items (The Need, Our Vision, Help, Contact), "Get Involved" CTA
- [x] Updated Footer.tsx — quick links match new section IDs, phone number added
- [x] Rebuilt page.tsx — imports new 5 sections only
- [x] Deleted old components (WhatWeAre, WhoItsFor, ProcessTimeline, GetInvolved, FAQ, RootedInUkiah)
- [x] Switched to transparent logo assets (BeWell-icon-transparent.png, BeWell-logo-transparent.png)
- [x] Build passes: 779 B page, 108 kB first load JS (down from 4.21 kB / 112 kB)

### Phase 8: Photos
- [x] Generated hero-bg.png, need-photo.png, vision-photo.png (AI-generated)
- [x] Wired into Hero, TheNeed, TheVision — no more gradient placeholders
- [x] Build passes: 770 B page, 108 kB first load JS

### Phase 9: Favicons & OG Image
- [x] Generated favicons from BeWell-icon-transparent.png (16, 32, 48, 180, 192, 512px)
- [x] Created OG image (1200×630) — cream bg, Be Well logo, tagline
- [x] Build passes: 770 B page, 108 kB first load JS
- [x] Committed + pushed

---

## Photo Sourcing Guide

~~The site has **3 photo placeholders** that need real images.~~ **DONE** — All 3 photos generated and wired in (Phase 8).

| Placeholder | Filename | What to Use | Where It Appears |
|---|---|---|---|
| Hero background | `hero-bg.jpg` | Warm, soft-focus image — elderly hands being held, a sunlit garden, or a peaceful courtyard. Emotional, not clinical. | Full-bleed behind the hero headline |
| The Need section | `need-photo.jpg` | A caregiver looking tired but caring — or an elderly person alone. Should evoke empathy, not pity. Could be a stock photo of an empty chair / quiet living room. | Left column of "The Need" 2-col grid |
| The Vision section | `vision-photo.jpg` | Bright, welcoming interior — a community room with natural light, plants, art supplies, or people doing an activity together. Aspirational. | Right column of "Our Vision" 2-col grid |

**Sourcing tips:**
- **Unsplash** (unsplash.com) — free, high quality, no attribution required
- **Pexels** (pexels.com) — free, good elderly care / community images
- Search terms: "elderly care", "senior hands", "memory care", "community center interior", "caregiver", "sunlit room"
- Aim for **1200×800px minimum**, landscape orientation
- Keep file sizes under 500KB (compress with squoosh.app if needed)
- After adding images, update the components to use `<Image src="/hero-bg.jpg" ... />` etc. in place of the gradient placeholders

---

## Troubleshooting & Quirks

1. **`@theme` lint warning in VS Code** — VS Code's CSS language service shows "Unknown at rule @theme" in globals.css. This is cosmetic — Tailwind v4's `@theme` is processed by `@tailwindcss/postcss` at build time, not by the CSS spec. Build and dev server both compile without errors. Install the Tailwind CSS IntelliSense extension to suppress.

2. **Yarn `nodeLinker` warning** — `YN0057: Unrecognized installConfig key: nodeLinker`. This is because the `nodeLinker` setting should be in `.yarnrc.yml` (where it already is), not in `package.json`'s `installConfig`. Harmless — Yarn still uses `node-modules` linker from `.yarnrc.yml`.

3. **Button.tsx / LoadingStates.tsx color updates** — Original donate repo used `blue-600` and `slate-*` hardcoded colors. Updated to use `primary` semantic color to match Be Well brand.

4. **`color-mix()` for hover states** — Used `color-mix(in srgb, var(--color-primary) 90%, black)` in component classes. Supported in all modern browsers (Chrome 111+, Firefox 113+, Safari 16.4+). No polyfill needed for 2026 target audience.

5. **Dev server first load** — `yarn dev` starts in ~4 seconds. Build output (post-redesign): 779 B page, 108 kB first load JS shared. Fully static — no server-side rendering needed.

6. **temp clone cleanup** — `bewell-temp-clone` folder on Desktop may still be locked. Delete manually if it persists.

---

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| No tailwind.config.js | Tw v4 auto-detects; ESM export in CJS context would SyntaxError |
| @layer components (not utilities) | Prevent cascade conflicts with Tailwind utility overrides |
| Literal hex in @theme | var() cross-refs are runtime; @theme processed at build time |
| next/font over @import url() | No FOUT, self-hosted, better Core Web Vitals |
| info@ukiahumc.org email | bewellcenter.org domain doesn't exist; use church email |
