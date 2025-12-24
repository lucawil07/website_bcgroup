'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Shield, Users, Award, Zap, BookOpen, Target } from 'lucide-react'

export default function AbrissExpertise() {
  const abrissaccent = '#d97706'

  const expertise = [
    {
      icon: Shield,
      title: 'Sicherheit & Standards',
      description: 'Höchste Sicherheitsstandards und professionelle Arbeitsabläufe',
      details: ['Sichere Verfahren', 'Arbeitssicherheit', 'Qualitätskontrolle']
    },
    {
      icon: Users,
      title: 'Erfahrenes Team',
      description: 'Erfahrene Profis aus allen Bereichen des Rückbaus arbeiten Hand in Hand',
      details: ['Fachgerechte Ausführung aller Arbeiten', 'Sorgsamer Umgang mit Materialien und Umwelt', 'Zuverlässige Koordination und Projektbetreuung']
    },
    {
      icon: Target,
      title: 'Qualitätskontrolle',
      description: 'Strenge Qualitätskontrolle in jedem Projektschritt',
      details: ['Professionelle Prozesse', 'Inspektionsprotokolle', 'Finale Prüfung']
    }
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-br from-neutral-900 to-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${abrissaccent}20, transparent)` }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full"
          style={{ background: `radial-gradient(circle, ${abrissaccent}15, transparent)` }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Unsere Expertise
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Jahrzehnte von Erfahrung, modernste Technologie und unerschütterliches Engagement für Qualität
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {expertise.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Gradient background on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{ background: `radial-gradient(circle at 100% 100%, ${abrissaccent}30, transparent)` }}
                />

                {/* Card */}
                <div
                  className="relative p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 h-full flex flex-col"
                  style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                >
                  {/* Accent top bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: abrissaccent }}
                  />

                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `${abrissaccent}20` }}
                    animate={{ rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <Icon className="w-7 h-7" style={{ color: abrissaccent }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors">
                    {item.details.map((detail, didx) => (
                      <motion.div
                        key={didx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + didx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-white/60"
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: abrissaccent }} />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-12 lg:p-16 rounded-3xl overflow-hidden group"
          style={{ background: `linear-gradient(135deg, ${abrissaccent}, ${abrissaccent}80)` }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(45deg, white 1px, transparent 1px), linear-gradient(-45deg, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Vertrauen Sie auf bewährte Expertise
            </h3>
            <p className="text-white/95 text-lg leading-relaxed mb-8">
              Mit über 90 erfolgreich durchgeführten Projekten und einer 100%-igen Kundenzufriedenheitsrate ist BC Group Ihr verlässlicher Partner für sichere und professionelle Abrissarbeiten in Berlin.
            </p>
            <a href="/kontakt" className="inline-block">
              <button className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider bg-white text-amber-900 hover:bg-neutral-100 transition-all duration-300">
                Jetzt anfragen
              </button>
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
