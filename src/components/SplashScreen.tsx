'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import Logo from '@/components/Logo'

interface SplashScreenProps {
  finishLoading: () => void
}

export default function SplashScreen({ finishLoading }: SplashScreenProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 10)
    return () => clearTimeout(timeout)
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      finishLoading()
    }, 2000) // Duration of the splash screen
    return () => clearTimeout(timeout)
  }, [finishLoading])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <motion.div
        className="absolute inset-0 bg-black pointer-events-auto"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      />
      <div className="relative z-10 flex items-center justify-center">
        {/* Logo wrapper for layout ID animation */}
        <motion.div
           layoutId="main-logo"
           className="w-24 h-24 md:w-32 md:h-32"
           transition={{ duration: 1.0, ease: "easeInOut" }}
        >
             <Logo className="w-full h-full" variant="clean" animationDuration={1.5} />
        </motion.div>
      </div>
    </div>
  )
}
