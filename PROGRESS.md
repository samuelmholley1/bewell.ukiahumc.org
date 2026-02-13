# Be Well Center — Build Progress Log
**Started:** February 13, 2026
**Repo:** bewell.ukiahumc.org
**Stack:** Next.js 15.5.9 · React 19 · TypeScript 5 · Tailwind v4 · Yarn Berry 4.10.2

---

## Build Log

### Phase 0: Clone & Setup
- [ ] Clone donate.ukiahseniorcenter.org as base
- [ ] Copy into workspace, init fresh git
- [ ] Verify base structure intact

### Phase 1: Cleanup
- [ ] Delete demo/loading/unused components
- [ ] Delete lib/, hooks/, ErrorBoundary
- [ ] Delete vestigial docs (CODEBASE_AUDIT, QUICKBOOKS, README)
- [ ] Delete package-lock.json, .env.local
- [ ] Update package.json name/description

### Phase 2: Brand Assets
- [ ] Rename logo PNGs to kebab-case
- [ ] Copy logos to public/
- [ ] Create OG image placeholder

### Phase 3: Tailwind v4 CSS
- [ ] Replace globals.css with @theme + @layer components
- [ ] Verify NO tailwind.config.js created
- [ ] Update layout.tsx with next/font (Inter + Merriweather)

### Phase 4: Components
- [ ] Header.tsx (sticky, mobile menu, nav links)
- [ ] Footer.tsx (3-col grid, contact info)
- [ ] Button.tsx, Modal.tsx, LoadingStates.tsx, Toast.tsx (copy from donate)
- [ ] Section.tsx (wrapper)
- [ ] Hero.tsx (2-col, CTAs)
- [ ] WhatWeAre.tsx
- [ ] WhoItsFor.tsx
- [ ] ProcessTimeline.tsx
- [ ] GetInvolved.tsx
- [ ] FAQ.tsx (accordion)
- [ ] RootedInUkiah.tsx

### Phase 5: Assembly
- [ ] page.tsx (import all sections)
- [ ] layout.tsx (Header + Footer wrapping children)
- [ ] Metadata + OG tags

### Phase 6: Git + Deploy
- [ ] Create GitHub repo: samuelmholley1/bewell.ukiahumc.org
- [ ] Initial commit + push
- [ ] Vercel deployment (user handles)

---

## Troubleshooting & Quirks

_(Logged as encountered)_

---

## Decisions Made

| Decision | Rationale |
|----------|-----------|
| No tailwind.config.js | Tw v4 auto-detects; ESM export in CJS context would SyntaxError |
| @layer components (not utilities) | Prevent cascade conflicts with Tailwind utility overrides |
| Literal hex in @theme | var() cross-refs are runtime; @theme processed at build time |
| next/font over @import url() | No FOUT, self-hosted, better Core Web Vitals |
| info@ukiahumc.org email | bewellcenter.org domain doesn't exist; use church email |
