/**
 * Recompress oversized WebP assets in public/photos (in-place).
 * Usage: node scripts/compress-webp.mjs [glob paths...]
 * Default: public/photos/blog/*.webp
 */
import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, dirname } from 'node:path';

const TARGET_KB = 280;
const MAX_WIDTH_BLOG = 1400;
const MAX_WIDTH_HERO = 1200;
const MAX_WIDTH_LOGO = 512;

async function fileSizeKb(path) {
  const s = await stat(path);
  return Math.round(s.size / 1024);
}

async function compressOne(filePath, { maxWidth, targetKb = TARGET_KB }) {
  const beforeKb = await fileSizeKb(filePath);
  if (beforeKb <= targetKb) {
    console.log(`skip ${filePath} (${beforeKb} KB)`);
    return { filePath, beforeKb, afterKb: beforeKb, skipped: true };
  }

  const meta = await sharp(filePath).metadata();
  const width = meta.width ?? maxWidth;
  const resizeWidth = width > maxWidth ? maxWidth : undefined;

  let quality = 82;
  let afterKb = beforeKb;
  const tmp = `${filePath}.tmp.webp`;

  for (let attempt = 0; attempt < 6; attempt++) {
    let pipeline = sharp(filePath);
    if (resizeWidth) pipeline = pipeline.resize({ width: resizeWidth, withoutEnlargement: true });
    await pipeline.webp({ quality, effort: 6 }).toFile(tmp);
    afterKb = await fileSizeKb(tmp);
    if (afterKb <= targetKb || quality <= 68) break;
    quality -= 4;
    await unlink(tmp).catch(() => {});
  }

  await rename(tmp, filePath);
  console.log(`${filePath}: ${beforeKb} KB → ${afterKb} KB (q=${quality}, maxW=${resizeWidth ?? width})`);
  return { filePath, beforeKb, afterKb, skipped: false };
}

async function collectWebp(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await collectWebp(p)));
    else if (/\.webp$/i.test(e.name)) out.push(p);
  }
  return out;
}

const args = process.argv.slice(2);
const files =
  args.length > 0
    ? args
    : [
        ...(await collectWebp('public/photos/blog')),
        'public/photos/maintoruabii.webp',
        'public/photos/toruabii.webp',
      ];

const optsByPath = (p) => {
  if (p.includes('toruabii.webp')) return { maxWidth: MAX_WIDTH_LOGO, targetKb: 120 };
  if (p.includes('maintoruabii')) return { maxWidth: MAX_WIDTH_HERO, targetKb: 220 };
  return { maxWidth: MAX_WIDTH_BLOG, targetKb: TARGET_KB };
};

const results = [];
for (const f of files) {
  results.push(await compressOne(f, optsByPath(f)));
}

console.log('\nSummary:');
for (const r of results) {
  if (!r.skipped) console.log(`  ${r.beforeKb} → ${r.afterKb} KB  ${r.filePath}`);
}
