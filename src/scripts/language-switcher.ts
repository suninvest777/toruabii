// Language Switcher - bundled and minified by Vite
'use strict';

import { footerLegalLineEt, footerLegalLineRu } from '../data/site-identity';

let currentLang = localStorage.getItem('lang') || 'et';
const langData: Record<string, Record<string, string>> = {
  et: {
    services: 'Teenused',
    pricing: 'Hinnakiri',
    areas: 'Piirkonnad',
    contact: 'Kontakt',
    blog: 'Blogi',
    callNow: 'HELISTA',
    callNowFull: 'HELISTA KOHE',
    heroTitle: 'Toruabi hoiab tehnosüsteemid korras',
    heroSubtitle:
      'Ehitame ja hooldame vee-, kanalisatsiooni-, kütte ning välistrasse Tallinnas ja Harjumaal.',
    openNow: 'Avatud nüüd',
    phone: '+372 5633 3332',
    service1: 'Toruabi ja avariitööd 24h',
    service1Desc: 'Ööpäevaringne sanitaartehniline abi',
    service2: 'Ummistuste likvideerimine 24h',
    service2Desc: 'Torude ummistuste kiire lahendus',
    service3: 'Tehnosüsteemide videouuring',
    service3Desc: 'Professionaalne kaamerauuring',
    service4: 'Survepesu',
    service4Desc: 'Kanalisatsiooni trasside survepesu',
    service5: 'Rasvapüüduri puhastus',
    service5Desc: 'Rasvapüüduri puhastus ja trasside survepesu',
    service6: 'WC potipaigaldus',
    service6Desc: 'WC potipaigaldus, vahetus ja remont',
    service7: 'Küttesüsteemi renoveerimine',
    service7Desc: 'Küttesüsteemide renoveerimine, ehitus ja remont',
    service8: 'Kaevetööd',
    service8Desc: 'Professionaalsed kaevetööd',
    service9: 'Trasside remont ja ehitus',
    service9Desc: 'Vee ja kanalisatsiooni trasside remont ja ehitus',
    service10: 'Küttesüsteemi läbipesu',
    service10Desc: 'Kütte, põrandaküte, soojusõlme hooldus',
    service11: 'Sanitaarseadmete paigaldus',
    service11Desc: 'Kraanikausid, segistid, segisti vahetus',
    service12: 'Boileri paigaldus ja remont',
    service12Desc: 'Boileri paigaldus, remont ja hooldus',
    service13: 'Kodumasina paigaldamine',
    service13Desc: 'Kodumasina paigaldamine, vahetus ja hooldus',
    service14: 'Hooldusleping KÜ-le',
    service14Desc: 'Pikaajaline hooldusleping',
    galleryTitle: 'Tehtud tööd',
    galleryDesc: 'Valik hiljutisi toruabi ja kanalisatsiooni töid Tallinnast ja Harjumaalt — enne/pärast olukordi ja kasutatud meetodeid.',
    blogPageTitle: 'Toruabi blogi: praktilised nõuanded Tallinnas ja Harjumaal',
    blogPageSubtitle: 'Siit leiad lühikesed ja praktilised artiklid ummistuste, leketega, boileri ja küttesüsteemi hoolduse kohta. Eesmärk on aidata sul teha õiged otsused enne, kui meister kohale jõuab.',
    blogReadMore: 'Loe edasi',
    home: 'Avaleht',
    trust: 'Meistrid on teel',
    yearsExp: 'Aastat kogemust',
    happyClients: 'Rahulolu klienti',
    availability: 'Kättesaadavus',
    howWorkTitle: 'Kuidas töötab avarii toruabi 24/7?',
    howWorkStep1Title: '1. Helista kohe või jäta tagasiside',
    howWorkStep1Text: 'Vastame kõnedele ja päringutele ööpäevaringselt. Kirjelda lühidalt probleemi (leke, ummistus, katki toru, boiler jms), et saaksime kohe hinnata olukorra tõsidust.',
    howWorkStep2Title: '2. Meister teel 30–60 minutiga',
    howWorkStep2Text: 'Avarii meeskond liigub välja kohe pärast kõnet. Enamiku Tallinna ja Harjumaa piirkondadesse jõuame 30–60 minuti jooksul, sõltuvalt liiklusest ja asukohast.',
    howWorkStep3Title: '3. Kohapealne diagnostika ja läbipaistev hind',
    howWorkStep3Text: 'Kontrollime lekke, ummistuse või muu probleemi täpse asukoha ja põhjuse, selgitame enne töö algust lahenduse variandid ja orienteeruva hinna ilma peidetud lisatasudeta.',
    howWorkStep4Title: '4. Professionaalne remont ja koristus',
    howWorkStep4Text: 'Kasutame kaasaegseid seadmeid (video-uuring, survepesu, spetsiaalsed rothenbergeri masinad), et töö teha kiiresti ja kvaliteetselt. Peale töö lõppu jätame tööala puhtaks.',
    experienceTitle: 'Kogemus, garantii ja usaldus',
    experienceText1: 'Meie meistritel on üle 10 aasta kogemust nii Eestis kui ka Skandinaavias. Oleme harjunud töötama kõrgete nõuete järgi, kasutades professionaalseid tööriistu ja lahendusi keerukate torustiku- ja küttesüsteemide probleemide lahendamiseks.',
    experienceText2: 'Kõigile töödele anname 2-aastase garantii. Kui probleem kordub garantiiperioodi jooksul, tuleme kohale ja lahendame selle ilma lisatasuta.',
    experienceText3: 'Järgime Euroopa Liidu ja Eesti nõudeid vee-, kanalisatsiooni- ja küttesüsteemide töödel. Vajadusel teeme koostööd haldusfirmade ja korteriühistutega ning vormistame töö üleandmise aktid.',
    experienceBullet1: '• Avarii väljakutsed 24/7 Tallinnas ja terves Harjumaal',
    experienceBullet2: '• Tasuta väljasõit ja orienteeruv hinnang telefoni teel',
    experienceBullet3: '• Kindel ja selge hinnastamine vastavalt hinnakirjale',
    experienceBullet4: '• Töökindlustus – kaitse nii kliendile kui ka objektile',
    pricingTitle: 'Hinnad',
    viewFullPricing: 'Vaata täielikku hinnakirja →',
    exitFee: 'Väljasõit',
    drainCleaning: 'Torustike avamine',
    leakRepair: 'Lekete parandamine',
    boilerRepair: 'Boileri remont',
    heatingInstall: 'Küttepaigaldus',
    finalPrice: 'Lõplik hind sõltub töö ulatusest. Tasuta hindamistöö.',
    callback: 'Tellida tagasiside',
    name: 'Nimi',
    phoneLabel: 'Telefon',
    send: 'Saada',
    orCall: 'Või helista otse:',
    footerText: 'Toruabi ja kiire väljakutse 24/7 Tallinnas ja Harjumaal',
    copyright: '© 2026 toruabii.ee — kõik autoriõigused on kaitstud',
    footerTrust:
      'Teenuspiirkond: Tallinn ja Harjumaa · info@toruabii.ee · +372 5633 3332',
    backToHome: '← Tagasi avalehele',
    pricingPageTitle: 'Konkurentsivõimelised hinnad kvaliteetse sanitaartehnilise töö eest',
    pricingPageSubtitle: 'toruabii.ee — toruabi ja väljakutse Harjumaal 24/7',
    pricingInfoTitle: 'Hinnakujundus',
    pricingInfo1: 'Minimaalne väljakutsetasu on esimese töötunni hind; edasi arvestatakse 10-minutilise sammuga.',
    pricingInfo2: 'Allpool toodud hinnakirjas märkimata tööd tehakse vastavalt kalkulatsioonile.',
    pricingInfo3: 'Mahukate tööde puhul on hind kokkuleppeline.',
    paymentMethodsTitle: 'Makseviisid',
    paymentMethodsText: 'Võtame vastu nii sularaha kui ka kaardimakseid makseterminali kaudu. Ettevõtted saavad teenuse eest tasuda arve alusel.',
    documentationTitle: 'Dokumentatsioon, kviitungid, aktid',
    documentationText: 'Pärast iga tellimust väljastame kviitungi, kaardimakse korral väljastame maksetšeki. Samuti koostame akti kindlustusettevõttele.',
    importantInfo: 'Oluline teave',
    importantInfo1: 'Minimaalne väljakutse tasu – see on esimese töö tunni hind! Edasi arvestatakse 30-minutilise sammuga.',
    importantInfo2: 'Tööd, mis ei ole toodud allolevas hinnakirjas, tehakse vastavalt kalkulatsioonile.',
    importantInfo3: 'Mahukamate tööde puhul on hind kokkuleppeline.',
    importantInfo4: 'Fekaalide äraveo ning kanalisatsioonitrasside ja -kaevude survepesu hindadele lisanduvad transpordikulud, vee võtmise tasu ning reovee/rasva/liiva utiliseerimise kulud.',
    importantInfo5: 'Hinnangu orienteeriva maksumuse täpsustamiseks pöörduge dispetšeri poole.',
    plannedWork: 'Planeeritud tööd',
    service: 'Teenus',
    price: 'Hind',
    vatNote: 'Hindadele lisandub käibemaks 24%',
    needEstimate: 'Vajate abi? Võtke meiega ühendust!',
    callForPrice: 'Meie meeskond on valmis teid aitama 24/7',
    highPressureMachineTitle: 'Survepesu auto tellimine',
    highPressureMachineWeekday: 'Töötund E-R (8:00-17:00)',
    highPressureMachineWeekend: 'Töötund E-P (17:00-00:00)',
    highPressureMachineOutside: 'Väljasõit Tallinnast väljapoole (edasi-tagasi)',
    highPressureMachineMinPayment: 'Minimaalne tasu',
    highPressureMachineNote: 'Fekaalide äraveo ja kanalisatsioonitorude ning kaevude hüdrodünaamilise loputamise hindadele lisanduvad transpordikulud, veevõtu tasu ja reovee/rasva/liiva äravedu.',
    whyChooseTitle: 'Miks valida ToruGrupp?',
    whyChooseIntro: 'Iga väljakutse saab selge tööplaani, fikseeritud hinnastamise ja meeskonna, kes tunneb nii kortermaju kui eramu objekte.',
    whyChoose1: 'Selge protsesside planeerimine ja kiire reageerimine',
    whyChoose2: 'Kaasaegse seadmete ja tehnoloogiate kasutamine',
    whyChoose3: 'Serteeritud ja vastupidavate materjalide kasutamine',
    whyChoose4: 'Meie töötajate professionaalsus ja kogemus',
    warningTitle: 'TÄHELEPANU!',
    warningText: 'Garantii ei kehti ummistuste likvideerimisele.',
    warningText2: 'Me teostame nii väikeseid kui ka suuri avariitöid, sõltumata keerukusest.',
    priceService1: 'Sanitaartehnilised tööd',
    priceService3: 'PEM- toru keevitamine',
    priceService4: 'Torustiku inspekteerimine kaameraga',
    priceService5: 'Küttesüsteemi läbipesu',
    priceService6: 'Soojusvahetite puhastus',
    priceService7: 'Torustike survekatse',
    priceService8: 'Küttesüsteemi ja soojussõlme survekatse',
    priceService9: 'Hoonesiseste torude pesu kuuma veega surve all kuni 75 bar (rasva eemaldamine)',
    priceService10: 'Kanalisatsioonisüsteemide survepesu',
    priceService11: 'Rasvaeraldite ja liivapüüdurite puhastus',
    priceService12: 'Hinnale lisandub reovee/rasva/liiva äravoolu maksumus',
    priceService13: 'Plasttorude sulatamine',
    priceService14: 'Metalltorude sulatamine',
    priceService15: 'Väljakutsetele väljaspool Tallinna kehtib sõidutasu (edasi-tagasi)',
    priceService16: 'Vaakumpuhastus',
    priceService17: 'Ummistuste likvideerimine Rothenberger 16 mm',
    priceService18: 'Ummistuste likvideerimine Rothenberger 22 mm',
    priceFrom: 'Alates',
    pricePerHour: '/ tund',
    pricePerKm: '/ km',
    pricePerM3: '/ 1 m3',
    menu: 'Menüü',
    formSuccess: 'Aitäh! Võtame teiega ühendust varsti.',
    formError: 'Viga saatmisel. Palun proovige uuesti või helistage otse.',
    formSending: 'Saadetakse...',
    faq: 'KKK',
    faqTitle: 'Korduma Kippuvad Küsimused',
    faqSubtitle: 'Vastused kõigile teie küsimustele',
    faq1Question: 'Kui kiiresti saate kohale jõuda?',
    faq1Answer: 'Avariikõnedele reageerime tavaliselt 30–60 minutiga. Väljasõit on tasuta Tallinna piires. Planeeritud tööde aja lepime eraldi kokku.',
    faq2Question: 'Millised on teie hinnad?',
    faq2Answer:
      'Hinnad algavad hinnakirja järgi (orienteeruvalt alates 25 €/h). Väljasõit Tallinna piires on 0 €. Lõplik summa sõltub töö mahust — vaata hinnakirja.',
    faq3Question: 'Kas teil on garantii?',
    faq3Answer: 'Jah — töödele kehtib 2-aastane garantii. Kui probleem kordub, tuleme parandama ilma lisatasuta.',
    faq4Question: 'Millised piirkonnad teid teenindavad?',
    faq4Answer:
      'Teenindame Tallinna linnaosasid (sh Kesklinn, Lasnamäe, Mustamäe, Pirita, Viimsi) ja Harjumaa valdasid — Maardu, Keila, Saue, Rae, Saku, Harku, Jõelähtme, Kiili, Kose ja Anija. Täpsustage aadressi helistades.',
    faq5Question: 'Kas töötate ööpäevaringselt?',
    faq5Answer: 'Jah — avariikõnedele oleme kättesaadavad ööpäevaringselt. Planeeritud torutööde jaoks töötame tavaliselt kell 8–20.',
    faq6Question: 'Millised makseviisid on aktsepteeritud?',
    faq6Answer: 'Võtame vastu sularaha, pangakaarte ja ülekannet. Suuremate objektide puhul saab makse tingimused dispetšeriga kokku leppida.',
    faq7Question: 'Kas teete tasuta hindamistööd?',
    faq7Answer: 'Jah — meister saab kohale tulla, hinnata olukorda ja anda orienteeruva hinna ilma tellimuskohustuseta.',
    faq8Question: 'Kas teil on kindlustus?',
    faq8Answer: 'Jah — tööd on kaetud töökindlustusega, mis kaitseb nii klienti kui objekti toruabi tööde ajal.',
    faq9Question: 'Kuidas tellida toruabi Lasnamäel, Mustamäel või Kesklinnas?',
    faq9Answer: 'Toruabi tellimiseks helistage meile telefonil +372 5633 3332. Pakume toruabi teenuseid Lasnamäel, Mustamäel ja Kesklinnas. Meie torumees jõuab kohale 30-60 minutiga. Väljasõit on tasuta Tallinna piires.',
    faq10Question: 'Milline on keskmine toruabi töö kestus?',
    faq10Answer: 'Keskmine toruabi töö kestus sõltub probleemi tüübist. Lihtsad toruabi tööd (näiteks kraanide remont) võivad võtta 30-60 minutit. Kanalisatsiooni toruabi ja ummistuste likvideerimine võib võtta 1-3 tundi. Suuremad toruabi projektid võivad võtta mitu tundi või päeva. Meie torumees annab täpse hinnangu enne töö alustamist.',
    faq11Question: 'Kas teete toruabi töid ka öösel?',
    faq11Answer: 'Jah, pakume 24/7 avarii toruabi teenuseid, sealhulgas öösel. Kui teil on avarii olukord (näiteks veeleke, kanalisatsiooni ummistus või boileri rike), võime tulla kohale ka öösel. Öösel toruabi tööd on kättesaadavad kõigis Tallinna piirkondades.',
    faq12Question: 'Millised on kõige levinumad toruabi probleemid Tallinnas?',
    faq12Answer: 'Kõige levinumad toruabi probleemid Tallinnas on kanalisatsiooni ummistused, boileri rikked, kraanide lekked ja küttesüsteemide probleemid. Vanades hoonetes (eriti paneelmajades Lasnamäel) on levinud vananenud torustikud, mis vajavad remonti. Uusarendustes Mustamäel ja Kesklinnas on sagedased probleemid seotud boileri hoolduse ja kanalisatsiooni survepesuga.',
    faq13Question: 'Kas pakute toruabi teenuseid ka ettevõtetele?',
    faq13Answer: 'Jah, pakume toruabi teenuseid nii eraisikutele kui ka ettevõtetele. Meie torumees tegeleb kommertsobjektide toruabi töödega, sealhulgas restoranide, kohvikute, kontorite ja tootmisettevõtete toruabi teenustega. Pakume ka hoolduslepinguid KÜ-dele ja ettevõtetele.',
    faq14Question: 'Kuidas valida õige torumees?',
    faq14Answer: 'Õige torumehe valimisel tasub tähelepanu pöörata järgmistele asjadele: kogemus ja kvalifikatsioon, garantii pakkumine (meil on 2 aastat garantii), kiire reageerimisaeg (meil 30-60 minutit), mõistlikud hinnad ja positiivsed kliendiarvustused. Meie torumees on kogenud ja kvalifitseeritud, pakub 2 aastat garantiid ja on kättesaadav 24/7.',
    faq15Question: 'Kas teete toruabi töid ka vanades hoonetes?',
    faq15Answer: 'Jah, meie torumees on spetsialiseerunud töötamisele nii vanades kui ka uutes hoonetes. Vanades hoonetes (eriti paneelmajades Lasnamäel) on meil suur kogemus vananenud torustike remondiga. Teame, kuidas töötada vanade torustikega ilma suuremate remontideta. Pakume ka konsultatsiooni vanade hoonete torustike renoveerimiseks.',
    faqCtaTitle: 'Kas teie küsimust ei leidnud?',
    faqCtaText: 'Helistage meile ja me vastame kõigile teie küsimustele!',
    cookieText: 'Me kasutame küpsiseid, et parandada teie kasutajakogemust. Jätkates meie veebilehe kasutamist, nõustute küpsiste kasutamisega.',
    cookiePolicy: 'Privaatsuspoliitika',
    cookieAccept: 'Nõustun',
    cookieDecline: 'Keeldun',
    promoTitle: 'Eripakkumine',
    promoText:
      'Kõikidele teenustele <strong class="promotion-banner__highlight">−50%</strong> kuni kuu lõpuni!',
    promoSubtext: 'Väljasõit 0 € Tallinnas • Kohale 30–60 minutiga',
    privacyTitle: 'Privaatsuspoliitika',
    privacySubtitle: 'Kuidas me kaitse teie isikuandmeid',
    privacySection1Title: '1. Üldinfo',
    privacySection1Text: 'toruabii.ee (edaspidi "meie", "me", "meie veebileht") kaitseb teie privaatsust ja isikuandmeid. See privaatsuspoliitika selgitab, kuidas me kogume, kasutame, säilitame ja avaldame teie isikuandmeid, kui te kasutate meie veebilehte.\n\nMeie veebileht on valduses ja juhitakse toruabii.ee poolt. Meie kontaktandmed on saadaval veebilehel.',
    privacySection2Title: '2. Kogutavad andmed',
    privacySection2Text: 'Me kogume järgmist tüüpi andmeid:\n\n• Kontaktandmed: nimi, telefoninumber, e-posti aadress (kui te esitate need tagasiside vormi kaudu)\n• Tehnilised andmed: IP-aadress, brauseri tüüp, seadme teave, külastatud lehed, külastamise aeg ja kuupäev\n• Küpsised: meie veebileht kasutab küpsiseid, et parandada kasutajakogemust ja analüüsida veebilehe kasutamist',
    privacySection3Title: '3. Andmete kasutamine',
    privacySection3Text: 'Me kasutame kogutud andmeid järgmistel eesmärkidel:\n\n• Teie päringute ja tagasiside käsitlemine\n• Teenuste pakkumine ja täiustamine\n• Kommunikatsioon teiega teenuste kohta\n• Veebilehe analüüsimine ja parandamine\n• Juriidiliste kohustuste täitmine',
    privacySection4Title: '4. Andmete säilitamine',
    privacySection4Text: 'Me säilitame teie isikuandmeid ainult nii kaua, kui see on vajalik eesmärkide saavutamiseks, milleks andmed koguti, või nii kaua, kui see on nõutav seadusega.\n\nKui te soovite, et me kustutaksime teie andmed, võtke meiega ühendust.',
    privacySection5Title: '5. Andmete jagamine',
    privacySection5Text: 'Me ei müü, ei rendi ega jaga teie isikuandmeid kolmandate osapooltega, välja arvatud:\n\n• Kui see on nõutav seadusega\n• Kui see on vajalik meie teenuste osutamiseks (nt andmekaitse teenused)\n• Teie selgesõnalise nõusolekuga',
    privacySection6Title: '6. Teie õigused',
    privacySection6Text: 'Teil on õigus:\n\n• Juurdepääs oma isikuandmetele\n• Nõuda oma andmete parandamist või kustutamist\n• Vastu vaielda oma andmete töötlemisega\n• Andmete portatiivsus\n• Tagasi võtta nõusolek andmete töötlemiseks\n\nNende õiguste kasutamiseks võtke meiega ühendust.',
    privacySection7Title: '7. Küpsised',
    privacySection7Text: 'Meie veebileht kasutab küpsiseid, et parandada kasutajakogemust. Küpsised on väikesed tekstifailid, mis salvestatakse teie seadmesse.\n\nTe saate kontrollida või kustutada küpsiseid oma brauseri seadetes. Pange tähele, et mõned veebilehe funktsioonid ei pruugi töötada korralikult, kui küpsised on keelatud.',
    privacySection8Title: '8. Muudatused privaatsuspoliitikas',
    privacySection8Text: 'Meil on õigus muuta seda privaatsuspoliitikat igal ajal. Muudatused jõustuvad kohe pärast nende avaldamist veebilehel.\n\nSoovitame teil perioodiliselt seda lehte vaadata, et olla kursis meie privaatsuspoliitika muudatustega.',
    privacySection9Title: '9. Kontakt',
    privacySection9Text: 'Kui teil on küsimusi selle privaatsuspoliitika kohta või soovite kasutada oma õigusi, võtke meiega ühendust.',
    privacyCtaTitle: 'Vajate abi?',
    privacyCtaText: 'Võtke meiega ühendust, kui teil on küsimusi privaatsuspoliitika kohta!',
    lastUpdated: 'Info uuendatud: aprill 2026',
    pricingSectionTitle: 'Toruabi hinnad ja tagasiside',
    serviceAreas: 'Teeninduspiirkonnad',
    lastUpdate: 'Info uuendatud:',
    lasnamae: 'Toruabi Lasnamäes',
    mustamae: 'Toruabi Mustamäel',
    kesklinn: 'Toruabi Kesklinnas',
    pirita: 'Toruabi Piritas',
    viimsi: 'Toruabi Viimsis',
  },
  ru: {
    services: 'Услуги',
    pricing: 'Прайс-лист',
    areas: 'Районы',
    contact: 'Контакты',
    blog: 'Блог',
    callNow: 'ПОЗВОНИТЬ',
    callNowFull: 'ПОЗВОНИТЬ СЕЙЧАС',
    heroTitle: 'Торуаби поддерживает технические системы в порядке',
    heroSubtitle:
      'Строим и обслуживаем водопровод, канализацию, отопление и наружные сети в Таллинне и Харьюмаа.',
    openNow: 'Открыто сейчас',
    phone: '+372 5633 3332',
    service1: 'Сантехнические аварийные работы 24ч',
    service1Desc: 'Круглосуточная сантехническая помощь',
    service2: 'Устранение засоров 24ч',
    service2Desc: 'Быстрое устранение засоров труб',
    service3: 'Видеообследование техносистем',
    service3Desc: 'Профессиональное видеообследование',
    service4: 'Гидродинамическая промывка',
    service4Desc: 'Гидропромывка канализационных линий',
    service5: 'Очистка жироуловителя',
    service5Desc: 'Очистка жироуловителя и гидродинамическая промывка трасс',
    service6: 'Установка унитаза',
    service6Desc: 'Установка, замена и ремонт унитаза',
    service7: 'Реконструкция системы отопления',
    service7Desc: 'Реконструкция, строительство и ремонт систем отопления',
    service8: 'Земляные работы',
    service8Desc: 'Профессиональные земляные работы',
    service9: 'Ремонт и строительство трасс',
    service9Desc: 'Ремонт и строительство водопроводных и канализационных трасс',
    service10: 'Промывка системы отопления',
    service10Desc: 'Обслуживание отопления, теплого пола, теплового узла и промывка системы',
    service11: 'Установка сантехнического оборудования',
    service11Desc: 'Раковины, смесители, замена смесителя',
    service12: 'Установка и ремонт бойлера',
    service12Desc: 'Установка, ремонт и обслуживание бойлера',
    service13: 'Установка бытовой техники',
    service13Desc: 'Установка, замена и обслуживание бытовой техники',
    service14: 'Договор на обслуживание для КУ',
    service14Desc: 'Долгосрочный договор на обслуживание',
    galleryTitle: 'Выполненные работы',
    galleryDesc: 'Подборка недавних работ торуаби и канализации в Таллине и Харьюмаа — типовые случаи и применённые методы.',
    blogPageTitle: 'Блог по сантехнике: практичные советы для Таллина и Харьюмаа',
    blogPageSubtitle: 'Здесь собраны короткие и полезные статьи о засорах, протечках, обслуживании бойлеров и систем отопления, чтобы вы могли принять правильное решение до приезда мастера.',
    blogReadMore: 'Читать далее',
    home: 'Главная',
    trust: 'Мастера в пути',
    yearsExp: 'Лет опыта',
    happyClients: 'Довольных клиентов',
    availability: 'Доступность',
    howWorkTitle: 'Как работает аварийный сантехник 24/7?',
    howWorkStep1Title: '1. Позвоните или оставьте заявку',
    howWorkStep1Text: 'Мы отвечаем на звонки и заявки круглосуточно. Коротко опишите проблему (протечка, засор, лопнувшая труба, бойлер и т.п.), чтобы мы сразу оценили срочность и объём работ.',
    howWorkStep2Title: '2. Мастер выезжает за 30–60 минут',
    howWorkStep2Text: 'Аварийная бригада выезжает сразу после звонка. В большинстве районов Таллина и Харьюмаа мы приезжаем за 30–60 минут, в зависимости от пробок и расстояния.',
    howWorkStep3Title: '3. Диагностика на месте и прозрачная цена',
    howWorkStep3Text: 'На месте находим точную причину протечки, засора или другой проблемы, объясняем варианты решения и ориентировочную стоимость до начала работ — без скрытых платежей.',
    howWorkStep4Title: '4. Профессиональный ремонт и уборка',
    howWorkStep4Text: 'Используем современное оборудование (видеообследование, гидродинамическая промывка, машины Rothenberger), чтобы устранить проблему быстро и надёжно. После работ мы убираем рабочую зону.',
    experienceTitle: 'Опыт, гарантия и доверие',
    experienceText1: 'Наши мастера имеют более 10 лет опыта работы как в Эстонии, так и в Скандинавии. Мы привыкли работать по высоким стандартам, используя профессиональные инструменты и решения для сложных задач с трубами и системами отопления.',
    experienceText2: 'На все работы мы даём 2 года гарантии. Если в течение гарантийного срока проблема повторится, мы приедем и устраним её без дополнительной оплаты.',
    experienceText3: 'Мы соблюдаем требования ЕС и Эстонии при работах с водопроводом, канализацией и системами отопления. При необходимости работаем с управляющими компаниями и КУ и оформляем акты выполненных работ.',
    experienceBullet1: '• Аварийные выезды 24/7 по Таллину и всему Харьюмаа',
    experienceBullet2: '• Бесплатный выезд и ориентировочная оценка по телефону',
    experienceBullet3: '• Понятное и прозрачное ценообразование по прайс-листу',
    experienceBullet4: '• Страхование работ — дополнительная защита для клиента и объекта',
    pricingTitle: 'Цены',
    viewFullPricing: 'Посмотреть полный прайс-лист →',
    exitFee: 'Выезд',
    drainCleaning: 'Прочистка труб',
    leakRepair: 'Устранение протечек',
    boilerRepair: 'Ремонт бойлера',
    heatingInstall: 'Установка отопления',
    finalPrice: 'Окончательная цена зависит от объема работ. Бесплатная оценка.',
    callback: 'Заказать обратный звонок',
    name: 'Имя',
    phoneLabel: 'Телефон',
    send: 'Отправить',
    orCall: 'Или позвоните напрямую:',
    footerText: 'Торуаби и срочный выезд 24/7 в Таллинне и Харьюмаа',
    copyright: '© 2026 toruabii.ee — все права защищены',
    footerTrust:
      'Зона обслуживания: Таллин и Харьюмаа · info@toruabii.ee · +372 5633 3332',
    backToHome: '← Вернуться на главную',
    pricingPageTitle: 'Конкурентные цены за качественные сантехнические работы',
    pricingPageSubtitle: 'toruabii.ee — торуаби и выезд в Харьюмаа 24/7',
    pricingInfoTitle: 'Ценообразование',
    pricingInfo1: 'Минимальная плата за вызов – это цена первого часа работы! Далее с шагом в 10 минут.',
    pricingInfo2: 'Работы, которых нет в приведённом списке, выполняются соответственно калькуляции, уточните у диспетчера, либо на месте.',
    pricingInfo3: 'При выполнении объёмных работ цена договорная. Ориентировочную стоимость уточнить у диспетчера.',
    paymentMethodsTitle: 'Способы оплаты',
    paymentMethodsText: 'Принимаем как наличные, так и оплату картой через терминал, фирмы оплачивают услугу по счету',
    documentationTitle: 'Документация, чеки, акты',
    documentationText: 'После каждого заказа мы выписываем квитанцию, при оплате картой чек. Так же составляем АКТ для страховой компании.',
    importantInfo: 'Важная информация',
    importantInfo1: 'Минимальная плата за вызов – это стоимость первого рабочего часа! Далее расчет производится с шагом 30 минут.',
    importantInfo2: 'Работы, не указанные в прайс-листе, выполняются по расчету.',
    importantInfo3: 'Для объемных работ цена договорная.',
    importantInfo4: 'К стоимости вывоза фекалий и гидродинамической промывки канализационных трасс и колодцев добавляются транспортные расходы, плата за забор воды и расходы на утилизацию сточных вод/жира/песка.',
    importantInfo5: 'Для уточнения ориентировочной стоимости оценки обратитесь к диспетчеру.',
    plannedWork: 'Плановые работы',
    service: 'Услуга',
    price: 'Цена',
    vatNote: 'К цене добавляется НДС 24%',
    needEstimate: 'Нужна более точная оценка?',
    callForPrice: 'Звоните — диспетчер назовёт ориентир по прайсу и времени приезда.',
    highPressureMachineTitle: 'Вызов прочистной машины высокого давления',
    highPressureMachineWeekday: 'Час работы ПН-ПТ(8:00-17:00)',
    highPressureMachineWeekend: 'Час работы ПН-ВС(17:00-00:00)',
    highPressureMachineOutside: 'Выезд за пределы Таллинна(туда-обратно)',
    highPressureMachineMinPayment: 'Минимальная оплата',
    highPressureMachineNote: 'К ценам за откачку выгребных ям и промывку канализационных трасс и колодцев добавляется стоимость за транспортные расходы, забор воды, стоимость утилизации сточных вод/жира/песка',
    whyChooseTitle: 'Почему выбрать Toruabii?',
    whyChooseIntro: 'На каждый выезд — понятный план работ, фиксированная смета и бригада с опытом в МКД и частных домах.',
    whyChoose1: 'Согласованные сроки и оперативный выезд по Таллину и Харьюмаа',
    whyChoose2: 'Камера, гидропромывка и оборудование Rothenberger на объекте',
    whyChoose3: 'Сертифицированные материалы и аккуратная сдача зоны работ',
    whyChoose4: 'Мастера с опытом от 10 лет в Эстонии и Скандинавии',
    warningTitle: 'ВНИМАНИЕ!',
    warningText: 'Гарантия не распространяется на устранение засоров.',
    warningText2: 'Мы выполняем как мелкие, так и крупные аварийные работы, независимо от сложности.',
    priceService1: 'Санитарно-технические работы',
    priceService3: 'Сварка PEM-труб',
    priceService4: 'Инспекция труб камерой',
    priceService5: 'Промыв отопительной системы',
    priceService6: 'Чистка теплообменников',
    priceService7: 'Опрессовка трубопроводов',
    priceService8: 'Опрессовка отопительной системы и теплоузла',
    priceService9: 'Мойка внутридомовых труб горячей водой под давлением до 75 бар',
    priceService10: 'Гидродинамическая промывка канализационных систем',
    priceService11: 'Очистка жироуловителей и пескоуловителей',
    priceService12: 'К цене добавляется стоимость утилизации',
    priceService13: 'Размораживание пластмассовых труб',
    priceService14: 'Размораживание металлических труб',
    priceService15: 'Тариф за пределы Таллинна',
    priceService16: 'Вакуумная прочистка',
    priceService17: 'Прочистка засоров Rothenberger 16 мм',
    priceService18: 'Прочистка засоров Rothenberger 22 мм',
    priceFrom: 'От',
    pricePerHour: '/ час',
    pricePerKm: '/ км',
    pricePerM3: '/ 1 м3',
    menu: 'Меню',
    formSuccess: 'Спасибо! Мы свяжемся с вами в ближайшее время.',
    formError: 'Ошибка при отправке. Пожалуйста, попробуйте снова или позвоните напрямую.',
    formSending: 'Отправляется...',
    faq: 'FAQ',
    faqTitle: 'Часто Задаваемые Вопросы',
    faqSubtitle: 'Ответы на все ваши вопросы',
    faq1Question: 'Как быстро вы можете приехать?',
    faq1Answer: 'На аварийные звонки обычно реагируем за 30–60 минут. Выезд бесплатный в пределах Таллина. Время плановых работ согласуем отдельно.',
    faq2Question: 'Какие у вас цены?',
    faq2Answer:
      'Стоимость по прайсу (ориентир от 25 €/ч в зависимости от услуги). Выезд в Таллине — 0 €. Итог зависит от объёма — смотрите прайс-лист.',
    faq3Question: 'Есть ли у вас гарантия?',
    faq3Answer: 'Да — на работы действует гарантия 2 года. При повторе проблемы приедем устранить без доплаты.',
    faq4Question: 'Какие районы вы обслуживаете?',
    faq4Answer:
      'Работаем по районам Таллина (Кесклинн, Ласнамяэ, Мустамяэ, Пирита, Виймси) и по волостям Харьюмаа — Маарду, Кейла, Сауэ, Раэ, Саку, Харку, Йыелахтме, Кили, Косе, Анижа. Уточните адрес при звонке.',
    faq5Question: 'Работаете ли вы круглосуточно?',
    faq5Answer: 'Да — для аварийных вызовов доступны круглосуточно. Плановые работы обычно выполняем с 8:00 до 20:00.',
    faq6Question: 'Какие способы оплаты принимаются?',
    faq6Answer: 'Принимаем наличные, карты и перевод. На крупных объектах условия оплаты согласуются с диспетчером.',
    faq7Question: 'Делаете ли вы бесплатную оценку?',
    faq7Answer: 'Да — мастер может приехать, оценить ситуацию и назвать ориентировочную цену без обязательства заказа.',
    faq8Question: 'Есть ли у вас страховка?',
    faq8Answer: 'Да — работы застрахованы; страховка защищает клиента и объект во время выезда торуаби.',
    faq9Question: 'Как заказать сантехника в Ласнамяэ, Мустамяэ или Кесклинне?',
    faq9Answer: 'Для заказа сантехника позвоните нам по телефону +372 5633 3332. Мы предоставляем услуги сантехника в Ласнамяэ, Мустамяэ и Кесклинне. Наш сантехник приедет в течение 30-60 минут. Выезд бесплатный в пределах Таллина.',
    faq10Question: 'Какая средняя продолжительность работы сантехника?',
    faq10Answer: 'Средняя продолжительность работы сантехника зависит от типа проблемы. Простые работы сантехника (например, ремонт кранов) могут занять 30-60 минут. Работы по канализации и устранение засоров могут занять 1-3 часа. Крупные проекты сантехника могут занять несколько часов или дней. Наш сантехник даст точную оценку перед началом работы.',
    faq11Question: 'Делаете ли вы работы сантехника ночью?',
    faq11Answer: 'Да, мы предоставляем услуги аварийного сантехника 24/7, включая ночное время. Если у вас аварийная ситуация (например, протечка воды, засор канализации или поломка бойлера), мы можем приехать и ночью. Ночные работы сантехника доступны во всех районах Таллина.',
    faq12Question: 'Какие самые распространенные проблемы сантехника в Таллине?',
    faq12Answer: 'Самые распространенные проблемы сантехника в Таллине - это засоры канализации, поломки бойлеров, протечки кранов и проблемы с системами отопления. В старых зданиях (особенно в панельных домах в Ласнамяэ) распространены устаревшие трубопроводы, требующие ремонта. В новостройках в Мустамяэ и Кесклинне частые проблемы связаны с обслуживанием бойлеров и гидродинамической промывкой канализации.',
    faq13Question: 'Предоставляете ли вы услуги сантехника для предприятий?',
    faq13Answer: 'Да, мы предоставляем услуги сантехника как частным лицам, так и предприятиям. Наш сантехник занимается работами в коммерческих объектах, включая рестораны, кафе, офисы и производственные предприятия. Мы также предлагаем договоры на обслуживание для КУ и предприятий.',
    faq14Question: 'Как выбрать правильного сантехника?',
    faq14Answer: 'При выборе правильного сантехника стоит обратить внимание на следующие вещи: опыт и квалификация, предоставление гарантии (у нас 2 года гарантии), быстрое время реагирования (у нас 30-60 минут), разумные цены и положительные отзывы клиентов. Наш сантехник опытный и квалифицированный, предоставляет 2 года гарантии и доступен 24/7.',
    faq15Question: 'Делаете ли вы работы сантехника в старых зданиях?',
    faq15Answer: 'Да, наш сантехник специализируется на работе как в старых, так и в новых зданиях. В старых зданиях (особенно в панельных домах в Ласнамяэ) у нас большой опыт ремонта устаревших трубопроводов. Мы знаем, как работать со старыми трубопроводами без крупных ремонтов. Мы также предлагаем консультации по реконструкции трубопроводов в старых зданиях.',
    faqCtaTitle: 'Не нашли ответ на свой вопрос?',
    faqCtaText: 'Позвоните нам, и мы ответим на все ваши вопросы!',
    cookieText: 'Мы используем файлы cookie для улучшения вашего пользовательского опыта. Продолжая использовать наш веб-сайт, вы соглашаетесь на использование файлов cookie.',
    cookiePolicy: 'Политика конфиденциальности',
    cookieAccept: 'Принять',
    cookieDecline: 'Отклонить',
    promoTitle: 'Спецпредложение',
    promoText:
      'Скидка <strong class="promotion-banner__highlight">50%</strong> на все услуги до конца месяца!',
    promoSubtext: 'Бесплатный выезд в Таллине • мастер обычно за 30–60 мин',
    privacyTitle: 'Политика конфиденциальности',
    privacySubtitle: 'Как мы защищаем ваши персональные данные',
    privacySection1Title: '1. Общая информация',
    privacySection1Text: 'toruabii.ee (далее "мы", "наш", "наш веб-сайт") защищает вашу конфиденциальность и персональные данные. Эта политика конфиденциальности объясняет, как мы собираем, используем, храним и раскрываем ваши персональные данные при использовании нашего веб-сайта.\n\nНаш веб-сайт принадлежит и управляется toruabii.ee. Наши контактные данные доступны на веб-сайте.',
    privacySection2Title: '2. Собираемые данные',
    privacySection2Text: 'Мы собираем следующие типы данных:\n\n• Контактные данные: имя, номер телефона, адрес электронной почты (если вы предоставляете их через форму обратной связи)\n• Технические данные: IP-адрес, тип браузера, информация об устройстве, посещенные страницы, время и дата посещения\n• Файлы cookie: наш веб-сайт использует файлы cookie для улучшения пользовательского опыта и анализа использования веб-сайта',
    privacySection3Title: '3. Использование данных',
    privacySection3Text: 'Мы используем собранные данные для следующих целей:\n\n• Обработка ваших запросов и обратной связи\n• Предоставление и улучшение услуг\n• Общение с вами по поводу услуг\n• Анализ и улучшение веб-сайта\n• Выполнение юридических обязательств',
    privacySection4Title: '4. Хранение данных',
    privacySection4Text: 'Мы храним ваши персональные данные только столько времени, сколько необходимо для достижения целей, для которых данные были собраны, или столько, сколько требуется по закону.\n\nЕсли вы хотите, чтобы мы удалили ваши данные, свяжитесь с нами.',
    privacySection5Title: '5. Передача данных',
    privacySection5Text: 'Мы не продаем, не сдаем в аренду и не передаем ваши персональные данные третьим лицам, за исключением:\n\n• Когда это требуется по закону\n• Когда это необходимо для предоставления наших услуг (например, услуги защиты данных)\n• С вашего явного согласия',
    privacySection6Title: '6. Ваши права',
    privacySection6Text: 'Вы имеете право:\n\n• Доступ к вашим персональным данным\n• Требовать исправления или удаления ваших данных\n• Возражать против обработки ваших данных\n• Портативность данных\n• Отозвать согласие на обработку данных\n\nДля использования этих прав свяжитесь с нами.',
    privacySection7Title: '7. Файлы cookie',
    privacySection7Text: 'Наш веб-сайт использует файлы cookie для улучшения пользовательского опыта. Файлы cookie - это небольшие текстовые файлы, которые сохраняются на вашем устройстве.\n\nВы можете контролировать или удалять файлы cookie в настройках вашего браузера. Обратите внимание, что некоторые функции веб-сайта могут работать неправильно, если файлы cookie отключены.',
    privacySection8Title: '8. Изменения в политике конфиденциальности',
    privacySection8Text: 'Мы имеем право изменять эту политику конфиденциальности в любое время. Изменения вступают в силу сразу после их публикации на веб-сайте.\n\nМы рекомендуем вам периодически просматривать эту страницу, чтобы быть в курсе изменений в нашей политике конфиденциальности.',
    privacySection9Title: '9. Контакты',
    privacySection9Text: 'Если у вас есть вопросы об этой политике конфиденциальности или вы хотите воспользоваться своими правами, свяжитесь с нами.',
    privacyCtaTitle: 'Нужна помощь?',
    privacyCtaText: 'Свяжитесь с нами, если у вас есть вопросы о политике конфиденциальности!',
    lastUpdated: 'Информация обновлена: апрель 2026',
    pricingSectionTitle: 'Цены и обратная связь',
    serviceAreas: 'Районы обслуживания',
    lastUpdate: 'Информация обновлена:',
    lasnamae: 'Сантехник в Ласнамяэ',
    mustamae: 'Сантехник в Мустамяэ',
    kesklinn: 'Сантехник в Кесклинне',
    pirita: 'Сантехник в Пирита',
    viimsi: 'Сантехник в Виймси',
  },
};

