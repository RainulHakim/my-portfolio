"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Chain, Check, Close } from "@/components/Icons";
import { ProjectLinks } from "@/components/ProjectLinks";
import { projects } from "@/data/portfolio";
import {
  closeProject,
  openProject,
  projectUrl,
  useOpenProjectSlug,
} from "@/lib/project-link";
import { useDialog } from "@/lib/use-dialog";

/**
 * Full details for one project: the bullets the cards have no room for, the
 * whole stack, every link. Driven by the URL hash, so it can be shared.
 */
export function ProjectDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const slug = useOpenProjectSlug();
  const at = projects.findIndex((p) => p.slug === slug);
  const project = at >= 0 ? projects[at] : null;
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);

  useDialog(ref, project !== null, closeProject);

  const step = (dir: 1 | -1) => {
    const next = projects[(at + dir + projects.length) % projects.length];
    openProject(next.slug);
  };

  const copyLink = async () => {
    if (!project) return;
    try {
      await navigator.clipboard.writeText(projectUrl(project.slug));
      setCopiedSlug(project.slug);
      setTimeout(() => setCopiedSlug(null), 2000);
    } catch {
      /* clipboard blocked; the address bar already holds the link */
    }
  };

  return (
    <dialog
      ref={ref}
      className="sheet w-[min(calc(100vw-1.5rem),68rem)] overflow-hidden"
      aria-labelledby="project-dialog-title"
      onClick={(e) => {
        // A click on the backdrop lands on the dialog element itself.
        if (e.target === e.currentTarget) closeProject();
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
    >
      {project ? (
        <div className="flex max-h-[min(calc(100dvh-1.5rem),54rem)] flex-col">
          <header
            className={`tone-surface ${project.tone} flex items-start justify-between gap-6 px-6 py-6 sm:px-9 sm:py-7`}
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.06em] text-[var(--c-eyebrow)]">
                {project.kind} · {project.year}
              </p>
              <h2
                id="project-dialog-title"
                className="mt-1.5 text-[clamp(1.6rem,3.4vw,2.4rem)] font-semibold leading-[1.05] tracking-[-0.03em]"
              >
                {project.name}
              </h2>
              <p className="mt-2 text-[0.95rem] font-semibold [font-variant-numeric:tabular-nums]">
                {project.headline}
              </p>
            </div>
            <button
              type="button"
              onClick={closeProject}
              aria-label="Close details"
              className="shrink-0 rounded-[4px] border border-current p-2 opacity-80 transition-opacity hover:opacity-100"
            >
              <Close className="h-4 w-4" />
            </button>
          </header>

          {/* The scroller and the grid are separate elements: a grid that is
              itself height-constrained lets the image's row collapse. */}
          <div key={project.slug} className="overflow-y-auto">
          <div className="grid gap-8 px-6 py-7 sm:px-9 lg:grid-cols-2 lg:gap-10">
            {project.image ? (
              <div className="enter self-start overflow-hidden rounded-[4px] border border-line">
                <Image
                  src={project.image}
                  alt={`${project.name} preview`}
                  width={project.imageSize?.w ?? 1600}
                  height={project.imageSize?.h ?? 900}
                  sizes="(min-width: 1024px) 520px, 92vw"
                  className="h-auto w-full"
                />
              </div>
            ) : null}

            <div className={project.image ? "" : "lg:col-span-2"}>
              <p className="text-[1.0625rem] leading-[1.65] text-ink">
                {project.summary}
              </p>

              <ul className="mt-6 space-y-3">
                {project.bullets.map((b) => (
                  <li
                    key={b}
                    className="grid grid-cols-[0.7rem_1fr] gap-x-2.5 text-[0.9875rem] leading-[1.6] text-muted-ink"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] h-[4px] w-[4px] bg-[var(--brand)]"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p className="eyebrow mt-7">Built with</p>
              <ul className="mt-2.5 flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-[3px] border border-line px-2.5 py-1 text-sm text-ink"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.95rem] text-ink">
                <ProjectLinks project={project} />
              </div>
            </div>
          </div>
          </div>

          <footer className="flex items-center justify-between gap-3 border-t border-line px-4 py-3 sm:px-7">
            <button
              type="button"
              onClick={() => step(-1)}
              className="inline-flex items-center gap-2 rounded-[4px] px-2.5 py-2 text-sm font-medium text-muted-ink transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-ink [font-variant-numeric:tabular-nums]">
                {at + 1} of {projects.length}
              </p>
              <button
                type="button"
                onClick={copyLink}
                className="inline-flex items-center gap-1.5 rounded-[4px] border border-line px-2.5 py-1.5 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                {copiedSlug === project.slug ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[var(--brand)]" />
                    Link copied
                  </>
                ) : (
                  <>
                    <Chain className="h-3.5 w-3.5" />
                    Copy link
                  </>
                )}
              </button>
            </div>

            <button
              type="button"
              onClick={() => step(1)}
              className="inline-flex items-center gap-2 rounded-[4px] px-2.5 py-2 text-sm font-medium text-muted-ink transition-colors hover:text-ink"
            >
              <span className="hidden sm:inline">Next</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </footer>
        </div>
      ) : null}
    </dialog>
  );
}
