import fs from 'fs';
import path from 'path';

const blogDir = path.join('src', 'pages', 'blog');

for (const file of fs.readdirSync(blogDir)) {
  if (!file.endsWith('.astro') || file === 'index.astro') continue;
  const filePath = path.join(blogDir, file);
  let src = fs.readFileSync(filePath, 'utf8');
  const end = src.indexOf('</BaseLayout>');
  if (end === -1) continue;
  const tail = src.slice(end + '</BaseLayout>'.length);
  if (!tail.trim()) continue;

  let headExtra = '';

  const faqMatch = tail.match(
    /<script[\s\S]*?'@type': 'FAQPage'[\s\S]*?<\/script>/
  );
  if (faqMatch) {
    let faq = faqMatch[0];
    if (!faq.includes('slot="head"')) {
      faq = faq.replace('<script', '<script\n    slot="head"');
    }
    if (!faq.includes("'@id'")) {
      faq = faq.replace(
        "'@type': 'FAQPage',",
        `'@type': 'FAQPage',\n    '@id': canonicalUrl + '#faq',\n    url: canonicalUrl,\n    inLanguage: currentLang,`
      );
    }
    headExtra += `\n  ${faq}\n`;
  }

  const howToMatch = tail.match(
    /<script[\s\S]*?'@type': 'HowTo'[\s\S]*?<\/script>/
  );
  if (howToMatch) {
    let howTo = howToMatch[0];
    if (!howTo.includes('slot="head"')) {
      howTo = howTo.replace('<script', '<script\n    slot="head"');
    }
    headExtra += `\n  ${howTo}\n`;
  }

  src = src.slice(0, end + '</BaseLayout>'.length) + '\n';
  if (headExtra) {
    src = src.replace(/<BlogPostingSchema[\s\S]*?\/>/, (m) => `${m}${headExtra}`);
  }
  fs.writeFileSync(filePath, src);
  console.log('cleaned', file);
}
