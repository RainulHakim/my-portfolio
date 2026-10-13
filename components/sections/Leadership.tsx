import { ArrowOut, Award } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import { leadership, type Leadership as Item } from "@/data/portfolio";

function Row({ item }: { item: Item }) {
  const body = (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="flex items-center gap-1.5 text-[0.9375rem] font-semibold text-ink">
          {item.award ? (
            <Award className="h-3.5 w-3.5 text-[var(--brand)]" />
          ) : null}
          {item.title}
          {item.link ? (
            <ArrowOut
              className="h-3.5 w-3.5 text-muted-ink transition-colors group-hover:text-[var(--brand)]"
             
            />
          ) : null}
        </h3>
        {item.dates ? (
          <p className="shrink-0 text-xs text-muted-ink [font-variant-numeric:tabular-nums]">{item.dates}</p>
        ) : null}
      </div>
      <p className="mt-0.5 text-sm text-[var(--brand)]">{item.organization}</p>
      <p className="mt-2 text-sm leading-[1.6] text-muted-ink">{item.description}</p>
    </>
  );

  const base = "block border-t border-line pt-4";

  return item.link ? (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group ${base} transition-colors hover:border-ink`}
    >
      {body}
    </a>
  ) : (
    <div className={base}>{body}</div>
  );
}

export function Leadership() {
  return (
    <section className="px-[var(--gutter)] py-20 sm:py-24">
      <div>
        <SectionHeading kicker="Leadership" title="Outside the code." />
        <div className="mt-8 grid gap-x-10 gap-y-7 sm:grid-cols-2">
          {leadership.map((i) => (
            <Row key={`${i.title}-${i.organization}`} item={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
