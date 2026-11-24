/**
 * Positivity Hub Platinum — the 24-session journey.
 * Source: "Platinum 24-Session Program · Video & LevelUp Habit Map".
 * Session titles and pillars are exact; descriptions are the session
 * objectives written for parents. Facilitator-only material (video clips,
 * coach scripts, gaps) is intentionally not published.
 */

export type HabitKey = "PA" | "OVT" | "FTS" | "GIS";

export const HABITS: Record<HabitKey, { name: string; from: number; purpose: string; color: string }> = {
  PA: {
    name: "Parent's Affirmation",
    from: 1,
    purpose: "Shifts the parent from ‘Director’ to ‘Supporter’ and builds the child's confidence through effort-based recognition at home.",
    color: "#e9c46a",
  },
  OVT: {
    name: "One Victory Today",
    from: 6,
    purpose: "Builds self-esteem from evidence: the child collects proof, every day, that they are capable.",
    color: "#5cc0d6",
  },
  FTS: {
    name: "Flip the Switch",
    from: 7,
    purpose: "Practises the thought → emotion → action chain so the child can change their response to setbacks.",
    color: "#b58cfa",
  },
  GIS: {
    name: "Goal in Sight",
    from: 16,
    purpose: "Keeps the goal visible every day and turns it into one daily action.",
    color: "#f0a465",
  },
};

export const PILLARS = [
  { name: "Mind Transformation Launchpad", short: "Launchpad", c: "#5cc0d6", range: "1–6" },
  { name: "Lead From Within", short: "Lead From Within", c: "#b58cfa", range: "7–12" },
  { name: "Performance Mastery", short: "Performance", c: "#f0a465", range: "13–18" },
  { name: "Guided Implementation & Clarity Review", short: "Implementation", c: "#e9c46a", range: "19–24" },
];

export type Session = {
  t: string;
  d: string;
  habits: HabitKey[];
  /** Habit introduced in this session (shown as "new"). */
  intro?: HabitKey;
  who?: string;
  ms?: boolean;
};

