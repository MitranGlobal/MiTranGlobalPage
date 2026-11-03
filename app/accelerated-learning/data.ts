/* Content for the Accelerated Learning Methodology course page.
   Copy follows the approved course page; edit text here, not in page.tsx. */

export const ENROLL = "https://hub.mitranglobal.com/l/f687d5c493";

export const HERO_BADGES = [
  { icon: "⏱️", label: "2+ Hours Content", sub: "8 self-paced modules" },
  { icon: "🏅", label: "Certification", sub: "On completion" },
  { icon: "🛡️", label: "14-Day Refund", sub: "No questions asked" },
  { icon: "🧪", label: "LBA Assessment", sub: "By a certified psychologist" },
];

export const SKILLS = [
  "Master Speed Reading",
  "Effective Information Gathering",
  "Smart Note-Making Techniques",
  "Boost Memory & Recall",
  "Sharpen Critical Thinking",
  "Time Management & Productivity",
  "Master Active Learning",
  "Exam & Test-Taking Strategies",
  "Mind Mapping & Visualisation",
  "Develop Super-Focus & Concentration",
  "Problem-Solving & Decision-Making",
  "Improve Comprehension & Retention",
  "Overcome Learning Blocks",
  "Optimise Study Techniques",
  "Build a Growth Mindset",
  "Apply Learning to Real-World Success",
];

export type Module = {
  n: string;
  name: string;
  tag: string;
  why: string;
  keys: string[];
  benefit: string;
};

export const MODULES: Module[] = [
  {
    n: "01",
    name: "Introduction",
    tag: "The Foundation of Accelerated Learning",
    why: "Before mastering advanced learning techniques, students need to understand how their brain works and how to optimise their learning process.",
    keys: [
      "The science behind accelerated learning and how the brain retains information",
      "The power of self-awareness in improving study habits",
      "How to develop a growth mindset for lifelong learning",
    ],
    benefit: "Students build a strong foundation in confidence, motivation, and effective learning strategies — setting the stage for academic success.",
  },
  {
    n: "02",
    name: "Speed Reading",
    tag: "Read Faster, Understand Better",
    why: "Traditional reading is slow and inefficient. Speed reading helps students absorb information quickly while maintaining comprehension.",
    keys: [
      "Techniques to double or triple reading speed without losing accuracy",
      "How to eliminate subvocalisation and improve focus",
      "Skimming and scanning methods for faster information processing",
    ],
    benefit: "Students save time, improve focus, and retain more information — making learning more efficient and enjoyable.",
  },
  {
    n: "03",
    name: "Information Gathering",
    tag: "Master the Art of Learning",
    why: "Knowing where and how to find the right information is essential for effective learning and problem-solving.",
    keys: [
      "Smart research strategies to filter relevant and high-quality information",
      "Techniques for organising and structuring knowledge",
      "Using digital tools and AI for enhanced learning efficiency",
    ],
    benefit: "Students develop critical thinking and research skills, allowing them to absorb and process information quickly.",
  },
  {
    n: "04",
    name: "Note-Making",
    tag: "Capture & Retain Key Insights",
    why: "Traditional note-taking can be ineffective. Smart note-making techniques improve understanding and recall significantly.",
    keys: [
      "Mind Mapping & Cornell Method for efficient summarisation",
      "How to structure notes for maximum recall",
      "Visual learning techniques to boost memory retention",
    ],
    benefit: "Students develop an active learning habit, making studying more productive and organised.",
  },
  {
    n: "05",
    name: "Super Power Memory",
    tag: "Unlock Your Brain's Full Potential",
    why: "A sharp memory is a game-changer for academic success. Learning memory-boosting techniques makes recalling information effortless.",
    keys: [
      "Mnemonics, chunking, and association techniques for rapid recall",
      "The Link & Story Method for memorising complex concepts",
      "Brain exercises to improve long-term retention",
    ],
    benefit: "Students retain information faster and longer — reducing revision time and boosting confidence.",
  },
  {
    n: "06",
    name: "Thinking & Application Skills",
    tag: "Turn Knowledge into Action",
    why: "Memorisation alone isn't enough. The ability to analyse, apply, and think critically is crucial for real-world success.",
    keys: [
      "How to develop problem-solving and analytical thinking skills",
      "Techniques for applying knowledge in real-life situations",
      "The power of creative thinking for innovation and success",
    ],
    benefit: "Students learn beyond rote learning — enhancing their decision-making and application abilities.",
  },
  {
    n: "07",
    name: "Revision & Exam Skills",
    tag: "Perform at Your Best!",
    why: "Studying effectively is different from studying a lot. Smart revision strategies help students retain knowledge and reduce exam stress.",
    keys: [
      "Spaced repetition and active recall for long-term retention",
      "Time management strategies for efficient exam preparation",
      "Stress-reducing techniques for peak performance",
    ],
    benefit: "Students study smarter, not harder — performing with confidence and clarity in every exam.",
  },
  {
    n: "08",
    name: "Conclusion",
    tag: "Becoming a Lifelong Learner",
    why: "Learning doesn't stop in the classroom. Mastering accelerated learning techniques helps students continue growing and adapting throughout life.",
    keys: [
      "How to maintain consistent learning habits beyond academics",
      "The importance of curiosity and continuous self-improvement",
      "Developing a personalised learning plan for lifelong success",
    ],
    benefit: "Students leave with the tools to become independent, confident learners — equipped with skills that set them apart in academics and beyond.",
  },
];

