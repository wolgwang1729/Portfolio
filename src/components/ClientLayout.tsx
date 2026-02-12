'use client'

import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence } from 'motion/react'
import SplashScreen from './SplashScreen'
import Navbar from './Navbar'
import Footer from './Footer'
import { LoadingProvider, useLoading } from '@/context/LoadingContext'

function ClientLayoutContent({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const { isLoading, setIsLoading } = useLoading()

  useEffect(() => {
    if (isLoading) {
      return
    }
  }, [isLoading])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && isHome && (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      <Navbar isLoading={isLoading} />
      <main className="relative flex min-h-screen flex-col items-center justify-between">
          {children}
      </main>
      <Footer />
    </>
  )
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <ClientLayoutContent>{children}</ClientLayoutContent>
    </LoadingProvider>
  )
}
