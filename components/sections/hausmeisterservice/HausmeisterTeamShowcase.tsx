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
    { number: '150+', label: 'Mitarbeiter', Icon: Users2 },
    { number: '15 Ø', label: 'Jahre Erfahrung', Icon: TrendingUp },
    { number: '24/7', label: 'Einsatzbereitschaft', Icon: Clock },
    { number: '99%', label: 'Kundenzufriedenheit', Icon: Star }
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
    <Section padding="large" className="relative bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
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
            Unsere Expertise
            <br />
            <span style={{ color: hausmeisterAccent }}>Ihr Vertrauen</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ein hochqualifiziertes Team von Fachleuten mit umfassender Erfahrung in allen Bereichen der Gebäudewirtschaft
          </p>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
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

        {/* Qualification Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
            hidden: { opacity: 0 }
          }}
        >
          {teamQualifications.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10 bg-gradient-to-br ${item.color}`} />

                <div className="relative h-full rounded-2xl border-2 border-neutral-200 hover:border-purple-300 transition-all duration-300 p-8 bg-white hover:bg-white/95 overflow-hidden">
                  {/* Accent line */}
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
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `${hausmeisterAccent}15` }}>
                      <Icon className="w-7 h-7" style={{ color: hausmeisterAccent }} />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {item.details.map((detail, didx) => (
                      <motion.div
                        key={didx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + didx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-xs font-semibold text-neutral-700"
                      >
                        <span className="w-2 h-2 rounded-full" style={{ background: hausmeisterAccent }} />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {expertise.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative rounded-2xl border-2 border-neutral-200 hover:border-purple-300 transition-all duration-300 p-8 bg-white/50 hover:bg-white/80 overflow-hidden">
                {/* Accent top bar */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 origin-left"
                  style={{ background: hausmeisterAccent }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-bold text-neutral-900">
                    {area.category}
                  </h4>
                  <div className="text-right">
                    <p className="text-2xl font-black" style={{ color: hausmeisterAccent }}>
                      {area.expertise}
                    </p>
                    <p className="text-xs font-bold text-neutral-600">Expertise</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  {area.skills.map((skill, skidx) => (
                    <motion.div
                      key={skidx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + skidx * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: hausmeisterAccent }} />
                      <span className="text-sm font-semibold text-neutral-700">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Progress bar */}
                <motion.div
                  className="mt-6 h-2 rounded-full overflow-hidden bg-neutral-200"
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: hausmeisterAccent }}
                    initial={{ width: 0 }}
                    whileInView={{ width: area.expertise }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 lg:p-16 border-2"
          style={{ borderColor: hausmeisterAccent, background: `linear-gradient(135deg, ${hausmeisterAccent}08, transparent)` }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(90deg, ${hausmeisterAccent} 1px, transparent 1px), linear-gradient(${hausmeisterAccent} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
              Vertrauen Sie auf Erfahrung
            </h3>
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Mit mehr als 15 Jahren durchschnittlicher Erfahrung pro Mitarbeiter und einem Team, das ständig weitergebildet wird, bieten wir Ihnen die beste Sicherheit und Qualität für Ihr Gebäude.
            </p>
            <a href="/kontakt" className="inline-block">
              <button
                className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105"
                style={{ background: hausmeisterAccent }}
              >
                Jetzt Team kennenlernen
              </button>
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
