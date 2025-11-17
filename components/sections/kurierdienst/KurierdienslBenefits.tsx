'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { TrendingUp, Shield, Zap, Users, Award, Globe } from 'lucide-react'

export default function KurierdienslBenefits() {
  const accent = '#00d4ff'
  const primary = '#001a33'

  const benefits = [
    {
      icon: Zap,
      number: '01',
      title: 'Vertragliche Planung',
      description: 'Feste Touren und planbare Abläufe – ideal für Unternehmen mit regelmäßigem Lieferbedarf.',
      stats: '100%',
      highlight: 'Planungssicherheit'
    },
    {
      icon: Users,
      number: '03',
      title: 'Persönlicher Ansprechpartner',
      description: 'Direkter Kontakt und feste Ansprechpartner für jeden Vertragspartner.',
      stats: 'Individuelle',
      highlight: 'Betreuung'
    },
    {
      icon: TrendingUp,
      number: '02',
      title: 'Zuverlässig & Pünktlich',
      description: 'Garantierte Lieferzeiten für alle Sendungen.',
      stats: '100%',
      highlight: 'Liefertreue'
    },
    {
      icon: Globe,
      number: '04',
      title: 'Ganz Berlin & Umland',
      description: 'Komplette Abdeckung von Berlin und bis zu 50 km Umland.',
      stats: 'Alle Bezirke',
      highlight: 'erreichbar'
    },
    {
      icon: Award,
      number: '05',
      title: 'Geschultes Fachpersonal',
      description: 'Erfahrene Fahrer mit Ortskenntnis und professionellem Auftreten.',
      stats: 'Qualifiziertes',
      highlight: 'Fahrpersonal'
    },
    {
      icon: Shield,
      number: '06',
      title: 'Hohe Erreichbarkeit',
      description: 'Direkter Kontakt zum Team und flexible Lösungen für Ihre Bedürfnisse.',
      stats: '24/7',
      highlight: 'Erreichbarkeit'
    }
  ]

  return (
    <Section padding="large" className="relative bg-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -left-32 top-1/2 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${accent}10, transparent)` }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <Container size="wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Warum BC Group für
            <br />
            <span style={{ color: accent }}>Kurierdienste</span>?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Mit unserer Erfahrung, Zuverlässigkeit und modernen Technologie setzen wir neue Standards im Kurierdienst
          </p>
        </motion.div>

        {/* Benefits Grid - Advanced layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            const isHighlighted = index === 0 || index === 1

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className={`relative p-8 rounded-2xl border-2 transition-all duration-300 h-full flex flex-col group ${
                    isHighlighted
                      ? 'border-cyan-300 bg-gradient-to-br from-cyan-50 to-white'
                      : 'border-neutral-200 bg-white hover:border-cyan-200'
                  }`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 20px 40px ${accent}15`,
                  }}
                >
                  {/* Highlighted background glow */}
                  {isHighlighted && (
                    <div className="absolute inset-0 rounded-2xl" style={{ background: `${accent}05` }} />
                  )}

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Number Badge */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 flex-shrink-0" style={{ background: `${accent}15` }}>
                      <span className="text-lg font-black" style={{ color: accent }}>
                        {benefit.number}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                      style={{ background: isHighlighted ? `${accent}20` : `${accent}10` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: accent }} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-neutral-900 mb-3">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
                      {benefit.description}
                    </p>

                    {/* Stats Box */}
                    <div className="pt-6 border-t-2" style={{ borderColor: isHighlighted ? `${accent}20` : '#e5e7eb' }}>
                      <div className="text-center">
                        <p className="text-3xl font-black mb-1" style={{ color: accent }}>
                          {benefit.stats}
                        </p>
                        <p className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                          {benefit.highlight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hover arrow */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ background: `${accent}20` }}
                    >
                      <span style={{ color: accent }} className="text-lg">
                        →
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
