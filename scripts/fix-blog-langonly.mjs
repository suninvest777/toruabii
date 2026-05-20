import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const blogDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'pages', 'blog');

function ensureImports(content, depth = 2) {
  const prefix = '../'.repeat(depth);
  let out = content;
  if (!out.includes("import LangOnly")) {
    out = out.replace(
      /import BaseLayout from[^\n]+;\r?\n/,
      (m) =>
        `${m}import LangOnly from '${prefix}components/LangOnly.astro';\r\nimport { pageLang } from '${prefix}utils/page-lang';\r\n`
    );
  }
  if (!out.includes('pageLang(Astro.url)')) {
    out = out.replace(
      /const currentLang = Astro\.url\.searchParams\.get\('lang'\) === 'ru' \? 'ru' : 'et';/g,
      'const currentLang = pageLang(Astro.url);'
    );
  }
  return out;
}

function stripBlogLocaleClasses(s) {
  return s.replace(/ blog-et\b/g, '').replace(/ blog-ru\b/g, '');
}

function wrapTrustHeaders(html) {
  if (html.includes('<LangOnly lang="et"')) return html;
  const re = /<header class="bg-trust-blue[\s\S]*?<\/header>/g;
  let i = 0;
  return html.replace(re, (block) => {
    const lang = i === 0 ? 'et' : 'ru';
    i += 1;
    return `<LangOnly lang="${lang}" activeLang={currentLang}>\r\n${block}\r\n</LangOnly>`;
  });
}

function wrapMainArticles(html) {
  if (html.includes('<LangOnly lang="et" activeLang={currentLang}>\r\n<article')) return html;
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
    replaced = replaced.replace(
      art,
      `<LangOnly lang="${lang}" activeLang={currentLang}>\r\n${art}\r\n</LangOnly>`
    );
  });
  return html.replace(mainBlock, replaced);
}

function splitCategoryLinkSections(html) {
  if (!html.includes('Rohkem artikleid küttesüsteemi kohta')) return html;
  if (html.includes('LangOnly lang="et" activeLang={currentLang}>\r\n        <h2 class="text-2xl font-bold text-trust-blue mb-4">Rohkem')) {
    return html;
  }
  const extended =
    /(\s*<!-- Category Section -->\s*<section class="bg-white rounded-lg shadow-lg p-6 mb-8">\s*)<h2[^>]*>Rohkem artikleid küttesüsteemi kohta<\/h2>\s*<h2[^>]*>Больше статей об отоплении<\/h2>\s*<p[^>]*>\s*Vaata kõiki[\s\S]*?<\/section>/;
  if (extended.test(html)) {
    return html.replace(
      extended,
      `$1<LangOnly lang="et" activeLang={currentLang}>
        <h2 class="text-2xl font-bold text-trust-blue mb-4">Rohkem artikleid küttesüsteemi kohta</h2>
        <p class="text-gray-700 mb-4">
          Vaata kõiki meie artikleid küttesüsteemi hoolduse ja remondi kohta:
        </p>
        <div class="flex justify-center">
          <a href="/blog/kategoria/kuttesusteem" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Küttesüsteemi artiklid
          </a>
        </div>
      </LangOnly>
      <LangOnly lang="ru" activeLang={currentLang}>
        <h2 class="text-2xl font-bold text-trust-blue mb-4">Больше статей об отоплении</h2>
        <p class="text-gray-700 mb-4">
          Посмотрите все наши статьи об обслуживании и ремонте систем отопления:
        </p>
        <div class="flex justify-center">
          <a href="/ru/blog/kategoria/otoplenije" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Статьи об отоплении
          </a>
        </div>
      </LangOnly>
      </section>`
    );
  }
  return html.replace(
    /(\s*<!-- Category Section -->\s*<section class="bg-white rounded-lg shadow-lg p-6 mb-8">\s*)<h2[^>]*>Rohkem artikleid küttesüsteemi kohta<\/h2>[\s\S]*?<\/section>/,
    `$1<LangOnly lang="et" activeLang={currentLang}>
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
      </section>`
  );
}

