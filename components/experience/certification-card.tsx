'use client'

import { Award, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GradientCard } from '@/components/ui/gradient-card'

interface CertificationCardProps {
  title: string
  provider: string
  year: string
  validationCode: string
}

export function CertificationCard({ title, provider, year, validationCode }: CertificationCardProps) {
  const isLink = validationCode.startsWith('http')

  return (
    <GradientCard>
      <div className="p-6 bg-card rounded-lg group-hover:bg-gradient-to-r group-hover:from-[rgb(220,70,50)]/10 group-hover:via-[rgb(160,60,245)]/10 group-hover:to-[rgb(80,50,220)]/10 transition-colors">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-full bg-muted">
            <Award className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground">{provider}</p>
            <p className="text-sm text-muted-foreground mt-1">{year}</p>
            {isLink ? (
              <Button variant="outline" className="mt-4" asChild>
                <a href={validationCode} target="_blank" rel="noopener noreferrer">
                  View Certificate <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            ) : (
              <p className="mt-4 text-sm">Validation Code: {validationCode}</p>
            )}
          </div>
        </div>
      </div>
    </GradientCard>
  )
}