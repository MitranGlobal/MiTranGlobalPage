export const site = {
  name: "MiTran Global",
  tagline: "Positivity Framework™ for Teens 11–17",
  urls: {
    enroll: "https://hub.mitranglobal.com/web/login",
    checkout:
      "https://hub.mitranglobal.com/web/checkout/67c995de375810b49bc96917",
    positivityScore: "http://positivity.mitranglobal.com/",
    calendly:
      "https://calendly.com/mitranglobal/one-to-one-session-on-facing-exams",
    whatsapp: "https://chat.whatsapp.com/JxY3FynELhu0oE8C2nHcP1",
    spotify: "https://open.spotify.com/show/58xhAnoYMVgPTQK0Ea2jmD",
    ebook:
      "https://drive.google.com/file/d/1RfUt1xS02z4r0y1InDi0jUbspDTEYd0X/view",
    posters:
      "https://drive.google.com/drive/folders/1B_uej0CKo5NDk2_ou_C1E-fOAXkjFR-n",
    newsletter:
      "https://www.linkedin.com/newsletters/mitran-global-positivity-hub-7040456016391507968/",
    hub: "https://hub.mitranglobal.com/",
    allCourses: "https://hub.mitranglobal.com/l/58c2bda165",
    d2sSchools: "https://positivity.mitranglobal.com/d2s-home",
    // TODO: swap for a dedicated contact page / mailto when one exists
    contact:
      "https://calendly.com/mitranglobal/one-to-one-session-on-facing-exams",
  },
};

export type ProgramItem = {
  label: string;
  href: string;
  icon: string;
  description: string;
  flagship?: boolean;
  external?: boolean;
};

export type ResourceItem = {
  label: string;
  href: string;
  icon: string;
  description: string;
  external?: boolean;
};

export const programs: ProgramItem[] = [
  {
    label: "Positive Mind Mastery",
    href: "/positive-mind-mastery",
    icon: "🧠",
    description: "Foundational positivity & mindset skills for teens.",
  },
  {
    label: "Accelerated Learning",
    href: "/accelerated-learning",
    icon: "⚡",
    description: "Learn 3× faster with proven memory techniques.",
  },
  {
    label: "I Love Exams",
    href: "/i-love-exams",
    icon: "🎯",
    description: "Transform exam fear into confidence and mastery.",
  },
  {
    label: "Free Training",
    href: "/free-training",
    icon: "🎁",
    description: "A no-cost introduction to the Positivity Framework™.",
  },
  {
    label: "Platinum Hub",
    href: "/platinum",
    icon: "👑",
    description: "The complete 24-session 1-on-1 mentorship journey.",
    flagship: true,
  },
];

export const resources: ResourceItem[] = [
  {
    label: "E-Book",
    href: "https://drive.google.com/file/d/1RfUt1xS02z4r0y1InDi0jUbspDTEYd0X/view",
    icon: "📖",
    description: "The free positivity ebook by Vidyashankar Guru.",
    external: true,
  },
  {
    label: "Podcast",
    href: "https://open.spotify.com/show/58xhAnoYMVgPTQK0Ea2jmD",
    icon: "🎙️",
    description: "Positivity conversations, on Spotify.",
    external: true,
  },
  {
    label: "WhatsApp Community",
    href: "https://chat.whatsapp.com/JxY3FynELhu0oE8C2nHcP1",
    icon: "💬",
    description: "Join a community of like-minded parents.",
    external: true,
  },
  {
    label: "Newsletter",
    href: "https://www.linkedin.com/newsletters/mitran-global-positivity-hub-7040456016391507968/",
    icon: "📰",
    description: "Weekly insights delivered on LinkedIn.",
    external: true,
  },
];

export type NavItem =
  | { type: "link"; label: string; href: string; external?: boolean }
  | { type: "dropdown"; label: string; group: "programs" | "resources" };

export const navLinks: NavItem[] = [
  { type: "link",     label: "Home",            href: "/" },
  { type: "link",     label: "Framework",       href: "/#framework" },
  { type: "dropdown", label: "Our Programs",    group: "programs" },
  { type: "link",     label: "For Schools",     href: "https://positivity.mitranglobal.com/d2s-home", external: true },
  { type: "dropdown", label: "Resources",       group: "resources" },
  { type: "link",     label: "Success Stories", href: "/success-stories" },
];

