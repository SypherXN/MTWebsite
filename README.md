# Matthew Tran Portfolio (Astro)

Personal portfolio site for [matthewgtran.com](https://matthewgtran.com).

## Local development

Requirements: **Node.js 22+**

```bash
npm install
npm run dev
```

Open `http://localhost:4321`.

## Production-like preview

```bash
npm run build:preview
```

Search (Pagefind) is only available after `build`/`preview`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build + Pagefind index |
| `npm run preview` | Serve `dist/` locally |
| `npm run build:preview` | Build then preview |
| `npm run check` | Astro type/content checks |

## Environment

Copy `.env.example` to `.env` for local settings.

## Editing content

See [`docs/CONTENT-GUIDE.md`](docs/CONTENT-GUIDE.md) for detailed editing instructions.

## Adding a project

1. Add `src/content/projects/your-slug.md` with frontmatter + case study sections
2. Run `npm run dev` to preview
3. Set `featured: true` to show on the home page
