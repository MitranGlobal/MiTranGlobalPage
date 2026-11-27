/**
 * MiTran Global EmoTech — content from the MiTran Global presentation.
 * Slide 2 "The Solution" is on the home page;
 * slide 3 "Technology" is on the YellowZone Schools page.
 */

/** The 10 emotional / wellbeing factors every teen is scored on. */
export const FACTORS = [
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
];

/* ───────── Slide 2 · The Solution ───────── */
export const solution = {
  eyebrow: "The solution",
  title: "Measure the Emotion, Mentor the Gap.",
  lead: "An expert coach and our EmotionAI-powered Positivity Tracker read the emotion and score the gap — then mentoring closes it.",
  pillars: [
    {
      n: "01",
      kicker: "Understand",
      icon: "brain",
      t: "Coach + Positivity Tracker",
      points: ["An expert coach reads the child", "EmotionAI tracker reads the signals"],
    },
    {
      n: "02",
      kicker: "Score the gap",
      icon: "gauge",
      t: "Scored, Not Guessed",
      points: ["Every teen scored on 10 factors", "Personalized assessment for every child"],
    },
    {
      n: "03",
      kicker: "Mentor",
      icon: "group",
      t: "Mentoring in Two Formats",
      points: ["Personalized Mentoring", "Recorded sessions for shared gaps"],
    },
  ],
  factorsTitle: "The 10 Emotional Factors We Measure",
  factorsNote: "Every teen is scored on all ten, every cycle.",
};

/* ───────── Slide 3 · Technology (YellowZone page) ───────── */
export const technology = {
  eyebrow: "Technology",
  title: "Turning Emotional Signals Into Actionable Insight.",
  questionnaire: {
    n: "01",
    big: "20",
    bigLabel: "questions, one sitting",
    t: "Student answers the questionnaire",
    d: "Scenario questions mapped to 10 wellbeing factors",
  },
  camera: {
    n: "02",
    t: "Facial Analysis on camera",
    d: "MiTran Global’s EPPT reads facial signals in the browser as the student answers",
  },
  report: {
    n: "03",
    t: "Emotional report generated",
    d: "10 factors scored, with the Positivity Score leading the report",
  },
  outcomes: [
    { n: "04a", icon: "family", t: "Parent and child review together", d: "Student report and growth roadmap at home" },
    { n: "04b", icon: "principal", t: "Principal reviews the class report", d: "Class and section gap map, top gaps" },
  ],
};
