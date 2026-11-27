import type { Metadata } from "next";
import { notFound } from "next/navigation";
import QuizFlow from "@/components/quiz/QuizFlow";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Positivity Check — a 2-minute quiz for parents | MiTran Global",
  description:
    "Eight quick questions about your teen (11–17): exam pressure, focus, confidence and emotions. Get a result and a clear next step.",
};

export default function QuizPage() {
  // Quiz is switched off for now (lib/site.ts → features.quiz).
  if (!site.features.quiz) notFound();
  return (
    <section className="relative overflow-hidden pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade" aria-hidden />
      <div className="container-x">
        <QuizFlow />
      </div>
    </section>
  );
}
