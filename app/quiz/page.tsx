import type { Metadata } from "next";
import QuizFlow from "@/components/quiz/QuizFlow";

export const metadata: Metadata = {
  title: "The Positivity Check — a 2-minute quiz for parents | MiTran Global",
  description:
    "Eight quick questions about your teen (11–17): exam pressure, focus, confidence and emotions. Get a result and a clear next step.",
};

export default function QuizPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade" aria-hidden />
      <div className="container-x">
        <QuizFlow />
      </div>
    </section>
  );
}
