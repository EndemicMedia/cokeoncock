# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Start dev server:**
```bash
npm run dev
```
Runs Vite dev server with React hot module replacement. Site is available at `http://localhost:5173/cokeoncock/`

**Build for production:**
```bash
npm run build
```
Creates optimized production build in `dist/` folder. Automatically deploys to GitHub Pages on push to `main` or `claude/*` branches.

**Preview production build:**
```bash
npm run preview
```
Serves the production build locally to test before deployment.

## Architecture Overview

### Tech Stack
- **React 18** + **Vite 6**: Frontend framework with fast dev build tooling
- **Tailwind CSS 3**: Utility-first styling with neo-brutalist custom theme (matrix green, hot pink, cyan)
- **Zustand**: Lightweight state management for shopping cart with localStorage persistence
- **Framer Motion**: Smooth animations and transitions
- **React Router DOM**: Client-side routing (HashRouter for GitHub Pages)
- **EmailJS + Mailto**: Order handling (no backend—fallback to Instagram DM)

### Core Application Structure

**Entry Point:** `src/App.jsx`
- Sets up HashRouter for GitHub Pages compatibility
- Manages cart and checkout modal state at app level
- Routes: `/` (Home), `/shop`, `/shop/:productSlug` (shop by category)

**Pages:**
- `Home.jsx`: Landing page with hero, banners, and crew showcase
- `Shop.jsx`: Product grid with category filtering and product details modal

**State Management:**
- `src/store/useCartStore.js`: Zustand store with localStorage persistence
  - Key methods: `addItem()`, `removeItem()`, `updateQuantity()`, `getTotalPrice()`, `getTotalItems()`
  - Key selectors: `items` array (includes product data + size + quantity)

**Styling:**
- Tailwind config includes custom colors (`matrix`, `hotpink`, `cyan`) and brutal box shadow utilities
- Dark mode is native (black backgrounds, neon accents)
- No Tailwind dark mode toggle needed—design is inherently dark

**Components:**
- `Layout.jsx`: Header, Footer wrapper with cart button in header
- `ProductGrid.jsx` + `ProductCard.jsx`: Display products with hover effects
- `ProductModal.jsx`: Detail view with size selection and add-to-cart
- `CartDrawer.jsx` + `CartItem.jsx`: Shopping cart side panel
- `CheckoutModal.jsx`: Order form that generates Instagram DM or email links
- Hero/Banner components: `Hero.jsx`, `SplitBanner.jsx`, `TriptychBanner.jsx`, `HeroImageBanner.jsx`

### Product Data

Location: `src/data/products.js`

Product object schema:
```javascript
{
  id: number,
  name: string,
  category: "tshirt" | "hoodie" | "tank" | "tote" | "longsleeve" | "crewneck" | "patch" | "hat" | "beanie",
  price: number,
  description: string,
  image: string (path relative to public/),
  sizes: string[]
}
```

Products are displayed in `ProductGrid.jsx` and filtered by category via URL slug on Shop page.

### Order Flow

1. User adds item to cart (ProductModal → CartDrawer)
2. Cart persists to localStorage via Zustand
3. User proceeds to checkout (CheckoutModal)
4. Three order delivery options:
   - **Instagram DM**: Pre-formatted message link to @cokeoncock
   - **Email**: `mailto:` link with order details
   - **EmailJS** (commented fallback): Would send via EmailJS if credentials configured

Email service utilities: `src/utils/emailService.js`
- `generateInstagramMessage()`: Creates Instagram DM with order details
- `generateEmailLink()`: Creates mailto link with pre-filled subject and body
- `sendOrderEmail()`: EmailJS integration (requires service/template/public key setup)

### Deployment

**GitHub Pages:**
- Configured for `https://endemicmedia.github.io/cokeoncock/`
- Vite base path: `/cokeoncock/`
- Automatic deployment via GitHub Actions on push to `main` or `claude/*` branches
- Uses HashRouter to handle client-side routing on static hosting

## Key Implementation Notes

**Styling Decisions:**
- All color customization is in `tailwind.config.js` (extend colors and fontFamily)
- Brutal box shadows use custom Tailwind utilities (`shadow-brutal`, `shadow-brutal-hover`)
- No global CSS dark mode—just use Tailwind classes with dark color tokens

**Cart Persistence:**
- Zustand `persist` middleware automatically syncs to localStorage under key `cokeoncock-cart`
- Cart survives page reloads

**Product Images:**
- Must be placed in `public/images/` folder
- Referenced in products.js without `public/` prefix (e.g., `images/product-name.jpg`)
- New images should follow naming convention: `product-[descriptive-name].jpg`

**Responsive Design:**
- Mobile-first approach using Tailwind breakpoints
- Test on mobile (375px) and desktop (1920px)
