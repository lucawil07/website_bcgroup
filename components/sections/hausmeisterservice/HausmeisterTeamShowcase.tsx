'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Shield, Award, Zap, BookOpen, Users, Lightbulb, Users2, TrendingUp, Clock, Star } from 'lucide-react'

export default function HausmeisterTeamShowcase() {
  const hausmeisterAccent = '#8b5cf6'

  const teamQualifications = [
    {
      icon: Users,
      title: 'Spezialisierte Teams',
      description: 'Über 150 zertifizierte Fachkräfte',
      details: ['Elektrofachkräfte', 'Installateur & Klempner', 'Schadstoffsanierer'],
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: Award,
      title: 'Zertifizierungen',
      description: 'Alle relevanten Qualifikationen vorhanden',
      details: ['Handwerkskammer-Zertifizierung', 'Sicherheitstraining', 'Energieeffizienz'],
      color: 'from-purple-600 to-purple-400'
    },
    {
      icon: BookOpen,
      title: 'Kontinuierliche Schulung',
      description: 'Regelmäßige Fortbildungen und Updates',
      details: ['Monatliche Trainings', 'Neue Technologien', 'Sicherheitsupdates'],
      color: 'from-green-600 to-green-400'
    },
    {
      icon: Zap,
      title: 'Modernste Ausstattung',
      description: 'Professionelle Werkzeuge und Technologie',
      details: ['Digitale Verwaltung', 'GPS-Ortung', 'Mobile Apps'],
      color: 'from-orange-600 to-orange-400'
    }
  ]

  const teamStats = [
    { number: '100+', label: 'Betreute Objekte', Icon: Users2 },
    { number: '5+', label: 'Fachbereiche im Service', Icon: TrendingUp },
    { number: '24/7', label: 'Einsatzbereitschaft', Icon: Clock },
    { number: '100%', label: 'Kundenzufriedenheit', Icon: Star }
  ]

  const expertise = [
    {
      category: 'Elektrotechnik',
      skills: ['Elektroinstallation', 'Schaltschrank', 'LED-Umstellung', 'Photovoltaik'],
      expertise: '98%'
    },
    {
      category: 'Sanitär & Heizung',
      skills: ['Rohrinstallation', 'Heizungswartung', 'Wassersysteme', 'Gastechnik'],
      expertise: '96%'
    },
    {
      category: 'Gebäudesicherheit',
      skills: ['Videosysteme', 'Zutrittskontrolle', 'Alarmanlagen', 'Brandschutz'],
      expertise: '94%'
    },
    {
      category: 'Energieeffizienz',
      skills: ['Energiemanagement', 'Dämmung', 'HVAC-Systeme', 'Smart Building'],
      expertise: '92%'
    }
  ]

  return (
    <Section padding="none" className="relative bg-gradient-to-b from-white to-neutral-50 overflow-hidden py-16 md:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${hausmeisterAccent}15, transparent)` }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
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
            Warum BC Hausmeisterservice
            <br />
            <span style={{ color: hausmeisterAccent }}>die richtige Wahl ist</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Mit langjähriger Erfahrung, geschultem Personal und moderner Ausrüstung bieten wir zuverlässige Gebäudebetreuung auf höchstem Niveau
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl border-2 border-neutral-200 hover:border-purple-300 transition-all duration-300 p-6 bg-white/50 hover:bg-white/80 text-center overflow-hidden group">
                {/* Top accent */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 origin-left"
                  style={{ background: hausmeisterAccent }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="mb-2 w-fit mx-auto"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${hausmeisterAccent}15` }}>
                    <stat.Icon className="w-6 h-6" style={{ color: hausmeisterAccent }} />
                  </div>
                </motion.div>
                <p className="text-2xl font-black text-neutral-900 mb-1">
                  {stat.number}
                </p>
                <p className="text-sm font-semibold text-neutral-600">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
