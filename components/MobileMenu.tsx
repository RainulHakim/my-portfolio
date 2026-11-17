"use client";

import { useCallback, useRef, useState } from "react";
import { ArrowOut, Close, Menu } from "@/components/Icons";
import { sections } from "@/components/nav-links";
import { siteConfig } from "@/data/portfolio";
import { useDialog } from "@/lib/use-dialog";

/** Full-screen navigation for small screens, which otherwise have none. */
export function MobileMenu() {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useDialog(ref, open, close);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="rounded-[6px] border border-line p-2.5 text-ink transition-colors hover:border-ink md:hidden"
      >
        <Menu className="h-[18px] w-[18px]" />
      </button>

      <dialog
        ref={ref}
        className="sheet sheet-full"
        aria-label="Menu"
      >
        <div className="flex min-h-full flex-col px-[var(--gutter)] pb-8">
          <div className="flex h-16 items-center justify-between">
            <span className="text-[0.9375rem] font-semibold tracking-tight">
              {siteConfig.name}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close menu"
              className="rounded-[6px] border border-line p-2.5 transition-colors hover:border-ink"
            >
              <Close className="h-[18px] w-[18px]" />
            </button>
          </div>

          <nav aria-label="Sections" className="mt-6">
            <ul className="divide-y divide-line border-y border-line">
              {sections.map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={close}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="text-sm text-[var(--brand)] [font-variant-numeric:tabular-nums]">
                      0{i + 1}
                    </span>
                    <span className="display text-[2.1rem] font-semibold leading-none tracking-[-0.03em]">
                      {s.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto grid gap-3 pt-10">
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid justify-between"
            >
              Résumé (PDF)
              <ArrowOut className="h-4 w-4" />
            </a>
            <a href={`mailto:${siteConfig.email}`} className="btn btn-ghost justify-between">
              {siteConfig.email}
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost justify-between"
              >
                LinkedIn
                <ArrowOut className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost justify-between"
              >
                GitHub
                <ArrowOut className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
