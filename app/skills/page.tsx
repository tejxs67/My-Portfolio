'use client'

import { motion } from 'framer-motion'
import { Code, Wrench, Heart } from 'lucide-react'
import { FaJava, FaCar, FaHtml5, FaCss3Alt, FaReact, FaDocker, FaPython } from 'react-icons/fa'
import { SiC, SiCplusplus, SiJavascript, SiMysql, SiTailwindcss, SiMongodb, SiNextdotjs, SiGit, SiPython } from 'react-icons/si'
import { Card } from '@/components/ui/card'

const IconBadge = ({ Icon, label }: { Icon: React.ElementType; label: string }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex items-center space-x-2 bg-muted px-3 py-1.5 rounded-full transition-colors hover:bg-accent hover:text-accent-foreground"
  >
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium">{label}</span>
  </motion.div>
)

const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; Icon: React.ElementType }[] }) => (
  <Card className="group relative overflow-hidden transition-all hover:border-border">
    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(220,70,50)] via-[rgb(160,60,245)] to-[rgb(80,50,220)] opacity-0 transition-opacity group-hover:opacity-10" />
    <div className="p-6 relative">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <IconBadge key={index} Icon={skill.Icon} label={skill.name} />
        ))}
      </div>
    </div>
  </Card>
)

export default function Skills() {
  const techStack = [
    { name: 'C', Icon: SiC },
    { name: 'C++', Icon: SiCplusplus },
    { name: 'Java', Icon: FaJava },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'HTML5', Icon: FaHtml5 },
    { name: 'CSS3', Icon: FaCss3Alt },
    { name: 'Tailwind', Icon: SiTailwindcss },
    { name: 'MySQL', Icon: SiMysql },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'Python', Icon: SiPython}
  ]

  const frameworksAndTools = [
    { name: 'ReactJS', Icon: FaReact },
    { name: 'React Native', Icon: FaReact },
    { name: 'NextJS', Icon: SiNextdotjs },
    { name: 'Tailwind', Icon: SiTailwindcss },
    { name: 'Xampp', Icon: Wrench },
    { name: 'MongoDB', Icon: SiMongodb },
    { name: 'Git', Icon: SiGit },
    { name: 'API Handling', Icon: Code },
    { name: 'Docker', Icon: FaDocker },
    { name: 'OpenCV', Icon: FaPython },
    { name: 'Numpy', Icon: FaPython },
    { name: 'Pandas', Icon: FaPython },
    { name: 'Pillow', Icon: FaPython }
  ]

  const interests = [
    { name: 'Software Development', Icon: Code },
    { name: 'Web3', Icon: Code },
    { name: 'WebRTC', Icon: Code },
    { name: 'Trekking', Icon: Heart },
    { name: 'Mechanical', Icon: Wrench },
    { name: 'Music', Icon: Heart },
    { name: 'Driving', Icon: 'FaCar' },
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
            Skills & Interests
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCategory title="Tech Stack" skills={techStack} />
            <SkillCategory title="Frameworks & Tools" skills={frameworksAndTools} />
            <SkillCategory title="Interests & Hobbies" skills={interests} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}