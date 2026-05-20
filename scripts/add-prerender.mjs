import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (name === 'api') continue;
      walk(full);
    } else if (name.endsWith('.astro')) {
      patch(full);
    }
  }
}

function patch(file) {
  let src = fs.readFileSync(file, 'utf8');
  if (src.includes('export const prerender')) return;

  const rel = file.replace(/\\/g, '/');
  const extra = [];

  if (rel.includes('[category].astro')) {
    extra.push(`export function getStaticPaths() {
  return [
    { params: { category: 'kuttesusteem' } },
    { params: { category: 'otoplenije' } },
  ];
}`);
  }

  const inject = ['export const prerender = true;', ...extra, ''].join('\n');
  const end = src.indexOf('---', 3);
  if (end === -1) {
    console.warn('skip (no frontmatter):', file);
    return;
  }
  src = `${src.slice(0, end + 3)}\n${inject}${src.slice(end + 3)}`;
  fs.writeFileSync(file, src);
  console.log('patched', file);
}

walk(pagesDir);
