"use client"

import { DotPattern } from '@/components/ui/dot-pattern'

export default function WorkExperience() {
  return (
    <section id="experience" className="relative text-neutral-900 dark:text-white overflow-hidden py-16 bg-neutral-50 dark:bg-neutral-950">
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
            <h2 className="text-3xl font-bold mb-2 animate__animated animate__fadeInUp">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Web Developer Intern</h3>
                <p className="text-lg text-blue-600 dark:text-blue-400">Codes On Bytes</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full text-sm">Nov 2023 - Dec 2023</span>
                <span className="bg-green-100/50 dark:bg-green-900/50 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm">Remote</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="flex-none">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                </div>
                <p className="flex-1">
                  <span className="font-semibold">Link Shortener Tool:</span> Developed a URL shortening application utilizing JavaScript and the TinyURL API. Enhanced API integration skills and improved URL management efficiency.
                </p>
              </div>

              <div className="flex space-x-4">
                <div className="flex-none">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                </div>
                <p className="flex-1">
                  <span className="font-semibold">Typing Test Web App:</span> Constructed a user-friendly application using React.js, TypeScript and Quotable API that accurately measures real-time typing speed, WPM calcutaion, real-time character feedback and accuracy metrics; improving user typing experience.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-yellow-600 rounded-full text-sm text-white">JavaScript</span>
                <span className="px-3 py-1 bg-orange-600 rounded-full text-sm text-white">React.js</span>
                <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">TypeScript</span>
                <span className="px-3 py-1 bg-green-600 rounded-full text-sm text-white">API Integration</span>
                <span className="px-3 py-1 bg-purple-600 rounded-full text-sm text-white">Web Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

