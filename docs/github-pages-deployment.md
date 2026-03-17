# GitHub Pages Deployment

**Goal:** Auto-deploy the CV to GitHub Pages on push to main.

**Prerequisite:** Repo must be public (or on GitHub Pro/Team for private Pages).

## Tasks

### 1. Add Vite base path config

Vite needs `base: "/<repo-name>/"` for GitHub Pages subpath hosting.
Add to `vite.config.ts`:

```ts
export default defineConfig({
  plugins: [react()],
  base: "/cv/",
});
```

### 2. Add GitHub Actions deploy workflow

Create `.github/workflows/deploy.yml` that:

- Triggers on push to main
- Builds with `npm run build`
- Deploys `dist/` to GitHub Pages using `actions/deploy-pages`

### 3. Enable Pages in repo settings

Settings → Pages → Source: GitHub Actions

### 4. Verify

Push to main, confirm the CV is live at `https://max-j-gruber.github.io/cv/`.
