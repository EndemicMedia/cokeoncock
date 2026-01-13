import { motion } from 'framer-motion'

export default function SplitBanner({ image, title, description, reverse = false }) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col justify-center space-y-6 p-8 md:p-12"
    >
      <div>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display mb-4 text-white">
          {title}
        </h3>
        <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-lg">
          {description}
        </p>
      </div>
    </motion.div>
  )

  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, x: reverse ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative min-h-[400px] md:min-h-full overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </motion.div>
  )

  return (
    <section className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen md:min-h-[80vh]">
        {reverse ? (
          <>
            {imageBlock}
            {content}
          </>
        ) : (
          <>
            {content}
            {imageBlock}
          </>
        )}
      </div>
    </section>
  )
}
