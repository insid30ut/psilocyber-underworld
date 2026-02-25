---
description: Deploy the psilocyber-underworld application to Vercel and verify functionality
---

1. Build the project locally to ensure no compilation errors or type errors are present.
// turbo
2. `npm run build`
3. If the build fails, identify the error and fix it before proceeding. Once the local build passes, prepare for deployment.
// turbo
4. `git add .`
// turbo
5. `git commit -m "chore: prepared for deployment"`
// turbo
6. `git push`
7. Instruct the user that Vercel will automatically trigger a new deployment because of the push to the default branch (`master` or `main`).
8. Remind the user they can link the live Vercel deployment URL to TinaCloud so the `/admin` portal works accurately on the live production site.
