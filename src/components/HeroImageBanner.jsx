import { motion } from 'framer-motion'

export default function HeroImageBanner({ image, title, subtitle, reverse = false }) {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlay - bottom only */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>

      {/* Content - aligned to bottom */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-end px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl pb-20 md:pb-32"
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
