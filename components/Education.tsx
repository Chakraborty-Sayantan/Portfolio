"use client"

import { DotPattern } from '@/components/ui/dot-pattern'
import { Timeline } from "@/components/ui/timeline"

export default function Education() {
  const educationData = [
    {
      title: "2022 - 2024",
      content: (
        <div className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Master of Computer Science (M.Sc.)</h3>
              <p className="text-blue-600 dark:text-blue-400">Pondicherry University</p>
            </div>
            <span className="text-sm text-neutral-600 dark:text-gray-400">CGPA: 7.9</span>
          </div>
          <p className="text-neutral-700 dark:text-gray-300">
            Specialized in advanced software development, database management, and system design. Completed projects in web development and machine learning.
          </p>
        </div>
      ),
    },
    {
      title: "2019 - 2022", 
      content: (
        <div className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Bachelor of Computer Science (B.Sc.)</h3>
              <p className="text-blue-600 dark:text-blue-400">Burdwan University</p>
            </div>
            <span className="text-sm text-neutral-600 dark:text-gray-400">CGPA: 9.11</span>
          </div>
          <p className="text-neutral-700 dark:text-gray-300">
            Focused on core computer science concepts, programming fundamentals, and software development. Participated in coding competitions and hackathons.
          </p>
        </div>
      ),
    },
  ]

  return (
    <section id="education" className="relative text-neutral-900 dark:text-white overflow-hidden py-16 bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <DotPattern 
          width={20}
          height={20}
          className="opacity-[0.15] dark:opacity-[0.20]"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-2 animate__animated animate__fadeInUp">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <Timeline data={educationData} />
        </div>
      </div>
    </section>
  )
}
