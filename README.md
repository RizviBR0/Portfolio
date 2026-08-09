# Sabbir Rizvi — Product Engineer Portfolio

A multi-page React and TypeScript portfolio built with Vite, Tailwind CSS,
Framer Motion, Lenis, and a lazily loaded Three.js hero treatment.

## Routes

- `/` — portfolio homepage
- `/projects/ideavault` — IdeaVault case study
- `/projects/woff-space` — Woff Space case study
- `/projects/loome` — Loome case study

Each route is emitted as its own HTML entry so project metadata is available
without relying on client-side navigation.

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

`npm run build` runs the TypeScript project build before producing the static
multi-page output in `dist/`.

## Content and SEO

Project content is centralized in `src/data/projectsData.ts`. Shared portfolio
links live in `src/data/siteData.ts`. Homepage metadata and structured data live
in `index.html`; each project has a dedicated HTML entry under `projects/`.

Update `public/sitemap.xml`, the route HTML metadata, and project data together
when adding or removing a case study.
