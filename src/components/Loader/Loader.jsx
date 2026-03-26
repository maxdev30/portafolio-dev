import React from 'react'
import { motion } from 'framer-motion'
import './Loader.scss'

const Loader = () => {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loader__inner">
        <motion.div
          className="loader__logo"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="loader__bracket">&lt;</span>
          <span className="loader__slash">/</span>
          <span className="loader__bracket">&gt;</span>
        </motion.div>
        <motion.div
          className="loader__bar-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="loader__bar"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2, delay: 0.9, ease: 'easeInOut' }}
          />
        </motion.div>
        <motion.p
          className="loader__text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Cargando portafolio...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader
