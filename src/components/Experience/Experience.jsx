import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import { experience } from '../../data/portfolio'
import './Experience.scss'

const Experience = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="experience section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Mi <span>Experiencia</span></h2>
          <p>Trayectoria profesional y empresas donde he aportado valor</p>
        </motion.div>

        <div className="experience__timeline">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              className="experience__item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="experience__dot">
                <FiBriefcase size={16} />
              </div>

              <motion.div
                className="experience__card glass-card"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{item.role}</h3>
                    <span className="experience__company">{item.company}</span>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__period">{item.period}</span>
                    <span className="experience__type">{item.type}</span>
                  </div>
                </div>

                <p className="experience__desc">{item.description}</p>

                <div className="experience__tech">
                  {item.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
