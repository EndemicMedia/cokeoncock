import { useState } from 'react'
import { motion } from 'framer-motion'
import { products, categories } from '../../data/products'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <section id="products" className="container mx-auto px-4 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold font-display mb-4">
          THE <span className="text-cyan">COLLECTION</span>
        </h2>
        <p className="text-gray-400 font-mono">
          Browse the void. Pick your poison.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map(category => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 font-bold uppercase text-sm border-2 transition-all ${
              selectedCategory === category.id
                ? 'bg-matrix text-black border-black'
                : 'bg-black text-white border-white hover:border-matrix'
            }`}
          >
            {category.name}
          </motion.button>
        ))}
      </div>

      {/* Product Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-6xl mb-4">¯\_(ツ)_/¯</p>
          <p className="text-xl text-gray-400 font-mono">
            Nothing here. Just like your hopes and dreams.
          </p>
        </div>
      )}

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}
