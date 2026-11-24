/**
 * The parent quiz ("Positivity Check"). Seven scored questions (3 = thriving,
 * 0 = needs support) plus one focus question that is not scored.
 * Edit questions, options and result copy here.
 */

export type QuizOption = { label: string; score: number };
export type QuizQuestion = { id: string; q: string; hint?: string; options: QuizOption[] };

export const quizIntro = {
  eyebrow: "The Positivity Check · 2 minutes",
  title: "How is your teen really doing?",
  body: "Eight quick questions about your child (11–17). Answer the way things usually are, not on their best or worst day. You'll get a result and a clear next step.",
  cta: "Start the quiz",
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "exams",
    q: "When an exam or test is coming up, your child usually…",
    options: [
      { label: "Stays calm and prepares steadily", score: 3 },
      { label: "Gets a little nervous, but copes", score: 2 },
      { label: "Worries a lot and sleeps badly", score: 1 },
      { label: "Freezes or goes blank, even when prepared", score: 0 },
    ],
  },
  {
    id: "setbacks",
    q: "After a bad result or a setback, they…",
    options: [
      { label: "Bounce back and try again", score: 3 },
      { label: "Sulk for a day, then move on", score: 2 },
      { label: "Stay low for several days", score: 1 },
      { label: "Give up — “I’m just bad at this”", score: 0 },
    ],
  },
  {
    id: "reminders",
    q: "How often do you have to remind them to study or finish tasks?",
    options: [
      { label: "Rarely — they own it", score: 3 },
      { label: "Sometimes", score: 2 },
      { label: "Most days", score: 1 },
      { label: "Every single time", score: 0 },
    ],
  },
  {
    id: "focus",
    q: "How long can they focus on homework before drifting to the phone?",
    options: [
      { label: "45 minutes or more", score: 3 },
      { label: "20–45 minutes", score: 2 },
      { label: "10–20 minutes", score: 1 },
      { label: "Less than 10 minutes", score: 0 },
    ],
  },
  {
    id: "selftalk",
    q: "When they talk about themselves, you mostly hear…",
    options: [
      { label: "“I can do this”", score: 3 },
      { label: "A mix of confident and unsure", score: 2 },
      { label: "“I’m not good enough”, quite often", score: 1 },
      { label: "Mostly negative things about themselves", score: 0 },
    ],
  },
  {
    id: "screens",
    q: "Screens and sleep at home look like…",
    options: [
      { label: "A healthy balance", score: 3 },
      { label: "A little late now and then", score: 2 },
      { label: "Late nights on most days", score: 1 },
      { label: "The phone runs their day and night", score: 0 },
    ],
  },
  {
    id: "emotions",
    q: "When something upsets them, they…",
    options: [
      { label: "Come and talk to you about it", score: 3 },
      { label: "Talk about it after a while", score: 2 },
      { label: "Keep it to themselves", score: 1 },
      { label: "Shut the door, or it comes out as anger", score: 0 },
    ],
  },
];

/** Not scored: tells the coach where to start. */
export const focusQuestion = {
  id: "goal",
  q: "If you could change one thing first, it would be…",
  options: [
    "Exam confidence",
    "Focus & study habits",
    "Emotional strength",
    "Communication at home",
  ],
};

export const QUIZ_MAX = quizQuestions.length * 3;

export type QuizBand = { key: string; title: string; summary: string; next: string };

/** Result bands by score (out of QUIZ_MAX = 21). */
export function bandFor(score: number): QuizBand {
  if (score >= 17)
    return {
      key: "Thriving",
      title: "Strong foundations",
      summary:
        "Your teen already shows real confidence and self-management. The goal now is to protect it under pressure and turn it into leadership.",
      next: "A short call with our coach will show you how to build on these strengths before the next big exam season.",
    };
  if (score >= 11)
    return {
      key: "Building",
      title: "Capable, but not yet consistent",
      summary:
        "Your teen has good days and hard days. Pressure, focus and self-belief go up and down — which is exactly the gap mindset training closes.",
      next: "Book a call and our coach will map out the two or three habits that will make the biggest difference for your child.",
    };
  if (score >= 6)
    return {
      key: "Under pressure",
      title: "Struggling under pressure",
      summary:
        "Stress, self-doubt or distraction are holding your teen back more than their ability is. This is common, and it is very changeable with the right support.",
      next: "We recommend a one-to-one call with our coach soon, so your child gets a clear plan and you know how to support it at home.",
    };
  return {
    key: "Needs support",
    title: "Needs support now",
    summary:
      "Your answers suggest your teen is finding things hard on most days. You were right to check — early support makes the biggest difference.",
    next: "Please book a call with our coach. If you are ever worried about your child's safety, contact a doctor or counsellor straight away.",
  };
}
