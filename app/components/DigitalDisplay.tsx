'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const DigitalDisplay = ({ text, className }: { text: string; className?: string }) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [text])

  return (
    <motion.div
      className={`text-2xl bg-gray-900 p-4 rounded-lg mb-8 ${className}`}
      style={{ fontFamily: "'DSEG7', sans-serif" }} // Apply the custom font
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText.split('').map((char, index) => (
        <motion.span
          className="digital-display"
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default DigitalDisplay
