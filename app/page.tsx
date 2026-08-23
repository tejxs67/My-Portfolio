'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ArrowUpRight,
  Building2,
  GraduationCap,
  Award,
  Cloud,
  Cpu,
} from 'lucide-react'

type Star = {
  top: string
  left: string
  size: number
  delay: string
  duration: string
  accent: boolean
}

function useStars(count: number): Star[] {
  return useMemo(() => {
    const stars: Star[] = []
    for (let i = 0; i < count; i++) {
      stars.push({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 1.8 + 0.6,
        delay: `${Math.random() * 6}s`,
        duration: `${Math.random() * 5 + 3}s`,
        accent: Math.random() > 0.82,
      })
    }
    return stars
  }, [count])
}

function Starfield({ count = 110 }: { count?: number }) {
  const stars = useStars(count)
  return (
    <div
      aria-hidden
      className="fixed inset-0 overflow-hidden pointer-events-none -z-10"
    >
      <div className="nebula w-[40rem] h-[40rem] bg-sky-500 top-[-12rem] left-[-10rem]" />
      <div
        className="nebula w-[34rem] h-[34rem] bg-indigo-500 bottom-[-10rem] right-[-8rem]"
        style={{ animationDelay: '-6s' }}
      />
      {stars.map((s, i) => (
        <span
          key={i}
          className={`star ${s.accent ? 'star--accent' : ''}`}
          style={{
            top: s.top,
            left: s.left,
            width: `${s.size}px`,
            height: `${s.size}px`,
            ['--delay' as string]: s.delay,
            ['--dur' as string]: s.duration,
          }}
        />
      ))}
    </div>
  )
}

