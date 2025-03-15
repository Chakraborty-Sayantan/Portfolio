'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimationFrame } from 'framer-motion'

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export function Particles() {
  const ref = useRef<HTMLDivElement>(null)
  const particles = useRef<Particle[]>([])
  
  useEffect(() => {
    // Initialize particles
    particles.current = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.6) * 0.6,
      speedY: (Math.random() - 0.3) * 0.3,
      opacity: Math.random() * 1.0 + 1.0
    }))
  }, [])

  useAnimationFrame(() => {
    particles.current = particles.current.map(particle => ({
      ...particle,
      x: (particle.x + particle.speedX + 100) % 100,
      y: (particle.y + particle.speedY + 100) % 100,
    }))
    
    if (ref.current) {
      ref.current.style.setProperty('--particles', particles.current
        .map(p => `radial-gradient(${p.size}px circle at ${p.x}% ${p.y}%, rgba(56, 189, 248, ${p.opacity}), transparent)`)
        .join(','))
    }
  })

  return (
    <motion.div
      ref={ref}
      className="pointer-events-none absolute inset-0"
      style={{
        background: 'var(--particles)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}