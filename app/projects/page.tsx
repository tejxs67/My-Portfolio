'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/projects/project-card'

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#"
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      tags: ["Next.js", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Project 3",
      description: "Description for Project 3",
      tags: ["React Native", "Firebase"],
      link: "#"
    },
    {
      title: "Project 4",
      description: "Description for Project 4",
      tags: ["Vue.js", "Express", "PostgreSQL"],
      link: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[rgb(220,70,50)] via-[rgb(160,60,245)] to-[rgb(80,50,220)]">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}