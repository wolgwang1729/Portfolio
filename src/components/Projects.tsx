'use client'
import Image, { type StaticImageData } from 'next/image'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'

import nnSvg from '../../public/images/projects/nn-svg.png'
import vulcan16 from '../../public/images/projects/vulcan-16.png'
import mentoringPortal from '../../public/images/projects/mentoring-portal.png'
import intOView from '../../public/images/projects/int-o-view.png'
import lungCancer from '../../public/images/projects/lung-cancer.png'
import summerMlProjects from '../../public/images/projects/summer-ml-projects.jpg'

type Project = {
  title: string
  description: string
  tags: string[]
  image: StaticImageData
  links: { github?: string; demo?: string }
  highlight: string
}

const projects: Project[] = [
  {
    title: 'Open Source: NN-SVG',
    description: 'Shipped a feature to NN-SVG (5.6k+ stars) that lets researchers upload custom textures for input layers in publication-ready neural network diagrams.',
    tags: ['JavaScript', 'Three.js', 'OSS'],
    image: nnSvg,
    links: { github: 'https://github.com/alexlenail/NN-SVG/pull/68', demo: 'https://alexlenail.me/NN-SVG/AlexNet.html' },
    highlight: 'OSS Feature'
  },
  {
    title: 'Vulcan-16',
    description: 'Built a 16-bit Harvard-architecture CPU with core logic, memory, I/O, and a three-phase compiler plus web IDE. Bundled an OS with 8 modular services for memory, graphics, and utilities.',
    tags: ['HDL', 'Compiler', 'Systems'],
    image: vulcan16,
    links: { github: 'https://github.com/wolgwang1729/Vulcan-16', demo: 'https://vulcan-16.vercel.app/' },
    highlight: 'HDL + Compiler'
  },
  {
    title: 'Mentoring Portal',
    description: 'Full-stack mentorship portal with secure mentor-student engagement, Q&A forums, and resource library for 5 competitive exams; deployed for 50+ underprivileged students.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: mentoringPortal,
    links: { github: 'https://github.com/wolgwang1729/MentoringPortal', demo: 'https://mentoring-portal-one.vercel.app/' },
    highlight: 'Deployed Portal'
  },
  {
    title: 'Int-O-View',
    description: 'AI-agent interviewer using Gemma 2, Qwen QwQ, and ElevenLabs; LangGraph + Supabase embeddings for contextual Q&A; powered 100 real-time simulations and won 1st SIH internal round.',
    tags: ['LangChain', 'React', 'Flask'],
    image: intOView,
    links: { github: 'https://github.com/wolgwang1729/Int-O-View', demo: 'https://int-o-view.vercel.app/' },
    highlight: 'Won Internal SIH'
  },
  {
    title: 'Lung Cancer Detection',
    description: 'Two-stage pipeline: Cascaded Mask R-CNN (lung segmentation on VESSEL12) + Faster R-CNN for nodules with five radiological attributes; achieved 93.62% bbox accuracy and AP50 up to 24.97.',
    tags: ['PyTorch', 'Detectron2', 'Medical AI'],
    image: lungCancer,
    links: { github: 'https://github.com/wolgwang1729/LungCancerDetection' },
    highlight: '93.62% BBox'
  },
  {
    title: 'Summer ML Projects',
    description: 'Collection of 7 builds: GPT-2 from scratch, Vision Transformer, and three CNN+RNN image captioning models implementing “Where to put the Image in an Image Caption Generator” on Flickr8k.',
    tags: ['Transformers', 'PyTorch', 'Research'],
    image: summerMlProjects,
    links: { github: 'https://github.com/wolgwang1729/Summer-ML-Projects' },
    highlight: '7 ML Builds'
  }
]

function displayHost(url?: string) {
  if (!url) return null
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url.replace(/^https?:\/\//, '').split('/')[0]
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const number = String(index + 1).padStart(2, '0')
  const host = displayHost(project.links.demo) ?? displayHost(project.links.github)
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-surface border border-white/5 hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        {host && (
          <span className="truncate font-mono text-[11px] text-secondary/60">{host}</span>
        )}
        <span className="ml-auto font-mono text-[11px] text-secondary/40 shrink-0">{number}</span>
      </div>
      <div className="relative overflow-hidden border-b border-white/5 bg-[#101010]">
        <div className="relative aspect-[2/1] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            placeholder="blur"
            className="h-full w-full object-cover object-top brightness-[0.96] contrast-[0.98] transition-all duration-500 ease-out group-hover:brightness-100 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden="true" />
        </div>
      </div>

      <div className="flex flex-col grow p-6">
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="truncate text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded-md border border-accent/20">
            {project.highlight}
          </span>
          <div className="flex items-center gap-1 shrink-0">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} on GitHub`}
                className="p-2 rounded-full text-secondary hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} live demo`}
                className="p-2 rounded-full text-secondary hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg font-bold text-primary mb-2 tracking-tight">{project.title}</h3>
        <p className="text-secondary text-sm leading-relaxed mb-2">{project.description}</p>

        <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-auto pt-4" aria-label={`${project.title} tech stack`}>
          {project.tags.map((tag, i) => (
            <li key={tag} className="flex items-center gap-2 font-mono text-xs text-secondary/80">
              {i > 0 && (
                <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
              )}
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </motion.li>
  )
}

export default function Projects() {
  const featuredProjects = projects.slice(0, 4)
  const remainingProjects = projects.slice(4)
  const [showMore, setShowMore] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <section id="projects" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 font-mono text-xs text-accent bg-accent/10 border border-accent/20 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
            Selected Work · 06
          </div>
          <div className="flex flex-col gap-3 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-primary tracking-tight">
              Featured Projects
            </h2>
            <p className="text-secondary text-sm sm:text-base max-w-xl leading-relaxed">
              Systems, vision and full-stack builds. Each one shipped, deployed or merged.
            </p>
          </div>
          <div className="h-px bg-white/5 mb-12" aria-hidden="true" />
        </motion.div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </ul>

        <AnimatePresence
          onExitComplete={() => {
            if (!showMore) {
              buttonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          }}
        >
          {showMore && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {remainingProjects.map((project, i) => (
                  <ProjectCard key={project.title} project={project} index={featuredProjects.length + i} />
                ))}
              </ul>
              <div className="flex justify-center mt-8">
                <a
                  href="https://github.com/wolgwang1729?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-sm text-secondary hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4 text-accent" />
                  Browse the full archive on GitHub
                  <ExternalLink className="w-4 h-4 text-secondary group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center mt-10">
          <button
            ref={buttonRef}
            type="button"
            onClick={() => setShowMore(!showMore)}
            aria-expanded={showMore}
            className="inline-flex items-center justify-center gap-2 px-6 py-2 text-sm font-medium text-primary bg-surface/50 border border-white/10 rounded-full hover:bg-white/10 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          >
            {showMore ? (
              <>
                See Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                See More <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}
