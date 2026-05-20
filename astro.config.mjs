import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import partytown from '@astrojs/partytown';

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
    },
  },
  integrations: [
    tailwind(),
    partytown({ config: { forward: ['dataLayer.push'] } }),
  ],
  output: 'static',
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
    },
    server: {
      fs: {
        allow: ['.'],
      },
    },
  },
});