function updateContent(lang: string) {
  currentLang = lang;
  const data = langData[lang];
  const elements = document.querySelectorAll<HTMLElement>('[data-lang]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-lang');
    if (key && data?.[key]) {
      if (el.tagName === 'INPUT' && (el as HTMLInputElement).type?.match(/^(text|tel|search)$/)) {
        (el as HTMLInputElement).placeholder = data[key];
      } else if (el.tagName === 'LABEL') {
        el.textContent = data[key];
      } else if (key === 'promoText') {
        el.innerHTML = data[key];
      } else {
        el.textContent = data[key];
      }
    }
  });
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  const legalEl = document.getElementById('footer-legal-line');
  if (legalEl) {
    const legal = lang === 'ru' ? footerLegalLineRu() : footerLegalLineEt();
    legalEl.textContent = legal;
    legalEl.classList.toggle('hidden', !legal);
  }
}

function initializeLanguage() {
  let pathNorm = '/';
  let searchLang: string | null = null;
  try {
    pathNorm = window.location.pathname.replace(/\/$/, '') || '/';
    searchLang = new URLSearchParams(window.location.search).get('lang');
  } catch {
    /* ignore */
  }
  /** RU-prefixed paths are always Russian. */
  let lang: string;
  if (pathNorm === '/ru' || pathNorm.startsWith('/ru/')) {
    lang = 'ru';
  } else if (pathNorm === '/') {
    lang = 'et';
  } else {
    lang = 'et';
  }

  currentLang = lang;
  updateContent(currentLang);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeLanguage);
} else {
  initializeLanguage();
}
setTimeout(initializeLanguage, 100);

