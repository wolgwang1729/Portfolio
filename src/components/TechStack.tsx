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
    { name: 'Tailwind-CSS', logoUrl: '/images/tech/tailwindcss.svg' },
    { name: 'LaTeX', logoUrl: '/images/tech/latex.svg' },
    { name: 'SQL', logoUrl: '/images/tech/mysql.svg' },
    { name: 'Bash', logoUrl: '/images/tech/gnubash.svg' },
  ],
  Tools: [
    { name: 'Git/GitHub', logoUrl: '/images/tech/github.svg' },
    { name: 'Docker', logoUrl: '/images/tech/docker.svg' },
    { name: 'Kubernetes', logoUrl: '/images/tech/kubernetes.svg' },
    { name: 'Harness CI/CD', fallbackIcon: <Link2 className="w-3.5 h-3.5 text-secondary" /> },
    { name: 'Google Cloud Platform', logoUrl: '/images/tech/googlecloud.svg' },
    { name: 'Linux', logoUrl: '/images/tech/linux.svg' },
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
    { name: 'FastAPI', logoUrl: '/images/tech/fastapi.svg' },
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
    { name: 'NLTK', fallbackIcon: <Link2 className="w-3.5 h-3.5 text-secondary" /> },
    { name: 'scikit-learn', logoUrl: '/images/tech/scikitlearn.svg' },
    { name: 'OpenCV', logoUrl: '/images/tech/opencv.svg' },
    { name: 'LangChain', logoUrl: '/images/tech/langchain.svg' },
    { name: 'LangGraph', fallbackIcon: <Link2 className="w-3.5 h-3.5 text-secondary" /> },
  ],
}

export default function TechStack() {
  return (
    <section id="skills" className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-3 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-primary tracking-tight">
              Technical Skills
            </h2>
            <p className="text-secondary text-sm sm:text-base max-w-xl leading-relaxed">
              Languages I think in, and the tools, frameworks and libraries I build with.
            </p>
          </div>
          <div className="h-px bg-white/5 mb-12" aria-hidden="true" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
          <SkillCard
            title="Languages"
            icon={<Code2 className="w-5 h-5 text-primary" />}
            items={skills.Languages}
            delay={0}
            showLogos
          />
          <SkillCard
            title="Tools"
            icon={<Cpu className="w-5 h-5 text-primary" />}
            items={skills.Tools}
            delay={0.08}
            showLogos
          />
          <SkillCard
            title="Frameworks"
            icon={<Layers className="w-5 h-5 text-primary" />}
            items={skills.Frameworks}
            delay={0.12}
            showLogos
          />
          <SkillCard
            title="Libraries"
            icon={<Boxes className="w-5 h-5 text-primary" />}
            items={skills.Libraries}
            delay={0.16}
            showLogos
          />
        </div>
      </div>
    </section>
  )
}

function SkillCard({
  title,
  icon,
  items,
  delay,
  showLogos,
}: {
  title: string
  icon: React.ReactNode
  items: SkillItem[]
  delay: number
  showLogos: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors group h-full flex flex-col"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-primary tracking-tight">{title}</h3>
        <span className="ml-auto font-mono text-[11px] text-secondary/50">
          {String(items.length).padStart(2, '0')}
        </span>
      </div>
      {showLogos ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item.name}
              className="flex items-center gap-2 pl-1.5 pr-3 py-1.5 text-[13px] text-secondary bg-white/[0.02] rounded-lg border border-white/5 hover:text-primary hover:border-white/15 transition-colors"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-md bg-white/5 border border-white/10">
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
      ) : (
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span
              key={item.name}
              className="px-3 py-1.5 font-mono text-[13px] text-secondary bg-white/[0.02] rounded-lg border border-white/5 hover:text-primary hover:border-white/15 transition-colors"
            >
              {item.name}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}
