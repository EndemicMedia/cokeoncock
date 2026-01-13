import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import Hero from '../components/Hero'
import ProductHero from '../components/products/ProductHero'
import { products } from '../data/products'

export default function Home() {
  // Featured products for hero sections
  const featuredProducts = [
    { product: products.find(p => p.id === 2), accentColor: 'matrix' },     // Existential Dread Hoodie
    { product: products.find(p => p.id === 1), accentColor: 'hotpink' },    // Reality Sucks Tee
    { product: products.find(p => p.id === 8), accentColor: 'cyan' },       // Dead Inside Crewneck
    { product: products.find(p => p.id === 4), accentColor: 'hotpink' },    // No Hope Tote
    { product: products.find(p => p.id === 9), accentColor: 'matrix' },     // Whatever Dad Hat
  ]

  return (
    <div className="min-h-screen">
      {/* Main Hero */}
      <Hero />

      {/* Divider */}
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
      </div>

      {/* Featured Products Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-4 md:mb-6">
              FEATURED <span className="bg-gradient-to-r from-matrix to-hotpink bg-clip-text text-transparent">ESSENTIALS</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 font-light max-w-xl mx-auto">
              Curated pieces for those who refuse to compromise on authenticity.
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

          {/* Accent lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-hotpink to-transparent rounded-t-2xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-matrix to-transparent rounded-b-2xl"></div>

          <div className="relative z-10 p-8 md:p-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 md:mb-8"
            >
              EXPLORE THE
              <br />
              <span className="bg-gradient-to-r from-hotpink to-cyan bg-clip-text text-transparent">FULL COLLECTION</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-12 font-light max-w-2xl mx-auto leading-relaxed"
            >
              20+ items of uncompromising design. T-shirts, hoodies, accessories—everything you need to express what you won't say.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-hotpink to-matrix text-white text-base sm:text-lg md:text-xl font-bold uppercase rounded-lg inline-flex items-center gap-3 transition-all shadow-lg hover:shadow-2xl"
                >
                  Browse All Items
                  <HiArrowRight className="text-xl sm:text-2xl" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Brand Manifesto Section */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-8 md:mb-12 text-center">
            WHY <span className="bg-gradient-to-r from-cyan to-hotpink bg-clip-text text-transparent">COKE ON COCK</span>?
          </h2>

          <div className="space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl text-gray-300 font-light">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-l-4 border-matrix pl-6 md:pl-8 py-2"
            >
              We don't sell you dreams. We sell you the truth: life is absurd, disappointing, and utterly meaningless.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-4 border-hotpink pl-6 md:pl-8 py-2"
            >
              But hey, at least you can look good while contemplating the void. Premium fabrics, bold statements, zero false hope.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-l-4 border-cyan pl-6 md:pl-8 py-2"
            >
              Each piece is designed for the disillusioned generation. The ones who see through the BS and embrace the chaos with style.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 md:mt-16 text-center"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-matrix via-hotpink to-cyan bg-clip-text text-transparent font-display mb-3 md:mb-4">
              NO REFUNDS. NO REGRETS. JUST VIBES.
            </p>
            <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wider uppercase">
              (Authenticity guaranteed. Everything else is negotiable.)
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Instagram CTA */}
      <section className="container mx-auto px-4 py-12 md:py-20 mb-8 md:mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center relative overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-matrix/20 via-transparent to-hotpink/20 rounded-xl"></div>
          <div className="absolute inset-0 border-2 border-matrix/30 rounded-xl"></div>

          <div className="relative z-10 p-8 md:p-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-4 md:mb-6">
              JOIN THE <span className="bg-gradient-to-r from-matrix to-hotpink bg-clip-text text-transparent">REBELLION</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-300 mb-8 md:mb-10 font-light max-w-xl mx-auto">
              Follow us on Instagram for new drops, behind-the-scenes chaos, and a community that gets it.
            </p>
            <motion.a
              href="https://instagram.com/cokeoncock"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-matrix to-cyan text-black font-bold text-base sm:text-lg uppercase tracking-wider rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              @cokeoncock
            </motion.a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
