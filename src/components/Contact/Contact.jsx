import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'
import { personalInfo } from '../../data/portfolio'
import './Contact.scss'

const Contact = () => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  const handleSubmit = async (e) => {
    e.preventDefault()

    const sanitized = {
      name:    form.name.trim().slice(0, 100),
      email:   form.email.trim().toLowerCase().slice(0, 100),
      subject: form.subject.trim().slice(0, 150),
      message: form.message.trim().slice(0, 2000),
    }

    if (!emailRegex.test(sanitized.email)) {
      setStatus('error')
      return
    }

    setStatus('sending')
    // Integración con EmailJS — configura tus keys en .env
    // import emailjs from '@emailjs/browser'
    // await emailjs.send(SERVICE_ID, TEMPLATE_ID, sanitized, PUBLIC_KEY)
    setTimeout(() => {
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    }, 1500)
  }

  const contactInfo = [
    { icon: <FiMail />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <FiPhone />, label: 'Teléfono', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <FiMapPin />, label: 'Ubicación', value: personalInfo.location, href: null },
  ]

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Hablemos <span>Juntos</span></h2>
          <p>¿Tienes un proyecto? Estoy disponible para trabajar contigo</p>
        </motion.div>

        <div className="contact__grid">
          {/* Info side */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="contact__info-title">¡Construyamos algo increíble!</h3>
            <p className="contact__info-text">
              Estoy buscando nuevas oportunidades — ya sea trabajo remoto, startup 
              o empresa mediana. Mi bandeja está siempre abierta para una buena propuesta.
            </p>

            <div className="contact__items">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  className="contact__item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="contact__item-icon">{item.icon}</div>
                  <div>
                    <span className="contact__item-label">{item.label}</span>
                    {item.href
                      ? <a href={item.href} className="contact__item-value">{item.value}</a>
                      : <span className="contact__item-value">{item.value}</span>
                    }
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="contact__socials">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="contact__social">
                <FiGithub size={20} />
                <span>GitHub</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="contact__social">
                <FiLinkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.form
            className="contact__form glass-card"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            onSubmit={handleSubmit}
          >
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={100}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  maxLength={100}
                  required
                />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Asunto</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="¿De qué se trata?"
                value={form.subject}
                onChange={handleChange}
                maxLength={150}
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Cuéntame sobre tu proyecto..."
                value={form.message}
                onChange={handleChange}
                maxLength={2000}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary contact__submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? (
                <span>Enviando...</span>
              ) : (
                <><FiSend /> <span>Enviar Mensaje</span></>
              )}
            </button>

            {status === 'success' && (
              <motion.p
                className="contact__success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ ¡Mensaje enviado! Te contactaré pronto.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="contact__error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ⚠️ Por favor ingresa un email válido.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
