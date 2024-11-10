'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, GraduationCap, Calendar, Award, CheckCircle } from 'lucide-react'

const ExperienceCard = ({ icon: Icon, title, company, period, description }: { icon: React.ElementType; title: string; company: string; period: string; description: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[rgb(var(--card))] p-6 rounded-lg shadow-lg h-full"
  >
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-[rgb(var(--foreground))] mr-4" />
      <div>
        <h3 className="text-xl font-semibold text-[rgb(var(--foreground))]">{title}</h3>
        <p className="text-[rgb(var(--muted-foreground))]">{company}</p>
      </div>
    </div>
    <div className="flex items-center mb-2 text-[rgb(var(--muted-foreground))]">
      <Calendar className="w-4 h-4 mr-2" />
      <span>{period}</span>
    </div>
    <div className="text-[rgb(var(--foreground))]">{description}</div>
  </motion.div>
)

const EducationCard = ({ degree, school, year }: { degree: string; school: string; year: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[rgb(var(--card))] p-6 rounded-lg shadow-lg h-full"
  >
    <div className="flex items-center mb-4">
      <GraduationCap className="w-8 h-8 text-[rgb(var(--foreground))] mr-4" />
      <div>
        <h3 className="text-xl font-semibold text-[rgb(var(--foreground))]">{degree}</h3>
        <p className="text-[rgb(var(--muted-foreground))]">{school}</p>
      </div>
    </div>
    <div className="flex items-center text-[rgb(var(--muted-foreground))]">
      <Calendar className="w-4 h-4 mr-2" />
      <span>{year}</span>
    </div>
  </motion.div>
)

const CertificationCard = ({
  title,
  provider,
  year,
  validationCode,
}: {
  title: string;
  provider: string;
  year: string;
  validationCode: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-[rgb(var(--card))] p-6 rounded-lg shadow-lg h-full"
  >
    <div className="flex items-center mb-4">
      <Award className="w-8 h-8 text-[rgb(var(--foreground))] mr-4" />
      <div>
        <h3 className="text-xl font-semibold text-[rgb(var(--foreground))]">{title}</h3>
        <p className="text-[rgb(var(--muted-foreground))]">{provider}</p>
      </div>
    </div>
    <div className="flex items-center text-[rgb(var(--muted-foreground))] mb-2">
      <Calendar className="w-4 h-4 mr-2" />
      <span>{year}</span>
    </div>
    <div className="flex items-center text-[rgb(var(--accent-foreground))]">
      <CheckCircle className="w-4 h-4 mr-2" />
      <span>Validation Code: {validationCode}</span>
    </div>
  </motion.div>
)

const ExperienceEducation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.section
      id="experience"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="my-16"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-[rgb(var(--foreground))]">Experience, Education & Certifications</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4 text-[rgb(var(--foreground))]">Work Experience</h3>
          <div className="grid gap-6 h-full">
            <ExperienceCard
              icon={Briefcase}
              title="Frontend Developer Intern"
              company="GrapeDawn"
              period="Jul-2024 - Oct-2024"
              description={
                <ul className="list-disc list-inside space-y-2">
                  <li>Developed a responsive and accessible website for various clients, showcasing a modern and user-friendly interface.</li>
                  <li>Created a custom CRM platform utilizing React.js and TailwindCSS, leading to a 25% increase in user engagement through enhanced navigation and personalized styling.</li>
                  <li>Designed and implemented robust security features on the Next.js Project Management System, reducing vulnerability risks by 30% through role-based access controls and secure token storage.</li>
                  <li>Enhanced API integrations within the website, improving performance by 40% and contributing to a smoother and more reliable user experience.</li>
                </ul>
              }
            />
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4 text-[rgb(var(--foreground))]">Education</h3>
          <div className="grid gap-6 h-full">
            <EducationCard
              degree="Bachelor's in Computer Science"
              school="Dr. D Y Patil Arts, Commerce, Science College, Pimpri, Pune"
              year="2022-2025"
            />
            <EducationCard
              degree="Higher Secondary Curriculum"
              school="Saraswati Vishwa Vidyalaya, Talawade, Pune"
              year="2019-2021"
            />
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold mb-4 text-[rgb(var(--foreground))]">Certifications</h3>
          <div className="grid gap-6 h-full">
            <CertificationCard
              title="MERN Full-Stack Web Development"
              provider="100xDevs"
              year="Dec-2023 - Jul-2024"
              validationCode="HGYVVW19"
            />
            <CertificationCard
              title="Logic Buidling & Algorithms"
              provider="MARVELLOUS INFOSYSTEMS"
              year="July-2023 - Dec-2023"
              validationCode="https://drive.google.com/file/d/1qYAolbX_k79NhTfhBmYNn1UoKOer1fhR/view?usp=drive_link"
            />
            <CertificationCard
              title="Relational Database Management System"
              provider="CODECRAVERS"
              year="July-2022 - Sept-2022"
              validationCode="https://drive.google.com/file/d/1XEdLUdGBUvnM5kBJmJdNsLcFP47B4I7c/view?usp=drive_link"
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ExperienceEducation
