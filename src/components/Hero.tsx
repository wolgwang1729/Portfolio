'use client'
import { motion } from 'motion/react'
import { ArrowRight, Terminal } from 'lucide-react'
import { BackgroundBeams } from '@/components/ui/background-beams'
import { useLoading } from '@/context/LoadingContext'

export default function Hero() {
  const { isLoading } = useLoading()

  // Define delays based on loading state
  // If loading (splash screen active/just finished), add extra delay for logo transition
  // Logo transition takes ~0.8s (from Navbar.tsx)
  const baseDelay = isLoading ? 0.8 : 0.2

  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full px-4 pt-20 text-center relative overflow-hidden">
      <BackgroundBeams />
      <div className="relative z-10 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: baseDelay }}
        className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-sm font-medium text-accent bg-accent/10 rounded-full"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
        </span>
        Student @ DTU-CS
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: baseDelay + 0.1 }}
        className="text-5xl md:text-7xl font-bold font-mono tracking-tight text-primary mb-6"
      >
        Mayank Yadav
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: baseDelay + 0.2 }}
        className="text-xl text-secondary max-w-2xl mb-10"
      >
        Building at the intersection of <span className="text-white">Systems Engineering</span> and <span className="text-white">Computer Vision</span>.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={!isLoading ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: baseDelay + 0.3 }}
        className="flex gap-4"
      >
        <a 
          href="#projects" 
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-lg hover:bg-white/90 transition-colors"
        >
          View Work <ArrowRight className="w-4 h-4" />
        </a>
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary bg-surface border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
        >
          Contact Me <Terminal className="w-4 h-4" />
        </a>
      </motion.div>
      </div>
    </section>
  )
}
