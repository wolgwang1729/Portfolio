'use client'

import { motion } from 'motion/react'
import { useMemo } from 'react'

interface LogoProps {
  className?: string
  variant?: 'clean' | 'fractal'
  animationDuration?: number
}

function generatePath(variant: 'clean' | 'fractal'): string {
  const quartic = (x: number) => Math.pow(x, 4) - 2 * Math.pow(x, 2) + 1.2

  const weierstrass = (x: number) => {
    let y = 0
    const a = 0.5
    const b = 3
    const iterations = 5
    for (let n = 0; n < iterations; n++) {
      y += Math.pow(a, n) * Math.cos(Math.pow(b, n) * Math.PI * x)
    }
    return y * 0.5 + 1.2
  }

  const points = []
  const func = variant === 'clean' ? quartic : weierstrass
  const xMin = -1.6
  const xMax = 1.6
  const steps = variant === 'clean' ? 50 : 200

  for (let i = 0; i <= steps; i++) {
    const xRaw = xMin + (i / steps) * (xMax - xMin)
    const yRaw = func(xRaw)
    const svgX = ((xRaw - xMin) / (xMax - xMin)) * 90 + 5
    const svgY = 95 - (yRaw / 2.5) * 90
    points.push(`${svgX},${svgY}`)
  }

  return `M ${points[0]} L ${points.slice(1).join(' L ')}`
}

export default function Logo({
  className = '',
  variant = 'clean',
  animationDuration = 1.5,
}: LogoProps) {
  const pathData = useMemo(() => generatePath(variant), [variant])

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-primary)" />
            <stop offset="100%" stopColor="var(--color-accent)" />
          </linearGradient>
        </defs>

        <motion.path
          d={pathData}
          fill="none"
          stroke="url(#logo-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: animationDuration, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  )
}
