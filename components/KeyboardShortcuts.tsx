"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Keyboard } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

const shortcuts = [
  {
    key: "G",
    label: "GitHub",
    action: () => window.open(siteConfig.github, "_blank"),
  },
  {
    key: "L",
    label: "LinkedIn",
    action: () => window.open(siteConfig.linkedin, "_blank"),
  },
  {
    key: "R",
    label: "Resume",
    action: () => {
      const a = document.createElement("a");
      a.href = siteConfig.resumeUrl;
      a.download = "resume.pdf";
      a.click();
    },
  },
  {
    key: "C",
    label: "Contact",
    action: () =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
];

export function KeyboardShortcuts() {
  const [open, setOpen] = useState(false);
  const [triggered, setTriggered] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement ||
        e.metaKey ||
        e.ctrlKey ||
        e.altKey
      )
        return;

      if (e.key === "?") {
        setOpen((v) => !v);
        return;
      }

      const hit = shortcuts.find((s) => s.key === e.key.toUpperCase());
      if (hit) {
        e.preventDefault();
        setTriggered(hit.key);
        hit.action();
        setTimeout(() => setTriggered(null), 600);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-52 border border-white/[0.08] rounded-2xl bg-black/80 backdrop-blur-xl p-4 shadow-xl shadow-black/50"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.15em] text-white/25 mb-3">
              Keyboard Shortcuts
            </p>
            <div className="space-y-1.5">
              {shortcuts.map((s) => (
                <div
                  key={s.key}
                  className="flex items-center justify-between"
                >
                  <span className="text-xs text-white/50">{s.label}</span>
                  <kbd
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-md border transition-all duration-150 ${
                      triggered === s.key
                        ? "text-white bg-violet-500/40 border-violet-500/50"
                        : "text-violet-400 bg-violet-500/10 border-violet-500/20"
                    }`}
                  >
                    {s.key}
                  </kbd>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-white/[0.06]">
              <p className="text-[9px] text-white/20">
                Press{" "}
                <kbd className="font-mono text-white/30 border border-white/10 bg-white/5 px-1 py-0.5 rounded text-[9px]">
                  ?
                </kbd>{" "}
                to toggle
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        title="Keyboard shortcuts ( ? )"
        className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200 ${
          open
            ? "border-violet-500/30 bg-violet-500/15 text-violet-400"
            : "border-white/10 bg-white/[0.04] text-white/25 hover:text-white/60 hover:bg-white/[0.08] hover:border-white/20"
        }`}
      >
        <Keyboard className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
