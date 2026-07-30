"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useLightbox } from "@/store/lightbox";

export default function Lightbox() {
  const { open, content, close } = useLightbox();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] grid place-items-center bg-black/70 backdrop-blur-md p-4"
          onClick={close}
        >
          <motion.div
            initial={{ y: 24, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 20, scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl border border-line bg-bg-card p-8 shadow-glow"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-line bg-white/[0.02] text-ink-muted hover:text-ink"
            >
              ×
            </button>
            {content.eyebrow && (
              <p className="eyebrow mb-4">{content.eyebrow}</p>
            )}
            <h3 className="font-display text-2xl md:text-3xl">{content.title}</h3>
            <p className="mt-4 text-ink-muted leading-relaxed">{content.body}</p>
            {content.cta && (
              <a
                href={content.cta.href}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-6"
              >
                {content.cta.label}
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
