import { motion } from 'framer-motion'

export default function CrewShowcase() {
  const images = [
    {
      src: 'images/crew-street-neon.jpg',
      alt: 'Crew outside at night with neon signs',
      span: 'col-span-2 row-span-2'
    },
    {
      src: 'images/crew-party-purple.jpg',
      alt: 'Crew at party with purple lighting',
      span: 'col-span-1 row-span-1'
    },
    {
      src: 'images/crew-club-scene.jpg',
      alt: 'Crew at club with red and blue lighting',
      span: 'col-span-1 row-span-1'
    },
    {
      src: 'images/crew-party-moments.jpg',
      alt: 'Party moments with crew',
      span: 'col-span-2 row-span-1'
    },
    {
      src: 'images/lifestyle-white-tee.jpg',
      alt: 'Lifestyle shot with white tee',
      span: 'col-span-1 row-span-1'
    },
    {
      src: 'images/product-tote-bag.jpg',
      alt: 'Tote bag product shot',
      span: 'col-span-1 row-span-1'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display mb-4">
            THE <span className="bg-gradient-to-r from-hotpink to-matrix bg-clip-text text-transparent">CREW</span> IN ACTION
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-light max-w-2xl mx-auto">
            When enough of you are in the room, the temperature changes. This is collective heat.
          </p>
        </motion.div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`${image.span} relative overflow-hidden rounded-lg border-2 border-white/10 hover:border-hotpink transition-all duration-300 cursor-pointer group`}
            >
              <div className="relative w-full h-full min-h-[200px] md:min-h-[250px]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-mono">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Tag us in your fits. Show us your crew energy.
          </p>
          <motion.a
            href="https://instagram.com/cokeoncock"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-matrix to-cyan text-black font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-2xl transition-all"
          >
            @cokeoncock
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
