// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// GitHub Pages sirve el sitio en https://jeikkopartist.github.io/Portfolio_Jeikkop_Artist/
// Si algún día se usa un dominio propio, cambia `site` y borra `base`.
export default defineConfig({
  site: 'https://jeikkopartist.github.io',
  base: '/Portfolio_Jeikkop_Artist',
  integrations: [sitemap(), icon()],
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Bricolage Grotesque',
      cssVariable: '--font-display',
      weights: ['400 800'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: ['400 700'],
      subsets: ['latin'],
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [500, 800],
      subsets: ['latin'],
      fallbacks: ['monospace'],
    },
  ],
});
