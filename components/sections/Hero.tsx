import { ArrowDown } from "@/components/Icons";
import { GithubIcon } from "@/components/GithubIcon";
import { LinkedinIcon } from "@/components/LinkedinIcon";
import { siteConfig } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="top" className="px-[var(--gutter)] pt-16 pb-16 sm:pt-20 sm:pb-20">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
        {/* Name */}
        <div className="lg:col-span-8">
          <h1 className="-ml-[0.045em] font-semibold leading-[0.82] tracking-[-0.055em] text-ink [font-size:clamp(3.8rem,13vw,11rem)]">
            <span className="block">Rainul</span>
            <span className="block">Hakim</span>
          </h1>
        </div>

        {/* Facts, filling the space the name leaves */}
        <aside className="self-end lg:col-span-4 lg:pb-3">
          <dl className="divide-y divide-line border-y border-line">
            <div className="flex items-baseline justify-between gap-4 py-2.5">
              <dt className="text-sm text-muted-ink">Based in</dt>
              <dd className="text-sm text-ink">{siteConfig.location}</dd>
            </div>
            <div className="py-2.5">
              <dt className="text-sm text-muted-ink">
                {siteConfig.recently.label}
              </dt>
              <dd className="mt-1 text-sm text-ink">
                {siteConfig.recently.role}
              </dd>
              <dd className="text-sm text-muted-ink">
                {siteConfig.recently.org}, {siteConfig.recently.when}
              </dd>
            </div>
          </dl>
        </aside>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="display text-[clamp(2rem,4.4vw,3.4rem)] font-normal leading-[1.05] tracking-[-0.035em] text-ink">
            {siteConfig.tagline}
          </p>
          <p className="mt-5 max-w-[48ch] text-[1.0625rem] leading-[1.6] text-muted-ink">
            {siteConfig.role}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 self-end lg:col-span-5 lg:justify-end">
          <a href="#work" className="btn btn-solid">
            See the work
            <ArrowDown className="h-4 w-4" />
          </a>
          <a href={`mailto:${siteConfig.email}`} className="btn btn-ghost">
            Email me
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 text-muted-ink transition-colors hover:text-ink"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 text-muted-ink transition-colors hover:text-ink"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
