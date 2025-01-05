'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { GradientCard } from '@/components/ui/gradient-card'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
  return (
    <GradientCard>
      <div className="p-6 bg-card rounded-lg group-hover:bg-gradient-to-r group-hover:from-[rgb(220,70,50)]/10 group-hover:via-[rgb(160,60,245)]/10 group-hover:to-[rgb(80,50,220)]/10 transition-colors">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-muted/60 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Button asChild>
          <a href={link} target="_blank" rel="noopener noreferrer">
            View Project <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </GradientCard>
  )
}