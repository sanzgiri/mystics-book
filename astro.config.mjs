import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mystics-book.vercel.app',
  integrations: [mdx(), sitemap()],
  trailingSlash: 'ignore',
  // Six former profiles moved to the appendix (7 Nov 2026); keep their old URLs working.
  redirects: Object.fromEntries(
    ['nithyananda', 'ramdev', 'acharya-prashant', 'vethathiri', 'dada-bhagwan', 'siddharameshwar']
      .map((id) => [`/figures/${id}`, `/appendix/#${id}`]),
  ),
});
