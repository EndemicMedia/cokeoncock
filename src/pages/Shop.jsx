import { useEffect } from 'react'
import { motion } from 'framer-motion'
import ProductGrid from '../components/products/ProductGrid'
import { updateMetaTags } from '../utils/seo'

export default function Shop() {
  useEffect(() => {
    updateMetaTags({
      title: 'Shop - Coke on Cock',
      description: 'Browse the full collection of night-ready signals. Streetwear designed to start things.'
    })
  }, [])
  return (
    <div className="min-h-screen">
      {/* Shop Header */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-display mb-4">
            THE <span className="text-matrix">SIGNAL</span> STORE
          </h1>
          <p className="text-xl text-gray-400 font-mono">
            Browse the full collection of night-ready signals.
            <br />
            <span className="text-hotpink">Trouble, but pretty.</span> These pieces are designed to start things.
          </p>
        </motion.div>
      </section>

      {/* Product Grid */}
      <ProductGrid />

      {/* Bottom CTA */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center p-8 border-4 border-white bg-black"
        >
          <h3 className="text-3xl font-bold font-display mb-4">
            CAN'T FIND WHAT YOU'RE LOOKING FOR?
          </h3>
          <p className="text-gray-400 mb-6 font-mono">
            Tell us the night you're dressing for. We take DM requests.
          </p>
          <motion.a
            href="https://instagram.com/cokeoncock"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: '8px 8px 0px rgba(255, 0, 110, 1)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-hotpink text-white font-bold uppercase border-4 border-black"
          >
            Message Us on Instagram
          </motion.a>
        </motion.div>
      </section>
    </div>
  )
}
