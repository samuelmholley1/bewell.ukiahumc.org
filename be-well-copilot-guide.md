# Be Well Center - GitHub Copilot Implementation Guide
**EXACT INSTRUCTIONS FOR RAPID BUILD**

## PHASE 0: Clone Base Repository

```bash
# Clone donate.ukiahseniorcenter.org as the base
git clone https://github.com/samuelmholley1/donate.ukiahseniorcenter.org.git bewellcenter.org
cd bewellcenter.org
rm -rf .git
git init
git remote add origin [YOUR_NEW_REPO_URL]
```

**Why this repo?** 
- Already has Yarn Berry with `nodeLinker: node-modules` configured
- Has Next.js 15.5.9, React 19, TypeScript 5, Tailwind 4
- Clean src/ directory structure
- No legacy code, minimal cleanup needed

---

## PHASE 1: Repository Cleanup & Configuration

### 1.1 Delete these files/directories:
```bash
rm -rf src/app/demo
rm -rf src/app/loading
rm src/components/ZeffyModal.tsx
rm src/components/SiteNavigation.tsx
rm src/components/SiteFooterContent.tsx
rm CODEBASE_AUDIT.md
rm README.md
```

### 1.2 Keep these exact files unchanged:
- `.yarnrc.yml` (already has `nodeLinker: node-modules`)
- `package.json` (keep dependencies, update name/description only)
- `eslint.config.mjs`
- `next.config.ts`
- `postcss.config.mjs`
- `tsconfig.json`
- `.gitignore`

### 1.3 Update package.json:
```json
{
  "name": "bewellcenter.org",
  "version": "0.1.0",
  "description": "Be Well Center - Adult Day Memory Care in Ukiah, CA",
  "private": true
}
```

---

## PHASE 2: Brand Assets & Public Directory

### 2.1 Copy brand logos to `/public`:
Save the three provided logo files as:
- `public/be-well-icon.png` (hands holding valley icon)
- `public/be-well-text.png` (text-only logo)
- `public/be-well-full.png` (full logo with icon + text)

### 2.2 Create OG image placeholder:
```bash
# Copy full logo as temporary OG image
cp public/be-well-full.png public/og-image.png
```

---

## PHASE 3: Tailwind Configuration - EXACT COLOR PALETTE

### 3.1 Replace `tailwind.config.js` with this EXACT file:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from Be Well logo
        'brand-gold': '#D4A574',      // warm gold from logo gradient
        'brand-olive': '#6B7F4E',     // olive green from logo
        'brand-green': '#8FA668',     // lighter green from hills
        'brand-blue': '#6BA6C4',      // river blue from logo
        'brand-cream': '#F8F5F0',     // warm off-white background
        
        // Semantic mappings for ease of use
        primary: '#6B7F4E',           // olive (main brand)
        secondary: '#D4A574',         // gold (accents)
        accent: '#8FA668',            // light green (highlights)
        'neutral-bg': '#F8F5F0',      // cream background
        text: '#1F2937',              // near-black for body text (WCAG AA)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        // Larger base sizes for senior audience
        'base': '1.125rem',   // 18px
        'lg': '1.25rem',      // 20px
        'xl': '1.5rem',       // 24px
        '2xl': '1.875rem',    // 30px
        '3xl': '2.25rem',     // 36px
        '4xl': '3rem',        // 48px
      },
      lineHeight: {
        'relaxed': '1.75',
        'loose': '2',
      },
    },
  },
  plugins: [],
}
```

---

## PHASE 4: Global Styles

### 4.1 Replace `src/app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply bg-neutral-bg text-text text-lg leading-relaxed antialiased;
  }
  
  /* High contrast focus outlines for accessibility */
  *:focus-visible {
    @apply outline-none ring-2 ring-primary ring-offset-2;
  }
  
  /* Heading styles */
  h1, h2, h3, h4, h5, h6 {
    @apply font-sans font-bold text-primary leading-tight;
  }
  
  h1 {
    @apply text-3xl md:text-4xl;
  }
  
  h2 {
    @apply text-2xl md:text-3xl;
  }
  
  h3 {
    @apply text-xl md:text-2xl;
  }
  
  /* Link styles */
  a {
    @apply transition-colors duration-200;
  }
  
  /* Button base */
  button {
    @apply transition-all duration-200;
  }
}

