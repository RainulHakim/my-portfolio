import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { PostCard } from "@/components/writing/PostCard";
import type { PostMeta } from "@/lib/writing-shared";

const HOME_LIMIT = 4;

export function Writing({ posts }: { posts: PostMeta[] }) {
  if (posts.length === 0) return null;

  return (
    <section id="writing" className="py-28 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
                Writing
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Notes on CS & AI
              </h2>
            </div>
            <Link
              href="/writing"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-white/50 hover:text-white transition-colors"
            >
              All writing
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {posts.slice(0, HOME_LIMIT).map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.08} className="h-full">
              <PostCard post={post} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
