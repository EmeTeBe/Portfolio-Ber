// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({

  output: 'static',
  site: 'https://portfolio-ber.vercel.app/',
  prefetch: false,

  integrations: [
    tailwind(),
    sitemap()
  ]
});