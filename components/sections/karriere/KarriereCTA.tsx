'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Section, Container, Button } from '@/components/ui'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function KarriereCTA() {
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

  const contactMethods = [
    {
      icon: Mail,
      label: 'E-Mail',
      value: 'karriere@bcgroup.de',
      href: 'mailto:karriere@bcgroup.de',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+49 (0) 30 / XXX-XXXXX',
      href: 'tel:+49301234567890',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Berlin, Deutschland',
      href: '/kontakt',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <Section background="white" padding="large">
      <Container size="wide">
        <div ref={sectionRef}>
          {/* Main CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-primary">
                Bereit, dein Abenteuer zu starten?
              </h2>

              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                Deine Bewerbung ist die perfekte erste Nachricht. Lass uns wissen, warum du zu uns passen würdest.
              </p>
            </div>

            {/* Primary CTA Button */}
            <motion.div whileHover={{ y: -2 }} className="inline-block mt-8">
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-secondary to-secondary/80 hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300 flex items-center gap-3 text-white font-semibold"
                >
                  Jetzt bewerben
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {contactMethods.map((method, index) => {
              const Icon = method.icon

              return (
                <motion.a
                  key={index}
                  href={method.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="rounded-2xl bg-white border border-neutral-100 p-8 h-full transition-all duration-500 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/20 cursor-pointer">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${method.color} mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-primary mb-2 transition-colors group-hover:text-secondary">
                      {method.label}
                    </h3>

                    <p className="text-neutral-600 font-medium mb-4">
                      {method.value}
                    </p>

                    {/* Hover indicator */}
                    <div className="flex items-center gap-2 text-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold">Kontaktieren</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Divider */}
          <div className="my-20 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quick tips */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">💡 Tipps für deine Bewerbung</h3>
                <ul className="space-y-3">
                  {[
                    'Sei authentisch und persönlich',
                    'Zeige dein echtes Interesse',
                    'Personalisiere dein Anschreiben',
                    'Hebe deine Stärken hervor',
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-secondary font-bold flex-shrink-0 mt-1">✓</span>
                      <span className="text-neutral-600">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">⏱️ Was ist die nächste Schritt?</h3>
                <div className="space-y-3">
                  <p className="text-neutral-600">
                    Nach der Einreichung prüfen wir deine Unterlagen innerhalb von <span className="font-semibold text-primary">2-3 Arbeitstagen</span>.
                  </p>
                  <p className="text-neutral-600">
                    Wenn es passt, melden wir uns sofort bei dir. Versprochen!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final motivational message */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 p-8 lg:p-12 text-center rounded-2xl bg-gradient-to-r from-accent/10 via-secondary/10 to-accent/10 border border-accent/20"
          >
            <p className="text-xl md:text-2xl font-bold text-primary leading-relaxed">
              Wir können es kaum erwarten, dich kennenzulernen.{' '}
              <span className="text-secondary">Die perfekte Gelegenheit wartet auf dich.</span>
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
