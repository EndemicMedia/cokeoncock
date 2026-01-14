import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ModalProvider } from './contexts/ModalContext'
import ScrollToTop from './components/layout/ScrollToTop'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Policies from './pages/Policies'
import SizeGuide from './pages/SizeGuide'
import CartDrawer from './components/cart/CartDrawer'
import CheckoutModal from './components/checkout/CheckoutModal'

function App() {
  return (
    <ModalProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:productSlug" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/size-guide" element={<SizeGuide />} />
          </Routes>

          <CartDrawer />
          <CheckoutModal />
        </Layout>
      </Router>
    </ModalProvider>
  )
}

export default App
