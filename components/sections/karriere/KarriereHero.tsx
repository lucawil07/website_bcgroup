'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui'
import { ArrowRight, Briefcase, Users, TrendingUp } from 'lucide-react'

export default function KarriereHero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Users, label: 'Team Members', value: '120+' },
    { icon: Briefcase, label: 'Open Roles', value: '8+' },
    { icon: TrendingUp, label: 'Growth Rate', value: '45%' },
  ]

  return (
    <Section background="white" padding="none">
      <div ref={sectionRef} className="relative overflow-hidden">
        {/* Background gradient elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-96 h-96 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl" />
        </div>

        <Container size="wide" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-32">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-8 bg-gradient-to-b from-secondary to-accent rounded-full" />
                <span className="text-secondary font-bold text-xs uppercase tracking-widest">
                  Karriere bei BC Group
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                  <span className="block text-primary">Gestalte</span>
                  <span className="block gradient-text">deine Zukunft</span>
                  <span className="block text-primary">mit uns</span>
                </h1>

                {/* Refined separator */}
                <div className="flex items-center gap-2 pt-2">
                  <div className="h-0.5 w-8 bg-secondary rounded-full" />
                  <div className="h-0.5 w-6 bg-accent rounded-full" />
                </div>
              </div>

              {/* Subheading */}
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light max-w-lg">
                Werde Teil eines innovativen Teams, das Berlin mit professionellen Dienstleistungen verändert. Wir suchen leidenschaftliche Menschen, die Exzellenz anstreben.
              </p>

              {/* CTA Button */}
              <motion.button
                whileHover={{ x: 8 }}
                className="group inline-flex items-center gap-3 mt-8 px-8 py-4 bg-gradient-to-r from-secondary to-secondary/80 text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50"
              >
                Offene Stellen entdecken
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </motion.button>
            </motion.div>

            {/* Right: Visual Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="group relative p-6 lg:p-8 rounded-2xl bg-white border border-neutral-100 hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-br hover:from-secondary/5 to-transparent"
                  >
                    {/* Accent line */}
                    <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-secondary to-accent rounded-full transition-all duration-300 group-hover:h-full" />

                    <div className="pl-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-secondary/10 to-accent/10 group-hover:from-secondary/20 group-hover:to-accent/20 transition-colors">
                          <Icon className="w-6 h-6 text-secondary" />
                        </div>
                      </div>
                      <div className="text-3xl lg:text-4xl font-black text-primary mb-2 transition-colors group-hover:text-secondary">
                        {stat.value}
                      </div>
                      <div className="text-sm text-neutral-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              {/* Brand statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-neutral-100"
              >
                <p className="text-sm font-semibold text-neutral-700 italic">
                  "Wir investieren in Menschen, die unsere Vision teilen und Berlin besser machen wollen."
                </p>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </div>
    </Section>
  )
}