export const pillars = [
  {
    n: "01",
    icon: "🧠",
    title: "Life Skills",
    body: "Emotional intelligence, decision-making, problem-solving, and time management — the resilient foundation every teenager needs.",
    bullets: [
      "Emotional intelligence",
      "Decision-making",
      "Problem-solving",
      "Time & stress management",
    ],
  },
  {
    n: "02",
    icon: "🌟",
    title: "Leadership Skills",
    body: "Self-confidence, communication, teamwork, and purposeful decision-making. We nurture the leader within every child.",
    bullets: [
      "Self-confidence to speak up",
      "Effective communication",
      "Teamwork & collaboration",
      "Clear, purposeful decisions",
    ],
  },
  {
    n: "03",
    icon: "📚",
    title: "Academic Performance",
    body: "Focus, growth mindset, smart study techniques, and sustained motivation. When positivity meets learning, students excel.",
    bullets: [
      "Focus & concentration",
      "Growth mindset",
      "Smart learning strategies",
      "Motivation & confidence",
    ],
  },
];

export const stats = [
  { value: "10K+", label: "Learners on the Hub" },
  { value: "5/5", label: "Google Stars" },
  { value: "3", label: "Core Pillars" },
  { value: "52", label: "Live Sessions / Year" },
];

export const courses = [
  {
    slug: "accelerated-learning",
    eyebrow: "Learning Science",
    title: "Accelerated Learning Methodology",
    blurb:
      "Master proven techniques to absorb, retain, and apply knowledge faster. Visual, experiential, and gamified learning.",
    icon: "🚀",
  },
  {
    slug: "positive-mind-mastery",
    eyebrow: "Mindset & Wellbeing",
    title: "Positive Mind Mastery",
    blurb:
      "Build emotional resilience, a growth mindset, and lasting positivity habits using NLP and evidence-based psychology.",
    icon: "✨",
  },
  {
    slug: "i-love-exams",
    eyebrow: "Academic Excellence",
    title: "I Love Exams",
    blurb:
      "Transform exam anxiety into excitement. Build the strategies, confidence, and habits to perform under pressure.",
    icon: "📝",
  },
];

export const platformFeatures = [
  {
    icon: "📺",
    title: "Course Access",
    body: "Gain access to all individual online courses covering essential academic and personal growth skills — any time, any device.",
  },
  {
    icon: "🎥",
    title: "52 Live Sessions / Year",
    body: "52 expert-led live sessions per year aligned with course modules, featuring transformational coaching for lasting learning.",
  },
  {
    icon: "📊",
    title: "Scientific Assessments",
    body: "Structured assessments and emotional evaluations to track progress, identify gaps, and celebrate growth.",
  },
  {
    icon: "🏅",
    title: "Verified Certificates",
    body: "Official certifications upon course completion, validating learning and achievements for portfolio and applications.",
  },
  {
    icon: "🎮",
    title: "Gamification & Leaderboard",
    body: "A dynamic leaderboard fosters healthy competition. Daily prompts and structured tasks build lasting habits.",
  },
  {
    icon: "🤝",
    title: "Community & Peer Learning",
    body: "Peer discussions, community challenges, and parent connections — because positivity grows in community.",
  },
];

export const testimonials = [
  {
    quote:
      "My daughter went from dreading exams to actually looking forward to them. The mindset shift is remarkable.",
    name: "Priya M.",
    role: "Parent, Bangalore",
  },
  {
    quote:
      "MiTran gave my son the confidence he was missing. His teachers have noticed a complete transformation.",
    name: "Ramesh K.",
    role: "Parent, Chennai",
  },
  {
    quote:
      "The positivity score was an eye-opener. We had no idea our daughter was struggling with self-doubt at that level.",
    name: "Anitha S.",
    role: "Parent, Hyderabad",
  },
  {
    quote:
      "As a school principal, I've seen many programmes. MiTran's approach is the most systematic and genuinely effective.",
    name: "Dr. Venkat R.",
    role: "Principal, MG School",
  },
  {
    quote:
      "My son used to give up at the first sign of difficulty. Now he approaches challenges with a completely different mindset.",
    name: "Lakshmi P.",
    role: "Parent, Mumbai",
  },
];

export type PressLogo = { name: string; src: string };

export const pressLogos: PressLogo[] = [
  { name: "The Hindu",       src: "https://res.cloudinary.com/twteccae/image/upload/The_Hindu_kolitv.svg"          },
  { name: "Deccan Herald",   src: "https://res.cloudinary.com/twteccae/image/upload/Deccan_Herald_besjd7.svg"      },
  { name: "Hindustan Times", src: "https://res.cloudinary.com/twteccae/image/upload/Hindustan_Times_zxx8ri.svg"    },
  { name: "Times of India",  src: "https://res.cloudinary.com/twteccae/image/upload/The_Times_Of_India_fnegdh.svg" },
  { name: "YourStory",       src: "https://res.cloudinary.com/twteccae/image/upload/Your_Story_gmgfbd.svg"         },
];
