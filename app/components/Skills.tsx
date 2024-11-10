'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Wrench, Heart } from 'lucide-react'
import { FaJava, FaHtml5, FaCss3Alt, FaReact, FaDocker } from 'react-icons/fa'
import { SiC, SiCplusplus, SiJavascript, SiMysql, SiTailwindcss, SiMongodb, SiNextdotjs, SiGit } from 'react-icons/si'

const IconBadge = ({ Icon, label }: { Icon: React.ElementType; label: string }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex items-center space-x-1 bg-[rgb(var(--muted))] text-xs px-2 py-1 rounded-full shadow-sm hover:bg-[rgb(var(--accent))] hover:text-[rgb(var(--accent-foreground))] transition-all"
  >
    <Icon className="w-4 h-4 text-[rgb(var(--secondary))]" />
    <span className="text-[rgb(var(--muted-foreground))]">{label}</span>
  </motion.div>
)

const SkillCategory = ({ title, skills }: { title: string; skills: { name: string; Icon: React.ElementType }[] }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[rgb(var(--card))] p-6 rounded-lg shadow-lg"
  >
    <h3 className="text-lg font-semibold text-[rgb(var(--foreground))] mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <IconBadge key={index} Icon={skill.Icon} label={skill.name} />
      ))}
    </div>
  </motion.div>
)

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const techStack = [
    { name: 'C', Icon: SiC },
    { name: 'C++', Icon: SiCplusplus },
    { name: 'Java', Icon: FaJava },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'HTML5', Icon: FaHtml5 },
    { name: 'CSS3', Icon: FaCss3Alt },
    { name: 'Tailwind', Icon: SiTailwindcss },
    { name: 'MySQL', Icon: SiMysql },
    { name: 'NoSQL', Icon: SiMongodb }
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
    { name: 'Docker', Icon: FaDocker }
  ]

  const interests = [
    { name: 'Software Development', Icon: Code },
    { name: 'Web3', Icon: Code },
    { name: 'WebRTC', Icon: Code },
    { name: 'Trekking', Icon: Heart },
    { name: 'Mechanical', Icon: Wrench },
    { name: 'Music', Icon: Heart }
  ]

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="my-16 space-y-8"
    >
      <h2
        className="text-3xl font-bold pt-14 mb-8 text-center"
        style={{ color: 'rgb(var(--foreground))' }}
      >
        Skills & Interests
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 style={{color: 'rgb(var(--foreground))'}}">
        <SkillCategory title="Tech Stack" skills={techStack} />
        <SkillCategory title="Frameworks & Tools" skills={frameworksAndTools} />
        <SkillCategory title="Interests & Hobbies" skills={interests} />
      </div>
    </motion.section>
  )
}

export default Skills
