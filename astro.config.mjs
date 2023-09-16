import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://area44.github.io',
  base: process.env.CI ? '/astro-research-theme' : undefined,
})
