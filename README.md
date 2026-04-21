# Portfolio

A minimal personal portfolio and blog built with [Astro](https://astro.build), deployed on GitHub Pages.

## Quick Start

```bash
npm install
npm run dev      # → http://localhost:4321
npm run build    # builds to /dist
```

## Personalising the Site

All the spots you need to update are marked with `🔧` in the source files:

| File | What to update |
|------|---------------|
| `src/layouts/Layout.astro` | Your name, GitHub URL, footer text |
| `src/pages/index.astro` | Your bio / intro |
| `src/pages/projects.astro` | Your projects list |
| `astro.config.mjs` | Your GitHub Pages URL |
| `public/favicon.svg` | Your favicon initial |

## Writing a New Article

1. Create a file in `src/pages/articles/your-post-slug.md`
2. Add frontmatter at the top:

```yaml
---
layout: ../../layouts/ArticleLayout.astro
title: "Your Post Title"
date: "2025-06-01"
description: "One sentence summary."
---
```

3. Write in Markdown below the frontmatter.

The article will automatically appear on the `/articles` page, sorted by date.

## Deploying to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages** in your repo
3. Under "Source", select **GitHub Actions**
4. Push any commit to `main` — the site will build and deploy automatically

### Custom Domain (optional)

1. Buy a domain and add a CNAME record pointing to `yourusername.github.io`
2. In **Settings → Pages**, enter your custom domain
3. Update `site` in `astro.config.mjs` to your domain URL
4. Add a `public/CNAME` file containing just your domain name, e.g. `yourname.com`
