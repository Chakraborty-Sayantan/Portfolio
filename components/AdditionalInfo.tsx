'use client'

import { DotPattern } from '@/components/ui/dot-pattern'

export default function AdditionalInfo() {
  return (
    <section id="additionalInfo" className="relative text-neutral-900 dark:text-white overflow-hidden py-16 bg-neutral-50 dark:bg-neutral-950">
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
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2 animate__animated animate__fadeInUp">Interests & Activities</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 animate__animated animate__fadeInLeft">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
                Technical Interests
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">Generative AI</p>
                    <p className="text-neutral-600 dark:text-neutral-300">Development of prompts for AI models including Claude, ChatGPT, Gemini, DALL-E, Midjourney</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">Web Development</p>
                    <p className="text-neutral-600 dark:text-neutral-300">Full-stack development with modern frameworks and technologies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">AI Prompt Engineering</p>
                    <p className="text-neutral-600 dark:text-neutral-300">Building AI dev products using Bolt.diy, Lovable, V0.dev, Cursor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 animate__animated animate__fadeInRight">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                </svg>
                Activities & Hobbies
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">Footballer</p>
                    <p className="text-neutral-600 dark:text-neutral-300">Passionate towards watching & playing football</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white">Video Editing</p>
                    <p className="text-neutral-600 dark:text-neutral-300">Have a knack for editing aesthetic and cinematic videos </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
