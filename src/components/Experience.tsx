'use client'
import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import { Briefcase } from 'lucide-react'

export default function Experience() {
  const data = [
    {
      title: 'Oct 2025',
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
            Web Dev Intern
          </h3>
          <p className="text-accent text-sm font-mono mb-4">
            @DTU-IQAC • Oct 2025 — Dec 2025
          </p>
          <p className="mb-4 text-xs md:text-sm font-normal text-neutral-400">
            Co-developed a MERN IQAC data suite for 15+ departments (500+
            faculty users) and a 3-tier APAR workflow with JWT auth, RBAC, and
            Socket.io-powered realtime updates with automated pre-fill from IQAC
            DB.
          </p>
          <ul className="mb-4 list-disc list-inside space-y-1 text-xs md:text-sm text-neutral-400">
            <li>MERN stack data management suite</li>
            <li>3-tier APAR workflow system</li>
            <li>JWT auth &amp; RBAC implementation</li>
            <li>Socket.io realtime updates</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Jun 2025',
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
            Research Intern
          </h3>
          <p className="text-accent text-sm font-mono mb-4">
            @DTU-ISRO (Vision-based Pose Estimation) • Jun 2025 — Aug 2025
          </p>
          <p className="mb-4 text-xs md:text-sm font-normal text-neutral-400">
            Built 5+ deep learning pipelines (SPN, PVNet, ViT Pose, SWIN) for
            6-DoF non-cooperative satellite pose estimation on SPEED/SPEED+ with
            RANSAC + PnP; prototyped SWIN-based pixel voting decoder.
          </p>
          <ul className="mb-4 list-disc list-inside space-y-1 text-xs md:text-sm text-neutral-400">
            <li>SPN &amp; PVNet pipelines</li>
            <li>ViT Pose &amp; SWIN implementations</li>
            <li>RANSAC + PnP integration</li>
            <li>SWIN-based pixel voting decoder prototype</li>
          </ul>
        </div>
      ),
    },
  ]

  return (
    <section id="experience" className="relative w-full overflow-clip mb-20">
      <Timeline data={data} />
    </section>
  )
}
