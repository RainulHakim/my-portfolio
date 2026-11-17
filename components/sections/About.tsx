import Image from "next/image";
import { ArrowOut, Award } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import {
  education,
  leadership,
  siteConfig,
  skillGroups,
  type Leadership,
} from "@/data/portfolio";

function LeadershipRow({ item }: { item: Leadership }) {
  const body = (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="flex items-center gap-1.5 text-[1.0625rem] font-semibold text-ink">
          {item.award ? (
            <Award className="h-3.5 w-3.5 text-[var(--brand)]" />
          ) : null}
          {item.title}
          {item.link ? (
            <ArrowOut className="h-3.5 w-3.5 text-muted-ink" />
          ) : null}
        </h3>
        {item.dates ? (
          <p className="shrink-0 text-sm text-muted-ink [font-variant-numeric:tabular-nums]">
            {item.dates}
          </p>
        ) : null}
      </div>
      <p className="mt-0.5 text-[0.95rem] text-[var(--brand)]">
        {item.organization}
      </p>
      <p className="mt-1.5 text-[0.9375rem] leading-[1.55] text-muted-ink">
        {item.description}
      </p>
    </>
  );

  return item.link ? (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="nudge block py-4 transition-colors hover:bg-[var(--bg-2)] sm:px-3"
    >
      {body}
    </a>
  ) : (
    <div className="py-4 sm:px-3">{body}</div>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-20 px-[var(--gutter)] py-20 sm:py-24">
      <SectionHeading index="03" kicker="About" title="A bit about me." />

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Portrait stays in view while the column beside it scrolls */}
        <div className="reveal lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <div className="relative aspect-[2/3] w-full max-w-[320px] overflow-hidden rounded-[6px] border border-line bg-[var(--bg-2)]">
              <Image
                src={siteConfig.headshot}
                alt={`${siteConfig.name}, portrait`}
                fill
                sizes="(min-width: 1024px) 320px, 70vw"
                className="object-cover object-center"
              />
            </div>
            <p className="mt-3 text-sm text-muted-ink">{siteConfig.location}</p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="reveal text-[1.2rem] leading-[1.6] text-ink">
            {siteConfig.about}
          </p>

          <div className="reveal mt-9 rounded-[6px] border border-line bg-[var(--bg-2)] p-6">
            <p className="eyebrow text-[0.95rem] tracking-[0.1em]">Education</p>
            <div className="mt-2.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[1.3rem] font-semibold text-ink">
                {education.school}
              </h3>
              <p className="text-sm text-muted-ink [font-variant-numeric:tabular-nums]">
                {education.graduation}
              </p>
            </div>
            <p className="mt-1 text-[1.05rem] text-muted-ink">
              {education.degree} · {education.location}
            </p>
            <p className="mt-4 text-[1rem] leading-relaxed text-muted-ink">
              Relevant coursework: {education.coursework.join(", ")}
            </p>
          </div>

          <div className="reveal mt-10">
            <p className="eyebrow text-[0.95rem] tracking-[0.1em]">
              Leadership &amp; involvement
            </p>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {leadership.map((item) => (
                <li key={`${item.title}-${item.organization}`}>
                  <LeadershipRow item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="reveal mt-16 border-t border-line pt-10">
        <p className="eyebrow text-[0.95rem] tracking-[0.1em]">Skills</p>
        <dl className="mt-6 space-y-7">
          {skillGroups.map((g) => (
            <div key={g.label} className="sm:grid sm:grid-cols-12 sm:gap-6">
              <dt className="text-[1.15rem] font-semibold text-ink sm:col-span-3 sm:pt-1">
                {g.label}
              </dt>
              <dd className="mt-3 sm:col-span-9 sm:mt-0">
                <ul className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <li
                      key={s}
                      className="rounded-[3px] border border-line px-3 py-1.5 text-[1rem] text-ink transition-colors hover:border-ink"
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
    </section>
  );
}
