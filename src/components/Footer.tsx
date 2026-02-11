'use client'
import { Github, Linkedin, Mail } from 'lucide-react'
import { RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'
import Logo from '@/components/Logo'

const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:mayankyadav1729@gmail.com',
    icon: Mail,
    hover: 'hover:text-accent',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mayankyadav8/',
    icon: Linkedin,
    hover: 'hover:text-blue-400',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/wolgwang1729',
    icon: Github,
    hover: 'hover:text-white',
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/wolgwang1729',
    icon: RiTwitterXLine,
    hover: 'hover:text-sky-400',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/wolgwang1729',
    icon: RiInstagramLine,
    hover: 'hover:text-pink-400',
  },
]

export default function Footer() {
  return (
    <footer className="w-full py-4 mt-20 border-t border-white/5 bg-surface/30">
      <div className="container mx-auto px-4 flex flex-col gap-2 md:flex-row items-center md:items-end justify-between">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Logo className="h-8 w-8" variant="fractal" />
          <p className="text-secondary text-sm">
            © {new Date().getFullYear()} wolgwang. Built with ♥.
          </p>
        </div>
        <div className="flex items-center flex-wrap justify-center md:justify-end gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-secondary transition-colors ${link.hover}`}
              aria-label={`Open ${link.name}`}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
