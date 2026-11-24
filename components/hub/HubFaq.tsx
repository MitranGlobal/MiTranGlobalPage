"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import type { Faq } from "@/lib/hub";
import { cn } from "@/lib/cn";

/** FAQ accordion at the end of Positivity Hub and Platinum. */
export default function HubFaq({ items, title = "Questions parents ask" }: { items: Faq[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section border-t border-line">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-5 text-display-2 font-display">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gold-text italic">{title.split(" ").slice(-1)}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="divide-y divide-line border-y border-line">
            {items.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-lg md:text-xl">{f.q}</span>
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-gold transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 leading-relaxed text-ink-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
