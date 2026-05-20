import fs from 'fs';
import path from 'path';

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (name === 'api') continue;
      walk(full);
    } else if (name.endsWith('.astro')) {
      fix(full);
    }
  }
}

function fix(file) {
  let src = fs.readFileSync(file, 'utf8');
  if (!src.includes('export const prerender = true')) return;

  // Remove prerender export placed after closing frontmatter (before template)
  src = src.replace(/\r?\n---\r?\nexport const prerender = true;\r?\n\r?\n/g, '\n---\n');

  const firstFence = src.indexOf('---');
  const secondFence = src.indexOf('---', firstFence + 3);
  if (secondFence === -1) return;

  const before = src.slice(0, firstFence + 3);
  let fm = src.slice(firstFence + 3, secondFence);
  const after = src.slice(secondFence);

  if (fm.includes('export const prerender')) {
    fs.writeFileSync(file, before + fm + after);
    return;
  }

  fm = `\nexport const prerender = true;${fm}`;
  fs.writeFileSync(file, before + fm + after);
  console.log('fixed', file);
}

walk('src/pages');
