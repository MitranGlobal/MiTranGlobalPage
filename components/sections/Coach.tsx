import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const coach = {
  name: "Vidyashankar Guru",
  designation: "Co-Founder and Chief Vision Officer at MiTran Global",
  photo: "/images/vidyashankar-guru.jpg",
  story: [
    "Grew up in a small village in South India — no elite school, no big-city advantages. Struggled with confidence, self-doubt, and freezing under pressure as a teen.",
    "Realised the hard truth: capability without emotional strength will not help to achieve anything in life.",
    "Spent 22+ years studying what schools never teach students — mindset, discipline, and inner strength.",
    "Trained over 25,000 teens and professionals across 40+ nationalities as a TEDx Speaker and Author of five books.",
    "Today his only mission is giving every struggling teen the tools he wished he had at their age.",
  ],
  highlights: [
    { value: "22+", label: "Years of study" },
    { value: "25K+", label: "Teens & professionals" },
    { value: "40+", label: "Nationalities" },
    { value: "5", label: "Books authored" },
  ],
};

export default function Coach() {
  return (
    <section id="coach" className="section border-t border-line">
      <div className="container-x grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
        {/* Story */}
        <Reveal className="order-2 lg:order-1">
          <p className="eyebrow">Meet the Coach</p>
          <h2 className="mt-5 text-display-2 font-display">
            Vidyashankar <span className="gold-text italic">Guru</span>
          </h2>
          <p className="mt-3 text-sm uppercase tracking-[0.16em] text-gold md:text-base">
            {coach.designation}
          </p>

          <ul className="mt-8 space-y-4">
            {coach.story.map((line) => (
              <li
                key={line}
                className="flex gap-3 text-ink-muted leading-relaxed md:text-lg"
              >
                <span aria-hidden className="mt-[0.1em] shrink-0 text-gold">
                  ✦
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <a
            href={site.urls.booking}
            target="_blank"
            rel="noreferrer"
            className="btn-primary mt-10 px-8 py-4 text-base"
          >
            Book a one-to-one session →
          </a>
        </Reveal>

        {/* Photo card */}
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gold/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-line bg-black shadow-card">
              <Image
                src={coach.photo}
                alt={`${coach.name}, ${coach.designation}`}
                width={778}
                height={778}
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 28rem, 100vw"
                className="h-auto w-full"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-6 pb-6 pt-16">
                <p className="font-display text-2xl">{coach.name}</p>
                <p className="mt-1 text-sm text-ink-muted">
                  TEDx Speaker · Author of five books
                </p>
              </div>
            </div>

            <div className="relative mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {coach.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-line bg-white/[0.02] px-3 py-4 text-center"
                >
                  <div className="font-display text-2xl gold-text">{h.value}</div>
                  <div className="mt-1 text-[10.5px] uppercase leading-tight tracking-widest text-ink-faint">
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
