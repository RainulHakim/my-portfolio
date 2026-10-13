"use client";

import { useState } from "react";
import { Check, Copy } from "@/components/Icons";
import { GithubIcon } from "@/components/GithubIcon";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import Image from "next/image";
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
    <section id="contact" className="scroll-mt-24 px-[var(--gutter)] py-20 sm:py-24">
      <div>
        <div className="grid items-stretch gap-0 border border-line sm:grid-cols-[1fr_auto]">
          <div className="p-8 sm:p-12">
            <p className="eyebrow">Contact</p>
          <h2 className="mt-2 text-[clamp(2.2rem,5vw,3.4rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-ink">
            Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.65] text-muted-ink">
            {siteConfig.contactBlurb}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 btn btn-solid text-[0.95rem]"
            >
              {siteConfig.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 btn btn-ghost text-[0.95rem]"
            >
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

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn btn-ghost text-[0.95rem]"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn btn-ghost text-[0.95rem]"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            </div>
          </div>

          <div className="relative min-h-[18rem] w-full overflow-hidden border-t border-line sm:min-h-full sm:w-[20rem] sm:border-l sm:border-t-0">
            <Image
              src={siteConfig.portrait}
              alt={`${siteConfig.name}, portrait`}
              fill
              sizes="(min-width: 640px) 20rem, 100vw"
              className="object-cover object-[center_28%]"
            />
          </div>
        </div>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
          <p className="text-xs text-muted-ink">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-xs text-muted-ink hover:text-ink"
          >
            Résumé (PDF)
          </a>
        </footer>
      </div>
    </section>
  );
}
