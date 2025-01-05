'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GradientCardProps {
  children: React.ReactNode
  className?: string
}

export function GradientCard({ children, className }: GradientCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative rounded-lg p-[1px] transition-all",
        "before:absolute before:inset-0 before:rounded-lg before:p-[1px]",
        "before:bg-gradient-to-r before:from-[rgb(220,70,50)] before:via-[rgb(160,60,245)] before:to-[rgb(80,50,220)]",
        "after:absolute after:inset-[1px] after:rounded-lg after:bg-background",
        "group hover:before:opacity-0 before:transition-opacity",
        className
      )}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}