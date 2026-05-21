/**
 * Harjumaa municipality toruabi landing pages (#piirkonnad cards outside Tallinn).
 * Used by HarjuMunicipalityToruabi.astro and DistrictCrossLinks.
 */

export type HarjuMunicipalityId =
  | 'maardu'
  | 'keila'
  | 'saue'
  | 'rae'
  | 'saku'
  | 'harku'
  | 'joelahtme'
  | 'kiili'
  | 'kose'
  | 'anija';

export type HarjuVisualPreset =
  | 'industrial'
  | 'coastalWest'
  | 'suburbWest'
  | 'logisticsEast'
  | 'forestSouth'
  | 'coastalNorthWest'
  | 'ruralEast'
  | 'villageBelt'
  | 'inlandSouth'
  | 'riverNorth';

export type HarjuFaqItem = { q: string; a: string };

/** Legacy keyword lists (not emitted in HTML; kept for reference in copy audits). */
const HARJU_SEO_KW_ET =
  'toruabi, ummistuste likvideerimine, toruabi 24/7, avarii toruabi Harjumaa, kanalisatsiooni toruabi, kanalisatsiooni survepesu, survepesu, toruabi survepesu, santehnik, santehnik Harjumaal, erakorraline santehnik, öine toruabi, toruabi väljakutse';
const HARJU_SEO_KW_RU =
  'торуаби 24/7, аварийный торуаби Харьюмаа, канализационный торуаби, гидродинамическая промывка, промывка канализации под давлением, сантехник, сантехник Харьюмаа, аварийный сантехник, срочный сантехник, торуаби выезд';

export type HarjuMunicipality = {
  id: HarjuMunicipalityId;
  path: string;
  visualPreset: HarjuVisualPreset;
  schemaLocality: string;
  /** Short RU title for link cards (e.g. DistrictCrossLinks) */
  cardTitleRu: string;
  geo: { latitude: number; longitude: number };
  settlementsEt: string[];
  settlementsRu: string[];
  titleEt: string;
  titleRu: string;
  descriptionEt: string;
  descriptionRu: string;
  keywordsEt: string;
  keywordsRu: string;
  h1Et: string;
  h1Ru: string;
  heroLeadEt: string;
  heroLeadRu: string;
  bodyEt: string[];
  bodyRu: string[];
  servicesEt: string[];
  servicesRu: string[];
  faqEt: HarjuFaqItem[];
  faqRu: HarjuFaqItem[];
  /** Cross-link anchor: "toruabi maardu" */
  linkAnchorEt: string;
  linkAnchorRu: string;
  neighbors: HarjuMunicipalityId[];
};

