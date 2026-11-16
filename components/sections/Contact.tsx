"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowOut, Check, Copy } from "@/components/Icons";
import { GithubIcon } from "@/components/GithubIcon";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import { siteConfig } from "@/data/portfolio";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked; the mailto link still works */
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 px-[var(--gutter)] py-20 sm:py-24">
      <div className="reveal grid items-stretch overflow-hidden rounded-[8px] border border-line sm:grid-cols-[1fr_auto]">
        <div className="p-8 sm:p-12">
          <p className="eyebrow text-[0.95rem] tracking-[0.1em]">04 · Contact</p>
          <h2 className="mt-2.5 text-[clamp(2.4rem,6vw,4.2rem)] font-semibold leading-[1] tracking-[-0.045em] text-ink">
            Let&apos;s talk.
          </h2>
          <p className="mt-5 max-w-xl text-[1.0625rem] leading-[1.65] text-muted-ink">
            {siteConfig.contactBlurb}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={`mailto:${siteConfig.email}`} className="btn btn-solid text-[0.95rem]">
              {siteConfig.email}
            </a>
            <button type="button" onClick={copyEmail} className="btn btn-ghost text-[0.95rem]">
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-[var(--brand)]" />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  Copy
                </>
              )}
            </button>
            <span aria-live="polite" className="sr-only">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>

          <ul className="mt-8 grid max-w-xl divide-y divide-line border-y border-line">
            {[
              { label: "LinkedIn", note: "in/rainulhakim", href: siteConfig.linkedin, icon: <LinkedinIcon className="h-4 w-4" /> },
              { label: "GitHub", note: "RainulHakim", href: siteConfig.github, icon: <GithubIcon className="h-4 w-4" /> },
              { label: "Résumé", note: "PDF", href: siteConfig.resumeUrl, icon: null },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nudge flex items-center justify-between gap-4 py-3 text-ink transition-colors hover:bg-[var(--bg-2)] sm:px-3"
                >
                  <span className="flex items-center gap-2.5 text-[0.95rem] font-medium">
                    {l.icon}
                    {l.label}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-muted-ink">
                    {l.note}
                    <ArrowOut className="h-3.5 w-3.5" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative min-h-[20rem] w-full overflow-hidden border-t border-line sm:min-h-full sm:w-[22rem] sm:border-l sm:border-t-0">
          <Image
            src={siteConfig.portrait}
            alt={`${siteConfig.name}, portrait`}
            fill
            sizes="(min-width: 640px) 22rem, 100vw"
            className="object-cover object-[center_28%]"
          />
        </div>
      </div>
    </section>
  );
}
