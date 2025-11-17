'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Users, Clock, CheckCircle2, Send } from 'lucide-react'

export default function ReinigungProcess() {
  const reinigungAccent = '#06b6d4'

  const steps = [
    {
      number: '01',
      title: 'Beratung & Planung',
      description: 'Wir analysieren Ihre Anforderungen und erstellen einen maßgeschneiderten Reinigungsplan',
      icon: Users,
      details: ['Bedarfsanalyse', 'Kostenübersicht', 'Zeitplan']
    },
    {
      number: '02',
      title: 'Vorbereitung',
      description: 'Professionelle Vorbereitung mit allen notwendigen Materialien und Fachkräften',
      icon: Clock,
      details: ['Team-Briefing', 'Material-Check', 'Sicherheit']
    },
    {
      number: '03',
      title: 'Durchführung',
      description: 'Professionelle Reinigung nach höchsten Standards mit modernen Verfahren',
      icon: CheckCircle2,
      details: ['Nach Plan', 'Mit Umsicht', 'Qualität']
    },
    {
      number: '04',
      title: 'Übergabe & Support',
      description: 'Abnahme mit Ihnen und laufender Support für maximale Zufriedenheit',
      icon: Send,
      details: ['Kontrolle', 'Abnahme', 'Follow-up']
    }
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-white via-blue-50/30 to-white">
      <Container size="wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: reinigungAccent }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: reinigungAccent }} />
            Unser Prozess
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Von der Anfrage zur<br />
            <span style={{ color: reinigungAccent }}>perfekten Reinigung</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ein transparenter, strukturierter Ablauf garantiert Ihnen höchste Qualität und Zuverlässigkeit
          </p>
        </motion.div>

        {/* Process Timeline - Unique Flowing Design */}
        <div className="relative">
          {/* Background connecting line - animated */}
          <svg 
            className="absolute top-0 left-0 w-full h-full pointer-events-none" 
            style={{ overflow: 'visible' }}
          >
            <motion.path
              d={`M 10% 80 Q 25% 100, 40% 80 T 70% 80 T 100% 80`}
              stroke={reinigungAccent}
              strokeWidth="2"
              fill="none"
              strokeDasharray="1000"
              initial={{ strokeDashoffset: 1000 }}
              whileInView={{ strokeDashoffset: 0 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              opacity="0.3"
            />
          </svg>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Step Card */}
                <div className="relative h-full rounded-2xl border border-neutral-200 hover:border-cyan-300 transition-all duration-300 bg-white overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Left accent line */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1.5"
                    style={{ background: `linear-gradient(180deg, ${reinigungAccent}, transparent)` }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ delay: idx * 0.15 + 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  />

                  {/* Content */}
                  <div className="relative p-8 space-y-6 h-full flex flex-col">
                    {/* Step Number */}
                    <div className="flex items-start justify-between">
                      <div>
                        <motion.div
                          className="text-5xl font-black"
                          style={{ 
                            background: `linear-gradient(135deg, ${reinigungAccent}, #0284c7)`,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: idx * 0.15 + 0.1, type: 'spring' }}
                          viewport={{ once: true }}
                        >
                          {step.number}
                        </motion.div>
                      </div>
                      {/* Icon */}
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ 
                          background: `${reinigungAccent}15`,
                          border: `2px solid ${reinigungAccent}30`,
                          color: reinigungAccent
                        }}
                      >
                        <step.icon className="w-6 h-6" />
                      </motion.div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-xl font-black text-neutral-900 group-hover:text-cyan-900 transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-600 text-sm leading-relaxed flex-grow">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <motion.div
                      className="space-y-2 pt-4 border-t border-neutral-100 group-hover:border-cyan-100 transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: idx * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {step.details.map((detail, didx) => (
                        <div
                          key={didx}
                          className="flex items-center gap-2 text-sm text-neutral-700"
                        >
                          <span 
                            className="w-1 h-1 rounded-full"
                            style={{ background: reinigungAccent }}
                          />
                          {detail}
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Connecting arrows between steps (desktop only) */}
                {idx < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute -right-8 top-1/3 z-10"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path
                        d="M4 16H28M22 10L28 16M22 22L28 16"
                        stroke={reinigungAccent}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Expertise', value: '20+ Jahre Erfahrung' },
            { label: 'Kundengarantie', value: '100% Zufriedenheit' },
            { label: 'Verfügbarkeit', value: '24/7 Support' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 text-center"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm text-neutral-600 mb-2">{item.label}</p>
              <p className="text-2xl font-black" style={{ color: reinigungAccent }}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
