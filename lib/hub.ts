/**
 * Content for the Positivity Hub and Positivity Hub Platinum pages.
 * Hero, "missing skill" and video copy come from the Positivity Hub site;
 * program details, the Clarity Call and prices come from MiTran Global.
 */

/* ───────────────────────── Hero (shared, Platinum adds a badge) ───────────────────────── */

export const hubHero = {
  audience: "For parents of children aged 11–17",
  question: ["Is your child ready", "for the real world?"],
  signs: [
    ["Studies hard.", "Still freezes."],
    ["Confident one day,", "doubts the next."],
  ],
  lead: "It’s not about marks anymore. It’s whether your child can handle pressure, stay focused and believe in themselves, without you standing behind them.",
};

/* ───────────────────────── "That missing skill is what we build" ───────────────────────── */

export const missingSkill = {
  bridge: "That missing skill is what we build.",
  name: "MiTran Global Positivity Hub",
  lead: "Empower your teen to build confidence, manage emotions, overcome challenges, and develop a positive mindset for life.",
  practices: [
    "Personalised growth guidance",
    "Emotional resilience building",
    "Confidence development",
    "Positive mindset cultivation",
  ],
  proofLabel: "Supported by wellness seekers globally",
  stats: [
    { value: "10K+", label: "Participants" },
    { value: "4.9★", label: "Feedback" },
    { value: "95%", label: "Success indicator" },
  ],
  cta: "See what your child receives",
};

/* ───────────────────────── Dear Parents (program intro) ───────────────────────── */

export const dearParents = {
  salutation: "Dear Parents of Teens (Ages 11–17),",
  headline: "Build confidence. Strengthen emotional well-being. Prepare your child for life.",
  paragraphs: [
    "If your child works hard and still freezes under pressure, loses focus quickly or needs the same reminder again and again, the issue is rarely intelligence. It is usually a gap in mindset and emotional strength, and no tuition class is built to close it.",
    "The MiTran Global Positivity Hub is a personalised, step-by-step journey for you and your child, guided by a certified Transformation Coach.",
  ],
};

/* ───────────────────────── 3 handholding one-to-one sessions ───────────────────────── */

export const handholding = {
  icon: "🤝",
  title: "3 Handholding One-to-One Sessions",
  duration: "3 sessions | 40 minutes each",
  description:
    "Guided by a certified Psychologist & Transformation Coach. Two sessions are for you and your child together, and one is exclusively for your child, so they can open up freely.",
  outcome:
    "Your child feels heard and gets a clear plan, and you learn how to support it at home.",
};

export type HandholdingSession = {
  n: string;
  title: string;
  question: string;
  points: string[];
};

export const clarityCall = {
  n: "01",
  title: "Clarity Call",
  question: "What happens in the Clarity Call?",
  intro:
    "After our first conversation, we arrange a personal session with our Mentor, Mr. Vidyashankar. He brings 22+ years of experience working with children and understanding their concerns.",
  attend: "We recommend that both parents and the child attend together.",
  during: [
    { t: "Understand your concerns in depth", d: "We listen to you and your child to get the full picture." },
    { t: "Explain the complete structured program", d: "Designed specifically for your child." },
    { t: "Guide you through the recommended approach", d: "So you know exactly what to expect." },
    { t: "Lay out clear next steps", d: "So you leave with direction, not doubts." },
  ],
  book:
    "Slots are offered based on availability. Please confirm your preferred time quickly to secure your session. Once you confirm, we’ll check and send the session details on WhatsApp.",
};

/** From the Parent Live Sessions agenda. */
export const handholdingSessions: HandholdingSession[] = [
  {
    n: "02",
    title: "Beneath “Fine”",
    question: "What is really going on with my teenager?",
    points: [
      "Why behaviour is communication, and why the phone is usually a symptom",
      "The reminder loop, and how to step out of it",
      "Pressure, the exam blank and the fear teens hide",
      "The first hour after a bad result",
      "When it’s time to bring in a professional",
    ],
  },
  {
    n: "03",
    title: "From Managing to Supporting",
    question: "How do I help without doing it all myself?",
    points: [
      "The handover ladder: moving tasks from you to them",
      "A phone and sleep plan your teen helps write",
      "Self-belief, giving up and “why should I?”",
      "Conversations that open doors",
      "One handover, one conversation, one small stretch for this week",
    ],
  },
];

