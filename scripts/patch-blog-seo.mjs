/**
 * Add blog breadcrumb override + ogType article; move FAQ/HowTo to head; strip footer JSON-LD.
 */
import fs from 'fs';
import path from 'path';

const blogDir = path.join('src', 'pages', 'blog');
const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.astro') && f !== 'index.astro');

const importBlock = `import { blogArticleBreadcrumbMeta } from '../../data/blog-article-breadcrumbs';
import { blogArticleBreadcrumbOverride } from '../../utils/seo-jsonld';`;

for (const file of files) {
  const slug = file.replace(/\.astro$/, '');
  const meta = `blogArticleBreadcrumbMeta['${slug}']`;
  const filePath = path.join(blogDir, file);
  let src = fs.readFileSync(filePath, 'utf8');

  if (!src.includes("import { blogArticleBreadcrumbMeta }")) {
    src = src.replace(
      "import { sitemapEntries } from '../../data/sitemap-entries';",
      `import { sitemapEntries } from '../../data/sitemap-entries';\n${importBlock}`
    );
  }

  // Remove accidental duplicate import lines
  const importLines = src.split('\n').filter(
    (line, i, arr) =>
      !(
        (line.includes('blog-article-breadcrumbs') || line.includes('seo-jsonld')) &&
        arr.indexOf(line) !== i
      )
  );
  src = importLines.join('\n');

  if (!src.includes('breadcrumbJsonLdOverride =')) {
    src = src.replace(
      /const canonicalUrl = currentLang === 'ru'[^\n]*;\r?\n/,
      (m) =>
        `${m}const articleCrumb = ${meta};\nconst breadcrumbJsonLdOverride = blogArticleBreadcrumbOverride(\n  articlePath,\n  currentLang,\n  articleCrumb.category,\n  articleCrumb.crumbNameEt,\n  articleCrumb.crumbNameRu\n);\n`
    );
    src = src.replace(/<BaseLayout\n([\s\S]*?)>/, (match, inner) => {
      if (inner.includes('breadcrumbJsonLdOverride')) return match;
      if (inner.includes('ogType=')) {
        return match.replace('\n>', '\n  breadcrumbJsonLdOverride={breadcrumbJsonLdOverride}\n>');
      }
      return match.replace(
        '\n>',
        '\n  ogType="article"\n  breadcrumbJsonLdOverride={breadcrumbJsonLdOverride}\n>'
      );
    });
  }

  const faqAfterLayout = src.match(
    /<\/BaseLayout>\s*\n\s*<script\s+type="application\/ld\+json"[\s\S]*?'@type': 'FAQPage'[\s\S]*?<\/script>\s*\n/
  );
  if (faqAfterLayout) {
    let faqBlock = faqAfterLayout[0].replace(/<\/BaseLayout>\s*\n\s*/, '');
    if (!faqBlock.includes("'@id'")) {
      faqBlock = faqBlock.replace(
        "'@type': 'FAQPage',",
        `'@type': 'FAQPage',\n    '@id': canonicalUrl + '#faq',\n    url: canonicalUrl,\n    inLanguage: currentLang,`
      );
    }
    faqBlock = faqBlock.replace('<script', '<script\n    slot="head"');
    src = src.replace(faqAfterLayout[0], '</BaseLayout>\n\n');
    src = src.replace(/<BlogPostingSchema[\s\S]*?\/>/, (m) => `${m}\n  ${faqBlock.trim()}\n`);
  }

  src = src.replace(
    /\n<!-- BreadcrumbList Schema -->[\s\S]*?<script[\s\S]*?'@type': 'BreadcrumbList'[\s\S]*?<\/script>\s*\n?/g,
    '\n'
  );

  const crumbOnly = src.match(
    /<\/BaseLayout>\s*\n\s*<!-- BreadcrumbList Schema -->[\s\S]*?<\/script>\s*\n/
  );
  if (crumbOnly) {
    src = src.replace(crumbOnly[0], '</BaseLayout>\n');
  }

  fs.writeFileSync(filePath, src);
  console.log('patched', file);
}
