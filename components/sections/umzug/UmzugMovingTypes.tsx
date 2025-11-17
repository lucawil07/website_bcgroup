'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Home, Briefcase, Users, Truck, LockKeyhole, Package, ArrowRight } from 'lucide-react'

export default function UmzugMovingTypes() {
  const umzugAccent = '#f97316'
  const umzugPrimary = '#451a03'

  const movingTypes = [
    {
      icon: Home,
      title: 'Privatumzug',
      description: 'Komplette Wohnungsumzüge mit professionellem Team und sorgfältiger Handhabung aller Gegenstände.',
      features: ['Möbeltransport', 'Ein- & Auspackservice', 'Eventueller Möbelaufbau'],
      color: 'from-orange-500 to-orange-400',
      delay: 0,
      link: '/services/umzug/privatumzug'
    },
    {
      icon: Briefcase,
      title: 'Firmenumzug',
      description: 'Minimale Ausfallzeiten durch optimierte Planung und koordinierte Durchführung aller Büroflächen.',
      features: ['Zeitoptimiert', 'IT-Equipment sicher', 'Dokumententransport versichert'],
      color: 'from-amber-500 to-orange-400',
      delay: 0.1,
      link: '/services/umzug/firmenumzug'
    },
    {
      icon: Users,
      title: 'Seniorenumzug',
      description: 'Schonende und rücksichtsvolle Umzüge speziell für ältere Menschen mit zusätzlicher Beratung.',
      features: ['Extra Zeit', 'Rücksichtsvolle Abläufe', 'Beratung & Unterstützung'],
      color: 'from-orange-400 to-yellow-400',
      delay: 0.2,
      link: '/services/umzug/seniorenumzug'
    },
    {
      icon: Truck,
      title: 'Langstreckenumzug',
      description: 'Bundesweite und internationale Umzüge mit zuverlässiger Planung und sicherem Transport.',
      features: ['Deutschlandweit', 'GPS-Tracking', 'Versicherungsschutz'],
      color: 'from-red-500 to-orange-500',
      delay: 0.3,
      link: '/services/umzug/langstreckenumzug'
    },
    {
      icon: LockKeyhole,
      title: 'Lagerlösung',
      description: 'Sichere Zwischenlagerung für flexible Umzugsplanung mit klimatisiertem Lagerschutz.',
      features: ['Versichert', 'Flexible Dauer', 'Trocken & klimatisiert'],
      color: 'from-orange-600 to-amber-600',
      delay: 0.4,
      link: '/services/umzug/lagerloesung'
    },
    {
      icon: Package,
      title: 'Spezialitems',
      description: 'Transport von Kunstgegenständen, Antiquitäten und wertvollen Objekten mit spezialisierten Fachleuten.',
      features: ['Klaviertransport', 'Kunsttransport', 'Versicherter Transport'],
      color: 'from-yellow-500 to-orange-400',
      delay: 0.5,
      link: '/services/umzug/spezialitems'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0,
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
    <Section padding="none" background="dark" className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-950 via-neutral-900 to-neutral-950" />
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${umzugAccent}40, transparent 50%),
                       radial-gradient(circle at 80% 80%, ${umzugAccent}30, transparent 50%)`,
        }}
      />

      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            Maßgeschneiderte
            <br />
            <span style={{ color: umzugAccent }}>Umzugslösungen</span>
          </motion.h2>
          <p className="text-lg md:text-xl text-white/70">
            Für jede Anforderung die perfekte Lösung – vom Einzelumzug bis zur komplexen Logistik
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {movingTypes.map((type, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                boxShadow: `0 20px 40px ${umzugAccent}20`,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="group relative rounded-2xl overflow-hidden backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 hover:border-white/20 transition-all duration-500"
            >
              {/* Gradient background accent */}
              <div
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${umzugAccent}40, transparent)` }}
              />

              {/* Icon container */}
              <motion.div
                className="mb-6 inline-flex p-4 rounded-xl"
                style={{ background: `${umzugAccent}20` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <type.icon className="w-8 h-8" style={{ color: umzugAccent }} />
              </motion.div>

              {/* Title & Description */}
              <h3 className="text-2xl font-black text-white mb-3">{type.title}</h3>
              <p className="text-white/70 mb-6 leading-relaxed text-base">
                {type.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {type.features.map((feature, fIdx) => (
                  <motion.li
                    key={fIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: type.delay + 0.1 + fIdx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-white/80 text-sm"
                  >
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: umzugAccent }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              {/* Bottom accent bar */}
              <div className="relative h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-6" />

              {/* CTA Link */}
              <motion.a
                href={type.link}
                className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider group/link"
                whileHover={{ x: 5 }}
              >
                <span style={{ color: umzugAccent }}>Mehr erfahren</span>
                <ArrowRight 
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                  style={{ color: umzugAccent }}
                />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/5 backdrop-blur-xl text-center"
        >
          <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
            Ihre Umzugsart ist nicht dabei?
          </h3>
          <p className="text-white/70 mb-6 max-w-xl mx-auto">
            Kontaktieren Sie uns für maßgeschneiderte Lösungen – wir finden immer eine perfekte Lösung für Ihre Anforderungen.
          </p>
          <motion.a
            href="/kontakt"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-white transition-all"
            style={{ background: umzugAccent }}
          >
            Jetzt anfragen
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </Container>
    </Section>
  )
}
