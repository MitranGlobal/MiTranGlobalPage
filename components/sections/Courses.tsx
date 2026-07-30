"use client";

import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { courses, site } from "@/lib/site";
import { useLightbox } from "@/store/lightbox";
import { motion } from "framer-motion";

export default function Courses() {
  const openWith = useLightbox((s) => s.openWith);

  return (
    <section id="courses" className="section border-t border-line">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Courses</p>
          <h2 className="mt-5 text-display-2 font-display">
            Programmes built for{" "}
            <span className="gold-text italic">real transformation</span>
          </h2>
        </Reveal>

        <Reveal className="mt-16 grid gap-6 md:grid-cols-3" stagger>
          {courses.map((c) => (
            <motion.article
              key={c.slug}
              data-reveal-item
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="card group flex flex-col"
            >
              <div className="text-3xl">{c.icon}</div>
              <p className="mt-6 text-xs uppercase tracking-[0.18em] gold-text">
                {c.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-2xl">{c.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {c.blurb}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Link
                  href={`/${c.slug}`}
                  className="text-sm text-ink transition-colors hover:text-gold"
                >
                  Explore course →
                </Link>
                <button
                  onClick={() =>
                    openWith({
                      eyebrow: c.eyebrow,
                      title: c.title,
                      body: c.blurb,
                      cta: { label: "Enroll now", href: site.urls.enroll },
                    })
                  }
                  className="ml-auto text-xs uppercase tracking-widest text-ink-faint hover:text-ink"
                >
                  Quick view
                </button>
              </div>
            </motion.article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
