import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://anouarlab.fr',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap({
    filter: (page) =>
      !page.includes('/blog/tag/') &&
      !page.match(/\/blog\/\d+\//) &&
      !page.includes('/merci/'),
    serialize: (item) => {
      // Add lastmod to all pages
      item.lastmod = new Date().toISOString().split('T')[0];
      return item;
    }
  }), tailwind()]
});