export const harjuMunicipalities: HarjuMunicipality[] = [
  {
    id: 'maardu',
    path: '/toruabi-maardu',
    visualPreset: 'industrial',
    schemaLocality: 'Maardu',
    cardTitleRu: 'Торуаби в Маарду',
    geo: { latitude: 59.48, longitude: 25.01 },
    settlementsEt: ['Maardu linn', 'Kallavere', 'Kostivere'],
    settlementsRu: ['г. Маарду', 'Каллавере', 'Костивере'],
    titleEt: 'Toruabi Maardu | 24/7 | toruabii.ee',
    titleRu: 'Торуаби Маарду | 24/7 | toruabii.ee',
    descriptionEt:
      'Toruabi Maardu: avarii toruabi ja kanalisatsioon Harjumaal 24/7. Maardu linn, Kallavere, Kostivere. Väljasõit 0 €, garantii 2 aastat. +372 5633 3332.',
    descriptionRu:
      'Торуаби Маарду: аварийная сантехника и канализация в Харьюмаа 24/7. Маарду, Каллавере, Костивере. Выезд 0 €, гарантия 2 года. +372 5633 3332.',
    keywordsEt: `toruabi, toruabi Maardus, avarii toruabi Harjumaa, toruabi Kallavere, toruabi Kostivere, ${HARJU_SEO_KW_ET}`,
    keywordsRu: `торуаби, торуаби Маарду, аварийная сантехника Харьюмаа, сантехник Маарду, ${HARJU_SEO_KW_RU}`,
    h1Et: 'Toruabi Maardu',
    h1Ru: 'Торуаби Маарду',
    heroLeadEt:
      'Toruabi Maardu katab tööstus- ja elamupiirkonna, kus torustikud peavad vastu nii suurele koormusele kui vananenud trassidele. Meeskond tegeleb Kallavere ja Kostivere objektidega sama brigaadiga, mis teenindab ida-Harjumaad. Avarii toruabi Maardus ja Harjumaal: +372 5633 3332.',
    heroLeadRu:
      'Торуаби Маарду — для промышленных и жилых объектов с высокой нагрузкой на сети. Бригада обслуживает Каллавере и Костивере в восточном Харьюмаа. Аварийный торуаби в Маарду: +372 5633 3332.',
    linkAnchorEt: 'toruabi maardu',
    linkAnchorRu: 'торуаби маарду',
    neighbors: ['joelahtme', 'anija'],
    bodyEt: [
      'Maardu, Kallavere ja Kostivere klientidele pakume selge hinnaga toruabi nii tööstusobjektidel kui elamutes — avarii ja planeeritud hooldus samas brigaadis.',
      'Helista Maardu linnast või lähipiirkonnast — dispetšer ütleb saabumisaja vastavalt ida-Harjumaa meeskonna asukohale ja liiklusele.',
    ],
    bodyRu: [
      'Для Маарду, Каллавере и Костивере — тот же уровень торуаби, что в Таллине: прозрачные цены, гарантия, срочный и плановый выезд.',
      'Позвоните — диспетчер назовёт ориентировочное время прибытия в зависимости от расположения бригады.',
    ],
    servicesEt: [
      'Avarii toruabi ja lekete likvideerimine',
      'Kanalisatsiooni toruabi ja ummistuste likvideerimine',
      'Boileri ja soojavee toruabi',
      'Survepesu ja rasvapüüdurite hooldus vastavalt objektile',
    ],
    servicesRu: [
      'Аварийный торуаби и устранение протечек',
      'Канализация и устранение засоров',
      'Бойлер и горячая вода',
      'Промывка и обслуживание жироуловителей по объекту',
    ],
    faqEt: [
      { q: 'Kui kiiresti toruabi Maardusse jõuab?', a: 'Saabumisaeg sõltub hetkelisest koormusest ja liiklusest; orienteeruvalt küsige telefonis – anname realistliku hinnangu.' },
      { q: 'Kas toruabi Maardu piirkonnas maksab sama mis Tallinnas?', a: 'Tööhinnad põhinevad hinnakirjal; väljasõidu tasu ja kestus võivad erineda Tallinna piiridest väljas – täpsustage dispetšeril.' },
      { q: 'Milliseid toruabi töid Maardus kõige sagedamini tellitakse?', a: 'Levinud on kanalisatsiooni toruabi, avariitoruabi ja boileri küsimused nii eramajades kui äripindadel.' },
      { q: 'Kas pakute toruabi ka nädalavahetusel?', a: 'Jah, avariitoruabi on ööpäevaringselt; planeeritud tööde aeg kokkuleppel.' },
      { q: 'Kust leian Maardu toruabi hinnad?', a: 'Vaata veebilehe hinnakirja või küsi telefonis – hinnapakkumine sõltub töö mahust.' },
    ],
    faqRu: [
      { q: 'Как быстро торуаби приедет в Маарду?', a: 'Зависит от загрузки и дороги; ориентир по телефону.' },
      { q: 'Те же цены, что в Таллине?', a: 'Работы по прайсу; выезд за пределы Таллина может отличаться — уточняйте у диспетчера.' },
      { q: 'Что чаще заказывают в Маарду?', a: 'Канализация, аварии и бойлеры в частном и коммерческом секторе.' },
      { q: 'Работаете в выходные?', a: 'Аварийный торуаби круглосуточно; план — по договорённости.' },
      { q: 'Где цены?', a: 'Прайс на сайте или по телефону.' },
    ],
  },
  {
    id: 'keila',
    path: '/toruabi-keila',
    visualPreset: 'coastalWest',
    schemaLocality: 'Keila',
    cardTitleRu: 'Торуаби в Кейла',
    geo: { latitude: 59.31, longitude: 24.42 },
    settlementsEt: ['Keila linn', 'Keila vald', 'Klooga'],
    settlementsRu: ['г. Кейла', 'волость Кейла', 'Клоога'],
    titleEt: 'Toruabi Keila | 24/7 | toruabii.ee',
    titleRu: 'Торуаби Кейла | 24/7 | toruabii.ee',
    descriptionEt:
      'Toruabi Keila: avarii toruabi ja kanalisatsioon Lääne-Harjumaal 24/7. Keila linn, vald, Klooga. Väljasõit 0 €. +372 5633 3332.',
    descriptionRu:
      'Торуаби Кейла: аварийная сантехника на западе Харьюмаа 24/7. Кейла, волость, Клоога. Выезд 0 €. +372 5633 3332.',
    keywordsEt: `toruabi, toruabi Keila, toruabi Klooga, avarii toruabi Keila vald, ${HARJU_SEO_KW_ET}`,
    keywordsRu: `торуаби, торуаби Кейла, сантехник Клоога, аварийная сантехника Кейла, ${HARJU_SEO_KW_RU}`,
    h1Et: 'Toruabi Keila',
    h1Ru: 'Торуаби Кейла',
    heroLeadEt:
      'Toruabi Keila sobib nii Keila linna korteritele kui rannikul asuvatele suvilatele Kloogas, kus hooajal kasvab koormus kanalisatsioonile. Meistrid tunnevad mereääre niiskuse mõju torustikule ja pakuvad survepesu vajadusel. Toruabi Keilas ja Harjumaal ööpäevaringselt: +372 5633 3332.',
    heroLeadRu:
      'Торуаби Кейла — для квартир в городе и дач в Клоога, где сезон увеличивает нагрузку на канализацию. Учитываем влажность побережья и промывку при необходимости. Торуаби в Кейла 24/7: +372 5633 3332.',
    linkAnchorEt: 'toruabi keila',
    linkAnchorRu: 'торуаби кейла',
    neighbors: ['harku', 'saue'],
    bodyEt: [
      'Keila linnas ja Keila vallas aitame toruabi väljakutsete ja planeeritud sanitaartöödega — alates leketest kuni kanalisatsiooni hoolduseni.',
      'Klooga ja rannikualade puhul arvestame hooajalise koormusega – toruabi on kättesaadav ka siis, kui suvilad on rohkem kasutusel.',
    ],
    bodyRu: [
      'В Кейла и волости — срочный и плановый торуаби.',
      'Для Клоога и побережья учитываем сезонную нагрузку дачных объектов.',
    ],
    servicesEt: [
      'Toruabi eramutele ja ridamajadele',
      'Kanalisatsiooni toruabi ja survepesu vajadusel',
      'Boileri toruabi ja küttesüsteemide esmane diagnoos',
    ],
    servicesRu: [
      'Торуаби для частных и таунхаусов',
      'Канализация и при необходимости промывка',
      'Бойлер и первичная диагностика отопления',
    ],
    faqEt: [
      { q: 'Kas toruabi Keilasse sõltub Tallinnast?', a: 'Saabumisaeg sõltub brigaadi asukohast; helistades saate täpsema hinnangu.' },
      { q: 'Millal kutsuda avarii toruabi Keila piirkonnas?', a: 'Lekete, ummistuste ja boileri häirete korral – ööpäevaringne toruabi.' },
      { q: 'Kas teete toruabi ka suvila hooajaväliselt?', a: 'Jah, planeeritud tööd ja avariid ka väljaspool hooaega.' },
      { q: 'Kas Klooga toruabi on sama meeskond?', a: 'Jah, teeninduspiirkond hõlmab Keila valda ja lähipiirkondi.' },
      { q: 'Kust hinnad?', a: 'Hinnakiri lehel toruabii.ee/hinnakiri.' },
    ],
    faqRu: [
      { q: 'Как быстро приедете в Кейла?', a: 'Зависит от бригады — уточняйте по телефону.' },
      { q: 'Когда вызывать аварийный торуаби?', a: 'Протечки, засоры, бойлер — круглосуточно.' },
      { q: 'Работаете с дачами вне сезона?', a: 'Да, плановые и аварийные выезды.' },
      { q: 'Клоога — те же мастера?', a: 'Да, зона обслуживания включает волость Кейла.' },
      { q: 'Цены?', a: 'Прайс на сайте.' },
    ],
  },
  {
    id: 'saue',
    path: '/toruabi-saue',
    visualPreset: 'suburbWest',
    schemaLocality: 'Saue',
    cardTitleRu: 'Торуаби в Сауэ',
    geo: { latitude: 59.33, longitude: 24.55 },
    settlementsEt: ['Saue vald', 'Saue linn', 'Laagri'],
    settlementsRu: ['волость Сауэ', 'г. Сауэ', 'Лагри'],
    titleEt: 'Toruabi Saue | 24/7 | toruabii.ee',
    titleRu: 'Торуаби Сауэ | 24/7 | toruabii.ee',
    descriptionEt:
      'Toruabi Saue: avarii toruabi Laagris, Saue linnas ja vallas 24/7. Harjumaa läänepool. Väljasõit 0 €. +372 5633 3332.',
    descriptionRu:
      'Торуаби Сауэ: аварийный выезд в Лагри, Сауэ и волости 24/7. Запад Харьюмаа. Выезд 0 €. +372 5633 3332.',
    keywordsEt: `toruabi, toruabi Saue, toruabi Laagri, avarii toruabi Saue vald, ${HARJU_SEO_KW_ET}`,
    keywordsRu: `торуаби, торуаби Сауэ, торуаби Лагри, сантехник запад Таллина, ${HARJU_SEO_KW_RU}`,
    h1Et: 'Toruabi Saue',
    h1Ru: 'Торуаби Сауэ',
    heroLeadEt:
      'Toruabi Saue katab Laagri tihedat korter- ja ridamajade võrku ning Saue linna uuemaid arendusi, kus boiler ja kanalisatsioon vajavad regulaarset hooldust. Brigaad liigub kiiresti läbi Tallinna läänepoolse liikluse, et jõuda objektile õigeaegselt. Toruabi Saue vallas: +372 5633 3332.',
    heroLeadRu:
      'Торуаби Сауэ — для плотной застройки Лагри и новых домов в Сауэ, где важны бойлер и канализация. Быстро едем с западной стороны Таллина. Торуаби в волости Сауэ: +372 5633 3332.',
    linkAnchorEt: 'toruabi saue',
    linkAnchorRu: 'торуаби саулэ',
    neighbors: ['keila', 'harku', 'rae'],
    bodyEt: [
      'Saue valla klientidele pakume toruabi nii uutes arendustes kui vanemas elamufondis — töömeetod sõltub torustiku vanusest ja seisukorrast.',
    ],
    bodyRu: [
      'В волости Сауэ работаем и с новостройками, и со старым фондом — метод подбираем по состоянию труб.',
    ],
    servicesEt: [
      'Toruabi korterelamutele ja eramutele',
      'Kanalisatsiooni toruabi ja ummistuste likvideerimine',
      'Boileri toruabi',
    ],
    servicesRu: ['Торуаби для МКД и частных домов', 'Канализация и засоры', 'Бойлер'],
    faqEt: [
      { q: 'Kui kiiresti toruabi Laagrisse?', a: 'Orienteeruvalt küsige telefonis – sõltub hetke brigaadist.' },
      { q: 'Mis maksab toruabi väljasõit Saue valda?', a: 'Täpsed tingimused kokkuleppel dispetšeriga; hinnad põhinevad hinnakirjal.' },
      { q: 'Kas toruabi teeb ka väiksemaid remonte?', a: 'Jah, alates segisti vahetusest kuni suuremate torutöödeni.' },
      { q: 'Garantii?', a: '2 aastat töödele vastavalt meie tavapärastele tingimustele.' },
      { q: 'Öine toruabi?', a: 'Avariitoruabi 24/7.' },
    ],
    faqRu: [
      { q: 'Скорость в Лагри?', a: 'По телефону — зависит от бригады.' },
      { q: 'Выезд в Сауэ?', a: 'Условия у диспетчера, работы по прайсу.' },
      { q: 'Мелкий ремонт?', a: 'Да, от смесителя до крупных работ.' },
      { q: 'Гарантия?', a: '2 года по стандартным условиям.' },
      { q: 'Ночью?', a: 'Аварийный торуаби 24/7.' },
    ],
  },
  {
    id: 'rae',
    path: '/toruabi-rae',
    visualPreset: 'logisticsEast',
    schemaLocality: 'Rae',
    cardTitleRu: 'Торуаби в Раэ',
    geo: { latitude: 59.38, longitude: 24.9 },
    settlementsEt: ['Rae vald', 'Jüri', 'Lagedi', 'Vaida'],
    settlementsRu: ['волость Раэ', 'Юри', 'Лагеди', 'Вайда'],
    titleEt: 'Toruabi Rae | 24/7 | toruabii.ee',
    titleRu: 'Торуаби Раэ | 24/7 | toruabii.ee',
    descriptionEt:
      'Toruabi Rae: avarii toruabi Jüris, Lagedis ja Vaidas 24/7. Harjumaa ida-lõunapool. Väljasõit 0 €. +372 5633 3332.',
    descriptionRu:
      'Торуаби Раэ: аварийный выезд в Юри, Лагеди и Вайда 24/7. Восток-юг Харьюмаа. Выезд 0 €. +372 5633 3332.',
    keywordsEt: `toruabi, toruabi Jüri, toruabi Rae vald, toruabi Lagedi, toruabi Vaida, ${HARJU_SEO_KW_ET}`,
    keywordsRu: `торуаби, торуаби Юри, сантехник Раэ, торуаби Вайда, ${HARJU_SEO_KW_RU}`,
    h1Et: 'Toruabi Rae',
    h1Ru: 'Торуаби Раэ',
    heroLeadEt:
      'Toruabi Rae katab kiiresti kasvava Jüri äri- ja elamurajooni, kus uued trassid kõrvutavad vanemaid kanalisatsioonisüsteeme. Lagedi ja Vaida eramutes pakume nii planeeritud hooldust kui öist avarii toruabi. Toruabi Rae vallas: +372 5633 3332.',
    heroLeadRu:
      'Торуаби Раэ — для растущего Юри, где новые сети соседствуют со старыми. В Лагеди и Вайда — плановое обслуживание и аварии ночью. Торуаби в волости Раэ: +372 5633 3332.',
    linkAnchorEt: 'toruabi rae',
    linkAnchorRu: 'торуаби раэ',
    neighbors: ['saue', 'kiili', 'saku'],
    bodyEt: [
      'Jüri, Lagedi ja Vaida piirkonnas pakume toruabi nii ärikvartalites kui eramajades – aeglane planeeritud töö või kiire avarii toruabi.',
    ],
    bodyRu: [
      'Юри, Лагеди, Вайда: коммерция и частный сектор — плановый и аварийный торуаби.',
    ],
    servicesEt: [
      'Toruabi uusarendustele ja renoveeritud hoonetele',
      'Kanalisatsiooni toruabi ja survepesu',
      'Avarii toruabi ööpäevaringselt',
    ],
    servicesRu: ['Новостройки и реновация', 'Канализация и промывка', 'Аварии 24/7'],
    faqEt: [
      { q: 'Kas toruabi jõuab Jüri äripiirkonda kiiresti?', a: 'Saabumisaeg sõltub liiklusest ja järjekorrast; helista.' },
      { q: 'Millised toruabi tööd Rae vallas on levinumad?', a: 'Kanalisatsiooni toruabi, boileri küsimused ja uute hoonete paigaldused.' },
      { q: 'Vaida eramute toruabi?', a: 'Jah, teenindame kogu valla peamisi asustusüksusi.' },
      { q: 'Planeeritud torutööd nädalavahetusel?', a: 'Kokkuleppel võimalik.' },
      { q: 'Hinnad?', a: 'Hinnakiri veebis.' },
    ],
    faqRu: [
      { q: 'Быстро в Юри?', a: 'Зависит от дороги и очереди — звоните.' },
      { q: 'Что чаще в Раэ?', a: 'Канализация, бойлеры, новые подключения.' },
      { q: 'Вайда частный сектор?', a: 'Да, обслуживаем основные населённые пункты.' },
      { q: 'План в выходные?', a: 'По договорённости.' },
      { q: 'Цены?', a: 'На сайте.' },
    ],
  },
  {
    id: 'saku',
    path: '/toruabi-saku',
    visualPreset: 'forestSouth',
    schemaLocality: 'Saku',
    cardTitleRu: 'Торуаби в Саку',
    geo: { latitude: 59.3, longitude: 24.66 },
    settlementsEt: ['Saku vald', 'Saku alevik', 'Kiisa'],
    settlementsRu: ['волость Саку', 'посёлок Саку', 'Кииса'],
    titleEt: 'Toruabi Saku | 24/7 | toruabii.ee',
    titleRu: 'Торуаби Саку | 24/7 | toruabii.ee',
    descriptionEt:
      'Toruabi Saku: avarii toruabi Saku alevikus ja Kiisas 24/7. Harjumaa lõunapool. Väljasõit 0 €. +372 5633 3332.',
    descriptionRu:
      'Торуаби Саку: аварийный выезд в посёлке и Кииса 24/7. Юг Харьюмаа. Выезд 0 €. +372 5633 3332.',
    keywordsEt: `toruabi, toruabi Saku, toruabi Kiisa, avarii toruabi Saku vald, ${HARJU_SEO_KW_ET}`,
    keywordsRu: `торуаби, торуаби Саку, сантехник Кииса, ${HARJU_SEO_KW_RU}`,
    h1Et: 'Toruabi Saku',
    h1Ru: 'Торуаби Саку',
    heroLeadEt:
      'Toruabi Saku on suunatud peredele ja eramajadele metsaäärses vallas, kus talvel kasvab kütte- ja veetorustike koormus. Kiisa kandis teeme nii boileri hooldust kui kanalisatsiooni toruabi, arvestades pikemat väljasõitu. Toruabi Saku vallas: +372 5633 3332.',
    heroLeadRu:
      'Торуаби Саку — для семей и частных домов в зелёной волости, где зимой растёт нагрузка на отопление и воду. В Кииса — бойлер и канализация с учётом длинного выезда. Торуаби в Саку: +372 5633 3332.',
    linkAnchorEt: 'toruabi saku',
    linkAnchorRu: 'торуаби саку',
    neighbors: ['rae', 'kiili', 'kose'],
    bodyEt: [
      'Saku alevikus ja Kiisa piirkonnas pakume toruabi nii kortermajadele kui eramutele – arvestame pikkade väljasõitude ja talvise koormusega.',
    ],
    bodyRu: [
      'Саку и Кииса: квартиры и частные дома — учитываем длину выезда и зимнюю нагрузку.',
    ],
    servicesEt: ['Toruabi eramutele', 'Küttesüsteemi ja boileri toruabi', 'Kanalisatsiooni toruabi'],
    servicesRu: ['Частные дома', 'Отопление и бойлер', 'Канализация'],
    faqEt: [
      { q: 'Kas toruabi Saku valda sõidab Harjumaalt?', a: 'Jah, teeninduspiirkond hõlmab Harjumaad; täpne saabumisaeg telefonis.' },
      { q: 'Talvine toruabi külmade ilmadega?', a: 'Jah, avariitoruabi ja küttega seotud probleemid.' },
      { q: 'Kiisa eramute toruabi?', a: 'Jah.' },
      { q: 'Planeeritud hooldus?', a: 'Kokkuleppel.' },
      { q: 'Hinnad?', a: 'Hinnakiri.' },
    ],
    faqRu: [
      { q: 'Выезд в Саку?', a: 'Да, Харьюмаа — время по телефону.' },
      { q: 'Зимой?', a: 'Аварии и отопление.' },
      { q: 'Кииса?', a: 'Да.' },
      { q: 'Плановое?', a: 'По договорённости.' },
      { q: 'Цены?', a: 'Прайс.' },
    ],
  },
  {
    id: 'harku',
    path: '/toruabi-harku',
    visualPreset: 'coastalNorthWest',
    schemaLocality: 'Harku',
    cardTitleRu: 'Торуаби в Харку',
    geo: { latitude: 59.38, longitude: 24.58 },
    settlementsEt: ['Harku vald', 'Tabasalu', 'Vääna-Jõesuu'],
    settlementsRu: ['волость Харку', 'Табасалу', 'Вяэна-Йыэсуу'],
    titleEt: 'Toruabi Harku | 24/7 | toruabii.ee',
    titleRu: 'Торуаби Харку | 24/7 | toruabii.ee',
    descriptionEt:
      'Toruabi Harku: avarii toruabi Tabasalus ja Vääna-Jõesuus 24/7. Harjumaa rannik. Väljasõit 0 €. +372 5633 3332.',
    descriptionRu:
      'Торуаби Харку: аварийный выезд в Табасалу и Вяэна-Йыэсуу 24/7. Побережье Харьюмаа. Выезд 0 €. +372 5633 3332.',
    keywordsEt: `toruabi, toruabi Tabasalu, toruabi Harku vald, toruabi Vääna-Jõesuu, ${HARJU_SEO_KW_ET}`,
    keywordsRu: `торуаби, торуаби Табасалу, сантехник Харку, побережье, ${HARJU_SEO_KW_RU}`,
    h1Et: 'Toruabi Harku',
    h1Ru: 'Торуаби Харку',
    heroLeadEt:
      'Toruabi Harku keskendub Tabasalu tihedale elamufondile ja Vääna-Jõesuu ranniku suvilatele, kus niiskus mõjutab torustikku. Pakume lekete likvideerimist, boileri hooldust ja kanalisatsiooni survepesu vastavalt objekti vanusele. Toruabi Harku vallas: +372 5633 3332.',
    heroLeadRu:
      'Торуаби Харку — для Табасалу и дач Вяэна-Йыэсуу, где влажность влияет на трубы. Протечки, бойлер и промывка канализации. Торуаби в Харку: +372 5633 3332.',
    linkAnchorEt: 'toruabi harku',
    linkAnchorRu: 'торуаби харку',
    neighbors: ['keila', 'saue'],
    bodyEt: [
      'Harku valla toruabi hõlmab nii tihedat Tabasalu keskust kui hajusat rannikualad – väljasõidu aeg arvestab teeoludega.',
    ],
    bodyRu: [
      'Плотный Табасалу и разреженное побережье — время выезда с учётом дороги.',
    ],
    servicesEt: ['Toruabi eramutele mere ääres', 'Kanalisatsiooni toruabi', 'Boileri ja soojus toruabi'],
    servicesRu: ['Дома у моря', 'Канализация', 'Бойлер и ГВС'],
    faqEt: [
      { q: 'Kas toruabi Tabasallus on kiire?', a: 'Tihti jah, kuid täpselt helistades.' },
      { q: 'Vääna-Jõesuu suvilad?', a: 'Jah, hooajaline ja väljaspool hooaega planeeritav toruabi.' },
      { q: 'Ranniku niiskus ja toruabi?', a: 'Hindame lekete ja torustiku seisukorda objektil.' },
      { q: 'Äriobjektid Tabasalus?', a: 'Jah, toruabi ka kommertsile.' },
      { q: 'Hinnad?', a: 'Hinnakiri.' },
    ],
    faqRu: [
      { q: 'Быстро в Табасалу?', a: 'Обычно да — уточняйте.' },
      { q: 'Дачи Вяэна-Йыэсуу?', a: 'Сезон и вне сезона.' },
      { q: 'Влажность?', a: 'Осмотр на месте.' },
      { q: 'Бизнес?', a: 'Да.' },
      { q: 'Цены?', a: 'Прайс.' },
    ],
  },
  {
    id: 'joelahtme',
    path: '/toruabi-joelahtme',
    visualPreset: 'ruralEast',
    schemaLocality: 'Jõelähtme',
    cardTitleRu: 'Торуаби в Йыелахтме',
    geo: { latitude: 59.4, longitude: 25.15 },
    settlementsEt: ['Jõelähtme vald', 'Kostivere', 'Loo'],
    settlementsRu: ['волость Йыелахтме', 'Костивере', 'Лоо'],
    titleEt: 'Toruabi Jõelähtme | 24/7 | toruabii.ee',
    titleRu: 'Торуаби Йыелахтме | 24/7 | toruabii.ee',
    descriptionEt:
      'Toruabi Jõelähtme: avarii toruabi Loos ja Kostiveres 24/7. Harjumaa ida. Väljasõit 0 €. +372 5633 3332.',
    descriptionRu:
      'Торуаби Йыелахтме: аварийный выезд в Лоо и Костивере 24/7. Восток Харьюмаа. Выезд 0 €. +372 5633 3332.',
    keywordsEt: `toruabi, toruabi Loo, toruabi Jõelähtme, toruabi Kostivere Harjumaa, ${HARJU_SEO_KW_ET}`,
    keywordsRu: `торуаби, торуаби Лоо, сантехник Йыелахтме, ${HARJU_SEO_KW_RU}`,
    h1Et: 'Toruabi Jõelähtme',
    h1Ru: 'Торуаби Йыелахтме',
    heroLeadEt:
      'Toruabi Jõelähtme ühendab Loo ja Kostivere tihedama asustuse ning hajusama maapiirkonna, kus väljasõidu aeg sõltub teest ja ilmast. Sama meeskond teenindab ka Maardu suunda, et avarii toruabi oleks ida-Harjumaal koordineeritud. Toruabi Jõelähtme vallas: +372 5633 3332.',
    heroLeadRu:
      'Торуаби Йыелахтме — Лоо, Костивере и разреженная застройка; время выезда зависит от дороги. Та же бригада, что и зона Маарду. Торуаби в Йыелахтме: +372 5633 3332.',
    linkAnchorEt: 'toruabi jõelähtme',
    linkAnchorRu: 'торуаби йыелахтме',
    neighbors: ['maardu', 'anija', 'rae'],
    bodyEt: [
      'Loo ja Kostivere objektidel koordineerime toruabi koos ida-Harjumaa väljasõitudega, et avarii ei jääks ootele sõltuvalt teeoludest.',
    ],
    bodyRu: [
      'Костивере связан с зоной Маарду — логистика торуаби по Харьюмаа согласована.',
    ],
    servicesEt: ['Toruabi eramutele', 'Kanalisatsiooni toruabi', 'Avarii toruabi'],
    servicesRu: ['Частные дома', 'Канализация', 'Аварии'],
    faqEt: [
      { q: 'Kui kaugele toruabi Loost välja jõuab?', a: 'Vald piirkonnana on teenindatav; täpsustage aadressi telefonis.' },
      { q: 'Kas Kostiveres on sama toruabi kui Maardus?', a: 'Jah, ühtne teenuspiirkond Harjumaal.' },
      { q: 'Öine avarii toruabi?', a: '24/7.' },
      { q: 'Pika väljasõidu lisatasu?', a: 'Kokkuleppel dispetšeriga vastavalt hinnakirjale.' },
      { q: 'Planeeritud tööd?', a: 'Jah.' },
    ],
    faqRu: [
      { q: 'Дальность от Лоо?', a: 'Уточняйте адрес.' },
      { q: 'Костивере = Маарду?', a: 'Единая зона Харьюмаа.' },
      { q: 'Ночью?', a: '24/7.' },
      { q: 'Дальний выезд?', a: 'По договорённости и прайсу.' },
      { q: 'План?', a: 'Да.' },
    ],
  },
  {
    id: 'kiili',
    path: '/toruabi-kiili',
    visualPreset: 'villageBelt',
    schemaLocality: 'Kiili',
    cardTitleRu: 'Торуаби в Кили',
    geo: { latitude: 59.31, longitude: 24.84 },
    settlementsEt: ['Kiili vald', 'Kiili alevik', 'Luige'],
    settlementsRu: ['волость Кили', 'посёлок Кили', 'Луйге'],
    titleEt: 'Toruabi Kiili | 24/7 | toruabii.ee',
    titleRu: 'Торуаби Кили | 24/7 | toruabii.ee',
    descriptionEt:
      'Toruabi Kiili: avarii toruabi Kiili alevikus ja Luiges 24/7. Tallinna lähi-Harjumaa. Väljasõit 0 €. +372 5633 3332.',
    descriptionRu:
      'Торуаби Кили: аварийный выезд в посёлке и Луйге 24/7. Рядом с Таллином. Выезд 0 €. +372 5633 3332.',
    keywordsEt: `toruabi, toruabi Kiili, toruabi Luige, avarii toruabi Kiili vald, ${HARJU_SEO_KW_ET}`,
    keywordsRu: `торуаби, торуаби Кили, сантехник Луйге, ${HARJU_SEO_KW_RU}`,
    h1Et: 'Toruabi Kiili',
    h1Ru: 'Торуаби Кили',
    heroLeadEt:
      'Toruabi Kiili on mõeldud Tallinna lähi-Harjumaa ridamajadele ja uusarendustele, kus ootamatu leke ei tohi oodata pikka järjekorda. Luige kandis jõuame sageli lühikese saabumisajaga, sest brigaad liigub regulaarselt läbi Kiili valla. Toruabi Kiilis: +372 5633 3332.',
    heroLeadRu:
      'Торуаби Кили — для таунхаусов и новостроек у Таллина, где протечка требует быстрого выезда. В Луйге часто короткое время прибытия. Торуаби в Кили: +372 5633 3332.',
    linkAnchorEt: 'toruabi kiili',
    linkAnchorRu: 'торуаби кили',
    neighbors: ['rae', 'saue', 'saku'],
    bodyEt: [
      'Kiili vallas on palju uuemaid elamuid – toruabi tegeleb nii garantiijärgsete paigalduste paranduste kui vananenud osade vahetusega.',
    ],
    bodyRu: [
      'Много новых домов — торуаби: гарантийные случаи и замена изношенных узлов.',
    ],
    servicesEt: ['Toruabi ridamajadele ja eramutele', 'Kanalisatsiooni toruabi', 'Boileri toruabi'],
    servicesRu: ['Таунхаусы и частные дома', 'Канализация', 'Бойлер'],
    faqEt: [
      { q: 'Kui kiiresti toruabi Luigesse?', a: 'Lähistel Tallinnale sageli lühike saabumisaeg; täpselt telefonis.' },
      { q: 'Kas toruabi teeb ka väiksemaid töid Kiilis?', a: 'Jah, segistid, wc süsteemid jne.' },
      { q: 'Öine toruabi?', a: '24/7 avariid.' },
      { q: 'Hinnad?', a: 'Hinnakiri.' },
      { q: 'Garantii?', a: '2 aastat.' },
    ],
    faqRu: [
      { q: 'Скорость в Луйге?', a: 'Обычно быстро — звоните.' },
      { q: 'Мелкие работы?', a: 'Да.' },
      { q: 'Ночью?', a: 'Аварии 24/7.' },
      { q: 'Цены?', a: 'Прайс.' },
      { q: 'Гарантия?', a: '2 года.' },
    ],
  },
  {
    id: 'kose',
    path: '/toruabi-kose',
    visualPreset: 'inlandSouth',
    schemaLocality: 'Kose',
    cardTitleRu: 'Торуаби в Косе',
    geo: { latitude: 59.19, longitude: 25.17 },
    settlementsEt: ['Kose vald', 'Kose alevik', 'Kose-Uuemõisa'],
    settlementsRu: ['волость Косе', 'посёлок Косе', 'Косе-Уuemõisa'],
    titleEt: 'Toruabi Kose | 24/7 | toruabii.ee',
    titleRu: 'Торуаби Косе | 24/7 | toruabii.ee',
    descriptionEt:
      'Toruabi Kose: avarii toruabi Kose alevikus ja Kose-Uuemõisas 24/7. Harjumaa lõuna. Väljasõit 0 €. +372 5633 3332.',
    descriptionRu:
      'Торуаби Косе: аварийный выезд в посёлке и Косе-Уuemõisa 24/7. Юг Харьюмаа. Выезд 0 €. +372 5633 3332.',
    keywordsEt: `toruabi, toruabi Kose, toruabi Kose-Uuemõisa, avarii toruabi Kose vald, ${HARJU_SEO_KW_ET}`,
    keywordsRu: `торуаби, торуаби Косе, сантехник Косе-Уuemõisa, ${HARJU_SEO_KW_RU}`,
    h1Et: 'Toruabi Kose',
    h1Ru: 'Торуаби Косе',
    heroLeadEt:
      'Toruabi Kose on suunatud hajusamale lõuna-Harjumaale, kus eramute trassid võivad olla pikemad ja vajavad eraldi planeerimist. Brigaad võtab kaasa survepesu ja diagnostika seadmed, et lahendada probleem ühe väljasõiduga. Toruabi Kose vallas: +372 5633 3332.',
    heroLeadRu:
      'Торуаби Косе — для разреженного юга Харьюмаа с длинными трассами частных домов. Берём промывку и диагностику, чтобы решить задачу за один выезд. Торуаби в Косе: +372 5633 3332.',
    linkAnchorEt: 'toruabi kose',
    linkAnchorRu: 'торуаби косе',
    neighbors: ['saku', 'anija'],
    bodyEt: [
      'Kose alevikus ja Kose-Uuemõisas planeerime toruabi väljasõidu vastavalt teeoludele — eramute pikemad trassid nõuavad sageli videouuringut või survepesu enne remonti.',
    ],
    bodyRu: [
      'В Косе и Косе-Уuemõisa выезд планируем с учётом дороги; длинные трассы частных домов часто требуют видеодиагностики или промывки до ремонта.',
    ],
    servicesEt: ['Toruabi eramutele', 'Kaevetööd ja trasside toruabi kokkuleppel', 'Kanalisatsiooni toruabi'],
    servicesRu: ['Частные дома', 'Земляные работы по договорённости', 'Канализация'],
    faqEt: [
      { q: 'Kas toruabi Kose valda sõidab kauem?', a: 'Väljasõidu aeg sõltub teekonnast; helista.' },
      { q: 'Pikad trassid ja toruabi?', a: 'Jah, planeerime survepesu ja uuringu vajadusel.' },
      { q: 'Öine avarii?', a: '24/7.' },
      { q: 'Hinnad?', a: 'Hinnakiri + kauguse kokkulepe.' },
      { q: 'Garantii?', a: '2 aastat.' },
    ],
    faqRu: [
      { q: 'Долго ехать в Косе?', a: 'Зависит от расстояния — по телефону.' },
      { q: 'Длинные трассы?', a: 'Промывка и обследование по необходимости.' },
      { q: 'Ночью?', a: '24/7.' },
      { q: 'Цены?', a: 'Прайс + удалённость.' },
      { q: 'Гарантия?', a: '2 года.' },
    ],
  },
  {
    id: 'anija',
    path: '/toruabi-anija',
    visualPreset: 'riverNorth',
    schemaLocality: 'Anija',
    cardTitleRu: 'Торуаби в Анижа',
    geo: { latitude: 59.34, longitude: 25.24 },
    settlementsEt: ['Anija vald', 'Kehra', 'Aegviidu'],
    settlementsRu: ['волость Анижа', 'Кехра', 'Ээгвийду'],
    titleEt: 'Toruabi Anija | 24/7 | toruabii.ee',
    titleRu: 'Торуаби Анижа | 24/7 | toruabii.ee',
    descriptionEt:
      'Toruabi Anija: avarii toruabi Kehras ja Aegviidus 24/7. Harjumaa põhja-idapool. Väljasõit 0 €. +372 5633 3332.',
    descriptionRu:
      'Торуаби Анижа: аварийный выезд в Кехра и Ээгвийду 24/7. Северо-восток Харьюмаа. Выезд 0 €. +372 5633 3332.',
    keywordsEt: `toruabi, toruabi Kehra, toruabi Anija vald, toruabi Aegviidu, ${HARJU_SEO_KW_ET}`,
    keywordsRu: `торуаби, торуаби Кехра, сантехник Анижа, ${HARJU_SEO_KW_RU}`,
    h1Et: 'Toruabi Anija',
    h1Ru: 'Торуаби Анижа',
    heroLeadEt:
      'Toruabi Anija hõlmab Kehra tööstuslikku keskust ja väiksemaid eluasemeid Aegviidus, kus torustike vanus erineb oluliselt. Enne tööd selgitame ulatuse, et toruabi vastaks nii kommerts- kui eramu vajadusele. Toruabi Anija vallas: +372 5633 3332.',
    heroLeadRu:
      'Торуаби Анижа — Кехра с промышленными сетями и небольшие объекты в Ээгвийду. Сначала уточняем объём работ под тип здания. Торуаби в Анижа: +372 5633 3332.',
    linkAnchorEt: 'toruabi anija',
    linkAnchorRu: 'торуаби анижа',
    neighbors: ['maardu', 'joelahtme', 'kose'],
    bodyEt: [
      'Anija valla toruabi hõlmab vanemaid torustikke Kehras ja väiksemaid eluasemeid Aegviidus – mõlemal juhul selgitame enne töö ulatust.',
    ],
    bodyRu: [
      'Старые сети в Кехра и небольшие объекты в Ээгвийду — сначала уточняем объём работ.',
    ],
    servicesEt: ['Toruabi eramutele ja äripindadele', 'Kanalisatsiooni toruabi', 'Kütte ja boileri toruabi'],
    servicesRu: ['Частные и коммерческие объекты', 'Канализация', 'Отопление и бойлер'],
    faqEt: [
      { q: 'Kas toruabi Kehras tegeleb ka vanade hoonetega?', a: 'Jah, kogenud meeskond.' },
      { q: 'Aegviidu väiksemad objektid?', a: 'Jah, toruabi ka väiksema mahuga töödele.' },
      { q: 'Öine toruabi?', a: '24/7 avariid.' },
      { q: 'Hinnad?', a: 'Hinnakiri.' },
      { q: 'Garantii?', a: '2 aastat.' },
    ],
    faqRu: [
      { q: 'Старый фонд в Кехра?', a: 'Да, опытная бригада.' },
      { q: 'Мелкие объекты в Ээгвийду?', a: 'Да.' },
      { q: 'Ночью?', a: '24/7.' },
      { q: 'Цены?', a: 'Прайс.' },
      { q: 'Гарантия?', a: '2 года.' },
    ],
  },
];

export function getHarjuMunicipality(id: HarjuMunicipalityId): HarjuMunicipality {
  const m = harjuMunicipalities.find((x) => x.id === id);
  if (!m) throw new Error(`Unknown Harju municipality: ${id}`);
  return m;
}

export const harjuMunicipalityPaths = harjuMunicipalities.map((m) => m.path);

export const tallinnDistrictPaths = [
  '/toruabi-kesklinn',
  '/toruabi-lasnamae',
  '/toruabi-mustamae',
  '/toruabi-pirita',
  '/toruabi-viimsi',
] as const;

export function isHarjuMunicipalityPath(path: string): boolean {
  return harjuMunicipalityPaths.includes(path);
}

export function isTallinnDistrictPath(path: string): boolean {
  return (tallinnDistrictPaths as readonly string[]).includes(path);
}

export function getHarjuNeighborMunicipalities(id: HarjuMunicipalityId): HarjuMunicipality[] {
  const m = getHarjuMunicipality(id);
  return m.neighbors.map((nid) => getHarjuMunicipality(nid));
}
