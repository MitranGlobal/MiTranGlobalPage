export const site = {
  name: "MiTran Global",
  tagline: "Positivity Framework™ for Teens 11–17",
  urls: {
    enroll: "https://hub.mitranglobal.com/web/login",
    checkout:
      "https://hub.mitranglobal.com/web/checkout/67c995de375810b49bc96917",
    positivityScore: "http://positivity.mitranglobal.com/",
    // Single booking link used by every "book a call / appointment" CTA
    booking: "https://calendar.mitranglobal.com/v3/1-1-session/consultation",
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
    // YellowZone now has its own page on this site
    yellowZoneSchools: "/yellowzone-schools",
    instagram: "https://www.instagram.com/mitran_global/",
    linkedin: "https://www.linkedin.com/company/mitranglobal/",
    youtube: "https://www.youtube.com/@mitranglobal",
  },
};

/**
 * Coach profile — the ONE source for every coach section on the site
 * (home, course pages, Platinum, Free Training, Success Stories).
 * Edit here and every page updates.
 */
export const coach = {
  name: "Vidyashankar Guru",
  designation: "Co-Founder and Chief Vision Officer at MiTran Global",
  role: "Co-Founder & Chief Vision Officer",
  tagline: "TEDx Speaker · Author of five books",
  photo: "/images/vidyashankar-guru.jpg",
  photoAlt:
    "Vidyashankar Guru, Co-Founder and Chief Vision Officer at MiTran Global",
  story: [
    "Grew up in a small village in South India — no elite school, no big-city advantages. Struggled with confidence, self-doubt, and freezing under pressure as a teen.",
    "Realised the hard truth: capability without emotional strength will not help to achieve anything in life.",
    "Spent 22+ years studying what schools never teach students — mindset, discipline, and inner strength.",
    "Trained over 25,000 teens and professionals across 40+ nationalities as a TEDx Speaker and Author of five books.",
    "Today his only mission is giving every struggling teen the tools he wished he had at their age.",
  ],
  highlights: [
    { value: "22+", label: "Years of study" },
    { value: "25K+", label: "Teens & professionals" },
    { value: "40+", label: "Nationalities" },
    { value: "5", label: "Books authored" },
  ],
  creds: [
    "TEDx Speaker",
    "Author of 5 Books",
    "NLP Practitioner",
    "Teen Psychology",
    "40+ Nationalities",
  ],
  awards: [
    { icon: "🏆", year: "2011", t: "Indian Achievers Award for Industrial Excellence", s: "Indian Economic Development & Research Association" },
    { icon: "🏅", year: "2012", t: "Edupreneur of the Year", s: "Times Group" },
    { icon: "🌟", year: "★", t: "Lifetime Achievement Award", s: "Global Education Conclave" },
  ],
};

export type MenuItem = {
  label: string;
  href: string;
  icon: string;
  description: string;
  flagship?: boolean;
  external?: boolean;
  /** Render as an icon-only social button; `icon` is the SocialIcon name. */
  social?: boolean;
};

/** A titled block inside a nav dropdown. `compact` renders as small chips. */
export type MenuGroup = {
  title: string;
  items: MenuItem[];
  compact?: boolean;
};

/* "For Parents" dropdown — courses, programs, community and socials. */
export const courseItems: MenuItem[] = [
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
];

export const parentGroups: MenuGroup[] = [
  {
    title: "Programs",
    items: [
      {
        label: "Join FREE WhatsApp Community",
        href: site.urls.whatsapp,
        icon: "💬",
        description: "A free community of parents raising confident teens.",
        external: true,
      },
      {
        label: "Positivity Hub",
        href: "/positivity-hub",
        icon: "✨",
        description: "3 one-to-one sessions with the coach, plus 5 bonuses.",
      },
      {
        label: "Positivity Hub Platinum",
        href: "/platinum",
        icon: "👑",
        description: "The complete 24-session 1-on-1 transformation journey.",
        flagship: true,
      },
    ],
  },
  {
    title: "Listen & read",
    compact: true,
    items: [
      {
        label: "Podcast",
        href: site.urls.spotify,
        icon: "🎙️",
        description: "Positivity conversations, on Spotify.",
        external: true,
      },
      {
        label: "Newsletter",
        href: site.urls.newsletter,
        icon: "📰",
        description: "Weekly insights delivered on LinkedIn.",
        external: true,
      },
      // Social profiles — shown as icons on the same row
      { label: "Instagram", href: site.urls.instagram, icon: "instagram", description: "", external: true, social: true },
      { label: "YouTube", href: site.urls.youtube, icon: "youtube", description: "", external: true, social: true },
      { label: "LinkedIn", href: site.urls.linkedin, icon: "linkedin", description: "", external: true, social: true },
    ],
  },
];

export const courseGroups: MenuGroup[] = [{ title: "Courses", items: courseItems }];

export type NavItem =
  | { type: "link"; label: string; href: string; external?: boolean }
  | {
      type: "dropdown";
      label: string;
      /** Small grey text after the label, e.g. "(11–17 year teens)". */
      sublabel?: string;
      groups: MenuGroup[];
    };

export const navLinks: NavItem[] = [
  { type: "link",     label: "Home",                   href: "/" },
  { type: "dropdown", label: "For Parents",            sublabel: "(11–17 year teens)", groups: parentGroups },
  { type: "dropdown", label: "Courses",                groups: courseGroups },
  { type: "link",     label: "YellowZone Schools",     href: site.urls.yellowZoneSchools },
  { type: "link",     label: "Real Life Real Stories", href: "/real-life-real-stories" },
  { type: "link",     label: "About Us",               href: "/about" },
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
    title: "Study Skills",
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
  { value: "1000+", label: "Video lessons" },
  { value: "98+", label: "Emotions measured" },
];

export const platformFeatures = [
  {
    icon: "📺",
    title: "Self-paced Courses",
    body: "Learn at your own pace with all our online courses covering essential academic and personal growth skills — any time, any device.",
  },
  {
    icon: "🎥",
    title: "Interactive Live Sessions",
    body: "Expert-led interactive live sessions aligned with course modules, featuring transformational coaching for lasting learning.",
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

export type PressLogo = { name: string; src: string };

export const pressLogos: PressLogo[] = [
  { name: "The Hindu",      src: "https://res.cloudinary.com/twteccae/image/upload/The_Hindu_kolitv.svg"          },
  { name: "Times of India", src: "https://res.cloudinary.com/twteccae/image/upload/The_Times_Of_India_fnegdh.svg" },
  { name: "India Today",    src: "/press/india-today.png" },
  { name: "Gulf News",      src: "/press/gulf-news.jpg" },
];
