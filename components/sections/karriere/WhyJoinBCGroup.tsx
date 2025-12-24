'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui'
import {
  Heart,
  Zap,
  BarChart3,
  Users2,
  Briefcase,
  Lightbulb,
  Target,
  Award,
} from 'lucide-react'

interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
  darkColor: string
}

export default function WhyJoinBCGroup() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const benefits: BenefitItem[] = [
    {
      icon: Heart,
      title: 'Gutes Klima',
      description: 'Arbeite mit Menschen, die sich gegenseitig unterstützen und geschätzt werden',
      color: 'from-rose-500 to-rose-600',
      darkColor: 'from-rose-900 to-rose-800',
    },
    {
      icon: Zap,
      title: 'Moderne Technologie',
      description: 'Nutze state-of-the-art Tools und Systeme, um effizient zu arbeiten',
      color: 'from-amber-500 to-amber-600',
      darkColor: 'from-amber-900 to-amber-800',
    },
    {
      icon: BarChart3,
      title: 'Berufliche Entwicklung',
      description: 'Wachse mit uns und entwickle deine Fähigkeiten kontinuierlich weiter',
      color: 'from-blue-500 to-blue-600',
      darkColor: 'from-blue-900 to-blue-800',
    },
    {
      icon: Users2,
      title: 'Starkes Team',
      description: 'Erlebe Zusammenarbeit auf neuer Ebene mit talentierten Profis',
      color: 'from-emerald-500 to-emerald-600',
      darkColor: 'from-emerald-900 to-emerald-800',
    },
    {
      icon: Briefcase,
      title: 'Faire Vergütung',
      description: 'Kompetitive Gehälter und Benefits, die deine Leistung würdigen',
      color: 'from-purple-500 to-purple-600',
      darkColor: 'from-purple-900 to-purple-800',
    },
    {
      icon: Lightbulb,
      title: 'Kreative Freiheit',
      description: 'Bringe deine Ideen ein und gestalte aktiv unsere Zukunft mit',
      color: 'from-cyan-500 to-cyan-600',
      darkColor: 'from-cyan-900 to-cyan-800',
    },
    {
      icon: Target,
      title: 'Klare Ziele',
      description: 'Arbeite an Projekten mit sichtbarem Impact und klarem Sinn',
      color: 'from-orange-500 to-orange-600',
      darkColor: 'from-orange-900 to-orange-800',
    },
    {
      icon: Award,
      title: 'Anerkennung',
      description: 'Deine Leistungen werden gesehen, gelobt und belohnt',
      color: 'from-indigo-500 to-indigo-600',
      darkColor: 'from-indigo-900 to-indigo-800',
    },
  ]

  return (
    <Section background="white" padding="large">
      <Container size="wide">
        <div ref={sectionRef}>
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-20"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-0.5 w-6 bg-secondary rounded-full" />
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">
                Warum BC Group
              </span>
              <div className="h-0.5 w-6 bg-accent rounded-full" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-primary">
              Mehr als ein Job
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Wir bieten nicht nur eine Position, sondern einen Platz in einer dynamischen
              Gemeinschaft, wo deine Talente wirklich zählen.
            </p>
          </motion.div>

          {/* Benefits Grid with Unique Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon

              // Stagger animation delays
              const delays = [0.1, 0.2, 0.15, 0.25, 0.3, 0.12, 0.22, 0.28]

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: delays[index],
                    ease: [0.23, 1, 0.320, 1],
                  }}
                  whileHover={{
                    y: -12,
                    transition: { duration: 0.3 },
                  }}
                  className="group relative"
                >
                  {/* Card Container */}
                  <div className="relative h-full rounded-2xl bg-white border border-neutral-100 p-8 transition-all duration-500 hover:border-neutral-200 hover:shadow-xl">
                    {/* Top accent gradient */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} rounded-t-2xl transition-all duration-500 group-hover:h-1.5`} />

                    {/* Icon Container with gradient background */}
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${benefit.color} mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                      style={{
                        boxShadow: `0 10px 30px -10px rgba(var(--rgb-gradient), 0.3)`,
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-primary mb-3 transition-colors group-hover:text-secondary">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {benefit.description}
                    </p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-secondary to-accent transition-all duration-500 group-hover:w-full rounded-b-2xl" />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
