# Kounga Solutions — Cybersecurity Assurance Portfolio

A static, evidence-led portfolio for mentors reviewing six Kounga Solutions applications and selecting practical cybersecurity assurance learning projects. Built with React, TypeScript, Vite, Tailwind CSS and Lucide React. Hash-based routing supports GitHub Pages repository URLs and direct application links.

## Run locally

Requirements: Node.js 22 and npm.

```sh
npm ci
npm run dev
```

## Build and quality checks

```sh
npm run lint
npm run build
npm audit
```

Vite uses `/` locally and derives the production GitHub Pages base path from `GITHUB_REPOSITORY` in GitHub Actions. The workflow installs locked dependencies, runs lint and the TypeScript/production build, then deploys `dist` to GitHub Pages.

## Publish with GitHub Pages

1. Push this repository to GitHub, with the default branch named `main` (or adjust `.github/workflows/deploy.yml`).
2. In repository **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
3. Ensure Actions are enabled and the workflow has the `pages: write` and `id-token: write` permissions declared in the workflow.
4. Push to `main` or manually run **Deploy portfolio to GitHub Pages** from the Actions tab.
5. Open the URL shown in the deployment job. Hash routes support direct navigation and refreshes on repository subpaths.

No fixed username or repository is embedded. The production `base` is computed from GitHub Actions' `GITHUB_REPOSITORY` value.

## Content maintenance

Application profile content lives in `src/data/applications.ts`; candidate assignment content lives in `src/data/assessmentAreas.ts`; portfolio domains and workflow are in `src/data/portfolio.ts`. The types are in `src/types/`. Add or update entries there rather than duplicating copy across page components. Detail pages link to the matching source brief in `public/documents/`.

Original supplied documents are kept in `Assets/`; downloadable copies are in `public/documents/`. No PDF was supplied. Do not add confidential source material, credentials, customer information or private endpoints to this public static site.

## Evidence and limitations

This site reflects repository-level technical discovery in the supplied source documents. It does not establish production settings, control effectiveness or compliance. Suggested assessment topics are candidate learning projects, not assignments, confirmed weaknesses or findings. Unknown information remains identified for further evidence collection. The site has no backend, accounts, secrets or client-side access controls; GitHub Pages content is public.

## Dependency audit note

The final `npm audit` on 17 October 2026 reported 9 vulnerabilities (4 moderate, 5 high), including transitive Tailwind CSS 3 tooling advisories and React Router v6 advisories. npm only offered fixes that upgrade to Tailwind CSS 4 or React Router 7, which are breaking-major changes; those migrations were not applied. Re-run `npm audit` before publishing and plan compatible major upgrades.
