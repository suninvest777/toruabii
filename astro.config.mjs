import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      TELEGRAM_BOT_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      TELEGRAM_CHAT_ID: envField.string({
        context: 'server',
        access: 'secret',
        optional: true,
      }),
      PUBLIC_GA4_MEASUREMENT_ID: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
      PUBLIC_AHREFS_ANALYTICS_KEY: envField.string({
        context: 'client',
        access: 'public',
        optional: true,
      }),
    },
  },
  integrations: [
    tailwind(),
  ],
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
    platformProxy: { enabled: process.env.CLOUDFLARE_PLATFORM_PROXY === '1' },
  }),
  build: {
    inlineStylesheets: 'auto',
  },
  site: 'https://toruabii.ee',
  compressHTML: true,
  server: {
    host: true,
    port: 4322,
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
      target: 'es2020',
      assetsInlineLimit: 4096,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('language-switcher')) return 'lang';
          },
        },
      },
    },
    server: {
      fs: {
        allow: ['.'],
      },
    },
  },
});