function toggleLanguage(e?: Event) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  const newLang = currentLang === 'et' ? 'ru' : 'et';

  let pathNorm = '/';
  let search = '';
  let hash = '';
  try {
    pathNorm = window.location.pathname.replace(/\/$/, '') || '/';
    search = window.location.search;
    hash = window.location.hash;
  } catch {
    updateContent(newLang);
    return;
  }

  const params = new URLSearchParams(search);
  params.delete('lang');

  // Home: canonical ET at `/`, RU at `/ru` (no ?lang=ru).
  if (pathNorm === '/') {
    if (newLang === 'ru') {
      window.location.assign(`/ru${params.toString() ? `?${params}` : ''}${hash}`);
      return;
    }
    updateContent('et');
    const nextSearch = params.toString();
    window.history.replaceState(null, '', `/${nextSearch ? `?${nextSearch}` : ''}${hash}`);
    return;
  }
  if (pathNorm === '/ru') {
    if (newLang === 'et') {
      window.location.assign(`/${params.toString() ? `?${params}` : ''}${hash}`);
      return;
    }
    updateContent('ru');
    const nextSearch = params.toString();
    window.history.replaceState(null, '', `/ru${nextSearch ? `?${nextSearch}` : ''}${hash}`);
    return;
  }

  const isRuPrefixed = pathNorm === '/ru' || pathNorm.startsWith('/ru/');
  const etPath = isRuPrefixed
    ? pathNorm === '/ru'
      ? '/'
      : pathNorm.replace(/^\/ru/, '')
    : pathNorm;
  const ruPath = etPath === '/' ? '/ru' : `/ru${etPath}`;
  const targetPath = newLang === 'ru' ? ruPath : etPath;
  const nextSearch = params.toString();
  const target = `${targetPath}${nextSearch ? `?${nextSearch}` : ''}${hash}`;
  window.location.assign(target);
}

