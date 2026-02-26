"use client";

import { motion } from "framer-motion";
import { ExternalLink, Trophy } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { involvement, type Involvement } from "@/data/portfolio";

function InvolvementCard({ item }: { item: Involvement }) {
  const Wrapper = item.link ? motion.a : motion.div;
  const wrapperProps = item.link
    ? {
        href: item.link,
        target: "_blank" as const,
        rel: "noopener noreferrer",
        whileHover: { y: -4 },
        transition: { type: "spring" as const, stiffness: 400, damping: 28 },
      }
    : {
        whileHover: { y: -2 },
        transition: { type: "spring" as const, stiffness: 400, damping: 28 },
      };

  if (item.award) {
    return (
      <Wrapper
        {...wrapperProps}
        className="group relative flex flex-col h-full border border-amber-500/30 rounded-2xl bg-amber-500/[0.04] p-6 hover:border-amber-400/50 hover:bg-amber-500/[0.07] transition-colors duration-300 overflow-hidden"
      >
        {/* Gold corner glow */}
        <div
          className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%)",
            filter: "blur(16px)",
          }}
        />

        <div className="relative flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-1">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-amber-400 shrink-0" />
              <h3 className="text-base font-semibold text-amber-200 leading-snug">
                {item.title}
              </h3>
            </div>
            {item.link && (
              <ExternalLink className="h-3.5 w-3.5 text-amber-500/40 group-hover:text-amber-400 transition-colors shrink-0 mt-0.5" />
            )}
          </div>

          <p className="text-sm font-medium text-amber-400/80 mb-3">
            {item.organization}
          </p>

          <p className="text-sm text-white/40 leading-relaxed flex-1 mb-4">
            {item.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between gap-3 mt-auto">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium text-amber-300/70 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            {item.dates && (
              <span className="text-[10px] font-medium text-white/25 whitespace-nowrap shrink-0 tabular-nums">
                {item.dates}
              </span>
            )}
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative flex flex-col h-full border border-white/[0.07] rounded-2xl bg-white/[0.025] p-6 hover:border-violet-500/25 hover:bg-white/[0.04] transition-colors duration-300 overflow-hidden"
    >
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
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="text-base font-semibold text-white leading-snug">
            {item.title}
          </h3>
          {item.link && (
            <ExternalLink className="h-3.5 w-3.5 text-white/20 group-hover:text-violet-400 transition-colors shrink-0 mt-0.5" />
          )}
        </div>

        <p className="text-sm font-medium text-violet-400 mb-3">
          {item.organization}
        </p>

        <p className="text-sm text-white/40 leading-relaxed flex-1 mb-4">
          {item.description}
        </p>

        <div className="flex items-center justify-between gap-3 mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium text-violet-300/60 bg-violet-500/10 border border-violet-500/15 px-2 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          {item.dates && (
            <span className="text-[10px] font-medium text-white/25 whitespace-nowrap shrink-0 tabular-nums">
              {item.dates}
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export function Involvement() {
  return (
    <section id="involvement" className="py-28 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Community
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Leadership & Involvement
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {involvement.map((item, i) => (
            <FadeIn key={`${item.title}-${item.organization}`} delay={i * 0.08}>
              <InvolvementCard item={item} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
