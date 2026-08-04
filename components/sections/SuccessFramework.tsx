import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

/**
 * "The Framework for Success & Positivity"
 *
 * A three-stage journey rendered as an alternating zig-zag: the image sits on
 * the LEFT for stages 01 & 03 and on the RIGHT for stage 02, so no two images
 * share the same side. A faint gold "spine" runs down the centre (lg+) with a
 * numbered node per stage to signal a connected, step-by-step framework.
 *
 * Content ↔ image mapping:
 *   Stage 01 → IMG1   Stage 02 → IMG2   Stage 03 → IMG3
 */

type Insight = { source?: string; text: string };
type ModelItem = { icon: string; title: string; body: string };

type Stage = {
  n: string;
  kicker: string;
  title: string;
  intro: string;
  img: string;
  alt: string;
  badge: string;
  // Stage-specific content (only one of these is set per stage)
  evolution?: { era: string; label: string; now?: boolean }[];
  insights?: Insight[];
  model?: ModelItem[];
};

const stages: Stage[] = [
  {
    n: "01",
    kicker: "The Hidden Obstacles",
    title: "Why positivity is the skill of this generation",
    intro:
      "Children aged 11–17 navigate mobile addiction, peer pressure, academic stress, and constant negativity. Our Positivity Hub gives them a space to thrive — emotionally, intellectually, and socially.",
    img: "https://res.cloudinary.com/twteccae/image/upload/IMG1_tclwns.png",
    alt: "Illustration of the obstacles teenagers face and how positivity overcomes them",
    badge: "The Challenge",
    evolution: [
      { era: "1980s", label: "Study skills" },
      { era: "1990s", label: "Extracurriculars" },
      { era: "2000s", label: "Social skills" },
      { era: "2010s", label: "Leadership & life skills" },
      { era: "Today", label: "Positivity", now: true },
    ],
    insights: [
      {
        text: "Even the most talented child can stall under self-doubt when negativity takes over.",
      },
      {
        text: "With positivity, a child with average skills stays motivated — and achieves remarkable success.",
      },
    ],
  },
  {
    n: "02",
    kicker: "The Science Behind the Hub",
    title: "Backed by research, built on psychology",
    intro:
      "Positivity isn’t a slogan — it’s a measurable, teachable practice. We reinforce it consistently until it becomes mindset.",
    img: "https://res.cloudinary.com/twteccae/image/upload/IMG2_hmsmx0.png",
    alt: "Illustration of the science and psychology behind the Positivity Hub",
    badge: "The Science",
    insights: [
      {
        source: "WHO",
        text: "1 in 7 children (10–19) faces a mental-health challenge — most go untreated, stalling study, life, and leadership skills.",
      },
      {
        source: "Stanford",
        text: "Positivity measurably lifts academics, mental health, and relationships, while negativity holds students back.",
      },
      {
        source: "Practice",
        text: "Like any habit, regular reinforcement builds resilience, confidence, and a proactive attitude.",
      },
      {
        source: "NLP",
        text: "We use Neuro-Linguistic Programming and human psychology to give children and parents tools for lifelong success.",
      },
    ],
  },
  {
    n: "03",
    kicker: "How the Framework Works",
    title: "Our ultimate model for teen success",
    intro:
      "Every child deserves to feel positive, empowered, and future-ready. Our learning model turns that belief into daily, lasting habits.",
    img: "https://res.cloudinary.com/twteccae/image/upload/IMG3_oayank.png",
    alt: "Illustration of the MiTran Global learning model and framework",
    badge: "The Model",
    model: [
      {
        icon: "🎬",
        title: "Visual Learning",
        body: "Videos, mind maps, and infographics that boost retention.",
      },
      {
        icon: "🧪",
        title: "Experiential Learning",
        body: "Real-world exercises that apply success principles.",
      },
      {
        icon: "💬",
        title: "Community Engagement",
        body: "Peer discussions and challenges that reinforce learning.",
      },
      {
        icon: "🎮",
        title: "Gamification",
        body: "Interactive challenges, rewards, and progress tracking.",
      },
      {
        icon: "🏆",
        title: "Leaderboard",
        body: "Healthy competition and accountability through live rankings.",
      },
      {
        icon: "🔁",
        title: "Habit Creation",
        body: "Daily prompts and structured tasks that build lasting habits.",
      },
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden
      className="mt-0.5 h-5 w-5 flex-none"
      fill="none"
    >
      <circle cx="10" cy="10" r="9" className="fill-gold/15" />
      <path
        d="M6 10.5l2.5 2.5L14 7.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gold"
      />
    </svg>
  );
}

export default function SuccessFramework() {
  return (
    <section id="framework" className="section border-t border-line">
      <div className="container-x">
        {/* Section header */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">The Framework</p>
          <h2 className="mt-5 text-display-2 font-display">
            The Framework for{" "}
            <span className="gold-text italic">Success &amp; Positivity</span>
          </h2>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/[0.06] px-4 py-1.5 text-sm text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Exclusively for students aged 11–17
          </p>
        </Reveal>

        {/* Stages */}
        <div className="relative mt-20 md:mt-24">
          {/* Central spine (lg+) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold/25 to-transparent lg:block"
          />

          <div className="space-y-16 md:space-y-20 lg:space-y-28">
            {stages.map((stage, i) => {
              const imageLeft = i % 2 === 0; // 01 & 03 left, 02 right
              return (
                <Reveal key={stage.n}>
                  <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
                    {/* Numbered node on the spine (lg+) */}
                    <div
                      aria-hidden
                      className="absolute left-1/2 top-1/2 z-10 hidden h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-gold/40 bg-bg-elev font-display text-lg text-gold shadow-glow lg:grid"
                    >
                      {stage.n}
                    </div>

                    {/* Media */}
                    <figure
                      className={`card relative overflow-hidden ${
                        imageLeft ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
                      <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-gold/[0.06] blur-3xl" />
                      <div className="group relative aspect-[4/3] w-full">
                        <Image
                          src={stage.img}
                          alt={stage.alt}
                          fill
                          sizes="(min-width: 1024px) 36rem, 90vw"
                          className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                        />
                      </div>
                      <figcaption className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-line bg-black/40 px-3 py-1 text-xs text-ink-muted backdrop-blur">
                        <span className="font-display text-gold">{stage.n}</span>
                        {stage.badge}
                      </figcaption>
                    </figure>

                    {/* Content */}
                    <div
                      className={`relative ${
                        imageLeft ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      {/* Ghost number accent */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -top-10 -z-0 select-none font-display text-[7rem] leading-none text-white/[0.03] md:text-[9rem]"
                      >
                        {stage.n}
                      </span>

                      <div className="relative">
                        <p className="eyebrow">
                          <span className="gold-text font-medium">
                            Stage {stage.n}
                          </span>
                          <span className="text-ink-faint">·</span>
                          {stage.kicker}
                        </p>
                        <h3 className="mt-5 text-display-3 font-display">
                          {stage.title}
                        </h3>
                        <p className="mt-4 text-ink-muted leading-relaxed md:text-lg">
                          {stage.intro}
                        </p>

                        {/* Stage 01 — evolution of essential skills */}
                        {stage.evolution && (
                          <div className="mt-7">
                            <div className="flex flex-wrap items-center gap-2">
                              {stage.evolution.map((e, idx) => (
                                <span key={e.era} className="flex items-center">
                                  <span
                                    className={`inline-flex flex-col rounded-xl border px-3 py-1.5 text-xs leading-tight ${
                                      e.now
                                        ? "border-gold/40 bg-gold/[0.08] text-ink"
                                        : "border-line bg-white/[0.02] text-ink-muted"
                                    }`}
                                  >
                                    <span
                                      className={
                                        e.now
                                          ? "gold-text font-semibold"
                                          : "text-ink-faint"
                                      }
                                    >
                                      {e.era}
                                    </span>
                                    <span
                                      className={
                                        e.now ? "font-medium text-ink" : ""
                                      }
                                    >
                                      {e.label}
                                    </span>
                                  </span>
                                  {idx < stage.evolution!.length - 1 && (
                                    <span
                                      aria-hidden
                                      className="mx-1 text-ink-faint"
                                    >
                                      →
                                    </span>
                                  )}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Insights / science facts as check items */}
                        {stage.insights && (
                          <ul className="mt-7 space-y-4">
                            {stage.insights.map((it) => (
                              <li key={it.text} className="flex gap-3">
                                <CheckIcon />
                                <p className="text-sm leading-relaxed text-ink-muted md:text-base">
                                  {it.source && (
                                    <span className="mr-2 text-xs font-semibold uppercase tracking-[0.14em] gold-text">
                                      {it.source}
                                    </span>
                                  )}
                                  {it.text}
                                </p>
                              </li>
                            ))}
                          </ul>
                        )}

                        {/* Stage 03 — learning model grid */}
                        {stage.model && (
                          <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            {stage.model.map((m) => (
                              <div
                                key={m.title}
                                className="rounded-xl border border-line bg-white/[0.02] p-4 transition-colors hover:border-gold/25"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-lg">{m.icon}</span>
                                  <p className="font-display text-sm text-ink">
                                    {m.title}
                                  </p>
                                </div>
                                <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                                  {m.body}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
