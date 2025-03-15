'use client'

import Link from 'next/link'
import { DotPattern } from '@/components/ui/dot-pattern'

export default function Footer() {
  return (
    <footer className="relative text-neutral-900 dark:text-white overflow-hidden py-8 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-neutral-800">
      <div className="absolute inset-0">
        <DotPattern 
          width={20}
          height={20}
          className="opacity-[0.20]"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate__animated animate__fadeInUp">
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <Link href="mailto:c.sayantan2000@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">c.sayantan2000@gmail.com</Link>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+91 6291566151</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>Kolkata, West Bengal</span>
                </li>
              </ul>
            </div>

            <div className="animate__animated animate__fadeInUp animate__delay-1s">
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="https://www.linkedin.com/in/sayantan12102000/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59z"/>
                    </svg>
                    LinkedIn Profile
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Hacker-Man07" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-400 transition-colors">
                    <svg className="w-5 h-5 mr-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 000 10c0 4.411 2.865 8.169 6.839 9.49.5.092.683-.217.683-.481 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.026A9.552 9.552 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.481C17.137 18.167 20 14.41 20 10c0-5.522-4.477-10-10-10" clipRule="evenodd"/>
                    </svg>
                    GitHub Profile
                  </Link>
                </li>
              </ul>
            </div>

            <div className="animate__animated animate__fadeInUp animate__delay-2s">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#education" className="hover:text-blue-400 transition-colors">Education</Link>
                </li>
                <li>
                  <Link href="#skills" className="hover:text-blue-400 transition-colors">Skills</Link>
                </li>
                <li>
                  <Link href="#projects" className="hover:text-blue-400 transition-colors">Projects</Link>
                </li>
                <li>
                  <Link href="#experience" className="hover:text-blue-400 transition-colors">Experience</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-neutral-600 dark:text-neutral-400 animate__animated animate__fadeInUp animate__delay-3s">
            <p>© 2024 Sayantan Chakraborty. All rights reserved.</p>
            <p className="mt-2 text-sm">Full Stack Developer | Computer Science Graduate</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

