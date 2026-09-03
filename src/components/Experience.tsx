'use client'
import { Timeline } from '@/components/ui/timeline'

export default function Experience() {
  const data = [
    {
      title: 'May 2026',
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
            Open Source Developer
          </h3>
          <p className="text-accent text-sm font-mono mb-4">
            @Summer of Bitcoin (SeedSigner) • May 2026 — Aug 2026
          </p>
          <p className="mb-4 text-xs md:text-sm font-normal text-neutral-400">
            Developed a stateless secure bootloader for ESP32-P4 (RISC-V) and
            ESP32-S3 (Xtensa) to verify and execute MicroPython directly from
            SD into PSRAM via Cache MMU remapping, preventing secret
            persistence in flash.
          </p>
          <ul className="mb-4 list-disc list-inside space-y-1 text-xs md:text-sm text-neutral-400">
            <li>Stateless secure bootloader (ESP32-P4 &amp; S3)</li>
            <li>FreeRTOS early-boot deadlock &amp; cache coherency fixes</li>
            <li>TRNG-based 4-word BIP-39 visual anti-phishing proof</li>
            <li>Validated against 16 hardware attack vectors</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'May 2026',
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
            Technology Program Intern
          </h3>
          <p className="text-accent text-sm font-mono mb-4">
            @Wells Fargo, Hyderabad • May 2026 — Jul 2026
          </p>
          <p className="mb-4 text-xs md:text-sm font-normal text-neutral-400">
            Built a full-stack agentic intake workflow using React, FastAPI,
            and LangGraph to automate L3 data application triage, cutting
            initial Jira screening from 10+ days to near-instant validation.
          </p>
          <ul className="mb-4 list-disc list-inside space-y-1 text-xs md:text-sm text-neutral-400">
            <li>11-stage autonomous request lifecycle pipeline</li>
            <li>Automated Data Warehouse Design workbooks &amp; QA SQL packs</li>
            <li>Kubernetes release via GitHub Actions &amp; Harness CI/CD</li>
            <li>Role-based admin dashboard with SSE realtime tracking</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Oct 2025',
      content: (
        <div>
          <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
            Web Dev Intern
          </h3>
          <p className="text-accent text-sm font-mono mb-4">
            @DTU-IQAC • Oct 2025 — Mar 2026
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
            @MLR, DTU (Vision-based Pose Estimation) • Jun 2025 — Dec 2025
          </p>
          <p className="mb-4 text-xs md:text-sm font-normal text-neutral-400">
            Developed 5+ deep learning models for vision-based pose estimation
            of non-cooperative satellites using PyTorch, experimenting on the
            SPEED and SPEED+ datasets.
          </p>
          <ul className="mb-4 list-disc list-inside space-y-1 text-xs md:text-sm text-neutral-400">
            <li>SPN, PVNet, ViT Pose &amp; SWIN Transformer implementations</li>
            <li>RANSAC + Perspective-n-Point solver</li>
            <li>Novel SWIN-based pixel-voting decoder mechanism</li>
            <li>SPEED &amp; SPEED+ hardware-in-the-loop experiments</li>
          </ul>
        </div>
      ),
    },
  ]

  return (
    <section id="experience" className="relative w-full overflow-clip mb-20 scroll-mt-20">
      <Timeline data={data} />
    </section>
  )
}
