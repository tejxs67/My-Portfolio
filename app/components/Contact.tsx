'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, Home } from 'lucide-react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

const ContactCard = ({ icon: Icon, title, content }: { icon: React.ElementType; title: string; content: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[rgb(var(--card))] p-6 rounded-lg shadow-lg text-center"
  >
    <div className="flex justify-center mb-4">
      <Icon className="w-12 h-12 text-[rgb(var(--foreground))]" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-[rgb(var(--foreground))]">{title}</h3>
    <p className="text-[rgb(var(--muted-foreground))]">{content}</p>
  </motion.div>
)

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="my-16 primary"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-[rgb(var(--foreground))]">Contact Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <ContactCard
          icon={Phone}
          title="Phone"
          content="+91 9112966306"
        />
        <ContactCard
          icon={Home}
          title="Address"
          content="Nigdi-Pradhikaran, Pune, Maharashtra 411062"
        />
        <ContactCard
          icon={FaEnvelope}
          title="Email"
          content={<a href="mailto:tejasph1@gmail.com" className="text-blue-500 hover:underline">tejasph1@gmail.com</a>}
        />
        <ContactCard
          icon={FaLinkedin}
          title="LinkedIn"
          content={<a href="https://www.linkedin.com/in/tejasph-li/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://www.linkedin.com/in/tejasph1/</a>}
        />
      </div>
    </motion.section>
  )
}

export default Contact
