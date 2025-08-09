# portfolio-frontend (React + Vite)

A modern, responsive portfolio with a resume download button.

## Quick Start
```bash
npm install
npm run dev
```
- Put your photo in `public/photo.jpg`.
- Set your backend URL in `src/App.jsx` (`BACKEND` constant).
- Replace `<YOUR_NAME>` and `<YOUR_LINKEDIN_URL>` in `src/App.jsx` and `index.html`.

## Build
```bash
npm run build
```

## Deploy to GitHub Pages
1. Set the correct base path in `vite.config.js` if using a repo, e.g. `base: "/<repo>/"`.
2. `npm run deploy` (uses `gh-pages` to push `dist/` to `gh-pages` branch).
