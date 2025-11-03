'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Wrench, Zap, AlertCircle, Droplet, Hammer, Lightbulb, Leaf, ThermometerSun } from 'lucide-react'

export default function HausmeisterServiceGrid() {
  const hausmeisterAccent = '#8b5cf6'

  const services = [
    {
      icon: Wrench,
      title: 'Routinewartung',
      description: 'Regelmäßige Inspektion und Wartung aller Gebäudesysteme',
      features: ['Monatliche Checks', 'Verschleißteile austausch', 'Dokumentation'],
      gradient: 'from-purple-600 to-purple-400'
    },
    {
      icon: Zap,
      title: 'Elektrotechnik',
      description: 'Wartung und Reparatur der Elektroanlage',
      features: ['Sicherheitschecks', 'Notfallservice', 'Zertifiziert']
    },
    {
      icon: Droplet,
      title: 'Sanitär & Heizung',
      description: 'Wasser- und Heizungssysteme im optimalen Zustand',
      features: ['Wartung & Reparatur', 'Heiztechnik', 'Rohrreinigung']
    },
    {
      icon: Lightbulb,
      title: 'Beleuchtung',
      description: 'Wartung und Optimierung der Beleuchtungssysteme',
      features: ['LED-Umstellung', 'Notbeleuchtung', 'Energieeffizienz']
    },
    {
      icon: Leaf,
      title: 'Reinigung & Grünflächen',
      description: 'Professionelle Gebäudereinigung und Grünanlagenpflege',
      features: ['Tägliche Reinigung', 'Garten & Grünflächen', 'Fassaden']
    },
    {
      icon: Hammer,
      title: 'Reparaturen & Instandhaltung',
      description: 'Schnelle und zuverlässige Notfallreparaturen',
      features: ['24/7 Notfall', 'Schnelle Response', 'Garantie']
    },
    {
      icon: AlertCircle,
      title: 'Sicherheit & Überwachung',
      description: 'Sicherheitssysteme und Überwachungstechnik',
      features: ['Kameras', 'Alarmsysteme', 'Zutrittsschutz']
    },
    {
      icon: ThermometerSun,
      title: 'Klimatechnik',
      description: 'Verwaltung von Lüftungs- und Klimaanlagen',
      features: ['Wartung & Reinigung', 'Optimierte Raumklimate', 'Energiesparen']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-white via-slate-50 to-white">
      <Container size="wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: hausmeisterAccent }}
          >
            Unsere Leistungen
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Umfassender Service
            <br />
            <span style={{ color: hausmeisterAccent }}>für jede Situation</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Von täglicher Instandhaltung bis zu Notfallreparaturen – wir bieten ein vollständiges Spektrum von Hausmeisterdiensten für Ihre Liegenschaft
          </p>
        </motion.div>

        {/* Service Grid with Unique Card Design */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isTop = index < 4
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
                className="group relative h-full"
              >
                {/* Card Container */}
                <div
                  className="relative h-full rounded-2xl overflow-hidden backdrop-blur-sm border-2 border-neutral-200 hover:border-purple-200 transition-all duration-500 p-6 flex flex-col bg-white/50 hover:bg-white/80"
                >
                  {/* Top accent bar - expands on hover */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 origin-left"
                    style={{ background: hausmeisterAccent }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon with rotating background */}
                  <motion.div
                    className="mb-5 w-fit"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `${hausmeisterAccent}15` }}>
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `${hausmeisterAccent}25` }}
                      />
                      <Icon className="w-8 h-8 relative z-10" style={{ color: hausmeisterAccent }} />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="space-y-2 pt-4 border-t border-neutral-200 group-hover:border-purple-200 transition-colors">
                    {service.features.map((feature, fidx) => (
                      <motion.div
                        key={fidx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + fidx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-xs font-semibold text-neutral-700 group-hover:text-neutral-900"
                      >
                        <span className="w-2 h-2 rounded-full" style={{ background: hausmeisterAccent }} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated Arrow */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 font-semibold transition-all group-hover:translate-x-2"
                    style={{ color: hausmeisterAccent }}
                  >
                    <span className="text-sm">Details</span>
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10"
                  style={{ background: hausmeisterAccent }}
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-neutral-600 mb-6">
            Alle Services sind flexibel buchbar – täglich, wöchentlich oder nach Bedarf
          </p>
          <a href="/kontakt" className="inline-block">
            <button
              className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all duration-300"
              style={{ background: hausmeisterAccent }}
            >
              Beratung vereinbaren
            </button>
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
