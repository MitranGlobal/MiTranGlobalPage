import PageShell from "@/components/ui/PageShell";
import QuizFlow from "@/components/sections/QuizFlow";
import Cta from "@/components/sections/Cta";

export default function QuizPage() {
  return (
    <>
      <PageShell
        eyebrow="Personality Quiz"
        title={
          <>
            Discover your{" "}
            <span className="gold-text italic">personality type</span>
          </>
        }
        intro="Five quick questions to reveal your natural style — and where a little positivity training can take you next."
      />
      <QuizFlow />
      <Cta />
    </>
  );
}
