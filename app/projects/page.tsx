'use client'

import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/projects/project-card'

export default function Projects() {
  const projects = [
    {
      title: "Project-Management System",
      description: "A College application to handle and monitor projects.",
      tags: ["Next.js", "TypeScript", "Tailwind","MySQL"],
      link: "https://github.com/tejxs67/Project-Management-System"
    },
    {
      title: "Landing Page",
      description: "Dynamic WebPage Created for the main landing page of a organization with GSAP animations and API intergrations.",
      tags: ["React.js", "Node.js", "MySQL"],
      link: "https://grapedawn.tech"
    },
    {
      title: "File Packer-UnPacker",
      description: "Java Project which compresses and de-compresses files with commands",
      tags: ["JAVA"],
      link: "https://github.com/tejxs67/File-Packer-UnPacker"
    },
    {
      title: "WallPaper- Carousel APP",
      description: "MKBHD clone wallpaper app made in React Native.(Currently Working on it)",
      tags: ["React Native", "Firebase"],
      link: "https://github.com/tejxs67"
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