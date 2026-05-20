/**
 * Central SEO keywords, district/service maps, and title/description helpers.
 * Used by homepage, landings, and content pages for consistent ET/RU patterns.
 */

import { SITE_IDENTITY } from './site-identity';

export const SITE_ORIGIN = 'https://toruabii.ee';
export const BRAND = SITE_IDENTITY.brand;
export const PHONE_DISPLAY = SITE_IDENTITY.phoneDisplay;

/** Head terms — Estonian */
export const PRIMARY_KEYWORDS_ET = [
  'toruabi',
  'avarii toruabi',
  'toruabi tallinn',
  'toruabi 24/7',
  'toruabi harjumaa',
  'kanalisatsiooni toruabi',
  'ummistuste likvideerimine',
] as const;

/** Head terms — Russian */
export const PRIMARY_KEYWORDS_RU = [
  'торуаби',
  'аварийный торуаби',
  'торуаби таллин',
  'сантехник tallinn',
  'торуаби 24/7',
  'торуаби харьюмаа',
  'прочистка канализации',
] as const;

export type Lang = 'et' | 'ru';

export type TallinnDistrictId =
  | 'kesklinn'
  | 'lasnamae'
  | 'mustamae'
  | 'pirita'
  | 'viimsi';

export type ServiceLandingId =
  | 'avariiline-valjakutse'
  | 'ummistuste-likvideerimine'
  | 'kanalisatsiooni-survepesu'
  | 'rasvapuuduri-puhastus';

export type TallinnDistrictSeo = {
  id: TallinnDistrictId;
  path: string;
  /** Nominative for titles: "Toruabi Lasnamäe" */
  nameEt: string;
  /** Inessive for copy: "Lasnamäes" */
  inessiveEt: string;
  nameRu: string;
  /** Cross-link anchor: "toruabi lasnamäe" */
  linkAnchorEt: string;
  linkAnchorRu: string;
  descriptionEt: string;
  descriptionRu: string;
  introEt: string;
  introRu: string;
  keywordsEt: string;
  keywordsRu: string;
  neighbors: TallinnDistrictId[];
};

