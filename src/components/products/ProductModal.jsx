import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import useCartStore from '../../store/useCartStore'

export default function ProductModal({ product, isOpen, onClose }) {
  const [selectedSize, setSelectedSize] = useState('')
  const [imageError, setImageError] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const addItem = useCartStore(state => state.addItem)

  // Update document title and meta when product changes
  useEffect(() => {
    if (product && isOpen) {
      const originalTitle = document.title
      document.title = `${product.name} - Coke on Cock`

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]')
      const originalDescription = metaDescription?.getAttribute('content')
      if (metaDescription) {
        metaDescription.setAttribute('content', `${product.description} Shop ${product.name} at Coke on Cock - Social Heat Streetwear.`)
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]')
      const ogDescription = document.querySelector('meta[property="og:description"]')
      const ogImage = document.querySelector('meta[property="og:image"]')
      const twitterTitle = document.querySelector('meta[property="twitter:title"]')
      const twitterDescription = document.querySelector('meta[property="twitter:description"]')
      const twitterImage = document.querySelector('meta[property="twitter:image"]')

      const productImageUrl = `https://endemicmedia.github.io/cokeoncock/${product.image}`

      if (ogTitle) ogTitle.setAttribute('content', `${product.name} - Coke on Cock`)
      if (ogDescription) ogDescription.setAttribute('content', product.description)
      if (ogImage) ogImage.setAttribute('content', productImageUrl)
      if (twitterTitle) twitterTitle.setAttribute('content', `${product.name} - Coke on Cock`)
      if (twitterDescription) twitterDescription.setAttribute('content', product.description)
      if (twitterImage) twitterImage.setAttribute('content', productImageUrl)

      return () => {
        document.title = originalTitle
        if (metaDescription && originalDescription) {
          metaDescription.setAttribute('content', originalDescription)
        }
      }
    }
  }, [product, isOpen])

  if (!product) return null

  const handleAddToCart = () => {
    if (!selectedSize) return

    addItem(product, selectedSize)
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      onClose()
    }, 1500)
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        onClose={onClose}
        className="relative z-50"
        aria-labelledby="product-modal-title"
        aria-describedby="product-modal-description"
      >
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
        </Transition.Child>

        {/* Modal */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className="w-full max-w-4xl bg-black border-4 border-white shadow-brutal"
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-black border-2 border-white hover:bg-hotpink hover:border-hotpink transition-colors"
                aria-label="Close product details"
              >
                <HiX className="text-2xl" aria-hidden="true" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image */}
                <div className="aspect-square bg-gray-900">
                  {imageError ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black" role="img" aria-label={`${product.name} product image unavailable`}>
                      <div className="text-center p-6">
                        <p className="text-9xl mb-4" aria-hidden="true">🖤</p>
                        <p className="text-xl text-gray-500 font-mono">
                          {product.name}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={product.image}
                      alt={`${product.name} - ${product.category} from Coke on Cock Social Heat Streetwear collection`}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 bg-matrix text-black text-xs font-bold uppercase mb-4" aria-label={`Category: ${product.category}`}>
                      {product.category}
                    </span>

                    <Dialog.Title
                      id="product-modal-title"
                      className="text-3xl font-bold font-display mb-3"
                    >
                      {product.name}
                    </Dialog.Title>

                    <Dialog.Description
                      id="product-modal-description"
                      className="text-gray-400 mb-6 font-mono"
                    >
                      {product.description}
                    </Dialog.Description>

                    <p className="text-4xl font-bold text-hotpink mb-8" aria-label={`Price: ${product.price} dollars`}>
                      ${product.price}
                    </p>

                    {/* Size Selection */}
                    <fieldset className="mb-6">
                      <legend className="block text-sm font-bold uppercase mb-3">
                        Select Size
                      </legend>
                      <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Size selection">
                        {product.sizes.map(size => (
                          <motion.button
                            key={size}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedSize(size)}
                            role="radio"
                            aria-checked={selectedSize === size}
                            aria-label={`Size ${size}`}
                            className={`px-4 py-2 font-bold border-2 transition-all ${selectedSize === size
                                ? 'bg-matrix text-black border-black'
                                : 'bg-black text-white border-white hover:border-matrix'
                              }`}
                          >
                            {size}
                          </motion.button>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  {/* Add to Cart */}
                  <AnimatePresence mode="wait">
                    {showSuccess ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="w-full py-4 bg-matrix text-black text-center font-bold uppercase border-4 border-black"
                        role="status"
                        aria-live="polite"
                      >
                        ✓ Added to Bag
                      </motion.div>
                    ) : (
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        whileHover={{ scale: selectedSize ? 1.02 : 1 }}
                        whileTap={{ scale: selectedSize ? 0.98 : 1 }}
                        onClick={handleAddToCart}
                        disabled={!selectedSize}
                        aria-disabled={!selectedSize}
                        aria-label={selectedSize ? `Add ${product.name} size ${selectedSize} to shopping bag` : 'Please select a size first'}
                        className={`w-full py-4 font-bold uppercase border-4 transition-all ${selectedSize
                            ? 'bg-white text-black border-black hover:bg-matrix cursor-pointer'
                            : 'bg-gray-800 text-gray-500 border-gray-700 cursor-not-allowed'
                          }`}
                      >
                        {selectedSize ? 'Add to Bag' : 'Select a Size'}
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
