'use client'

import Link from 'next/link'
import Image from 'next/image'
import { DotPattern } from '@/components/ui/dot-pattern'

export default function Projects() {
  return (
    <section id="projects" className="relative text-neutral-900 dark:text-white overflow-hidden py-16 bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <DotPattern 
          width={20}
          height={20}
          className="opacity-[0.15] dark:opacity-[0.20]"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2 animate__animated animate__fadeInUp">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          {/* QToolsAI */}
          <div className="bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow animate__animated animate__fadeInUp animate__delay-2s">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image 
                    src="/QToolsAI.png" 
                    alt="QToolsAI Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">QuickToolsAI [NEXT.JS]</h3>
                    <div className="flex gap-4">
                      <Link href="https://q-tools-ai.vercel.app/" target="_blank" className="text-blue-400 hover:text-blue-300 flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                        </svg>
                        View Project
                      </Link>
                      <Link href="https://github.com/Hacker-Man07/QToolsAI" target="_blank" className="text-blue-400 hover:text-blue-300 flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 000 10c0 4.411 2.865 8.169 6.839 9.49.5.092.683-.217.683-.481 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.026A9.552 9.552 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.481C17.137 18.167 20 14.41 20 10c0-5.522-4.477-10-10-10"></path>
                        </svg>
                        View Source Code
                      </Link>
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">QToolsAI is a multi-purpose online tool that is a Next.js-based AI-powered web application integrating AI tools, daily utilities, and games.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-neutral-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Designed a modern, responsive UI with Tailwind CSS, shadcn/ui components, and Lucide React icons.
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Implemented Next.js API Routes for backend functionalities and Server Actions for efficient form handling.
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-orange-800 rounded-full text-sm text-white">Next.js</span>
                    <span className="px-3 py-1 bg-green-900 rounded-full text-sm text-white">shadcn/ui</span>
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">Tailwind CSS</span>
                    <span className="px-3 py-1 bg-red-500 rounded-full text-sm text-white">AI SDK</span>
                  </div>
                </div>
              </div>
            </div>
            
          <div className="space-y-12">
            {/* Car Rental Website */}
            <div className="bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow animate__animated animate__fadeInUp">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image 
                    src="/car-rental-preview.png" 
                    alt="Car Rental Website Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Car Rental Website [MERN]</h3>
                    <div className="flex gap-4">
                      <Link href="https://rental-car-mern.netlify.app/" target="_blank" className="text-blue-400 hover:text-blue-300 flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                        </svg>
                        View Project
                      </Link>
                      <Link href="#" target="_blank" className="text-blue-400 hover:text-blue-300 flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 000 10c0 4.411 2.865 8.169 6.839 9.49.5.092.683-.217.683-.481 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.026A9.552 9.552 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.481C17.137 18.167 20 14.41 20 10c0-5.522-4.477-10-10-10"></path>
                        </svg>
                        View Source Code
                      </Link>
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">Developed a fully functional car rental website using the MERN stack. Implemented RESTful APIs for seamless front-end and back-end communication.</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-neutral-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Designed responsive UI with cross-browser compatibility
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Optimized MongoDB for improved page load times
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">React.js</span>
                    <span className="px-3 py-1 bg-green-600 rounded-full text-sm text-white">Node.js</span>
                    <span className="px-3 py-1 bg-yellow-600 rounded-full text-sm text-white">Express.js</span>
                    <span className="px-3 py-1 bg-purple-600 rounded-full text-sm text-white">MongoDB</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Document Similarity Matching System */}
            <div className="bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow animate__animated animate__fadeInUp animate__delay-1s">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image 
                    src="/document-similarity-preview.png" 
                    alt="Document Similarity System Preview"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">Document Similarity Matching System [PYTHON]</h3>
                    <Link href="https://github.com/Hacker-Man07/Document-Similarity-Matching" target="_blank" className="text-blue-400 hover:text-blue-300 flex items-center">
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 000 10c0 4.411 2.865 8.169 6.839 9.49.5.092.683-.217.683-.481 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.026A9.552 9.552 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.481C17.137 18.167 20 14.41 20 10c0-5.522-4.477-10-10-10"></path>
                        </svg>
                        View Source Code
                      </Link>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">Constructed an automated invoice categorization system
                  using Python, NumPy, and Scikit-learn. </p>
                  <div className="space-y-2">
                    <div className="flex items-center text-neutral-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Implemented a hybrid similarity model combining Cosine, Feature-based, and Jaccard Similarities
                    </div>
                    <div className="flex items-center text-neutral-600">
                      <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      Extract and process key invoice features, including numbers, dates, amounts, and item descriptions, using PyPDF2
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-600 rounded-full text-sm text-white">Python</span>
                    <span className="px-3 py-1 bg-blue-600 rounded-full text-sm text-white">Numpy</span>
                    <span className="px-3 py-1 bg-green-600 rounded-full text-sm text-white">Scikit-learn</span>
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

