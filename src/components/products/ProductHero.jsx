import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'
import useCartStore from '../../store/useCartStore'
import ProductModal from './ProductModal'

export default function ProductHero({ product, reverse = false, accentColor = 'matrix' }) {
  const [selectedSize, setSelectedSize] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [imageError, setImageError] = useState(false)
  const addItem = useCartStore(state => state.addItem)

  const handleQuickAdd = () => {
    if (!selectedSize) return

    addItem(product, selectedSize)
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setSelectedSize('')
    }, 2000)
  }

  const accentColors = {
    matrix: 'bg-matrix text-black border-black hover:shadow-[8px_8px_0px_rgba(0,255,65,1)]',
    hotpink: 'bg-hotpink text-white border-black hover:shadow-[8px_8px_0px_rgba(255,0,110,1)]',
    cyan: 'bg-cyan text-black border-black hover:shadow-[8px_8px_0px_rgba(0,240,255,1)]'
  }

  const textColors = {
    matrix: 'text-matrix',
    hotpink: 'text-hotpink',
    cyan: 'text-cyan'
  }

  return (
    <>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`${reverse ? 'lg:col-start-2' : ''}`}
          >
            <div className="aspect-square bg-gray-900 border-4 border-white shadow-brutal overflow-hidden">
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
                  <div className="text-center p-8">
                    <p className="text-9xl mb-6">🖤</p>
                    <p className="text-2xl text-gray-500 font-mono font-bold">
                      {product.name}
                    </p>
                  </div>
                </div>
              ) : (
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={product.image}
                  alt={product.name}
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
          >
            {/* Category Badge */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`inline-block px-4 py-2 ${accentColors[accentColor]} text-sm font-bold uppercase mb-4 border-2 transition-all`}
            >
              {product.category}
            </motion.span>

            {/* Product Name */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold font-display mb-4 leading-tight"
            >
              {product.name.split(' ').map((word, i) => (
                <span key={i}>
                  {i === product.name.split(' ').length - 1 ? (
                    <span className={textColors[accentColor]}>{word}</span>
                  ) : (
                    <>{word} </>
                  )}
                </span>
              ))}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400 mb-6 font-mono"
            >
              {product.description}
            </motion.p>

            {/* Price */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className={`text-5xl font-bold ${textColors[accentColor]} mb-8`}
            >
              ${product.price}
            </motion.p>

            {/* Size Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="mb-6"
            >
              <label className="block text-sm font-bold uppercase mb-3">Select Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <motion.button
                    key={size}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 font-bold border-2 transition-all ${
                      selectedSize === size
                        ? `${accentColors[accentColor]} border-4`
                        : 'bg-black text-white border-white hover:border-matrix'
                    }`}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {showSuccess ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`flex-1 py-4 ${accentColors[accentColor]} text-center font-bold uppercase border-4`}
                >
                  ✓ Added to Bag
                </motion.div>
              ) : (
                <motion.button
                  whileHover={{ scale: selectedSize ? 1.02 : 1 }}
                  whileTap={{ scale: selectedSize ? 0.98 : 1 }}
                  onClick={handleQuickAdd}
                  disabled={!selectedSize}
                  className={`flex-1 py-4 font-bold uppercase border-4 transition-all ${
                    selectedSize
                      ? 'bg-white text-black border-black hover:bg-matrix cursor-pointer'
                      : 'bg-gray-800 text-gray-500 border-gray-700 cursor-not-allowed'
                  }`}
                >
                  {selectedSize ? 'Add to Bag' : 'Select a Size'}
                </motion.button>
              )}

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowModal(true)}
                className="px-6 py-4 bg-black text-white font-bold uppercase border-4 border-white hover:bg-gray-900 transition-all flex items-center justify-center gap-2"
              >
                View Details <HiArrowRight className="text-xl" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={product}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}
