// Types and helpers safe to import from client components (no node:fs).

export type PostMeta = {
  slug: string;
  title: string;
  /** ISO date string, e.g. "2026-09-24" */
  date: string;
  summary: string;
  tags: string[];
  /** e.g. "Essay", "Notes", "Tutorial", "Paper" */
  type?: string;
  /** Path under /public (e.g. "/writing/my-paper.pdf") — embedded + downloadable */
  pdf?: string;
  /** If the piece lives elsewhere (Medium, Substack, arXiv), link straight to it */
  externalUrl?: string;
  /** Drafts show up in `npm run dev` but never in production builds */
  draft: boolean;
  readingMinutes: number;
};

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
