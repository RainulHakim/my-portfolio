export function SectionHeading({
  kicker,
  title,
  action,
}: {
  kicker: string;
  title: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
      <div>
        <p className="eyebrow">{kicker}</p>
        <h2 className="mt-2 text-[clamp(2rem,4.5vw,3.1rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
          {title}
        </h2>
      </div>
      {action ? (
        <a
          href={action.href}
          target={action.href.startsWith("http") || action.href.endsWith(".pdf") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="link-underline text-sm font-medium text-ink-2 hover:text-ink"
        >
          {action.label} →
        </a>
      ) : null}
    </div>
  );
}
