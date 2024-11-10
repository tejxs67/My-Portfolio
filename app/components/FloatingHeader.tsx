'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, User, Briefcase, FolderOpen, Mail, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Progress } from './ui/progress'

const FloatingHeader = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme, setTheme } = useTheme()

  // Update progress bar value based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // to set initial progress on page load

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Theme toggle function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-10"
    >
      {/* Horizontal Header Bar */}
      <div className="w-full bg-[rgb(var(--background))] bg-opacity-90 backdrop-blur-sm shadow-md p-4 flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex space-x-6">
          {[
            { name: 'Home', icon: Home },
            { name: 'About', icon: User },
            { name: 'Experience', icon: Briefcase },
            { name: 'Projects', icon: FolderOpen },
            { name: 'Contact', icon: Mail },
          ].map(({ name, icon: Icon }) => (
            <motion.div key={name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link href={`#${name.toLowerCase()}`} className="text-[rgb(var(--foreground))] hover:text-[rgb(var(--accent-foreground))] flex items-center">
                <Icon className="w-6 h-6 mr-2" />
                <span>{name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-[rgb(var(--muted))] rounded-full hover:bg-[rgb(var(--accent))]"
        >
          {theme === 'light' ? <Moon className="w-6 h-6 text-[rgb(var(--foreground))]" /> : <Sun className="w-6 h-6 text-[rgb(var(--foreground))]" />}
        </button>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full">
        <Progress
          value={scrollProgress}
          max={100}
          className="h-1 bg-[rgb(var(--primary))]"
        />
      </div>
    </motion.div>
  )
}

export default FloatingHeader
