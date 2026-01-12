import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight mb-6">
            LIFE IS
            <br />
            <span className="text-matrix">DISAPPOINTMENT</span>
            <br />
            DRESS FOR IT
          </h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 font-mono"
          >
            Cynical streetwear for the disillusioned generation.
            <br />
            <span className="text-hotpink">Reality sucks.</span> Might as well look good.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '12px 12px 0px 0px rgba(0, 255, 65, 1)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-matrix text-black font-bold text-lg uppercase tracking-wider border-4 border-black shadow-brutal transition-all"
            >
              Shop the Void
            </motion.button>

            <motion.a
              href="https://instagram.com/cokeoncock"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '12px 12px 0px 0px rgba(255, 0, 110, 1)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black text-hotpink font-bold text-lg uppercase tracking-wider border-4 border-hotpink transition-all"
            >
              Follow @cokeoncock
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Glitch Text Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-sm text-gray-600 font-mono"
        >
          <p className="animate-pulse">[ EXISTENTIAL CRISIS SOLD SEPARATELY ]</p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="text-9xl font-bold text-matrix"
          style={{ position: 'absolute', top: '10%', left: '5%' }}
        >
          ☹
        </motion.div>
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="text-9xl font-bold text-hotpink"
          style={{ position: 'absolute', bottom: '10%', right: '5%' }}
        >
          ☠
        </motion.div>
      </div>
    </section>
  )
}
