"use client";

import { useEffect, useState } from "react";
import { CommandPalette } from "@/components/CommandPalette";
import { MobileMenu } from "@/components/MobileMenu";
import { sections } from "@/components/nav-links";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/data/portfolio";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight whichever section crosses the middle band of the viewport.
  useEffect(() => {
    const observers = sections.map((s) => {
      const el = document.getElementById(s.id);
      if (!el) return null;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(s.id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      io.observe(el);
      return io;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--bg)] transition-colors ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-[var(--ink)] focus:px-3 focus:py-2 focus:text-sm focus:text-[var(--bg)]"
      >
        Skip to work
      </a>

      <nav
        aria-label="Primary"
        className="flex h-16 items-center justify-between gap-4 px-[var(--gutter)]"
      >
        <a
          href="#top"
          className="text-[0.9375rem] font-semibold tracking-tight text-ink"
        >
          {siteConfig.name}
        </a>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="hidden items-center md:flex">
            {sections.map((s) => {
              const on = active === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  aria-current={on ? "true" : undefined}
                  className={`group px-3 py-2 text-sm transition-colors ${
                    on ? "text-ink" : "text-muted-ink hover:text-ink"
                  }`}
                >
                  {s.label}
                  <span
                    aria-hidden="true"
                    className={`mt-1 block h-px origin-left bg-[var(--brand)] transition-transform duration-300 ${
                      on ? "scale-x-100" : "scale-x-0 group-hover:scale-x-50"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          <CommandPalette />
          <ThemeToggle />

          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[6px] border border-line px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Résumé
          </a>

          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
