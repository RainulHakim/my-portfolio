"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowOut, ArrowRight, Grid, Slides } from "@/components/Icons";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDialog } from "@/components/ProjectDialog";
import {
  projectCategories,
  projects,
  siteConfig,
  type ProjectCategory,
} from "@/data/portfolio";

type Filter = "all" | ProjectCategory;
type View = "slide" | "grid";

const two = (n: number) => String(n).padStart(2, "0");

export function Work() {
  const railRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<Filter>("all");
  const [view, setView] = useState<View>("slide");
  const [index, setIndex] = useState(0);
  const [atEnd, setAtEnd] = useState(false);

  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  /** Reads the rail's scroll position into the counter and arrow states. */
  const sync = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : 1;
    setIndex(Math.round(el.scrollLeft / step));
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el || view !== "slide") return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync, view, filter]);

  const nudge = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  const pickFilter = (next: Filter) => {
    setFilter(next);
    setIndex(0);
    railRef.current?.scrollTo({ left: 0 });
  };

  const position = Math.min(index + 1, visible.length);

  return (
    <section id="work" className="scroll-mt-20 py-20 sm:py-28">
      <div className="reveal px-[var(--gutter)]">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
          <div>
            <p className="eyebrow text-[0.95rem] tracking-[0.1em]">
              01 · Selected work
            </p>
            <h2 className="mt-2.5 text-[clamp(2rem,4.5vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
              The latest.
            </h2>
            <p className="mt-3 max-w-[46ch] text-[1.15rem] leading-relaxed text-muted-ink">
              Research, products, and a few things built for fun. Click a card
              to visit it, or open its details for the full story.
            </p>
          </div>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nudge link-sweep inline-flex items-center gap-1 pb-0.5 text-[0.95rem] font-medium text-ink"
          >
            Full résumé (PDF)
            <ArrowOut className="h-4 w-4" />
          </a>
        </div>

        {/* Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
          <div className="seg" role="group" aria-label="Filter projects">
            <button
              type="button"
              aria-pressed={filter === "all"}
              onClick={() => pickFilter("all")}
            >
              All <span className="count">{projects.length}</span>
            </button>
            {projectCategories.map((c) => (
              <button
                key={c.key}
                type="button"
                aria-pressed={filter === c.key}
                onClick={() => pickFilter(c.key)}
              >
                {c.label}{" "}
                <span className="count">
                  {projects.filter((p) => p.category === c.key).length}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {view === "slide" ? (
              <div className="flex items-center gap-3">
                <p
                  className="text-sm text-muted-ink [font-variant-numeric:tabular-nums]"
                  aria-live="polite"
                >
                  <span className="text-ink">{two(position)}</span> /{" "}
                  {two(visible.length)}
                </p>
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={() => nudge(-1)}
                    disabled={index === 0}
                    aria-label="Previous project"
                    className="rounded-[4px] border border-line p-2.5 text-ink transition-colors hover:border-ink disabled:opacity-30"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => nudge(1)}
                    disabled={atEnd}
                    aria-label="Next project"
                    className="rounded-[4px] border border-line p-2.5 text-ink transition-colors hover:border-ink disabled:opacity-30"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ) : null}

            <div className="seg" role="group" aria-label="Layout">
              <button
                type="button"
                aria-pressed={view === "slide"}
                onClick={() => setView("slide")}
              >
                <Slides className="h-3.5 w-3.5" />
                Slide
              </button>
              <button
                type="button"
                aria-pressed={view === "grid"}
                onClick={() => setView("grid")}
              >
                <Grid className="h-3.5 w-3.5" />
                Grid
              </button>
            </div>
          </div>
        </div>

        {/* Where you are in the rail */}
        {view === "slide" ? (
          <div className="mt-4 h-px w-full bg-line" aria-hidden="true">
            <div
              className="h-px bg-[var(--brand)] transition-[width] duration-300"
              style={{ width: `${(position / visible.length) * 100}%` }}
            />
          </div>
        ) : null}
      </div>

      <div
        ref={railRef}
        className={`mt-6 ${view === "slide" ? "rail" : "card-grid"}`}
      >
        {visible.map((p, i) => (
          <ProjectCard key={`${filter}-${view}-${p.slug}`} project={p} order={i} />
        ))}
      </div>

      <ProjectDialog />
    </section>
  );
}
