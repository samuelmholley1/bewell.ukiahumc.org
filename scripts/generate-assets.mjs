/**
 * Generate favicons + OG image from Be Well logo assets.
 * Run: node scripts/generate-assets.mjs
 */
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = (...p) => join(__dirname, '..', 'public', ...p);

const icon = pub('BeWell-icon-transparent.png');
const logo = pub('BeWell-logo-transparent.png');

async function generateFavicons() {
  console.log('Generating favicons from BeWell-icon-transparent.png...');

  // favicon-16x16.png
  await sharp(icon)
    .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(pub('favicon-16x16.png'));
  console.log('  ✓ favicon-16x16.png');

  // favicon-32x32.png
  await sharp(icon)
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(pub('favicon-32x32.png'));
  console.log('  ✓ favicon-32x32.png');

  // apple-touch-icon.png (180x180, with padding on cream bg)
  await sharp(icon)
    .resize(160, 160, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .extend({
      top: 10, bottom: 10, left: 10, right: 10,
      background: { r: 248, g: 245, b: 240, alpha: 1 }, // #F8F5F0
    })
    .png()
    .toFile(pub('apple-touch-icon.png'));
  console.log('  ✓ apple-touch-icon.png (180x180)');

  // android-chrome-192x192.png
  await sharp(icon)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(pub('android-chrome-192x192.png'));
  console.log('  ✓ android-chrome-192x192.png');

  // android-chrome-512x512.png
  await sharp(icon)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(pub('android-chrome-512x512.png'));
  console.log('  ✓ android-chrome-512x512.png');

  // favicon.ico (48x48 PNG — browsers accept PNG in .ico)
  await sharp(icon)
    .resize(48, 48, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(pub('favicon.ico'));
  console.log('  ✓ favicon.ico (48x48)');
}

async function generateOgImage() {
  console.log('Generating OG image (1200x630)...');

  // Get logo dimensions to scale it
  const logoMeta = await sharp(logo).metadata();
  const maxLogoHeight = 200;
  const scale = maxLogoHeight / logoMeta.height;
  const logoWidth = Math.round(logoMeta.width * scale);
  const logoHeight = maxLogoHeight;

  // Resize logo
  const resizedLogo = await sharp(logo)
    .resize(logoWidth, logoHeight, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Create OG canvas: cream background with logo centered + tagline area
  const width = 1200;
  const height = 630;

  // Create text SVG for the tagline
  const taglineSvg = `<svg width="${width}" height="${height}">
    <style>
      .title { fill: #6B7F4E; font-size: 42px; font-family: Georgia, serif; font-weight: bold; }
      .subtitle { fill: #4B5563; font-size: 24px; font-family: Arial, sans-serif; }
    </style>
    <text x="600" y="${315 + logoHeight / 2 + 50}" text-anchor="middle" class="title">Adult Day Memory Care</text>
    <text x="600" y="${315 + logoHeight / 2 + 90}" text-anchor="middle" class="subtitle">Ukiah, CA · Opening Soon</text>
  </svg>`;

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 248, g: 245, b: 240, alpha: 1 }, // #F8F5F0
    },
  })
    .composite([
      {
        input: resizedLogo,
        top: Math.round((height - logoHeight) / 2 - 60),
        left: Math.round((width - logoWidth) / 2),
      },
      {
        input: Buffer.from(taglineSvg),
        top: 0,
        left: 0,
      },
    ])
    .png()
    .toFile(pub('og-image.png'));

  console.log('  ✓ og-image.png (1200x630)');
}

try {
  await generateFavicons();
  await generateOgImage();
  console.log('\nDone! All assets generated.');
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
