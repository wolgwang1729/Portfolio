'use client'
import { motion } from 'motion/react'
import { Linkedin, Github, Mail } from 'lucide-react'
import { RiInstagramLine, RiTwitterXLine } from 'react-icons/ri'

const contactLinks = [
  {
    name: 'Email',
    value: 'mayankyadav1729@gmail.com',
    href: 'mailto:mayankyadav1729@gmail.com',
    icon: Mail,
    color: 'text-primary',
    borderColor: 'hover:border-white/20',
    bgHover: 'hover:bg-white/5',
  },
  {
    name: 'LinkedIn',
    value: 'in/mayankyadav8',
    href: 'https://linkedin.com/in/mayankyadav8',
    icon: Linkedin,
    color: 'text-primary',
    borderColor: 'hover:border-white/20',
    bgHover: 'hover:bg-white/5',
  },
  {
    name: 'GitHub',
    value: 'wolgwang1729',
    href: 'https://github.com/wolgwang1729',
    icon: Github,
    color: 'text-primary',
    borderColor: 'hover:border-white/20',
    bgHover: 'hover:bg-white/5',
  },
  {
    name: 'X (Twitter)',
    value: '@wolgwang1729',
    href: 'https://x.com/wolgwang1729',
    icon: RiTwitterXLine,
    color: 'text-primary',
    borderColor: 'hover:border-white/20',
    bgHover: 'hover:bg-white/5',
  },
  {
    name: 'Instagram',
    value: '@wolgwang1729',
    href: 'https://instagram.com/wolgwang1729',
    icon: RiInstagramLine,
    color: 'text-primary',
    borderColor: 'hover:border-white/20',
    bgHover: 'hover:bg-white/5',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-primary mb-4">
            Get In Touch
          </h2>
          <p className="text-secondary max-w-xl mx-auto text-sm sm:text-base">
            Whether you want to discuss a project, ask a question, or just say hi, I'm always open to connecting!
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {contactLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${link.name}: ${link.value}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-surface border border-white/5 transition-all duration-300 ${link.borderColor} ${link.bgHover} group w-full max-w-[280px] sm:max-w-sm md:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.75rem)]`}
            >
              <div className={`p-2 sm:p-3 rounded-lg bg-white/5 text-secondary group-hover:text-white transition-colors`}>
                <link.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${link.color}`} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs sm:text-sm text-secondary font-mono">{link.name}</span>
                <span className="text-sm sm:text-base font-semibold text-primary group-hover:text-white transition-colors break-words leading-snug">
                  {link.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
