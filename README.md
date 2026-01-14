# 🖤 COKE ON COCK - Social Heat Streetwear

> Bad decisions, great taste.

A neo-brutalist landing page for a nightlife-first streetwear label. Built with modern web technologies and deployed on GitHub Pages.

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

## 📸 Image Generation Guidelines

All product images must strictly adhere to the following style to maintain brand consistency:

**Style:** Sterile, high-quality product photography flatlay.
**Background:** Plain, neutral (white or light grey).
**Subject:** Garment laid flat, no models.
**Lighting:** Studio lighting, sharp focus, minimal shadows.
**Branding:** The 'COKE ON COCK' logo (public/images/logo.png) must be printed PROMINENTLY and clearly on the chest/front.

**Prompt Template:**
> "A sterile, high-quality product photography flatlay shot of a [COLOR] [GARMENT TYPE]. The [GARMENT] is laid flat on a plain, neutral (white or light grey) background. No models. 'COKE ON COCK' logo (public/images/logo.png) is printed PROMINENTLY and clearly on the chest (or side, or back etc). Studio lighting, sharp focus, minimal shadows, high resolution, realistic texture."

## 📦 Features

- 🛒 **Shopping Cart**: Add items, adjust quantities, calculate totals
- 📱 **Responsive Navigation**: Mobile menu with animated transitions
- 🖼️ **Product Gallery**: Grid layout with hover effects
- ⚡ **Performance**: Optimized assets and lazy loading
- 📧 **Checkout System**: Form-based checkout that generates pre-formatted messages
- 🔍 **Product Filtering**: Filter by category (T-Shirts, Hoodies, etc.)
- 📢 **Marketing Banners**: Dynamic hero sections for promotions

## 🗺️ Product & Brand Roadmap

### Phase 1: Revenue Foundation ✅ COMPLETE
**Goal:** Fix critical conversion blockers and build operational foundation
- [x] Expand product line: women's fits (cropped tees, fitted tanks, fitted tees)
- [x] Add POD-compatible products (joggers, shorts, socks, bucket hat, fanny pack, phone case, heavyweight hoodie)
- [x] Simplify product categories from 15 to 6 (Tops, Bottoms, Head, Bags, Accessories)
- [x] Add founder/origin story page to build authenticity
- [x] Add trust badges (secure checkout, 30-day returns, worldwide shipping)
- [x] Create and display clear shipping/returns policy
- [x] Add product size guide to reduce returns
- [x] Implement email capture widget (10% off + early access offer)
- [x] Implement sold-out product display (stickers/patches)
- [x] Feature user-generated content on site (Instagram feed widget - **deferred to Phase 2**)

### Phase 2: Growth Engine (Weeks 5-12)
**Goal:** Build owned audience, establish FOMO, create community
- [ ] Set up Printful or similar print-on-demand fulfillment
- [ ] Install Google Analytics 4 + Meta Pixel for conversion tracking
- [ ] Launch referral program ("Bring a Friend: Give 10%, Get $10")
- [ ] Execute micro-influencer seeding campaign (20 nightlife influencers, 10-50k followers)
- [ ] Launch first limited edition drop (Drop 01: 3-5 designs, 50-100 units each)
- [ ] Host first real brand event (Berlin or NYC nightlife venue)
- [ ] Integrate customer review system (Stamped.io or Yotpo)
- [ ] Establish content calendar (3x/week Instagram: product, lifestyle, meme)
- [ ] Launch TikTok strategy with vertical content
- [ ] Create product bundles ("Crew Starter Pack", "Weekend Heat") to increase AOV
- [ ] Start "Scene Report" blog (weekly: party review + city spotlight + interview)

### Phase 3: Brand Depth (Weeks 13-24)
**Goal:** Own the nightlife streetwear category globally
- [ ] Shoot professional lookbook (10-15 styled looks in nightlife settings)
- [ ] Add bottoms to collection (track pants, shorts) for complete outfit capability
- [ ] Create visual lookbook: "How to wear Coke on Cock" styled guides
- [ ] Develop city strategy (Berlin, NYC, LA, London, Amsterdam): local events and partnerships
- [ ] Partner with 3-5 actual nightlife venues/DJs for ongoing brand presence
- [ ] Create membership/VIP program (early access to drops, exclusive events)

### Key Performance Indicators

Track these metrics monthly:
- **Traffic:** Monthly site visitors, bounce rate, time on site
- **Conversion:** Checkout completion rate, average order value, cart abandonment rate
- **Community:** Email subscribers, social followers, referral conversions
- **Product:** Top sellers by category, repeat purchase rate, return rate
- **Brand:** Influencer mentions, user-generated content volume, event attendance

### Revenue Projections

### Critical Dependencies & Risks

**Must-Haves:**
- Business entity for Stripe/payment processing (use neutral name per strategy notes)
- Budget for professional product photography ($1000-2000) or DIY setup
- Inventory management (Google Sheets or basic system) to prevent overselling
- Marketing budget for influencer seeding and potential paid ads ($500-1000/mo)

