/** FAQPage `mainEntity` — ET (canonical /faq) and RU (canonical /ru/faq). */

type FaqQuestion = {
  '@type': 'Question';
  name: string;
  acceptedAnswer: { '@type': 'Answer'; text: string };
};

export const faqJsonLdMainEntityEt: FaqQuestion[] = [
  {
    '@type': 'Question',
    name: 'Kui kiiresti saate kohale jõuda?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Reageerime avariikõnedele 30-60 minutiga. Väljasõit on tasuta. Planeeritud tööde puhul kokkulepime sobiva aja.',
    },
  },
  {
    '@type': 'Question',
    name: 'Millised on teie hinnad?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Meie hinnad algavad 25 € tunnist (sõltuvalt teenusest). Väljasõit on tasuta Tallinna piires. Täpsed hinnad sõltuvad töö ulatusest. Vaata täielikku hinnakirja meie veebilehelt.',
    },
  },
  {
    '@type': 'Question',
    name: 'Kas teil on garantii?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Jah, pakume 2 aastat garantiid kõigile oma töödele. Kui probleem tekib, tuleme tasuta parandama.',
    },
  },
  {
    '@type': 'Question',
    name: 'Millised piirkonnad teid teenindavad?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Teenindame Tallinnat ja kogu Harjumaad, sealhulgas Lasnamäed, Mustamäed, Kesklinn, Viimsi, Maardu, Keila, Saue ja teisi piirkondi.',
    },
  },
  {
    '@type': 'Question',
    name: 'Kas töötate ööpäevaringselt?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Jah, oleme kättesaadavad 24/7 avariikõnedele. Planeeritud tööde jaoks töötame tavapäraselt kella 8-20 vahel.',
    },
  },
  {
    '@type': 'Question',
    name: 'Millised makseviisid on aktsepteeritud?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Aktsepteerime sularaha, pangakaarte ja pangaülekannet. Suuremate tööde puhul on võimalik kokku leppida osamakse.',
    },
  },
  {
    '@type': 'Question',
    name: 'Kas teete tasuta hindamistööd?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Jah, pakume tasuta hindamistööd. Meie meister tuleb kohale, hindab olukorda ja annab täpse hinnangu ilma kohustusteta.',
    },
  },
  {
    '@type': 'Question',
    name: 'Kas teil on kindlustus?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Jah, meil on täielik töökindlustus, mis katab kõik võimalikud kahjud toruabi töö käigus.',
    },
  },
  {
    '@type': 'Question',
    name: 'Kuidas tellida toruabi Lasnamäel, Mustamäel või Kesklinnas?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Toruabi tellimiseks helistage meile telefonil +372 5633 3332. Pakume toruabi teenuseid Lasnamäel, Mustamäel ja Kesklinnas. Meie torumees jõuab kohale 30-60 minutiga. Väljasõit on tasuta Tallinna piires.',
    },
  },
  {
    '@type': 'Question',
    name: 'Milline on keskmine toruabi töö kestus?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Keskmine toruabi töö kestus sõltub probleemi tüübist. Lihtsad toruabi tööd (näiteks kraanide remont) võivad võtta 30-60 minutit. Kanalisatsiooni toruabi ja ummistuste likvideerimine võib võtta 1-3 tundi. Suuremad toruabi projektid võivad võtta mitu tundi või päeva. Meie torumees annab täpse hinnangu enne töö alustamist.',
    },
  },
  {
    '@type': 'Question',
    name: 'Kas teete toruabi töid ka öösel?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Jah, pakume 24/7 avarii toruabi teenuseid, sealhulgas öösel. Kui teil on avarii olukord (näiteks veeleke, kanalisatsiooni ummistus või boileri rike), võime tulla kohale ka öösel. Öösel toruabi tööd on kättesaadavad kõigis Tallinna piirkondades.',
    },
  },
  {
    '@type': 'Question',
    name: 'Millised on kõige levinumad toruabi probleemid Tallinnas?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Kõige levinumad toruabi probleemid Tallinnas on kanalisatsiooni ummistused, boileri rikked, kraanide lekked ja küttesüsteemide probleemid. Vanades hoonetes (eriti paneelmajades Lasnamäel) on levinud vananenud torustikud, mis vajavad remonti. Uusarendustes Mustamäel ja Kesklinnas on sagedased probleemid seotud boileri hoolduse ja kanalisatsiooni survepesuga.',
    },
  },
  {
    '@type': 'Question',
    name: 'Kas pakute toruabi teenuseid ka ettevõtetele?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Jah, pakume toruabi teenuseid nii eraisikutele kui ka ettevõtetele. Meie torumees tegeleb kommertsobjektide toruabi töödega, sealhulgas restoranide, kohvikute, kontorite ja tootmisettevõtete toruabi teenustega. Pakume ka hoolduslepinguid KÜ-dele ja ettevõtetele.',
    },
  },
  {
    '@type': 'Question',
    name: 'Kuidas valida õige torumees?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Õige torumehe valimisel tasub tähelepanu pöörata järgmistele asjadele: kogemus ja kvalifikatsioon, garantii pakkumine (meil on 2 aastat garantii), kiire reageerimisaeg (meil 30-60 minutit), mõistlikud hinnad ja positiivsed kliendiarvustused. Meie torumees on kogenud ja kvalifitseeritud, pakub 2 aastat garantiid ja on kättesaadav 24/7.',
    },
  },
  {
    '@type': 'Question',
    name: 'Kas teete toruabi töid ka vanades hoonetes?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Jah, meie torumees on spetsialiseerunud töötamisele nii vanades kui ka uutes hoonetes. Vanades hoonetes (eriti paneelmajades Lasnamäel) on meil suur kogemus vananenud torustike remondiga. Teame, kuidas töötada vanade torustikega ilma suuremate remontideta. Pakume ka konsultatsiooni vanade hoonete torustike renoveerimiseks.',
    },
  },
  {
    '@type': 'Question',
    name: 'Kus tellida toruabi Lasnamäes?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Toruabi Lasnamäes tellite helistades +372 5633 3332 või külastades toruabii.ee/toruabi-lasnamae. Avarii toruabi on saadaval 24/7; väljasõit Tallinna piires on 0 €.',
    },
  },
  {
    '@type': 'Question',
    name: 'Toruabi hind Tallinn – kust vaadata?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Toruabi hind Tallinnas sõltub töö mahust. Orienteeruvad hinnad on hinnakirjas toruabii.ee/hinnakiri; täpse pakkumise annab meister kohapeal. Väljasõit Tallinna piires on 0 €.',
    },
  },
];

