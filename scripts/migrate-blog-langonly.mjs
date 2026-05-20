/**
 * One-off migration: blog-et/blog-ru CSS hide → LangOnly (single H1 per locale).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const blogDir = path.join(root, 'src', 'pages', 'blog');

function stripBlogLocaleClasses(s) {
  return s.replace(/ blog-et\b/g, '').replace(/ blog-ru\b/g, '');
}

function addImports(content, depth) {
  const prefix = '../'.repeat(depth);
  if (content.includes('LangOnly')) return content;
  let out = content;
  if (out.includes("import BaseLayout from")) {
    out = out.replace(
      /import BaseLayout from[^\n]+;\n/,
      (m) =>
        `${m}import LangOnly from '${prefix}components/LangOnly.astro';\nimport { pageLang } from '${prefix}utils/page-lang';\n`
    );
  }
  return out;
}

function usePageLang(content) {
  return content.replace(
    /const currentLang = Astro\.url\.searchParams\.get\('lang'\) === 'ru' \? 'ru' : 'et';/g,
    'const currentLang = pageLang(Astro.url);'
  );
}

function dedupeBreadcrumbImport(content) {
  return content.replace(
    /import \{ blogArticleBreadcrumbOverride \} from[^\n]+\nimport \{ blogArticleBreadcrumbOverride \}[^\n]+\n/,
    "import { blogArticleBreadcrumbOverride } from '../../utils/seo-jsonld';\n"
  );
}

/** Wrap each top-level <header class="bg-trust-blue">…</header> in LangOnly. */
function wrapTrustHeaders(html) {
  const re = /<header class="bg-trust-blue[\s\S]*?<\/header>/g;
  let i = 0;
  return html.replace(re, (block) => {
    const lang = i === 0 ? 'et' : 'ru';
    i += 1;
    return `<LangOnly lang="${lang}" activeLang={currentLang}>\n${block}\n</LangOnly>`;
  });
}

