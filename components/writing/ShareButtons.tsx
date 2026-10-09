"use client";

import { useState } from "react";
import { Check, Link2 } from "lucide-react";
import { LinkedinIcon } from "@/components/LinkedinIcon";

export function ShareButtons({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const currentUrl = () => window.location.href.split("#")[0];

  const copy = async () => {
    await navigator.clipboard.writeText(currentUrl()).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openShare = (target: "linkedin" | "x") => {
    const url = encodeURIComponent(currentUrl());
    const shareUrl =
      target === "linkedin"
        ? `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
        : `https://x.com/intent/post?url=${url}&text=${encodeURIComponent(title)}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  const btn =
    "inline-flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg transition-all";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button type="button" onClick={copy} className={btn}>
        {copied ? (
          <Check className="h-3.5 w-3.5 text-emerald-400" />
        ) : (
          <Link2 className="h-3.5 w-3.5" />
        )}
        {copied ? "Copied" : "Copy link"}
      </button>
      <button type="button" onClick={() => openShare("linkedin")} className={btn}>
        <LinkedinIcon className="h-3.5 w-3.5" />
        LinkedIn
      </button>
      <button type="button" onClick={() => openShare("x")} className={btn}>
        <span aria-hidden="true" className="text-[13px] leading-none font-semibold">
          𝕏
        </span>
        Post
      </button>
    </div>
  );
}