export const tallinnDistrictSeo: Record<TallinnDistrictId, TallinnDistrictSeo> = {
  kesklinn: {
    id: 'kesklinn',
    path: '/toruabi-kesklinn',
    nameEt: 'Kesklinn',
    inessiveEt: 'Kesklinnas',
    nameRu: 'Кесклинн',
    linkAnchorEt: 'toruabi kesklinn',
    linkAnchorRu: 'торуаби кесклинн',
    descriptionEt:
      'Toruabi Kesklinn: avarii toruabi ja kanalisatsioon Tallinna südames 24/7. Väljasõit 0 €, garantii 2 aastat. +372 5181 112.',
    descriptionRu:
      'Торуаби Кесклинн: аварийная сантехника и канализация в центре Таллина 24/7. Выезд 0 €, гарантия 2 года. +372 5181 112.',
    introEt:
      'Toruabi Kesklinn on mõeldud vanade kivimajade, kontorite ja restoranide torustikele, kus vajad kiiret meistrit. Brigaad tunneb kesklinna parkimist ja ligipääsu, et avarii toruabi jõuaks objektile ilma viivitusteta. Helista +372 5181 112, kui vajad toruabi Kesklinnas ööpäevaringselt.',
    introRu:
      'Торуаби Кесклинн — для старого фонда, офисов и HoReCa, где важна быстрая реакция. Бригада знает парковку и доступ в центре, чтобы аварийный выезд не задерживался. Звоните +372 5181 112 для торуаби в Кесклинне круглосуточно.',
    keywordsEt:
      'toruabi, toruabi kesklinn, toruabi tallinn, avarii toruabi, kanalisatsioon, toruabi 24/7',
    keywordsRu:
      'торуаби, торуаби кесклинн, торуаби таллин, аварийный сантехник, засор канализации',
    neighbors: ['lasnamae', 'mustamae', 'pirita', 'viimsi'],
  },
  lasnamae: {
    id: 'lasnamae',
    path: '/toruabi-lasnamae',
    nameEt: 'Lasnamäe',
    inessiveEt: 'Lasnamäes',
    nameRu: 'Ласнамяэ',
    linkAnchorEt: 'toruabi lasnamäe',
    linkAnchorRu: 'торуаби ласнамяэ',
    descriptionEt:
      'Toruabi Lasnamäe: paneelmajade kanalisatsioon ja avarii toruabi Tallinnas 24/7. Väljasõit 0 €, garantii 2 aastat. +372 5181 112.',
    descriptionRu:
      'Торуаби Ласнамяэ: канализация в панельных домах и аварийный выезд в Таллине 24/7. Выезд 0 €, гарантия 2 года. +372 5181 112.',
    introEt:
      'Toruabi Lasnamäe katab suurima linnaosa, kus 1970.–1980. aastate paneelmajade torustikud vajavad sageli survepesu ja kiiret ummistuste likvideerimist. Meeskond tunneb KÜ-de ja trepikodade ligipääsu, et toruabi jõuaks Priisle, Laagna või Ülemiste kandis kiiresti kohale. Helista +372 5181 112 — toruabi Lasnamäes on saadaval ööpäevaringselt.',
    introRu:
      'Торуаби Ласнамяэ охватывает крупнейший район с панельными домами 1970–1980-х, где часто нужна промывка и срочная прочистка. Бригада знает подъезды и КУ, чтобы быстро попасть в Прийсле, Лаагна или Юлемисте. Звоните +372 5181 112 — торуаби в Ласнамяэ доступен 24/7.',
    keywordsEt:
      'toruabi, toruabi lasnamäe, toruabi lasnamae, toruabi tallinn, avarii toruabi, kanalisatsioon',
    keywordsRu:
      'торуаби, торуаби ласнамяэ, торуаби таллин, аварийный сантехник, засор канализации',
    neighbors: ['mustamae', 'kesklinn', 'pirita'],
  },
  mustamae: {
    id: 'mustamae',
    path: '/toruabi-mustamae',
    nameEt: 'Mustamäe',
    inessiveEt: 'Mustamäel',
    nameRu: 'Мустамяэ',
    linkAnchorEt: 'toruabi mustamäe',
    linkAnchorRu: 'торуаби мустамяэ',
    descriptionEt:
      'Toruabi Mustamäe: avarii toruabi ja boileri hooldus lääne-Tallinnas 24/7. Väljasõit 0 €, garantii 2 aastat. +372 5181 112.',
    descriptionRu:
      'Торуаби Мустамяэ: аварийная сантехника и бойлер на западе Таллина 24/7. Выезд 0 €, гарантия 2 года. +372 5181 112.',
    introEt:
      'Toruabi Mustamäe sobib nii uute korterelamute kui vanemate mikrorajoonide klientidele, kus kütte- ja kanalisatsioonitööd kattuvad. Meistrid teavad Mustamäe teeolusid ja parkimist, et toruabi jõuaks Sääse, Hiiu või Mäeküla kandis tavaliselt 30–45 minutiga. Avarii toruabi Mustamäel: +372 5181 112.',
    introRu:
      'Торуаби Мустамяэ подходит для новостроек и старых микрорайонов, где пересекаются отопление и канализация. Мастера знают дороги и парковку, чтобы приехать в Сяэсе, Хийу или Мяэкюла за 30–45 минут. Аварийный торуаби в Мустамяэ: +372 5181 112.',
    keywordsEt:
      'toruabi, toruabi mustamäe, toruabi mustamae, toruabi tallinn, avarii toruabi, santehnik',
    keywordsRu:
      'торуаби, торуаби мустамяэ, торуаби таллин, аварийный сантехник, сантехник tallinn',
    neighbors: ['lasnamae', 'kesklinn', 'pirita'],
  },
  pirita: {
    id: 'pirita',
    path: '/toruabi-pirita',
    nameEt: 'Pirita',
    inessiveEt: 'Piritas',
    nameRu: 'Пирита',
    linkAnchorEt: 'toruabi pirita',
    linkAnchorRu: 'торуаби пирита',
    descriptionEt:
      'Toruabi Pirita: eramud, korterid ja kanalisatsioon mereranna ääres 24/7. Väljasõit 0 €, garantii 2 aastat. +372 5181 112.',
    descriptionRu:
      'Торуаби Пирита: частные дома, квартиры и канализация у моря 24/7. Выезд 0 €, гарантия 2 года. +372 5181 112.',
    introEt:
      'Toruabi Pirita hõlmab mereranna eramuid, uusi elamurajoonid ja vanemaid kortermaju, kus niiskus ja hooajaline kasutus koormavad torustikku. Pakume kanalisatsiooni toruabi, boileri hooldust ja lekete likvideerimist Kose, Merivälja ja Pirita tee kandis. Toruabi Piritas ööpäevaringselt: +372 5181 112.',
    introRu:
      'Торуаби Пирита — для домов у моря, новых кварталов и старых МКД, где влажность и сезон нагружают трубы. Промывка, бойлер и протечки в Косе, Меривялья и на Пирита tee. Торуаби в Пирита 24/7: +372 5181 112.',
    keywordsEt:
      'toruabi, toruabi pirita, toruabi tallinn, avarii toruabi, kanalisatsiooni toruabi',
    keywordsRu:
      'торуаби, торуаби пирита, торуаби таллин, аварийный сантехник, прочистка канализации',
    neighbors: ['kesklinn', 'lasnamae', 'viimsi'],
  },
  viimsi: {
    id: 'viimsi',
    path: '/toruabi-viimsi',
    nameEt: 'Viimsi',
    inessiveEt: 'Viimsis',
    nameRu: 'Виймси',
    linkAnchorEt: 'toruabi viimsi',
    linkAnchorRu: 'торуаби виймси',
    descriptionEt:
      'Toruabi Viimsi: eramud ja korterid Harjumaa rannikul, kiire avarii toruabi 24/7. Väljasõit 0 €, garantii 2 aastat. +372 5181 112.',
    descriptionRu:
      'Торуаби Виймси: частные дома и квартиры на побережье Харьюмаа, аварийный выезд 24/7. Выезд 0 €, гарантия 2 года. +372 5181 112.',
    introEt:
      'Viimsi valla ja Tallinna piiriga piirnevates korterites tegeleme sageli boileri hoolduse ja kanalisatsiooni survepesuga. Rannikul arvestame niiskust ja hooajalist koormust, et väljasõit Haabneeme või Randvere suunas oleks õigeaegne. Toruabi Viimsis ja Harjumaal: +372 5181 112.',
    introRu:
      'В Виймси и у границы Таллина часто обслуживаем бойлеры и делаем гидропромывку канализации. На побережье учитываем влажность и сезонную нагрузку, чтобы выезд в Хаабнееме или Рандвере не затягивался. Торуаби в Виймси и Харьюмаа: +372 5181 112.',
    keywordsEt:
      'toruabi, toruabi viimsi, toruabi tallinn, avarii toruabi, kanalisatsiooni toruabi, harjumaa',
    keywordsRu:
      'торуаби, торуаби виймси, торуаби таллин, аварийный сантехник, сантехник харьюмаа',
    neighbors: ['pirita', 'kesklinn', 'lasnamae'],
  },
};

