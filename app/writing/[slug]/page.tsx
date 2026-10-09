import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Download, ExternalLink } from "lucide-react";
import { Background } from "@/components/Background";
import { Markdown } from "@/components/writing/Markdown";
import { ShareButtons } from "@/components/writing/ShareButtons";
import { WritingHeader } from "@/components/writing/WritingHeader";
import { siteConfig } from "@/data/portfolio";
import { formatDate, getAllPosts, getPost } from "@/lib/writing";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  // External posts link straight out, so they don't get a page here
  return getAllPosts()
    .filter((p) => !p.externalUrl)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: `${post.title} — ${siteConfig.name}`,
    description: post.summary,
    authors: [{ name: siteConfig.name }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.name],
      tags: post.tags,
    },
    twitter: { card: "summary", title: post.title, description: post.summary },
  };
}

export default async function PostPage({ params }: Props) {
  const post = getPost((await params).slug);
  if (!post || post.externalUrl) notFound();

  return (
    <>
      <Background />
      <WritingHeader backHref="/writing" backLabel="All writing" />
      <main className="relative z-10 px-6 lg:px-10 pt-14 pb-28">
        <article className="max-w-3xl mx-auto">
          <header className="mb-10 pb-8 border-b border-white/[0.07]">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-white/40 mb-4 tabular-nums">
              {post.type && (
                <>
                  <span className="uppercase tracking-widest text-violet-400">{post.type}</span>
                  <span aria-hidden="true">·</span>
                </>
              )}
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readingMinutes} min read</span>
              {post.draft && (
                <span className="text-amber-300/80 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded">
                  Draft — hidden in production
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            {post.summary && (
              <p className="text-lg text-white/50 leading-relaxed mb-6">{post.summary}</p>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium text-violet-300/70 bg-violet-500/10 border border-violet-500/15 px-2 py-0.5 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ShareButtons title={post.title} />
            </div>
          </header>

          {post.pdf && (
            <section className="mb-10" aria-label="PDF document">
              <div className="flex flex-wrap gap-2 mb-3">
                <a
                  href={post.pdf}
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white transition-all"
                >
                  <Download className="h-3.5 w-3.5" /> Download PDF
                </a>
                <a
                  href={post.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all"
                >
                  <ExternalLink className="h-3.5 w-3.5" /> Open in new tab
                </a>
              </div>
              {/* Mobile browsers often can't embed PDFs, so the buttons above are the fallback */}
              <iframe
                src={post.pdf}
                title={`${post.title} (PDF)`}
                className="hidden sm:block w-full h-[80vh] rounded-xl border border-white/[0.08] bg-white"
              />
            </section>
          )}

          {post.content.trim() && <Markdown content={post.content} />}

          <footer className="mt-16 pt-8 border-t border-white/[0.07] flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              Written by <span className="text-white/70">{siteConfig.name}</span>
            </p>
            <ShareButtons title={post.title} />
          </footer>
        </article>
      </main>
    </>
  );
}
