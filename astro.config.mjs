import { defineConfig } from 'astro/config';

export default defineConfig({
  // 🔧 Replace with your GitHub Pages URL:
  // If deploying to https://yourusername.github.io  → site: 'https://yourusername.github.io', no base needed
  // If deploying to https://yourusername.github.io/portfolio → add base: '/portfolio'
  site: 'https://yourusername.github.io',
  output: 'static',
});
