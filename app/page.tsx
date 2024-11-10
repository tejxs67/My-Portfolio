'use client'

import { motion } from 'framer-motion'
import FloatingHeader from './components/FloatingHeader'
import DigitalDisplay from './components/DigitalDisplay'
import About from './components/About'
import ExperienceEducation from './components/ExperienceEducation'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { ThemeProvider } from './contexts/ThemeContext'
import Skills from './components/Skills'

export default function Home() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen"
        style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}
      >
        <FloatingHeader />
        <main className="container mx-auto px-4 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            id="home"
            className="text-center mb-16"
          >
            <h1
              className="text-5xl font-bold mb-4"
              style={{ color: 'hsl(var(--foreground))', fontFamily: "'DSEG7', sans-serif" }} // Apply custom font directly
            >
              Tejas Phopale
            </h1>
            <DigitalDisplay text="WELCOME TO MY PORTFOLIO" className="text-[rgb(var(--foreground))]" />
          </motion.div>
          <About />
          <Skills />
          <ExperienceEducation />
          <Projects />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}
