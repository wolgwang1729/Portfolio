'use client'

import { motion, AnimatePresence } from 'motion/react'
import { useState, useRef } from 'react'
import { ChevronDown, ChevronUp, Quote } from 'lucide-react'

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary/60 pt-2">
      {children}
    </p>
  )
}

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  return (
    <section id="about" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-primary tracking-tight mb-6">
            About Me
          </h2>
          <div className="h-px bg-white/5 mb-10" aria-hidden="true" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <div className="space-y-6 leading-relaxed">
            <p className="text-lg sm:text-xl text-primary/90 leading-relaxed">
              Since I was young, I&rsquo;ve been fascinated by how things are built, how they work, and the components that make them function. Initially drawn to mechanical objects, my curiosity shifted to tech, and that&rsquo;s when I knew the path I wanted to take. Oh, and if you&rsquo;re wondering, <span className="font-mono text-accent">wolgwang</span> is my code name.
            </p>

            <p className="text-base sm:text-lg text-secondary leading-relaxed">
              I&rsquo;m currently a final year student, pursuing a Bachelor of Technology in Computer Science at Delhi Technological University. I&rsquo;m passionate about creating AI solutions to solve real-world problems, and I have experience with transformers, RNNs, LSTMs, object detection, object segmentation, and computer vision. I&rsquo;m also skilled in web development, using tools like Tailwind, JavaScript, and React.
            </p>

            <AnimatePresence onExitComplete={() => {
              if (!isExpanded) {
                buttonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
              }
            }}>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-6 pt-2 text-base sm:text-lg text-secondary leading-relaxed">
                    <figure className="rounded-2xl bg-surface border border-white/5 p-6">
                      <Quote className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
                      <blockquote className="text-primary/90 leading-relaxed">
                        Lao Tzu&apos;s philosophy, &ldquo;If you tell me, I will listen. If you show me, I will see. But if you let me experience, I will learn,&rdquo; shapes my approach to learning and problem-solving.
                      </blockquote>
                      <figcaption className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary/60 mt-4">
                        Lao Tzu
                      </figcaption>
                    </figure>

                    <div className="space-y-2">
                      <Kicker>How I learn</Kicker>
                      <p>
                        I believe in hands-on experience, diving into the work, experimenting, and learning through action.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Kicker>Giving back</Kicker>
                      <p>
                        That drive to &lsquo;learn by doing&rsquo; also fuels my desire to give back. I believe technology is most powerful when it uplifts others, which led me to build a Mentoring Portal to provide career guidance for underprivileged students. I also actively contribute to the open-source community (recently added features to <a href="https://github.com/nn-svg/nn-svg" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">NN-SVG</a>) because I want to pay forward the knowledge that the community freely gave to me.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Kicker>How I work</Kicker>
                      <p>
                        I&rsquo;m committed to solving problems, with a strong focus and determination that my friends often describe as that of a &ldquo;committed geek.&rdquo; Though this might not be obvious in an interview, anyone who&rsquo;s worked with me closely would see my dedication and persistence until the task is completed.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Kicker>Off the clock</Kicker>
                      <p>
                        In my free time, I enjoy exploring new things, reading research papers, tinkering with PyTorch code (sometimes banging my head on the wall, but determined to fix it), building websites, or listening to music while my model trains. I also love competitive programming on Codeforces, not as an expert but because it&rsquo;s fun and keeps my grey matter in shape. Sometimes, I might be having long discussions with someone about some topic. I remember back in 11th grade, I used to have lengthy talks just to understand a vague derivation in physics.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Kicker>Recognition</Kicker>
                      <p>
                        I&rsquo;ve been fortunate to receive recognition such as being a National Talent Search Examination (NTSE) Scholar, earning the Reliance Foundation Undergraduate Scholarship, and receiving the CBSE Certificate of Merit in Mathematics for securing the highest marks in the 2023 CBSE All India Secondary School Examination. (I know marks don&rsquo;t matter and they don&rsquo;t always reflect true passion or interest but I want to emphasize that I am genuinely passionate about mathematics. You can check my <a href="https://math.stackexchange.com/users/820922/wolgwang" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Math Stack Exchange</a> ^_^)
                      </p>
                    </div>

                    <p className="text-primary/90">
                      If you&rsquo;ve read this far, thank you! I believe every person teaches you something, and I&rsquo;d love to connect with you. Feel free to reach out if there are opportunities where I could contribute, collaborate, or learn from you. :)
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-center pt-2">
              <button
                ref={buttonRef}
                onClick={() => setIsExpanded(!isExpanded)}
                aria-expanded={isExpanded}
                className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-primary bg-surface/50 border border-white/10 rounded-full hover:bg-white/10 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              >
                {isExpanded ? (
                  <>
                    Read Less <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Read More <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
