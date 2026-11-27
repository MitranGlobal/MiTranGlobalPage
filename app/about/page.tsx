import type { Metadata } from "next";
import type { ReactNode } from "react";
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

const socials = [
  { name: "instagram", label: "Instagram", href: site.urls.instagram },
  { name: "youtube", label: "YouTube", href: site.urls.youtube },
  { name: "linkedin", label: "LinkedIn", href: site.urls.linkedin },
];

function A({ href, external, children }: { href: string; external?: boolean; children: ReactNode }) {
  const cls = "text-ink underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold";
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

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
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">What we do</p>
            <h2 className="mt-5 text-display-2 font-display">
              We walk alongside <span className="gold-text italic">teens</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 leading-relaxed text-ink-muted md:text-lg">
            <p>
              We work with teenagers aged 11–17, and with the parents and
              schools around them.
            </p>
            <p>
              For parents, we run the <A href="/positivity-hub">Positivity Hub</A>{" "}
              and <A href="/platinum">Platinum</A>: one-to-one programs where a
              coach works with your child, guides you as a parent, and builds
              the daily habits that make the change last.
            </p>
            <p>
              For students, we have self-paced online courses:{" "}
              <A href="/positive-mind-mastery">Positive Mind Mastery</A>,{" "}
              <A href="/accelerated-learning">Accelerated Learning</A> and{" "}
              <A href="/i-love-exams">I Love Exams</A>. They cover mindset,
              study skills and exam confidence.
            </p>
            <p>
              For schools, we run <A href={site.urls.yellowZoneSchools}>YellowZone</A>,
              which helps a whole campus look after its students&apos; emotional
              wellbeing.
            </p>
            <p>
              And for everyone, there&apos;s our free{" "}
              <A href={site.urls.whatsapp} external>WhatsApp community</A>,
              our <A href={site.urls.spotify} external>podcast</A> and our{" "}
              <A href={site.urls.newsletter} external>newsletter</A>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why we do it */}
      <section className="section border-t border-line">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Why we do it</p>
            <h2 className="mt-5 text-display-2 font-display">
              Because <span className="gold-text italic">marks</span> aren&apos;t the whole story
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 leading-relaxed text-ink-muted md:text-lg">
            <p>
              Most teenagers aren&apos;t struggling with what they know.
              They&apos;re struggling with how they feel: pressure, comparison,
              self-doubt, and the things they don&apos;t say at home.
            </p>
            <p>
              School teaches subjects. Very few places teach a child how to
              handle a bad day or believe in themselves. Parents feel it too.
              They can see something is off, but they don&apos;t always know
              how to help.
            </p>
            <p>
              That&apos;s the gap we fill, so no child has to work it out alone
              and no parent has to guess.
            </p>
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
