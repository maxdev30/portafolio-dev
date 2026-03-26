import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ReactTyped } from 'react-typed'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolio'
import './Hero.scss'

const Hero = () => {
  const canvasRef = useRef(null)

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      dx: (Math.random() - 0.5) * 0.4,
      dy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    let animId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <section className="hero" id="home">
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="container hero__container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="hero__greeting" variants={itemVariants}>
            👋 Hola, soy
          </motion.span>

          <motion.h1 className="hero__name" variants={itemVariants}>
            {personalInfo.name}
          </motion.h1>

          <motion.div className="hero__role" variants={itemVariants}>
            <span className="hero__role-prefix">Soy </span>
            <ReactTyped
              strings={[
                'Fullstack Developer',
                'Ingeniero de Sistemas',
                '.NET Core Developer',
                'React Developer',
                'PHP Developer',
                'Python Developer',
                'DevOps Enthusiast',
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
              className="hero__typed"
            />
          </motion.div>

          <motion.p className="hero__bio" variants={itemVariants}>
            {personalInfo.bio}
          </motion.p>

          <motion.div className="hero__stats" variants={itemVariants}>
            <div className="hero__stat">
              <span className="hero__stat-num">{personalInfo.yearsExp}+</span>
              <span className="hero__stat-label">Años de Exp.</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">{personalInfo.projectsDone}+</span>
              <span className="hero__stat-label">Proyectos</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-num">{personalInfo.companiesWorked}+</span>
              <span className="hero__stat-label">Empresas</span>
            </div>
          </motion.div>

          <motion.div className="hero__actions" variants={itemVariants}>
            <Link to="projects" smooth duration={700} offset={-80}>
              <button className="btn-primary">
                <span>Ver Proyectos</span>
              </button>
            </Link>
            <Link to="contact" smooth duration={700} offset={-80}>
              <button className="btn-outline">
                <span>Contáctame</span>
              </button>
            </Link>
          </motion.div>

          <motion.div className="hero__socials" variants={itemVariants}>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hero__social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero__social-link" aria-label="Email">
              <FiMail />
            </a>
            <div className="hero__social-line" />
          </motion.div>
        </motion.div>

        {/* Floating code block decorativo */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="hero__code-card glass-card animate-float">
            <div className="hero__code-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="hero__code-title">developer.js</span>
            </div>
            <pre className="hero__code-body">
{`const developer = {
  name: "${personalInfo.name}",
  role: "Fullstack Dev",
  skills: [
    "PHP", ".NET Core",
    "React", "Python",
    "Docker", "MySQL"
  ],
  available: true,
  remote: true,
};`}
            </pre>
          </div>

          <div className="hero__badge glass-card">
            <span className="hero__badge-dot" />
            Disponible para trabajar
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link to="about" smooth duration={600} offset={-80}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FiArrowDown size={22} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero
