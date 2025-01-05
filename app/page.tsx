'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Picture } from '@/PFP.jpg'
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Profile Section */}
          <div className="text-left space-y-6 pb-6 pl-10">
            <h1 className="text-4xl md:text-6xl font-bold pb-1 bg-clip-text text-transparent bg-gradient-to-r from-[rgb(220,70,50)] via-[rgb(160,60,245)] to-[rgb(80,50,220)]">
              Tejas Phopale
            </h1>
            <p className="text-lg text-muted-foreground">
              Full Stack Developer & Software Engineer
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgb(220,70,50)] via-[rgb(160,60,245)] to-[rgb(80,50,220)] animate-pulse blur-xl opacity-50" />
            <div className="relative h-full w-[350px] rounded-full overflow-hidden border-4 border-background shadow-2xl">
              {/* Replace with your profile image URL */}
              <Image
                src='/PFP.jpg'
                alt="Tejas Phopale"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <QuickLinkCard
            title="Projects"
            description="Explore my latest work and contributions"
            href="/projects"
          />
          <QuickLinkCard
            title="Skills"
            description="Technical expertise and capabilities"
            href="/skills"
          />
          <QuickLinkCard
            title="Experience"
            description="Professional journey and achievements"
            href="/experience"
          />
        </motion.div>
      </div>
    </div>
  )
}

function QuickLinkCard({ title, description, href }: { title: string; description: string; href: string }) {
  return (
    <Card className="group relative overflow-hidden border border-border/50 bg-gradient-to-b from-background to-background/80 p-6 transition-all hover:border-border">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(220,70,50)] via-[rgb(160,60,245)] to-[rgb(80,50,220)] opacity-0 transition-opacity group-hover:opacity-10" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link href={href} className="text-primary hover:underline inline-flex items-center">
        Learn More <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </Card>
  )
}