/**
 * Rasterize public/favicon.svg → PNG sizes + favicon.ico.
 * Run: node scripts/generate-favicon.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = join(root, 'public');
const svg = readFileSync(join(publicDir, 'favicon.svg'));

/** Pack PNG buffers into a multi-size .ico (PNG-embedded, Vista+). */
function buildIco(images) {
  const count = images.length;
  const headerSize = 6 + count * 16;
  let dataOffset = headerSize;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(count, 4);

  const entries = [];
  const data = [];
  for (const { size, buffer } of images) {
    const entry = Buffer.alloc(16);
    entry[0] = size >= 256 ? 0 : size;
    entry[1] = size >= 256 ? 0 : size;
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(buffer.length, 8);
    entry.writeUInt32LE(dataOffset, 12);
    entries.push(entry);
    data.push(buffer);
    dataOffset += buffer.length;
  }
  return Buffer.concat([header, ...entries, ...data]);
}

const sizes = [
  { name: 'favicon-16.png', size: 16 },
  { name: 'favicon-32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
];

const icoImages = [];

for (const { name, size } of sizes) {
  const buffer = await sharp(svg).resize(size, size).png().toBuffer();
  writeFileSync(join(publicDir, name), buffer);
  console.log(`Wrote ${name} (${size}×${size})`);
  if (size === 16 || size === 32) {
    icoImages.push({ size, buffer });
  }
}

writeFileSync(join(publicDir, 'favicon.ico'), buildIco(icoImages));
console.log('Wrote favicon.ico');
