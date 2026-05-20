import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const faqSlugs = [
  'avatud-ja-suletud-kuttesusteemid',
  'bimetalliline-radiaator',
  'elektrikatla-ulehendamine',
  'hudroakumulaatorid-ja-laienduspaagid',
  'kollektorigrupp',
  'kuttesusteem-eramaja',
  'laienduspaak-kutte-ja-gvs',
  'puhvermahuti',
  'pump-margi-ja-kuiva-rootoriga',
  'radiaatori-valik',
  'tsirkulatsioonipump',
];

const blogDir = path.join('src', 'pages', 'blog');

for (const slug of faqSlugs) {
  const filePath = path.join(blogDir, `${slug}.astro`);
  let current = fs.readFileSync(filePath, 'utf8');
  if (current.includes("'@type': 'FAQPage'")) {
    console.log('skip (has FAQ)', slug);
    continue;
  }

  const git = execSync(`git show HEAD:src/pages/blog/${slug}.astro`, { encoding: 'utf8' });
  const faqMatch = git.match(
    /<script\s+type="application\/ld\+json"[\s\S]*?'@type': 'FAQPage'[\s\S]*?\)\}\s*\/>\s*/
  );
  if (!faqMatch) {
    console.log('no FAQ in git', slug);
    continue;
  }

  let faq = faqMatch[0].trim();
  if (!faq.includes("'@id'")) {
    faq = faq.replace(
      "'@type': 'FAQPage',",
      `'@type': 'FAQPage',\n    '@id': canonicalUrl + '#faq',\n    url: canonicalUrl,\n    inLanguage: currentLang,`
    );
  }
  if (!faq.includes('slot="head"')) {
    faq = faq.replace('<script', '<script\n    slot="head"');
  }
  faq = faq.replace(/<\/script>\s*$/, '/>');

  current = current.replace(/<BlogPostingSchema[\s\S]*?\/>/, (m) => `${m}\n  ${faq}\n`);

  if (!current.includes('breadcrumbJsonLdOverride={breadcrumbJsonLdOverride}')) {
    current = current.replace(
      /(<BaseLayout[\s\S]*?ogImage="[^"]+")(\s*>)/,
      '$1\n  ogType="article"\n  breadcrumbJsonLdOverride={breadcrumbJsonLdOverride}$2'
    );
  }

  fs.writeFileSync(filePath, current);
  console.log('restored FAQ', slug);
}
