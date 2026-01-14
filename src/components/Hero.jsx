import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-[80vh] flex items-center justify-center px-4 py-12 md:py-0 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-hotpink rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-5xl">
        <div className="text-center space-y-8 md:space-y-12">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-4 md:space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight tracking-tighter">
              <span className="block">DRESS FOR</span>
              <span className="block bg-gradient-to-r from-hotpink via-matrix to-cyan bg-clip-text text-transparent py-2">
                PARTICIPATION
              </span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-3 md:space-y-4"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light tracking-wide max-w-2xl mx-auto">
              Bring the heat. Find your crew. Make the room yours.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-light max-w-2xl mx-auto">
              <span className="text-hotpink font-semibold">Wear your intentions.</span> This is a wearable invitation.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 md:pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-matrix to-cyan text-black font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Shop Now
            </motion.button>

            <motion.a
              href="https://instagram.com/cokeoncock"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-hotpink text-white font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Crew Energy Only
            </motion.a>
          </motion.div>

          {/* Subtle tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="pt-8 md:pt-12"
          >
            <p className="text-xs sm:text-sm text-gray-500 font-light tracking-widest uppercase">
              Designed for crowded rooms and close distances.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements (subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-5% text-6xl md:text-8xl font-bold text-hotpink opacity-5"
        >
          •
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-5% text-6xl md:text-8xl font-bold text-matrix opacity-5"
        >
          •
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="text-gray-600">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
