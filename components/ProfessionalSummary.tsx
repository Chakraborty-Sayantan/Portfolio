"use client"

import { DotPattern } from '@/components/ui/dot-pattern'

export default function ProfessionalSummary() {
  return (
    <section id="professionalSummary" className="relative text-neutral-900 dark:text-white overflow-hidden py-16 bg-neutral-50 dark:bg-neutral-950">
      <div className="absolute inset-0">
        <DotPattern 
          width={20}
          height={20}
          className="opacity-[0.15] dark:opacity-[0.20]"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2 animate__animated animate__fadeInUp">Professional Summary</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-lg">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Master's degree holder in Computer Science with over two years of hands-on experience in full stack development. Proficient in designing and developing robust web applications using modern frameworks and technologies.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-neutral-100/50 dark:bg-neutral-800/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Technical Expertise</h3>
                  <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Full Stack Development
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Modern Web Frameworks
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      API Development
                    </li>
                  </ul>
                </div>

                <div className="bg-neutral-100/50 dark:bg-neutral-800/50 backdrop-blur-sm p-6 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-sm">
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Professional Goals</h3>
                  <ul className="space-y-2 text-neutral-700 dark:text-gray-300">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Innovative Tech Solutions
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Technical Leadership
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Continuous Learning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
