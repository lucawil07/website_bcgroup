'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui'
import { CheckCircle2, ArrowRight } from 'lucide-react'

interface ProcessStep {
  number: number
  title: string
  description: string
  duration: string
  icon: React.ComponentType<{ className?: string }>
}

export default function ApplicationProcess() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)
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

  const steps: ProcessStep[] = [
    {
      number: 1,
      title: 'Bewerbung einreichen',
      description: 'Sende deine Bewerbung über unser Online-Formular ein. Wir freuen uns auf deine Unterlagen!',
      duration: '5 Min',
      icon: CheckCircle2,
    },
    {
      number: 2,
      title: 'Initialscreening',
      description: 'Unser HR-Team prüft deine Unterlagen und passt sie zu unseren Anforderungen.',
      duration: '2-3 Tage',
      icon: CheckCircle2,
    },
    {
      number: 3,
      title: 'Telefoninterview',
      description: 'Erstes Kennenlernen mit unserem Team über ein kurzes, unkompliziertes Telefongespräch.',
      duration: '20-30 Min',
      icon: CheckCircle2,
    },
    {
      number: 4,
      title: 'Vor-Ort-Interview',
      description: 'Besuche unsere Zentrale und lerne dein zukünftiges Team persönlich kennen. Lockere Atmosphäre!',
      duration: '45-60 Min',
      icon: CheckCircle2,
    },
    {
      number: 5,
      title: 'Skill-Assessment',
      description: 'Je nach Position ein praxisbezogenes Assessment oder Aufgabe zur Überprüfung deiner Fähigkeiten.',
      duration: '1-2 Std',
      icon: CheckCircle2,
    },
    {
      number: 6,
      title: 'Angebot & Verhandlung',
      description: 'Wir freuen uns, dir ein maßgeschneidertes Angebot zu unterbreiten.',
      duration: '2-3 Tage',
      icon: CheckCircle2,
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
                Der Weg zu uns
              </span>
              <div className="h-0.5 w-6 bg-accent rounded-full" />
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-primary">
              Unser Bewerbungsprozess
            </h2>

            <p className="text-lg text-neutral-600 leading-relaxed">
              Ein transparenter, fairer Prozess ohne Überraschungen. So läuft's ab:
            </p>
          </motion.div>

          {/* Process Visualization */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -40 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                  onHoverStart={() => setActiveStep(step.number)}
                  onHoverEnd={() => setActiveStep(null)}
                  className="group"
                >
                  <div className="flex gap-8 items-stretch">
                    {/* Left Timeline Column */}
                    <div className="flex flex-col items-center gap-0 w-24">
                      {/* Circle */}
                      <motion.div
                        whileHover={{ scale: 1.15 }}
                        className="relative"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent p-1 shadow-lg">
                          <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                              {step.number}
                            </span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Connector Line */}
                      {index !== steps.length - 1 && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={
                            isVisible
                              ? { height: '120px' }
                              : { height: 0 }
                          }
                          transition={{
                            duration: 0.8,
                            delay: index * 0.08 + 0.3,
                          }}
                          className="w-1 bg-gradient-to-b from-secondary to-accent/30 my-2"
                        />
                      )}
                    </div>

                    {/* Right Content Column */}
                    <motion.div
                      animate={
                        activeStep === step.number
                          ? { x: 12 }
                          : { x: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="flex-1 pb-12"
                    >
                      <div
                        className={`rounded-2xl border-2 p-6 md:p-8 transition-all duration-500 ${
                          activeStep === step.number
                            ? 'border-secondary bg-gradient-to-br from-secondary/10 to-accent/5 shadow-xl shadow-secondary/20'
                            : 'border-neutral-100 bg-white hover:border-neutral-200'
                        }`}
                      >
                        {/* Header */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-3">
                          <div>
                            <h3 className="text-2xl font-bold text-primary mb-2">
                              {step.title}
                            </h3>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary font-semibold text-sm">
                              ⏱️ {step.duration}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-neutral-600 leading-relaxed text-base">
                          {step.description}
                        </p>

                        {/* Visual Indicator */}
                        {index !== steps.length - 1 && (
                          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-neutral-100">
                            <ArrowRight className="w-4 h-4 text-secondary/50" />
                            <span className="text-xs text-neutral-500 font-medium uppercase tracking-wide">
                              Nächster Schritt
                            </span>
                          </div>
                        )}

                        {/* Final step highlight */}
                        {index === steps.length - 1 && (
                          <div className="flex items-center gap-3 mt-6 pt-6 border-t border-secondary/20">
                            <CheckCircle2 className="w-5 h-5 text-secondary" />
                            <span className="text-sm font-semibold text-secondary">
                              Herzlich Willkommen im Team! 🎉
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* FAQ-like section at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 p-8 lg:p-12 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-neutral-100"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Häufige Fragen zum Prozess</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-primary mb-2">Wie lange dauert der gesamte Prozess?</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Im Durchschnitt 2-3 Wochen. Bei hochqualifizierten Kandidaten können wir den Prozess auch beschleunigen.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2">Kann ich mich für mehrere Stellen bewerben?</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Ja! Wenn dein Profil zu mehreren Positionen passt, können wir das gerne besprechen.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2">Werden alle Kandidaten benachrichtigt?</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Ja, wir geben allen Kandidaten ein Feedback. Transparenz ist uns wichtig.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2">Wann kann ich anfangen?</h4>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Das hängt von der Position und deiner Verfügbarkeit ab. Wir besprechen das individuell.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
