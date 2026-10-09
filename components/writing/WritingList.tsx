"use client";

import { useMemo, useState } from "react";
import { PostCard } from "@/components/writing/PostCard";
import type { PostMeta } from "@/lib/writing-shared";

/** Post grid with tag filter chips. */
export function WritingList({ posts }: { posts: PostMeta[] }) {
  const [tag, setTag] = useState<string | null>(null);

  const tags = useMemo(
    () => Array.from(new Set(posts.flatMap((p) => p.tags))).sort(),
    [posts]
  );
  const visible = tag ? posts.filter((p) => p.tags.includes(tag)) : posts;

  const chip = (active: boolean) =>
    `text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
      active
        ? "text-white bg-violet-500/20 border-violet-500/40"
        : "text-white/50 hover:text-white/80 bg-white/[0.03] border-white/[0.08] hover:border-white/20"
    }`;

  return (
    <>
      {tags.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter by tag">
          <button type="button" className={chip(tag === null)} onClick={() => setTag(null)} aria-pressed={tag === null}>
            All
          </button>
          {tags.map((t) => (
            <button
              key={t}
              type="button"
              className={chip(tag === t)}
              onClick={() => setTag(tag === t ? null : t)}
              aria-pressed={tag === t}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {visible.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}
