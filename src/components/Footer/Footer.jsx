import React from 'react'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personalInfo, navLinks } from '../../data/portfolio'
import './Footer.scss'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Logo */}
          <div className="footer__brand">
            <Link to="home" smooth duration={600} className="footer__logo">
              <img src="/logo-max-developer.svg" alt="Max Developer Logo" className="footer__logo-img" />
            </Link>
            <p className="footer__tagline">
              Construyendo soluciones digitales que marcan la diferencia.
            </p>
          </div>

          {/* Nav links */}
          <nav className="footer__nav">
            <h4>Navegación</h4>
            <ul>
              {navLinks.map(link => (
                <li key={link.id}>
                  <Link to={link.id} smooth duration={600} offset={-80}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="footer__contact">
            <h4>Contacto</h4>
            <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            <div className="footer__socials">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email"><FiMail /></a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} {personalInfo.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