export const INCLUSIONS = [
  { icon: "⏱️", tag: "2+ hrs", t: "2+ Hours of Course Content", b: "8 self-paced learning modules covering essential success principles, mindset shifts, and powerful techniques to help children excel in academics and life — designed for easy comprehension and practical application." },
  { icon: "🧪", tag: "LBA", t: "Learning Behaviour Assessment", b: "A professional LBA conducted by a certified psychologist and transformation coach — identifying strengths, preferred learning styles, and areas for improvement for a more customised learning approach." },
  { icon: "📖", tag: "eBook", t: "Free eBook — I Love Exams", b: "A complimentary copy of the I Love Exams eBook by Vidyashankar Guru — proven strategies to overcome exam anxiety, boost confidence, and develop a success-driven mindset. Essential reading for every student." },
  { icon: "🌟", tag: "₹2,999 value", t: "Journey to Positivity — Bonus Course", b: "FREE access to Journey to Positivity — a 5-module course for both parents and children to build a positive mindset and lifelong success habits. Previously priced at ₹2,999, now included free!" },
  { icon: "🔄", tag: "Free", t: "Free Course Updates", b: "Continuously refined and expanded content — you always have access to the latest strategies, at no extra cost." },
  { icon: "🛡️", tag: "Risk-free", t: "14-Day Refund Policy", b: "A full 14-day refund if the course isn't the right fit. No questions asked. 100% risk-free." },
];

export const TESTIMONIALS = [
  {
    q: "I always face the problems of slow reading and learning but, since I am using MiTran Global everything took a turn. From the accelerated learning methodologies course, I learned to read and learn fast. I especially thank the whole MiTran Global team for making my life much easier.",
    n: "Banshika Kumari",
    r: "9th Grade · Jammu Sanskriti School, Jammu",
  },
  {
    q: "Working at the foundational level, the system created by Vidyashankar has instilled in Siddharth a drive for success and a belief in failure as a stepping stone. The whole coaching process has been fundamental in shaping his trajectory — addressing aspects often overlooked by mainstream education.",
    n: "Raju Adnani",
    r: "Father of Siddharth, 11th Grade · Dubai English School, UAE",
  },
  {
    q: "I have learned many new things from these classes. The online courses were very understandable and made me believe exams are easy once we love the same. The Positive Mind Mastery course changed me from feeling negative to thinking positive. Thank you MiTran Global!",
    n: "Mahathi",
    r: "8th Grade · KRM Public School, Chennai",
  },
];

export const OUTCOMES = [
  "Read Faster & Understand Better",
  "Retain & Recall Information Effortlessly",
  "Master Smart & Effective Note-Taking",
  "Develop a Super Memory with Proven Techniques",
  "Enhance Focus & Concentration",
  "Excel in Exams with Powerful Strategies",
  "Optimise Study Time & Learn Smarter",
  "Become a Confident, Independent Learner",
];

