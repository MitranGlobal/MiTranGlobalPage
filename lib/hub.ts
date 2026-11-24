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
    "Guided by a certified Psychologist & Transformation Coach. The Clarity Call is for both parents and your child together, the second session is exclusively for your child so they can open up freely, and the third is a mandatory session for parents to understand what is really going on with your child.",
  outcome:
    "Your child feels heard and gets a clear plan, and you learn how to support it at home.",
};

export type HandholdingSession = {
  n: string;
  title: string;
  /** Who attends this session. */
  attend: string;
  question: string;
  points: string[];
};

export const clarityCall = {
  n: "01",
  title: "Clarity Call",
  attendBadge: "Parents & child together",
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
    attend: "Exclusively for your child",
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
    attend: "All parents · Mandatory",
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

/* ───────────────────────── FAQs (Positivity Hub + Platinum) ───────────────────────── */

export type Faq = { q: string; a: string };

export const hubFaqs: Faq[] = [
  {
    q: "Why is the age of 11 to 17 so important?",
    a: "These are the years when a child's identity, habits, confidence and thinking patterns take shape. The right guidance now affects how they handle studies, relationships, exam pressure and decisions for the rest of their life.",
  },
  {
    q: "My child is a teenager now. Isn't it too late to make a real difference?",
    a: "Not at all. Teenagers can understand themselves, reflect and make conscious changes in ways younger children can't. With the right approach, many teens show visible changes in focus, confidence and behaviour within a few weeks.",
  },
  {
    q: "How will this program help my child?",
    a: "Every child is different, so we start by understanding your child's specific concerns. It may be lack of focus, low confidence, too much screen time, exam stress or communication gaps at home. The structured programme is then designed around those needs.",
  },
  {
    q: "Why do both parents need to attend the Clarity Call?",
    a: "Real change happens when the child and both parents are on the same page. When everyone hears the same guidance together, the child gets consistent support at home, and progress comes faster.",
  },
  {
    q: "How is this different from tuition or coaching classes?",
    a: "Tuition teaches subjects. We work on the child's thinking, focus, confidence, emotional balance, and life skills. These sit underneath academic performance and help it improve on its own.",
  },
  {
    q: "How soon will we see results?",
    a: "Every child moves at their own pace, but most parents start seeing changes in attitude, communication and focus within the first few weeks of consistent participation.",
  },
  {
    q: "Is the program online or offline?",
    a: "The program is fully online. Your child can join every session from home, with no travel and no disruption to school or other activities. All they need is a stable internet connection and a quiet space.",
  },
  {
    q: "My question is not answered here. What do I do?",
    a: "Message us on WhatsApp or book a Clarity Call. Our team will be happy to answer any question you have.",
  },
];

/** Platinum uses the same FAQs as the Positivity Hub. */
export const platinumFaqs: Faq[] = hubFaqs;
