'use client'

import { motion } from 'framer-motion'
import { TextGenerateEffect } from '@/components/ui/aceternity'
import Link from 'next/link'
import { DotPattern } from '@/components/ui/dot-pattern'
import { Particles } from '@/components/ui/Particles'

export default function Hero() {
  return (
    <section id="hero" className="min-h-[70vh] pt-16 pb-16 relative text-neutral-900 dark:text-white overflow-hidden py-16 bg-neutral-50 dark:bg-neutral-950">
      <div className="absolute inset-0">
        <DotPattern 
          width={20}
          height={20}
          className="opacity-[0.15] dark:opacity-[0.20]"
        />
        <Particles />
      </div>
      <div className="container mx-auto px-4 flex flex-col justify-center h-full relative z-10">
        <div className="max-w-4xl mx-auto text-center mt-20">
          <motion.div
            className="mb-8 relative"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              bounce: 0.4
            }}
          >
            <div className="w-40 h-40 mx-auto relative">
              <motion.img
                src="/Sayantan.png" 
                alt="Sayantan Chakraborty"
                className="rounded-full object-cover w-full h-full border-4 border-black-600 dark:border-black-600"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1 
                }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            transition={{ 
              duration: 1.2,
              type: "spring",
              damping: 12,
              stiffness: 100
            }}
            whileInView={{
              y: [-2, 2, -2],
              transition: {
                y: {
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }
              }
            }}
          >
            Full Stack Developer
          </motion.h1>
          
          <motion.div 
            className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <TextGenerateEffect words="Hi, I'm Sayantan Chakraborty" />
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="mailto:c.sayantan2000@gmail.com" className="flex items-center gap-2 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-white px-4 py-2 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              Email
            </Link>
            <Link href="https://www.linkedin.com/in/sayantan-c12/" target="_blank" className="flex items-center gap-2 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-white px-4 py-2 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"></path>
              </svg>
              LinkedIn
            </Link>
            <Link href="https://github.com/Chakraborty-Sayantan" target="_blank" className="flex items-center gap-2 bg-neutral-200 hover:bg-neutral-300 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-white px-4 py-2 rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 000 10c0 4.411 2.865 8.169 6.839 9.49.5.092.683-.217.683-.481 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.271.098-2.65 0 0 .84-.269 2.75 1.026A9.552 9.552 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.481C17.137 18.167 20 14.41 20 10c0-5.522-4.477-10-10-10"></path>
              </svg>
              GitHub
            </Link>
          </motion.div>
          
          <motion.div 
            className="text-neutral-500 dark:text-gray-400"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0,
            }}
            transition={{ 
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              bounce: 0.4
            }}
          >
            <span>📍 Kolkata, West Bengal</span>
            <span className="mx-2">|</span>
            <span>📞 +91 6291566151 </span>
          
          </motion.div>
        </div>
      </div>
    </section>
  )
}
