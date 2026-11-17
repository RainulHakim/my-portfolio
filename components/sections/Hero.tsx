import type { CSSProperties } from "react";
import { ArrowDown } from "@/components/Icons";
import { GithubIcon } from "@/components/GithubIcon";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import { LocalTime } from "@/components/LocalTime";
import { sections } from "@/components/nav-links";
import { experience, projects, siteConfig } from "@/data/portfolio";

/** One line under each section name in the index, so it says what is there. */
const sectionNotes: Record<(typeof sections)[number]["id"], string> = {
  work: `${projects.length} projects`,
  experience: `${experience.length} roles`,
  about: "Bio, education, skills",
  contact: "Email, LinkedIn, GitHub",
};

const order = (i: number) => ({ "--i": i }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" className="px-[var(--gutter)] pt-14 pb-10 sm:pt-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
        <div className="enter lg:col-span-8" style={order(0)}>
          <h1 className="-ml-[0.045em] font-semibold leading-[0.82] tracking-[-0.055em] text-ink [font-size:clamp(3.8rem,13vw,11rem)]">
            <span className="block">Rainul</span>
            <span className="block">Hakim</span>
          </h1>
        </div>

        <aside className="enter self-end lg:col-span-4 lg:pb-3" style={order(2)}>
          <dl className="divide-y divide-line border-y border-line">
            <div className="flex items-baseline justify-between gap-4 py-2.5">
              <dt className="text-sm text-muted-ink">Based in</dt>
              <dd className="text-right text-sm text-ink">
                {siteConfig.location}
                <LocalTime />
              </dd>
            </div>
            {[siteConfig.recently, siteConfig.previously].map((r) => (
              <div key={r.label} className="py-2.5">
                <dt className="text-sm text-muted-ink">{r.label}</dt>
                <dd className="mt-1 text-sm text-ink">{r.role}</dd>
                <dd className="text-sm text-muted-ink">
                  {r.org}, {r.when}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="enter lg:col-span-7" style={order(3)}>
          <p className="display text-[clamp(2rem,4.4vw,3.4rem)] font-normal leading-[1.05] tracking-[-0.035em] text-ink">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 max-w-[48ch] text-[1.0625rem] leading-[1.6] text-muted-ink">
            {siteConfig.role}
          </p>
        </div>

        <div
          className="enter flex flex-wrap items-center gap-3 self-end lg:col-span-5 lg:justify-end"
          style={order(4)}
        >
          <a href="#work" className="btn btn-solid">
            See the work
            <ArrowDown className="nudge-down h-4 w-4" />
          </a>
          <a href={`mailto:${siteConfig.email}`} className="btn btn-ghost">
            Email me
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 text-muted-ink transition-colors hover:text-ink"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 text-muted-ink transition-colors hover:text-ink"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* What is on the page, and how much of it */}
      <nav
        aria-label="On this page"
        className="enter mt-14 border-t border-line sm:mt-16"
        style={order(5)}
      >
        <ol className="grid grid-cols-2 lg:grid-cols-4">
          {sections.map((s, i) => (
            <li
              key={s.id}
              className="border-b border-line odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <a
                href={`#${s.id}`}
                className="group flex h-full items-start justify-between gap-3 px-1 py-4 transition-colors hover:bg-[var(--bg-2)] sm:px-4"
              >
                <span>
                  <span className="block text-xs text-[var(--brand)] [font-variant-numeric:tabular-nums]">
                    0{i + 1}
                  </span>
                  <span className="display mt-1 block text-[1.35rem] font-semibold leading-tight tracking-[-0.02em] text-ink">
                    {s.label}
                  </span>
                  <span className="mt-0.5 block text-sm text-muted-ink">
                    {sectionNotes[s.id]}
                  </span>
                </span>
                <ArrowDown className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-ink transition-transform duration-300 group-hover:translate-y-1 group-hover:text-ink" />
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </section>
  );
}
