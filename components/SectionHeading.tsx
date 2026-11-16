/** Numbered kicker plus title: the same opening for every section. */
export function SectionHeading({
  index,
  kicker,
  title,
  children,
}: {
  index: string;
  kicker: string;
  title: string;
  /** Optional element aligned to the right of the title. */
  children?: React.ReactNode;
}) {
  return (
    <div className="reveal flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
      <div>
        <p className="eyebrow text-[0.95rem] tracking-[0.1em]">
          {index} · {kicker}
        </p>
        <h2 className="mt-2.5 text-[clamp(2rem,4.5vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
          {title}
        </h2>
      </div>
      {children}
    </div>
  );
}
