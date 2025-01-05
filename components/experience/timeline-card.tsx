'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { GradientCard } from '@/components/ui/gradient-card'

interface TimelineCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
  period: string
  children?: React.ReactNode
}

export function TimelineCard({ icon: Icon, title, subtitle, period, children }: TimelineCardProps) {
  return (
    <GradientCard>
      <div className="p-6 bg-card rounded-lg group-hover:bg-gradient-to-r group-hover:from-[rgb(220,70,50)]/10 group-hover:via-[rgb(160,60,245)]/10 group-hover:to-[rgb(80,50,220)]/10 transition-colors">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-full bg-muted">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{subtitle}</p>
              </div>
              <span className="text-sm px-3 py-1 rounded-full bg-muted/60">{period}</span>
            </div>
            <div className="mt-4">{children}</div>
          </div>
        </div>
      </div>
    </GradientCard>
  )
}