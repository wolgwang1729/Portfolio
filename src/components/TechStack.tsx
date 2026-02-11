'use client'
import { motion } from 'framer-motion'
import { Cpu, Code2, Layers, Boxes } from 'lucide-react'

const skills = {
  Languages: ['C/C++', 'Python', 'Java', 'JavaScript', 'SQL', 'HTML', 'LaTeX'],
  Tools: ['Git/GitHub', 'VS Code', 'Google Cloud Platform', 'AutoCAD'],
  Frameworks: ['React', 'Node.js', 'Flask', 'Tailwind CSS'],
  Libraries: ['PyTorch', 'Detectron2', 'TensorFlow', 'Keras', 'pandas', 'NumPy', 'Matplotlib', 'nltk', 'scikit-learn', 'OpenCV', 'LangChain'],
}

export default function TechStack() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-mono font-bold text-primary mb-12 text-center"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SkillCard 
            title="Languages" 
            icon={<Code2 className="w-6 h-6 text-accent" />} 
            items={skills.Languages} 
            delay={0}
          />
          <SkillCard 
            title="Tools" 
            icon={<Cpu className="w-6 h-6 text-purple-400" />} 
            items={skills.Tools} 
            delay={0.1}
          />
          <SkillCard 
            title="Frameworks" 
            icon={<Layers className="w-6 h-6 text-blue-400" />} 
            items={skills.Frameworks} 
            delay={0.2}
          />
          <SkillCard 
            title="Libraries" 
            icon={<Boxes className="w-6 h-6 text-emerald-400" />} 
            items={skills.Libraries} 
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}

function SkillCard({ title, icon, items, delay }: { title: string, icon: React.ReactNode, items: string[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors group"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-primary">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span 
            key={item} 
            className="px-3 py-1 text-sm text-secondary bg-white/5 rounded-md border border-white/5"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
