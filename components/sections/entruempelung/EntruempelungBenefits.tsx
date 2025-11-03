'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { useFunnelModal } from './EntruempelungFunnelWrapper'
import { Zap, TrendingUp, Handshake, Star, Award, Shield } from 'lucide-react'

export default function EntruempelungBenefits() {
  const accent = '#10b981'
  const { openFunnel } = useFunnelModal()

  const benefits = [
    {
      icon: Zap,
      title: 'Blitzschnell',
      description: 'Entrümpelung innerhalb von 48 Stunden möglich. Keine langen Wartezeiten.',
      metrics: '48h'
    },
    {
      icon: TrendingUp,
      title: 'Transparente Preise',
      description: 'Kein Verstecktes. Sie sehen genau was Sie zahlen - fair kalkuliert.',
      metrics: '100%'
    },
    {
      icon: Handshake,
      title: 'Persönlicher Service',
      description: 'Direkter Kontakt zu unserem Team. Wir verstehen Ihre Bedürfnisse.',
      metrics: '24/7'
    },
    {
      icon: Star,
      title: 'Höchste Qualität',
      description: 'Professionelle Teams mit durchschnittlich 12 Jahren Erfahrung.',
      metrics: '12+J'
    },
    {
      icon: Award,
      title: 'Zertifiziert',
      description: 'Alle Fachkräfte zertifiziert. Höchste Standards in Sicherheit & Umwelt.',
      metrics: '✓ Alle'
    },
    {
      icon: Shield,
      title: 'Vollversichert',
      description: 'Umfassend versichert für Ihre Sicherheit und Schadenshaftung.',
      metrics: '100%'
    }
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-br from-neutral-950 to-emerald-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/3 -right-40 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${accent}25, transparent)` }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full"
          style={{ background: `radial-gradient(circle, ${accent}15, transparent)` }}
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, delay: 1 }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(90deg, ${accent} 1px, transparent 1px), linear-gradient(${accent} 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 rounded-full backdrop-blur-md border border-emerald-400/30 bg-emerald-950/40"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-400">Warum BC Entrümpelung</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ihre Vorteile
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Wir bieten nicht nur einen Service - wir bieten Entlastung und verlässliche Partnerschaft
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Background glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `radial-gradient(circle at 100% 0%, ${accent}20, transparent)` }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                {/* Card */}
                <div
                  className="relative p-8 rounded-3xl backdrop-blur-md border border-white/10 hover:border-emerald-400/30 transition-all duration-300 h-full group-hover:shadow-glow"
                  style={{ background: 'rgba(255, 255, 255, 0.02)' }}
                >
                  {/* Top accent bar */}
                  <motion.div
                    className="absolute top-0 left-0 h-1 rounded-t-3xl"
                    style={{ background: accent }}
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  />

                  {/* Icon container */}
                  <motion.div
                    className="flex items-start justify-between mb-6"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${accent}20` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: accent }} />
                    </div>
                    <div
                      className="text-3xl font-black opacity-20 text-right"
                      style={{ color: accent }}
                    >
                      {benefit.metrics}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 right-0 h-1 rounded-br-3xl"
                    style={{ background: accent }}
                    initial={{ width: '0%' }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative p-12 lg:p-16 rounded-3xl overflow-hidden group"
          style={{ background: `linear-gradient(135deg, ${accent}, ${accent}80)` }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(45deg, white 1px, transparent 1px), linear-gradient(-45deg, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />

          {/* Animated accent elements */}
          <motion.div
            className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-20"
            style={{ background: 'white' }}
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          />

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-6 h-6 text-white" fill="white" />
              <span className="text-sm font-bold uppercase tracking-widest text-white">Vertraut von tausenden Kunden</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ihre Zufriedenheit ist unsere Priorität
            </h3>
            
            <p className="text-white/95 text-lg leading-relaxed mb-8">
              Mit über 10.000 erfolgreich durchgeführten Entrümpelung und einer durchschnittlichen Kundenzufriedenheit von 4,9/5 Sternen sind wir Ihr zuverlässiger Partner in Berlin. Jede Entrümpelung wird von uns mit vollständiger Sorgfalt und professioneller Sorgfalt durchgeführt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                onClick={openFunnel}
                className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-emerald-900 transition-all duration-300"
                style={{ background: 'white' }}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                Kostenlos anfragen
              </motion.button>
              
              <motion.button
                className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white border-2 border-white transition-all duration-300 hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Referenzen ansehen
              </motion.button>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
