import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../../data/portfolio'
import './Projects.scss'

const categories = ['Todos', '.NET', 'React', 'PHP', 'Python', 'DevOps']

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [selected, setSelected] = useState(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = activeFilter === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Mis <span>Proyectos</span></h2>
          <p>Soluciones reales construidas con tecnología moderna</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="projects__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`projects__filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="projects__grid" layout>
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                className="project-card glass-card"
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelected(project)}
              >
                <div className="project-card__image-wrap">
                  <div className="project-card__image-placeholder">
                    <span className="project-card__category-badge">{project.category}</span>
                    <div className="project-card__overlay">
                      <span>Ver detalles</span>
                    </div>
                  </div>
                </div>

                <div className="project-card__body">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__desc">{project.description}</p>

                  <div className="project-card__tech">
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tag">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  <div className="project-card__links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__link"
                        onClick={e => e.stopPropagation()}
                        aria-label="GitHub"
                      >
                        <FiGithub /> <span>Código</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__link project-card__link--demo"
                        onClick={e => e.stopPropagation()}
                        aria-label="Demo"
                      >
                        <FiExternalLink /> <span>Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="projects__modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="projects__modal glass-card"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <button className="projects__modal-close" onClick={() => setSelected(null)}>×</button>
                <h2 className="projects__modal-title">{selected.title}</h2>
                <p className="projects__modal-desc">{selected.description}</p>
                <div className="projects__modal-highlights">
                  {selected.highlights.map(h => (
                    <span key={h} className="tag">{h}</span>
                  ))}
                </div>
                <div className="projects__modal-tech">
                  <strong>Stack:</strong>
                  {selected.tech.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
                <div className="projects__modal-links">
                  {selected.github && (
                    <a href={selected.github} target="_blank" rel="noreferrer" className="btn-outline">
                      <FiGithub /> <span>Ver Código</span>
                    </a>
                  )}
                  {selected.demo && (
                    <a href={selected.demo} target="_blank" rel="noreferrer" className="btn-primary">
                      <FiExternalLink /> <span>Ver Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
