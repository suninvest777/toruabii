# Quick Setup Guide

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Update Phone Number**
   - Edit `src/pages/index.astro` (line 7)
   - Edit `src/components/StickyCTA.astro` (line 3)
   - Edit `src/components/CallbackForm.astro` (line 53)
   - Edit `src/layouts/BaseLayout.astro` (line 32) - Schema.org data

3. **Configure Form Endpoint**
   - Edit `src/components/CallbackForm.astro` (line 3)
   - Replace `YOUR_FORM_ID` with your Formspree form ID
   - Or update to your own API endpoint

4. **Run Development Server**
   ```bash
   npm run dev
   ```

5. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Key Files to Customize

- **Phone Number**: Update in 4 locations (see step 2 above)
- **Form Endpoint**: `src/components/CallbackForm.astro`
- **Business Info**: `src/layouts/BaseLayout.astro` (Schema.org)
- **Colors**: `tailwind.config.mjs` (if needed)
- **Content**: `src/pages/index.astro`

## 🎨 Design System

- Emergency Red: `#dc2626` - CTAs
- Trust Blue: `#0a2540` - Headings
- Caution Yellow: `#ffc107` - Highlights

## 🌐 Language Support

The site automatically detects and saves language preference. Both Estonian (EE) and Russian (RU) are fully supported.

## 📱 Mobile Optimization

- Sticky CTA bar appears on mobile only
- Touch-friendly buttons (44x44px minimum)
- Fast loading with critical CSS
- No heavy animations

## ✅ Pre-Launch Checklist

- [ ] Update phone number in all locations
- [ ] Configure form endpoint (Formspree or custom)
- [ ] Update Schema.org business data
- [ ] Test language switcher (EE/RU)
- [ ] Test mobile menu
- [ ] Test sticky CTA on mobile
- [ ] Verify all CTAs link to correct phone number
- [ ] Test callback form submission
- [ ] Check PageSpeed score
- [ ] Test on real mobile devices

## 🔍 SEO Checklist

- [ ] Update Schema.org data with real business info
- [ ] Add real business logo image
- [ ] Verify meta descriptions
- [ ] Test structured data with Google Rich Results Test
- [ ] Submit sitemap to Google Search Console

## 🚀 Deployment

The site is ready to deploy to:
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

Just run `npm run build` and deploy the `dist/` folder.
