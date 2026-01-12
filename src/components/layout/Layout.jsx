import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, onCartClick }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header onCartClick={onCartClick} />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}
