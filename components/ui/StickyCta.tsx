"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";

/**
 * Gold "book a call" band fixed to the bottom of every page — the same look as
 * the announcement bar on the Parent Live Sessions landing page, but anchored
 * to the bottom. `StickyCtaSpacer` (rendered after the footer) reserves the
 * same height so the bar never hides the end of the page.
 *
 * z-30 keeps it under the header (z-50), the mobile menu (z-40) and the
 * lightbox (z-80).
 */
export default function StickyCta() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { y: "100%" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky-cta fixed inset-x-0 bottom-0 z-30 border-t border-black/10 pb-[env(safe-area-inset-bottom)] text-black shadow-[0_-12px_40px_-12px_rgba(0,0,0,0.7)]"
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-4 md:h-[84px]">
        <p className="min-w-0 text-[13px] font-semibold uppercase leading-snug tracking-[0.02em] sm:text-[15px] md:text-[17px]">
          <span aria-hidden className="mr-2">🔥</span>
          <span className="sm:hidden">Talk to our coach</span>
          <span className="hidden sm:inline lg:hidden">
            Talk to our coach about your teen
          </span>
          <span className="hidden lg:inline">
            Not sure where your teen stands? Talk to our coach 1‑on‑1
          </span>
        </p>

        <a
          href={site.urls.booking}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-semibold text-gold-bright transition-transform duration-300 hover:-translate-y-[1px] hover:bg-black/90 md:px-8 md:py-3.5 md:text-base"
        >
          Book a call <span aria-hidden>→</span>
        </a>
      </div>
    </motion.div>
  );
}

/** Reserves room at the bottom of the page equal to the sticky bar. */
export function StickyCtaSpacer() {
  return (
    <div
      aria-hidden
      className="h-[calc(72px+env(safe-area-inset-bottom))] md:h-[calc(84px+env(safe-area-inset-bottom))]"
    />
  );
}
