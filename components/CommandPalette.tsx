"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowOut, Copy, Doc, Mail, Search } from "@/components/Icons";
import { siteConfig } from "@/data/portfolio";

type Item = {
  label: string;
  hint: string;
  run: () => void;
  icon: React.ComponentType<{ className?: string }>;
};

/** ⌘K jump-to for sections, résumé, and contact details. */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const go = useCallback((hash: string) => {
    setOpen(false);
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const items = useMemo<Item[]>(
    () => [
      { label: "Work", hint: "Projects and research", icon: Search, run: () => go("#work") },
      { label: "Experience", hint: "Roles and dates", icon: Search, run: () => go("#experience") },
      { label: "About", hint: "Bio, education, skills", icon: Search, run: () => go("#about") },
      { label: "Contact", hint: "Get in touch", icon: Search, run: () => go("#contact") },
      {
        label: "Open résumé",
        hint: "PDF",
        icon: Doc,
        run: () => {
          setOpen(false);
          window.open(siteConfig.resumeUrl, "_blank", "noopener");
        },
      },
      {
        label: "Email me",
        hint: siteConfig.email,
        icon: Mail,
        run: () => {
          setOpen(false);
          window.location.href = `mailto:${siteConfig.email}`;
        },
      },
      {
        label: "Copy email address",
        hint: siteConfig.email,
        icon: Copy,
        run: () => {
          navigator.clipboard?.writeText(siteConfig.email).catch(() => {});
          setOpen(false);
        },
      },
      {
        label: "GitHub",
        hint: "RainulHakim",
        icon: ArrowOut,
        run: () => {
          setOpen(false);
          window.open(siteConfig.github, "_blank", "noopener");
        },
      },
      {
        label: "LinkedIn",
        hint: "rainulhakim",
        icon: ArrowOut,
        run: () => {
          setOpen(false);
          window.open(siteConfig.linkedin, "_blank", "noopener");
        },
      },
    ],
    [go]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) =>
        i.label.toLowerCase().includes(q) || i.hint.toLowerCase().includes(q)
    );
  }, [items, query]);

  const show = useCallback(() => {
    setQuery("");
    setActive(0);
    setOpen(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => {
          if (!v) {
            setQuery("");
            setActive(0);
          }
          return !v;
        });
        return;
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) {
    return (
      <button
        type="button"
        onClick={show}
        className="hidden items-center gap-2 rounded-lg border border-line px-3 py-2 text-sm text-muted-ink transition-colors hover:border-ink hover:text-ink sm:inline-flex"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Jump to…</span>
        <kbd className="ml-1 inline-flex items-center gap-0.5 rounded border border-line px-1.5 py-0.5 text-[10px]">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 px-4 pt-[14vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Jump to"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg overflow-hidden border border-line bg-[var(--surface)]"
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search className="h-4 w-4 shrink-0 text-muted-ink" />
          <input
            ref={(el) => {
              inputRef.current = el;
              el?.focus();
            }}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setActive((a) => Math.min(a + 1, results.length - 1));
              } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setActive((a) => Math.max(a - 1, 0));
              } else if (e.key === "Enter") {
                e.preventDefault();
                results[active]?.run();
              }
            }}
            placeholder="Jump to a section, résumé, email…"
            className="w-full bg-transparent py-4 text-[0.95rem] text-ink outline-none placeholder:text-muted-ink"
          />
        </div>
        <ul className="max-h-[22rem] overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="px-3 py-6 text-center text-sm text-muted-ink">
              Nothing matches that.
            </li>
          ) : (
            results.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={item.label}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={item.run}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                      i === active ? "bg-[var(--bg-2)]" : ""
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0 text-muted-ink" />
                    <span className="text-sm font-medium text-ink">
                      {item.label}
                    </span>
                    <span className="ml-auto truncate text-xs text-muted-ink">
                      {item.hint}
                    </span>
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}
