'use client'

import Logo from '@/components/Logo'

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="flex flex-col items-center gap-4">
        <Logo className="h-20 w-20" variant="fractal" animationDuration={3.2} />
        <span className="text-secondary text-sm tracking-wide">Loading...</span>
      </div>
    </div>
  )
}
