import fs from 'fs';
import path from 'path';

let count = 0;

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (name === 'api') continue;
      walk(full);
    } else if (name.endsWith('.astro')) {
      removePrerender(full);
    }
  }
}

function removePrerender(file) {
  let src = fs.readFileSync(file, 'utf8');
  if (!src.includes('export const prerender = true')) return;

  const next = src.replace(/\r?\nexport const prerender = true;\r?\n/g, '\n');
  if (next === src) return;

  fs.writeFileSync(file, next);
  count += 1;
  console.log('removed', file);
}

walk('src/pages');
console.log(`Total: ${count} files`);
