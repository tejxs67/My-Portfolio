'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Code, Coffee, BookOpen } from 'lucide-react'

const AboutCard = ({ icon: Icon, title, content }: { icon: React.ElementType; title: string; content: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[rgb(var(--card))] p-6 rounded-lg shadow-lg"
  >
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-[rgb(var(--foreground))] mr-4" />
      <h3 className="text-xl font-semibold text-[rgb(var(--foreground))]">{title}</h3>
    </div>
    <p className="text-[rgb(var(--muted-foreground))]">{content}</p>
  </motion.div>
)

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="my-16 style=[rgb(var(--foreground))]"
    >
      <h2
        className="text-3xl font-bold mb-8 text-center style=[rgb(var(--foreground))]">About Me</h2>
      <div className="card grid grid-cols-1 md:grid-cols-2 gap-8 style=[rgb(var(--foreground))]">
        <AboutCard
          icon={User}
          title="Who I Am"
          content="I'm Tejas Phopale, a passionate web developer with a keen interest in creating responsive and functional websites."
        />
        <AboutCard
          icon={Code}
          title="What I Do"
          content="I specialize in front-end development using React and Next.js, and I'm always eager to learn new technologies."
        />
        <AboutCard
          icon={Coffee}
          title="My Interests"
          content="When I'm not coding, you can find me exploring new games or hiking in the great outdoors."
        />
        <AboutCard
          icon={BookOpen}
          title="My Philosophy"
          content="I believe in continuous learning and strive to improve my skills every day with steady dedication."
        />
      </div>
    </motion.section>
  )
}

export default About
