'use client'

import { motion } from 'framer-motion'
import { User, Code, Coffee, BookOpen } from 'lucide-react'
import { Card } from '@/components/ui/card'

const AboutCard = ({ icon: Icon, title, content }: { icon: React.ElementType; title: string; content: string }) => (
  <Card className="group relative overflow-hidden transition-all hover:border-border">
    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(220,70,50)] via-[rgb(160,60,245)] to-[rgb(80,50,220)] opacity-0 transition-opacity group-hover:opacity-10" />
    <div className="p-6 relative">
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-primary mr-4" />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{content}</p>
    </div>
  </Card>
)

export default function About() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[rgb(220,70,50)] via-[rgb(160,60,245)] to-[rgb(80,50,220)]">
            About Me
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </motion.div>
      </div>
    </div>
  )
}