'use client'

import Link from 'next/link'
import { DotPattern } from '@/components/ui/dot-pattern'

export default function DownloadSection() {
  return (
    <section id="downloadSection" className="relative text-neutral-900 dark:text-white overflow-hidden py-16 bg-white dark:bg-neutral-950">
      <div className="absolute inset-0">
        <DotPattern 
          width={20}
          height={20}
          className="opacity-[0.15] dark:opacity-[0.20]"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 animate__animated animate__fadeInUp">
            <h2 className="text-3xl font-bold mb-4">Download Resume</h2>
            <p className="text-neutral-600 dark:text-neutral-400 mb-8">Get a printable version of my resume in your preferred format</p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                href="https://drive.google.com/file/d/119KxUGfbfcrbaMtNEkb0115XbMwdF2xc/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 animate__animated animate__fadeInUp"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                </svg>
                Download PDF
              </Link>
            </div>
          </div>

          <div className="mt-12 p-8 bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl animate__animated animate__fadeInUp animate__delay-2s">
            <h3 className="text-xl font-semibold mb-4">Need a Different Format?</h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">Contact me directly and I'll provide the resume in your required format</p>
            
            <div className="flex justify-center gap-4">
              <Link 
                href="mailto:sayantan12102000@gmail.com" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Me
              </Link>
              
              <Link 
                href="https://www.linkedin.com/in/sayantan-c12/" 
                target="_blank" 
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59z"/>
                </svg>
                Connect on LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

