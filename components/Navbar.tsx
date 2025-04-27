'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"


export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav id="navbar" className="fixed w-full z-50 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-900">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center">
            </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <div className="ml-5 flex items-center space-x-12">
              <Link href="#hero" className="hover:bg-neutral-100 dark:hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              {/*<Link href="#professionalSummary" className="hover:bg-neutral-100 dark:hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Summary</Link>*/}
              <Link href="#skills" className="hover:bg-neutral-100 dark:hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Skills</Link>
              <Link href="#projects" className="hover:bg-neutral-100 dark:hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Projects</Link>
              <Link href="#experience" className="hover:bg-neutral-100 dark:hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Experience</Link>
              <Link href="#education" className="hover:bg-neutral-100 dark:hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Education</Link>
              <Link href="#additionalInfo" className="hover:bg-neutral-100 dark:hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">Additional Info</Link>
              <Link href="https://drive.google.com/file/d/119KxUGfbfcrbaMtNEkb0115XbMwdF2xc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">Download CV</Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 ml-4 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 relative"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-2 left-2" />
            </motion.button>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 mr-2 rounded-md bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors duration-200 relative"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 top-2 left-2" />
            </motion.button>

            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#resumeHeader" className="hover:bg-neutral-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="#skills" className="hover:bg-neutral-700 block px-3 py-2 rounded-md text-base font-medium">Skills</Link>
            <Link href="#projects" className="hover:bg-neutral-700 block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
            {/*<Link href="#professionalSummary" className="hover:bg-neutral-700 block px-3 py-2 rounded-md text-base font-medium">Summary</Link>*/}
            <Link href="#experience" className="hover:bg-neutral-700 block px-3 py-2 rounded-md text-base font-medium">Experience</Link>
            <Link href="#education" className="hover:bg-neutral-700 block px-3 py-2 rounded-md text-base font-medium">Education</Link>
            <Link href="#additionalInfo" className="hover:bg-neutral-700 block px-3 py-2 rounded-md text-base font-medium">Additional Info</Link>
            <Link href="https://drive.google.com/file/d/119KxUGfbfcrbaMtNEkb0115XbMwdF2xc/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 block px-4 py-2 rounded-md text-base font-medium">Download CV</Link>
          </div>
        </div>
      )}
    </nav>
  )
}

