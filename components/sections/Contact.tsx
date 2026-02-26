"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import { FadeIn } from "@/components/FadeIn";
import { siteConfig } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteConfig.email).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let&apos;s work together.
            </h2>
          </div>
        </FadeIn>

        {/* Main contact card */}
        <FadeIn delay={0.1}>
          <div className="relative overflow-hidden border border-white/[0.07] rounded-2xl bg-white/[0.025] p-8 sm:p-12">
            {/* Background gradient blobs */}
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
                filter: "blur(40px)",
              }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(6,182,212,0.10) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />

            <div className="relative">
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400/90 border border-emerald-500/20 bg-emerald-500/[0.07] rounded-full px-3 py-1.5 mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                </span>
                {siteConfig.availabilityText} · Responds within 24h
              </div>

              <p className="text-white/45 text-base max-w-lg leading-relaxed mb-8">
                {siteConfig.contactBlurb}
              </p>

              <div className="flex flex-wrap gap-3">
                {/* Email with copy-to-clipboard */}
                <div className="flex items-stretch gap-0.5">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-l-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white transition-all shadow-lg shadow-violet-900/40 hover:-translate-y-0.5"
                  >
                    <Mail className="h-4 w-4" />
                    {siteConfig.email}
                  </a>
                  <button
                    onClick={copyEmail}
                    title="Copy email address"
                    className="px-3 rounded-r-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg shadow-violet-900/40 hover:-translate-y-0.5 border-l border-white/10"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {copied ? (
                        <motion.span
                          key="check"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Check className="h-3.5 w-3.5 text-emerald-300" />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="copy"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                          transition={{ duration: 0.15 }}
                        >
                          <Copy className="h-3.5 w-3.5" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>

                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Copied toast */}
        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/80 backdrop-blur-xl border border-white/[0.08] shadow-xl text-sm text-white/80"
            >
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              Email copied to clipboard
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <FadeIn delay={0.15}>
          <p className="text-xs text-white/20 text-center mt-16 pt-6 border-t border-white/[0.05]">
            Built with Next.js & Tailwind CSS · Deployed on Vercel
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
