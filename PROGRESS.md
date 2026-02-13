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

### Phase 4: Components
- [x] Header.tsx (sticky, mobile menu, nav links)
- [x] Footer.tsx (3-col grid, contact info, ukiahumc.org email)
- [x] Button.tsx — updated colors from blue-600 to primary
- [x] LoadingStates.tsx — updated spinner color to primary
- [x] Modal.tsx, Toast.tsx (kept as-is, brand-agnostic)
- [x] Section.tsx (wrapper)
- [x] Hero.tsx (2-col, CTAs)
- [x] WhatWeAre.tsx
- [x] WhoItsFor.tsx
- [x] ProcessTimeline.tsx
- [x] GetInvolved.tsx
- [x] FAQ.tsx (accordion)
- [x] RootedInUkiah.tsx

### Phase 5: Assembly
- [x] page.tsx (import all sections + waitlist placeholder)
- [x] layout.tsx (Header + Footer wrapping children, metadata, OG tags)

### Phase 6: Git + Deploy
- [x] Create GitHub repo: samuelmholley1/bewell.ukiahumc.org
- [x] Initial commit + push (42 files, 7225 insertions)
- [ ] Vercel deployment (user handles)

---

## Troubleshooting & Quirks

1. **`@theme` lint warning in VS Code** — VS Code's CSS language service shows "Unknown at rule @theme" in globals.css. This is cosmetic — Tailwind v4's `@theme` is processed by `@tailwindcss/postcss` at build time, not by the CSS spec. Build and dev server both compile without errors. Install the Tailwind CSS IntelliSense extension to suppress.

2. **Yarn `nodeLinker` warning** — `YN0057: Unrecognized installConfig key: nodeLinker`. This is because the `nodeLinker` setting should be in `.yarnrc.yml` (where it already is), not in `package.json`'s `installConfig`. Harmless — Yarn still uses `node-modules` linker from `.yarnrc.yml`.

3. **Button.tsx / LoadingStates.tsx color updates** — Original donate repo used `blue-600` and `slate-*` hardcoded colors. Updated to use `primary` semantic color to match Be Well brand.

4. **`color-mix()` for hover states** — Used `color-mix(in srgb, var(--color-primary) 90%, black)` in component classes. Supported in all modern browsers (Chrome 111+, Firefox 113+, Safari 16.4+). No polyfill needed for 2026 target audience.

5. **Dev server first load** — `yarn dev` starts in ~4 seconds. Build output: 4.21 kB page, 112 kB first load JS shared. Fully static — no server-side rendering needed.

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
