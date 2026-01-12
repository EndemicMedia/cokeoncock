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
      <div className="container mx-auto px-4 py-8">
        <div className="border-t-4 border-white"></div>
      </div>

      {/* Featured Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
              FEATURED <span className="text-matrix">DISAPPOINTMENTS</span>
            </h2>
            <p className="text-gray-400 font-mono">
              Our most popular items for embracing the void.
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
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center border-4 border-white p-12 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="grid grid-cols-8 gap-4 h-full">
              {[...Array(64)].map((_, i) => (
                <div key={i} className="border border-white"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold font-display mb-6"
            >
              EXPLORE THE
              <br />
              <span className="text-hotpink">FULL COLLECTION</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-8 font-mono max-w-2xl mx-auto"
            >
              20+ items of carefully curated cynicism. T-shirts, hoodies, accessories, and more ways to express your disillusionment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '12px 12px 0px rgba(255, 0, 110, 1)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-hotpink text-white text-xl font-bold uppercase border-4 border-black inline-flex items-center gap-3 transition-all"
                >
                  Browse All Items
                  <HiArrowRight className="text-2xl" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Brand Manifesto Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-8 text-center">
            WHY <span className="text-cyan">COKE ON COCK</span>?
          </h2>

          <div className="space-y-6 text-lg text-gray-300 font-mono">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-l-4 border-matrix pl-6"
            >
              We don't sell you dreams. We sell you the truth: life is absurd, disappointing, and utterly meaningless.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-l-4 border-hotpink pl-6"
            >
              But hey, at least you can look good while contemplating the void. Premium fabrics, bold statements, zero false hope.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border-l-4 border-cyan pl-6"
            >
              Each piece is designed for the disillusioned generation. The ones who see through the BS and embrace the chaos with style.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-2xl font-bold text-matrix font-display mb-4">
              NO REFUNDS. NO REGRETS. JUST VIBES.
            </p>
            <p className="text-sm text-gray-600 font-mono">
              (We're being ironic. Probably.)
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Instagram CTA */}
      <section className="container mx-auto px-4 py-16 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center p-8 border-4 border-matrix bg-black"
        >
          <h3 className="text-3xl font-bold font-display mb-4">
            JOIN THE <span className="text-matrix">MISERY</span>
          </h3>
          <p className="text-gray-400 mb-6 font-mono">
            Follow us on Instagram for daily doses of cynicism, new drops, and community rants.
          </p>
          <motion.a
            href="https://instagram.com/cokeoncock"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '8px 8px 0px rgba(0, 255, 65, 1)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-matrix text-black font-bold uppercase border-4 border-black"
          >
            @cokeoncock
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
}
