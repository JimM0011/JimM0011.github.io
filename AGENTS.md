# Repository Guidelines

## Project Structure & Module Organization

This repository is a Vite-powered Vue 3 personal homepage. The application entry points are `index.html` and `src/main.js`; the root layout is in `src/App.vue`. Reusable UI lives in `src/components/`, with page sections in `src/components/sections/` and paper-specific components in `src/components/sections/papers/`. MDX content is kept alongside components (for example, `src/components/mds/md.mdx`), while fonts, icons, and the avatar are in `src/assets/`. Public, directly served media—backgrounds, videos, model files, and image examples—belongs under `public/` in the existing feature-specific directories. Keep generated output in `dist/` (ignored by Git).

## Build, Test, and Development Commands

Install dependencies and use the package scripts from the repository root:

```bash
npm install       # install the locked dependency set
npm run dev       # start Vite's local development server
npm run build     # create a production build in dist/
npm run preview   # serve the production build locally
```

There is currently no test runner or lint script configured. Run `npm run build` before submitting changes to catch Vue, MDX, and asset-resolution errors; manually exercise the affected page sections with `npm run dev`.

## Coding Style & Naming Conventions

Use two-space indentation, semicolons only where the surrounding file already uses them, and single quotes for JavaScript imports and strings. Follow the existing Vue Options API and single-file component structure (`<script>`, `<template>`, `<style>`). Name Vue components in PascalCase (for example, `ImageSlider.vue`), section files descriptively, and static assets with lowercase, feature-oriented names. Use the `@` alias for imports from `src/` and preserve the established `public/` paths for browser-served assets.

## Testing Guidelines

No automated tests or coverage thresholds are defined. For UI changes, verify the relevant desktop and mobile layouts, navigation/contact interactions, media loading, and console output in a local browser. Confirm that `npm run build` completes successfully.

## Commit & Pull Request Guidelines

Existing history uses short `update` messages, but new commits should be more descriptive and imperative, such as `Fix image selector asset path` or `Add publication section`. Keep commits focused. Pull requests should explain the visible or structural change, identify notable asset/dependency updates, link an issue when applicable, include screenshots or a short recording for visual changes, and state the validation performed (for example, `npm run build`).

## Security & Configuration Tips

Do not commit credentials, tokens, or machine-local configuration. Treat files in `public/` as publicly downloadable, and review large media additions for repository size before committing.
