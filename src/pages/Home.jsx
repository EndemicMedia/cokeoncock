import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import Hero from '../components/Hero'
import { products } from '../data/products'

// Lazy load heavy components for better performance
const ProductHero = lazy(() => import('../components/products/ProductHero'))
const HeroImageBanner = lazy(() => import('../components/HeroImageBanner'))
const SplitBanner = lazy(() => import('../components/SplitBanner'))
const TriptychBanner = lazy(() => import('../components/TriptychBanner'))

// Loading fallback component
const SectionLoader = () => (
  <div className="container mx-auto px-4 py-20 text-center" role="status" aria-live="polite">
    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-matrix border-r-transparent" aria-hidden="true"></div>
    <span className="sr-only">Loading...</span>
  </div>
)

export default function Home() {
  // Featured products for hero sections
  const featuredProducts = [
    { product: products.find(p => p.id === 2), accentColor: 'matrix' },     // Collective Heat Hoodie
    { product: products.find(p => p.id === 1), accentColor: 'hotpink' },    // Wear Your Intent Tee
    { product: products.find(p => p.id === 8), accentColor: 'cyan' },       // Heat Check Crewneck
    { product: products.find(p => p.id === 4), accentColor: 'hotpink' },    // Crew Signal Tote Bag
    { product: products.find(p => p.id === 9), accentColor: 'matrix' },     // Bad Idea Dad Hat
  ]

  return (
    <div className="min-h-screen">
      {/* Main Hero */}
      <Hero />

      {/* Marketing Banners - Lazy Loaded */}
      <Suspense fallback={<SectionLoader />}>
        {/* Marketing Banner 1: Club Energy */}
        <TriptychBanner
          image="images/crew-club-scene.jpg"
          title="SHARED HEAT"
          description="Turn strangers into co-conspirators. Adult play, bold intent."
        />

        {/* Marketing Banner 2: Street Neon */}
        <SplitBanner
          image="images/crew-street-neon.jpg"
          title="FIND YOUR PEOPLE FASTER"
          description="Our pieces signal intent. The right people recognize the code. You'll spend less time looking and more time doing."
          reverse={false}
        />

        {/* Marketing Banner 3: Party Energy */}
        <HeroImageBanner
          image="images/crew-party-purple.jpg"
          title="NO SHAME. NO APOLOGIES."
          subtitle="Celebrate play and desire without apology. This is for the ones who came to participate."
        />

        {/* Marketing Banner 4: Lifestyle Hero */}
        <HeroImageBanner
          image="images/lifestyle-white-tee.jpg"
          title="Wear your intentions"
        />
      </Suspense>

      {/* Divider */}
      <div className="container mx-auto px-4 py-8 md:py-12 bg-black">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      </div>

      {/* Featured Products Section - Lazy Loaded */}
      <Suspense fallback={<SectionLoader />}>
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-matrix to-hotpink bg-clip-text text-transparent">CREW STARTER</span> PIECES
              </h2>
              <p className="text-base sm:text-lg text-gray-400 font-light max-w-xl mx-auto">
                Wearable invitations. Each piece signals intent and finds your people faster.
              </p>
            </motion.div>
          </div>

          {/* Product Heroes */}
          {featuredProducts.map((item, index) => (
            item.product && (
              <ProductHero
                key={item.product.id}
                product={item.product}
                reverse={index % 2 !== 0}
                accentColor={item.accentColor}
              />
            )
          ))}
        </section>
      </Suspense>

      {/* Shop CTA Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center relative overflow-hidden rounded-2xl"
        >
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80 rounded-2xl"></div>

          {/* Neon glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-matrix/20 via-hotpink/20 to-cyan/20 blur-3xl opacity-30"></div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-16 border-4 border-white rounded-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 md:mb-6">
              READY TO <span className="text-matrix">SIGNAL</span>?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto font-mono">
              Browse the full collection. Find your piece. Start the conversation.
            </p>

            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 0, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-matrix text-black text-base md:text-lg font-bold uppercase border-4 border-black hover:bg-hotpink hover:text-white transition-all"
              >
                Shop The Collection
                <HiArrowRight className="text-xl md:text-2xl" aria-hidden="true" />
              </motion.button>
            </Link>

            <p className="mt-6 text-xs md:text-sm text-gray-500 font-mono">
              Free shipping on orders over €100. No returns. No regrets.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Final Marketing Banner */}
      <Suspense fallback={<SectionLoader />}>
        <SplitBanner
          image="images/crew-party-moments.jpg"
          title="BUILT FOR THE NIGHT"
          description="Every piece is designed for the moments that matter. The pre-game. The entrance. The after-party. The walk home."
          reverse={true}
        />
      </Suspense>

      {/* Bottom Spacer */}
      <div className="h-20"></div>
    </div>
  )
}
