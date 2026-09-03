'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import { Linkedin, Github, Mail, Copy, Check, ArrowUpRight } from 'lucide-react'
import { RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'

const EMAIL = 'mayankyadav1729@gmail.com'

const socialLinks = [
  {
    name: 'LinkedIn',
    value: 'in/mayankyadav8',
    href: 'https://linkedin.com/in/mayankyadav8',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    value: 'wolgwang1729',
    href: 'https://github.com/wolgwang1729',
    icon: Github,
  },
  {
    name: 'X (Twitter)',
    value: '@wolgwang1729',
    href: 'https://x.com/wolgwang1729',
    icon: RiTwitterXLine,
  },
  {
    name: 'Instagram',
    value: '@wolgwang1729',
    href: 'https://instagram.com/wolgwang1729',
    icon: RiInstagramLine,
  },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-3 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-primary tracking-tight">
              Get In Touch
            </h2>
            <p className="text-secondary text-sm sm:text-base max-w-xl leading-relaxed">
              Whether you want to discuss a project, ask a question, or just say hi, I am always open to connecting.
            </p>
          </div>
          <div className="h-px bg-white/5 mb-12" aria-hidden="true" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center gap-5 justify-between p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors mb-6"
        >
          <div className="flex items-center gap-4 min-w-0">
            <div className="p-3 rounded-lg bg-white/5 shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary/60">Email</span>
              <span className="text-base sm:text-lg font-semibold text-primary break-all leading-snug">
                {EMAIL}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? 'Email copied' : 'Copy email address'}
              className="p-3 rounded-full border border-white/10 text-secondary hover:text-white hover:bg-white/10 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
            </button>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-white/90 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              Write to me <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${link.name}: ${link.value}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-3 p-4 rounded-2xl bg-surface border border-white/5 hover:border-white/15 hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
            >
              <div className="p-2.5 rounded-lg bg-white/5 shrink-0">
                <link.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[11px] text-secondary/60">{link.name}</span>
                <span className="text-sm font-semibold text-primary truncate">
                  {link.value}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 ml-auto text-secondary/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
