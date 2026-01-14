import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import { FaInstagram, FaEnvelope } from 'react-icons/fa'
import PropTypes from 'prop-types'
import useCartStore from '../../store/useCartStore'
import { useModal } from '../../contexts/ModalContext'
import { generateInstagramMessage, generateEmailLink } from '../../utils/emailService'
import { SOCIAL_LINKS } from '../../config/constants'
import useFormValidation, { validators, composeValidators } from '../../hooks/useFormValidation'

export default function CheckoutModal() {
  const items = useCartStore(state => state.items)
  const totalPrice = useCartStore(state => state.getTotalPrice())
  const clearCart = useCartStore(state => state.clearCart)
  const { isCheckoutOpen, closeModal } = useModal()
  const [submitted, setSubmitted] = useState(false)

  const validate = (values) => {
    const errors = {}
    const nameError = validators.required(values.name)
    const emailError = composeValidators(validators.required, validators.email)(values.email)

    if (nameError) errors.name = nameError
    if (emailError) errors.email = emailError

    return errors
  }

  const initialValues = {
    name: '',
    email: '',
    instagram: '',
    notes: ''
  }

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  } = useFormValidation(initialValues, validate)

  const handleOrderSubmit = (formData) => {
    setSubmitted(true)
  }

  const handleInstagramDM = () => {
    const orderData = {
      ...values,
      items,
      total: totalPrice.toFixed(2)
    }
    const message = generateInstagramMessage(orderData)
    window.open(`${SOCIAL_LINKS.instagram}?message=${message}`, '_blank')

    finalizeOrder()
  }

  const handleEmailOrder = () => {
    const orderData = {
      ...values,
      items,
      total: totalPrice.toFixed(2)
    }
    const emailLink = generateEmailLink(orderData)
    window.location.href = emailLink

    finalizeOrder()
  }

  const finalizeOrder = () => {
    clearCart()
    setTimeout(() => {
      closeModal()
      setSubmitted(false)
      resetForm()
    }, 1000)
  }

  return (
    <Transition show={isCheckoutOpen} as={Fragment}>
      <Dialog onClose={closeModal} className="relative z-50">
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
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-black border-2 border-white hover:bg-hotpink hover:border-hotpink transition-colors"
                aria-label="Close checkout modal"
              >
                <HiX className="text-2xl" aria-hidden="true" />
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
                      <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit(handleOrderSubmit)
                      }} className="space-y-4">
                        <div>
                          <label className="block text-sm font-bold uppercase mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`input-brutal ${touched.name && errors.name ? 'border-hotpink' : 'border-white'}`}
                            placeholder="Your name"
                            aria-invalid={touched.name && errors.name ? 'true' : 'false'}
                          />
                          {touched.name && errors.name && (
                            <p className="text-hotpink text-xs mt-1">{errors.name}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-bold uppercase mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`input-brutal ${touched.email && errors.email ? 'border-hotpink' : 'border-white'}`}
                            placeholder="your@email.com"
                            aria-invalid={touched.email && errors.email ? 'true' : 'false'}
                          />
                          {touched.email && errors.email && (
                            <p className="text-hotpink text-xs mt-1">{errors.email}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-bold uppercase mb-2">
                            Instagram Handle
                          </label>
                          <input
                            type="text"
                            name="instagram"
                            value={values.instagram}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                            value={values.notes}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                          aria-label="Send order details via Instagram Direct Message"
                        >
                          <FaInstagram className="text-2xl" aria-hidden="true" />
                          Send via Instagram DM
                        </motion.button>

                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: '8px 8px 0px rgba(0, 255, 65, 1)' }}
                          whileTap={{ scale: 0.95 }}
                          onClick={handleEmailOrder}
                          className="w-full py-4 bg-matrix text-black font-bold uppercase border-4 border-black flex items-center justify-center gap-3"
                          aria-label="Send order details via Email"
                        >
                          <FaEnvelope className="text-2xl" aria-hidden="true" />
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

CheckoutModal.propTypes = {
  // Items are consumed from store, so no props needed but adding for consistency/future-proofing if needed
}
