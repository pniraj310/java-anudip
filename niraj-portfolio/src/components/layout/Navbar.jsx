import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const { isDark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-100/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.span
            className="font-mono text-primary font-semibold text-sm cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            niraj.dev
          </motion.span>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-slate-400 hover:text-white text-sm transition-colors duration-200"
              >
                {link}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 hover:border-primary/40"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
            <button
              onClick={() => scrollTo('Contact')}
              className="hidden md:block btn-primary text-sm py-2 px-4 rounded-lg"
            >
              Contact me
            </button>
            <button
              onClick={() => setMobileOpen(p => !p)}
              className="md:hidden w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-400"
            >
              {mobileOpen ? <FiX size={16} /> : <FiMenu size={16} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-40 bg-dark-200/95 backdrop-blur-xl border-b border-white/5 px-6 py-4"
          >
            {links.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="block w-full text-left py-3 text-slate-300 hover:text-white border-b border-white/5 text-sm transition-colors"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo('Contact')}
              className="mt-4 w-full btn-primary text-sm py-2.5 text-center rounded-lg"
            >
              Contact me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
