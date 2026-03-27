import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiUser, FiCode, FiGlobe, FiDownload } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolio'
import './About.scss'

const About = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const cards = [
    { icon: <FiCode size={24} />, title: 'Desarrollo Fullstack', desc: 'Desde el diseño de bases de datos hasta interfaces modernas con React.' },
    { icon: <FiGlobe size={24} />, title: 'Trabajo Remoto', desc: 'Experiencia colaborando con equipos distribuidos y metodologías ágiles.' },
    { icon: <FiUser size={24} />, title: 'Mentalidad Startup', desc: 'Adaptable, proactivo y enfocado en entregar valor real al negocio.' },
  ]

  return (
    <section className="about section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Sobre <span>Mí</span></h2>
          <p>Conoce un poco más sobre mi perfil profesional</p>
        </motion.div>

        <div className="about__grid">
          {/* Text side */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="about__subtitle">
              Ingeniero de Sistemas apasionado por construir soluciones que importen
            </h3>
            <p className="about__bio">{personalInfo.bio}</p>
            <p className="about__bio">
              Me especializo en el desarrollo de sistemas robustos usando <strong>.NET Core</strong> y <strong>PHP</strong> para el backend, 
              <strong> React</strong> para interfaces modernas, y prácticas <strong>DevOps</strong> con Docker y GitHub Actions para 
              asegurar entregas continuas y de calidad.
            </p>
            <p className="about__bio">
              Busco proyectos retadores en empresas que valoren la calidad del código, el trabajo remoto y 
              la innovación constante.
            </p>

            <div className="about__info-grid">
              <div className="about__info-item">
                <span className="about__info-label">Ubicación</span>
                <span className="about__info-value">{personalInfo.location}</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Disponibilidad</span>
                <span className="about__info-value about__info-value--green">Inmediata</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Modalidad</span>
                <span className="about__info-value">Remoto / Presencial</span>
              </div>
              <div className="about__info-item">
                <span className="about__info-label">Email</span>
                <span className="about__info-value">{personalInfo.email}</span>
              </div>
            </div>

            <a href={personalInfo.cvUrl} target="_blank" rel="noreferrer noopener" className="btn-primary about__cv">
              <FiDownload /> <span>Descargar CV</span>
            </a>
          </motion.div>

          {/* Cards side */}
          <motion.div
            className="about__cards"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="about__card glass-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="about__card-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
