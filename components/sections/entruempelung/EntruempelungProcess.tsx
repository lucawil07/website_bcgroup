'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Phone, SearchCheck, Hammer, Truck, Check, Leaf } from 'lucide-react'

export default function EntruempelungProcess() {
  const accent = '#10b981'
  
  const steps = [
    {
      number: '01',
      title: 'Kontakt & Beratung',
      description: 'Einfacher Anruf oder Online-Formular. Wir beschreiben kurz was entrümpelt werden muss.',
      icon: Phone,
      details: ['Kostenlose Beratung', 'Unverbindlich', 'Sofortiges Angebot'],
      color: '#065f46'
    },
    {
      number: '02',
      title: 'Besichtigung',
      description: 'Wir schauen uns vor Ort an, was entrümpelt werden soll und erstellen ein konkretes Angebot.',
      icon: SearchCheck,
      details: ['Vor-Ort-Besichtigung', 'Exakte Kalkulation', 'Sichere Angebote'],
      color: '#047857'
    },
    {
      number: '03',
      title: 'Termin abstimmen',
      description: 'Sie wählen einen passenden Termin. Wir sind flexibel und kommen auch kurzfristig.',
      icon: Hammer,
      details: ['Flexible Termine', '24/7 Verfügbarkeit', 'Auch Express möglich'],
      color: '#059669'
    },
    {
      number: '04',
      title: 'Entsorgung vor Ort',
      description: 'Unser Team entrümpelt professionell und diskret. Alle Materialien werden sortiert.',
      icon: Truck,
      details: ['Schnelle Durchführung', 'Professionelle Teams', 'Diskrete Abwicklung'],
      color: '#10b981'
    },
    {
      number: '05',
      title: 'Endreinigung',
      description: 'Nach der Räumung reinigen wir die Fläche gründlich. Optional auch Tiefenreinigung.',
      icon: Check,
      details: ['Komplette Reinigung', 'Optionale Tiefenreinigung', 'Übergabereife'],
      color: '#34d399'
    },
    {
      number: '06',
      title: 'Recycling & Verwertung',
      description: 'Alle verwertbaren Materialien gehen in den Recycling-Prozess. Null Verschwendung.',
      icon: Leaf,
      details: ['100% nachhaltig', 'Zertifizierte Entsorgung', 'Dokumentation'],
      color: '#6ee7b7'
    }
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-emerald-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: accent }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
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
            className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-900">Ablauf</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            So funktioniert unsere Entrümpelung
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Sechs einfache Schritte von der Anfrage bis zur übergabereife Räumung. Transparent, zuverlässig und stressfrei für Sie.
          </p>
        </motion.div>

        {/* Circular Flow Design */}
        <div className="relative">
          {/* Mobile: Vertical stack */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step card */}
                  <div className="flex gap-6">
                    {/* Icon circle */}
                    <motion.div
                      className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg"
                      style={{ background: step.color }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl font-black opacity-30" style={{ color: step.color }}>
                          {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-neutral-900">{step.title}</h3>
                      </div>
                      <p className="text-neutral-600 text-sm mb-3 leading-relaxed">{step.description}</p>
                      <div className="space-y-1">
                        {step.details.map((detail, didx) => (
                          <div key={didx} className="flex items-center gap-2 text-xs text-neutral-700">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connector line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="ml-10 mt-8 mb-0 pl-4 border-l-2 border-emerald-100 h-4" />
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* Desktop: Hexagonal/Grid Flow */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              const row = Math.floor(index / 3)
              const isEvenRow = row % 2 === 0
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Connector lines */}
                  {index < steps.length - 1 && (
                    <motion.svg
                      className="absolute -right-4 top-1/2 w-8 h-1 pointer-events-none"
                      viewBox="0 0 32 1"
                      preserveAspectRatio="none"
                    >
                      <motion.line
                        x1="0" y1="0.5" x2="32" y2="0.5"
                        stroke={accent}
                        strokeWidth="2"
                        initial={{ strokeDasharray: 32, strokeDashoffset: 32 }}
                        whileInView={{ strokeDashoffset: 0 }}
                        transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </motion.svg>
                  )}

                  {/* Main card */}
                  <div className="relative p-8 rounded-3xl backdrop-blur-sm border-2 border-emerald-200 group-hover:border-emerald-400 transition-all duration-300 h-full min-h-[320px] flex flex-col"
                    style={{ background: `${step.color}08` }}
                  >
                    {/* Accent top bar */}
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                      style={{ background: step.color }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: '100%' }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      viewport={{ once: true }}
                    />

                    {/* Icon */}
                    <motion.div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
                      style={{ background: `${step.color}20` }}
                      animate={{ y: [0, -8, 0], rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.15 }}
                    >
                      <Icon className="w-10 h-10" style={{ color: step.color }} />
                    </motion.div>

                    {/* Number Badge */}
                    <div className="mb-3">
                      <span 
                        className="text-xs font-bold uppercase tracking-widest"
                        style={{ color: step.color }}
                      >
                        Schritt {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-emerald-900 transition-colors">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-700 text-sm leading-relaxed mb-6 flex-grow">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2 pt-4 border-t border-emerald-200 group-hover:border-emerald-300 transition-colors">
                      {step.details.map((detail, didx) => (
                        <motion.div
                          key={didx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + didx * 0.05, duration: 0.5 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-xs font-medium text-neutral-700"
                        >
                          <motion.span
                            className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ background: step.color }}
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ delay: index * 0.1 + didx * 0.1, duration: 2, repeat: Infinity }}
                          />
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-3xl backdrop-blur-sm border-2 border-emerald-200" style={{ background: `${accent}08` }}>
            <p className="text-lg text-neutral-900 font-semibold mb-4">
              ✓ Transparent • ✓ Zuverlässig • ✓ Nachhaltig • ✓ Kundenfokussiert
            </p>
            <p className="text-neutral-600">
              Wir nehmen Ihnen die Sorgen ab - von der ersten Minute bis zur finalen Übergabe
            </p>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
