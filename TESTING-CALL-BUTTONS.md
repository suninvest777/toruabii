# Тестирование кнопок вызова

## Автоматическое тестирование

Скрипт отслеживания автоматически подключен на всех страницах через `BaseLayout.astro`.

### Проверка на страницах:

1. **Главная страница** (`/`)
   - Кнопка "HELISTA" в навигации
   - Большая кнопка "HELISTA KOHE" в hero секции
   - Кнопка в секции CTA
   - Кнопка в футере

2. **Страница цен** (`/hinnakiri`)
   - Кнопка в навигации
   - Кнопка в CTA секции
   - Кнопка в футере

3. **FAQ** (`/faq`)
   - Кнопка в навигации
   - Кнопка в CTA секции
   - Кнопка в футере

4. **Политика конфиденциальности** (`/privacy`)
   - Кнопка в навигации
   - Кнопка в CTA секции
   - Кнопка в футере

5. **Страницы районов:**
   - `/toruabi-lasnamae` - 4 кнопки
   - `/toruabi-mustamae` - 4 кнопки
   - `/toruabi-kesklinn` - 4 кнопки

6. **Блог:**
   - `/blog` - кнопки в статьях
   - `/blog/kanalisatsiooni-ummistus-mida-teha` - 2 кнопки
   - `/blog/boileri-hooldus-ja-loputus` - 2 кнопки

7. **Компоненты:**
   - `StickyCTA` - липкая кнопка на мобильных
   - `PromotionBanner` - кнопка в баннере акции
   - `CallbackForm` - ссылка на телефон

## Ручное тестирование

### Вариант 1: Через консоль браузера

1. Откройте любую страницу сайта
2. Откройте консоль браузера (F12)
3. Вставьте и выполните:

```javascript
// Загрузить тестовый скрипт
const script = document.createElement('script');
script.src = '/scripts/test-call-tracking.js';
document.head.appendChild(script);
```

Или просто откройте консоль и выполните:

```javascript
// Найти все кнопки вызова
const telLinks = document.querySelectorAll('a[href^="tel:"]');
console.log(`Найдено ${telLinks.length} кнопок вызова`);

// Симулировать клик на каждой кнопке
telLinks.forEach((link, index) => {
  console.log(`Тестирую кнопку ${index + 1}: ${link.getAttribute('href')}`);
  link.click();
});
```

### Вариант 2: Прямой тест API

Откройте консоль браузера и выполните:

```javascript
fetch('/api/track-call', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: window.location.href,
    userAgent: navigator.userAgent,
    timestamp: new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Tallinn' })
  })
})
.then(r => r.json())
.then(data => {
  console.log('✅ API ответ:', data);
  console.log('📱 Проверьте Telegram бот - должно прийти уведомление!');
})
.catch(err => console.error('❌ Ошибка:', err));
```

## Проверка работы

### Что должно произойти:

1. ✅ При клике на любую кнопку вызова отправляется запрос на `/api/track-call`
2. ✅ API отправляет уведомление в Telegram бот
3. ✅ В Telegram должно прийти сообщение с:
   - 📞 Заголовком "Клик на кнопку вызова"
   - 🌐 URL страницы
   - ⏰ Временем клика
   - 💻 Информацией об устройстве

### Проверка в режиме разработки:

В консоли браузера (на localhost) вы увидите логи:
- `📞 Call tracking initialized. Found X call button(s)...`
- `📞 Call button clicked - sending tracking data: {...}`
- `✅ Tracking data sent successfully`

### Проверка в продакшене:

1. Откройте сайт на продакшене
2. Нажмите на любую кнопку вызова
3. Проверьте Telegram бот - должно прийти уведомление

## Устранение проблем

### Если уведомления не приходят:

1. Проверьте консоль браузера на ошибки
2. Проверьте Network tab в DevTools - должен быть запрос к `/api/track-call`
3. Проверьте, что Telegram бот активен и chat_id правильный
4. Проверьте логи сервера на ошибки

### Если кнопки не отслеживаются:

1. Убедитесь, что скрипт `/scripts/track-call-clicks.js` загружен
2. Проверьте в консоли: `document.querySelectorAll('a[href^="tel:"]')` - должны быть найдены кнопки
3. Проверьте, что BaseLayout подключен на всех страницах

## Статистика

Всего кнопок вызова на сайте: **~30+**
- Главная: ~4 кнопки
- Каждая страница района: 4 кнопки
- FAQ/Hinnakiri/Privacy: по 3 кнопки
- Блог статьи: по 2 кнопки
- Компоненты: StickyCTA, PromotionBanner, CallbackForm
