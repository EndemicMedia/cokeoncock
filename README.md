# 🖤 COKE ON COCK - Cynical Streetwear

> Reality sucks. Dress accordingly.

A neo-brutalist landing page for a trendy, cynical streetwear brand. Built with modern web technologies and deployed on GitHub Pages.

![Coke on Cock](https://img.shields.io/badge/vibe-cynical-black?style=for-the-badge)
![Build Status](https://img.shields.io/github/actions/workflow/status/EndemicMedia/cokeoncock/deploy.yml?style=for-the-badge)

## 🎨 Design

- **Neo-Brutalist Aesthetic**: High contrast, blocky layouts, thick borders
- **Dark Mode Native**: Pure black backgrounds with neon accents (matrix green, hot pink, electric cyan)
- **Bold Typography**: Space Grotesk, Inter, and Archivo Black fonts
- **Smooth Animations**: Framer Motion for premium feel
- **Mobile-First**: Fully responsive design

## 🛠 Tech Stack

- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS 3
- **UI Components**: Headless UI (Dialogs, Transitions)
- **Animations**: Framer Motion
- **State Management**: Zustand (cart state with localStorage persistence)
- **Icons**: React Icons
- **Order Handling**: Instagram DM / Email integration (no backend required)
- **Deployment**: GitHub Pages with GitHub Actions

## 📦 Features

- ✅ **Product Catalog**: 20+ items with filtering by category
- ✅ **Shopping Cart**: Add/remove items, adjust quantities, localStorage persistence
- ✅ **Product Quick View**: Modal with size selection
- ✅ **Checkout Flow**: "Drop Your Order" - simplified order submission
- ✅ **Instagram Integration**: Direct DM link with pre-filled order details
- ✅ **Email Integration**: Mailto link with order summary
- ✅ **Newsletter Signup**: Footer email capture (ready for ConvertKit integration)
- ✅ **Social Links**: Instagram, Twitter, TikTok
- ✅ **Mobile Optimized**: Responsive design with touch-friendly UI

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/EndemicMedia/cokeoncock.git
cd cokeoncock

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Product Collection

The site features a curated collection of cynical streetwear:

- **T-Shirts**: Reality Sucks, Therapy is Expensive, Pessimist Club, Burned Out
- **Hoodies**: Existential Dread, Numb Zip-Up, Social Battery Low
- **Tanks**: Overthinking Everything, Barely Functional
- **Long Sleeves**: Monday Mood, Sarcasm Loading
- **Crewnecks**: Dead Inside
- **Tote Bags**: No Hope, Void
- **Hats**: Whatever Dad Hat, Sad Boy Snapback
- **Beanies**: Not Today
- **Accessories**: Sticker Packs, Embroidered Patches

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  'matrix': '#00FF41',    // Neon green
  'hotpink': '#FF006E',   // Hot pink
  'cyan': '#00F0FF',      // Electric cyan
}
```

### Products

Edit `src/data/products.js` to add/modify products:

```js
export const products = [
  {
    id: 1,
    name: "Your Product",
    category: "tshirt",
    price: 35,
    description: "Your cynical description",
    sizes: ["S", "M", "L", "XL"]
  }
]
```

### Email/Instagram Integration

Update `src/utils/emailService.js` to configure:
- EmailJS credentials (for automated emails)
- Instagram handle
- Order email address

## 📱 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` or `claude/*` branches.

### Manual Deployment

```bash
npm run build
# The dist/ folder contains the production build
```

### GitHub Pages Setup

1. Go to repository Settings → Pages
2. Source: GitHub Actions
3. The site will be available at: `https://endemicmedia.github.io/cokeoncock/`

## 🎭 Brand Voice

**Cynical. Sarcastic. Self-aware.**

- "Reality sucks. Might as well look good."
- "Nothing matters. Stick them anywhere." (sticker pack)
- "No refunds. No regrets. Just vibes."
- "By submitting, you agree that nothing really matters anyway."

## 📄 License

This is a parody brand. We're just here for the vibes (and your money).

## 🤝 Contributing

Feel free to submit issues or PRs if you want to add more cynicism to the world.

## 📞 Contact

- Instagram: [@cokeoncock](https://instagram.com/cokeoncock)
- Twitter: [@cokeoncock](https://twitter.com/cokeoncock)
- TikTok: [@cokeoncock](https://tiktok.com/@cokeoncock)

---

Built with 🖤 and existential dread.