/**
 * SPACING AUDIT SCRIPT
 * 
 * Run: node scripts/audit-spacing.mjs
 * 
 * This calculates the EXACT pixel budget for flyer (816×1056) and
 * brochure panels (each ~352×816) based on content estimates,
 * then shows where padding/gaps waste space and what to set them to.
 */

// ═══════════════════════════════════════════════════════════════
// FLYER — 816 × 1056px (portrait 8.5×11 at 96dpi)
// ═══════════════════════════════════════════════════════════════

console.log('\n' + '═'.repeat(64));
console.log('  FLYER AUDIT — 816 × 1056px');
console.log('═'.repeat(64));

const FLYER_H = 1056;

// Current percentage-based heights:
const flyerSections = {
  'Top banner':        { pct: 4,  fixed: true },  // green bar
  'Logo':              { pct: 14, fixed: true },  // logo image
  'Title + subtitle':  { pct: 10, fixed: true },  // h1 + italic
  'Divider':           { pct: 2,  fixed: true },  // gold divider
  'What We Offer':     { pct: 28, fixed: false }, // 6 checkmark items
  'Callout':           { pct: 15, fixed: false }, // green box
  'CTA':               { pct: 10, fixed: false }, // h2 + subtitle
  'flex-grow spacer':  { pct: null, fixed: false }, // WASTED
  'Bottom contact bar':{ pct: 12, fixed: true },  // green footer
};

let usedPct = 0;
let usedPx = 0;
console.log('\nSection               | Alloc %  | Pixels   | Type');
console.log('-'.repeat(64));
for (const [name, data] of Object.entries(flyerSections)) {
  if (data.pct === null) {
    const remaining = FLYER_H - usedPx;
    console.log(`${name.padEnd(22)}| SPACER   | ${remaining.toString().padEnd(9)}| ← WASTED BLANK SPACE`);
  } else {
    const px = Math.round(FLYER_H * data.pct / 100);
    usedPx += px;
    usedPct += data.pct;
    console.log(`${name.padEnd(22)}| ${(data.pct + '%').padEnd(9)}| ${px.toString().padEnd(9)}| ${data.fixed ? 'fixed' : 'content'}`);
  }
}
console.log('-'.repeat(64));
console.log(`TOTAL allocated: ${usedPct}% = ${usedPx}px out of ${FLYER_H}px`);
console.log(`WASTED spacer: ${FLYER_H - usedPx}px (${((FLYER_H - usedPx) / FLYER_H * 100).toFixed(1)}%)`);

// Now estimate ACTUAL content heights
console.log('\n--- Estimated actual content heights ---');
const flyerActual = {
  'Top banner':        42,   // 14px font + padding ≈ 42px
  'Logo':              130,  // maxHeight: 130px
  'Title (h1 42px)':   50,   // 42px line + 1.15 lh
  'Subtitle (20px)':   28,   // 20px + margin 8
  'Divider':           10,   // 10px dot
  'H2 "What We Offer"':36,  // 28px + mb16
  'Grid 6 items':      120,  // 3 rows × ~40px each
  'Callout box':       100,  // padding 20+20 + ~3 lines at 17px×1.6
  'CTA h2':            40,   // 28px + mb8
  'CTA subtitle':      25,   // 17px × 1 line
  'Bottom green bar':  127,  // 12% of 1056 = 127
};

let totalActual = 0;
for (const [name, px] of Object.entries(flyerActual)) {
  totalActual += px;
  console.log(`  ${name.padEnd(22)} ~${px}px`);
}
console.log(`  ${'TOTAL CONTENT'.padEnd(22)} ~${totalActual}px`);
console.log(`  ${'AVAILABLE'.padEnd(22)}  ${FLYER_H}px`);
console.log(`  ${'REMAINING FOR GAPS'.padEnd(22)}  ${FLYER_H - totalActual}px across ~10 gaps`);
console.log(`  ${'IDEAL GAP'.padEnd(22)}  ~${Math.round((FLYER_H - totalActual) / 10)}px per gap`);

// ═══════════════════════════════════════════════════════════════
// BROCHURE — each panel is ~352 × 816px (1056/3 × 816)
// ═══════════════════════════════════════════════════════════════

console.log('\n' + '═'.repeat(64));
console.log('  BROCHURE AUDIT — 6 panels, each ~352 × 816px');
console.log('═'.repeat(64));

const PANEL_W = Math.round(1056 / 3); // 352px
const PANEL_H = 816;
const PAD = 36; // current padding on each side
const CONTENT_H = PANEL_H - PAD * 2; // 816 - 72 = 744px available for content

console.log(`\nPanel dimensions: ${PANEL_W} × ${PANEL_H}px`);
console.log(`Padding: ${PAD}px top + ${PAD}px bottom = ${PAD * 2}px`);
console.log(`Content area: ${CONTENT_H}px`);

