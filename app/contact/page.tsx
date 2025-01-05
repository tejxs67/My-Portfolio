'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { ContactCard } from '@/components/contact/contact-card'

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 9112966306",
      href: "tel:+919112966306"
    },
    {
      icon: Mail,
      title: "Email",
      content: "tejasph1@gmail.com",
      href: "mailto:tejasph1@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Pune, Maharashtra",
      href: "https://maps.google.com/?q=Pune,Maharashtra"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      content: "linkedin.com/in/tejasph-li",
      href: "https://linkedin.com/in/tejasph-li"
    }
  ]

  return (
    <div className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[rgb(220,70,50)] via-[rgb(160,60,245)] to-[rgb(80,50,220)]">
            Get in Touch
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <ContactCard key={index} {...info} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}