'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="about" className="py-20 px-4 md:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-primary mb-8 text-center">About Me</h2>
        
        <div className="space-y-6 text-lg text-secondary leading-relaxed">
          <p>
            Since I was young, I've been fascinated by how things are built, how they work, and the components that make them function. Initially drawn to mechanical objects, my curiosity shifted to tech, and that's when I knew the path I wanted to take. Oh, and if you're wondering, <span className="text-accent font-semibold">wolgwang</span> is my code name.
          </p>

          <p>
            I'm currently a pre-final year student, pursuing a Bachelor of Technology in Computer Science at Delhi Technological University. I'm passionate about creating AI solutions to solve real-world problems, and I have experience with transformers, RNNs, LSTMs, object detection, object segmentation, and computer vision. I'm also skilled in web development, using tools like Tailwind, JavaScript, and React.
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-6 overflow-hidden"
              >
                <blockquote className="border-l-4 border-accent pl-4 italic text-primary/80 my-6">
                  Lao Tzu's philosophy, "If you tell me, I will listen. If you show me, I will see. But if you let me experience, I will learn," shapes my approach to learning and problem-solving.
                </blockquote>

                <p>
                  I believe in hands-on experience, diving into the work, experimenting, and learning through action.
                </p>

                <p>
                  That drive to 'learn by doing' also fuels my desire to give back. I believe technology is most powerful when it uplifts others, which led me to build a Mentoring Portal to provide career guidance for underprivileged students. I also actively contribute to the open-source community (recently added features to <a href="https://github.com/nn-svg/nn-svg" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">NN-SVG</a>) because I want to pay forward the knowledge that the community freely gave to me.
                </p>

                <p>
                  I'm committed to solving problems, with a strong focus and determination that my friends often describe as that of a "committed geek." Though this might not be obvious in an interview, anyone who's worked with me closely would see my dedication and persistence until the task is completed.
                </p>

                <p>
                  In my free time, I enjoy exploring new things, reading research papers, tinkering with PyTorch code (sometimes banging my head on the wall, but determined to fix it), building websites, or listening to music while my model trains. I also love competitive programming on Codeforces, not as an expert but because it's fun and keeps my grey matter in shape. Sometimes, I might be having long discussions with someone about some topic – I remember back in 11th grade, I used to have lengthy talks just to understand a vague derivation in physics.
                </p>

                <p>
                  I've been fortunate to receive recognition such as being a National Talent Search Examination (NTSE) Scholar, earning the Reliance Foundation Undergraduate Scholarship, and receiving the CBSE Certificate of Merit in Mathematics for securing the highest marks in the 2023 CBSE All India Secondary School Examination. (I know marks don't matter and they don't always reflect true passion or interest but I want to emphasize that I am genuinely passionate about mathematics. You can check my <a href="https://math.stackexchange.com/users/820922/wolgwang" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">Math Stack Exchange</a> ^_^)
                </p>

                <p>
                  If you've read this far, thank you! I believe every person teaches you something, and I'd love to connect with you. Feel free to reach out if there are opportunities where I could contribute, collaborate, or learn from you.:)
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-center mt-6">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-2 text-sm font-medium text-primary bg-surface/50 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
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
    </section>
  )
}