// Estimate content heights per panel
const panels = {
  'P1 How You Can Help': {
    items: [
      ['Heading 24px', 24 + 24],       // font + mb
      ['Donate row', 40 + 22],          // icon 40 + text ~22
      ['Gap', 24],
      ['Volunteer row', 40 + 22],
      ['Gap', 24],
      ['Board row', 40 + 22],
      ['Divider mt', 28 + 16],          // marginTop + paddingTop
      ['Footer text', 28],              // 2 lines × 14
    ],
  },
  'P2 Front Cover': {
    items: [
      ['Logo 160×auto', 125],           // roughly (664/848)*160
      ['mb', 28],
      ['Title 34px×2 lines', 78],       // 34*1.15*2
      ['mb', 20],
      ['Divider bar', 2],
      ['mb', 20],
      ['Subtitle italic', 48],          // 16px * 1.6 * ~2 lines
      ['mt', 28],
      ['Coming Soon badge', 33],        // 13px + padding
    ],
  },
  'P3 Contact Us': {
    items: [
      ['Heading 22px', 22 + 24],        // font + mb
      ['Email row', 36 + 0],            // icon height
      ['Gap', 20],
      ['Phone row', 36],
      ['Gap', 20],
      ['Website row', 36],
      ['Gap', 20],
      ['Address row', 50],              // 2 lines
    ],
  },
  'P4 The Need': {
    items: [
      ['Heading 24px', 24 + 20],
      ['Para 1 (~3 lines)', 67],        // 14*1.6*3
      ['Gap', 18],
      ['Para 2 (~3 lines)', 67],
      ['Gap', 18],
      ['Para 3 (~2.5 lines)', 56],
      ['mt + CTA box', 14 + 16 + 24 + 16], // mt + pad + text + pad
    ],
  },
  'P5 Our Vision': {
    items: [
      ['Heading 24px', 24 + 20],
      ['Intro para (~3 lines)', 71],    // 14*1.7*3
      ['mb', 20],
      ['7 checkmark items', 7 * 20],    // 13px line + gap 14 ≈ 20 each (overcount gap but close)
      ['Gaps between items', 6 * 14],   // already in the items calc, but separate
    ],
  },
  'P6 Who We Serve': {
    items: [
      ['Heading 24px', 24 + 20],
      ['Card 1 (pad+text)', 14 + 18 + 36 + 14],  // pad + title + 2 lines + pad
      ['Gap', 18],
      ['Card 2', 14 + 18 + 36 + 14],
      ['Gap', 18],
      ['Card 3', 14 + 18 + 36 + 14],
      ['mt + border + pt', 16 + 16],
      ['Footer text', 18 + 15],
    ],
  },
};

for (const [name, panel] of Object.entries(panels)) {
  let total = 0;
  console.log(`\n${name}:`);
  for (const [label, px] of panel.items) {
    total += px;
    console.log(`  ${label.padEnd(28)} ${px}px`);
  }
  const remaining = CONTENT_H - total;
  const pctUsed = (total / CONTENT_H * 100).toFixed(1);
  console.log(`  ${'─'.repeat(40)}`);
  console.log(`  ${'CONTENT TOTAL'.padEnd(28)} ${total}px (${pctUsed}% of ${CONTENT_H}px)`);
  console.log(`  ${'BLANK SPACE'.padEnd(28)} ${remaining}px (${(remaining / CONTENT_H * 100).toFixed(1)}%)`);
  if (remaining > 60) {
    console.log(`  ⚠️  TOO MUCH BLANK — justifyContent:'center' pushes ${Math.round(remaining/2)}px above + below`);
  } else if (remaining < 0) {
    console.log(`  ⚠️  OVERFLOW — content exceeds panel by ${-remaining}px`);
  } else {
    console.log(`  ✅  Reasonable fit`);
  }
}

// ═══════════════════════════════════════════════════════════════
// RECOMMENDATIONS
// ═══════════════════════════════════════════════════════════════
console.log('\n' + '═'.repeat(64));
console.log('  RECOMMENDATIONS');
console.log('═'.repeat(64));
console.log(`
FLYER:
  - REMOVE percentage-based heights (height: '28%', etc.)
  - REMOVE flex-grow spacer — it creates a dead gap
  - Use flex column with NO fixed section heights
  - Let content flow naturally, use consistent gap between sections
  - Ideal approach: flexbox with gap: ~${Math.round((FLYER_H - totalActual) / 10)}px between sections

BROCHURE:
  - REMOVE justifyContent: 'center' on all panels
  - Use justifyContent: 'flex-start' so content hugs from top
  - Use consistent padding (36px is fine for top/bottom)
  - The massive blank space is from centering ~500px content in 744px
  - Each panel gets ~${Math.round(CONTENT_H / 2)}px half-blank above content when centered
  - With flex-start, content starts at top with natural flow
  - OR use justifyContent: 'space-between' with a spacer at bottom
    for a more distributed feel
`);
