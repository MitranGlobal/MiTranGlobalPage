import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import MeetTheCoach from "@/components/about/MeetTheCoach";
import SocialIcon from "@/components/ui/SocialIcon";
import { pillars, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — MiTran Global",
  description:
    "MiTran Global builds confident, resilient and future-ready teenagers through the science-backed Positivity Framework™ — for parents, students and schools.",
};

const ADDRESS = [
  "234, Spaces Shantiniketan, Prestige Shantiniketan",
  "2nd Floor, Crescent Tower 4, Krishnarajapuram",
  "Bangalore – 560066, Karnataka, India",
];
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Spaces Shantiniketan, Crescent Tower 4, Prestige Shantiniketan, Krishnarajapuram, Bangalore 560066"
)}`;

const facts = [
  { value: "10K+", label: "Learners on the Hub" },
  { value: "25K+", label: "Teens & professionals trained" },
  { value: "40+", label: "Nationalities" },
  { value: "22+", label: "Years of experience" },
];

const whatWeDo = [
  {
    icon: "👨‍👩‍👧",
    eyebrow: "For parents",
    title: "One-to-one programs for teens",
    body: "The Positivity Hub and the 24-session Platinum journey: personal coaching for your child, guidance for you, and daily habits that make the change last.",
    links: [
      { label: "Positivity Hub", href: "/positivity-hub" },
      { label: "Platinum", href: "/platinum" },
    ],
  },
  {
    icon: "🎓",
    eyebrow: "For students",
    title: "Self-paced online courses",
    body: "Positive Mind Mastery, Accelerated Learning Methodology and I Love Exams — mindset, study skills and exam confidence, on any device.",
    links: [
      { label: "Positive Mind Mastery", href: "/positive-mind-mastery" },
      { label: "Accelerated Learning", href: "/accelerated-learning" },
      { label: "I Love Exams", href: "/i-love-exams" },
    ],
  },
  {
    icon: "🏫",
    eyebrow: "For schools",
    title: "YellowZone certification",
    body: "Whole-campus emotional wellbeing, measured with Emotion AI, scored against a defined standard and independently certified.",
    links: [{ label: "YellowZone Schools", href: site.urls.yellowZoneSchools }],
  },
  {
    icon: "💬",
    eyebrow: "For everyone",
    title: "Free community & resources",
    body: "A free WhatsApp community for parents, our podcast, a weekly newsletter and a free ebook by Vidyashankar Guru.",
    links: [
      { label: "WhatsApp Community", href: site.urls.whatsapp, external: true },
      { label: "Podcast", href: site.urls.spotify, external: true },
      { label: "Newsletter", href: site.urls.newsletter, external: true },
    ],
  },
];

const socials = [
  { name: "instagram", label: "Instagram", href: site.urls.instagram },
  { name: "youtube", label: "YouTube", href: site.urls.youtube },
  { name: "linkedin", label: "LinkedIn", href: site.urls.linkedin },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-fade" aria-hidden />
        <div className="container-x">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="eyebrow">About MiTran Global</p>
            <h1 className="mt-6 text-display-1 font-display">
              Consistently imparting <span className="gold-text italic">positivity</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
              We help teenagers aged 11–17 build the mindset, emotional strength
              and life skills that schools rarely teach — so a positive teen
              today becomes a confident leader tomorrow.
            </p>
          </Reveal>
          <Reveal className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4" stagger>
            {facts.map((f) => (
              <div key={f.label} data-reveal-item className="rounded-2xl border border-line bg-white/[0.02] px-5 py-6 text-center">
                <div className="font-display text-3xl gold-text md:text-4xl">{f.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-ink-faint">{f.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <section className="section border-t border-line">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-5 text-display-2 font-display">
              The most important skill of this generation is{" "}
              <span className="gold-text italic">positivity</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-ink-muted md:text-lg">
              Children today face mobile addiction, peer pressure, academic
              stress and constant negativity. Even the most talented child can
              stall under self-doubt — while a child with average skills, who
              stays positive and motivated, can achieve remarkable things.
            </p>
            <p className="mt-5 leading-relaxed text-ink-muted md:text-lg">
              MiTran Global was built to teach that positivity systematically.
              Our Positivity Framework™ combines Neuro-Linguistic Programming,
              human psychology and Emotion-AI assessment with coaching, courses
              and community — reinforced consistently until it becomes a
              mindset.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.n} className="rounded-2xl border border-line bg-white/[0.02] p-4">
                  <span className="font-display text-xl gold-text">{p.n}</span>
                  <p className="mt-1 font-display text-lg">{p.title}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* What we do */}
      <section className="section border-t border-line">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">What we do</p>
            <h2 className="mt-5 text-display-2 font-display">
              Support for every part of a <span className="gold-text italic">teen&apos;s world</span>
            </h2>
          </Reveal>
          <Reveal className="mt-14 grid gap-6 md:grid-cols-2" stagger>
            {whatWeDo.map((w) => (
              <article key={w.title} data-reveal-item className="card flex flex-col">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>
                    {w.icon}
                  </span>
                  <p className="text-xs uppercase tracking-[0.18em] text-gold">{w.eyebrow}</p>
                </div>
                <h3 className="mt-5 font-display text-2xl">{w.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-ink-muted">{w.body}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {w.links.map((l) =>
                    "external" in l && l.external ? (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-sm text-ink-muted transition-colors hover:border-gold/40 hover:text-ink"
                      >
                        {l.label} ↗
                      </a>
                    ) : (
                      <Link
                        key={l.label}
                        href={l.href}
                        className="rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-sm text-ink-muted transition-colors hover:border-gold/40 hover:text-ink"
                      >
                        {l.label} →
                      </Link>
                    )
                  )}
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Meet the coach — Positive Mind Mastery design */}
      <MeetTheCoach />

      {/* Address & contact */}
      <section className="section border-t border-line">
        <div className="container-x">
          <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-bg-card p-8 shadow-card md:p-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden />
            <div className="relative grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
              <div>
                <p className="eyebrow">Visit or reach us</p>
                <h2 className="mt-5 text-display-3 font-display">MiTran Global, Bangalore</h2>
                <address className="mt-5 not-italic leading-relaxed text-ink-muted md:text-lg">
                  {ADDRESS.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
                <a href={MAPS} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-gold underline-offset-4 hover:underline">
                  Open in Google Maps ↗
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <a href={site.urls.booking} target="_blank" rel="noreferrer" className="btn-primary px-8 py-4 text-base">
                  Book a call →
                </a>
                <a href={site.urls.whatsapp} target="_blank" rel="noreferrer" className="btn-ghost px-8 py-4 text-base">
                  Join the FREE WhatsApp community
                </a>
                <div className="mt-3 flex justify-center gap-2">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      title={s.label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/[0.03] text-ink-muted transition-colors hover:border-gold/40 hover:text-gold"
                    >
                      <SocialIcon name={s.name} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
