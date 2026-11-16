import { ArrowUp } from "@/components/Icons";
import { sections } from "@/components/nav-links";
import { siteConfig } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="px-[var(--gutter)] pb-10">
      <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-line pt-6">
        <p className="text-sm text-muted-ink">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="link-sweep pb-0.5 text-sm text-muted-ink hover:text-ink"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
        </a>
      </div>
    </footer>
  );
}
