"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { site, stats } from "@/lib/site";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => null,
});

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};
const item = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-40">
      {/* Three.js scene */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-70">
        <HeroScene />
      </div>
      {/* Fade overlays so type stays readable */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />

      <div className="container-x">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.p variants={item} className="eyebrow mx-auto">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Positivity Framework™ · Ages 11–17
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-6 text-display-1 font-display leading-[1.02]"
          >
            A positive teen today,
            <br />
            a <span className="gold-text italic">confident leader</span> tomorrow.
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-ink-muted"
          >
            We equip teenagers with the mindset, skills, and emotional intelligence
            to thrive — consistently imparting positivity through science-backed
            learning.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href={site.urls.positivityScore}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              Find your child&apos;s score →
            </a>
            <a
              href={site.urls.checkout}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              ▶ Join the experience
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-white/[0.02] px-5 py-6 text-center backdrop-blur-sm"
            >
              <div className="font-display text-3xl md:text-4xl gold-text">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-ink-faint">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
