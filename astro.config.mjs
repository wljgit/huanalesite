// @ts-check
import { defineConfig } from "astro/config";

// Static marketing site for Cloudflare Pages (connect this repo only).
export default defineConfig({
  site: "https://huanalesite.pages.dev",
  trailingSlash: "ignore",
});
