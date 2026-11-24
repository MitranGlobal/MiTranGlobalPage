/**
 * YellowZone Schools page content.
 * Hero, criteria, CTA, video and application come from the YellowZone Lead
 * Capture page; "The gap", About and The Methodology from the YellowZone site.
 */

export const yz = {
  name: "Yellow Zone for Schools",
  email: "counselmitranglobal@gmail.com",
  phone: "+91 74832 59966",
  phoneHref: "tel:+917483259966",
  cohortName: "Founding Cohort 2026",
  briefingMinutes: 14,
  /** Tally form: application questions + appointment slot. */
  tallySrc:
    process.env.NEXT_PUBLIC_TALLY_SRC ??
    "https://tally.so/embed/WOadLk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1",
};

export const gap = {
  eyebrow: "The gap",
  title: "Every school measures marks. Almost none measure how students feel.",
  paragraphs: [
    "Academic performance is tracked every term, in every school. Emotional wellbeing — which shapes learning outcomes, behaviour, attendance and retention — is rarely measured at all.",
    "Schools that do care about wellbeing usually run scattered, well-intentioned efforts: a counsellor here, a workshop there, an awareness day in July. What is missing is a standard. A defined bar, independently verified, that tells a school — and its parents — that the work is real.",
  ],
  closing: "That is what YellowZone is.",
};

export const about = {
  eyebrow: "About",
  title: "Building the emotional wellbeing infrastructure for education",
  lede:
    "YellowZone is developed by MiTran Global. We are not building a standalone assessment product — we are building wellbeing infrastructure for schools: a standard, a verification process, and the technology that makes measurement possible at scale.",
};

export const methodology = {
  eyebrow: "The methodology",
  title: "EPPT — the Emotion AI Powered Positivity Tracker",
  paragraphs: [
    "Structured measurement is what makes a wellbeing standard possible rather than aspirational. EPPT is MiTran Global’s Emotion-AI-based assessment instrument, measuring ten wellbeing factors in a 15-minute online assessment.",
  ],
  emphasis: "It sits inside the standard as an instrument for measurement. It is not the certification.",
  factors: [
    "Emotional regulation",
    "Sense of purpose",
    "Self-awareness",
    "Healthy lifestyle",
    "Adaptability",
    "Leadership",
    "Self-management",
    "Resilience",
    "Interpersonal skills",
    "Decision-making",
  ],
};

/** What a certified school has in place (codes are the report identifiers). */
export const criteria = [
  { code: "C1", title: "Counsellor on staff", line: "A qualified counsellor with published, defined hours." },
  { code: "C2", title: "Weekly life skill sessions", line: "Well-being sessions conducted by the school." },
  { code: "C3", title: "EPPT for educators", line: "Educator assessment and reports." },
  { code: "C4", title: "EPPT for a specific class", line: "Student assessment and reports for one full class." },
  { code: "C5", title: "Mental health social projects, with proof", line: "Address structural sources of student stress, not only individual support." },
];

/** Objection handling under the application. */
export const gates = [
  { title: "We do not certify every school", body: "We take campuses where leadership can act on what the assessment finds." },
  { title: "The audit is free", body: "No payment at any stage of this process. You leave with findings either way." },
  { title: "You keep the findings", body: "Whether or not you go ahead with certification, the gap map is yours." },
];
