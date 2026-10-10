# Rainul Hakim — Portfolio

Personal portfolio built with Next.js (App Router), Tailwind CSS v4, and framer-motion.

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
```

Most portfolio content (projects, experience, involvement, skills) lives in `data/portfolio.ts`.

## Publishing writing

Posts live in `content/writing/` as Markdown files and show up on the home page and at `/writing`.

1. Copy `content/writing/_template.md` to `content/writing/<your-slug>.md`. The filename becomes the URL (`/writing/<your-slug>`).
2. Fill in the frontmatter (`title`, `date`, `summary`, `tags`, and optionally `type`), then write the post in Markdown.
3. Set `draft: false` when it's ready. Drafts only appear in `npm run dev`.
4. Commit and push. The page is generated at build time, with link previews for LinkedIn and X.

Supported in posts: GitHub-flavored Markdown (tables, task lists), syntax-highlighted code blocks, and LaTeX math (`$inline$` and `$$block$$`).

**PDFs** (papers, reports, slides): put the file in `public/writing/` and add `pdf: "/writing/file.pdf"` to the frontmatter. The post page embeds the PDF and adds a download button. The Markdown body can be empty or hold an abstract.

**Posted somewhere else** (Medium, Substack, arXiv): add `externalUrl: "https://..."`. The card links straight there and no local page is created.

**Images:** put them in `public/writing/` and reference them as `![alt](/writing/image.png)`.

`content/writing/example-post.md` is a draft formatting reference. Delete it whenever you like.
