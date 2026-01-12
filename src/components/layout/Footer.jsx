import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t-4 border-white bg-black py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-display mb-4">
              COKE<span className="text-matrix">ON</span>COCK
            </h3>
            <p className="text-gray-400 text-sm font-mono">
              Cynical streetwear for those who get it.
              <br />
              Reality sucks. Dress accordingly.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-matrix">CONNECT</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com/cokeoncock"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#FF006E' }}
                className="text-2xl transition-colors"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://twitter.com/cokeoncock"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#00F0FF' }}
                className="text-2xl transition-colors"
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://tiktok.com/@cokeoncock"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#00FF41' }}
                className="text-2xl transition-colors"
              >
                <FaTiktok />
              </motion.a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-hotpink">
              JOIN THE VOID
            </h4>
            <p className="text-sm text-gray-400 mb-3">
              Get updates on drops. Or don't. We're not your boss.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-3 py-2 bg-black border-2 border-white text-white text-sm focus:outline-none focus:border-matrix"
              />
              <button className="px-4 py-2 bg-matrix text-black font-bold border-2 border-black hover:bg-hotpink hover:text-white transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t-2 border-gray-800 text-center text-sm text-gray-500 font-mono">
          <p>© {currentYear} COKE ON COCK. All rights reserved. Not that it matters.</p>
          <p className="mt-2 text-xs">
            This is a parody brand. We're just here for the vibes (and your money).
          </p>
        </div>
      </div>
    </footer>
  )
}
