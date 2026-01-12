import { motion } from 'framer-motion'
import { HiShoppingBag } from 'react-icons/hi2'
import { FaInstagram } from 'react-icons/fa'
import useCartStore from '../../store/useCartStore'

export default function Header({ onCartClick }) {
  const totalItems = useCartStore(state => state.getTotalItems())

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-white"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex-1"
        >
          <h1 className="text-2xl md:text-4xl font-bold font-display">
            COKE<span className="text-matrix">ON</span>COCK
          </h1>
          <p className="text-xs md:text-sm text-gray-400 font-mono -mt-1">
            [ CYNICAL STREETWEAR ]
          </p>
        </motion.div>

        {/* Nav Icons */}
        <div className="flex items-center gap-4">
          {/* Instagram */}
          <motion.a
            href="https://instagram.com/cokeoncock"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl md:text-3xl hover:text-hotpink transition-colors"
          >
            <FaInstagram />
          </motion.a>

          {/* Cart */}
          <motion.button
            onClick={onCartClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative text-2xl md:text-3xl hover:text-cyan transition-colors"
          >
            <HiShoppingBag />
            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-matrix text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-black"
              >
                {totalItems}
              </motion.span>
            )}
          </motion.button>
        </div>
      </div>
    </motion.header>
  )
}