/* ───────────────────────── The 5 bonuses ───────────────────────── */

export type Bonus = {
  n: number;
  icon: string;
  kind: "course" | "audio" | "live";
  label: string;
  title: string;
  short?: string;
  duration?: string;
  description: string;
  outcome: string;
  href?: string;
};

export const bonuses: Bonus[] = [
  {
    n: 1,
    icon: "✅",
    kind: "course",
    label: "Bonus Course 1",
    title: "Positive Mind Mastery",
    short: "PMM",
    duration: "80 Minutes | 10 Sections | 41 Lectures",
    description:
      "Help your teen recognise unhelpful thinking, manage negativity, build optimism and respond to everyday challenges with greater self-awareness, confidence and a constructive attitude towards learning, relationships and personal growth.",
    outcome:
      "A more optimistic teen who handles setbacks constructively and approaches learning and relationships with confidence.",
    href: "/positive-mind-mastery",
  },
  {
    n: 2,
    icon: "🐇",
    kind: "course",
    label: "Bonus Course 2",
    title: "Accelerated Learning Methodology",
    short: "ALM",
    duration: "95 Minutes | 8 Sections | 39 Lectures",
    description:
      "Show your teen how attention, memory, organised study methods and active learning techniques work together to make studying more effective, reduce wasted effort and strengthen independent learning habits for school.",
    outcome:
      "A focused learner who remembers more, studies strategically and approaches schoolwork with independence and confidence.",
    href: "/accelerated-learning",
  },
  {
    n: 3,
    icon: "💯",
    kind: "course",
    label: "Bonus Course 3",
    title: "I Love Exams",
    short: "ILE",
    duration: "2 Hours | 5 Sections | 40 Lectures",
    description:
      "Help your teen plan revision, use practical exam strategies, manage time and approach assessments with a calmer mindset, turning exam preparation into a clear, manageable, confident process for every learner.",
    outcome:
      "A calmer, better-prepared teen who manages exam time, recalls learning and approaches assessments with confidence.",
    href: "/i-love-exams",
  },
  {
    n: 4,
    icon: "👍",
    kind: "audio",
    label: "Bonus 4",
    title: "101 Secrets of Positive Parenting — Audio Lessons",
    duration: "45 minutes",
    // DRAFT — the brief repeated Bonus 5's text here; replace with the approved copy.
    description:
      "Short audio lessons for parents from Vidyashankar Guru: practical, everyday ways to encourage effort, build healthy routines and keep communication open with your teen.",
    outcome:
      "You get simple, ready-to-use ideas to support your teen calmly and consistently at home.",
  },
  {
    n: 5,
    icon: "🔥",
    kind: "live",
    label: "Bonus 5",
    title: "Power Up Live Sessions",
    description:
      "These interactive small-group sessions focus on real-life challenges faced by teenagers, with topics selected based on inputs from parents and students. Guided by experienced coaches, children get a safe and encouraging space to share their experiences, learn from peers facing similar situations, exchange ideas and practise practical ways to handle everyday difficulties.",
    outcome:
      "Your teen gains practical solutions, learns from shared experiences and builds confidence in handling everyday challenges.",
  },
];

/* ───────────────────────── Video section ───────────────────────── */

export const vsl = {
  src: "https://res.cloudinary.com/twteccae/video/upload/PHVSL_-_v1_hwt5ut.mp4",
  poster: "https://res.cloudinary.com/twteccae/video/upload/so_3,w_1600,q_auto/PHVSL_-_v1_hwt5ut.jpg",
  title: "Positivity Hub: a message for parents",
  cta: "Watch now!",
};

