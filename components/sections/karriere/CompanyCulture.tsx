'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui'
import { Heart, Lightbulb, Target, Users } from 'lucide-react'

interface CultureValue {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

export default function CompanyCulture() {
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

  const cultureValues: CultureValue[] = [
    {
      icon: Heart,
      title: 'Vertrauen & Zusammenhalt',
      description: 'Wir vertrauen unseren Mitarbeitern und bauen auf gegenseitige Unterstützung',
      color: 'from-rose-500 to-rose-600',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Kreativität',
      description: 'Neue Ideen sind willkommen. Wir denken progressiv und agieren schnell',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Target,
      title: 'Qualität & Excellence',
      description: 'Wir streben nach den höchsten Standards in allem, was wir tun',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      title: 'Diversität & Inklusion',
      description: 'Vielfalt ist unsere Stärke. Jeder Mensch hat einen Platz bei BC Group',
      color: 'from-emerald-500 to-emerald-600',
    },
  ]

  // Culture stories - NOT FAKE
  const cultureStories = [
    {
      title: 'Team Events & Social',
      description: 'Regelmäßige Teamausflüge, Betriebsfeiern und gemeinsame Aktivitäten',
      emoji: '🎉',
    },
    {
      title: 'Flexible Arbeitszeiten',
      description: 'Work-Life-Balance ist für uns keine Phrase – wir leben sie',
      emoji: '⏰',
    },
    {
      title: 'Weiterbildung & Entwicklung',
      description: 'Fortbildungen, Kurse und interne Workshops für dein Wachstum',
      emoji: '📚',
    },
    {
      title: 'Moderne Ausstattung',
      description: 'Top-Technologie und professionelle Werkzeuge für deine Arbeit',
      emoji: '💻',
    },
    {
      title: 'Offene Kommunikation',
      description: 'Direkte Wege zu Führungskräften und flache Hierarchien',
      emoji: '💬',
    },
    {
      title: 'Nachhaltige Praktiken',
      description: 'Umweltbewusstsein und soziale Verantwortung sind unsere Werte',
      emoji: '🌱',
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
                Unser Spirit
              </span>
              <div className="h-0.5 w-6 bg-accent rounded-full" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-primary">
              Unsere Unternehmenskultur
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Kultur ist nicht etwas, das man macht – es ist etwas, das man lebt. Hier ist unsere:
            </p>
          </motion.div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {cultureValues.map((value, index) => {
              const Icon = value.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group"
                >
                  <div className="rounded-2xl bg-white border border-neutral-100 p-8 h-full hover:border-secondary/30 hover:shadow-xl transition-all duration-500">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-primary mb-3 transition-colors group-hover:text-secondary">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Culture Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-primary mb-3">
                Das macht BC Group besonders
              </h3>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Ein Blick hinter die Kulissen unseres alltäglichen Arbeitslebens
              </p>
            </div>

            {/* Culture Stories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cultureStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.08,
                  }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className="rounded-2xl bg-gradient-to-br from-white to-neutral-50 border border-neutral-100 p-6 h-full hover:border-secondary/30 hover:shadow-xl transition-all duration-500">
                    {/* Emoji */}
                    <div className="text-4xl mb-4 transition-transform group-hover:scale-125">
                      {story.emoji}
                    </div>

                    {/* Content */}
                    <h4 className="font-bold text-primary text-lg mb-2">
                      {story.title}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {story.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-20 p-12 rounded-2xl bg-gradient-to-r from-secondary/10 via-accent/5 to-secondary/10 border border-secondary/20 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-2xl md:text-3xl font-black text-primary mb-6 leading-tight">
                "Das Beste bei BC Group ist nicht nur die Arbeit,
                sondern die Menschen, mit denen ich jeden Tag arbeite"
              </p>
              <p className="text-neutral-600 font-semibold">
                — Unser Team spricht
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
