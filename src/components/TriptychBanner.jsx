import { motion } from 'framer-motion'

export default function TriptychBanner({ image, title, description, cta, reverse = false }) {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen overflow-hidden bg-black">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay - top only, close to text */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent"></div>

      {/* Content - centered */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 py-16 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold font-display mb-6 text-white drop-shadow-lg">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-100 mb-8 font-light leading-relaxed drop-shadow-md">
            {description}
          </p>
          {cta && (
            <motion.a
              href={cta.href}
              target={cta.target}
              rel={cta.target === '_blank' ? 'noopener noreferrer' : ''}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-hotpink to-matrix text-white font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              {cta.text}
            </motion.a>
          )}
        </motion.div>
      </div>
    </section>
  )
}
