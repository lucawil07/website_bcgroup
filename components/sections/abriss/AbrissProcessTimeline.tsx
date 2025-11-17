'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { CheckCircle2, FileText, Truck, BarChart3 } from 'lucide-react'

export default function AbrissProcessTimeline() {
  const abrissaccent = '#d97706'
  
  const steps = [
    {
      number: '01',
      title: 'Beratung & Planung',
      description: 'Persönliche Ortsbesichtigung, Analyse, Kostenaufstellung und Genehmigungsplanung',
      icon: FileText,
      details: ['Umfangreiche Beratung', 'Kostenloses Angebot', 'Genehmigungsberatung']
    },
    {
      number: '02',
      title: 'Genehmigungen',
      description: 'Falls erforderlich: Einreichung aller erforderlichen Unterlagen bei den Behörden',
      icon: CheckCircle2,
      details: ['Alle Dokumentation', 'Behördenkoordination', 'Genehmigte Durchführung']
    },
    {
      number: '03',
      title: 'Durchführung',
      description: 'Professionelle Abwicklung mit modernster Technik und Sicherheitsmaßnahmen',
      icon: Truck,
      details: ['Zertifizierte Teams', 'Modernste Technik', 'Volle Sicherheit']
    },
    {
      number: '04',
      title: 'Entsorgung & Verwertung',
      description: 'Komplette Entsorgung mit maximaler Recycling- und Verwertungsquote',
      icon: BarChart3,
      details: ['100% Nachhaltigkeit', 'Optimale Verwertung', 'Dokumentation']
    }
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-amber-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full" style={{ background: `${abrissaccent}10` }} />
      </div>

      <Container size="wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
            Unser Abriss-Prozess
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Von der ersten Beratung bis zur abschließenden Entsorgung - ein transparenter und strukturierter Ablauf
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full" style={{ background: `${abrissaccent}20` }} />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative mb-12"
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Content Box */}
                    <motion.div
                      className="p-8 rounded-2xl border-2 border-neutral-200 hover:border-amber-300 transition-all duration-300 relative z-10 lg:col-start-1"
                      whileHover={{ scale: 1.02, boxShadow: `0 0 30px ${abrissaccent}20` }}
                    >
                      {/* Accent bar */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                        style={{ background: abrissaccent }}
                      />

                      <div className="space-y-4">
                        {/* Number */}
                        <div className="inline-block">
                          <span
                            className="text-4xl font-black opacity-20"
                            style={{ color: abrissaccent }}
                          >
                            {step.number}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-neutral-900">{step.title}</h3>

                        {/* Description */}
                        <p className="text-neutral-600 leading-relaxed">{step.description}</p>

                        {/* Details */}
                        <div className="space-y-2 pt-4 border-t border-neutral-200">
                          {step.details.map((detail, didx) => (
                            <div key={didx} className="flex items-center gap-2 text-sm text-neutral-700">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: abrissaccent }} />
                              {detail}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Icon Circle - Hidden on mobile */}
                    <div className="hidden lg:flex justify-center">
                      <motion.div
                        className="w-20 h-20 rounded-full flex items-center justify-center z-20 relative"
                        style={{ background: abrissaccent }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Arrow to next */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:flex justify-center mt-12"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      <div style={{ color: abrissaccent }} className="text-2xl">↓</div>
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
