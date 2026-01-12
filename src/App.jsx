import { useState } from 'react'
import Layout from './components/layout/Layout'
import Hero from './components/Hero'
import ProductGrid from './components/products/ProductGrid'
import CartDrawer from './components/cart/CartDrawer'
import CheckoutModal from './components/checkout/CheckoutModal'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  return (
    <Layout onCartClick={() => setIsCartOpen(true)}>
      <Hero />
      <ProductGrid />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={() => {
          setIsCartOpen(false)
          setIsCheckoutOpen(true)
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </Layout>
  )
}

export default App
