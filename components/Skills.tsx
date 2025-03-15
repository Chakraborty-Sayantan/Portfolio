'use client'

import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"
import { DotPattern } from '@/components/ui/dot-pattern'

const skills = [
  { 
    category: "Programming Languages", 
    items: ["Python", "C",]
  },
  { 
    category: "Frontend Technologies", 
    items: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "TypeScript", "Tailwind CSS"]
  },
  { 
    category: "Backend Technologies", 
    items: ["Node.js", "Express.js", "Flask", "Django", "RESTful APIs"]
  },
  { 
    category: "Databases", 
    items: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "CI/CD", "VSCode", "Cursor"]
  }
]

const SkillCard = ({ category, items }: { category: string, items: string[] }) => {
  return (
    <motion.div
      className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-neutral-200 dark:border-neutral-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center">
        <svg className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
        </svg>
        {category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <motion.span
            key={index}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border",
              [
                "bg-blue-100/50 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800",
                "bg-purple-100/50 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-800",
                "bg-rose-100/50 dark:bg-rose-900/50 text-rose-800 dark:text-rose-200 border-rose-200 dark:border-rose-800",
                "bg-amber-100/50 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 border-amber-200 dark:border-amber-800",
                "bg-green-100/50 dark:bg-green-900/50 text-green-800 dark:text-green-200 border-green-200 dark:border-green-800",
                "bg-red-100/50 dark:bg-red-900/50 text-red-800 dark:text-red-200 border-red-200 dark:border-red-800",
                "bg-emerald-100/50 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800",
              ][index % 7]
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative text-neutral-900 dark:text-white overflow-hidden py-16 bg-neutral-50 dark:bg-neutral-950">
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
            <h2 className="text-3xl font-bold mb-2 animate__animated animate__fadeInUp">Skills</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} category={skill.category} items={skill.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