**Risks to Mitigate:**
- Platform shadowbans: Use neutral business name in ads, avoid explicit creative
- Authenticity: Host REAL events, feature real people, document actual nightlife (not just marketing)
- Narrow niche: Global distribution across 5-6 major nightlife cities
- Economic sensitivity: Strong value prop + accessible pricing ($35-70)

### Technical Debt & Improvements

**High Priority:**
- ✅ Image optimization: Optimized all images, reduced payload from ~9.4MB to 7.7MB
- Analytics integration: GA4 + Meta Pixel for full conversion tracking
- Email service: Replace emailService.js stub with actual EmailJS config or Mailchimp integration

**Medium Priority:**
- SEO: Meta descriptions, alt text, schema markup for nightlife streetwear keywords
- Mobile: Audit mobile experience at 375px, 768px, 1024px breakpoints
- Performance: Monitor Lighthouse scores, optimize bundle size

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

The site features a curated collection of nightlife-ready streetwear (30 products):

### Tops (20 items)
- **T-Shirts (Regular)**: Wear Your Intent, Participation Club
- **T-Shirts (Oversized)**: Room Starter
- **T-Shirts (Cropped)**: First Move, Close Quarters
- **T-Shirts (Fitted)**: Invitation Only, After Hours
- **Long Sleeves**: Not Here to Behave, Wink & Bite
- **Hoodies**: Close Distance Zip-Up, Late Night Recharge, Heavyweight Presence (240 GSM)
- **Crewnecks**: Heat Check
- **Tanks (Regular)**: Pre-Game Signal
- **Tanks (Fitted)**: Heat Signature, Backroom Access (logo on back)

### Bottoms (3 items)
- **Joggers**: Late Night (300 GSM heavyweight)
- **Shorts**: Summer Heat Sweat
- **Socks**: Crew Energy (embroidered)

### Head (4 items)
- **Hats**: Bad Idea Dad Hat, Night Energy Snapback, Scene Watcher Bucket Hat
- **Beanies**: Stay-Late

### Bags (3 items)
- **Totes**: Signal, Backroom
- **Fanny Pack**: Night Essentials (all-over print)

### Accessories (3 items - SOLD OUT)
- **Phone Case**: Signal (tough double-layer)
- **Stickers**: Signal Pack (sold out)
- **Patches**: Scene Mark, Side-Eye Embroidered (sold out)

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
    description: "Product description",
    image: "path/to/image.jpg",
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

## 🧠 Brand Strategy

### Strategic premise

This brand is a social accelerant, turning nightlife into a shared language. The name is the provocation, the gear is the invitation. Build the label as the artistic front, and keep infrastructure (entity name, billing descriptors, domains) clean for platform access.

### Golden circle

**WHY:** Permission to want, collective heat, play as power.  
**HOW:** Social signaling, ritualized drops, humor with teeth.  
**WHAT:** A label, a universe, and codes people wear to broadcast intent.

### Identity snapshot

- **Core identity:** Erotic, social, daring, Berlin.
- **Product:** A wearable wink that starts conversations.
- **Organization:** A scene builder that links people and creates rooms.
- **Person:** The friend who pulls you into the better corner of the club.
- **Symbol:** A signature phrase + recurring motifs and jokes.

### Voice and tone

Short. Sharp. Hungry.  
More invitation than explanation.  
Flirt like you mean it.

### Messaging pillars

1. **The Invitation** — You wear it to start things.
2. **The Room** — You wear it to change the temperature.
3. **The Joke** — You wear it because it’s funny, rude, and true.
4. **The Brandhood** — You wear it to find your people without locking into a fixed crew.

### Current Taglines (In Use)

- **Primary**: "Bad decisions, great taste." (Hero opening)
- **Subtle**: "Handle with confidence." (Hero secondary)
- **Instagram CTA**: "Trouble, but pretty."
- **Shop Header**: "Warning:"
- **Product Grid**: "Wearable invitations."

### Additional Tagline Options

- **Dress for participation.**
- **Not here to behave.**
- **Uniform for bad decisions.**
- **Make the room interesting.**
- **Wear your intentions.**
- **Designed for crowded rooms and close distances.**

## 🎭 Brand Voice

**Mischievous. Blunt. Confident. Provocative.**

### Current Voice Examples

- "Bad decisions, great taste."
- "Handle with confidence."
- "Trouble, but pretty."
- "Wear your intentions."
- "Designed for crowded rooms and close distances."
- "Born in nights where strangers become allies."
- "A uniform for participants."

### Product Voice Examples

- "Short enough to signal, bold enough to start it. The opening line you wear."
- "For packed dance floors and deliberate proximity. Cropped for movement, cut for attention."
- "Sleek lines, sharp intent. Logo on the back. For the ones who know where the real party is."
- "240 GSM premium heavyweight. Oversized fit, luxury fabric. The flagship piece."

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