function setupLanguageToggles() {
  const langToggle = document.getElementById('lang-toggle');
  const langToggleMobile = document.getElementById('lang-toggle-mobile');
  const bindToggle = (el: HTMLElement | null) => {
    if (!el || el.tagName === 'A') return;
    el.onclick = null;
    el.addEventListener('click', toggleLanguage, true);
    el.onclick = toggleLanguage as unknown as (this: HTMLElement, ev: MouseEvent) => void;
  };
  bindToggle(langToggle);
  bindToggle(langToggleMobile);
  const handleDelegatedClick = (e: Event) => {
    const control = (e.target as Element).closest('#lang-toggle, #lang-toggle-mobile');
    if (!control || control.tagName === 'A') return;
    toggleLanguage(e);
  };
  if ((window as unknown as { _langDelegationHandler?: (e: Event) => void })._langDelegationHandler) {
    document.removeEventListener('click', (window as unknown as { _langDelegationHandler: (e: Event) => void })._langDelegationHandler, true);
  }
  (window as unknown as { _langDelegationHandler: (e: Event) => void })._langDelegationHandler = handleDelegatedClick;
  document.addEventListener('click', handleDelegatedClick, true);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupLanguageToggles);
} else {
  setupLanguageToggles();
}
window.addEventListener('load', setupLanguageToggles);
setTimeout(setupLanguageToggles, 100);
setTimeout(setupLanguageToggles, 500);

(window as unknown as { langData: typeof langData; updateContent: typeof updateContent; currentLang: string }).langData = langData;
(window as unknown as { updateContent: typeof updateContent }).updateContent = updateContent;
(window as unknown as { currentLang: string }).currentLang = currentLang;
