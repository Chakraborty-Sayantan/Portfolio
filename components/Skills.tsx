'use client'

import { motion } from 'framer-motion'
import { cn } from "@/lib/utils"
import { DotPattern } from '@/components/ui/dot-pattern'
import { 
  SiPython, SiC, SiCplusplus, SiHtml5, SiCss3, SiJavascript, 
  SiReact, SiRedux, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiNodedotjs, SiExpress, SiFlask, SiDjango, SiFastapi,
  SiMongodb, SiMysql, SiPostgresql, SiGit, SiGithub,
  SiPostman, SiVercel
} from 'react-icons/si'
import { FaCode, FaLaptopCode, FaCodeBranch, FaDatabase, FaTools, FaServer } from 'react-icons/fa'

const technologyIcons: { [key: string]: JSX.Element } = {
  'Python': <SiPython className="w-5 h-5" />,
  'C': <SiC className="w-5 h-5" />,
  'C++': <SiCplusplus className="w-5 h-5" />,
  'HTML': <SiHtml5 className="w-5 h-5" />,
  'CSS': <SiCss3 className="w-5 h-5" />,
  'JavaScript': <SiJavascript className="w-5 h-5" />,
  'React.js': <SiReact className="w-5 h-5" />,
  'Redux': <SiRedux className="w-5 h-5" />,
  'Next.js': <SiNextdotjs className="w-5 h-5" />,
  'TypeScript': <SiTypescript className="w-5 h-5" />,
  'Tailwind CSS': <SiTailwindcss className="w-5 h-5" />,
  'Node.js': <SiNodedotjs className="w-5 h-5" />,
  'Express.js': <SiExpress className="w-5 h-5" />,
  'Flask': <SiFlask className="w-5 h-5" />,
  'Django': <SiDjango className="w-5 h-5" />,
  'FastAPI': <SiFastapi className="w-5 h-5" />,
  'MongoDB': <SiMongodb className="w-5 h-5" />,
  'MySQL': <SiMysql className="w-5 h-5" />,
  'PostgreSQL': <SiPostgresql className="w-5 h-5" />,
  'Git': <SiGit className="w-5 h-5" />,
  'GitHub': <SiGithub className="w-5 h-5" />,
  'Postman': <SiPostman className="w-5 h-5" />,
  'VSCode': <FaCode className="w-5 h-5" />,
  'Cursor': <FaLaptopCode className="w-5 h-5" />,
  'Vercel': <SiVercel className="w-5 h-5" />,
}

const skills = [
  { 
    category: "Programming Languages", 
    items: ["Python", "C", "C++"]
  },
  { 
    category: "Frontend Technologies", 
    items: ["HTML", "CSS", "JavaScript", "React.js", "Redux", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  { 
    category: "Backend Technologies", 
    items: ["Node.js", "Express.js", "Flask", "Django", "FastAPI", "RESTful APIs"]
  },
  { 
    category: "Databases", 
    items: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "CI/CD", "VSCode", "Cursor", "Vercel"]
  }
]

const SkillCard = ({ category, items, index }: { category: string, items: string[], index: number }) => {
  const categoryIcons = {
    "Programming Languages": <FaCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    "Frontend Technologies": <FaCodeBranch className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
    "Backend Technologies": <FaServer className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
    "Databases": <FaDatabase className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    "Tools": <FaTools className="w-6 h-6 text-green-600 dark:text-green-400" />,
  }

  return (
    <motion.div
      className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm rounded-xl shadow-lg p-8 border border-neutral-200 dark:border-neutral-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
    >
      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 flex items-center gap-3">
        {categoryIcons[category as keyof typeof categoryIcons] || (
          <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
          </svg>
        )}
        {category}
      </h3>
      <div className="flex flex-wrap gap-3">
        {items.map((item, index) => (
          <motion.span
            key={index}
            className={cn(
              "px-4 py-2 rounded text-sm font-medium flex items-center gap-2 hover:shadow-md transition-shadow duration-200"
            )}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {technologyIcons[item] || null}
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
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-2">Skills</h2>
            <motion.div 
              className="w-20 h-1 bg-blue-600 mx-auto"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {skills.map((skill, index) => (
              <SkillCard key={index} category={skill.category} items={skill.items} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

