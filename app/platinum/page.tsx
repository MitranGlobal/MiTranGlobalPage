import type { Metadata } from "next";
import HubHero from "@/components/hub/HubHero";
import Compass from "@/components/platinum/Compass";
import BonusesFinal from "@/components/hub/BonusesFinal";
import EveryChild from "@/components/hub/EveryChild";
import HubFaq from "@/components/hub/HubFaq";
import { platinumFaqs } from "@/lib/hub";
import { onePlatform } from "@/lib/platinum";
import { site } from "@/lib/site";
import "./platinum.css";

export const metadata: Metadata = {
  title: "Positivity Hub Platinum — the 24-session journey | MiTran Global",
  description:
    "The complete 24-session, one-to-one Positivity Framework™ journey for teens 11–17: four pillars, daily LevelUp habits, five bonuses and a dedicated coach.",
};

export default function PlatinumPage() {
  return (
    <div className="pl-page">
      {/* 1. Hero — Positivity Hub hero, Platinum edition */}
      <HubHero platinum nextHref="#roadmap" nextLabel="See the 24 sessions" />

      {/* 2. The 24-Session Compass */}
      <Compass />

      {/* 3. Everything your child needs, in one hub */}
      <section className="pl-section">
        <div className="container-x">
          <div className="pl-head">
            <p className="pl-eyebrow">The All-in-One Platform</p>
            <h2 className="pl-h2">
              Everything your child needs, in <em className="pl-gold">one hub</em>
            </h2>
            <p className="pl-sub">
              Course access, live coaching, assessments and certificates —
              stitched into one uninterrupted journey.
            </p>
          </div>
          <div className="pl-4up">
            {onePlatform.map((f) => (
              <div key={f.n} className="pl-card pl-fcard">
                <span className="pl-fcard-num">{f.n}</span>
                <div className="pl-fcard-icon">{f.i}</div>
                <h3 className="pl-card-t">{f.t}</h3>
                <p className="pl-card-b">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Final section — courses + 5 bonuses (shared with Positivity Hub) */}
      <BonusesFinal platinum />

      {/* 5. Every Child Deserves — price */}
      <EveryChild
        platinum
        plan="Positivity Hub Platinum"
        core="24 one-to-one sessions across four pillars, with daily LevelUp habits"
      />

      {/* 6. Give your teen the 24-session journey */}
      <section className="pl-section">
        <div className="container-x">
          <div className="pl-cta-banner">
            <div className="pl-cta-inner">
              <p className="pl-eyebrow">Ready when you are</p>
              <h2 className="pl-h2">
                Give your teen the <em className="pl-gold">24-session journey</em> that changes everything.
              </h2>
              <p className="pl-sub">
                A 24-session, one-to-one transformation programme. Guided by a
                coach, measured by the EmotionAI Positivity Tracker, and built
                around your child.
              </p>
              <div className="pl-cta-row pl-cta-row-center">
                <a href={site.urls.booking} target="_blank" rel="noreferrer" className="pl-btn pl-btn-primary">
                  Book a call →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <HubFaq items={platinumFaqs} />
    </div>
  );
}
