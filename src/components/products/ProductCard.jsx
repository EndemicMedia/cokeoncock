import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ProductCard({ product, onClick }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className="card-brutal cursor-pointer group"
    >
      {/* Image */}
      <div className="aspect-square bg-gray-900 relative overflow-hidden">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <div className="text-center p-6">
              <p className="text-6xl mb-4">🖤</p>
              <p className="text-sm text-gray-500 font-mono">
                {product.name}
              </p>
            </div>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-matrix opacity-0 group-hover:opacity-20 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-2 right-2 bg-black border-2 border-white px-2 py-1 text-xs font-bold uppercase">
          {product.category}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 bg-black">
        <h3 className="text-lg font-bold font-display mb-1 group-hover:text-matrix transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2 font-mono">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-hotpink">
            ${product.price}
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 bg-white text-black text-sm font-bold uppercase border-2 border-black hover:bg-matrix transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              onClick()
            }}
          >
            View
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
