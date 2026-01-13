import { useState, useEffect, useMemo } from 'react'
import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { products, categories } from '../../data/products'
import { getProductBySlug } from '../../utils/slugify'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'

export default function ProductGrid() {
  const { productSlug } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl)
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Memoize product slug lookup map for performance
  const productSlugMap = useMemo(() => {
    return products.reduce((acc, product) => {
      acc[product.slug] = product
      return acc
    }, {})
  }, [])

  // Open product modal based on URL slug
  useEffect(() => {
    if (productSlug) {
      const product = productSlugMap[productSlug]
      if (product) {
        setSelectedProduct(product)
      } else {
        // Invalid slug - redirect to shop
        navigate('/shop', { replace: true })
      }
    } else {
      setSelectedProduct(null)
    }
  }, [productSlug, productSlugMap, navigate])

  // Sync category filter with URL parameter
  useEffect(() => {
    setSelectedCategory(categoryFromUrl)
  }, [categoryFromUrl])

  const handleProductClick = (product) => {
    const categoryParam = selectedCategory !== 'all' ? `?category=${selectedCategory}` : ''
    navigate(`/shop/${product.slug}${categoryParam}`)
  }

  const handleCloseModal = () => {
    const categoryParam = selectedCategory !== 'all' ? `?category=${selectedCategory}` : ''
    navigate(`/shop${categoryParam}`)
  }

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId)
    const categoryParam = categoryId !== 'all' ? `?category=${categoryId}` : ''
    navigate(`/shop${categoryParam}`)
  }

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <section id="products" className="container mx-auto px-4 py-12" aria-label="Product catalog">
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
      <nav aria-label="Product categories" className="flex flex-wrap gap-3 justify-center mb-12">
        {categories.map(category => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleCategoryChange(category.id)}
            aria-pressed={selectedCategory === category.id}
            aria-label={`Filter by ${category.name}`}
            className={`px-4 py-2 font-bold uppercase text-sm border-2 transition-all ${selectedCategory === category.id
              ? 'bg-matrix text-black border-black'
              : 'bg-black text-white border-white hover:border-matrix'
              }`}
          >
            {category.name}
          </motion.button>
        ))}
      </nav>

      {/* Product Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        role="list"
        aria-label={`${filteredProducts.length} products in ${selectedCategory === 'all' ? 'all categories' : categories.find(c => c.id === selectedCategory)?.name || selectedCategory}`}
      >
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20" role="status" aria-live="polite">
          <p className="text-6xl mb-4" aria-hidden="true">¯\_(ツ)_/¯</p>
          <p className="text-xl text-gray-400 font-mono">
            Nothing here. Just like your hopes and dreams.
          </p>
        </div>
      )}

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={handleCloseModal}
      />
    </section>
  )
}
