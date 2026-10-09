# Anumandla Rohith Portfolio

Animated frontend-only portfolio built with React, TypeScript, Vite, Tailwind CSS, Three.js, React Three Fiber, Drei, GSAP, ScrollTrigger, Lenis, Framer Motion, and Lucide React. There is no Python, Express, database, or backend.

## Run locally

```bash
npm install
npm run dev
```

## Verify

```bash
npm run build
npm test
npm run lint
npm run typecheck
```

The Playwright smoke test lives in `tests/e2e/home.spec.ts`. Install its browser once with `npx playwright install chromium`, then run `npm run e2e`.

Original documents remain in the project root. Organized copies used by the site are in `public/images` and `public/documents`.

## Hosting private portfolio assets on S3

The resume, certificate bundle, and profile image support an S3 asset prefix through `VITE_ASSET_BASE_URL`. Copy `.env.example` to `.env` for local work, or create the same variable in the EC2 deployment environment:

```env
VITE_ASSET_BASE_URL=https://your-bucket.s3.ap-south-1.amazonaws.com/portfolio-assets
```

Upload these objects under that prefix:

```text
documents/rohith-resume.pdf
documents/rohith-old-resume.pdf
documents/rohith-certificates.pdf
images/rohith-profile.jpg
```

Because Vite embeds `VITE_*` variables during the build, set the variable before running `npm run build`. Configure the S3 bucket or CloudFront distribution to allow browser `GET` requests and add your EC2/site origin to its CORS policy. Never put AWS access keys in `.env`, frontend code, or the repository.
