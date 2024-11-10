'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FolderOpen, Github } from 'lucide-react'
import ProjectScreenshotsCarousel from './ProjectScreenshotsCarousel';

const projects = [
  { id: 1, title: 'Project Management System', description: 'A website for managing projects and tasks at the College Level', github: 'https://github.com/tejxs67/Project-Management-System'},
  { id: 2, title: 'File Packer UnPacker', description: 'Java written project for packing and unpacking files', github: 'https://github.com/tejxs67/File-Packer-Unpacker'},
  { id: 3, title: 'Tinder and Instagram Clone', description: 'A website for showcasing Tinder and Instagram features', github: 'https://github.com/tejxs67/Tinder-and-Instagram-Clone' },
]

const screenshots = [
  '/pms-admin.png',
  '/pms-guide.png',
  '/pms-login.png',
  '/pms-cookie.png',
];

const ProjectCard = ({ title, description, github }: { title: string; description: string; github: string}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[rgb(var(--card))] p-6 rounded-lg shadow-lg"
  >
    <div className="flex items-center mb-4">
      <FolderOpen className="w-8 h-8 text-[rgb(var(--foreground))] mr-4" />
      <h3 className="text-xl font-semibold text-[rgb(var(--foreground))]">{title}</h3>
    </div>
    <p className="text-[rgb(var(--muted-foreground))] mb-4">{description}</p>
    <div className="flex space-x-4">
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--foreground))] hover:text-[rgb(var(--accent-foreground))]">
        <Github className="w-6 h-6" />
      </a>
    </div>
  </motion.div>
)

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="my-16"
    >
      <h2
        className="text-3xl font-bold pt-14 mb-8 text-center"
        style={{ color: 'hsl(var(--foreground))' }} // Apply foreground color to title
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
      <ProjectScreenshotsCarousel images={screenshots} />
    </motion.section>
  )
}

export default Projects
