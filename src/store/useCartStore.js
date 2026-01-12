import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, size) => {
        const items = get().items
        const existingItem = items.find(
          item => item.id === product.id && item.size === size
        )

        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id && item.size === size
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({
            items: [...items, { ...product, size, quantity: 1 }]
          })
        }
      },

      removeItem: (id, size) => {
        set({
          items: get().items.filter(
            item => !(item.id === id && item.size === size)
          )
        })
      },

      updateQuantity: (id, size, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id, size)
        } else {
          set({
            items: get().items.map(item =>
              item.id === id && item.size === size
                ? { ...item, quantity }
                : item
            )
          })
        }
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )
      }
    }),
    {
      name: 'cokeoncock-cart'
    }
  )
)

export default useCartStore
