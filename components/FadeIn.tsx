"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "none";
}

export function FadeIn({
  children,
  delay = 0,
  className,
  direction = "up",
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  const initial =
    direction === "up"
      ? { opacity: 0, y: 20 }
      : direction === "left"
        ? { opacity: 0, x: -16 }
        : { opacity: 0 };

  const animate =
    direction === "up"
      ? { opacity: 1, y: 0 }
      : direction === "left"
        ? { opacity: 1, x: 0 }
        : { opacity: 1 };

  return (
    <motion.div
      // `initial={false}` starts at the final state, so reduced motion shows
      // the content immediately instead of leaving it stuck at opacity 0.
      // The element type stays the same either way, which keeps hydration safe.
      initial={reduceMotion ? false : initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.5, delay, ease: "easeOut" }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
