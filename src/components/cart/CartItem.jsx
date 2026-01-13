import { motion } from 'framer-motion'
import { HiMinus, HiPlus, HiTrash } from 'react-icons/hi2'
import useCartStore from '../../store/useCartStore'

export default function CartItem({ item }) {
  const updateQuantity = useCartStore(state => state.updateQuantity)
  const removeItem = useCartStore(state => state.removeItem)

  return (
    <motion.article
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="border-2 border-white p-4 bg-black"
      aria-label={`${item.name}, size ${item.size}, quantity ${item.quantity}`}
    >
      <div className="flex gap-4">
        {/* Product Image */}
        <div className="w-20 h-20 bg-gray-900 border-2 border-gray-700 flex items-center justify-center flex-shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt={`${item.name} - ${item.category || 'product'} in your cart`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-sm mb-1 truncate">{item.name}</h4>
          <p className="text-xs text-gray-400 mb-2">Size: {item.size}</p>
          <p className="text-lg font-bold text-hotpink" aria-label={`Price: ${item.price} dollars each`}>
            ${item.price}
          </p>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2" role="group" aria-label="Quantity controls">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
            className="p-1 border-2 border-white hover:bg-matrix hover:text-black transition-colors"
            aria-label={`Decrease quantity of ${item.name}`}
            disabled={item.quantity <= 1}
          >
            <HiMinus className="text-sm" aria-hidden="true" />
          </motion.button>

          <span
            className="w-8 text-center font-bold font-mono"
            aria-live="polite"
            aria-atomic="true"
          >
            {item.quantity}
          </span>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
            className="p-1 border-2 border-white hover:bg-matrix hover:text-black transition-colors"
            aria-label={`Increase quantity of ${item.name}`}
          >
            <HiPlus className="text-sm" aria-hidden="true" />
          </motion.button>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => removeItem(item.id, item.size)}
          className="p-2 border-2 border-white hover:bg-hotpink hover:border-hotpink transition-colors"
          aria-label={`Remove ${item.name} size ${item.size} from cart`}
        >
          <HiTrash className="text-sm" aria-hidden="true" />
        </motion.button>
      </div>

      {/* Subtotal */}
      <div className="mt-3 pt-3 border-t border-gray-800 flex justify-between text-sm">
        <span className="text-gray-400">Subtotal</span>
        <span className="font-bold" aria-label={`Subtotal: ${(item.price * item.quantity).toFixed(2)} dollars`}>
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </motion.article>
  )
}
