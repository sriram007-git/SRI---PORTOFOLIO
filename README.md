# Sriram — Developer Portfolio

A dark, glassmorphic, 3D-accented portfolio built with React, TypeScript, Vite, Tailwind CSS v4, Framer Motion, and React Three Fiber.

## Getting started

```bash
npm install
npm run dev      # start local dev server
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build locally
```

The project has already been verified to install, type-check, and build cleanly.

## Project structure

```
src/
  components/
    layout/      Navbar, Footer
    sections/    Hero, About, Skills, Projects, Education, Certifications, Resume, Contact
    canvas/      HeroScene (Three.js / React Three Fiber background)
    ui/          Reusable pieces: SectionHeading, ProjectCard, TiltCard, CustomCursor,
                 ScrollProgress, BackToTopButton, BrandIcons
  data/          Content lives here, not hardcoded in components:
                 personal.ts, projects.ts, skills.ts, education.ts
  hooks/         useActiveSection (scroll-spy), useIsTouchDevice,
                 useCanRenderHeavyEffects (disables the 3D scene on low-power/mobile
                 devices and when prefers-reduced-motion is set)
```

## Things to fill in before shipping

All of these live in `src/data/personal.ts` and `src/data/education.ts`:

- `personal.resumeUrl` — link to a hosted resume PDF (or drop a file into `public/` and point to it)
- `personal.email` — replace the placeholder email address
- `education[0].details` — coursework / academic achievements, if you want to list them
- `certifications` in `education.ts` — add `credentialUrl` once you have public credential links
- Project `github` / `demo` links in `projects.ts` currently point at the GitHub profile root — replace with each project's actual repo/demo URL
- `public/og-image.png` — add a real Open Graph preview image (1200×630 recommended); referenced in `index.html`

## Performance & accessibility notes

- The Three.js hero scene is lazy-loaded and automatically skipped in favor of a static gradient on narrow, low-core-count devices and whenever the OS-level "reduce motion" preference is set.
- The custom cursor auto-disables on touch/coarse-pointer devices.
- Focus states, semantic headings, and alt text are in place; run a Lighthouse pass after adding real images to confirm scores stay high.
