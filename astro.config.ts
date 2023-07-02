import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import { defineConfig } from 'astro/config';
import { visualizer } from 'rollup-plugin-visualizer'; // https://astro.build/config

import sitemap from '@astrojs/sitemap'; // https://astro.build/config

import vercel from '@astrojs/vercel/static'; // https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), compress(), sitemap()],
  site: 'https://valiukasd.lt',
  vite: {
    plugins: [visualizer()],
    resolve: {
      alias: {
        'date-fns/locale': 'date-fns/locale/index.js',
      },
    },
  },
  output: 'server',
  adapter: vercel({
    analytics: true,
    imageService: true,
    imagesConfig: {
      sizes: [],
      domains: [],
    },
  }),
});
