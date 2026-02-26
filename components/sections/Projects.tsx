"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { FadeIn } from "@/components/FadeIn";
import { projects, type Project } from "@/data/portfolio";

// ─── Browser preview ─────────────────────────────────────────────────────────
function BrowserPreview({ project }: { project: Project }) {
  const primaryUrl = project.additionalUrls?.[0]?.url ?? project.liveUrl;
  const displayUrl =
    project.liveUrl === "#"
      ? `${project.name.toLowerCase().replace(/\s+/g, "-")}.vercel.app`
      : project.liveUrl.replace("https://", "");

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-white/10"
      style={{ aspectRatio: "16/9" }}
    >
      {/* Gradient bg */}
      <div
        className="absolute inset-0"
        style={{ background: project.previewGradient }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-black/50 backdrop-blur-sm border-b border-white/[0.08] flex items-center gap-2.5 px-3.5 z-10">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 bg-white/[0.07] rounded h-5 flex items-center px-2.5 min-w-0">
          <span className="text-[10px] text-white/35 truncate">{displayUrl}</span>
        </div>
      </div>

      {/* Preview content */}
      {project.previewImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.previewImage}
          alt={`${project.name} preview`}
          className="absolute left-0 right-0 bottom-0 w-full object-cover"
          style={{ top: "32px", height: "calc(100% - 32px)" }}
        />
      ) : (
        <div className="absolute inset-0 pt-8 flex flex-col gap-2 p-5 opacity-35">
          <div className="h-2.5 w-2/3 bg-white/20 rounded" />
          <div className="h-2 w-1/2 bg-white/15 rounded" />
          <div className="mt-3 grid grid-cols-3 gap-2 flex-1">
            <div className="bg-white/10 rounded-lg" />
            <div className="bg-white/10 rounded-lg" />
            <div className="bg-white/10 rounded-lg" />
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded" />
          <div className="h-1.5 w-4/5 bg-white/10 rounded" />
        </div>
      )}

      {/* Visit overlay */}
      <a
        href={primaryUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 bg-black/55 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink className="h-5 w-5 text-white" />
        <span className="text-sm font-semibold text-white">Visit Site</span>
      </a>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  return (
    <section id="projects" className="py-28 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="flex flex-col lg:flex-row gap-4">

            {/* ── Left: project selector ── */}
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 lg:w-60 shrink-0 scrollbar-none">
              {projects.map((p, i) => (
                <button
                  key={p.name}
                  onClick={() => setActiveIndex(i)}
                  className={`group shrink-0 lg:w-full text-left p-3.5 rounded-xl border transition-all duration-200 ${
                    activeIndex === i
                      ? "border-violet-500/30 bg-violet-500/[0.08]"
                      : "border-white/[0.05] hover:border-white/[0.10] hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {/* Gradient accent bar */}
                    <div
                      className="w-[3px] h-9 rounded-full shrink-0 transition-opacity duration-200"
                      style={{
                        background: p.previewGradient.replace(
                          "linear-gradient(135deg,",
                          "linear-gradient(180deg,"
                        ),
                        opacity: activeIndex === i ? 1 : 0.35,
                      }}
                    />
                    <div className="min-w-0">
                      <div
                        className={`text-sm font-semibold truncate transition-colors duration-200 ${
                          activeIndex === i
                            ? "text-white"
                            : "text-white/50 group-hover:text-white/75"
                        }`}
                      >
                        {p.name}
                      </div>
                      <div className="text-[10px] text-white/28 truncate mt-0.5">
                        {p.tech.slice(0, 3).join(" · ")}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* ── Right: active project detail ── */}
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 10, filter: "blur(3px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -6, filter: "blur(3px)" }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="border border-white/[0.07] rounded-2xl bg-white/[0.025] p-5 sm:p-7 hover:border-violet-500/20 transition-colors duration-300"
                >
                  {/* Browser preview */}
                  <BrowserPreview project={active} />

                  {/* Details */}
                  <div className="mt-6">
                    {/* Name + links row */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {active.name}
                      </h3>

                      <div className="flex items-center gap-1.5 shrink-0 flex-wrap justify-end">
                        {active.additionalUrls ? (
                          active.additionalUrls.map((u) => (
                            <a
                              key={u.url}
                              href={u.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-violet-400/80 hover:text-violet-300 border border-violet-500/20 hover:border-violet-500/40 bg-violet-500/[0.06] hover:bg-violet-500/10 px-2.5 py-1.5 rounded-lg transition-all"
                            >
                              <ExternalLink className="h-3 w-3" />
                              {u.label}
                            </a>
                          ))
                        ) : (
                          active.liveUrl !== "#" && (
                            <a
                              href={active.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-violet-400/80 hover:text-violet-300 border border-violet-500/20 hover:border-violet-500/40 bg-violet-500/[0.06] hover:bg-violet-500/10 px-2.5 py-1.5 rounded-lg transition-all"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Live Demo
                            </a>
                          )
                        )}
                        {active.githubUrl !== "#" && (
                          <a
                            href={active.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-white/35 hover:text-white/70 hover:bg-white/[0.06] transition-all"
                            title="View source"
                          >
                            <GithubIcon className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Impact — prominent */}
                    <p className="text-base text-white/60 leading-relaxed mb-4">
                      {active.impact}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {active.tech.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium text-violet-300/70 bg-violet-500/10 border border-violet-500/15 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bullets — 2-column grid */}
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {active.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm text-white/45 leading-relaxed"
                        >
                          <span className="mt-[7px] w-1 h-1 rounded-full bg-violet-500/50 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
