import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shaenfre.github.io',
  base: '/website',   // ← add this line
  output: 'static',
});