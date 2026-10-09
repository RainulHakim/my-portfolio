import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

export function WritingHeader({
  backHref,
  backLabel,
}: {
  backHref: string;
  backLabel: string;
}) {
  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-xl border-b border-white/[0.06]">
      <nav className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        <Link
          href="/"
          className="text-sm font-semibold text-white/80 hover:text-white transition-colors tracking-tight"
        >
          {siteConfig.name}
        </Link>
      </nav>
    </header>
  );
}
