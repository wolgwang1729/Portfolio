'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Link2, Target, Shield, Star, Hexagon } from 'lucide-react'

const contactProfiles = [
  { name: 'GitHub', href: 'https://github.com/wolgwang', icon: '/images/profiles/github.svg' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/mayankyadav8', icon: '/images/profiles/linkedin.svg' },
  { name: 'Kaggle', href: 'https://www.kaggle.com/wolgwang', icon: '/images/profiles/kaggle.svg' },
  { name: 'Stack Overflow', href: 'https://stackoverflow.com/users/14219194/wolgwang', icon: '/images/profiles/stack-overflow.svg' },
]

const cpProfiles = [
  { name: 'Codeforces', href: 'https://codeforces.com/profile/wolgwang', icon: '/images/profiles/codeforces.svg' },
  { name: 'LeetCode', href: 'https://www.leetcode.com/wolgwang', icon: '/images/profiles/leet-code.svg' },
  { name: 'AtCoder', href: 'https://atcoder.jp/users/wolgwang', icon: '/images/profiles/atcoder.png' },
  { name: 'CodeChef', href: 'https://www.codechef.com/users/wolgwang', icon: '/images/profiles/codechef.jpeg' },
]

const achievements = [
  {
    title: 'Reliance Foundation Undergraduate Scholar',
    detail: 'Selected among 5,000 nationwide for academic support and leadership development.'
  },
  {
    title: 'CBSE Certificate of Merit (Mathematics)',
    detail: 'Scored 100/100 in Math; ranked in the top 0.1% in the 2023 AISSE.'
  },
  {
    title: 'NTSE Scholar',
    detail: 'National scholarship recipient; top-1000 nationwide.'
  }
  ,{
    title: 'SIH Internal Round Winner',
    detail: 'Collaborated in a 5-member team to win the SIH internal round, surpassing 200+ competing teams.'
  }
]

export default function Profiles() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl space-y-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* My Profiles */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-mono font-bold text-primary mb-6 flex items-center gap-2"
            >
              <Link2 className="w-6 h-6 text-accent" />
              My Profiles
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactProfiles.map((profile, i) => (
                <motion.a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all"
                >
                  <Image src={profile.icon} alt={profile.name} width={32} height={32} className="w-8 h-8" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-primary">{profile.name}</span>
                    <span className="text-xs text-secondary">Connect</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Competitive Programming Profiles */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-mono font-bold text-primary mb-6 flex items-center gap-2"
            >
              <Target className="w-6 h-6 text-accent" />
              Competitive Programming Profiles
            </motion.h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cpProfiles.map((profile, i) => (
                <motion.a
                  key={profile.name}
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-surface border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all"
                >
                  <Image src={profile.icon} alt={profile.name} width={32} height={32} className="w-8 h-8" />
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-primary">{profile.name}</span>
                    <span className="text-xs text-secondary">View Profile</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Positions of Responsibility */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-mono font-bold text-primary mb-8 flex items-center gap-2"
             >
               <Shield className="w-6 h-6 text-accent" />
               Positions of Responsibility
             </motion.h3>
             
             <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="p-6 rounded-2xl bg-surface border-l-4 border-accent"
             >
               <h4 className="text-lg font-bold text-primary flex items-center gap-2">
                 <Star className="w-4 h-4 text-accent fill-accent" />
                 AlgoRave Contest Coordinator
               </h4>
               <p className="text-secondary mt-2 text-sm">
                 Authored and validated problems for 3+ Codeforces contests on Polygon, wrote 2+ editorials, and organized events for 100+ participants to grow the campus CP culture.
               </p>
             </motion.div>
          </div>

          {/* Achievements */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-mono font-bold text-primary mb-6 flex items-center gap-2"
            >
              <Hexagon className="w-6 h-6 text-accent" />
              Achievements
            </motion.h3>
            <div className="grid sm:grid-cols-1 gap-4">
              {achievements.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-4 rounded-xl bg-surface border border-white/5 hover:border-white/15 transition-colors"
                >
                  <p className="text-sm font-semibold text-primary leading-snug">{item.title}</p>
                  <p className="text-xs text-secondary mt-2 leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
