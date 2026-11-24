"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const SealMedallion = dynamic(() => import("./SealMedallion"), {
  ssr: false,
  loading: () => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/yellowzone/seal.png"
      alt="Yellow Zone certification seal"
      className="h-full w-full object-contain p-8 opacity-90"
    />
  ),
});

const rise = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

/** YellowZone hero, from the Lead Capture page, in the site's dark theme. */
export default function YzHero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade" aria-hidden />
      <div className="container-x grid items-center gap-8 pb-14 pt-8 md:pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.1, delayChildren: 0.05 }}>
          <motion.p variants={rise} transition={{ duration: 0.6 }} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            MiTran Global · Yellow Zone
          </motion.p>

          <motion.h1
            variants={rise}
            transition={{ duration: 0.7 }}
            className="mt-6 font-display text-[clamp(2.25rem,4.6vw,4rem)] leading-[1.06] tracking-tight"
          >
            Your school reports results.
            <span className="block gold-text italic">Can it report how students feel?</span>
          </motion.h1>

          <motion.p variants={rise} transition={{ duration: 0.7 }} className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            Yellow Zone assesses your campus with Emotion AI, scores it against a
            defined standard, and certifies it.
          </motion.p>

          <motion.div variants={rise} transition={{ duration: 0.7 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#apply" className="btn-primary px-8 py-4 text-base">
              Apply now →
            </a>
            <a href="#what-is-yellowzone" className="btn-ghost px-8 py-4 text-base">
              ▶ What is YellowZone?
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto h-[260px] w-full max-w-[420px] sm:h-[340px] lg:h-[440px] lg:max-w-none"
        >
          <div className="pointer-events-none absolute inset-[15%] rounded-full bg-gold/10 blur-3xl" aria-hidden />
          <SealMedallion />
        </motion.div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
    </section>
  );
}