/** Inside <main>, wrap each <article …>…</article> in LangOnly. */
function wrapMainArticles(html) {
  const mainRe = /(<main class="py-12[\s\S]*?<\/main>)/;
  const m = html.match(mainRe);
  if (!m) return html;
  const mainBlock = m[1];
  const articleRe = /<article[\s\S]*?<\/article>/g;
  const articles = [...mainBlock.matchAll(articleRe)].map((x) => x[0]);
  if (articles.length < 2) return html;
  let replaced = mainBlock;
  articles.forEach((art, idx) => {
    const lang = idx === 0 ? 'et' : 'ru';
    const wrapped = `<LangOnly lang="${lang}" activeLang={currentLang}>\n${art}\n</LangOnly>`;
    replaced = replaced.replace(art, wrapped);
  });
  return html.replace(mainBlock, replaced);
}

/** Split "category link" sections that had both ET and RU h2 in one ET article. */
function splitCategoryLinkSections(html) {
  const re =
    /(\s*<!-- Category Section -->\s*<section class="bg-white rounded-lg shadow-lg p-6 mb-8">\s*)<h2[^>]*>Rohkem artikleid küttesüsteemi kohta<\/h2>\s*<h2[^>]*>Больше статей об отоплении<\/h2>\s*<div class="flex justify-center">\s*<a href="\/blog\/kategoria\/kuttesusteem"[^>]*>\s*Küttesüsteemi artiklid\s*<\/a>\s*<a href="\/ru\/blog\/kategoria\/otoplenije"[^>]*>\s*Статьи об отоплении\s*<\/a>\s*<\/div>\s*<\/section>/;
  const replacement = `$1<LangOnly lang="et" activeLang={currentLang}>
        <h2 class="text-2xl font-bold text-trust-blue mb-4">Rohkem artikleid küttesüsteemi kohta</h2>
        <div class="flex justify-center">
          <a href="/blog/kategoria/kuttesusteem" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Küttesüsteemi artiklid
          </a>
        </div>
      </LangOnly>
      <LangOnly lang="ru" activeLang={currentLang}>
        <h2 class="text-2xl font-bold text-trust-blue mb-4">Больше статей об отоплении</h2>
        <div class="flex justify-center">
          <a href="/ru/blog/kategoria/otoplenije" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Статьи об отоплении
          </a>
        </div>
      </LangOnly>
      </section>`;
  return html.replace(re, replacement);
}

/** Split districts blocks with dual ET/RU h2 in boiler/kanalisatsioon articles. */
function splitDistrictsSection(html) {
  const re =
    /(\s*<!-- Districts Section -->\s*<section class="bg-white rounded-lg shadow-lg p-6 mb-8">\s*)<h2[^>]*>Boileri toruabi piirkondades<\/h2>\s*<h2[^>]*>Обслуживание бойлеров в районах<\/h2>[\s\S]*?<\/section>/;
  if (!re.test(html)) return html;
  return html.replace(
    re,
    `$1<LangOnly lang="et" activeLang={currentLang}>
        <h2 class="text-2xl font-bold text-trust-blue mb-4">Boileri toruabi piirkondades</h2>
        <p class="text-gray-700 mb-4">Me pakume boileri hooldust ja loputust kõigis Tallinna piirkondades:</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="/toruabi-lasnamae" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Boileri toruabi Lasnamäes</a>
          <a href="/toruabi-mustamae" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Boileri toruabi Mustamäel</a>
          <a href="/toruabi-kesklinn" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Boileri toruabi Kesklinnas</a>
        </div>
      </LangOnly>
      <LangOnly lang="ru" activeLang={currentLang}>
        <h2 class="text-2xl font-bold text-trust-blue mb-4">Обслуживание бойлеров в районах</h2>
        <p class="text-gray-700 mb-4">Мы предоставляем обслуживание и промывку бойлеров во всех районах Таллинна:</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="/ru/toruabi-lasnamae" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Обслуживание бойлеров в Ласнамяэ</a>
          <a href="/ru/toruabi-mustamae" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Обслуживание бойлеров в Мустамяэ</a>
          <a href="/ru/toruabi-kesklinn" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Обслуживание бойлеров в центре</a>
        </div>
      </LangOnly>
      </section>`
  );
}

function splitKanalisatsioonDistricts(html) {
  const re =
    /(\s*<!-- Districts Section -->\s*<section class="bg-white rounded-lg shadow-lg p-6 mb-8">\s*)<h2[^>]*>Toruabi piirkondades<\/h2>\s*<h2[^>]*>Торуаби в районах<\/h2>[\s\S]*?<\/section>/;
  if (!re.test(html)) return html;
  return html.replace(
    re,
    `$1<LangOnly lang="et" activeLang={currentLang}>
        <h2 class="text-2xl font-bold text-trust-blue mb-4">Toruabi piirkondades</h2>
        <p class="text-gray-700 mb-4">Me pakume kanalisatsiooni toruabi teenuseid kõigis Tallinna piirkondades:</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="/toruabi-lasnamae" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Toruabi Lasnamäes</a>
          <a href="/toruabi-mustamae" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Toruabi Mustamäel</a>
          <a href="/toruabi-kesklinn" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Toruabi Kesklinnas</a>
        </div>
      </LangOnly>
      <LangOnly lang="ru" activeLang={currentLang}>
        <h2 class="text-2xl font-bold text-trust-blue mb-4">Торуаби в районах</h2>
        <p class="text-gray-700 mb-4">Мы предоставляем услуги прочистки канализации во всех районах Таллинна:</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="/ru/toruabi-lasnamae" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Торуаби в Ласнамяэ</a>
          <a href="/ru/toruabi-mustamae" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Торуаби в Мустамяэ</a>
          <a href="/ru/toruabi-kesklinn" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Торуаби в центре</a>
        </div>
      </LangOnly>
      </section>`
  );
}

function migrateBlogArticle(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = dedupeBreadcrumbImport(content);
  content = addImports(content, 2);
  content = usePageLang(content);

  const layoutEnd = content.indexOf('>\n', content.indexOf('<BaseLayout'));
  const layoutClose = content.lastIndexOf('</BaseLayout>');
  if (layoutEnd < 0 || layoutClose < 0) {
    console.warn('skip (no BaseLayout body):', filePath);
    return false;
  }
  const before = content.slice(0, layoutEnd + 2);
  let body = content.slice(layoutEnd + 2, layoutClose);
  const after = content.slice(layoutClose);

  body = stripBlogLocaleClasses(body);
  body = splitCategoryLinkSections(body);
  body = splitDistrictsSection(body);
  body = splitKanalisatsioonDistricts(body);
  body = wrapTrustHeaders(body);
  body = wrapMainArticles(body);

  fs.writeFileSync(filePath, before + body + after);
  return true;
}

function wrapBlogEtRuBlocks(html, etBlocks, ruBlocks) {
  let out = html;
  for (const [marker, et, ru] of [
    ['blog-et-only', etBlocks, ruBlocks],
  ]) {
    void marker;
  }
  return out;
}

function migrateIndex(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = addImports(content, 2);
  content = usePageLang(content);
  let body = content.slice(content.indexOf('<BaseLayout'), content.lastIndexOf('</BaseLayout>'));
  const full = content;
  const start = full.indexOf('<section class="bg-white border-b');
  const end = full.lastIndexOf('</main>');
  if (start < 0 || end < 0) return false;

  let section = full.slice(start, end + '</main>'.length);
  section = stripBlogLocaleClasses(section);

  const districtsEt = `<LangOnly lang="et" activeLang={currentLang}>
    <section class="bg-white border-b border-gray-200 py-6 px-4" aria-label="Piirkonnad">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-lg font-bold text-trust-blue mb-3 text-center">Toruabi lehed Tallinna piirkondades</h2>
      <div class="flex flex-wrap gap-x-4 gap-y-2 justify-center text-sm">
        <a href="/toruabi-lasnamae" class="text-emergency-red hover:underline font-medium">Lasnamäe</a>
        <a href="/toruabi-mustamae" class="text-emergency-red hover:underline font-medium">Mustamäe</a>
        <a href="/toruabi-kesklinn" class="text-emergency-red hover:underline font-medium">Kesklinn</a>
        <a href="/toruabi-pirita" class="text-emergency-red hover:underline font-medium">Pirita</a>
        <a href="/toruabi-viimsi" class="text-emergency-red hover:underline font-medium">Viimsi</a>
        <a href="/hinnakiri" class="text-trust-blue hover:underline font-medium">Hinnakiri</a>
        <a href="/faq" class="text-trust-blue hover:underline font-medium">KKK</a>
      </div>
    </div>
  </section>
  </LangOnly>`;

  const districtsRu = `<LangOnly lang="ru" activeLang={currentLang}>
    <section class="bg-white border-b border-gray-200 py-6 px-4" aria-label="Районы">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-lg font-bold text-trust-blue mb-3 text-center">Торуаби по районам Таллина</h2>
      <div class="flex flex-wrap gap-x-4 gap-y-2 justify-center text-sm">
        <a href="/ru/toruabi-lasnamae" class="text-emergency-red hover:underline font-medium">Ласнамяэ</a>
        <a href="/ru/toruabi-mustamae" class="text-emergency-red hover:underline font-medium">Мустамяэ</a>
        <a href="/ru/toruabi-kesklinn" class="text-emergency-red hover:underline font-medium">Кесклинн</a>
        <a href="/ru/toruabi-pirita" class="text-emergency-red hover:underline font-medium">Пирита</a>
        <a href="/ru/toruabi-viimsi" class="text-emergency-red hover:underline font-medium">Виймси</a>
        <a href="/ru/hinnakiri" class="text-trust-blue hover:underline font-medium">Прайс</a>
        <a href="/ru/faq" class="text-trust-blue hover:underline font-medium">FAQ</a>
      </div>
    </div>
  </section>
  </LangOnly>`;

  // Replace old districts section (first section after header)
  section = section.replace(
    /<section class="bg-white border-b[\s\S]*?<\/section>\s*/,
    districtsEt + '\n  ' + districtsRu + '\n  '
  );

  // Wrap categories sections
  section = section.replace(
    /(\s*<!-- Categories Section -->\s*)<section class="max-w-5xl mx-auto mb-12">\s*<h2[^>]*>Kategooriad<\/h2>[\s\S]*?<\/section>\s*<section class="max-w-5xl mx-auto mb-12">\s*<h2[^>]*>Категории<\/h2>[\s\S]*?<\/section>/,
    `$1<LangOnly lang="et" activeLang={currentLang}>
    <section class="max-w-5xl mx-auto mb-12">
      <h2 class="text-2xl md:text-3xl font-bold text-trust-blue mb-6">Kategooriad</h2>
      <div class="flex flex-wrap gap-4">
        {Object.values(categories).map((cat) => (
          <a
            href={\`/blog/kategoria/\${cat.slug}\`}
            class="inline-block bg-white hover:bg-trust-blue hover:text-white text-trust-blue font-semibold py-3 px-6 rounded-lg shadow-md transition-colors border-2 border-trust-blue"
          >
            {cat.name}
          </a>
        ))}
      </div>
    </section>
    </LangOnly>
    <LangOnly lang="ru" activeLang={currentLang}>
    <section class="max-w-5xl mx-auto mb-12">
      <h2 class="text-2xl md:text-3xl font-bold text-trust-blue mb-6">Категории</h2>
      <div class="flex flex-wrap gap-4">
        {Object.values(categories).map((cat) => (
          <a
            href={ruPath(\`/blog/kategoria/\${cat.slugRu}\`)}
            class="inline-block bg-white hover:bg-trust-blue hover:text-white text-trust-blue font-semibold py-3 px-6 rounded-lg shadow-md transition-colors border-2 border-trust-blue"
          >
            {cat.nameRu}
          </a>
        ))}
      </div>
    </section>
    </LangOnly>`
  );

  // Wrap ET/RU post lists
  section = section.replace(
    /(\s*<!-- Estonian list -->\s*)<div class="max-w-5xl mx-auto space-y-8">[\s\S]*?<\/div>\s*(\s*<!-- Russian list -->\s*)<div class="max-w-5xl mx-auto space-y-8">[\s\S]*?<\/div>/,
    (m, p1, p2) => {
      const etMatch = m.match(/<!-- Estonian list -->[\s\S]*?<div class="max-w-5xl mx-auto space-y-8">([\s\S]*?)<\/div>\s*<!-- Russian/);
      const ruMatch = m.match(/<!-- Russian list -->[\s\S]*?<div class="max-w-5xl mx-auto space-y-8">([\s\S]*?)<\/div>\s*<!-- FAQ/);
      if (!etMatch || !ruMatch) return m;
      return `${p1}<LangOnly lang="et" activeLang={currentLang}>
    <div class="max-w-5xl mx-auto space-y-8">${etMatch[1]}</div>
    </LangOnly>
    ${p2}<LangOnly lang="ru" activeLang={currentLang}>
    <div class="max-w-5xl mx-auto space-y-8">${ruMatch[1]}</div>
    </LangOnly>`;
    }
  );

  // Wrap FAQ sections
  section = section.replace(
    /(\s*<!-- FAQ block for blog \(ET\) -->\s*)<section class="max-w-5xl mx-auto mt-16 space-y-4">[\s\S]*?<\/section>\s*(\s*<!-- FAQ block for blog \(RU\) -->\s*)<section class="max-w-5xl mx-auto mt-16 space-y-4">[\s\S]*?<\/section>/,
    (m, p1, p2) => {
      const et = m.match(/<!-- FAQ block for blog \(ET\) -->[\s\S]*?<section class="max-w-5xl mx-auto mt-16 space-y-4">([\s\S]*?)<\/section>\s*<!-- FAQ block for blog \(RU\)/);
      const ru = m.match(/<!-- FAQ block for blog \(RU\) -->[\s\S]*?<section class="max-w-5xl mx-auto mt-16 space-y-4">([\s\S]*?)<\/section>/);
      if (!et || !ru) return m;
      return `${p1}<LangOnly lang="et" activeLang={currentLang}>
    <section class="max-w-5xl mx-auto mt-16 space-y-4">${et[1]}</section>
    </LangOnly>
    ${p2}<LangOnly lang="ru" activeLang={currentLang}>
    <section class="max-w-5xl mx-auto mt-16 space-y-4">${ru[1]}</section>
    </LangOnly>`;
    }
  );

  content = full.slice(0, start) + section + full.slice(end + '</main>'.length);
  fs.writeFileSync(filePath, content);
  return true;
}

function migrateCategory(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = addImports(content, 3);
  content = usePageLang(content);
  const layoutEnd = content.indexOf('>\n', content.indexOf('<BaseLayout'));
  const layoutClose = content.lastIndexOf('</BaseLayout>');
  let body = content.slice(layoutEnd + 2, layoutClose);
  body = stripBlogLocaleClasses(body);
  body = wrapTrustHeaders(body);

  // Wrap ET and RU list divs inside main
  body = body.replace(
    /(\s*<!-- Estonian list -->\s*)<div class="max-w-5xl mx-auto space-y-8">([\s\S]*?)<\/div>\s*(\s*<!-- Russian list -->\s*)<div class="max-w-5xl mx-auto space-y-8">([\s\S]*?)<\/div>/,
    `$1<LangOnly lang="et" activeLang={currentLang}>
    <div class="max-w-5xl mx-auto space-y-8">$2</div>
    </LangOnly>
    $3<LangOnly lang="ru" activeLang={currentLang}>
    <div class="max-w-5xl mx-auto space-y-8">$4</div>
    </LangOnly>`
  );

  fs.writeFileSync(filePath, content.slice(0, layoutEnd + 2) + body + content.slice(layoutClose));
  return true;
}

const articleFiles = fs
  .readdirSync(blogDir)
  .filter((f) => f.endsWith('.astro') && f !== 'index.astro')
  .map((f) => path.join(blogDir, f));

let count = 0;
for (const f of articleFiles) {
  if (migrateBlogArticle(f)) {
    count += 1;
    console.log('article:', path.basename(f));
  }
}
if (migrateIndex(path.join(blogDir, 'index.astro'))) {
  count += 1;
  console.log('index.astro');
}
if (migrateCategory(path.join(blogDir, 'kategoria', '[category].astro'))) {
  count += 1;
  console.log('kategoria/[category].astro');
}
console.log('migrated:', count);
