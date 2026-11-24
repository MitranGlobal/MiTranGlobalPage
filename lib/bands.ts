/**
 * The two image bands around the home page's "hidden obstacles" section.
 * Taken from the Parent Live Sessions landing page ("Sound familiar?" and
 * "What home can start to feel like"). Images live in /public/images/bands.
 */

export type BandItem = { title: string; body: string; image: string };

export const familiarBand: BandItem[] = [
  { title: "The reminder loop", body: "“I remind, she shouts, I feel terrible, and tomorrow we do it all again.”", image: "/images/bands/familiar-1.webp" },
  { title: "The phone and the late night", body: "Awake until 2 am, asleep through the morning, angry when the screen goes off.", image: "/images/bands/familiar-2.webp" },
  { title: "Going blank in the exam", body: "“He knew it at home.” And a fear he never mentioned until it was too late.", image: "/images/bands/familiar-3.webp" },
  { title: "“Why should I?”", body: "Gives up the moment it gets hard, or does the bare minimum.", image: "/images/bands/familiar-4.webp" },
  { title: "The closed door", body: "One-word answers at home, a very different child around friends.", image: "/images/bands/familiar-5.webp" },
  { title: "Doing it all alone", body: "One parent carries everything. The other says, “All teens are like this.”", image: "/images/bands/familiar-6.webp" },
];

export const outcomeBand: BandItem[] = [
  { title: "Out of the reminder loop", body: "Fewer reminders, more ownership. You hand over one task and step back — no shouting needed.", image: "/images/bands/outcome-1.webp" },
  { title: "A phone and sleep plan that holds", body: "A plan your teen helped write, so nights end earlier and mornings start calmer.", image: "/images/bands/outcome-2.webp" },
  { title: "Steady in the exam hall", body: "A simple routine for before and during exams, so what they know at home shows up on paper.", image: "/images/bands/outcome-3.webp" },
  { title: "From “Why should I?” to “Let me try”", body: "Small stretches build real self-belief, so effort doesn’t stop the moment it gets hard.", image: "/images/bands/outcome-4.webp" },
  { title: "The door opens again", body: "Better questions than “How was your day?” — and conversations your teen actually wants to have.", image: "/images/bands/outcome-5.webp" },
  { title: "Parenting as a team", body: "Both parents on the same page, with a toolkit that has a page for the other parent.", image: "/images/bands/outcome-6.webp" },
];
