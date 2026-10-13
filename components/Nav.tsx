"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CommandPalette } from "@/components/CommandPalette";
import { siteConfig } from "@/data/portfolio";

const links = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers = links.map((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (!el) return null;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(l.href);
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
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-line bg-[var(--bg)]"
          : "border-b border-transparent"
      }`}
    >
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-[var(--ink)] focus:px-3 focus:py-2 focus:text-sm focus:text-[var(--bg)]"
      >
        Skip to work
      </a>

      <nav className="flex h-16 items-center justify-between gap-4 px-[var(--gutter)]">
        <a href="#top" className="text-[0.9375rem] font-semibold tracking-tight text-ink">
          {siteConfig.name}
        </a>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="hidden items-center md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  active === l.href
                    ? "text-ink"
                    : "text-muted-ink hover:text-ink"
                }`}
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className={`mx-auto mt-1 block h-px bg-brand transition-all ${
                    active === l.href ? "w-full opacity-100" : "w-0 opacity-0"
                  }`}
                />
              </a>
            ))}
          </div>

          <CommandPalette />
          <ThemeToggle />

          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-ink"
          >
            Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
