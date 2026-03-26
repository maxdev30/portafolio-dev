import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { FiDownload } from 'react-icons/fi'
import { navLinks, personalInfo } from '../../data/portfolio'
import './Navbar.scss'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="navbar__container">
        {/* Logo */}
        <Link to="home" smooth duration={600} className="navbar__logo">
          <span className="navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-name">Dev</span>
          <span className="navbar__logo-slash">/</span>
          <span className="navbar__logo-bracket">&gt;</span>
        </Link>

        {/* Links desktop */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth
                duration={600}
                offset={-80}
                spy
                onSetActive={() => setActiveSection(link.id)}
                className={`navbar__link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CV Button */}
        <a
          href={personalInfo.cvUrl}
          download
          className="btn-primary navbar__cv"
        >
          <FiDownload />
          <span>Descargar CV</span>
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  to={link.id}
                  smooth
                  duration={600}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="navbar__mobile-link"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <a
              href={personalInfo.cvUrl}
              download
              className="btn-primary navbar__mobile-cv"
              onClick={() => setMenuOpen(false)}
            >
              <FiDownload /> <span>Descargar CV</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
