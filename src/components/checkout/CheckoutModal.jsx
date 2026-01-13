import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { FaInstagram, FaEnvelope } from 'react-icons/fa'
import useCartStore from '../../store/useCartStore'
import { generateInstagramMessage, generateEmailLink } from '../../utils/emailService'

export default function CheckoutModal({ isOpen, onClose }) {
  const items = useCartStore(state => state.items)
  const totalPrice = useCartStore(state => state.getTotalPrice())
  const clearCart = useCartStore(state => state.clearCart)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    instagram: '',
    notes: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Show success state
    setSubmitted(true)
  }

  const handleInstagramDM = () => {
    const orderData = {
      ...formData,
      items,
      total: totalPrice.toFixed(2)
    }
    const message = generateInstagramMessage(orderData)
    window.open(`https://instagram.com/cokeoncock?message=${message}`, '_blank')

    clearCart()
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setFormData({ name: '', email: '', instagram: '', notes: '' })
    }, 1000)
  }

  const handleEmailOrder = () => {
    const orderData = {
      ...formData,
      items,
      total: totalPrice.toFixed(2)
    }
    const emailLink = generateEmailLink(orderData)
    window.location.href = emailLink

    clearCart()
    setTimeout(() => {
      onClose()
      setSubmitted(false)
      setFormData({ name: '', email: '', instagram: '', notes: '' })
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={onClose} className="relative z-50">
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
          <div className="fixed inset-0 bg-black/90" />
        </Transition.Child>

        {/* Modal */}
        <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-2xl bg-black border-4 border-white my-8">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-black border-2 border-white hover:bg-hotpink hover:border-hotpink transition-colors"
              >
                <HiX className="text-2xl" />
              </button>

              <div className="p-8">
                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key="form"
                    >
                      {/* Header */}
                      <div className="mb-8">
                        <h2 className="text-3xl font-bold font-display mb-2">
                          DROP YOUR <span className="text-matrix">ORDER</span>
                        </h2>
                        <p className="text-gray-400 font-mono text-sm">
                          Fill this out. We'll reach out to confirm sizes, shipping, and payment.
                        </p>
                      </div>

                      {/* Order Summary */}
                      <div className="mb-6 p-4 border-2 border-white bg-gray-900">
                        <h3 className="font-bold uppercase text-sm mb-3">Your Order</h3>
                        <div className="space-y-2 mb-3">
                          {items.map(item => (
                            <div
                              key={`${item.id}-${item.size}`}
                              className="flex justify-between text-sm"
                            >
                              <span className="text-gray-300">
                                {item.name} ({item.size}) x{item.quantity}
                              </span>
                              <span className="font-bold">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="pt-3 border-t border-gray-700 flex justify-between text-lg font-bold">
                          <span>TOTAL</span>
                          <span className="text-hotpink">${totalPrice.toFixed(2)}</span>
                        </div>
                      </div>

                      {/* Form */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold uppercase mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-brutal"
                            placeholder="Your name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold uppercase mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="input-brutal"
                            placeholder="your@email.com"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold uppercase mb-2">
                            Instagram Handle
                          </label>
                          <input
                            type="text"
                            name="instagram"
                            value={formData.instagram}
                            onChange={handleChange}
                            className="input-brutal"
                            placeholder="@yourhandle"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold uppercase mb-2">
                            Notes (Optional)
                          </label>
                          <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            rows="3"
                            className="input-brutal resize-none"
                            placeholder="Any special requests or timing?"
                          />
                        </div>

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-4 bg-white text-black font-bold uppercase border-4 border-black hover:bg-matrix transition-colors"
                        >
                          Continue →
                        </motion.button>
                      </form>

                      <p className="text-xs text-gray-600 text-center mt-4 font-mono">
                        We only use your info to finalize the order.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      key="success"
                      className="text-center py-12"
                    >
                      <h2 className="text-3xl font-bold font-display mb-4">
                        CHOOSE YOUR <span className="text-cyan">METHOD</span>
                      </h2>
                      <p className="text-gray-400 mb-8 font-mono">
                        How do you want to send this order?
                      </p>

                      <div className="space-y-4 max-w-md mx-auto">
                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: '8px 8px 0px rgba(255, 0, 110, 1)' }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleInstagramDM}
                          className="w-full py-4 bg-hotpink text-white font-bold uppercase border-4 border-black flex items-center justify-center gap-3"
                        >
                          <FaInstagram className="text-2xl" />
                          Send via Instagram DM
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: '8px 8px 0px rgba(0, 255, 65, 1)' }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleEmailOrder}
                          className="w-full py-4 bg-matrix text-black font-bold uppercase border-4 border-black flex items-center justify-center gap-3"
                        >
                          <FaEnvelope className="text-2xl" />
                          Send via Email
                        </motion.button>
                      </div>

                      <p className="text-sm text-gray-500 mt-8 font-mono">
                        Choose one and we'll reach out to finalize payment & shipping.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
