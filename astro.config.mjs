// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { rehypeBaseUrls } from "./scripts/rehype-base-urls.mjs";

const site = process.env.ASTRO_SITE ?? "https://matthewgtran.com";
const base = process.env.ASTRO_BASE ?? "/";

export default defineConfig({
  site,
  base,
  output: "static",
  markdown: {
    rehypePlugins: [[rehypeBaseUrls, { base }]],
  },
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith("/404/") && !page.endsWith("/404"),
    }),
  ],
});
