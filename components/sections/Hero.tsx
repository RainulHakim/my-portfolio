"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { siteConfig, heroStats } from "@/data/portfolio";
import { FloatingParticles } from "@/components/FloatingParticles";
import { TypewriterText } from "@/components/TypewriterText";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const up = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

function Counter({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let frame = 0;
    const totalFrames = 60;
    const increment = target / totalFrames;
    const tick = () => {
      frame++;
      setCount(Math.min(Math.round(increment * frame), target));
      if (frame < totalFrames) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target]);

  return (
    <div ref={ref} className="text-center sm:text-left">
      <div className="text-2xl sm:text-3xl font-bold gradient-text tabular-nums">
        {count}
        {suffix}
      </div>
      <div className="text-xs text-white/35 mt-1">{label}</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-svh flex flex-col justify-center pt-20 pb-24 px-6 lg:px-10 overflow-hidden">
      {/* Hero local glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.13) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />

      <div className="max-w-6xl mx-auto w-full relative">
        <motion.div variants={stagger} initial="hidden" animate="show">

          {/* Badge */}
          <motion.div variants={up} className="mb-8">
            <span className="inline-flex items-center gap-2.5 text-xs font-medium text-violet-300/80 border border-violet-500/20 bg-violet-500/[0.07] backdrop-blur-sm rounded-full px-4 py-2">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-400" />
              </span>
              {siteConfig.availabilityText}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={up} className="mb-6">
            <h1 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold leading-[1.0] tracking-[-0.02em]">
              <span className="text-white/95">{siteConfig.heroHeadline.before}</span>
              <br />
              <span className="text-white/95">{siteConfig.heroHeadline.middle}</span>
              <span className="gradient-text">{siteConfig.heroHeadline.accent}</span>
            </h1>
          </motion.div>

          {/* Cycling role */}
          <motion.p
            variants={up}
            className="text-sm font-medium text-white/35 mb-5 flex items-center gap-2"
          >
            <span className="text-white/20">→</span>
            <TypewriterText />
          </motion.p>

          {/* Subheadline */}
          <motion.p
            variants={up}
            className="text-base sm:text-lg text-white/45 max-w-xl leading-relaxed mb-10"
          >
            {siteConfig.subHeadline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={up} className="flex flex-wrap gap-3 mb-14">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white transition-all shadow-lg shadow-violet-900/40 hover:shadow-violet-800/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={siteConfig.resumeUrl}
              download
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] text-white/65 hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-xl text-white/40 hover:text-white/75 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Email Me
            </a>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            variants={up}
            className="flex flex-wrap gap-8 pt-8 border-t border-white/[0.06]"
          >
            {heroStats.map((stat) => (
              <Counter
                key={stat.label}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/20">
          Scroll
        </span>
        <ChevronDown className="h-3.5 w-3.5 text-white/20" />
      </div>
    </section>
  );
}
