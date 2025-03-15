"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <motion.button
      className="fixed top-4 right-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 shadow-lg"
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5">
        {/* Sun */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="absolute inset-0 h-5 w-5 text-neutral-800 dark:text-neutral-200 transition-colors"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: theme === 'dark' ? 0 : 1,
            scale: theme === 'dark' ? 0.5 : 1,
            rotate: theme === 'dark' ? -180 : 0
          }}
          transition={{ duration: 0.2 }}
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.svg>

        {/* Moon */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="absolute inset-0 h-5 w-5 text-neutral-800 dark:text-neutral-200 transition-colors"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: theme === 'dark' ? 1 : 0,
            scale: theme === 'dark' ? 1 : 0.5,
            rotate: theme === 'dark' ? 0 : 180
          }}
          transition={{ duration: 0.2 }}
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </motion.svg>
      </div>
    </motion.button>
  )
} 