function splitKutteDistricts(html) {
  if (!html.includes('Küttesüsteemi toruabi piirkondades')) return html;
  if (html.includes('LangOnly lang="et" activeLang={currentLang}>\r\n        <h2 class="text-2xl font-bold text-trust-blue mb-4">Küttesüsteemi toruabi')) return html;
  return html.replace(
    /(\s*<!-- (?:Service Areas|Districts) Section -->\s*<section class="bg-white rounded-lg shadow-lg p-6 mb-8">\s*)<h2[^>]*>Küttesüsteemi toruabi piirkondades<\/h2>[\s\S]*?<\/section>/,
    `$1<LangOnly lang="et" activeLang={currentLang}>
        <h2 class="text-2xl font-bold text-trust-blue mb-4">Küttesüsteemi toruabi piirkondades</h2>
        <p class="text-gray-700 mb-4">Me pakume küttesüsteemi hooldust ja remonti kõigis Tallinna piirkondades:</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="/toruabi-lasnamae" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Küttesüsteemi toruabi Lasnamäes</a>
          <a href="/toruabi-mustamae" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Küttesüsteemi toruabi Mustamäel</a>
          <a href="/toruabi-kesklinn" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Küttesüsteemi toruabi Kesklinnas</a>
          <a href="/toruabi-pirita" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Küttesüsteemi toruabi Pirital</a>
          <a href="/toruabi-viimsi" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Küttesüsteemi toruabi Viimsis</a>
        </div>
      </LangOnly>
      <LangOnly lang="ru" activeLang={currentLang}>
        <h2 class="text-2xl font-bold text-trust-blue mb-4">Сантехник по отоплению в районах</h2>
        <p class="text-gray-700 mb-4">Мы предоставляем обслуживание и ремонт систем отопления во всех районах Таллинна:</p>
        <div class="flex flex-wrap gap-4 justify-center">
          <a href="/ru/toruabi-lasnamae" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Сантехник по отоплению в Ласнамяэ</a>
          <a href="/ru/toruabi-mustamae" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Сантехник по отоплению в Мустамяэ</a>
          <a href="/ru/toruabi-kesklinn" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Сантехник по отоплению в центре</a>
          <a href="/ru/toruabi-pirita" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Сантехник по отоплению в Пирита</a>
          <a href="/ru/toruabi-viimsi" class="inline-block bg-trust-blue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">Сантехник по отоплению в Виймси</a>
        </div>
      </LangOnly>
      </section>`
  );
}

function splitBoilerDistricts(html) {
  if (!html.includes('Boileri toruabi piirkondades') || html.includes('LangOnly lang="et" activeLang={currentLang}>\r\n        <h2 class="text-2xl font-bold text-trust-blue mb-4">Boileri toruabi')) return html;
  return html.replace(
    /(\s*<!-- Districts Section -->\s*<section class="bg-white rounded-lg shadow-lg p-6 mb-8">\s*)<h2[^>]*>Boileri toruabi piirkondades<\/h2>[\s\S]*?<\/section>/,
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
  if (!html.includes('Toruabi piirkondades') || html.includes('LangOnly lang="et" activeLang={currentLang}>\r\n        <h2 class="text-2xl font-bold text-trust-blue mb-4">Toruabi piirkondades')) return html;
  return html.replace(
    /(\s*<!-- Districts Section -->\s*<section class="bg-white rounded-lg shadow-lg p-6 mb-8">\s*)<h2[^>]*>Toruabi piirkondades<\/h2>[\s\S]*?<\/section>/,
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

function migrateFile(filePath, depth = 2) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    /import \{ blogArticleBreadcrumbOverride \} from[^\n]+\r?\nimport \{ blogArticleBreadcrumbOverride \}[^\n]+\r?\n/,
    "import { blogArticleBreadcrumbOverride } from '../../utils/seo-jsonld';\r\n"
  );
  content = ensureImports(content, depth);

  const open = content.indexOf('<BaseLayout');
  const close = content.lastIndexOf('</BaseLayout>');
  if (open < 0 || close < 0) return false;
  const gt = content.indexOf('>', open);
  if (gt < 0) return false;

  let body = content.slice(gt + 1, close);
  body = stripBlogLocaleClasses(body);
  body = splitCategoryLinkSections(body);
  body = splitBoilerDistricts(body);
  body = splitKanalisatsioonDistricts(body);
  body = splitKutteDistricts(body);
  body = wrapTrustHeaders(body);
  body = wrapMainArticles(body);

  fs.writeFileSync(filePath, content.slice(0, gt + 1) + body + content.slice(close));
  return true;
}

const files = fs
  .readdirSync(blogDir)
  .filter((f) => f.endsWith('.astro') && f !== 'index.astro')
  .map((f) => path.join(blogDir, f));

for (const f of files) {
  migrateFile(f);
  console.log(path.basename(f));
}
migrateFile(path.join(blogDir, 'kategoria', '[category].astro'), 3);
console.log('[category].astro');
