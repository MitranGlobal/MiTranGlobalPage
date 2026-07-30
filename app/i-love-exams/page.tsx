import PageShell from "@/components/ui/PageShell";
import FeatureGrid from "@/components/ui/FeatureGrid";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";
import { site } from "@/lib/site";

export default function ILoveExamsPage() {
  return (
    <>
      <PageShell
        eyebrow="Academic Excellence"
        title={
          <>
            Transform exam anxiety into{" "}
            <span className="gold-text italic">excitement</span>
          </>
        }
        intro="Build the strategies, confidence, and habits to perform under pressure and thrive — one exam at a time."
        primaryCta={{ label: "Enroll now →", href: site.urls.enroll }}
        secondaryCta={{
          label: "Book a call",
          href: site.urls.calendly,
        }}
      />

      <FeatureGrid
        eyebrow="What's inside"
        heading={
          <>
            The complete{" "}
            <span className="gold-text italic">exam-mastery</span> system
          </>
        }
        features={[
          { icon: "🧭", title: "Beat the Anxiety", body: "Rewire the emotional response to exams using proven NLP anchoring techniques." },
          { icon: "🎯", title: "Focus Frameworks", body: "Study systems that turn scattered effort into deep, retained learning." },
          { icon: "🧠", title: "Memory Palaces", body: "Superpower memory techniques — POPM, mnemonics, and spaced repetition." },
          { icon: "🕒", title: "Time Design", body: "Weekly plans that respect your child's rhythm, not fight against it." },
          { icon: "💬", title: "Mock Coaching", body: "Live walk-throughs and 1-on-1 review sessions for real questions." },
          { icon: "🏆", title: "Champion Identity", body: "Emerge not just prepared, but transformed — with a new self-belief." },
        ]}
      />

      <Testimonials />
      <Cta />
    </>
  );
}
