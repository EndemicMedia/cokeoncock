# CLAUDE.md

## Hosting constraints
- GitHub Pages under `/cokeoncock/` (Vite `base` in `vite.config.js`); dev URL is `http://localhost:5173/cokeoncock/`.
- Keep `HashRouter`; Pages has no server-side routing. Routes live in `src/App.jsx`: `/`, `/shop`, `/shop/:productSlug`, `/about`, `/policies`, `/size-guide`.
- Pushes to `main` or `claude/*` deploy automatically.

## Orders
- No backend. Checkout builds an Instagram DM or a `mailto:` link (`src/utils/emailService.js`); EmailJS is an unconfigured fallback. Do not add a server.

## Products
- Data in `src/data/products.js`; `category` is one of `tops`, `bottoms`, `head`, `bags`, `accessories`.
- Images go in `public/images/`, referenced without the `public/` prefix (`images/product-<name>.jpg`).

## Design
- Inherently dark design; do not add a dark-mode toggle. Colors live in `tailwind.config.js`.
- Check layouts at 375px and 1920px.
