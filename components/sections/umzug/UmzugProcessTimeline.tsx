'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Phone, Clock, Boxes, CheckCircle2 } from 'lucide-react'

export default function UmzugProcessTimeline() {
  const umzugAccent = '#f97316'
  const umzugPrimary = '#451a03'

  const steps = [
    {
      number: 1,
      icon: Phone,
      title: 'Kostenfreies Beratungsgespräch',
      description: 'Wir analysieren Ihre Anforderungen und erstellen ein maßgeschneidertes Angebot ohne versteckte Kosten.',
      details: ['5-30 Min. Beratung', 'Transparente Preisberechnung', 'Termin nach Ihrem Wunsch'],
    },
    {
      number: 2,
      icon: Clock,
      title: 'Planung & Vorbereitung',
      description: 'Detaillierte Umzugsplanung mit genauen Zeitabläufen, notwendigen Genehmigungen und Ressourcenoptimierung.',
      details: ['Terminbestätigung', 'Vorbereitungscheckliste', 'Kommunikation vorab'],
    },
    {
      number: 3,
      icon: Boxes,
      title: 'Professionelle Durchführung',
      description: 'Unser erfahrenes Team führt den Umzug mit Präzision durch – alles wird geschützt und zeitgerecht transportiert.',
      details: ['Fachgerechtes Packen', 'Möbelmontage', 'Schutzmaßnahmen'],
    },
    {
      number: 4,
      icon: CheckCircle2,
      title: 'Abschluss & Nachbetreuung',
      description: 'Wir überprüfen, dass alles an Ort und Stelle ist, und stehen für eventuelle Nachfragen zur Verfügung.',
      details: ['Qualitätskontrolle', 'Abschlusscheck', 'Nachbetreuung'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
    <Section padding="none" background="light" className="bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
          style={{ background: `radial-gradient(circle, ${umzugAccent}60, transparent)` }}
        />
      </div>

      <Container size="wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6">
            Unser bewährter
            <br />
            <span style={{ color: umzugAccent }}>Umzugsprozess</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600">
            Vier einfache Schritte für einen stressfreien Umzug von Anfang bis Ende
          </p>
        </motion.div>

        {/* Timeline Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-neutral-200 via-neutral-300 to-neutral-200 -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:direction-rtl' : ''
                  }`}
                >
                  {/* Left - Content (alternates) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className={isEven ? 'lg:order-2' : 'lg:order-1'}
                  >
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-100">
                        <span
                          className="text-sm font-bold uppercase tracking-widest"
                          style={{ color: umzugAccent }}
                        >
                          Schritt {step.number}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-black text-neutral-900 leading-tight">
                        {step.title}
                      </h3>

                      <p className="text-lg text-neutral-600 leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="space-y-3 pt-4">
                        {step.details.map((detail, dIdx) => (
                          <motion.li
                            key={dIdx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + dIdx * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 text-neutral-700"
                          >
                            <span
                              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                              style={{ background: umzugAccent }}
                            />
                            <span className="font-medium">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Right - Visual (alternates) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={isEven ? 'lg:order-1' : 'lg:order-2'}
                  >
                    <motion.div
                      className="relative h-80 rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {/* Card with gradient */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(135deg, ${umzugAccent}20, transparent)`,
                        }}
                      />

                      {/* Animated background pattern */}
                      <motion.div
                        className="absolute inset-0"
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%'],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                        style={{
                          backgroundImage: `linear-gradient(45deg, ${umzugAccent}10 25%, transparent 25%, transparent 50%, ${umzugAccent}10 50%, ${umzugAccent}10 75%, transparent 75%, transparent)`,
                          backgroundSize: '60px 60px',
                        }}
                      />

                      {/* Content */}
                      <div className="relative h-full flex flex-col items-center justify-center p-8 space-y-6">
                        <motion.div
                          className="rounded-2xl p-6 flex items-center justify-center"
                          style={{ background: `${umzugAccent}30` }}
                          animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <step.icon
                            className="w-16 h-16"
                            style={{ color: umzugAccent }}
                          />
                        </motion.div>

                        <div className="text-center">
                          <motion.div
                            className="inline-block text-5xl font-black mb-2"
                            style={{ color: umzugAccent }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          >
                            0{step.number}
                          </motion.div>
                          <p className="text-neutral-700 font-bold">Phase</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center max-w-2xl mx-auto p-8 rounded-2xl"
          style={{ background: `${umzugAccent}10`, border: `2px solid ${umzugAccent}30` }}
        >
          <h3 className="text-2xl font-black text-neutral-900 mb-3">
            Bereit für Ihren Umzug?
          </h3>
          <p className="text-neutral-700 mb-6">
            Kontaktieren Sie uns heute noch für ein kostenloses Beratungsgespräch und lassen Sie uns Ihren Umzug stressfreier gestalten.
          </p>
          <motion.a
            href="/kontakt"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold uppercase tracking-wider text-white transition-all"
            style={{ background: umzugAccent }}
          >
            Kostenloses Angebot
          </motion.a>
        </motion.div>
      </Container>
    </Section>
  )
}
