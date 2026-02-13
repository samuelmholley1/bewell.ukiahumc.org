# Be Well Center - REVISED Implementation Plan
**POST-CTO AUDIT — PRODUCTION-READY DIRECTIVES**

---

## EXECUTIVE SUMMARY

The original guide had **three critical flaws** that would cause build failures:

1. **Tailwind v3 syntax in a v4 repo** (config mismatch, `@tailwind` directives won't compile)
2. **Domain inconsistency** (guide says bewellcenter.org, deployment target is bewell.ukiahumc.org)
3. **Incomplete cleanup** (missed lib/, hooks/, vestigial files from donate repo)

**This revision fixes all issues and provides EXACT v4-compatible instructions.**

---

## PHASE 0: Clone & Initial Setup

```bash
# Clone donate repo as base
git clone https://github.com/samuelmholley1/donate.ukiahseniorcenter.org.git bewell.ukiahumc.org
cd bewell.ukiahumc.org
rm -rf .git
git init
git remote add origin [YOUR_BEWELL_REPO_URL]
```

**Why donate repo:**
- Yarn Berry 4.10.2 with `nodeLinker: node-modules` (no PnP issues)
- Next.js 15.5.9 (latest patched, CVE-safe)
- React 19 + TypeScript 5
- Tailwind v4 already configured correctly

---

## PHASE 1: COMPLETE Cleanup

### 1.1 Delete ALL these paths:

```bash
# Original guide's cleanup
rm -rf src/app/demo
rm -rf src/app/loading
rm src/components/ZeffyModal.tsx
rm src/components/SiteNavigation.tsx
rm src/components/SiteFooterContent.tsx

# MISSED FILES - Critical additions
rm -rf src/lib
rm -rf src/hooks
rm src/components/ErrorBoundary.tsx
rm CODEBASE_AUDIT.md
rm QUICKBOOKS_QUERYING_GUIDE.md
rm README.md
rm package-lock.json
rm -f .env.local
```

### 1.2 Keep unchanged:
- `.yarnrc.yml`
- `eslint.config.mjs`
- `next.config.ts`
- `postcss.config.mjs` (already has `@tailwindcss/postcss` for v4)
- `tsconfig.json`
- `.gitignore`

### 1.3 Update package.json:

```json
{
  "name": "bewell.ukiahumc.org",
  "version": "0.1.0",
  "description": "Be Well Center - Adult Day Memory Care (Ukiah UMC)",
  "private": true
}
```

**Keep all existing dependencies unchanged** — they're already correct for v4.

---

## PHASE 2: Brand Assets

### 2.1 Rename and copy logos:

```bash
# In your workspace, rename:
# "Be Well Icon - No Text.png" → "be-well-icon.png"
# "Be Well Logo #1.png" → "be-well-full.png"
# "Be Well Logo - Text Only.png" → "be-well-text.png"

# Then copy to public:
cp be-well-icon.png public/
cp be-well-full.png public/
cp be-well-text.png public/

# OG image
cp public/be-well-full.png public/og-image.png
```

---

## PHASE 3: Tailwind v4 Configuration — CORRECTED

**CRITICAL FIX:** The donate repo uses Tailwind v4 CSS-first approach. The original guide's `tailwind.config.js` with `module.exports` and `@tailwind` directives is v3 syntax.

**DO NOT create `tailwind.config.js`.** Tailwind v4 auto-detects content paths from `./src/**/*.{js,ts,jsx,tsx}`. The donate repo's `package.json` does not have `"type": "module"`, so any `export default` in a `.js` file would throw `SyntaxError`. This file is simply unnecessary in v4.

### 3.1 Replace `src/app/globals.css` with v4-compatible version:

```css
@import "tailwindcss";

@theme {
  /* Brand Colors */
  --color-brand-gold: #D4A574;
  --color-brand-olive: #6B7F4E;
  --color-brand-green: #8FA668;
  --color-brand-blue: #6BA6C4;
  --color-brand-cream: #F8F5F0;
  
  /* Semantic Colors - literal hex values for build-time processing */
  --color-primary: #6B7F4E;
  --color-secondary: #D4A574;
  --color-accent: #8FA668;
  --color-neutral-bg: #F8F5F0;
  --color-text: #1F2937;
  
  /* Typography */
  --font-family-sans: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-family-serif: Merriweather, Georgia, "Times New Roman", serif;
  
  /* Font Sizes (senior-friendly) */
  --font-size-base: 1.125rem;    /* 18px */
  --font-size-lg: 1.25rem;       /* 20px */
  --font-size-xl: 1.5rem;        /* 24px */
  --font-size-2xl: 1.875rem;     /* 30px */
  --font-size-3xl: 2.25rem;      /* 36px */
  --font-size-4xl: 3rem;         /* 48px */
  
  /* Line Heights */
  --line-height-relaxed: 1.75;
  --line-height-loose: 2;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    background-color: var(--color-neutral-bg);
    color: var(--color-text);
    font-size: var(--font-size-lg);
    line-height: var(--line-height-relaxed);
    font-family: var(--font-family-sans);
    -webkit-font-smoothing: antialiased;
  }
  
  *:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-sans);
    font-weight: 700;
    color: var(--color-primary);
    line-height: 1.2;
  }
  
  h1 { font-size: var(--font-size-3xl); }
  h2 { font-size: var(--font-size-2xl); }
  h3 { font-size: var(--font-size-xl); }
  
  a {
    transition: color 200ms;
  }
  
  button {
    transition: all 200ms;
  }
}

@layer components {
  .container {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  
  @media (min-width: 768px) {
    .section {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }
  
  @media (min-width: 1024px) {
    .section {
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }
  
  .card {
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    padding: 1.5rem;
  }
  
  @media (min-width: 768px) {
    .card {
      padding: 2rem;
    }
  }
  
  .btn-primary {
    background-color: var(--color-primary);
    color: white;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: all 200ms;
  }
  
  .btn-primary:hover {
    background-color: color-mix(in srgb, var(--color-primary) 90%, black);
    box-shadow: 0 4px 6px rgba(0,0,0,0.15);
  }
  
  .btn-secondary {
    background-color: var(--color-secondary);
    color: white;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: all 200ms;
  }
  
  .btn-secondary:hover {
    background-color: color-mix(in srgb, var(--color-secondary) 90%, black);
    box-shadow: 0 4px 6px rgba(0,0,0,0.15);
  }
  
  .btn-outline {
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    background-color: transparent;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    transition: all 200ms;
  }
  
  .btn-outline:hover {
    background-color: var(--color-primary);
    color: white;
  }
}
```

**Why this works:**
- `@import "tailwindcss"` is v4 syntax (not `@tailwind` directives)
- `@theme` block defines CSS custom properties (v4 native)
- `@layer components` for component abstractions (`.card`, `.btn-*`), keeping utilities layer clean
- Semantic colors use literal hex values (not `var()` cross-references) for reliable build-time processing
- Colors use CSS `color-mix()` for hover states (modern, v4-compatible)
- No `tailwind.config.js` needed — v4 auto-detects content paths

---

## PHASE 4: Font Loading (Next.js 15 Best Practice)

### 4.1 Update `src/app/layout.tsx` — Add font imports:

```typescript
import { Inter, Merriweather } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
})

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-serif',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
```

**Then update globals.css font-family references:**

```css
--font-family-sans: var(--font-sans), system-ui, sans-serif;
--font-family-serif: var(--font-serif), Georgia, serif;
```

---

## COPILOT PROMPTS — REVISED SEQUENCE

### Prompt 1: Initial Setup (REVISED)

```
I've cloned donate.ukiahseniorcenter.org as the base for bewell.ukiahumc.org.

Execute COMPLETE cleanup:

1. Delete these paths:
   - src/app/demo
   - src/app/loading
   - src/components/ZeffyModal.tsx
   - src/components/SiteNavigation.tsx
   - src/components/SiteFooterContent.tsx
   - src/lib (entire directory)
   - src/hooks (entire directory)
   - src/components/ErrorBoundary.tsx
   - CODEBASE_AUDIT.md
   - QUICKBOOKS_QUERYING_GUIDE.md
   - README.md
   - package-lock.json
   - .env.local (if exists)

2. Update package.json:
   - name: "bewell.ukiahumc.org"
   - description: "Be Well Center - Adult Day Memory Care (Ukiah UMC)"

3. Verify postcss.config.mjs has @tailwindcss/postcss (should already exist—do not modify)

DO NOT create tailwind.config.js. Tailwind v4 auto-detects content paths.

Confirm when complete.
```

### Prompt 2: Tailwind v4 CSS + Fonts (REVISED)

```
Replace src/app/globals.css with this EXACT Tailwind v4 configuration:

[Paste the complete globals.css from Phase 3.2 above]

Then update src/app/layout.tsx to add Next.js font optimization:

1. Add imports at top:
   import { Inter, Merriweather } from 'next/font/google'

2. Add font configs before RootLayout:
   const inter = Inter({
     subsets: ['latin'],
     display: 'swap',
     variable: '--font-sans',
   })
   
   const merriweather = Merriweather({
     subsets: ['latin'],
     weight: ['400', '700'],
     display: 'swap',
     variable: '--font-serif',
   })

3. Update html tag:
   <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>

Run yarn dev and verify:
- No Tailwind errors
- Colors defined (check browser DevTools CSS variables)
- Fonts load without FOUT
```

### Prompt 3: Header Component (REVISED)

```
Create src/components/Header.tsx by referencing hospiceofukiah.org/src/components/Header.tsx pattern.

EXACT specifications:

1. Remove utility bar (no top contact bar)
2. Logo: /be-well-icon.png (48x48) with text "Be Well Center"
3. Navigation links (desktop):
   - What We Are (#what)
   - Who It's For (#who)
   - Our Progress (#progress)
   - Get Involved (#involved)
   - FAQ (#faq)
4. CTA button: "Join Waitlist" (bg-primary, href="#waitlist")
5. Phone: (707) XXX-XXXX (placeholder)
6. Mobile: Hamburger menu with same links
7. Sticky positioning (top-0)
8. Use primary color (will resolve to #6B7F4E via CSS variable)

Keep all accessibility attributes (aria-labels, aria-expanded, etc.).
Use Heroicons for menu icon.
```

### Prompt 4: Footer Component (REVISED)

```
Create src/components/Footer.tsx by referencing hospiceofukiah.org/src/components/Footer.tsx pattern.

EXACT specifications:

1. Organization: "Be Well Center"
2. Tagline: "Adult Day Memory Care in Ukiah, CA"
3. Address: "[Address TBD], Ukiah, CA 95482"
4. Phone: (707) XXX-XXXX
5. Email: info@ukiahumc.org (use church email, not bewellcenter.org)
6. NO Tax ID line (not a 501c3)
7. NO social media section
8. Copyright: © 2026 Be Well Center (a ministry of Ukiah UMC)
9. Quick links:
   - Join Waitlist (#waitlist)
   - Ways to Help (#involved)
   - FAQ (#faq)

Three-column grid on desktop, stacks on mobile.
Background: bg-primary (CSS variable).
Keep all Heroicons.
```

### Prompts 5-16: Use Original Guide Content

**For Prompts 5-16, use the EXACT text from the original guide** — those prompts are still correct because they deal with component logic and content, not Tailwind/build config.

**The only change:** In Prompt 6 (Layout Configuration), update the metadata:

```
- title: "Be Well Center - Adult Day Memory Care (Opening Soon)"
- description: "Dignity-filled daytime support for adults living with memory loss in Ukiah, CA. A ministry of Ukiah United Methodist Church. Join our waitlist today."
```

---

## DEPLOYMENT TO VERCEL

### Deployment Steps:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd bewell.ukiahumc.org
vercel

# Link to Vercel account, confirm settings
# Framework: Next.js (auto-detected)
# Build: yarn build
# Output: .next

# Production deploy
vercel --prod
```

### Custom Subdomain Setup:

**Option A: Use Vercel DNS**
1. In Vercel dashboard: Settings → Domains
2. Add: `bewell.ukiahumc.org`
3. Vercel provides DNS records
4. Add CNAME in ukiahumc.org DNS:
   - Name: `bewell`
   - Value: `cname.vercel-dns.com`

**Option B: Your existing DNS provider**
1. Add CNAME record in ukiahumc.org DNS zone:
   - Name: `bewell`
   - Value: `[your-vercel-project].vercel.app`
2. In Vercel: Add `bewell.ukiahumc.org` as custom domain
3. Vercel auto-provisions SSL

---

## PRE-LAUNCH CHECKLIST

- [ ] Replace (707) XXX-XXXX with real number (or remove if not ready)
- [ ] Verify info@ukiahumc.org email is monitored
- [ ] Update address if finalized (or keep "[Address TBD]")
- [ ] Upload optimized logo files (compress PNGs with TinyPNG)
- [ ] Create proper OG image (1200x630px: logo + "Opening Soon" text)
- [ ] Add `robots.txt` with `User-agent: * / Disallow: /` (prevent indexing until launch)
- [ ] Run Lighthouse audit (target 90+ all metrics)
- [ ] Run axe DevTools (0 accessibility violations)
- [ ] Test on real devices (iOS Safari, Android Chrome)
- [ ] Verify all anchor links work (#what, #who, etc.)

---

## POST-MVP: Forms & Analytics

### Phase 9A: Waitlist Form (Immediate Priority)

**Recommended: Airtable (no backend code needed)**

1. Create Airtable base with "Waitlist" table
2. Fields: Name (text), Phone (phone), Email (email), Relationship (single select), Best Contact Time (text), Newsletter (checkbox), Submitted (created time)
3. Use Airtable Form or custom form → Airtable API
4. Custom form option: `src/components/WaitlistForm.tsx`
   - POST to Airtable API via route handler (`/api/waitlist`)
   - Validation with zod
   - Toast on success/error

**Alternative: Google Sheets API**
- Free, no Airtable account needed
- Use Google Sheets as database
- POST to `/api/waitlist` → Google Sheets API append row

### Phase 9B: Donation Integration

**Option 1: Zeffy (like USC uses)**
- Free for nonprofits (donors cover processing fees)
- Embed modal or redirect
- Easiest if you're fiscal sponsored or 501c3

**Option 2: Stripe Donation Element**
- More control, modern UX
- 2.9% + $0.30 per transaction
- Implement modal similar to donate.ukiahseniorcenter.org

### Phase 9C: Analytics

**Plausible (recommended for church/nonprofit)**
- Privacy-friendly (no cookies, GDPR compliant)
- Simple script tag in layout.tsx
- Track: page views, CTA clicks, form submissions

**Alternative: Google Analytics 4**
- Free, more features
- More invasive (cookies, tracking)
- Use `gtag.js` in layout

---

## TROUBLESHOOTING

### "Tailwind classes not working"
- Check `postcss.config.mjs` has `@tailwindcss/postcss` plugin
- Verify `globals.css` uses `@import "tailwindcss"` (not `@tailwind` directives)
- Restart dev server after config changes

### "Fonts not loading"
- Check `next/font` imports in `layout.tsx`
- Verify CSS variables `--font-sans` and `--font-serif` defined
- Check Network tab for font requests

### "Colors wrong"
- Inspect element → Computed styles
- Check `--color-primary` CSS variable resolves to `#6B7F4E`
- Verify `@theme` block in `globals.css`

### "Header/Footer not appearing"
- Check imports in `src/app/layout.tsx`
- Verify Header/Footer placed **outside** `<main>` wrapper
- Check for TypeScript errors in terminal

---

## CRITICAL DIFFERENCES FROM ORIGINAL GUIDE

| Issue | Original Guide | This Revision |
|-------|----------------|---------------|
| Tailwind config | v3 syntax (`module.exports`, `@tailwind`) | v4 CSS-first (`@import`, `@theme`), no config file |
| Domain | bewellcenter.org | bewell.ukiahumc.org |
| Email | info@bewellcenter.org | info@ukiahumc.org |
| Cleanup | Missed lib/, hooks/, ErrorBoundary | Complete cleanup |
| Fonts | Generic reference | Next.js `next/font` optimization |
| Color definition | JS config | Literal hex values in `@theme` (no `var()` cross-refs) |

---

## ESTIMATED BUILD TIME (REVISED)

- Phase 0-3: Setup + Config: **25 minutes** (fonts add 5 min)
- Prompts 1-6: Core Components: **30 minutes**
- Prompts 7-14: Page Components: **60 minutes**
- Prompts 15-16: Assembly + Testing: **20 minutes**

**Total MVP: 2.5 hours**

**Forms (Airtable): +30 minutes**
**Analytics (Plausible): +10 minutes**

---

## PROCEED?

**CTO Approval:** This plan is production-ready. All breaking issues resolved. Tailwind v4 compatible. Domain consistent. Cleanup complete.

Execute Prompts 1-16 in sequence. Deploy to Vercel. Launch when ready.

---

END OF REVISED IMPLEMENTATION GUIDE