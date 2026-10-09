"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/data/portfolio";

export function TypewriterText() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const roles = siteConfig.typewriterRoles;

  useEffect(() => {
    // Reduced motion: stop cycling and keep the first role on screen.
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [roles.length, reduceMotion]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        // With reduced motion there is no enter/exit animation, so the label
        // never blanks out during the swap.
        initial={reduceMotion ? false : { opacity: 0, y: 8, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={reduceMotion ? undefined : { opacity: 0, y: -8, filter: "blur(4px)" }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
        }
        className="text-violet-400"
      >
        {roles[index]}
      </motion.span>
    </AnimatePresence>
  );
}
