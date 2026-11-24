"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import QuizFlow from "./QuizFlow";
import { useQuiz } from "@/store/quiz";

/** Full-screen quiz popup, opened from "Take a Quiz" buttons via useQuiz(). */
export default function QuizModal() {
  const { open, hide } = useQuiz();
  const pathname = usePathname();

  // Close when navigating (e.g. "Explore the Positivity Hub" from the result)
  useEffect(() => {
    hide();
  }, [pathname, hide]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && hide();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, hide]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Positivity Check quiz"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[90] overflow-y-auto overscroll-contain bg-bg/[0.97] backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute inset-0 bg-grid-fade" aria-hidden />
          <div className="relative flex min-h-full items-start px-5 py-10 sm:items-center sm:px-8 md:py-16">
            <QuizFlow onClose={hide} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
