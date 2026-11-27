import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import MeetTheCoach from "@/components/about/MeetTheCoach";
import SocialIcon from "@/components/ui/SocialIcon";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — MiTran Global",
  description:
    "MiTran Global helps teenagers aged 11–17 grow into confident, resilient and positive young people — working with parents, students and schools.",
};

const ADDRESS = [
  "234, Spaces Shantiniketan, Prestige Shantiniketan",
  "2nd Floor, Crescent Tower 4, Krishnarajapuram",
  "Bangalore – 560066, Karnataka, India",
];
const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Spaces Shantiniketan, Crescent Tower 4, Prestige Shantiniketan, Krishnarajapuram, Bangalore 560066"
)}`;

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
    body: "A free WhatsApp community for parents, our podcast and a weekly newsletter.",
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
      <section className="relative overflow-hidden pb-12 pt-32 md:pb-16 md:pt-40">
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
        </div>
      </section>

      {/* What MiTran Global is */}
      <section className="section border-t border-line">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="mt-5 text-display-2 font-display">
              What is <span className="gold-text italic">MiTran Global?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="leading-relaxed text-ink-muted md:text-lg">
              MiTran Global is a Bangalore-based education company that helps
              teenagers aged 11–17 grow into confident, resilient and
              positive young people.
            </p>
            <p className="mt-5 leading-relaxed text-ink-muted md:text-lg">
              Marks show what a child knows. We focus on what helps them use
              it: handling pressure, staying focused, believing in themselves
              and talking openly at home. We work alongside parents, students
              and schools, so a child gets the same support wherever they are.
            </p>
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

      {/* Our vision */}
      <section className="section border-t border-line">
        <div className="container-x">
          <Reveal className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/[0.10] via-bg-card to-bg-card px-8 py-12 text-center md:px-16 md:py-16">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" aria-hidden />
            <p className="eyebrow relative">Our vision</p>
            <h2 className="relative mt-6 text-display-2 font-display">
              Every child has the right to feel{" "}
              <span className="gold-text italic">#positive</span>
            </h2>
            <p className="relative mx-auto mt-6 max-w-2xl leading-relaxed text-ink-muted md:text-lg">
              We want every child to grow up emotionally strong — able to face
              pressure, bounce back from setbacks and believe in what they can
              do. That means positivity taught as deliberately as any school
              subject: at home, with parents who know how to support, and at
              school, with a clear standard for emotional wellbeing.
            </p>
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
