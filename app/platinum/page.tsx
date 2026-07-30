import PageShell from "@/components/ui/PageShell";
import FeatureGrid from "@/components/ui/FeatureGrid";
import Framework from "@/components/sections/Framework";
import Testimonials from "@/components/sections/Testimonials";
import Cta from "@/components/sections/Cta";
import { site } from "@/lib/site";

const roadmapStages = [
  {
    n: "01 · UNDERSTAND",
    title: "Imparting Positivity Experience",
    body: "Discover where your child stands today.",
    bullets: [
      "Positivity Score Test",
      "One-to-one with the coach",
      "7-Day Challenge every Sunday",
      "Journey to Positivity course",
    ],
  },
  {
    n: "02 · TRANSFORM",
    title: "Positivity Hub Subscription",
    body: "Build the core skills that last.",
    bullets: [
      "Positivity Score & review",
      "3 flagship online courses",
      "Weekly Power-Up Live",
      "Needs-based 1-on-1 coaching",
    ],
  },
  {
    n: "03 · ACT",
    title: "Positivity Hub Gold",
    body: "Go deeper across six courses.",
    bullets: [
      "Everything in Transform",
      "6 online courses in total",
      "Weekly Power-Up Live",
      "4 needs-based 1-on-1 sessions",
    ],
  },
  {
    n: "04 · MENTORING",
    title: "Positivity Hub Platinum",
    body: "The full 24-session journey.",
    bullets: [
      "24 one-on-one sessions / year",
      "Everything in Gold subscription",
      "All 6 online courses",
      "Live Hub & Expression Mastery Hub",
    ],
  },
];

export default function PlatinumPage() {
  return (
    <>
      <PageShell
        eyebrow="✦ The Positivity Hub · Platinum Programme"
        title={
          <>
            A positive teen today, a{" "}
            <span className="gold-text italic">confident leader</span> tomorrow.
          </>
        }
        intro="The life-changing Positivity Framework™ — a 90-day, 24-session, 1-on-1 transformation journey that nurtures confidence, resilience and success habits for a brighter future."
        primaryCta={{ label: "Begin the journey →", href: site.urls.checkout }}
        secondaryCta={{ label: "See the 24 sessions", href: "#roadmap" }}
      />

      <FeatureGrid
        eyebrow="The all-in-one platform"
        heading={
          <>
            Everything your child needs, in{" "}
            <span className="gold-text italic">one hub</span>
          </>
        }
        features={[
          { icon: "🎓", title: "Course Access", body: "All individual online courses covering essential skills for academic and personal growth." },
          { icon: "🎥", title: "Live Sessions", body: "Expert-led live sessions aligned with modules, featuring transformational coaching." },
          { icon: "📊", title: "Assessments", body: "Structured assessments and scientific evaluations to track progress and enhance understanding." },
          { icon: "🏅", title: "Certificates", body: "Official certification upon completion, validating your learning and achievements." },
        ]}
      />

      <Framework />

      <section id="roadmap" className="section border-t border-line">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">The MiTran Roadmap</p>
            <h2 className="mt-5 text-display-2 font-display">
              Four stages, one{" "}
              <span className="gold-text italic">transformation</span>
            </h2>
            <p className="mt-5 text-ink-muted leading-relaxed md:text-lg">
              From first understanding to full mentoring — a path designed to
              meet every child exactly where they are.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {roadmapStages.map((s) => (
              <div key={s.n} className="card flex flex-col">
                <p className="text-xs uppercase tracking-[0.18em] gold-text">
                  {s.n}
                </p>
                <h3 className="mt-3 font-display text-xl">{s.title}</h3>
                <p className="mt-3 text-sm text-ink-muted">{s.body}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink-muted">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Cta />
    </>
  );
}