export const vslSection = {
  title: "Build confidence, strengthen your mind",
  lead: "Discover a personalised journey designed to help your teen manage emotions, overcome challenges, build resilience, and develop a positive mindset for life.",
  pillars: [
    {
      icon: "✨",
      title: "Confidence & self-awareness",
      body: "Encourage your teen to understand their emotions, trust their abilities, and express themselves with greater confidence.",
    },
    {
      icon: "🤝",
      title: "Supportive parent-child connection",
      body: "Build better understanding and communication between you and your teen through guided sessions that encourage growth together.",
    },
    {
      icon: "🌱",
      title: "Practical life skills",
      body: "Equip your teen with essential skills to make thoughtful decisions, manage emotions, and handle real-life situations.",
    },
  ],
  closing:
    "Ready to help your teen thrive? Discover the MiTran Global Positivity Hub and take the first step towards building confidence, emotional strength, and a positive future.",
};

/* ───────────────────────── Every Child Deserves (price) ───────────────────────── */

export const everyChild = {
  title: "Every Child Deserves the Opportunity to Grow from Within",
  paragraphs: [
    "You don't have to wait for your child to struggle before investing in their emotional well-being.",
    "Whether your child needs support with confidence, exam pressure, focus, or everyday challenges, the MiTran Global Positivity Hub offers a personalised journey to help you understand your child better and support their growth.",
  ],
  emphasis: [
    "Take the first step towards a more confident, emotionally stronger child.",
    "Connect with MiTran Global to explore the program and enroll your child.",
  ],
};

export const formatINR = (n: number) => `₹${n.toLocaleString("en-IN")}`;

/* ───────────────────────── FAQs (DRAFT — for approval) ───────────────────────── */

export type Faq = { q: string; a: string };

export const hubFaqs: Faq[] = [
  {
    q: "What exactly does my child receive?",
    a: "Three handholding one-to-one sessions (40 minutes each) with a certified Psychologist & Transformation Coach, plus five bonuses: Positive Mind Mastery, Accelerated Learning Methodology and I Love Exams, the 101 Secrets of Positive Parenting audio lessons, and Power Up Live Sessions.",
  },
  {
    q: "Is this an academic course or tuition?",
    a: "No. Its primary focus is emotional well-being, confidence, mindset and life skills. The bonus courses also make studying and exams easier, but the program is not tuition.",
  },
  {
    q: "Who attends the one-to-one sessions?",
    a: "Two sessions are for you and your child together, and one is exclusively for your child, so they can open up freely. For the Clarity Call we recommend that both parents and the child attend.",
  },
  {
    q: "How do I book the Clarity Call?",
    a: "Use the Book a call button. Slots are offered based on availability; once you confirm your preferred time, we check and send the session details on WhatsApp.",
  },
  {
    q: "Is this a psychological diagnosis or therapy?",
    a: "No. The program is for well-being awareness and personal development. It does not diagnose or treat any condition. If you are worried about your child's safety, please contact a doctor or counsellor.",
  },
  {
    q: "Is this suitable for a child who is already doing well?",
    a: "Yes. The program also supports children who want to strengthen their existing abilities and personal growth.",
  },
];

export const platinumFaqs: Faq[] = [
  {
    q: "How is Platinum different from the Positivity Hub?",
    a: "The Positivity Hub includes three handholding sessions. Platinum is the complete 24-session one-to-one journey across four pillars, with the same five bonuses and daily LevelUp habits that keep the change going between sessions.",
  },
  {
    q: "Do parents take part?",
    a: "Yes. Session 1 is a joint orientation, Session 5 is an exclusive parent session on your child's EmotionAI Growth Map, and Session 13 brings parent and teen together as a team. Parents also keep one daily habit — the Parent's Affirmation.",
  },
  {
    q: "What are the LevelUp habits?",
    a: "Four small daily challenges introduced across the journey: Parent's Affirmation, One Victory Today, Flip the Switch and Goal in Sight. Streaks reward consistency, not perfection, and there is no public ranking between children.",
  },
  {
    q: "How is progress measured?",
    a: "Your child takes the EmotionAI Positivity Tracker assessment early in the journey, and you receive a growth map with strengths, developmental areas and recommendations for home. Progress is reviewed again at the full review and at graduation.",
  },
  {
    q: "Is this therapy?",
    a: "No. Platinum is coaching for mindset, confidence and life skills. It does not diagnose or treat any condition. If you are worried about your child's safety, please contact a doctor or counsellor.",
  },
  {
    q: "How do we get started?",
    a: "Book a call. We start with a Clarity Call with Mr. Vidyashankar to understand your child and walk you through the recommended plan.",
  },
];
