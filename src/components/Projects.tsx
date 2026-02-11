'use client'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Cpu, Activity, User, Sparkles, Brain, Layers } from 'lucide-react'

const projects = [
  {
    title: 'Open Source: NN-SVG',
    description: 'Shipped a feature to NN-SVG (5.6k+ stars) that lets researchers upload custom textures for input layers in publication-ready neural network diagrams.',
    tags: ['JavaScript', 'Three.js', 'OSS'],
    icon: <Sparkles className="w-6 h-6 text-accent" />,
    links: { github: 'https://github.com/alexlenail/NN-SVG/pull/68', demo: 'https://alexlenail.me/NN-SVG/AlexNet.html' },
    highlight: 'OSS Feature'
  },
  {
    title: 'Vulcan-16',
    description: 'Built a 16-bit Harvard-architecture CPU with core logic, memory, I/O, and a three-phase compiler plus web IDE. Bundled an OS with 8 modular services for memory, graphics, and utilities.',
    tags: ['HDL', 'Compiler', 'Systems'],
    icon: <Cpu className="w-6 h-6 text-orange-400" />,
    links: { github: 'https://github.com/wolgwang1729/Vulcan-16', demo: 'https://vulcan-16.vercel.app/' },
    highlight: 'HDL + Compiler'
  },
  {
    title: 'Mentoring Portal',
    description: 'Full-stack mentorship portal with secure mentor-student engagement, Q&A forums, and resource library for 5 competitive exams; deployed for 50+ underprivileged students.',
    tags: ['React', 'Node.js', 'MongoDB'],
    icon: <Layers className="w-6 h-6 text-sky-400" />,
    links: { github: 'https://github.com/wolgwang1729/MentoringPortal', demo: 'https://mentoring-portal-one.vercel.app/' },
    highlight: 'Deployed Portal'
  },
  {
    title: 'Int-O-View',
    description: 'AI-agent interviewer using Gemma 2, Qwen QwQ, and ElevenLabs; LangGraph + Supabase embeddings for contextual Q&A; powered 100 real-time simulations and won 1st place in SIH internal round.',
    tags: ['LangChain', 'React', 'Flask'],
    icon: <User className="w-6 h-6 text-blue-400" />,
    links: { github: 'https://github.com/wolgwang1729/Int-O-View', demo: 'https://int-o-view.vercel.app/' },
    highlight: '1st Place SIH'
  },
  {
    title: 'Lung Cancer Detection',
    description: 'Two-stage pipeline: Cascaded Mask R-CNN (lung segmentation on VESSEL12) + Faster R-CNN for nodules with five radiological attributes; achieved 93.62% bbox accuracy and AP50 up to 24.97.',
    tags: ['PyTorch', 'Detectron2', 'Medical AI'],
    icon: <Activity className="w-6 h-6 text-red-400" />,
    links: { github: 'https://github.com/wolgwang1729/LungCancerDetection' },
    highlight: '93.62% BBox'
  },
  {
    title: 'Summer ML Projects',
    description: 'Collection of 7 builds: GPT-2 from scratch, Vision Transformer, and three CNN+RNN image captioning models implementing “Where to put the Image in an Image Caption Generator” on Flickr8k.',
    tags: ['Transformers', 'PyTorch', 'Research'],
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    links: { github: 'https://github.com/wolgwang1729/Summer-ML-Projects' },
    highlight: '7 ML Builds'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white/5">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-mono font-bold text-primary mb-12 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col p-6 rounded-2xl bg-surface border border-white/5 hover:border-accent/20 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    {project.icon}
                  </div>
                  <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.highlight}
                  </span>
                </div>
                <div className="flex gap-3">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors"><Github className="w-5 h-5"/></a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-white transition-colors"><ExternalLink className="w-5 h-5"/></a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-secondary text-sm mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-secondary border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
