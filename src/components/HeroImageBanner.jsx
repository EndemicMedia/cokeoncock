import { motion } from 'framer-motion'

export default function HeroImageBanner({ image, title, subtitle, reverse = false }) {
  return (
    <section className="relative h-screen" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      <div className="h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          {title && (
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-6 text-white drop-shadow-lg">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 font-light drop-shadow-md max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
