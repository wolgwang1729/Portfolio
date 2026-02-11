'use client'
import { motion } from 'framer-motion'
import { Link2, Target, Trophy, Star, Medal } from 'lucide-react'

const contactProfiles = [
  { name: 'GitHub', href: 'https://github.com/wolgwang', icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/mayankyadav8', icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg' },
  { name: 'Kaggle', href: 'https://www.kaggle.com/wolgwang', icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/kaggle.svg' },
  { name: 'Stack Overflow', href: 'https://stackoverflow.com/users/14219194/wolgwang', icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg' },
]

const cpProfiles = [
  { name: 'Codeforces', href: 'https://codeforces.com/profile/wolgwang', icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg' },
  { name: 'LeetCode', href: 'https://www.leetcode.com/wolgwang', icon: 'https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg' },
  { name: 'AtCoder', href: 'https://atcoder.jp/users/wolgwang', icon: 'https://img.atcoder.jp/logo/atcoder/logo_white.png' },
  { name: 'CodeChef', href: 'https://www.codechef.com/users/wolgwang', icon: 'https://cdn.brandfetch.io/idM2-b7Taf/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1767029469434' },
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
                  <img src={profile.icon} alt={profile.name} className="w-8 h-8" />
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
                  <img src={profile.icon} alt={profile.name} className="w-8 h-8" />
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
               <Trophy className="w-6 h-6 text-yellow-400" />
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
              <Medal className="w-6 h-6 text-amber-300" />
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
