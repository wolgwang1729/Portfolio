import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mayank Yadav | CS Portfolio',
  description: 'Building at the intersection of Systems Engineering and Computer Vision.',
  openGraph: {
    title: 'Mayank Yadav | CS Portfolio',
    description: 'Computer Science Student at DTU specializing in AI/ML and Systems.',
    url: 'https://portfolio-wolgwang.vercel.app',
    siteName: 'Mayank Yadav Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1890,
        height: 905,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SchemaMarkup from '@/components/SchemaMarkup'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth relative`}>
      <body className="bg-background text-primary min-h-screen font-sans selection:bg-accent/30 selection:text-accent overflow-x-hidden">
        <SchemaMarkup />
        <Navbar />
        <main className="relative flex min-h-screen flex-col items-center justify-between">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
