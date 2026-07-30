import PageShell from "@/components/ui/PageShell";
import FeatureGrid from "@/components/ui/FeatureGrid";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";
import { site } from "@/lib/site";

export default function AcceleratedLearningPage() {
  return (
    <>
      <PageShell
        eyebrow="Learning Science"
        title={
          <>
            Learn faster, retain{" "}
            <span className="gold-text italic">deeper</span>
          </>
        }
        intro="Master proven techniques to absorb, retain, and apply knowledge faster. Visual, experiential, and gamified learning at its best."
        primaryCta={{ label: "Enroll now →", href: site.urls.enroll }}
        secondaryCta={{ label: "Free training", href: "/free-training" }}
      />

      <FeatureGrid
        eyebrow="The methodology"
        heading={
          <>
            Learn how <span className="gold-text italic">to learn</span>
          </>
        }
        features={[
          { icon: "🚀", title: "Speed Reading", body: "Double your reading pace without losing comprehension — a foundational skill." },
          { icon: "🧩", title: "Mind Mapping", body: "Turn textbooks into visual maps the brain naturally remembers." },
          { icon: "🎨", title: "Visual Memory", body: "Convert abstract concepts into images your child recalls effortlessly." },
          { icon: "🔁", title: "Spaced Repetition", body: "Cognitive-science-backed schedules for long-term retention." },
          { icon: "🎮", title: "Gamified Practice", body: "Streaks, badges and leaderboards that make effort addictive." },
          { icon: "📈", title: "Weekly Progress", body: "Simple check-ins that keep the habit alive without pressure." },
        ]}
      />

      <Testimonials />
      <Cta />
    </>
  );
}
