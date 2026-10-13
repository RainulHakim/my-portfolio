"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowOut } from "@/components/Icons";
import { projects, type Project } from "@/data/portfolio";

function Links({ project }: { project: Project }) {
  const items = project.links ?? [];
  const live = items.length === 0 ? project.liveUrl : undefined;
  const repo =
    project.githubUrl && project.githubUrl !== project.liveUrl
      ? project.githubUrl
      : undefined;
  if (items.length === 0 && !live && !repo) return null;

  const cls =
    "inline-flex items-center gap-1 text-[0.9rem] font-medium opacity-75 transition-opacity hover:opacity-100 hover:underline";

  return (
    <div className="relative z-10 mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
      {items.map((l) => (
        <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className={cls}>
          {l.label}
          <ArrowOut className="h-3.5 w-3.5" />
        </a>
      ))}
      {live ? (
        <a href={live} target="_blank" rel="noopener noreferrer" className={cls}>
          {project.liveLabel ?? (live.includes("github.com") ? "Repository" : "Visit")}
          <ArrowOut className="h-3.5 w-3.5" />
        </a>
      ) : null}
      {repo ? (
        <a href={repo} target="_blank" rel="noopener noreferrer" className={cls}>
          Source
          <ArrowOut className="h-3.5 w-3.5" />
        </a>
      ) : null}
    </div>
  );
}

function Card({ project }: { project: Project }) {
  const href = project.links?.[0]?.url ?? project.liveUrl;

  return (
    <article className={`pcard ${project.tone} h-full min-h-[31rem]`}>
      <div className="relative z-[2] px-7 pt-8 sm:px-9 sm:pt-9">
        <p className="pcard-eyebrow eyebrow">
          {project.kind} · {project.year}
        </p>
        <h3 className="mt-2.5 text-[clamp(1.55rem,2.4vw,2.05rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="pcard-hit">
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        <p className="mt-2.5 text-[0.95rem] font-semibold [font-variant-numeric:tabular-nums]">
          {project.headline}
        </p>
        <p className="mt-3 text-[0.9875rem] font-medium leading-[1.5] opacity-85">
          {project.summary}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <li key={t} className="chip">{t}</li>
          ))}
        </ul>
        <Links project={project} />
      </div>

      {project.image ? (
        <div className="pcard-media mt-8 min-h-[12rem]">
          <div className="pcard-shot">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={project.image}
                alt={`${project.name} preview`}
                fill
                sizes="(min-width: 1024px) 560px, 85vw"
                className="object-cover"
                style={{ objectPosition: project.focus ?? "center top" }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="pb-9" />
      )}
    </article>
  );
}

export function Work() {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 8);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    sync();
    const el = railRef.current;
    if (!el) return;
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const nudge = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="work" className="scroll-mt-24 py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-5 px-[var(--gutter)]">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2 className="mt-2.5 text-[clamp(2rem,4.5vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
            The latest.
          </h2>
          <p className="mt-2 text-[1.05rem] text-muted-ink">
            Research, products, and a few things built for fun.{" "}
            <span className="text-ink">{projects.length} projects</span>, scroll
            or use the arrows.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/Rainul_Hakim_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 hidden items-center gap-1 text-[0.95rem] font-medium text-ink opacity-75 transition-opacity hover:opacity-100 hover:underline sm:inline-flex"
          >
            Full résumé (PDF)
            <ArrowOut className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => nudge(-1)}
            disabled={atStart}
            aria-label="Previous projects"
            className="border border-line p-2.5 text-ink transition-colors hover:border-ink disabled:opacity-30"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            disabled={atEnd}
            aria-label="More projects"
            className="border border-line p-2.5 text-ink transition-colors hover:border-ink disabled:opacity-30"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Slide rail: every project stays reachable by scroll, swipe or arrows. */}
      <div ref={railRef} className="rail mt-9">
        {projects.map((p) => (
          <Card key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