export type ServiceLandingSeo = {
  id: ServiceLandingId;
  path: string;
  titleEt: string;
  titleRu: string;
  descriptionEt: string;
  descriptionRu: string;
  keywordsEt: string;
  keywordsRu: string;
  h1Et: string;
  h1Ru: string;
};

export const serviceLandingSeo: Record<ServiceLandingId, ServiceLandingSeo> = {
  'avariiline-valjakutse': {
    id: 'avariiline-valjakutse',
    path: '/toruabi-avariiline-valjakutse',
    titleEt: 'Avarii toruabi väljakutse 24/7 | Toruabi Tallinn | toruabii.ee',
    titleRu: 'Аварийный торуаби выезд 24/7 | Таллин | toruabii.ee',
    descriptionEt:
      'Kiire toruabi väljakutse 24/7 Tallinnas ja Harjumaal: lekked, purunenud torud, boiler. Tavaliselt kohal 30–60 min, väljasõit 0 €. +372 5181 112.',
    descriptionRu:
      'Срочный выезд торуаби 24/7 в Таллине и Харьюмаа: протечки, разрывы, бойлер. Обычно за 30–60 мин, выезд 0 €. +372 5181 112.',
    keywordsEt:
      'toruabi, avarii toruabi, toruabi väljakutse, toruabi tallinn, toruabi 24/7, erakorraline toruabi',
    keywordsRu:
      'торуаби, аварийный торуаби, торуаби выезд, торуаби таллин, срочный сантехник 24/7',
    h1Et: 'Avarii toruabi väljakutse 24/7 – Toruabi Tallinn ja Harjumaa',
    h1Ru: 'Аварийный торуаби 24/7 – выезд в Таллине и Харьюмаа',
  },
  'ummistuste-likvideerimine': {
    id: 'ummistuste-likvideerimine',
    path: '/toruabi-ummistuste-likvideerimine',
    titleEt: 'Ummistuste likvideerimine 24/7 | Toruabi ummistus Tallinn | toruabii.ee',
    titleRu: 'Устранение засоров 24/7 | Прочистка канализации Таллин | toruabii.ee',
    descriptionEt:
      'Toruabi ummistuste likvideerimine ja kanalisatsiooni ummistuse lahendamine Tallinnas ja Harjumaal. Toru ummistus Tallinn – kiire toruabi 24/7, väljasõit 0 €. +372 5181 112.',
    descriptionRu:
      'Торуаби: устранение засоров и прочистка канализации в Таллине и Харьюмаа 24/7. Засор канализации – быстрый выезд, 0 €. +372 5181 112.',
    keywordsEt:
      'ummistuste likvideerimine, toruabi ummistuste likvideerimine, kanalisatsiooni ummistus, toru ummistus tallinn, toruabi tallinn, toruabi 24/7',
    keywordsRu:
      'устранение засоров, прочистка засоров, прочистка канализации, торуаби таллин, засор канализации, торуаби 24/7',
    h1Et: 'Ummistuste likvideerimine – toruabi kanalisatsiooni ummistusele Tallinnas',
    h1Ru: 'Устранение засоров – прочистка канализации в Таллине и Харьюмаа',
  },
  'kanalisatsiooni-survepesu': {
    id: 'kanalisatsiooni-survepesu',
    path: '/toruabi-kanalisatsiooni-survepesu',
    titleEt: 'Toruabi kanalisatsiooni survepesu | Toruabi Tallinn | toruabii.ee',
    titleRu: 'Торуаби гидропромывка канализации | Таллин | toruabii.ee',
    descriptionEt:
      'Kanalisatsiooni survepesu Tallinnas ja Harjumaal: kõrgsurve puhastus trassidele, vajadusel videouuring. +372 5181 112.',
    descriptionRu:
      'Гидропромывка канализации в Таллине и Харьюмаа: высокое давление, при необходимости видеодиагностика. +372 5181 112.',
    keywordsEt:
      'toruabi, kanalisatsiooni survepesu, toruabi survepesu, toruabi tallinn, kanalisatsiooni toruabi',
    keywordsRu:
      'торуаби, промывка канализации, гидродинамическая промывка, торуаби таллин, сантехник',
    h1Et: 'Toruabi kanalisatsiooni survepesu – professionaalne puhastus Tallinnas',
    h1Ru: 'Торуаби промывка канализации – профессиональная очистка в Таллине',
  },
  'rasvapuuduri-puhastus': {
    id: 'rasvapuuduri-puhastus',
    path: '/toruabi-rasvapuuduri-puhastus',
    titleEt: 'Toruabi rasvapüüduri puhastus | Toruabi Tallinn | toruabii.ee',
    titleRu: 'Торуаби очистка жироуловителя | Таллин | toruabii.ee',
    descriptionEt:
      'Rasvapüüduri puhastus ja hooldus toruabi meeskonnaga — köögid, restoranid ja kortermajad Tallinnas. +372 5181 112.',
    descriptionRu:
      'Очистка и обслуживание жироуловителей бригадой торуаби — кухни, рестораны и МКД в Таллине. +372 5181 112.',
    keywordsEt:
      'toruabi, rasvapüüduri puhastus, toruabi tallinn, kanalisatsiooni toruabi, toruabi harjumaa',
    keywordsRu:
      'торуаби, очистка жироуловителя, торуаби таллин, сантехник tallinn, канализация',
    h1Et: 'Toruabi rasvapüüduri puhastus – Tallinn ja Harjumaa',
    h1Ru: 'Торуаби очистка жироуловителей – Таллин и Харьюмаа',
  },
};

