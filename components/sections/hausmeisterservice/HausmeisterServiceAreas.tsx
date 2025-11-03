'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Building2, Home, Factory, Store, MapPin } from 'lucide-react'

export default function HausmeisterServiceAreas() {
  const hausmeisterAccent = '#8b5cf6'

  const serviceAreas = [
    {
      category: 'Wohngebäude',
      description: 'Mehrfamilienhäuser, Wohnkomplexe, Kondominien',
      icon: Home,
      coverage: ['Treppenhaus-Reinigung', 'Hof & Grünanlagen', 'Beleuchtung'],
      color: 'from-blue-500 to-cyan-400',
      stat: '450+ Gebäude'
    },
    {
      category: 'Bürogebäude',
      description: 'Moderne Bürokomplexe, Business-Center',
      icon: Building2,
      coverage: ['Facility Management', 'Energieoptimierung', 'Sicherheit'],
      color: 'from-purple-500 to-pink-400',
      stat: '280+ Objekte'
    },
    {
      category: 'Gewerbe & Industrie',
      description: 'Fabriken, Lagerhallen, Produktionsstätten',
      icon: Factory,
      coverage: ['Technische Systeme', 'Wartung & Service', 'Sicherheit'],
      color: 'from-orange-500 to-red-400',
      stat: '85+ Anlagen'
    },
    {
      category: 'Einzelhandel',
      description: 'Ladengeschäfte, Shopping-Center, Retail-Komplexe',
      icon: Store,
      coverage: ['Ladenbau-Maß', 'Einkaufszentren-Service', 'Kundenzone'],
      color: 'from-green-500 to-emerald-400',
      stat: '180+ Standorte'
    }
  ]

  const regions = [
    { name: 'Mitte', percentage: 18 },
    { name: 'Charlottenburg', percentage: 15 },
    { name: 'Kreuzberg', percentage: 12 },
    { name: 'Tempelhof', percentage: 14 },
    { name: 'Lichtenberg', percentage: 11 },
    { name: 'Prenzlauer Berg', percentage: 16 },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <Section padding="large" className="relative bg-gradient-to-br from-white via-purple-50 to-white overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${hausmeisterAccent}15, transparent)` }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${hausmeisterAccent}15, transparent)` }}
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, delay: 0.5 }}
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
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Überall in Berlin
            <br />
            <span style={{ color: hausmeisterAccent }}>für Sie tätig</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Mit einer breiten Abdeckung und dezentralen Teams sind wir schnell vor Ort – egal in welchem Bezirk Sie sind
          </p>
        </motion.div>

        {/* Service Area Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {serviceAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative h-full"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 bg-gradient-to-br ${area.color}`} />

                {/* Card */}
                <div className="relative h-full rounded-2xl border-2 border-neutral-200 hover:border-purple-300 transition-all duration-300 p-8 bg-white hover:bg-white/95 overflow-hidden">
                  {/* Top accent line */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 origin-left"
                    style={{ background: hausmeisterAccent }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="mb-6 w-fit"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `${hausmeisterAccent}15` }}>
                      <Icon className="w-8 h-8" style={{ color: hausmeisterAccent }} />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{area.category}</h3>
                  <p className="text-neutral-600 text-sm mb-6 leading-relaxed">{area.description}</p>

                  {/* Coverage bullets */}
                  <div className="space-y-2 mb-6 pb-6 border-b border-neutral-200 group-hover:border-purple-200 transition-colors">
                    {area.coverage.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-xs font-semibold text-neutral-700"
                      >
                        <span className="w-2 h-2 rounded-full" style={{ background: hausmeisterAccent }} />
                        {item}
                      </motion.div>
                    ))}
                  </div>

                  {/* Stat */}
                  <p className="text-xs uppercase font-bold tracking-wider" style={{ color: hausmeisterAccent }}>
                    {area.stat}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Regional Coverage */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 lg:p-16 border-2"
          style={{ borderColor: hausmeisterAccent, background: `linear-gradient(135deg, ${hausmeisterAccent}08, transparent)` }}
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(90deg, ${hausmeisterAccent} 1px, transparent 1px), linear-gradient(${hausmeisterAccent} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />

          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-black text-neutral-900 mb-12 flex items-center gap-3"
            >
              <MapPin className="w-8 h-8" style={{ color: hausmeisterAccent }} />
              Berliner Bezirke - Abdeckung
            </motion.h3>

            {/* Regional Bars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regions.map((region, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-neutral-900">{region.name}</p>
                    <p className="text-sm font-bold" style={{ color: hausmeisterAccent }}>
                      {region.percentage}%
                    </p>
                  </div>

                  {/* Progress bar */}
                  <motion.div
                    className="h-3 rounded-full overflow-hidden bg-neutral-200"
                  >
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: hausmeisterAccent }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${region.percentage}%` }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-neutral-200"
            >
              <p className="text-neutral-700">
                Mit <span className="font-bold">12 dezentralen Servicecentern</span> sind wir strategisch über ganz Berlin verteilt. Das ermöglicht schnelle Reaktionszeiten und persönliche Betreuung in jedem Bezirk.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
