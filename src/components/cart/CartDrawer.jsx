import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion } from 'framer-motion'
import { HiX } from 'react-icons/hi'
import useCartStore from '../../store/useCartStore'
import CartItem from './CartItem'

export default function CartDrawer({ isOpen, onClose, onCheckout }) {
  const items = useCartStore(state => state.items)
  const totalPrice = useCartStore(state => state.getTotalPrice())

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
          <div className="fixed inset-0 bg-black/80" />
        </Transition.Child>

        {/* Drawer */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col bg-black border-l-4 border-white">
                    {/* Header */}
                    <div className="border-b-4 border-white p-6">
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="text-2xl font-bold font-display">
                          YOUR <span className="text-matrix">BAG</span>
                        </Dialog.Title>
                        <button
                          onClick={onClose}
                          className="p-2 border-2 border-white hover:bg-hotpink hover:border-hotpink transition-colors"
                        >
                          <HiX className="text-2xl" />
                        </button>
                      </div>
                    </div>

                    {/* Items */}
                    <div className="flex-1 overflow-y-auto p-6">
                      {items.length === 0 ? (
                        <div className="text-center py-12">
                          <p className="text-6xl mb-4">💔</p>
                          <p className="text-xl text-gray-400 font-mono mb-2">
                            Your bag is empty
                          </p>
                          <p className="text-sm text-gray-600">
                            Load it with a signal and start the night.
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          {items.map(item => (
                            <CartItem
                              key={`${item.id}-${item.size}`}
                              item={item}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                      <div className="border-t-4 border-white p-6 space-y-4">
                        {/* Total */}
                        <div className="flex items-center justify-between text-xl font-bold">
                          <span className="uppercase font-display">Total</span>
                          <span className="text-hotpink">${totalPrice.toFixed(2)}</span>
                        </div>

                        {/* Checkout Button */}
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={onCheckout}
                          className="w-full py-4 bg-matrix text-black font-bold uppercase border-4 border-black hover:bg-hotpink hover:text-white transition-colors"
                        >
                          Drop Your Order →
                        </motion.button>

                        <p className="text-xs text-center text-gray-500 font-mono">
                          No refunds. All energy. We'll confirm the details.
                        </p>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
