# SEO улучшения для статей блога - план действий

## ✅ Уже выполнено для статьи "Küttesüsteem eramajas"

### 1. FAQ секция с FAQPage Schema
- Добавлена секция "Korduma kippuvad küsimused" с 5 вопросами
- Реализован FAQPage schema с вопросами и ответами
- Вопросы покрывают основные поисковые запросы

### 2. Улучшенная BlogPosting Schema
- Добавлены поля: `keywords`, `articleSection`, `wordCount`
- Улучшен `image` с ImageObject
- Добавлены `@id` для author и publisher
- Расширены keywords с географическими вариациями

### 3. Расширенный контент с ключевыми словами
- Добавлены вариации ключевых слов в тексте
- Больше географических упоминаний (Lasnamäe, Mustamäe, Kesklinn, Pirita, Viimsi)
- Добавлены внутренние ссылки на другие статьи
- Добавлена секция "Küttesüsteemi toruabi Tallinnas – miks valida meid?"

### 4. Улучшенная перелинковка
- Добавлены ссылки на страницы районов в тексте
- Добавлены ссылки на связанные статьи
- Улучшена навигация между статьями

## 📋 Что нужно применить к остальным статьям

### Для каждой статьи нужно добавить:

#### 1. FAQ секция (5 вопросов)
```astro
<!-- FAQ Section -->
<section class="bg-white rounded-lg shadow-lg p-6 mb-8">
  <h2 class="text-2xl md:text-3xl font-bold text-trust-blue mb-6">
    Korduma kippuvad küsimused [ТЕМА] kohta Tallinnas
  </h2>
  <div class="space-y-4">
    <!-- 5 вопросов с ответами -->
  </div>
</section>
```

#### 2. FAQPage Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    // 5 вопросов с ответами
  ]
}
```

#### 3. Улучшенная BlogPosting Schema
- Добавить `keywords` с вариациями ключевых слов
- Добавить `articleSection`
- Добавить `wordCount`
- Улучшить `image` с ImageObject

#### 4. Расширенный контент
- Добавить больше географических упоминаний
- Добавить вариации ключевых слов естественным образом
- Добавить секцию "Miks valida meid?" с преимуществами

#### 5. Улучшенная перелинковка
- Добавить ссылки на страницы районов в тексте
- Добавить больше ссылок на связанные статьи
- Добавить ссылки на главную страницу и услуги

## 🎯 Приоритетные ключевые слова для каждой статьи

### Küttesüsteem eramajas
- küttesüsteem eramajas Tallinnas
- küttesüsteemi paigaldus Tallinnas
- küttesüsteemi remont Tallinnas
- küttesüsteemi hooldus Tallinnas
- küttesüsteemi toruabi 24/7
- küttesüsteemi torumees Lasnamäes/Mustamäel/Kesklinnas

### Kollektorigrupp
- kollektorigrupp küttesüsteemis
- kollektorigrupi paigaldus Tallinnas
- kollektorsüsteem Tallinnas
- kollektorigrupi remont

### Radiaatori valik
- radiaatori valik Tallinnas
- radiaatorite paigaldus Tallinnas
- radiaatorite remont Tallinnas
- radiaatorite hooldus Tallinnas

### Tsirkulatsioonipump
- tsirkulatsioonipump küttesüsteemis
- tsirkulatsioonipumba paigaldus Tallinnas
- tsirkulatsioonipumba remont Tallinnas

### И так далее для каждой статьи...

## 📊 Метрики для отслеживания

1. **Позиции в Google**
   - Отслеживать позиции по основным ключевым словам
   - Использовать Google Search Console

2. **Трафик**
   - Органический трафик на статьи
   - CTR из поиска
   - Время на странице

3. **Конверсии**
   - Звонки с блога
   - Заявки через форму

## 🚀 Дополнительные улучшения

### 1. Добавить HowTo Schema для практических инструкций
Для статей с пошаговыми инструкциями добавить HowTo schema.

### 2. Добавить VideoObject Schema
Если будут видео, добавить VideoObject schema.

### 3. Улучшить изображения
- Добавить больше изображений в статьи
- Оптимизировать alt-теги с ключевыми словами
- Добавить ImageObject schema для всех изображений

### 4. Добавить BreadcrumbList Schema
Улучшить BreadcrumbList schema с более детальной структурой.

### 5. Добавить Article schema
Добавить Article schema в дополнение к BlogPosting.

## 📝 Чеклист для каждой статьи

- [ ] FAQ секция с 5 вопросами
- [ ] FAQPage Schema
- [ ] Улучшенная BlogPosting Schema (keywords, articleSection, wordCount)
- [ ] Расширенный контент с ключевыми словами
- [ ] Географические упоминания (Lasnamäe, Mustamäe, Kesklinn, Pirita, Viimsi)
- [ ] Секция "Miks valida meid?"
- [ ] Ссылки на страницы районов в тексте
- [ ] Ссылки на связанные статьи
- [ ] Улучшенные alt-теги для изображений
- [ ] Проверка на ошибки линтера
