import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-[var(--gutter)] py-20 sm:py-24">
      <div>
        <SectionHeading kicker="Experience" title="Where I've worked." />

        <div className="mt-8">
          {experience.map((e) => (
            <div
              key={`${e.company}-${e.role}`}
              className="grid gap-3 border-b border-line py-7 last:border-b-0 lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-4">
                <p className="text-sm font-medium text-ink [font-variant-numeric:tabular-nums]">{e.dates}</p>
                {e.location ? (
                  <p className="mt-1 text-xs text-muted-ink">{e.location}</p>
                ) : null}
              </div>
              <div className="lg:col-span-8">
                <h3 className="text-base font-semibold tracking-[-0.01em] text-ink">
                  {e.role}
                </h3>
                <p className="mt-0.5 text-sm text-[var(--brand)]">{e.company}</p>
                <ul className="mt-3.5 space-y-2.5">
                  {e.bullets.map((b) => (
                    <li
                      key={b}
                      className="grid grid-cols-[0.6rem_1fr] gap-x-2.5 text-[0.9375rem] leading-[1.6] text-muted-ink"
                    >
                      <span aria-hidden="true" className="mt-[0.5em] h-[3px] w-[3px] bg-[var(--brand)]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
