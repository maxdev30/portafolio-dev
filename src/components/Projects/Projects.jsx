import React, { useState, useRef, useEffect, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { projects } from '../../data/portfolio'
import './Projects.scss'

const categories = ['Todos', '.NET', 'React', 'PHP', 'Python', 'DevOps']

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [selected, setSelected] = useState(null)
  const [carouselIdx, setCarouselIdx] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => { setCarouselIdx(0) }, [selected])

  const openLightbox = useCallback((idx) => {
    setLightboxIdx(idx)
    setLightbox(true)
  }, [])

  const closeLightbox = useCallback(() => setLightbox(false), [])

  useEffect(() => {
    if (!lightbox) return
    const imgs = selected?.images ?? []
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') setLightboxIdx(i => (i + 1) % imgs.length)
      if (e.key === 'ArrowLeft') setLightboxIdx(i => (i - 1 + imgs.length) % imgs.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [lightbox, selected, closeLightbox])

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
                  {project.images?.[0]
                    ? <img src={project.images[0]} alt={project.title} className="project-card__image" />
                    : <div className="project-card__image-placeholder" />
                  }
                  <span className="project-card__category-badge">{project.category}</span>
                  <div className="project-card__overlay">
                    <span>Ver detalles</span>
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
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__link project-card__link--demo"
                        onClick={e => e.stopPropagation()}
                        aria-label="Demo"
                      >
                        <FiExternalLink /> <span>Ver Demo</span>
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

                {selected.images?.length > 0 && (
                  <div className="projects__modal-carousel">
                    <div
                      className="projects__modal-carousel-clickable"
                      onClick={e => { e.stopPropagation(); openLightbox(carouselIdx) }}
                      title="Ampliar imagen"
                    >
                      <img
                        src={selected.images[carouselIdx]}
                        alt={`${selected.title} - ${carouselIdx + 1}`}
                        className="projects__modal-carousel-img"
                      />
                      <div className="projects__modal-carousel-zoom">
                        <FiZoomIn />
                        <span>Ampliar</span>
                      </div>
                    </div>
                    {selected.images.length > 1 && (
                      <>
                        <button
                          className="projects__carousel-btn projects__carousel-btn--prev"
                          onClick={e => { e.stopPropagation(); setCarouselIdx(i => (i - 1 + selected.images.length) % selected.images.length) }}
                          aria-label="Anterior"
                        ><FiChevronLeft /></button>
                        <button
                          className="projects__carousel-btn projects__carousel-btn--next"
                          onClick={e => { e.stopPropagation(); setCarouselIdx(i => (i + 1) % selected.images.length) }}
                          aria-label="Siguiente"
                        ><FiChevronRight /></button>
                        <div className="projects__carousel-thumbs">
                          {selected.images.map((img, idx) => (
                            <img
                              key={idx}
                              src={img}
                              alt={`thumb ${idx + 1}`}
                              className={`projects__carousel-thumb${idx === carouselIdx ? ' active' : ''}`}
                              onClick={e => { e.stopPropagation(); setCarouselIdx(idx) }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

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

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox && selected?.images?.length > 0 && (
            <motion.div
              className="projects__lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <button className="projects__lightbox-close" onClick={closeLightbox} aria-label="Cerrar">
                <FiX />
              </button>

              <button
                className="projects__lightbox-nav projects__lightbox-nav--prev"
                onClick={e => { e.stopPropagation(); setLightboxIdx(i => (i - 1 + selected.images.length) % selected.images.length) }}
                aria-label="Anterior"
              >
                <FiChevronLeft />
              </button>

              <motion.div
                className="projects__lightbox-img-wrap"
                key={lightboxIdx}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={e => e.stopPropagation()}
              >
                <img
                  src={selected.images[lightboxIdx]}
                  alt={`${selected.title} - ${lightboxIdx + 1}`}
                  className="projects__lightbox-img"
                />
                <p className="projects__lightbox-counter">{lightboxIdx + 1} / {selected.images.length}</p>
              </motion.div>

              <button
                className="projects__lightbox-nav projects__lightbox-nav--next"
                onClick={e => { e.stopPropagation(); setLightboxIdx(i => (i + 1) % selected.images.length) }}
                aria-label="Siguiente"
              >
                <FiChevronRight />
              </button>

              <div className="projects__lightbox-thumbs" onClick={e => e.stopPropagation()}>
                {selected.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb ${idx + 1}`}
                    className={`projects__lightbox-thumb${idx === lightboxIdx ? ' active' : ''}`}
                    onClick={() => setLightboxIdx(idx)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects
