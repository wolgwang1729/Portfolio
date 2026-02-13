import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = { width: 32, height: 32 }
export const contentType = 'image/svg+xml'

// Image generation
export default function Icon() {
  // Logic from Logo.tsx for 'clean' variant
  const quartic = (x: number) => Math.pow(x, 4) - 2 * Math.pow(x, 2) + 1.2
  const points: string[] = []
  const xMin = -1.6
  const xMax = 1.6
  const steps = 50

  for (let i = 0; i <= steps; i++) {
    const xRaw = xMin + (i / steps) * (xMax - xMin)
    const yRaw = quartic(xRaw)
    const svgX = ((xRaw - xMin) / (xMax - xMin)) * 90 + 5
    const svgY = 95 - (yRaw / 2.5) * 90
    points.push(`${svgX},${svgY}`)
  }

  const pathData = `M ${points[0]} L ${points.slice(1).join(' L ')}`

  return new ImageResponse(
    (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {/* Colors from globals.css: --color-primary (#e5e5e5) and --color-accent (#4f8ea3) */}
            <stop offset="0%" stopColor="#e5e5e5" />
            <stop offset="100%" stopColor="#4f8ea3" />
          </linearGradient>
        </defs>
        <path
          d={pathData}
          fill="none"
          stroke="url(#logo-gradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    {
      ...size,
    }
  )
}
