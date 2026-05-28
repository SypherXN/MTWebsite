# Content Guide

Use this guide to update content without changing layout code.

## Where to edit

| Update | File |
|---|---|
| Name, tagline, photo, social links | `src/data/site.json` |
| Home teaser paragraph | `src/pages/index.astro` |
| Projects + case studies | `src/content/projects/*.md` |
| Experience list | `src/data/experience.json` |
| Education list | `src/data/education.json` |
| Skills chips | `src/data/skills.json` |
| About summary text | `src/pages/about.astro` |
| Contact page text | `src/pages/contact.astro` |
| Resume PDF file | `public/resume.pdf` |
| Global colors/fonts | `src/styles/global.css` |

## Local preview

```bash
npm run dev
```

Then open `http://localhost:4321`.

For production-like testing (including search):

```bash
npm run build:preview
```

## Projects

Each project file in `src/content/projects/` controls one page at `/projects/<slug>/`.

### Frontmatter fields

```yaml
title: "Project Name"
category: "Game Development" # Game Development | Game Design | Computer Science
featured: true
tools: ["Unity", "C#"]
role: "Role title"
dates: "Jan 2025 - Present"
startDate: "2025-01-01"
image: "/images/projects/example/hero.png"
summary: "Card summary text"
overview: "Longer description for the project detail page (shown under Overview)."
genre: "Action, Roguelike"   # optional; Game Development / Game Design only (not Computer Science)
platform: "PC"               # optional
youtube: https://www.youtube.com/watch?v=...  # optional; detail page hero only (tiles use image)
links:
  demo: https://...
  repo: https://...
  store: https://...  # optional; Meta Horizon store link
```

### Case study sections

Use these headings in the markdown body:

- `## Duties` — bullet list of responsibilities
- `## Gallery` — in-game images (`media-frame` figures or plain images)
- `## Process` — how the game was made (milestones, iterations)

`overview` plus role, dates, genre, platform, tools, and links render under the Overview heading from frontmatter (bold labels). Optional `youtube` replaces the detail-page cover with an embed; cards always use `image`.

## Experience and Education

Both files use this structure:

```json
[
  {
    "title": "Entry title",
    "from": "Jun 2025",
    "to": "present",
    "description": "What you did"
  }
]
```

Top item appears first on the About page.

## Common updates

- Add a new role: add an object to top of `experience.json`
- Update degree dates: edit `education.json`
- Change featured projects on home: toggle `featured` in project markdown files
- Swap profile photo: set `image` in `site.json` (prefer a local file in `public/images/`)

## Publish flow

1. Edit files
2. Run `npm run build:preview`
3. Commit and push to your main branch
4. GitHub Actions deploys the site