export const PAINS = [
  "Overwhelmed by large amounts of information",
  "Difficulty retaining information after studying",
  "Ineffective note-taking habits",
  "Struggling with memory & recall",
  "Lack of focus while studying",
  "Exam anxiety & poor performance",
  "Procrastination & inefficient study habits",
  "Slow reading speed",
];

export const REASONS = [
  { t: "Enhanced Retention & Recall", d: "Strengthen memory and effortlessly retain important information." },
  { t: "Increased Efficiency & Time Management", d: "Learn smarter, not harder, by optimising study time." },
  { t: "Improved Reading Speed", d: "Read faster while maintaining comprehension for better learning." },
  { t: "High Concentration & Focus", d: "Eliminate distractions and develop laser-sharp attention." },
  { t: "Holistic Understanding", d: "Grasp concepts deeply instead of just memorising facts." },
  { t: "Personalised Learning Strategies", d: "Adapt study methods to match individual strengths." },
  { t: "Reduced Procrastination", d: "Overcome delays and build consistency in learning." },
  { t: "Enhanced Creativity & Critical Thinking", d: "Develop problem-solving skills and innovative thinking." },
  { t: "Long-Term Retention", d: "Retain knowledge for life using scientifically proven techniques." },
];

export const BONUS_PAINS = [
  "Show they're capable of more but struggle in exams?",
  "Lack effort and motivation in studies?",
  "Constantly complain about school, subjects, or teachers?",
  "Experience high stress during exams?",
  "Attend multiple tuitions but see little improvement?",
  "Waste excessive time on digital devices?",
];

export const JTP_POINTS = [
  { s: "Multiple Interactive Modules", r: "Essential life skills & success mindset" },
  { s: "Exciting Challenges & Activities", r: "Making learning fun while reinforcing key lessons" },
  { s: "Proven Strategies for Success", r: "A strong, positive foundation for life" },
  { s: "Structured Step-by-Step Learning", r: "Guiding them to grow at their own pace" },
];

export type Feature = { t: string; on: boolean; star?: boolean };
export type Plan = {
  tier: string;
  price: string;
  fee: string;
  href: string;
  featured?: boolean;
  feats: Feature[];
};

export const PLANS: Plan[] = [
  {
    tier: "Silver",
    price: "499",
    fee: "One-time fee",
    href: "https://hub.mitranglobal.com/web/checkout/67a32a177470ec6f59c6b29a",
    feats: [
      { t: "I Love Exams eBook", on: true },
      { t: "Assessment", on: true },
      { t: "Course Certificate", on: true },
      { t: "Video Lectures", on: false },
      { t: "LBA Assessment", on: false },
    ],
  },
  {
    tier: "Premium",
    price: "899",
    fee: "One-time fee",
    href: "https://hub.mitranglobal.com/web/checkout/67a3137cbb1099bd3da24774",
    feats: [
      { t: "Video Lectures", on: true },
      { t: "I Love Exams eBook", on: true },
      { t: "Assessment", on: true },
      { t: "Course Certificate", on: true },
      { t: "Learning Behavioural Assessment (LBA)", on: true },
      { t: "One-to-One Counselling", on: false },
      { t: "101 Parenting Lessons", on: false },
    ],
  },
  {
    tier: "Ultimate",
    price: "999",
    fee: "One-time fee · Best value",
    href: "https://hub.mitranglobal.com/web/checkout/6777a1de0912d5e961c43c72",
    featured: true,
    feats: [
      { t: "Video Lectures", on: true },
      { t: "Assessment & Resources", on: true },
      { t: "Course Certificate", on: true },
      { t: "Learning Behaviour Assessment", on: true },
      { t: "One-to-One Counselling", on: true, star: true },
      { t: "8 Live Events", on: true, star: true },
      { t: "101 Parenting Audio Lessons", on: true, star: true },
      { t: "Bonus 1: I Love Exams eBook", on: true, star: true },
      { t: "Bonus 2: Journey to Positivity", on: true, star: true },
    ],
  },
];
