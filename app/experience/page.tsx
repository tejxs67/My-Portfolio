'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { TimelineCard } from '@/components/experience/timeline-card'
import { CertificationCard } from '@/components/experience/certification-card'

export default function Experience() {
  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[rgb(220,70,50)] via-[rgb(160,60,245)] to-[rgb(80,50,220)]">
            Experience & Education
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Work Experience */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
              <TimelineCard
                icon={Briefcase}
                title="Frontend Developer Intern"
                subtitle="GrapeDawn"
                period="Jul 2024 - Oct 2024"
              >
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Developed responsive and accessible websites for various clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Created a custom CRM platform with React.js and TailwindCSS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Implemented security features in Next.js Project Management System</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />
                    <span>Enhanced API integrations improving performance by 40%</span>
                  </li>
                </ul>
              </TimelineCard>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-6">Education</h2>
              <TimelineCard
                icon={GraduationCap}
                title="Bachelor's in Computer Science"
                subtitle="Dr. D Y Patil College, Pune"
                period="2022-2025"
              />
              <TimelineCard
                icon={GraduationCap}
                title="Higher Secondary"
                subtitle="Saraswati Vishwa Vidyalaya"
                period="2019-2021"
              />
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <CertificationCard
                title="MERN Full-Stack Development"
                provider="100xDevs"
                year="Dec 2023 - Jul 2024"
                validationCode="HGYVVW19"
              />
              <CertificationCard
                title="Logic Building & Algorithms"
                provider="MARVELLOUS INFOSYSTEMS"
                year="July 2023 - Dec 2023"
                validationCode="https://drive.google.com/file/d/1qYAolbX_k79NhTfhBmYNn1UoKOer1fhR/view?usp=drive_link"
              />
              <CertificationCard
                title="RDBMS"
                provider="CODECRAVERS"
                year="July 2022 - Sept 2022"
                validationCode="https://drive.google.com/file/d/1XEdLUdGBUvnM5kBJmJdNsLcFP47B4I7c/view?usp=drive_link"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}