'use client'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, FileText, BookOpen } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/Logo'

interface NavbarProps {
  isLoading?: boolean
}

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ isLoading = false }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('/')
  // Add this hook to check current path
  const pathname = usePathname()

  // Update existing useEffect to only run on Home page
  useEffect(() => {
    if (pathname !== '/') {
        setActiveSection('/blog')
        return
    }
    const sectionIds = navItems
      .filter((item) => item.href.startsWith('#'))
      .map((item) => item.href.slice(1))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        }
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }

    // Set Home as active when at the very top
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('/')
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between py-4 px-6 md:px-8"
      >
        <Link href="/" className="flex items-center gap-2 group p-2 rounded-full border border-white/10 bg-surface/30 backdrop-blur-xl shadow-lg run overflow-hidden">
          <div className="relative w-6 h-6">
             <AnimatePresence mode="wait">
               {(!isLoading) && (
                 <motion.div
                   layoutId="main-logo"
                   className="absolute inset-0"
                   transition={{ duration: 0.8, ease: "easeInOut" }}
                 >
                   <Logo className="h-6 w-6" variant="clean" animationDuration={0} />
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: isLoading ? 0.8 : 0 }}
            className="font-mono font-bold text-primary hidden sm:block"
          >
            wolgwang
          </motion.span>
        </Link>

        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: isLoading ? 0.8 : 0 }}
        >
          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-2 p-1 rounded-full border border-white/10 bg-surface/30 backdrop-blur-xl shadow-lg">
            {navItems.map((item) => {
              // Fix href for hash links when not on home
              const href = (item.href.startsWith('#') && pathname !== '/') 
                ? `/${item.href}` 
                : item.href
                
              const isActive = activeSection === item.href || (pathname.startsWith('/blog') && item.href === '/blog')

              return (
                <Link 
                  key={item.name} 
                  href={href} 
                  className={`px-6 py-2 text-sm font-medium rounded-full transition-all ${
                    isActive
                      ? 'text-primary bg-white/10'
                      : 'text-secondary hover:text-primary hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
            <a
              href="https://eotd-wolgwang.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black shadow-md hover:bg-gray-100 transition-all text-sm font-semibold"
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="ml-1 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black shadow-md hover:bg-gray-100 transition-all text-sm font-semibold"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </motion.a>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full border border-white/10 bg-surface/30 backdrop-blur-xl shadow-lg text-primary"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute top-full mt-2 left-4 right-4 p-3 rounded-2xl border border-white/10 bg-surface/80 backdrop-blur-xl shadow-lg transition-all duration-200 origin-top ${
            mobileOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'
          }`}
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              // Fix href for hash links when not on home
              const href = (item.href.startsWith('#') && pathname !== '/') 
                ? `/${item.href}` 
                : item.href
                
              const isActive = activeSection === item.href || (pathname.startsWith('/blog') && item.href === '/blog')

              return (
                <Link
                  key={item.name}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                    isActive
                      ? 'text-primary bg-white/10'
                      : 'text-secondary hover:text-primary hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
            <a
              href="https://eotd-wolgwang.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-semibold rounded-xl bg-white text-black hover:bg-gray-100 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-sm font-semibold rounded-xl bg-white text-black hover:bg-gray-100 transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}
