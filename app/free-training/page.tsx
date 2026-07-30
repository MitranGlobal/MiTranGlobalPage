import PageShell from "@/components/ui/PageShell";
import FeatureGrid from "@/components/ui/FeatureGrid";
import Cta from "@/components/sections/Cta";
import { site } from "@/lib/site";

export default function FreeTrainingPage() {
  return (
    <>
      <PageShell
        eyebrow="Free Training"
        title={
          <>
            A free taste of the{" "}
            <span className="gold-text italic">Positivity Framework™</span>
          </>
        }
        intro="A no-cost, no-obligation introduction to the science and skills we teach — perfect for parents and teens deciding if MiTran is right for them."
        primaryCta={{ label: "Get free training →", href: site.urls.enroll }}
        secondaryCta={{
          label: "Talk to a coach",
          href: site.urls.calendly,
        }}
      />

      <FeatureGrid
        eyebrow="What you get"
        heading={
          <>
            An intro that <span className="gold-text italic">actually</span> helps
          </>
        }
        features={[
          { icon: "🎥", title: "Foundational Video", body: "The core Positivity Framework™ explained in under 45 minutes, no fluff." },
          { icon: "📘", title: "Free Ebook", body: "A parent-and-teen companion guide with exercises you can start today." },
          { icon: "🧪", title: "Positivity Score", body: "A 5-minute assessment that surfaces your child's real starting point." },
          { icon: "💬", title: "Community Access", body: "Join our WhatsApp community of parents on the same journey." },
          { icon: "📮", title: "Weekly Prompts", body: "Small, science-backed nudges delivered to your inbox each week." },
          { icon: "🎁", title: "Course Discount", body: "A meaningful discount if you decide to continue with any paid course." },
        ]}
      />

      <Cta />
    </>
  );
}
