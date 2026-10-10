import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { PostMeta } from "@/lib/writing-shared";

export type { PostMeta } from "@/lib/writing-shared";
export { formatDate } from "@/lib/writing-shared";

const WRITING_DIR = path.join(process.cwd(), "content", "writing");

export type Post = PostMeta & { content: string };

const showDrafts = process.env.NODE_ENV !== "production";

function readPost(file: string): Post {
  const slug = file.replace(/\.mdx?$/, "");
  const raw = fs.readFileSync(path.join(WRITING_DIR, file), "utf8");
  const { data, content } = matter(raw);

  if (!data.title || !data.date) {
    throw new Error(`content/writing/${file} needs a "title" and "date" in its frontmatter`);
  }

  const words = content.trim().split(/\s+/).filter(Boolean).length;

  return {
    slug,
    title: String(data.title),
    // gray-matter turns unquoted YYYY-MM-DD into a Date
    date:
      data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : String(data.date),
    summary: data.summary ? String(data.summary) : "",
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    type: data.type ? String(data.type) : undefined,
    pdf: data.pdf ? String(data.pdf) : undefined,
    externalUrl: data.externalUrl ? String(data.externalUrl) : undefined,
    draft: data.draft === true,
    readingMinutes: Math.max(1, Math.round(words / 230)),
    content,
  };
}

/** All visible posts, newest first. Files starting with "_" are ignored. */
export function getAllPosts(): Post[] {
  if (!fs.existsSync(WRITING_DIR)) return [];
  return fs
    .readdirSync(WRITING_DIR)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith("_"))
    .map(readPost)
    .filter((p) => showDrafts || !p.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostMetas(): PostMeta[] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return getAllPosts().map(({ content, ...meta }) => meta);
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
