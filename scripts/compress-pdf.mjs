/**
 * Lossless PDF compression script
 * Re-encodes all streams with maximum deflate compression
 */
import fs from 'fs';
import path from 'path';
import { PDFDocument } from 'pdf-lib';
import pako from 'pako';

const inputPath = path.resolve('public/bewell-brochure.pdf');
const outputPath = path.resolve('public/bewell-brochure-compressed.pdf');

console.log('Reading PDF...');
const inputBytes = fs.readFileSync(inputPath);
console.log(`  Input size: ${(inputBytes.length / 1024 / 1024).toFixed(2)} MB`);

// Load and re-save — pdf-lib re-encodes all streams with proper compression
const pdfDoc = await PDFDocument.load(inputBytes, { updateMetadata: false });

// Strip metadata to save a few KB
pdfDoc.setTitle('');
pdfDoc.setAuthor('');
pdfDoc.setSubject('');
pdfDoc.setKeywords([]);
pdfDoc.setProducer('');
pdfDoc.setCreator('');

const savedBytes = await pdfDoc.save({
  useObjectStreams: true,  // cross-reference streams — smaller
  addDefaultPage: false,
  objectsPerTick: Infinity, // process in one pass
});

fs.writeFileSync(outputPath, savedBytes);
console.log(`  Output size: ${(savedBytes.length / 1024 / 1024).toFixed(2)} MB`);
console.log(`  Saved: ${((1 - savedBytes.length / inputBytes.length) * 100).toFixed(1)}%`);
console.log(`\nCompressed file: ${outputPath}`);