@layer components {
  /* Container */
  .container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
  }
  
  /* Section spacing */
  .section {
    @apply py-12 md:py-16 lg:py-24;
  }
  
  /* Card pattern */
  .card {
    @apply bg-white rounded-lg shadow-sm p-6 md:p-8;
  }
  
  /* Primary button */
  .btn-primary {
    @apply bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200;
  }
  
  /* Secondary button */
  .btn-secondary {
    @apply bg-secondary hover:bg-secondary/90 text-white font-semibold px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-200;
  }
  
  /* Outline button */
  .btn-outline {
    @apply border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200;
  }
}
```

---

## COPILOT PROMPTS - EXACT SEQUENCE

Use these prompts in GitHub Copilot Chat in this exact order:

### Prompt 1: Initial Setup
```
I've cloned donate.ukiahseniorcenter.org as the base. Execute these cleanup steps:

1. Delete: src/app/demo, src/app/loading, src/components/ZeffyModal.tsx, src/components/SiteNavigation.tsx, src/components/SiteFooterContent.tsx, CODEBASE_AUDIT.md, README.md

2. Update package.json name to "bewellcenter.org" and description to "Be Well Center - Adult Day Memory Care in Ukiah, CA"

3. Create tailwind.config.js with these EXACT colors:
- brand-gold: #D4A574
- brand-olive: #6B7F4E  
- brand-green: #8FA668
- brand-blue: #6BA6C4
- brand-cream: #F8F5F0
- primary: #6B7F4E
- secondary: #D4A574
- accent: #8FA668
- neutral-bg: #F8F5F0
- text: #1F2937

Also set base font size to 1.125rem (18px) and include Inter and Merriweather font families.

Confirm when complete.
```

### Prompt 2: Global Styles
```
Replace src/app/globals.css with the content I provide below. This sets up senior-friendly typography (18px base), high-contrast focus outlines, and utility classes for buttons/cards/sections.

[Paste the globals.css content from Phase 4.1 above]

Verify Tailwind classes compile correctly by running yarn dev.
```

### Prompt 3: Core Components - Header
```
Create src/components/Header.tsx by copying the pattern from hospiceofukiah.org/src/components/Header.tsx with these EXACT changes:

1. Remove the utility bar (contact info bar above header)
2. Change navigation links to:
   - What We Are (#what)
   - Who It's For (#who)
   - Our Progress (#progress)
   - Get Involved (#involved)
   - FAQ (#faq)

3. Logo: use /be-well-icon.png (48x48) with text "Be Well Center"
4. Replace "Donate" button with "Join Waitlist" linking to #waitlist
5. Phone number: (707) XXX-XXXX (placeholder)
6. Keep all accessibility attributes and mobile menu logic exactly as-is

The header should be sticky, have a mobile hamburger menu, and use our primary color (#6B7F4E).
```

### Prompt 4: Core Components - Footer
```
Create src/components/Footer.tsx by copying hospiceofukiah.org/src/components/Footer.tsx with these updates:

1. Organization name: "Be Well Center"
2. Tagline: "Adult Day Memory Care in Ukiah, CA"
3. Address: "[Address TBD], Ukiah, CA 95482"
4. Phone: (707) XXX-XXXX
5. Email: info@bewellcenter.org
6. Remove Tax ID line (not 501c3 yet)
7. Copyright: © 2026 Be Well Center
8. Remove social media section entirely
9. Quick links in footer:
   - Join Waitlist (#waitlist)
   - Ways to Help (#involved)
   - FAQ (#faq)

Keep the three-column grid layout, use our primary color (#6B7F4E) for background, keep all icons.
```

### Prompt 5: Utility Components
```
Copy these components exactly as-is from donate.ukiahseniorcenter.org/src/components:

1. Button.tsx
2. Modal.tsx  
3. LoadingStates.tsx
4. Toast.tsx

Save them to src/components/. No modifications needed - these are reusable utilities.
```

### Prompt 6: Layout Configuration
```
Update src/app/layout.tsx following this pattern:

1. Import Header from '@/components/Header' and Footer from '@/components/Footer'
2. Update metadata object:
   - title: "Be Well Center - Adult Day Memory Care in Ukiah (Opening Soon)"
   - description: "Dignity-filled daytime support for adults living with memory loss in Ukiah, CA. Respite care for family caregivers. Join our waitlist today."
   - keywords: "adult day care, memory care, dementia care, Ukiah, Mendocino County, caregiver respite, Alzheimer's support"
3. Set theme color meta tag to #6B7F4E
4. Remove any sticky donate button (not needed for pre-launch)
5. Wrap {children} with Header above and Footer below
6. Keep favicon structure similar to hospiceofukiah.org

Body should have: className="antialiased" and wrap main in min-h-screen.
```

### Prompt 7: Section Wrapper Component
```
Create src/components/Section.tsx as a reusable section wrapper:

TypeScript interface:
- id?: string
- className?: string  
- children: React.ReactNode
- bgColor?: 'white' | 'cream' | 'light-green'

Component should:
- Render a <section> with ID and className props
- Apply .section class (provides py-12 md:py-16 lg:py-24 padding)
- Map bgColor to Tailwind: 'white' -> bg-white, 'cream' -> bg-neutral-bg, 'light-green' -> bg-accent/10
- Wrap children in a .container div (max-w-7xl mx-auto px-4 sm:px-6 lg:px-8)
- Include aria-labelledby attribute when id prop exists

Export as default.
```

### Prompt 8: Hero Component
```
Create src/components/Hero.tsx with this structure:

Section with id="top", gradient background: from-neutral-bg via-accent/5 to-neutral-bg, py-16 md:py-24

Two-column grid (stacks on mobile):

LEFT COLUMN:
- Image: /be-well-icon.png (80x80, rounded-lg shadow-md)
- H1: "Be Well Center" (text-4xl md:text-5xl, font-bold, text-primary)
- Paragraph: "Adult Day Memory Care in Ukiah" (text-2xl md:text-3xl, font-semibold)
- Tagline: "Dignity-filled daytime support for adults living with memory loss—and respite for the caregivers who love them." (text-xl, text-text/80)
- Phone section:
  - Label: "Prefer to talk?" (text-lg, font-semibold, text-primary)
  - Phone link: (707) XXX-XXXX with phone icon (text-2xl, font-bold, text-primary)

RIGHT COLUMN - Three stacked CTA buttons:
1. "Join Waitlist" - href="#waitlist", bg-primary, text-white, full width, text-xl, py-4
2. "Donate" - href="#involved", bg-secondary, text-white, full width, text-xl, py-4
3. "Get Updates" - href="#updates", border-2 border-primary, text-primary, full width, text-xl, py-4

All buttons have hover effects and shadow-md.

Use 'use client' directive at top.
```

### Prompt 9: WhatWeAre Component
```
Create src/components/WhatWeAre.tsx:

Use Section wrapper with id="what", bgColor="white"

Max-width 4xl, centered, space-y-8:

1. H2: "What We Are" (text-3xl md:text-4xl, font-bold, text-primary, centered)

2. Paragraph: "Be Well Center is a daytime program for adults living with memory loss, offering structured activities, social connection, and gentle support—while family caregivers get a dependable break." (text-xl, text-text/90, centered)

3. Card (max-w-2xl mx-auto):
   - H3: "What Families Can Expect" (text-2xl, font-bold, text-primary, mb-6)
   - Unordered list with checkmark icons (text-accent):
     • "Routine and calm, not chaos"
     • "Meaningful activities matched to abilities"
     • "A safe place while caregivers handle work, errands, or rest"
   
Use Heroicons checkmark circle SVG for bullets. Text-left alignment inside card, text-lg font size.
```

### Prompt 10: WhoItsFor Component
```
Create src/components/WhoItsFor.tsx:

Use Section wrapper with id="who", bgColor="cream"

Max-width 5xl, space-y-8:

1. H2: "Who It's For" (centered, text-3xl md:text-4xl, mb-12)

2. Two-column grid (md:grid-cols-2 gap-8):

LEFT CARD - "For Participants":
- H3: "For Participants" (text-2xl, font-bold, text-primary, mb-6)
- Subheading: "Good fit if..." (text-accent, text-lg, font-semibold)
- Bullets (text-base):
  • "You're an older adult living with early or moderate memory loss"
  • "You can move with light assistance or a mobility aid"
  • "You enjoy being around people, even on quieter days"

RIGHT CARD - "For Families & Caregivers":
- H3: "For Families & Caregivers"
- Subheading: "Good fit if..."
- Bullets:
  • "You're caring for a spouse, parent, or loved one with memory changes"
  • "You need reliable daytime support so you can work, rest, or recharge"
- Divider (border-t border-gray-200)
- "Not a fit if..." section (text-text/70, text-sm):
  • "Intense medical or nursing needs (24/7 care)"
  • "Frequent unsafe wandering or aggressive behaviors"
- Closing note: "If you're not sure, reach out—we'll help you find the right support." (italic, link to #waitlist)

Both cards use .card class.
```

### Prompt 11: ProcessTimeline Component
```
Create src/components/ProcessTimeline.tsx:

Use Section wrapper with id="progress", bgColor="white"

Max-width 6xl, space-y-12:

1. Header section (centered):
   - H2: "Where We Are in the Process" (text-3xl md:text-4xl)
   - Paragraph: "We're building Be Well Center step by step. Your support helps us open our doors sooner." (text-xl, max-w-3xl mx-auto)

2. Timeline - Four steps in grid (md:grid-cols-4):
   
   Step 1:
   - Number: 1 (in circle: w-20 h-20, bg-primary, text-white, text-3xl, font-bold, shadow-lg)
   - Title: "Now"
   - Subtitle: "Community Support & Planning" (text-accent)
   - Description: "Gathering community input, building partnerships, and finalizing our program model."
   
   Step 2:
   - Number: 2
   - Title: "Next"
   - Subtitle: "Buildout & Licensing"
   - Description: "Securing our space, meeting safety requirements, and completing state licensing."
   
   Step 3:
   - Number: 3
   - Title: "Then"
   - Subtitle: "Hiring & Training"
   - Description: "Recruiting local, dementia-informed staff and providing specialized training."
   
   Step 4:
   - Number: 4
   - Title: "Opening"
   - Subtitle: "Welcoming Our First Participants"
   - Description: "Opening our doors and beginning services for families in Ukiah."

Add a connecting horizontal line between circles (hidden on mobile, bg-accent/30).

3. CTA button below: "Help Us Open Sooner" (bg-secondary, text-white, text-lg, px-10 py-4) linking to #involved
```

### Prompt 12: GetInvolved Component
```
Create src/components/GetInvolved.tsx:

Use Section wrapper with id="involved", bgColor="cream"
Add 'use client' directive at top
Import LoadingStates from './LoadingStates'

Max-width 6xl, space-y-12:

1. Header (centered):
   - H2: "Get Involved"
   - Paragraph: "There are many ways to support Be Well Center as we prepare to open."

2. Three-column grid (lg:grid-cols-3 gap-8):

CARD 1 - Donate:
- Icon: Heart SVG (w-8 h-8, text-secondary) in circular bg (w-16 h-16, bg-secondary/10, rounded-full, centered)
- H3: "Donate" (text-2xl, font-bold, text-primary)
- Description: "Help fund safe space, program supplies, and staff training."
- "Where your gift goes:" bullets (text-accent, font-semibold):
  • "Facility buildout and safety equipment"
  • "Activity materials and therapeutic supplies"
  • "Staff recruitment and dementia training"
- Button: "Make a Donation" (bg-secondary, full width)
- Note: "One-time or monthly giving available" (text-xs, text-text/60)

CARD 2 - Volunteer:
- Icon: People/users SVG (text-accent)
- H3: "Volunteer"
- Description: "Share time, talents, or helping hands."
- "Ways to help:" bullets:
  • "Lead activities (music, art, gardening)"
  • "Assist with events and fundraisers"
  • "Administrative and office support"
- Button: "Sign Up to Volunteer" (bg-accent, full width) href="#volunteer-form"

CARD 3 - Partners:
- Icon: Building/home SVG (text-primary)
- H3: "Partners"
- Description: "Clinicians, businesses, and community organizations"
- "Partnership opportunities:" bullets:
  • "Referrals from healthcare providers"
  • "Business sponsorships"
  • "Co-hosted community events"
- Button: "Become a Partner" (border-2 border-primary, text-primary, hover:bg-primary hover:text-white) href="#partner-form"

All cards use .card class. Button for donate can have onClick placeholder: alert('Donation form will open here').
```

### Prompt 13: FAQ Component
```
Create src/components/FAQ.tsx as an accessible accordion:

Use Section wrapper with id="faq", bgColor="white"
Add 'use client' directive
Import { useState } from 'react'

Max-width 4xl, space-y-8:

1. H2: "Frequently Asked Questions" (centered)

2. State: const [openIndex, setOpenIndex] = useState<number | null>(null);

3. FAQ items array (8 questions):

Q1: "What is adult day memory care?"
A1: "Adult day memory care is a structured daytime program for people living with Alzheimer's disease or other forms of dementia. We provide supervised activities, social engagement, and support in a safe environment—giving family caregivers reliable respite during the day while ensuring their loved ones receive dignified, person-centered care."

Q2: "What will hours and cost be?"
A2: "We're finalizing hours and daily rates now. Our goal is to be affordable and to work with local resources when possible, including exploring partnerships with Medi-Cal waiver programs and veteran benefits. Join the waitlist to be among the first to know when we announce schedule and pricing."

Q3: "Is transportation available?"
A3: "We're exploring transportation options and partnerships with local transit providers. Tell us in the waitlist form if transportation assistance would be helpful for your family—your input helps us shape our services."

Q4: "What activities do you offer?"
A4: "Our program will include gentle physical activities, music and art therapy, memory-stimulating games, gardening, reminiscence work, and social time. All activities are adapted to each participant's abilities and interests, with a focus on maintaining dignity and fostering joy."

Q5: "Do you provide meals?"
A5: "Yes, we plan to provide nutritious meals and snacks throughout the day. We'll accommodate dietary restrictions and preferences—just let us know your needs when you join the waitlist."

Q6: "What is the staff-to-participant ratio?"
A6: "We're committed to maintaining low ratios to ensure personalized attention and safety. Exact ratios will be finalized based on state licensing requirements and best practices in dementia care, but expect staffing that allows for genuine one-on-one interaction."

Q7: "Is this a nursing home or assisted living?"
A7: "No. Be Well Center is an adult day program—participants go home at the end of the day. We're not a residential facility. We're designed specifically for daytime care and caregiver respite, not 24/7 living arrangements."

Q8: "How do I know if this is right for my loved one?"
A8: "If your loved one has mild to moderate memory loss, can participate in group activities with support, and doesn't require intensive medical or nursing care, Be Well Center may be a great fit. The best way to know is to reach out—we'll talk through your situation and help determine if our program meets your family's needs, or connect you with other resources if not."

4. Render accordion:
Each item:
- Wrapper: border-2 border-gray-200 rounded-lg
- Button: w-full text-left px-6 py-4 bg-white hover:bg-gray-50, flex justify-between
  - Question text (text-lg font-semibold text-primary)
  - Chevron icon (rotates when open)
- Answer panel (when openIndex === index): px-6 py-4 bg-neutral-bg text-text/80 leading-relaxed
- aria-expanded and aria-controls attributes on button
- Only one item open at a time (toggle logic)
```

### Prompt 14: RootedInUkiah Component
```
Create src/components/RootedInUkiah.tsx:

Use Section wrapper with id="rooted", bgColor="light-green"

Max-width 4xl, centered, space-y-6:

1. H2: "Rooted in Ukiah" (text-3xl md:text-4xl, centered)

2. Three paragraphs (text-lg, text-text/80, leading-relaxed):

Paragraph 1:
"Be Well Center is being built by and for the people of Ukiah—a community nestled in the heart of Mendocino County wine country, where rolling hills, vineyards, and redwood groves meet a strong tradition of neighbor helping neighbor."

Paragraph 2:
"We're part of the same local ecosystem that includes Ukiah's senior services, Area Agency on Aging, and other community supports. Our goal isn't to replace what's already here—it's to fill a gap, offering specialized daytime memory care where none currently exists."

Paragraph 3:
"If you or someone you know needs support now, we're happy to connect you with existing local resources while we work toward opening our doors."
(font-semibold, text-primary for this paragraph)

Keep tone warm and community-focused.
```

### Prompt 15: Main Page Assembly
```
Replace src/app/page.tsx with this structure:

Import all section components:
- Hero from '@/components/Hero'
- WhatWeAre from '@/components/WhatWeAre'
- WhoItsFor from '@/components/WhoItsFor'
- ProcessTimeline from '@/components/ProcessTimeline'
- GetInvolved from '@/components/GetInvolved'
- FAQ from '@/components/FAQ'
- RootedInUkiah from '@/components/RootedInUkiah'

Default export function Home():
Return fragment with components in this order:
1. <Hero />
2. <WhatWeAre />
3. <WhoItsFor />
4. <ProcessTimeline />
5. <GetInvolved />
6. <FAQ />
7. <RootedInUkiah />

8. Add placeholder waitlist section at end:
<section id="waitlist" className="section bg-white">
  <div className="container max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-primary mb-4">Join Our Waitlist</h2>
    <p className="text-lg text-text/80 mb-8">
      Be among the first to know when we're ready to welcome participants.
    </p>
    <div className="card">
      <p className="text-text/70">Waitlist form coming soon...</p>
    </div>
  </div>
</section>

No wrapper div needed, just return the fragment directly.
```

### Prompt 16: Final Verification
```
Run these checks:

1. Execute: yarn dev
2. Check for TypeScript errors in terminal
3. Open http://localhost:3000 in browser
4. Test all anchor link navigation (#what, #who, #progress, #involved, #faq, #rooted, #waitlist)
5. Test mobile responsive behavior:
   - Header mobile menu toggle
   - Section column stacking
   - Button sizing
6. Verify color palette matches brand:
   - Primary (olive): #6B7F4E
   - Secondary (gold): #D4A574
   - Accent (light green): #8FA668
7. Check text contrast (should pass WCAG AA)
8. Test keyboard navigation (tab through all interactive elements)

Report any errors or issues found. If all checks pass, the MVP is complete.
```

---

## DEPLOYMENT TO VERCEL

### After MVP passes verification:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project root
cd bewellcenter.org
vercel

# Follow prompts:
# - Link to Vercel account
# - Confirm project settings
# - Framework: Next.js (auto-detected)
# - Build: yarn build
# - Output: .next

# Production deploy
vercel --prod
```

### Custom Domain Setup:

1. Purchase domain: bewellcenter.org
2. In Vercel dashboard: Settings → Domains → Add bewellcenter.org
3. Update DNS records to Vercel's nameservers or A records
4. HTTPS auto-configured by Vercel

### Pre-Launch Checklist:

- [ ] Replace phone placeholder: (707) XXX-XXXX with real number
- [ ] Replace email placeholder with real contact email
- [ ] Replace address "[Address TBD]" with real address or keep if not finalized
- [ ] Upload real logo files to /public (you have these ready)
- [ ] Create proper OG image (1200x630px with logo + "Opening Soon")
- [ ] Run Lighthouse audit (aim for 90+ all metrics)
- [ ] Run axe DevTools accessibility check (0 violations)

---

## POST-MVP: Forms & Backend (Phase 9)

After site is live, add these features in order:

### 1. Waitlist Form
**Fields:** name, phone, email, relationship (dropdown), best contact time, newsletter opt-in
**Backend options:**
- Airtable (easiest - no code)
- Supabase (more control)
- Google Sheets via API (middle ground)

### 2. Volunteer Form  
**Fields:** name, email, phone, interest areas (checkboxes: activities, events, admin), notes

### 3. Partner Form
**Fields:** org name, contact name, email, phone, partnership type (dropdown), notes

### 4. Donation Integration
Research: Zeffy (like USC uses) vs Stripe Donation Element
Implement modal similar to donate.ukiahseniorcenter.org pattern

### 5. Email Newsletter
Integrate Mailchimp or similar for "Get Updates" form

### 6. Analytics
Add Plausible (privacy-friendly) or GA4
Track: page views, form submissions, CTA clicks

---

## FILES REFERENCE MATRIX

| Component | Source Repo | Source File | Action |
|-----------|-------------|-------------|--------|
| Base structure | donate.ukiahseniorcenter.org | / | Clone & cleanup |
| Yarn config | donate.ukiahseniorcenter.org | .yarnrc.yml | Keep unchanged |
| Header pattern | hospiceofukiah.org | src/components/Header.tsx | Copy + modify nav/logo/CTA |
| Footer pattern | hospiceofukiah.org | src/components/Footer.tsx | Copy + modify org info |
| Layout pattern | hospiceofukiah.org | src/app/layout.tsx | Copy + modify metadata |
| Tailwind base | hospiceofukiah.org | tailwind.config.js | Copy + update colors |
| Button utility | donate.ukiahseniorcenter.org | src/components/Button.tsx | Copy unchanged |
| Modal utility | donate.ukiahseniorcenter.org | src/components/Modal.tsx | Copy unchanged |
| LoadingStates | donate.ukiahseniorcenter.org | src/components/LoadingStates.tsx | Copy unchanged |
| Toast utility | donate.ukiahseniorcenter.org | src/components/Toast.tsx | Copy unchanged |
| Hero layout | horizon-valley-services | src/app/page.tsx | Pattern reference only |
| All page sections | — | NEW | Build from scratch using prompts |

---

## ESTIMATED BUILD TIME

**With Copilot executing prompts sequentially:**
- Phase 0-3: Setup & Config: **20 minutes**
- Prompts 1-6: Core Components: **30 minutes**  
- Prompts 7-14: Page Components: **60 minutes**
- Prompts 15-16: Assembly & Testing: **20 minutes**

**Total MVP:** ~2-2.5 hours for functional pre-launch landing page

**Forms/backend (Phase 9+):** Additional 2-4 hours depending on backend choice

---

## TROUBLESHOOTING

### If colors don't appear:
- Check tailwind.config.js is in project root (not src/)
- Verify content paths include src/ directory
- Restart dev server after tailwind.config changes

### If components don't render:
- Check all imports use '@/components/...' alias
- Verify tsconfig.json has paths configured: "@/*": ["./src/*"]
- Check for 'use client' directive on interactive components (Hero, GetInvolved, FAQ)

### If Header/Footer missing:
- Verify they're imported in src/app/layout.tsx
- Check they're placed outside the <main> wrapper

### If anchor links don't work:
- Ensure Section components have id prop set
- Check Hero CTAs and navigation use href="#id" format
- Verify scroll-behavior: smooth in globals.css

---

## SUPPORT RESOURCES

**Your existing repos for reference:**
- donate.ukiahseniorcenter.org (base structure)
- hospiceofukiah.org (senior-facing patterns)
- horizon-valley-services (landing page layouts)

**If stuck:**
1. Check the Files Reference Matrix above for which repo has the pattern you need
2. Compare your code to the source file in that repo
3. Verify all imports and paths are correct for the new project structure

---

END OF IMPLEMENTATION GUIDE
