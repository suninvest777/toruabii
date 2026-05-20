import sharp from 'sharp';
import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

async function convertDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      await convertDir(p);
    } else if (/\.jpe?g$/i.test(e.name)) {
      const out = p.replace(/\.jpe?g$/i, '.webp');
      await sharp(p).webp({ quality: 85 }).toFile(out);
      console.log('wrote', out);
    }
  }
}

await convertDir('public/photo');
