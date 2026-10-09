import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github-dark.css";

/** Renders post Markdown: GFM tables/checklists, $math$, and highlighted code. */
export function Markdown({ content }: { content: string }) {
  return (
    <div className="prose prose-invert prose-violet max-w-none prose-headings:tracking-tight prose-headings:scroll-mt-24 prose-a:text-violet-300 prose-a:no-underline hover:prose-a:underline prose-pre:bg-white/[0.04] prose-pre:border prose-pre:border-white/[0.08] prose-code:before:content-none prose-code:after:content-none prose-img:rounded-xl">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeSlug, rehypeKatex, rehypeHighlight]}
        components={{
          a: ({ href, children, ...props }) => {
            const external = href?.startsWith("http");
            return (
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                {...props}
              >
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
