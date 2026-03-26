import React, { useEffect, useState } from 'react'
import './CustomCursor.scss'

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trailing, setTrailing] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const moveCursor = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', moveCursor)

    let animFrame
    const animateTrail = () => {
      setTrailing(prev => ({
        x: prev.x + (pos.x - prev.x) * 0.1,
        y: prev.y + (pos.y - prev.y) * 0.1,
      }))
      animFrame = requestAnimationFrame(animateTrail)
    }
    animFrame = requestAnimationFrame(animateTrail)

    const addHover = () => {
      document.querySelectorAll('a, button, .btn-primary, .btn-outline, .project-card, .skill-item').forEach(el => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }
    addHover()

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      cancelAnimationFrame(animFrame)
    }
  }, [pos.x, pos.y])

  return (
    <>
      <div
        className={`cursor__dot ${isHovering ? 'hovering' : ''}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`cursor__ring ${isHovering ? 'hovering' : ''}`}
        style={{ left: trailing.x, top: trailing.y }}
      />
    </>
  )
}

export default CustomCursor
