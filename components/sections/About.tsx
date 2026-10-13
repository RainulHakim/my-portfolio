import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, education, skillGroups } from "@/data/portfolio";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 px-[var(--gutter)] py-20 sm:py-24">
      <div>
        <SectionHeading kicker="About" title="A bit about me." />

        <div className="mt-8 grid gap-9 lg:grid-cols-12 lg:gap-12">
          {/* Headshot */}
          <div className="lg:col-span-4">
            <div className="relative aspect-[2/3] w-full max-w-[320px] overflow-hidden border border-line bg-[var(--bg-2)]">
              <Image
                src={siteConfig.headshot}
                alt={`${siteConfig.name}, portrait`}
                fill
                sizes="(min-width: 1024px) 280px, 70vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-3 text-xs text-muted-ink">{siteConfig.location}</p>
          </div>

          {/* Bio + education */}
          <div className="lg:col-span-8">
            <p className="text-[1.0625rem] leading-[1.7] text-muted-ink">
              {siteConfig.about}
            </p>

            <div className="mt-8 border border-line bg-[var(--bg-2)] p-6">
              <p className="eyebrow">Education</p>
              <div className="mt-2.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-semibold text-ink">
                  {education.school}
                </h3>
                <p className="text-sm text-muted-ink [font-variant-numeric:tabular-nums]">
                  {education.graduation}
                </p>
              </div>
              <p className="mt-0.5 text-sm text-muted-ink">
                {education.degree} · {education.location}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-ink">
                <span className="text-muted-ink">Relevant coursework: </span>
                {education.coursework.join(", ")}
              </p>
            </div>

          </div>
        </div>

        {/* Skills */}
        <div className="mt-12 border-t border-line pt-8">
          <p className="eyebrow">Skills</p>
          <dl className="mt-3 space-y-4">
        {skillGroups.map((g) => (
          <div key={g.label} className="sm:grid sm:grid-cols-12 sm:gap-4">
            <dt className="text-sm font-medium text-ink sm:col-span-3 sm:pt-0.5">
              {g.label}
            </dt>
            <dd className="mt-1.5 sm:col-span-9 sm:mt-0">
              <ul className="flex flex-wrap gap-1.5">
                {g.skills.map((s) => (
                  <li
                    key={s}
                    className="chip text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
