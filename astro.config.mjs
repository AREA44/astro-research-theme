import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.CI ? "https://area44.github.io" : `http://localhost:3000`,
  base: process.env.CI ? "/astro-research-theme" : undefined,
});
