import { FadeIn } from "@/components/FadeIn";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-28 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Background
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Experience
            </h2>
          </div>
        </FadeIn>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-white/[0.06]">
          <div className="space-y-12">
            {experience.map((entry, i) => (
              <FadeIn key={`${entry.company}-${i}`} delay={i * 0.1}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[1.5625rem] top-1 w-2.5 h-2.5 rounded-full bg-violet-500 ring-4 ring-background shadow-lg shadow-violet-500/30" />

                  <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 sm:gap-8">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                        <h3 className="text-base font-semibold text-white tracking-tight">
                          {entry.role}
                        </h3>
                      </div>
                      <p className="text-sm font-medium text-violet-400 mb-4">
                        {entry.company}
                      </p>
                      <ul className="space-y-2">
                        {entry.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-sm text-white/40"
                          >
                            <span className="mt-[7px] w-1 h-1 rounded-full bg-white/20 shrink-0" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="sm:text-right">
                      <span className="text-xs text-white/30 font-medium whitespace-nowrap tabular-nums">
                        {entry.dates}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