/** District / municipality landing title: "Toruabi Lasnamäe | 24/7 | toruabii.ee" */
export function seoTitle(focus: string, lang: Lang): string {
  if (lang === 'ru') {
    return `Торуаби ${focus} | 24/7 | ${BRAND}`;
  }
  return `Toruabi ${focus} | 24/7 | ${BRAND}`;
}

/** Meta description with district + phone */
export function seoDescription(opts: {
  focus: string;
  lang: Lang;
  extra?: string;
}): string {
  const { focus, lang, extra } = opts;
  if (lang === 'ru') {
    const tail = extra ? ` ${extra}` : '';
    return `Торуаби ${focus}: аварийная сантехника 24/7 в Таллине и Харьюмаа.${tail} Выезд 0 €, гарантия 2 года. ${PHONE_DISPLAY}.`;
  }
  const tail = extra ? ` ${extra}` : '';
  return `Toruabi ${focus}: avarii toruabi 24/7 Tallinnas ja Harjumaal.${tail} Väljasõit 0 €, garantii 2 aastat. ${PHONE_DISPLAY}.`;
}

export function seoHomeTitle(lang: Lang): string {
  if (lang === 'ru') {
    return `Торуаби 24/7 Таллин – сантехник tallinn и аварийный торуаби | ${BRAND}`;
  }
  return `Toruabi 24/7 Tallinn – avarii toruabi ja toruabi Harjumaa | ${BRAND}`;
}

