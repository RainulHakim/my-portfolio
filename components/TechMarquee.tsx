import { marqueeItems } from "@/data/portfolio";

export function TechMarquee() {
  // Duplicate items so the loop is seamless
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative py-5 overflow-hidden border-y border-white/[0.05] bg-white/[0.01]">
      {/* Left / right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <div className="animate-marquee flex gap-0 whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-6 text-xs font-medium text-white/25 tracking-widest uppercase"
          >
            {tech}
            <span className="w-1 h-1 rounded-full bg-violet-500/30 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
