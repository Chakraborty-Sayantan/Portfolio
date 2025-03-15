"use client"

import { MarqueeAnimation } from '@/components/ui/marquee-effect'

export default function MarqueeSection() {
  return (
    <section className="py-8 bg-white dark:bg-neutral-950">
      <div className="flex flex-col gap-4">
        <MarqueeAnimation
          direction="left"
          baseVelocity={-3}
          className="bg-blue-500/10 dark:bg-blue-500/20 text-neutral-900 dark:text-white py-2 text-2xl"
        >
          React.js • Next.js • TypeScript • Node.js • MongoDB • Express.js
        </MarqueeAnimation>
        <MarqueeAnimation
          direction="right"
          baseVelocity={-3}
          className="bg-blue-500/10 dark:bg-blue-500/20 text-neutral-900 dark:text-white py-2 text-2xl"
        >
          Tailwind CSS • Redux • REST APIs • Git • JavaScript • HTML • CSS
        </MarqueeAnimation>
      </div>
    </section>
  )
} 