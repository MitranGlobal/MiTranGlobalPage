import PageShell from "@/components/ui/PageShell";
import FeatureGrid from "@/components/ui/FeatureGrid";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";
import { site } from "@/lib/site";

export default function PositiveMindMasteryPage() {
  return (
    <>
      <PageShell
        eyebrow="Mindset & Wellbeing"
        title={
          <>
            Build a{" "}
            <span className="gold-text italic">positive</span> operating system
          </>
        }
        intro="Emotional resilience, a growth mindset, and lasting positivity habits — using NLP and evidence-based psychology."
        primaryCta={{ label: "Enroll now →", href: site.urls.enroll }}
        secondaryCta={{
          label: "Take the positivity score",
          href: site.urls.positivityScore,
        }}
      />

      <FeatureGrid
        eyebrow="What your child gains"
        heading={
          <>
            Rewire the response to{" "}
            <span className="gold-text italic">everything</span>
          </>
        }
        features={[
          { icon: "🌱", title: "Growth Mindset", body: "Move from 'I can't' to 'I can't yet' — the single most powerful shift in a young life." },
          { icon: "🧭", title: "Emotional Regulation", body: "Tools to name, understand, and channel emotions before they hijack behaviour." },
          { icon: "💫", title: "Positive Anchoring", body: "NLP techniques to lock in confident states, on-demand, when it matters most." },
          { icon: "🛡️", title: "Resilience Loops", body: "Micro-habits that build the muscle to bounce back from setbacks." },
          { icon: "🗣️", title: "Inner Dialogue", body: "Redesigning self-talk — the most influential voice in your child's head." },
          { icon: "🎯", title: "Purpose Compass", body: "Clarity on what matters, and the confidence to pursue it consistently." },
        ]}
      />

      <Testimonials />
      <Cta />
    </>
  );
}
