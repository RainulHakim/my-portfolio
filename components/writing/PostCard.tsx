import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { formatDate, type PostMeta } from "@/lib/writing-shared";

export function PostCard({ post }: { post: PostMeta }) {
  const external = Boolean(post.externalUrl);
  const href = post.externalUrl ?? `/writing/${post.slug}`;

  const body = (
    <>
      {/* Corner glow */}
      <div
        className="absolute -top-8 -right-8 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)",
          filter: "blur(16px)",
        }}
      />

      <div className="relative flex-1 flex flex-col">
        <div className="flex items-center gap-2 text-[11px] font-medium text-white/35 mb-3 tabular-nums">
          {post.type && (
            <span className="uppercase tracking-widest text-violet-400/90">
              {post.type}
            </span>
          )}
          {post.type && <span aria-hidden="true">·</span>}
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingMinutes} min read</span>
          {post.draft && (
            <span className="ml-auto text-amber-300/80 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded">
              Draft
            </span>
          )}
        </div>

        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-base font-semibold text-white leading-snug group-hover:text-violet-200 transition-colors">
            {post.title}
          </h3>
          <ArrowUpRight
            className={`h-4 w-4 shrink-0 mt-0.5 text-white/20 group-hover:text-violet-400 transition-all ${
              external ? "" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            }`}
          />
        </div>

        {post.summary && (
          <p className="text-sm text-white/40 leading-relaxed flex-1 mb-4">
            {post.summary}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-1.5 mt-auto">
          {post.pdf && (
            <span className="inline-flex items-center gap-1 text-[10px] font-medium text-cyan-300/70 bg-cyan-500/10 border border-cyan-500/15 px-2 py-0.5 rounded-md">
              <FileText className="h-3 w-3" /> PDF
            </span>
          )}
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium text-violet-300/60 bg-violet-500/10 border border-violet-500/15 px-2 py-0.5 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  );

  const className =
    "group relative flex flex-col h-full border border-white/[0.07] rounded-2xl bg-white/[0.025] p-6 hover:border-violet-500/25 hover:bg-white/[0.04] transition-colors duration-300 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400";

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {body}
    </a>
  ) : (
    <Link href={href} className={className}>
      {body}
    </Link>
  );
}
