"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { skillGroups } from "@/data/portfolio";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 8 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Stack
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.label} delay={i * 0.08}>
              <div className="border border-white/[0.06] rounded-2xl bg-white/[0.02] p-6 h-full">
                <p className="text-xs font-semibold uppercase tracking-widest text-violet-400/70 mb-4">
                  {group.label}
                </p>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      variants={tagVariants}
                      className="text-sm font-medium text-white/65 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.07] hover:border-white/[0.12] px-3 py-1.5 rounded-lg transition-colors cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
