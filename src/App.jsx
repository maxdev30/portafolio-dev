/**
 * @copyright 2026 Ing. Max Patricio Anaya — Todos los derechos reservados.
 * Prohibida la copia, reproducción o distribución sin autorización expresa.
 * @license All Rights Reserved — Ver archivo LICENSE en la raíz del proyecto.
 */
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Loader from './components/Loader/Loader'
import CustomCursor from './components/CustomCursor/CustomCursor'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="app">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
