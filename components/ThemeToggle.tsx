"use client";

import { useCallback, useSyncExternalStore } from "react";
import { Moon, Sun } from "@/components/Icons";

type Theme = "light" | "dark";

function subscribe(onChange: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onChange);
  window.addEventListener("themechange", onChange);
  return () => {
    mq.removeEventListener("change", onChange);
    window.removeEventListener("themechange", onChange);
  };
}

/** Reads the theme from the DOM, which the inline boot script sets first. */
function getSnapshot(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "dark" || attr === "light") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next: Theme =
      document.documentElement.getAttribute("data-theme") === "dark" ||
      (!document.documentElement.getAttribute("data-theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "light"
        : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage blocked; the switch still applies for this visit */
    }
    window.dispatchEvent(new Event("themechange"));
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      className="rounded-lg border border-line p-2.5 text-muted-ink transition-colors hover:border-ink hover:text-ink"
    >
      <Sun className="theme-icon-sun h-[18px] w-[18px]" />
      <Moon className="theme-icon-moon h-[18px] w-[18px]" />
    </button>
  );
}
