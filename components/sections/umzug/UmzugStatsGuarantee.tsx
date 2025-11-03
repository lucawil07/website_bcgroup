'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { TrendingUp, Users, Award, Zap, Shield, Clock } from 'lucide-react'

export default function UmzugStatsGuarantee() {
  const umzugAccent = '#f97316'

  const stats = [
    {
      icon: TrendingUp,
      number: '2500+',
      label: 'Erfolgreiche Umzüge',
      description: 'seit Unternehmensgründung',
    },
    {
      icon: Users,
      number: '98%',
      label: 'Kundenzufriedenheit',
      description: 'basierend auf Kundenbefragungen',
    },
    {
      icon: Award,
      number: '15+',
      label: 'Jahre Erfahrung',
      description: 'in professioneller Umzugslogistik',
    },
    {
      icon: Clock,
      number: '100%',
      label: 'Termingenauigkeit',
      description: 'garantierte pünktliche Durchführung',
    },
  ]

  const guarantees = [
    {
      icon: Shield,
      title: 'Vollversichert',
      description: 'Alle Ihre Gegenstände sind vollumfänglich versichert während des gesamten Transports.',
    },
    {
      icon: Users,
      title: 'Erfahrenes Team',
      description: 'Geschulte Profis mit durchschnittlich 10+ Jahren Erfahrung im Umzugsservice.',
    },
    {
      icon: Zap,
      title: 'Moderne Ausrüstung',
      description: 'Aktuelle Fahrzeugflotte mit professioneller Ausrüstung und Schutzmaßnahmen.',
    },
    {
      icon: Award,
      title: 'Transparente Preise',
      description: 'Keine versteckten Kosten – was Sie sehen, ist was Sie bezahlen.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <Section padding="none" background="dark" className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-950 via-neutral-900 to-black" />
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${umzugAccent}40, transparent 50%),
                       radial-gradient(circle at 70% 80%, ${umzugAccent}30, transparent 50%)`,
        }}
      />

      <Container size="wide">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-16 text-center">
            Vertrauen Sie auf
            <br />
            <span style={{ color: umzugAccent }}>unsere Expertise</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative group rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 hover:border-white/20 transition-all duration-500"
              >
                {/* Hover gradient */}
                <div
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${umzugAccent}40, transparent)` }}
                />

                {/* Icon */}
                <motion.div
                  className="mb-6 inline-flex p-3 rounded-lg"
                  style={{ background: `${umzugAccent}20` }}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <stat.icon className="w-6 h-6" style={{ color: umzugAccent }} />
                </motion.div>

                {/* Content */}
                <div className="space-y-3">
                  <motion.div
                    className="text-5xl font-black text-white"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white">{stat.label}</h3>
                  <p className="text-white/70 text-sm">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-20" />

        {/* Guarantees Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-16 text-center">
            Unsere
            <br />
            <span style={{ color: umzugAccent }}>Garantien für Sie</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {guarantees.map((guarantee, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="group relative rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 hover:border-white/20 transition-all duration-500"
              >
                {/* Hover effect */}
                <div
                  className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `linear-gradient(135deg, ${umzugAccent}40, transparent)` }}
                />

                {/* Icon with animation */}
                <motion.div
                  className="mb-6 inline-flex p-4 rounded-xl"
                  style={{ background: `${umzugAccent}20` }}
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <guarantee.icon className="w-8 h-8" style={{ color: umzugAccent }} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-black text-white mb-3">{guarantee.title}</h3>
                <p className="text-white/70 leading-relaxed">{guarantee.description}</p>

                {/* Checkmark */}
                <motion.div
                  className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: `${umzugAccent}20` }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                >
                  <span style={{ color: umzugAccent }} className="text-lg font-black">✓</span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-3xl mx-auto p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/5 backdrop-blur-xl"
        >
          <p className="text-xl text-white/90 font-bold leading-relaxed">
            Mit BC Umzug & Transport verlassen Sie sich nicht nur auf ein Unternehmen, sondern auf ein
            <span style={{ color: umzugAccent }}> erfahrenes Team, das Ihre wertvollen Besitztümer wie seine eigenen behandelt</span>.
            Ihre Zufriedenheit ist unsere oberste Priorität.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}