const S: Session[] = [
  // Pillar 1 · Mind Transformation Launchpad
  { t: "Day 1: Mind & Mission", d: "A joint orientation for parent and child. Your child picks the 4 things they most want to change and writes a Personal Commitment Statement, and you learn your role in supporting the journey.", habits: ["PA"], intro: "PA", who: "Parent & child together", ms: true },
  { t: "Hack Your Brain, Drop Weak Words", d: "Your child learns that capability is unlimited, spots the limiting words and beliefs that reduce their potential, swaps them for empowering language and sharpens their commitment.", habits: ["PA"] },
  { t: "Crack the Winners' Code", d: "The Ultimate Success Formula and success-driven behaviours. Your child formally shares their 4 commitments with you, you acknowledge and encourage them, and they take the EmotionAI Positivity Tracker assessment.", habits: ["PA"], who: "Parent joins" },
  { t: "Discover 5 Rock-Solid Strengths of Winners", d: "Five success beliefs drawn from the Ultimate Success principles and NLP, used to build resilience, self-confidence and a stronger commitment.", habits: ["PA"] },
  { t: "EmotionAI Growth Map", d: "A scientific walk-through of your child's positivity profile: strengths, developmental areas, personalised recommendations for home and study, and coaching on how to support them.", habits: ["PA"], who: "Exclusive parent session" },
  { t: "Unleash 12 Hidden Victories", d: "Your child identifies and records 12 personal victories — proof that they are capable and lovable — building a success-focused self-image linked to future goals.", habits: ["OVT"], intro: "OVT", ms: true },
  // Pillar 2 · Lead From Within
  { t: "Flip Emotions Like a Switch", d: "How thoughts control emotions and actions, and how to flip negativity into positivity — boosting confidence, cutting exam stress and improving focus.", habits: ["FTS"], intro: "FTS", ms: true },
  { t: "Solidify Your Foundation Wins", d: "A full revision of every concept so far, with an objective test, to deepen understanding and lock in the learning.", habits: ["OVT", "FTS"] },
  { t: "Shatter the Elephant Chains", d: "How beliefs shape goals, actions and results — breaking limiting views and freeing your child from old fears.", habits: ["FTS"] },
  { t: "Fuel the Beliefs That Break Barriers", d: "True stories of people who changed what was believed possible, shifting your child's mindset to overcome obstacles and igniting their drive for exams.", habits: ["OVT"] },
  { t: "Link Thoughts to Wins: Beliefs → Real Action", d: "Your child lists and breaks their own limiting beliefs, then links strong beliefs to real actions — building discipline and confidence.", habits: ["FTS"] },
  { t: "I Must Change", d: "The realisation that change starts within — not with parents or school — and the power to change themselves for lasting results in marks and behaviour.", habits: ["FTS"], ms: true },
  // Pillar 3 · Performance Mastery
  { t: "Parent-Teen Power Team", d: "You see the changes in your child and your key support role: how commitments sustain progress and fight procrastination, and how to work as a family team.", habits: ["PA"], who: "Parent & child together", ms: true },
  { t: "Command Time's Ultimate Power", d: "The real value of time: ending procrastination, building on-time habits and sharpening focus for exam preparation.", habits: ["OVT"] },
  { t: "Blueprint Your Winning Week", d: "The ‘My Week Ahead’ planner for studies, fun and rest — transforming time management and balance.", habits: ["OVT"] },
  { t: "Goals: Ignite Your Edge", d: "Why powerful goals matter and why only a few people succeed with them — overcoming barriers, reducing distractions and building exam confidence.", habits: ["GIS"], intro: "GIS" },
  { t: "Master the Goal Machine", d: "Structured OSMT goals — Optimistic, Specific, Motivational, Time-bound — sharpening discipline and the ability to handle pressure.", habits: ["GIS"] },
  { t: "Craft Your Exam Triumph Vision", d: "Your child creates an exam goal poster with a clear vision for their results, turning stress into triumph.", habits: ["GIS"], ms: true },
  // Pillar 4 · Guided Implementation & Clarity Review
  { t: "Architect Your Epic Life", d: "A simple life plan for studies, the way top achievers plan — cutting distractions and easing future worries with structure.", habits: ["GIS"], ms: true },
  { t: "Fuse All Tools: Full Review", d: "The coach reviews every tool with fun reinforcement and a quick test, strengthening memory and locking in progress.", habits: ["PA", "OVT", "FTS", "GIS"] },
  { t: "Own Your Champion Identity", d: "Your child discovers their inner ‘hero’ for a powerful self-view and turns fears into actions.", habits: ["OVT"] },
  { t: "Discover Purpose, Write Destiny", d: "Finding the ‘why’ behind their actions — turning distraction into motivated study and recognising their unique strengths.", habits: ["GIS"] },
  { t: "Lock Commitments, Prep Triumph", d: "Strong self-promises — ‘I change first’ — that build discipline and prepare winning exam habits.", habits: ["PA"] },
  { t: "Celebrate Wins, Launch Forward", d: "Graduation: celebrating growth in marks, confidence and strength, with clear action steps — and the habits continue after the program.", habits: ["PA", "OVT", "FTS", "GIS"], who: "Graduation", ms: true },
];

export const sessions = S.map((s, i) => ({ ...s, n: i + 1, p: Math.floor(i / 6) }));
export type NumberedSession = (typeof sessions)[number];

export const onePlatform = [
  { n: "01", i: "🎓", t: "Course Access", b: "Self-paced online courses covering essential skills for academic and personal growth." },
  { n: "02", i: "🎥", t: "Live Sessions", b: "Expert-led live sessions aligned to each module, with transformational coaching." },
  { n: "03", i: "📊", t: "Assessments", b: "Structured, scientific evaluations to track progress and celebrate every measurable step." },
  { n: "04", i: "🏅", t: "Certificates", b: "Official certification on completion — validating your child's learning for school and beyond." },
];
