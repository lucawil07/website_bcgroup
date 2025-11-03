'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Award, Shield, Leaf, Users, Zap, TrendingUp } from 'lucide-react'

export default function ReinigungCertifications() {
  const reinigungAccent = '#06b6d4'

  const certifications = [
    {
      icon: Award,
      title: 'ISO 9001:2015',
      subtitle: 'Qualitätsmanagementsystem',
      description: 'Zertifizierte Prozesse und Standards für konstant hohe Qualität'
    },
    {
      icon: Leaf,
      title: 'Eco-Zertifiziert',
      subtitle: 'Umweltfreundliche Reinigung',
      description: 'Nachhaltige Produkte und umweltschonende Verfahren im Einsatz'
    },
    {
      icon: Shield,
      title: 'Sicherheitsstandards',
      subtitle: 'Arbeitsschutz & Hygiene',
      description: 'Alle Mitarbeiter sind zertifiziert und regelmäßig geschult'
    }
  ]

  const qualityFactors = [
    { icon: Users, title: 'Fachkräfte', description: 'Regelmäßig geschult und zertifiziert', number: '120+' },
    { icon: Zap, title: 'Effizienz', description: 'Modernste Reinigungstechnologie', number: '99%' },
    { icon: TrendingUp, title: 'Verbesserung', description: 'Kontinuierliche Qualitätskontrolle', number: '100%' },
    { icon: Award, title: 'Garantie', description: 'Volle Zufriedenheitsgarantie', number: '24/7' }
  ]

  const testimonials = [
    {
      text: 'Fantastische Arbeit! Die Reinigung war gründlich und die Mitarbeiter sehr professionell.',
      author: 'Unternehmensleiter',
      company: 'Tech-Startup Mitte'
    },
    {
      text: 'BC Group hat unsere Erwartungen übertroffen. Zuverlässig, effizient und immer pünktlich.',
      author: 'Facility Manager',
      company: 'Bürokomplex Charlottenburg'
    },
    {
      text: 'Die beste Reinigungsfirma in Berlin! Wir arbeiten jetzt 2 Jahre mit BC Group zusammen.',
      author: 'Geschäftsführer',
      company: 'Praxis Berlin-Mitte'
    }
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-slate-50 via-white to-cyan-50/20">
      <Container size="wide">
        {/* Main Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-xs font-bold uppercase tracking-widest mb-6"
              style={{ color: reinigungAccent }}>
              <span className="w-2 h-2 rounded-full" style={{ background: reinigungAccent }} />
              Qualität & Standards
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
              Zertifiziert und<br />
              <span style={{ color: reinigungAccent }}>vollständig zuverlässig</span>
            </h2>
          </motion.div>

          {/* Certification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Animated Background Card */}
                <motion.div
                  className="relative h-full rounded-2xl p-8 border border-neutral-200 hover:border-cyan-300 transition-all duration-300 bg-white overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Top gradient line */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1"
                    style={{ background: `linear-gradient(90deg, transparent, ${reinigungAccent}, transparent)` }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  {/* Glow background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle at center, ${reinigungAccent}10, transparent)`
                    }}
                  />

                  {/* Content */}
                  <div className="relative space-y-6 h-full flex flex-col">
                    {/* Icon with animation */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: `${reinigungAccent}15`, border: `2px solid ${reinigungAccent}30` }}
                      animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: idx * 0.2 }}
                    >
                      <cert.icon className="w-8 h-8" style={{ color: reinigungAccent }} />
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-black text-neutral-900 mb-2">
                        {cert.title}
                      </h3>
                      <p className="text-sm font-semibold text-neutral-500 mb-3 uppercase tracking-wide" style={{ color: reinigungAccent }}>
                        {cert.subtitle}
                      </p>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {cert.description}
                      </p>
                    </div>

                    {/* Checkmark */}
                    <motion.div
                      className="flex items-center gap-2 pt-4 border-t border-neutral-100"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span style={{ color: reinigungAccent }} className="text-2xl">✓</span>
                      <span className="text-sm font-semibold text-neutral-700">Vollständig zertifiziert</span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quality Factors */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900">
              Was uns<br />
              <span style={{ color: reinigungAccent }}>auszeichnet</span>
            </h2>
          </motion.div>

          {/* Quality Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityFactors.map((factor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  className="relative rounded-2xl p-6 border border-neutral-200 hover:border-cyan-300 transition-all duration-300 bg-white overflow-hidden h-full"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Left accent */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(180deg, ${reinigungAccent}, transparent)` }}
                  />

                  {/* Content */}
                  <div className="relative space-y-4">
                    {/* Number */}
                    <motion.div
                      className="text-4xl md:text-5xl font-black"
                      style={{
                        background: `linear-gradient(135deg, ${reinigungAccent}, #0284c7)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: idx * 0.1 }}
                    >
                      {factor.number}
                    </motion.div>

                    {/* Icon and Title */}
                    <div className="flex items-start gap-3">
                      <factor.icon className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: reinigungAccent }} />
                      <div>
                        <h3 className="font-black text-neutral-900">
                          {factor.title}
                        </h3>
                        <p className="text-sm text-neutral-600 mt-1">
                          {factor.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900">
              Das sagen unsere<br />
              <span style={{ color: reinigungAccent }}>Kunden</span>
            </h2>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <motion.div
                  className="relative rounded-2xl p-8 border border-neutral-200 hover:border-cyan-300 transition-all duration-300 bg-white h-full flex flex-col"
                  whileHover={{ y: -5 }}
                >
                  {/* Top accent */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transform-gpu"
                    style={{ background: `linear-gradient(90deg, ${reinigungAccent}, transparent)`, transformOrigin: 'left' }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Stars */}
                  <motion.div
                    className="flex gap-1 mb-4"
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: idx * 0.1 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: reinigungAccent }} className="text-lg">
                        ★
                      </span>
                    ))}
                  </motion.div>

                  {/* Text */}
                  <p className="text-neutral-700 font-medium italic flex-grow mb-6">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div className="space-y-1 pt-6 border-t border-neutral-100">
                    <p className="font-bold text-neutral-900">{testimonial.author}</p>
                    <p className="text-sm text-neutral-600">{testimonial.company}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
            Bereiten Sie sich auf<br />
            <span style={{ color: reinigungAccent }}>makellose Sauberkeit vor</span>
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute für ein unverbindliches Angebot und lassen Sie sich von unserer Qualität überzeugen
          </p>
          <a href="/kontakt">
            <motion.button
              className="px-10 py-5 rounded-xl font-bold uppercase tracking-wider text-white text-lg transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${reinigungAccent}, #0284c7)` }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Jetzt Kontakt aufnehmen
            </motion.button>
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
