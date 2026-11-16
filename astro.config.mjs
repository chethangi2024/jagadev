// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jagadevassociatesllp.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Redirects from the old website's .html pages live in public/_redirects (Netlify / Cloudflare Pages) and vercel.json
});
