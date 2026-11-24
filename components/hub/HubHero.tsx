"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { WavyBackground } from "./WavyBackground";
import { hubHero } from "@/lib/hub";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

// MiTran gold range for the waves; Platinum swaps in a silver range.
const GOLD_WAVES = ["#e9c46a", "#c99b3a", "#f5d17a", "#8a6a1f", "#5a4512"];
const PLATINUM_WAVES = ["#e9c46a", "#d9dde3", "#f5d17a", "#9aa3ad", "#c99b3a"];

/**
 * Positivity Hub hero (from the Positivity Hub site): opens on the parent's
 * question, gold waves behind. `platinum` adds the Platinum badge and label.
 */
export default function HubHero({
  platinum = false,
  nextHref,
  nextLabel,
}: {
  platinum?: boolean;
  /** On-page anchor for the primary button, e.g. "#missing-skill". */
  nextHref: string;
  nextLabel: string;
}) {
  const reduced = useReducedMotion();
  const rise = (i: number) => ({
    initial: reduced ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  });
  const [ask, world] = hubHero.question;

  return (
    <section aria-label="Introduction" className="relative bg-bg">
      <WavyBackground
        containerClassName="h-auto min-h-[100svh] items-stretch justify-start bg-bg pt-16 md:pt-20"
        className="flex w-full flex-1 flex-col"
        colors={platinum ? PLATINUM_WAVES : GOLD_WAVES}
        backgroundFill="#08090c"
        waveOpacity={0.45}
        waveWidth={46}
        blur={10}
        speed="slow"
      >
        {/* Soft wash keeps the copy legible where the waves pass behind it. */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_50%,rgba(8,9,12,0.88)_0%,rgba(8,9,12,0.6)_55%,rgba(8,9,12,0.15)_100%)]"
          aria-hidden
        />

        <div className="container-x relative flex flex-1 flex-col items-center justify-center pb-16 pt-10 text-center sm:pt-14">
          <div className="mx-auto flex max-w-[52rem] flex-col items-center">
            {platinum && (
              <motion.div {...rise(0)} className="mb-7 flex flex-col items-center gap-4">
                <Image
                  src="/images/platinum-logo.png"
                  alt="MiTran Global Platinum"
                  width={783}
                  height={786}
                  priority
                  className="h-28 w-auto drop-shadow-[0_10px_40px_rgba(255,255,255,0.12)] sm:h-36"
                />
                <span className="platinum-chip inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-black">
                  Positivity Hub · Platinum
                </span>
              </motion.div>
            )}

            <motion.p
              {...rise(platinum ? 1 : 0)}
              className="flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold sm:text-[15px]"
            >
              <span className="hidden h-px w-8 shrink-0 bg-gold/70 sm:block" aria-hidden />
              {hubHero.audience}
              <span className="hidden h-px w-8 shrink-0 bg-gold/70 sm:block" aria-hidden />
            </motion.p>

            <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.75rem)] leading-[1.08] tracking-[-0.015em]">
              <motion.span {...rise(1)} className="block">
                {ask}
              </motion.span>
              <motion.span {...rise(2)} className="block gold-text italic">
                {world}
              </motion.span>
            </h1>

            <motion.ul
              {...rise(3)}
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-0"
              aria-label="What parents notice"
            >
              {hubHero.signs.map(([effort, drop], i) => (
                <li
                  key={effort}
                  className={cn(
                    "flex flex-wrap items-baseline justify-center gap-x-2 font-display text-lg sm:text-xl",
                    i > 0 ? "sm:border-l sm:border-gold/40 sm:pl-6" : "sm:pr-6"
                  )}
                >
                  <span className="whitespace-nowrap text-ink/60">{effort}</span>
                  <span className="whitespace-nowrap text-ink">{drop}</span>
                </li>
              ))}
            </motion.ul>

            <motion.p
              {...rise(4)}
              className="mt-7 max-w-[36rem] text-base leading-relaxed text-ink/80 sm:text-lg"
            >
              {platinum
                ? "The complete 24-session, one-to-one Positivity Framework™ journey — a coach, a structured plan and daily habits that make the change last."
                : hubHero.lead}
            </motion.p>

            <motion.div
              {...rise(5)}
              className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
            >
              <a href={nextHref} className="btn-primary px-8 py-4 text-base">
                {nextLabel} <span aria-hidden>↓</span>
              </a>
              <a
                href={site.urls.booking}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost px-8 py-4 text-base"
              >
                Book a call
              </a>
            </motion.div>
          </div>
        </div>
      </WavyBackground>
    </section>
  );
}
