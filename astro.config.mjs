// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://eric-schaefer.com',
  integrations: [mdx(), sitemap()],
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },
});
