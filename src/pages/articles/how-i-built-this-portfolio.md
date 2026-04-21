---
layout: ../../layouts/ArticleLayout.astro
title: "How I Built This Portfolio"
date: "2025-01-15"
description: "A walkthrough of setting up an Astro portfolio on GitHub Pages."
---

This is a sample article. Replace everything below with your own content. Articles are written in plain Markdown, which means you can focus on writing rather than formatting.

## Why Astro?

Astro is great for content-heavy sites because it ships zero JavaScript by default. The result is a fast, clean site that's easy to maintain.

You can write in plain Markdown with a small frontmatter block at the top for metadata:

```yaml
---
title: "Your Post Title"
date: "2025-01-15"
description: "A short summary for SEO and link previews."
---
```

## Adding a New Post

Just drop a new `.md` file in `src/pages/articles/`. Give it a filename that will become the URL slug — for example, `my-new-post.md` becomes `/articles/my-new-post`.

That's it. The articles page picks it up automatically.

## Markdown Features

You can use all standard Markdown:

- **Bold** and *italic* text
- `inline code` and code blocks
- Links, blockquotes, and images

> Blockquotes look like this.

And the site's typography handles them all well.
