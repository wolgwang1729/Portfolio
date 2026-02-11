'use client'
import { motion } from 'framer-motion'
import { Cpu, Code2, Layers, Boxes, Link2 } from 'lucide-react'

type SkillItem = {
  name: string
  logoUrl?: string
  fallbackIcon?: React.ReactNode
}

const skills: Record<string, SkillItem[]> = {
  Languages: [
    { name: 'C/C++', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cplusplus.svg' },
    { name: 'Python', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg' },
    { name: 'Java', logoUrl: 'https://cdn.iconscout.com/icon/free/png-512/free-java-logo-icon-svg-download-png-2945017.png' },
    { name: 'JavaScript', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg' },
    { name: 'TypeScript', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg' },
    { name: 'HTML', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/html5.svg' },
    { name: 'CSS', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/css3.svg' },
    { name: 'LaTeX', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/latex.svg' },
    { name: 'SQL', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg' },
    { name: 'Bash', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gnubash.svg' },
  ],
  Tools: [
    { name: 'Git/GitHub', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg' },
    { name: 'Google Cloud Platform', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlecloud.svg' },
    { name: 'Postman', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postman.svg' },
    { name: 'Jupyter', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jupyter.svg' },
    { name: 'AutoCAD', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/autodesk.svg' },
  ],
  Frameworks: [
    { name: 'React', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg' },
    { name: 'Node.js', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nodedotjs.svg' },
    { name: 'Next.js', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg' },
    { name: 'Express', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/express.svg' },
    { name: 'Flask', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/flask.svg' },
    { name: 'Tailwind CSS', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tailwindcss.svg' },
  ],
  Libraries: [
    { name: 'PyTorch', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pytorch.svg' },
    { name: 'Detectron2', logoUrl: '/Detectron2-Logo-Horz-cropped.svg' },
    { name: 'TensorFlow', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tensorflow.svg' },
    { name: 'Keras', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/keras.svg' },
    { name: 'pandas', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pandas.svg' },
    { name: 'NumPy', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/numpy.svg' },
    { name: 'Matplotlib', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/330px-Matplotlib_icon.svg.png' },
    { name: 'nltk', fallbackIcon: <Link2 className="w-3.5 h-3.5 text-secondary" /> },
    { name: 'scikit-learn', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/scikitlearn.svg' },
    { name: 'OpenCV', logoUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/opencv.svg' },
    { name: 'LangChain', logoUrl: 'https://cdn.simpleicons.org/langchain' },
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
                <img
                  src={item.logoUrl}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
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
