import type { Metadata } from "next";
import HubHero from "@/components/hub/HubHero";
import MissingSkill from "@/components/hub/MissingSkill";
import ProgramDetails from "@/components/hub/ProgramDetails";
import BonusesFinal from "@/components/hub/BonusesFinal";
import VideoSection from "@/components/hub/VideoSection";
import EveryChild from "@/components/hub/EveryChild";
import HubFaq from "@/components/hub/HubFaq";
import { hubFaqs } from "@/lib/hub";

export const metadata: Metadata = {
  title: "Positivity Hub — 3 one-to-one sessions + 5 bonuses | MiTran Global",
  description:
    "A personalised, step-by-step journey for parents and teens (11–17): three handholding one-to-one sessions with a certified coach, three online courses, parenting audio lessons and Power Up live sessions.",
};

export default function PositivityHubPage() {
  return (
    <>
      <HubHero nextHref="#missing-skill" nextLabel="Does this sound like your child?" />
      <MissingSkill />
      <ProgramDetails />
      <BonusesFinal />
      <VideoSection />
      <EveryChild
        plan="Positivity Hub program"
        was={38950}
        price={4999}
        core="3 handholding one-to-one sessions (40 minutes each)"
      />
      <HubFaq items={hubFaqs} />
    </>
  );
}