export const faqJsonLdMainEntityRu: FaqQuestion[] = [
  {
    '@type': 'Question',
    name: 'Как быстро вы приезжаете?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'На аварийные вызовы реагируем за 30–60 минут. Выезд бесплатный. Для плановых работ согласуем удобное время.',
    },
  },
  {
    '@type': 'Question',
    name: 'Какие у вас цены?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Цены от 25 € в час (зависит от услуги). Выезд бесплатно в пределах Таллинна. Точная стоимость зависит от объёма работ. Полный прайс — на сайте toruabii.ee.',
    },
  },
  {
    '@type': 'Question',
    name: 'Есть ли гарантия?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Да, даём 2 года гарантии на свои работы. При проблеме приезжаем исправлять бесплатно.',
    },
  },
  {
    '@type': 'Question',
    name: 'Какие районы вы обслуживаете?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Таллинн и весь Харьюмаа, в том числе Ласнамяэ, Мустамяэ, центр, Виймси, Маарду, Кейла, Сауэ и другие.',
    },
  },
  {
    '@type': 'Question',
    name: 'Работаете ли круглосуточно?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Да, для аварийных вызовов доступны 24/7. Для плановых работ обычно с 8:00 до 20:00.',
    },
  },
  {
    '@type': 'Question',
    name: 'Какие способы оплаты принимаете?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Наличные, банковские карты и перевод. Для крупных работ возможна рассрочка по договорённости.',
    },
  },
  {
    '@type': 'Question',
    name: 'Делаете ли бесплатный выезд на оценку?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Да, мастер приезжает, оценивает ситуацию и называет ориентировочную стоимость без обязательств.',
    },
  },
  {
    '@type': 'Question',
    name: 'Есть ли страхование?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Да, есть страхование ответственности на случай повреждений в ходе работ.',
    },
  },
  {
    '@type': 'Question',
    name: 'Как вызвать сантехника в Ласнамяэ, Мустамяэ или центре?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Позвоните +372 5633 3332. Обслуживаем Ласнамяэ, Мустамяэ и центр. Обычно приезд за 30–60 минут, выезд в Таллинне бесплатно.',
    },
  },
  {
    '@type': 'Question',
    name: 'Сколько в среднем длятся работы?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Зависит от задачи: простой ремонт смесителя — около 30–60 минут; засоры канализации — 1–3 часа; крупные работы — дольше. Точнее оценим перед началом.',
    },
  },
  {
    '@type': 'Question',
    name: 'Работаете ли ночью?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Да, аварийная сантехника 24/7, в том числе ночью при прорыве, засоре или поломке бойлера. По всему Таллинну.',
    },
  },
  {
    '@type': 'Question',
    name: 'Какие проблемы в Таллинне встречаются чаще всего?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Чаще всего: засоры канализации, неисправности бойлера, протечки смесителей и проблемы отопления. В панельных домах — износ труб; в новостройках — обслуживание бойлера и промывка канализации.',
    },
  },
  {
    '@type': 'Question',
    name: 'Работаете с компаниями?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Да, обслуживаем частных и юридических лиц: кафе, офисы, производство. Возможны договоры на обслуживание для КС и компаний.',
    },
  },
  {
    '@type': 'Question',
    name: 'Как выбрать сантехника?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Смотрите на опыт, гарантию (у нас 2 года), срок выезда (30–60 минут), прозрачные цены и отзывы. Мы работаем 24/7 для аварий.',
    },
  },
  {
    '@type': 'Question',
    name: 'Работаете в старых домах?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Да, есть опыт со старыми и новыми зданиями, в том числе панельные дома в Ласнамяэ. Ремонтируем изношенные трубы аккуратно, консультируем по замене стояков.',
    },
  },
  {
    '@type': 'Question',
    name: 'Где заказать торуаби в Ласнамяэ?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Позвоните +372 5633 3332 или откройте toruabii.ee/toruabi-lasnamae. Аварийный торуаби 24/7; выезд в пределах Таллина — 0 €.',
    },
  },
  {
    '@type': 'Question',
    name: 'Цена торуаби в Таллине — где смотреть?',
    acceptedAnswer: {
      '@type': 'Answer',
      text: 'Стоимость зависит от объёма работ. Ориентиры — в прайсе toruabii.ee/hinnakiri; точную сумму мастер назовёт на месте. Выезд в Таллине — 0 €.',
    },
  },
];
