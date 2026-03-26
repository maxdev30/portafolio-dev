import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  FaReact, FaPhp, FaPython, FaDocker, FaGithub,
  FaHtml5, FaCss3Alt, FaBootstrap, FaDatabase,
} from 'react-icons/fa'
import {
  SiDotnet, SiJavascript, SiMysql, SiSass, SiTailwindcss,
} from 'react-icons/si'
import { skills } from '../../data/portfolio'
import './Skills.scss'

const iconMap = {
  react: <FaReact />,
  js: <SiJavascript />,
  html: <FaHtml5 />,
  css: <FaCss3Alt />,
  bootstrap: <FaBootstrap />,
  php: <FaPhp />,
  dotnet: <SiDotnet />,
  python: <FaPython />,
  dapper: <FaDatabase />,
  mysql: <SiMysql />,
  sql: <FaDatabase />,
  docker: <FaDocker />,
  github: <FaGithub />,
  actions: <FaGithub />,
}

const categories = ['Todos', 'Frontend', 'Backend', 'Database', 'DevOps']

const categoryColors = {
  Frontend: '#00d4ff',
  Backend:  '#7b2ff7',
  Database: '#ff6b6b',
  DevOps:   '#28c840',
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  const filtered = activeCategory === 'Todos'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          className="section__title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Mis <span>Habilidades</span></h2>
          <p>Tecnologías y herramientas que utilizo profesionalmente</p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="skills__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              className={`skills__filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <div className="skills__grid">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skills__item skill-item glass-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.07 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div
                className="skills__icon"
                style={{ color: categoryColors[skill.category] }}
              >
                {iconMap[skill.icon]}
              </div>
              <h4 className="skills__name">{skill.name}</h4>
              <div className="skills__bar-wrap">
                <motion.div
                  className="skills__bar"
                  style={{ background: `linear-gradient(90deg, ${categoryColors[skill.category]}, ${categoryColors[skill.category]}aa)` }}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
                />
              </div>
              <span className="skills__level">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
