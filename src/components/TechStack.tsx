'use client'
import { motion } from 'motion/react'
import { Cpu, Code2, Layers, Boxes, Link2 } from 'lucide-react'
import Image from 'next/image'

type SkillItem = {
  name: string
  logoUrl?: string
  fallbackIcon?: React.ReactNode
}

const skills: Record<string, SkillItem[]> = {
  Languages: [
    { name: 'C/C++', logoUrl: '/images/tech/cplusplus.svg' },
    { name: 'Python', logoUrl: '/images/tech/python.svg' },
    { name: 'Java', logoUrl: '/images/tech/java.png' },
    { name: 'JavaScript', logoUrl: '/images/tech/javascript.svg' },
    { name: 'TypeScript', logoUrl: '/images/tech/typescript.svg' },
    { name: 'HTML', logoUrl: '/images/tech/html5.svg' },
    { name: 'CSS', logoUrl: '/images/tech/css3.svg' },
    { name: 'LaTeX', logoUrl: '/images/tech/latex.svg' },
    { name: 'SQL', logoUrl: '/images/tech/mysql.svg' },
    { name: 'Bash', logoUrl: '/images/tech/gnubash.svg' },
  ],
  Tools: [
    { name: 'Git/GitHub', logoUrl: '/images/tech/github.svg' },
    { name: 'Google Cloud Platform', logoUrl: '/images/tech/googlecloud.svg' },
    { name: 'Postman', logoUrl: '/images/tech/postman.svg' },
    { name: 'Jupyter', logoUrl: '/images/tech/jupyter.svg' },
    { name: 'AutoCAD', logoUrl: '/images/tech/autodesk.svg' },
  ],
  Frameworks: [
    { name: 'React', logoUrl: '/images/tech/react.svg' },
    { name: 'Node.js', logoUrl: '/images/tech/nodedotjs.svg' },
    { name: 'Next.js', logoUrl: '/images/tech/nextdotjs.svg' },
    { name: 'Express', logoUrl: '/images/tech/express.svg' },
    { name: 'Flask', logoUrl: '/images/tech/flask.svg' },
    { name: 'Tailwind CSS', logoUrl: '/images/tech/tailwindcss.svg' },
  ],
  Libraries: [
    { name: 'PyTorch', logoUrl: '/images/tech/pytorch.svg' },
    { name: 'Detectron2', logoUrl: '/images/tech/detectron2.svg' },
    { name: 'TensorFlow', logoUrl: '/images/tech/tensorflow.svg' },
    { name: 'Keras', logoUrl: '/images/tech/keras.svg' },
    { name: 'pandas', logoUrl: '/images/tech/pandas.svg' },
    { name: 'NumPy', logoUrl: '/images/tech/numpy.svg' },
    { name: 'Matplotlib', logoUrl: '/images/tech/matplotlib.png' },
    { name: 'nltk', fallbackIcon: <Link2 className="w-3.5 h-3.5 text-secondary" /> },
    { name: 'scikit-learn', logoUrl: '/images/tech/scikitlearn.svg' },
    { name: 'OpenCV', logoUrl: '/images/tech/opencv.svg' },
    { name: 'LangChain', logoUrl: '/images/tech/langchain.svg' },
  ],
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
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
            icon={<Boxes className="w-6 h-6 text-accent" />} 
            items={skills.Libraries} 
            delay={0.3}
          />
        </div>
      </div>
    </section>
  )
}

function SkillCard({ title, icon, items, delay }: { title: string, icon: React.ReactNode, items: SkillItem[], delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors group h-full flex flex-col"
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
            key={item.name} 
            className="flex items-center gap-2 px-3 py-1 text-sm text-secondary bg-white/5 rounded-md border border-white/5"
          >
            <span className="flex items-center justify-center w-5 h-5 rounded bg-white/10 border border-white/10">
              {item.logoUrl ? (
                <Image
                  src={item.logoUrl}
                  alt={`${item.name} logo`}
                  width={14}
                  height={14}
                  className="w-3.5 h-3.5 brightness-0 invert"
                />
              ) : (
                item.fallbackIcon
              )}
            </span>
            {item.name}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
