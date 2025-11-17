'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { TrendingUp, Building2, Heart, Zap } from 'lucide-react'

export default function HausmeisterStatistics() {
  const hausmeisterAccent = '#8b5cf6'

  const achievements = [
    {
      icon: Building2,
      number: '130+',
      label: 'Gebäude verwaltet',
      description: 'Von Einzelgebäuden bis zu Liegenschaftsportfolios',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      icon: Heart,
      number: '100%',
      label: 'Kundenzufriedenheit',
      description: 'Durch kontinuierliche Qualität und Zuverlässigkeit',
      color: 'from-red-500 to-pink-400'
    },
    {
      icon: TrendingUp,
      number: '5+',
      label: 'Fachbereiche',
      description: 'Vielseitige Expertise für alle Anforderungen',
      color: 'from-green-500 to-emerald-400'
    },
    {
      icon: Zap,
      number: '1h',
      label: 'Response-Zeit',
      description: 'Notfallreparaturen im Standard 60-Minuten-Service',
      color: 'from-orange-500 to-yellow-400'
    }
  ]

  const trustIndicators = [
    {
      title: 'Für Eigentümer & Verwalter',
      items: [
        'Werterhalt der Immobilie',
        'Kosteneinsparung durch Prävention',
        'Entlastung bei Organisation',
        'Transparente Dokumentation'
      ]
    },
    {
      title: 'Für Mieter & Bewohner',
      items: [
        'Gepflegte Wohnumgebung',
        'Schnelle Hilfe bei Problemen',
        'Höhere Wohn- und Aufenthaltsqualität',
        'Fester Ansprechpartner vor Ort'
      ]
    },
    {
      title: 'Zuverlässige Betreuung',
      items: [
        'Geschultes Personal',
        'Moderne Ausrüstung',
        'Strukturierte Arbeitsweise',
        'Dokumentation aller Einsätze'
      ]
    },
    {
      title: 'Maßgeschneidert',
      items: [
        'Individuelle Betreuungskonzepte',
        'Perfekt auf Ihre Immobilie abgestimmt',
        'Wohnanlage, Büro oder Gewerbe',
        'Flexibel anpassbar'
      ]
    }
  ]

  return (
    <Section padding="none" className="relative bg-gradient-to-br from-neutral-900 to-black overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/3 -right-32 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${hausmeisterAccent}25, transparent)` }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${hausmeisterAccent}15, transparent)` }}
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, delay: 0.5 }}
        />
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ihre Vorteile mit
            <br />
            <span style={{ color: hausmeisterAccent }}>BC Hausmeisterservice</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Unser Versprechen: Ein sauberes, sicheres und gepflegtes Gebäude – dauerhaft, effizient und stressfrei für Sie
          </p>
        </motion.div>

        {/* Main Statistics Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {achievements.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative rounded-2xl overflow-hidden p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md bg-white/5 hover:bg-white/10 h-full`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${item.color}`} />

                {/* Accent line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 origin-left"
                  style={{ background: hausmeisterAccent }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-6 w-fit"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${hausmeisterAccent}20` }}>
                      <Icon className="w-7 h-7" style={{ color: hausmeisterAccent }} />
                    </div>
                  </motion.div>

                  {/* Number */}
                  <motion.p
                    className="text-4xl md:text-5xl font-black text-white mb-2"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {item.number}
                  </motion.p>

                  {/* Label */}
                  <p className="text-sm font-bold uppercase tracking-wider mb-3" style={{ color: hausmeisterAccent }}>
                    {item.label}
                  </p>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Trust Indicators Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden p-8 border-2 border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-md bg-white/5 hover:bg-white/10">
                {/* Accent line */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 origin-left"
                  style={{ background: hausmeisterAccent }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Title */}
                <h4 className="text-lg font-bold text-white mb-6" style={{ textShadow: `0 0 20px ${hausmeisterAccent}30` }}>
                  {indicator.title}
                </h4>

                {/* Items */}
                <div className="space-y-3">
                  {indicator.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + itemIdx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-2 h-2 rounded-full" style={{ background: hausmeisterAccent }} />
                      <span className="text-sm text-white/80 font-semibold">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 lg:p-16 text-center"
          style={{ background: `linear-gradient(135deg, ${hausmeisterAccent}, ${hausmeisterAccent}80)` }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(45deg, white 1px, transparent 1px, transparent 10px, white 10px)`,
            backgroundSize: '14px 14px'
          }} />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Mit BC Hausmeisterservice haben Sie einen Partner,
            </h3>
            <p className="text-white/95 text-lg leading-relaxed mb-8">
              der zuverlässig für Ihre Immobilie da ist – dauerhaft gepflegte Gebäude, sichere Außenanlagen und transparente Kommunikation.
            </p>
            <a href="/kontakt" className="inline-block">
              <button className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider bg-white text-purple-900 hover:bg-neutral-100 transition-all duration-300 shadow-xl hover:shadow-2xl">
                Jetzt Service anfragen
              </button>
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