export function seoHomeDescription(lang: Lang): string {
  if (lang === 'ru') {
    return `Торуаби и сантехник tallinn 24/7: аварийный торуаби, прочистка канализации, бойлер, протечки в Таллине и Харьюмаа. Выезд 30–60 мин, 0 €, гарантия 2 года. ${PHONE_DISPLAY}`;
  }
  return `Toruabi ja avarii toruabi Tallinnas ja Harjumaal 24/7: toruabi tallinn, ummistuste likvideerimine, lekked, boiler. Kohale 30–60 min, väljasõit 0 €, garantii 2 a. ${PHONE_DISPLAY}`;
}

export function seoHomeOgDescription(lang: Lang): string {
  if (lang === 'ru') {
    return `Торуаби 24/7 в Таллине и Харьюмаа — аварийный выезд за 30–60 мин. ${PHONE_DISPLAY}`;
  }
  return `Toruabi 24/7 Tallinnas ja Harjumaal — avarii toruabi ja ummistused. Kohale 30–60 min. ${PHONE_DISPLAY}`;
}

export function seoHomeKeywords(lang: Lang): string {
  return lang === 'ru' ? PRIMARY_KEYWORDS_RU.join(', ') : PRIMARY_KEYWORDS_ET.join(', ');
}

/** H1 for ET/RU homepage hero */
export function seoHomeH1(lang: Lang): string {
  if (lang === 'ru') {
    return 'Торуаби 24/7 – сантехник tallinn и аварийный торуаби в Харьюмаа';
  }
  return 'Toruabi 24/7 – avarii toruabi Tallinnas ja toruabi Harjumaa';
}

/** Default inner-page title: "{page} | Toruabi Tallinn | toruabii.ee" */
export function seoInnerTitle(pageLabel: string, lang: Lang): string {
  if (lang === 'ru') {
    return `${pageLabel} | Торуаби Таллин | ${BRAND}`;
  }
  return `${pageLabel} | Toruabi Tallinn | ${BRAND}`;
}

/** Default inner-page meta description */
export function seoInnerDescription(opts: {
  pageLabel: string;
  lang: Lang;
  extra?: string;
}): string {
  const { pageLabel, lang, extra } = opts;
  if (lang === 'ru') {
    const tail = extra ? ` ${extra}` : '';
    return `${pageLabel} — торуаби и сантехник tallinn 24/7 в Таллине и Харьюмаа.${tail} Выезд 0 €. ${PHONE_DISPLAY}`;
  }
  const tail = extra ? ` ${extra}` : '';
  return `${pageLabel} — toruabi ja avarii toruabi 24/7 Tallinnas ja Harjumaal.${tail} Väljasõit 0 €. ${PHONE_DISPLAY}`;
}

export function getTallinnDistrict(id: TallinnDistrictId): TallinnDistrictSeo {
  return tallinnDistrictSeo[id];
}

export function tallinnDistrictTitle(id: TallinnDistrictId, lang: Lang): string {
  const d = getTallinnDistrict(id);
  const focus = lang === 'ru' ? d.nameRu : d.nameEt;
  return seoTitle(focus, lang);
}

export function tallinnDistrictDescription(id: TallinnDistrictId, lang: Lang): string {
  const d = getTallinnDistrict(id);
  return lang === 'ru' ? d.descriptionRu : d.descriptionEt;
}

export function tallinnDistrictH1(id: TallinnDistrictId, lang: Lang): string {
  const d = getTallinnDistrict(id);
  return lang === 'ru' ? `Торуаби ${d.nameRu}` : `Toruabi ${d.nameEt}`;
}

/** 2–3 unique sentences for district hero intro */
export function tallinnDistrictIntro(id: TallinnDistrictId, lang: Lang): string {
  const d = getTallinnDistrict(id);
  return lang === 'ru' ? d.introRu : d.introEt;
}

/** @deprecated Use tallinnDistrictIntro */
export function tallinnDistrictSnippet(id: TallinnDistrictId, lang: Lang): string {
  return tallinnDistrictIntro(id, lang);
}

export function getTallinnNeighborDistricts(id: TallinnDistrictId): TallinnDistrictSeo[] {
  return getTallinnDistrict(id).neighbors.map((nid) => getTallinnDistrict(nid));
}

export function municipalityTitle(locality: string, lang: Lang): string {
  return seoTitle(locality, lang);
}

export function municipalityDescription(locality: string, lang: Lang): string {
  const extra =
    lang === 'ru' ? 'Канализация и бойлер.' : 'Kanalisatsiooni toruabi ja boiler.';
  return seoDescription({ focus: locality, lang, extra });
}
