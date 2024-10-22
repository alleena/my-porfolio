"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GithubIcon, ExternalLinkIcon } from 'lucide-react'

const projects = [
  {
    title: 'Rojgari Services Websites',
    description: 'A revolutionary web application',
    image: 'https://source.unsplash.com/random/800x600?tech',
    github: 'https://github.com/alleena',
    live: 'https://example.com',
  },
  {
    title: 'Rojgari Mobile Application',
    description: 'An innovative mobile app',
    image: 'https://source.unsplash.com/random/800x600?app',
    github: 'https://github.com/alleena',
    live: 'https://example.com',
  },
  {
    title: 'Merojob Websites',
    description: 'A cutting-edge AI solution',
    image: 'https://source.unsplash.com/random/800x600?ai',
    github: 'https://github.com/alleena',
    live: 'https://example.com',
  },
]

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20 px-4 md:px-8">
      <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                  {hoveredIndex === index && (
                    <motion.div
                      className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Button variant="secondary" className="mr-2" onClick={() => window.open(project.github, '_blank')}>
                        GitHub
                      </Button>
                      <Button variant="secondary" onClick={() => window.open(project.live, '_blank')}>
                        <ExternalLinkIcon className="mr-2" /> Live Demo
                      </Button>
                    </motion.div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}