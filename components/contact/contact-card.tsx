'use client'

import { LucideIcon } from 'lucide-react'
import { GradientCard } from '@/components/ui/gradient-card'

interface ContactCardProps {
  icon: LucideIcon
  title: string
  content: string
  href: string
}

export function ContactCard({ icon: Icon, title, content, href }: ContactCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <GradientCard>
        <div className="p-6 bg-card rounded-lg group-hover:bg-gradient-to-r group-hover:from-[rgb(220,70,50)]/10 group-hover:via-[rgb(160,60,245)]/10 group-hover:to-[rgb(80,50,220)]/10 transition-colors">
          <div className="flex items-center mb-4">
            <Icon className="w-8 h-8 text-primary mr-4" />
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-muted-foreground">{content}</p>
            </div>
          </div>
        </div>
      </GradientCard>
    </a>
  )
}