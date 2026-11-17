"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { Plus } from "@/components/Icons";
import { ProjectLinks, primaryHref } from "@/components/ProjectLinks";
import type { Project } from "@/data/portfolio";
import { openProject } from "@/lib/project-link";

/**
 * A project card. Clicking anywhere follows the project's link; a project
 * with no link opens its details instead, so no card is a dead end.
 */
export function ProjectCard({
  project,
  order,
}: {
  project: Project;
  order: number;
}) {
  const href = primaryHref(project);
  const title = (
    <>
      {project.kind} · {project.year}
    </>
  );

  return (
    <article
      className={`pcard enter ${project.tone} h-full min-h-[31rem]`}
      style={{ "--i": Math.min(order, 6) } as CSSProperties}
    >
      <div className="px-7 pt-8 sm:px-9 sm:pt-9">
        <h3 className="text-[clamp(1.7rem,2.6vw,2.2rem)] font-semibold leading-[1.06] tracking-[-0.03em]">
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer" className="pcard-hit">
              {title}
            </a>
          ) : (
            <button
              type="button"
              onClick={() => openProject(project.slug)}
              className="pcard-hit text-left"
            >
              {title}
            </button>
          )}
        </h3>
        <p className="mt-1.5 text-[1.05rem] font-medium leading-snug opacity-80">
          {project.name}
        </p>
        <p className="mt-2.5 text-[0.95rem] font-semibold [font-variant-numeric:tabular-nums]">
          {project.headline}
        </p>
        <p className="mt-3 text-[0.9875rem] font-medium leading-[1.5] opacity-85">
          {project.summary}
        </p>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 5).map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        {/* Above the card-wide hit area, so these keep their own clicks. */}
        <div className="relative z-10 mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.9rem]">
          <button
            type="button"
            onClick={() => openProject(project.slug)}
            className="inline-flex items-center gap-1.5 rounded-[4px] border border-current px-2.5 py-1 font-medium opacity-90 transition-opacity hover:opacity-100"
          >
            <Plus className="h-3 w-3" />
            Details
          </button>
          <ProjectLinks project={project} className="opacity-80 hover:opacity-100" />
        </div>
      </div>

      {project.image ? (
        <div className="mt-auto px-7 pb-7 pt-8 sm:px-9 sm:pb-9">
          {/* Natural ratio, so nothing is cropped; the frame clips the hover zoom. */}
          <div className="overflow-hidden rounded-[3px]">
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              width={project.imageSize?.w ?? 1600}
              height={project.imageSize?.h ?? 900}
              sizes="(min-width: 1024px) 560px, 85vw"
              className="pcard-img h-auto w-full"
            />
          </div>
        </div>
      ) : (
        <div className="pb-9" />
      )}
    </article>
  );
}
