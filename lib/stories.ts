/**
 * Real Life Real Stories — real testimonials only (as published on
 * mitranglobal.com and the Positivity Hub page). Photos in /public/images/stories.
 */

export type Story = {
  name: string;
  role: string;
  photo: string;
  quote: string;
  /** Short pull-quote shown large on the card. */
  pull: string;
};

export const stories: Story[] = [
  {
    name: "Banshika Kumari",
    role: "9th Grade · Jammu Sanskriti School, Jammu",
    photo: "/images/stories/banshika.webp",
    pull: "Since I am using MiTran Global, everything took a turn.",
    quote:
      "I am Banshika Kumari. I always face the problems of slow reading and learning but, since I am using MiTran Global everything took a turn. The platform MiTran Global has many courses like I love exams, Accelerated learning methodologies, Positive mind mastery. All these courses contain the stuff that is much needed for a student. From the accelerated learning methodologies course, I learned to read and learn fast. I especially thank the whole MiTran Global team for making my life much easier.",
  },
  {
    name: "Raju Adnani",
    role: "Father of Siddharth · 11th Grade, Dubai English School, UAE",
    photo: "/images/stories/raju.webp",
    pull: "A drive for success and a belief in failure as a stepping stone.",
    quote:
      "Working at the foundational level the system created by Vidyashankar has instilled in Siddharth a drive for success and a belief in failure as a stepping stone to success. Siddharth has not only honed his leadership skills but also integrated essential self-beliefs into his personality. When Siddharth participated in a panel discussion at MiTran Global, we were happy to notice he made significant contributions. In my opinion, the whole coaching process has been fundamental in shaping Siddharth’s trajectory, addressing aspects often overlooked by mainstream education.",
  },
  {
    name: "Mahathi",
    role: "8th Grade · KRM Public School, Chennai",
    photo: "/images/stories/mahathi.webp",
    pull: "Exams are easy once we love the same.",
    quote:
      "This is Mahathi and I have been part of MiTran Global sessions. I have learned many new things from these classes. Also, the online courses that have been shared in the link were very understandable and made me believe Exams are easy once we love the same. The other courses like Positive Mind Mastery changed me from feeling negative to thinking positive. Thank you MiTran Global for creating this wonderful hub for students.",
  },
  {
    name: "Anshikha Kumar",
    role: "9th Grade · The Srijan School, Delhi",
    photo: "/images/stories/anshikha.webp",
    pull: "The power of the mind — it was truly eye-opening!",
    quote:
      "Hi, I’m Anshika Kumar, a 9th-grade student from The Srijan School, Delhi. Before joining MiTran Global’s Positivity Hub, I was eager to understand teenage life better and learn how to navigate challenges with confidence. One of the most fascinating things I discovered was about the power of the mind and how our neurons shape our thoughts and actions, it was truly eye-opening! I’ve learned the importance of staying positive, believing in myself. Thank you, MiTran Global, for creating such an impactful platform!",
  },
  {
    name: "Justin Jiby",
    role: "6th Grade · St. Alonso Senior Secondary School",
    photo: "/images/stories/justin.webp",
    pull: "If others can do it, I can do it too!",
    quote:
      "Hi, I’m Justin, a 6th-grade student from St. Alonso Senior Secondary School. Thank you for this amazing session! It was a new and exciting experience for me. Before this, I had never thought about these ideas. But after the session, when I asked myself what I had learned, the first thing that came to my mind was: “If others can do it, I can do it too!” This made me feel more confident and motivated. I’m really grateful for this life-changing opportunity through MiTran Global. Thank you for helping me believe in myself and discover my true potential!",
  },
  {
    name: "Likith Bardwaj",
    role: "7th Grade · Delhi Public School, North Bangalore",
    photo: "/images/stories/likith.webp",
    pull: "Now, I feel better both mentally and physically.",
    quote:
      "Earlier, I used to feel like I couldn't achieve much and that my life would always be the same. But after taking these courses, I learned a lot about the human brain, emotions, and self-control. One of the best things was making a weekly plan, which helped me stay focused. Now, I feel better both mentally and physically. My favorite part of the program was learning through mnemonics like POPM and discovering the eight principles of superpower memory. These techniques have helped me understand how to control my emotions and improve my focus. Thank you, MiTran Global, for this amazing experience!",
  },
];