function Section({
  id,
  label,
  children,
  className = '',
}: {
  id: string
  label: string
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={`mx-auto max-w-2xl px-6 py-14 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      <p className="section-label mb-3">{label}</p>
      {children}
    </section>
  )
}

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certs' },
]

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Starfield />

      <header className="fixed top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-2xl px-6 h-14 flex items-center justify-between">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            TP
          </a>
          <nav className="hidden sm:flex items-center gap-6 text-[0.82rem] text-neutral-400">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div id="top" className="mx-auto max-w-2xl px-6 pt-40 pb-6">
        <p className="section-label mb-4">software engineer</p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
          tejas phopale<span className="text-red-400">.</span>
        </h1>
        <p className="mt-5 text-base sm:text-lg text-neutral-400 leading-relaxed max-w-xl">
          building backend systems & distributed services at{' '}
          <span className="text-sky-400">17LIVE</span>, Asia&apos;s leading live
          entertainment platform.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="mailto:tejasph1@gmail.com"
            className="glass-btn"
            aria-label="Email"
          >
            <Mail size={16} />
            Contact
          </a>
          <a
            href="https://linkedin.com/in/tejasph-li"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-btn"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="tel:+919112966306"
            className="glass-btn"
            aria-label="Phone"
          >
            <Phone size={16} />
            Call
          </a>
        </div>

        <div className="mt-10 flex items-center gap-5 text-sm text-neutral-500">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} /> Pune, India
          </span>
          <span className="h-1 w-1 rounded-full bg-neutral-700" />
          <span className="flex items-center gap-1.5">
            <Building2 size={14} /> 17LIVE Inc.
          </span>
          <span className="h-1 w-1 rounded-full bg-neutral-700" />
          <span className="flex items-center gap-1.5">
            <Github size={14} /> Remote · Taiwan HQ
          </span>
        </div>
      </div>

      <Section id="experience" label="Experience">
        <div className="space-y-6">
          <article className="border border-neutral-800/80 rounded-xl p-5 bg-white/[0.02]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium">Software Engineer</h3>
                <p className="text-sm text-neutral-400">17LIVE Inc.</p>
              </div>
              <span className="text-xs text-neutral-500 whitespace-nowrap pt-1">
                Jun 2025 — Present
              </span>
            </div>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
              High-scale Go microservices, REST APIs,Feature Implementation, Braze OpenID sync,
              SlackBot automation, GCP Pub/Sub workflows, MongoDB & Redis
              optimization, CI/CD, Kibana tracing, GCP scripts.
            </p>
          </article>

          <article className="border border-neutral-800/80 rounded-xl p-5 bg-white/[0.02]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-medium">Internship Trainee</h3>
                <p className="text-sm text-neutral-400">GrapeDawn</p>
              </div>
              <span className="text-xs text-neutral-500 whitespace-nowrap pt-1">
                Jul 2024 — Oct 2024
              </span>
            </div>
            <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
              Built responsive client websites, a custom CRM in React &
              Tailwind, and security features in a Next.js project management
              system.
            </p>
          </article>
        </div>
      </Section>

      <Section id="work" label="Work So Far">
        <ul className="space-y-0">
          {[
            'Braze OpenID synchronization — backend workflow syncing user OpenIDs with Braze via async processing.',
            'Internal SlackBot automation — operational Slack commands for production support workflows.',
            'GCP Pub/Sub event workflows — asynchronous event-driven pipelines across microservices.',
            'MongoDB & Redis optimization — index tuning, access-pattern analysis, and Redis TTL strategy.',
            'Spring Boot peer feedback platform — backend application built with Spring Boot.',
            'AI YouTube Shorts pipeline — AI content pipeline that generated 900K+ views in 28 days.',
            'Built 3 gemini skills that was used across backend engineers',
          ].map((w) => (
            <li
              key={w}
              className="group flex items-start gap-3 border-b border-neutral-800/60 py-3 transition-colors hover:border-sky-500/40"
            >
              <ArrowUpRight
                size={15}
                className="mt-1 text-neutral-600 group-hover:text-sky-400 transition-colors shrink-0"
              />
              <span className="text-sm text-neutral-300 leading-relaxed">
                {w}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="education" label="Education">
        <div className="space-y-4">
          {[
            {
              icon: GraduationCap,
              t: "Master's Degree — DY Patil University" ,
              d: 'Comupter Science · 2025 — 2027 · Score 8.55'
            },
            {
              icon: GraduationCap,
              t: "Bachelor's Degree — DY Patil University",
              d: 'Comupter Science · 2022 — 2025 · Score 7.82',
            },
            {
              icon: Building2,
              t: 'Higher Secondary — Saraswati Vishwa Vidyalaya',
              d: '2019 — 2021',
            },
            {
              icon: Building2,
              t: 'Primary Education — Amrita Vidyalayam',
              d: '2006 — 2019',
            },
          ].map((e) => (
            <div
              key={e.t}
              className="flex items-start gap-3 border border-neutral-800/80 rounded-xl p-4 bg-white/[0.02]"
            >
              <e.icon size={18} className="mt-0.5 text-sky-400 shrink-0" />
              <div>
                <h3 className="text-sm font-medium">{e.t}</h3>
                <p className="text-sm text-neutral-500">{e.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="skills" label="Skills">
        <div className="space-y-4">
          <div>
            <p className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
              <Cpu size={13} /> Languages & Backend
            </p>
            <div className="flex flex-wrap gap-2">
              {['C','C++','Java','Go','Python','REST APIs','Microservices','Spring Boot'].map(
                (s) => (
                  <span key={s} className="tag">
                    {s}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
              <Cloud size={13} /> Cloud & Infra
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'GCP',
                'AWS',
                'Docker',
                'CI/CD',
                'Pub/Sub',
                'Kibana/KQL',
                'Elastic Search',
                'Datadog',
                'Jira',
                'Github',
                'BurpSuite',
              ].map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className="flex items-center gap-2 text-xs text-neutral-500 mb-2">
              <Building2 size={13} /> Data & Storage
            </p>
            <div className="flex flex-wrap gap-2">
              {['MongoDB', 'Redis', 'MySQL', 'SQLite', 'PostgreSQL', 'BigQuery', 'SupaBase', 'Braze'].map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="certifications" label="Certifications">
        <div className="grid sm:grid-cols-2 gap-2.5">
          {[
            ['Databases with Python', 'Udemy · Mar 2025'],
            ['Deloitte Cyber Job Simulation', 'Forage · Mar 2025'],
            ['AWS for Beginners', 'Great Learning · Nov 2024'],
            ['Python Programming for Everyone', 'Udemy · Nov 2024'],
            ['JPMorganChase Intern (Job Simulation)', 'Forage · Jul 2024'],
            ['Tata Group Intern (Job Simulation)', 'Forage · Jul 2024'],
            ['Postman API Fundamentals Expert', 'Postman · Sep 2024'],
            ['100xDevs Student', 'Dec 2023'],
            ['Logic Building & Algorithms', 'Marvellous · Sep 2023'],
            ['RDBMS', 'CodeCravers · May 2022'],
          ].map(([t, p]) => (
            <div
              key={t}
              className="flex items-start gap-2.5 border border-neutral-800/80 rounded-lg p-3 bg-white/[0.02]"
            >
              <Award size={15} className="mt-0.5 text-sky-400 shrink-0" />
              <div>
                <p className="text-[0.85rem] font-medium leading-snug">{t}</p>
                <p className="text-xs text-neutral-500">{p}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <footer className="mx-auto max-w-2xl px-6 py-12 border-t border-neutral-800/60 mt-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-sm text-neutral-500">
            Tejas Phopale · Pune, India
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:tejasph1@gmail.com"
              className="glass-btn"
              aria-label="Email"
            >
              <Mail size={15} /> Email
            </a>
            <a
              href="https://linkedin.com/in/tejasph-li"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href="tel:+919112966306" className="glass-btn" aria-label="Phone">
              <Phone size={15} /> Call
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
