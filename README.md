# MiTran Global — Website (v2)

Full modern rebuild of [MiTranGlobalPage](https://github.com/MitranGlobal/MiTranGlobalPage). Static HTML files replaced with a proper Next.js 14 app.

## Stack

- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS v3** — design tokens in `tailwind.config.ts`
- **Three.js + React Three Fiber + Drei** — hero background (floating orbs + sparkles)
- **Framer Motion** — nav, mobile drawer, testimonials, lightbox, quiz transitions
- **GSAP + ScrollTrigger** — scroll-reveal animations (`components/ui/Reveal.tsx`)
- **Zustand** — lightbox state (`store/lightbox.ts`)
- **Vercel** — deployment target

No custom cursor. Native pointer only.

## Project layout

```
app/
  layout.tsx           Root layout, fonts, Nav, Footer, Lightbox
  page.tsx             Home
  platinum/            Platinum Hub (24-session flagship)
  i-love-exams/
  accelerated-learning/
  positive-mind-mastery/
  free-training/
  quiz/                Interactive quiz
components/
  ui/                  Nav, Footer, Lightbox, Reveal, PageShell, FeatureGrid
  three/HeroScene.tsx  R3F Canvas
  sections/            Hero, Framework, Science, Platform, Courses,
                       Testimonials, Coach, Challenge, PressMarquee, Cta, QuizFlow
lib/
  cn.ts                clsx + tailwind-merge helper
  site.ts              All site content (nav, courses, pillars, testimonials, urls)
store/
  lightbox.ts          Zustand store
```

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub (instructions below).
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Next.js** (auto-detected). No env vars needed.
4. Click **Deploy**.

Every push to `main` will redeploy automatically.

## Push to git (replacing the old site)

From inside this directory:

```bash
# 1. Initialise
git init
git add .
git commit -m "chore: modern rebuild — Next.js 14, Tailwind v3, R3F, Framer Motion, GSAP, Zustand"

# 2a. If you want to REPLACE the existing MiTranGlobalPage repo history:
git branch -M main
git remote add origin https://github.com/MitranGlobal/MiTranGlobalPage.git
git push -f origin main

# 2b. (Safer) push to a new branch first and open a PR:
git checkout -b rebuild/nextjs
git remote add origin https://github.com/MitranGlobal/MiTranGlobalPage.git
git push -u origin rebuild/nextjs
# then open a PR on GitHub and merge when ready

# 2c. Or push to a brand new repo:
gh repo create MitranGlobal/MiTranGlobalPage-v2 --public --source=. --remote=origin --push
```

### About the current Vercel project

The existing Vercel project points at the old static site. When you push this rebuild, Vercel will detect Next.js on the next deploy — you don't need to reconfigure anything as long as the same repo/branch is connected. Confirm the project's **Framework Preset** is set to **Next.js** in Vercel settings after the first build.

## Editing content

All site copy, links, testimonials, pillars, and courses live in `lib/site.ts`. Edit there — pages automatically re-render.

## Notes on the rebuild

- All 7 legacy HTML files consolidated into 7 routes with a single shared layout, nav, and footer.
- Duplicated nav strip removed — one `<Nav />` component with active-route highlighting via Framer Motion `layoutId`.
- Custom cursor removed as requested.
- Hero uses a Three.js scene (dynamic import, no SSR) with graceful `null` fallback and a gradient overlay so type stays readable.
- Scroll reveals are declarative — wrap any block in `<Reveal>` and it fades in with GSAP ScrollTrigger.
- Lightbox is globally mounted in `layout.tsx` and controlled from anywhere via `useLightbox()`.
- Respects `prefers-reduced-motion`.
