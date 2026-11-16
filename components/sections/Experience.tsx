import { Plus } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";

/** How many of the most recent roles start expanded. */
const OPEN_BY_DEFAULT = 3;

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 px-[var(--gutter)] py-20 sm:py-24"
    >
      <SectionHeading index="02" kicker="Experience" title="Where I've worked.">
        <p className="text-sm text-muted-ink">
          {experience.length} roles, newest first
        </p>
      </SectionHeading>

      <div>
        {experience.map((e, i) => {
          const current = e.dates.includes("Present");
          return (
            <details
              key={`${e.company}-${e.role}`}
              className="xp reveal group border-b border-line"
              open={i < OPEN_BY_DEFAULT}
            >
              <summary className="grid gap-x-8 gap-y-2 py-7 transition-colors hover:bg-[var(--bg-2)] lg:grid-cols-12 lg:px-3">
                <div className="lg:col-span-4">
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[1.15rem] font-medium text-ink [font-variant-numeric:tabular-nums]">
                    {e.dates}
                    {current ? <span className="pill-now">Now</span> : null}
                  </p>
                  {e.location ? (
                    <p className="mt-1.5 text-[0.95rem] text-muted-ink">
                      {e.location}
                    </p>
                  ) : null}
                </div>
                <div className="flex items-start justify-between gap-6 lg:col-span-8">
                  <div>
                    <h3 className="text-[1.45rem] font-semibold tracking-[-0.02em] text-ink">
                      {e.role}
                    </h3>
                    <p className="mt-1 text-[1.1rem] text-[var(--brand)]">
                      {e.company}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className="xp-toggle mt-1.5 shrink-0 rounded-[4px] border border-line p-2 text-muted-ink group-hover:border-ink group-hover:text-ink"
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                </div>
              </summary>

              <div className="xp-body grid gap-x-8 pb-8 lg:grid-cols-12 lg:px-3">
                <ul className="space-y-2.5 lg:col-span-8 lg:col-start-5">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="grid grid-cols-[0.6rem_1fr] gap-x-2.5 text-[0.9375rem] leading-[1.6] text-muted-ink"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.5em] h-[3px] w-[3px] bg-[var(--brand)]"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          );
        })}
      </div>
    </section>
  );
}
