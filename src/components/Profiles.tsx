'use client'
import Image from 'next/image'
import { motion } from 'motion/react'
import { Link2, Target, Shield, Hexagon, Star, ArrowUpRight } from 'lucide-react'

const contactProfiles = [
  { name: 'GitHub', href: 'https://github.com/wolgwang1729', icon: '/images/profiles/github.svg' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/mayankyadav8', icon: '/images/profiles/linkedin.svg' },
  { name: 'Kaggle', href: 'https://www.kaggle.com/wolgwang', icon: '/images/profiles/kaggle.svg' },
  { name: 'Stack Overflow', href: 'https://stackoverflow.com/users/14219194/wolgwang', icon: '/images/profiles/stack-overflow.svg' },
]

const cpProfiles = [
  { name: 'Codeforces', href: 'https://codeforces.com/profile/wolgwang', icon: '/images/profiles/codeforces.svg' },
  { name: 'LeetCode', href: 'https://leetcode.com/u/wolgwang', icon: '/images/profiles/leet-code.svg' },
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

function displayHost(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url.replace(/^https?:\/\//, '').split('/')[0]
  }
}

function Panel({
  icon,
  title,
  children,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors p-6 flex flex-col"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-lg bg-white/5">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-primary tracking-tight">{title}</h3>
      </div>
      {children}
    </motion.div>
  )
}

function ProfileLink({ name, href, icon }: { name: string; href: string; icon: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Open ${name} profile`}
      className="group flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/5 transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 overflow-hidden shrink-0">
        <Image src={icon} alt={`${name} logo`} width={24} height={24} className="w-6 h-6 object-contain" />
      </span>
      <span className="flex flex-col min-w-0">
        <span className="text-sm font-semibold text-primary truncate">{name}</span>
        <span className="font-mono text-[11px] text-secondary/60 truncate">{displayHost(href)}</span>
      </span>
      <ArrowUpRight className="w-4 h-4 ml-auto text-secondary/40 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
    </a>
  )
}

export default function Profiles() {
  return (
    <section className="py-20 px-4 scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-3 mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold text-primary tracking-tight">
              Profiles and Recognition
            </h2>
            <p className="text-secondary text-sm sm:text-base max-w-xl leading-relaxed">
              Find me online, compete with me, and see what the journey has picked up along the way.
            </p>
          </div>
          <div className="h-px bg-white/5 mb-12" aria-hidden="true" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <Panel title="Online Profiles" icon={<Link2 className="w-5 h-5 text-primary" />} delay={0}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactProfiles.map((profile) => (
                <ProfileLink key={profile.name} {...profile} />
              ))}
            </div>
          </Panel>

          <Panel title="Competitive Programming" icon={<Target className="w-5 h-5 text-primary" />} delay={0.08}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cpProfiles.map((profile) => (
                <ProfileLink key={profile.name} {...profile} />
              ))}
            </div>
          </Panel>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Panel title="Positions of Responsibility" icon={<Shield className="w-5 h-5 text-primary" />} delay={0}>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-4 h-4 text-accent fill-accent shrink-0" />
                <h4 className="font-bold text-primary leading-snug">AlgoRave Contest Coordinator</h4>
              </div>
              <p className="font-mono text-[11px] text-secondary/60 mb-3">Codeforces · Polygon</p>
              <p className="text-secondary text-sm leading-relaxed">
                Authored and validated problems for 3+ Codeforces contests on Polygon, wrote 2+ editorials, and organized events for 100+ participants to grow the campus CP culture.
              </p>
            </div>
          </Panel>

          <Panel title="Achievements" icon={<Hexagon className="w-5 h-5 text-primary" />} delay={0.08}>
            <ul className="divide-y divide-white/5">
              {achievements.map((item) => (
                <li key={item.title} className="py-3 first:pt-0 last:pb-0">
                  <p className="text-sm font-semibold text-primary leading-snug">{item.title}</p>
                  <p className="text-xs text-secondary mt-1 leading-relaxed">{item.detail}</p>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </section>
  )
}
