import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}
