// @ts-check
import { defineConfig } from "astro/config";
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
});
