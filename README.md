# MiTran Global — Website

Static HTML site. No build step, no dependencies. Every page is self-contained
(inline CSS + JS) and links to the others through a shared navigation bar.

## Pages

| File | Page | Was |
|---|---|---|
| `index.html` | Home — Positivity Framework™ | `mitran_global_main.html` |
| `platinum.html` | Platinum Hub — 24-Session Journey | `mitran_platinum.html` |
| `i-love-exams.html` | I Love Exams (course) | `iloveexams_course.html` |
| `accelerated-learning.html` | Accelerated Learning Methodology (course) | `accelerated_learning_course.html` |
| `positive-mind-mastery.html` | Positive Mind Mastery (course) | `positive_mind_mastery_course.html` |
| `free-training.html` | Free Training (landing page) | `training_mitranglobal_course.html` |
| `quiz.html` | Discover Your Personality Type | `mitran_quiz.html` |

`index.html` is the entry point, so the site works at a domain root or on GitHub Pages.

## Shared navigation

Every page carries an identical block, injected in two places:

1. `<style id="mg-sitebar-css">` — just before `</head>`
2. `<div id="mg-sitebar">` — immediately after `<body>`

It is a fixed dark strip across the top listing all seven pages, with the current
page highlighted in gold. Each page's original nav is pushed down by 40px
(`nav { top: var(--mg-bar-h) !important; }`) and the first section's top padding is
increased by the same amount, so nothing overlaps.

On narrow screens the strip scrolls horizontally — which matters, because the
per-page hamburger menus collapse the original nav links below 900px.

**To change the menu:** edit the `<div id="mg-sitebar">` block in all seven files
(it is byte-identical apart from which link has `class="mg-active"`).

**To change the strip's height:** edit `--mg-bar-h` in the style block, and adjust the
matching `padding-top` overrides at the bottom of the same block.

## Internal links

Links that previously pointed at `https://mitranglobal.com/...` now point at the
local files, so the whole set is navigable offline and on a staging URL.

External links are untouched: `hub.mitranglobal.com` (enrolment/checkout),
`lp.mitranglobal.com`, `positivity.mitranglobal.com`, Calendly, WhatsApp, Drive,
Spotify, LinkedIn.

If you deploy these pages at paths that differ from the filenames above
(e.g. `/iloveexams` instead of `/i-love-exams.html`), update the `href`s in the
`mg-sitebar` block and in the course cards on `index.html` to match.

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening the files directly with `file://` works too, since there are no fetches.

## Deploying with GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.
The `.nojekyll` file is included so Jekyll doesn't reprocess anything.
