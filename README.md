# MiTran Global — Website (v2)

Full modern rebuild of [MiTranGlobalPage](https://github.com/MitranGlobal/MiTranGlobalPage). Static HTML files replaced with a proper Next.js 14 app.

## Stack

- **Next.js 14** — App Router, TypeScript
- **Tailwind CSS v3** — design tokens in `tailwind.config.ts` (dark + gold, Fraunces/Inter)
- **Framer Motion** — nav, menus, quiz, popups
- **GSAP + ScrollTrigger** — scroll reveals (`components/ui/Reveal.tsx`)
- **React Three Fiber** — YellowZone 3D seal
- **Zustand** — quiz popup state (`store/quiz.ts`)
- **ClarityConvert** — leads from the quiz and the Positivity Hub video (`app/api/leads`)
- **Vercel** — deployment target

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/positivity-hub` | Positivity Hub (3 one-to-one sessions + 5 bonuses) |
| `/platinum` | Positivity Hub Platinum (24-session compass) |
| `/positive-mind-mastery`, `/accelerated-learning`, `/i-love-exams` | Course pages |
| `/yellowzone-schools` | YellowZone Schools |
| `/real-life-real-stories` | Testimonials (`/success-stories` redirects here) |
| `/about` | About Us + Meet the Coach |
| `/quiz` | Parent quiz (also opens as a popup from the home hero) |
| `/free-training` | Free training (not in the nav) |

## Where content lives

```
lib/site.ts         Links, nav menus, coach profile, pillars, stats, press logos
lib/hub.ts          Positivity Hub + Platinum copy, bonuses, Clarity Call, FAQs
lib/platinum.ts     The 24 sessions, pillars and LevelUp habits
lib/quiz.ts         Quiz questions and result bands
lib/stories.ts      Real Life Real Stories testimonials
lib/yellowzone.ts   YellowZone page copy, criteria, Tally form URL
lib/bands.ts        Home page image bands
lib/clarity.ts      ClarityConvert form and field mapping
app/<course>/data.ts  Course page copy and pricing
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

Edit the files listed under "Where content lives" — pages re-render automatically.

### Leads (ClarityConvert)

The quiz and the Positivity Hub video sign-up post to `/api/leads`, which forwards to the
ClarityConvert "Contact Form" (defaults in `lib/clarity.ts`, overridable with
`CLARITY_FORM_*` env vars). Quiz results travel on the landing-page URL
(`?lead_source=quiz&quiz_result=…&quiz_score=…&quiz_focus=…`). To store each answer as its
own field, add fields to the form and map them in `lib/clarity.ts`.
