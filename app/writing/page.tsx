import type { Metadata } from "next";
import { Background } from "@/components/Background";
import { WritingHeader } from "@/components/writing/WritingHeader";
import { WritingList } from "@/components/writing/WritingList";
import { siteConfig } from "@/data/portfolio";
import { getPostMetas } from "@/lib/writing";

const description = `Essays, notes, and documentation on computer science and AI by ${siteConfig.name}.`;

export const metadata: Metadata = {
  title: `Writing — ${siteConfig.name}`,
  description,
  openGraph: { title: `Writing — ${siteConfig.name}`, description, type: "website" },
};

export default function WritingIndex() {
  const posts = getPostMetas();

  return (
    <>
      <Background />
      <WritingHeader backHref="/" backLabel="Portfolio" />
      <main className="relative z-10 px-6 lg:px-10 pt-16 pb-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
            Writing
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Notes on CS & AI
          </h1>
          <p className="text-white/45 max-w-2xl leading-relaxed mb-12">{description}</p>

          {posts.length === 0 ? (
            <p className="text-white/40 border border-white/[0.07] rounded-2xl bg-white/[0.025] p-8">
              First pieces coming soon.
            </p>
          ) : (
            <WritingList posts={posts} />
          )}
        </div>
      </main>
    </>
  );
}
