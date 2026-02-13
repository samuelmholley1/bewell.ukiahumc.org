/**
 * Remove Gemini visible watermark using reverse alpha blending.
 * Port of journey-ad/gemini-watermark-remover to Node.js + sharp.
 *
 * Algorithm: original = (watermarked - α × 255) / (1 - α)
 * Reference images (bg_48.png, bg_96.png) from the open-source repo.
 *
 * Run: node scripts/remove-watermark.mjs
 */
import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = (...p) => join(__dirname, '..', 'public', ...p);
const asset = (f) => join(__dirname, f);

// Constants from blendModes.js
const ALPHA_THRESHOLD = 0.002;
const MAX_ALPHA = 0.99;
const LOGO_VALUE = 255; // white watermark

// Detection rules from watermarkEngine.js
function detectWatermarkConfig(w, h) {
  if (w > 1024 && h > 1024) {
    return { logoSize: 96, marginRight: 64, marginBottom: 64 };
  }
  return { logoSize: 48, marginRight: 32, marginBottom: 32 };
}

function calculateWatermarkPosition(w, h, config) {
  return {
    x: w - config.logoSize - config.marginRight,
    y: h - config.logoSize - config.marginBottom,
    width: config.logoSize,
    height: config.logoSize,
  };
}

// Alpha map from bg capture — max(R,G,B) / 255
function calculateAlphaMap(data, size) {
  const alphaMap = new Float32Array(size * size);
  for (let i = 0; i < alphaMap.length; i++) {
    const idx = i * 4; // RGBA
    const r = data[idx];
    const g = data[idx + 1];
    const b = data[idx + 2];
    alphaMap[i] = Math.max(r, g, b) / 255.0;
  }
  return alphaMap;
}

// Reverse alpha blending on watermark region
function removeWatermark(imgData, width, alphaMap, position) {
  const { x, y, width: wmW, height: wmH } = position;

  for (let row = 0; row < wmH; row++) {
    for (let col = 0; col < wmW; col++) {
      const imgIdx = ((y + row) * width + (x + col)) * 4;
      const alphaIdx = row * wmW + col;

      let alpha = alphaMap[alphaIdx];
      if (alpha < ALPHA_THRESHOLD) continue;

      alpha = Math.min(alpha, MAX_ALPHA);
      const oneMinusAlpha = 1.0 - alpha;

      // Reverse alpha blend for R, G, B
      for (let c = 0; c < 3; c++) {
        const watermarked = imgData[imgIdx + c];
        const original = (watermarked - alpha * LOGO_VALUE) / oneMinusAlpha;
        imgData[imgIdx + c] = Math.max(0, Math.min(255, Math.round(original)));
      }
      // Alpha channel unchanged
    }
  }
}

async function processImage(filename) {
  const inputPath = pub(filename);
  const outputPath = pub(filename); // overwrite (originals backed up)

  // Read image
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  const { width, height } = metadata;

  console.log(`  Processing ${filename} (${width}×${height})...`);

  // Detect watermark config
  const config = detectWatermarkConfig(width, height);
  const position = calculateWatermarkPosition(width, height, config);
  console.log(`    Watermark: ${config.logoSize}×${config.logoSize} at (${position.x}, ${position.y})`);

  // Load appropriate bg reference
  const bgPath = asset(`bg_${config.logoSize}.png`);
  const bgRaw = await sharp(bgPath)
    .ensureAlpha()
    .raw()
    .toBuffer();

  // Calculate alpha map
  const alphaMap = calculateAlphaMap(bgRaw, config.logoSize);

  // Get raw pixel data (RGBA)
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Apply reverse alpha blending
  removeWatermark(data, info.width, alphaMap, position);

  // Write back
  await sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  })
    .png()
    .toFile(outputPath);

  console.log(`    ✓ Watermark removed`);
}

const files = ['hero-bg.png', 'need-photo.png', 'vision-photo.png'];

console.log('Removing Gemini watermarks (reverse alpha blending)...\n');
console.log('Originals backed up in public/originals/\n');

for (const f of files) {
  try {
    await processImage(f);
  } catch (err) {
    console.error(`    ✗ Failed: ${err.message}`);
  }
}

console.log('\nDone.');
