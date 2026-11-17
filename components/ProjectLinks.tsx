import { ArrowOut } from "@/components/Icons";
import type { Project } from "@/data/portfolio";

/** The single link a card or dialog treats as "the" destination, if any. */
export function primaryHref(project: Project) {
  return project.links?.[0]?.url ?? project.liveUrl;
}

/** Every outbound link a project has, labelled. Shared by card and dialog. */
export function ProjectLinks({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const items = project.links ?? [];
  const live = items.length === 0 ? project.liveUrl : undefined;
  const repo =
    project.githubUrl && project.githubUrl !== project.liveUrl
      ? project.githubUrl
      : undefined;

  const cls = `nudge inline-flex items-center gap-1 font-medium hover:underline ${className}`;

  return (
    <>
      {items.map((l) => (
        <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className={cls}>
          {l.label}
          <ArrowOut className="h-3.5 w-3.5" />
        </a>
      ))}
      {live ? (
        <a href={live} target="_blank" rel="noopener noreferrer" className={cls}>
          {project.liveLabel ??
            (live.includes("github.com") ? "Repository" : "Visit")}
          <ArrowOut className="h-3.5 w-3.5" />
        </a>
      ) : null}
      {repo ? (
        <a href={repo} target="_blank" rel="noopener noreferrer" className={cls}>
          Source
          <ArrowOut className="h-3.5 w-3.5" />
        </a>
      ) : null}
    </>
  );
}
