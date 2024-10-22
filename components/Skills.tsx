"use client"

import { motion } from 'framer-motion'
import { Progress } from '@/components/ui/progress'

const skills = [
  { name: 'Software Testing', level: 95 },
  
  { name: 'JIRA/Confluence', level: 92 },
  { name: 'API Testing', level: 88 },
  { name: 'Performance Testing', level: 85 },
  { name: 'SQL/Database Testing', level: 80 },
  { name: 'Test Planning & Strategy', level: 90 },
  { name: 'Agile Methodologies', level: 85 },
  { name: 'Test Automation', level: 25 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-secondary">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <Progress value={skill.level} max={100} className="h-2" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}