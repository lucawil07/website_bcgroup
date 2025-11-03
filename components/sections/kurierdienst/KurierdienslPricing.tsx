'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Check, ArrowRight, Package, Zap, Truck } from 'lucide-react'

export default function KurierdienslPricing() {
  const accent = '#00d4ff'

  const pricingTiers = [
    {
      name: 'Standard',
      description: 'Für regelmäßige Lieferungen',
      icon: Package,
      features: [
        'Lieferung innerhalb Berlin',
        'Tracking inklusive',
        'Geschäftszeiten',
        'Standardversicherung',
        'Keine Minderbestellung'
      ],
      color: '#06b6d4', // cyan
      cta: 'Anfragen'
    },
    {
      name: 'Express',
      description: 'Für zeitkritische Sendungen',
      icon: Zap,
      features: [
        'Lieferung in 2 Stunden',
        'Rund um die Uhr',
        'Premium Versicherung',
        'Direktfahrt möglich'
      ],
      color: accent,
      highlighted: true,
      cta: 'Jetzt buchen'
    },
    {
      name: 'Sperrgut',
      description: 'Für große und schwere Pakete',
      icon: Truck,
      features: [
        'Bis 1 Tonne',
        'Professionelle Handhabung',
        'Spezialisierte Fahrzeuge',
        'Volle Versicherung',
        'Montageservice optional'
      ],
      color: '#f97316', // orange
      cta: 'Angebot'
    }
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-white via-white to-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -right-32 top-1/2 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${accent}08, transparent)` }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 20, repeat: Infinity }}
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
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Transparente Preise
            <br />
            <span style={{ color: accent }}>für alle Ansprüche</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Einfach kalkulierbar – von Standard-Lieferungen bis zu Express-Services mit Sperrguttransport
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`relative rounded-3xl overflow-hidden transition-all duration-300 h-full flex flex-col ${
                  tier.highlighted
                    ? 'border-2 shadow-2xl'
                    : 'border-2 border-neutral-200 hover:border-neutral-300'
                }`}
                style={{
                  borderColor: tier.highlighted ? tier.color : undefined,
                  background: tier.highlighted
                    ? `linear-gradient(135deg, ${tier.color}10, ${tier.color}05)`
                    : 'white'
                }}
                whileHover={{
                  scale: tier.highlighted ? 1 : 1.02,
                  boxShadow: `0 20px 40px ${tier.color}15`,
                }}
              >
                {/* Premium Badge */}
                {tier.highlighted && (
                  <motion.div
                    className="absolute top-6 right-6 px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider"
                    style={{ background: tier.color }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Beliebteste Wahl
                  </motion.div>
                )}

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  {/* Icon & Title */}
                  <div className="mb-6">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                      style={{ background: `${tier.color}15` }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <tier.icon className="w-8 h-8" style={{ color: tier.color }} />
                    </motion.div>
                    <h3 className="text-2xl font-black text-neutral-900 mb-2">{tier.name}</h3>
                    <p className="text-sm text-neutral-600">{tier.description}</p>
                  </div>

                  {/* Price */}
                  {/* Removed: Price section with placeholder */}

                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, fidx) => (
                      <motion.div
                        key={fidx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + fidx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <motion.div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                          style={{ background: `${tier.color}20` }}
                        >
                          <Check className="w-3 h-3" style={{ color: tier.color }} />
                        </motion.div>
                        <span className="text-sm text-neutral-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="/kontakt"
                    className="group w-full py-4 rounded-xl font-bold uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2"
                    style={{
                      background: tier.highlighted ? tier.color : '#f3f4f6',
                      color: tier.highlighted ? 'white' : tier.color
                    }}
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tier.cta}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-50 to-cyan-50 rounded-2xl border-2 border-neutral-200 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-black text-neutral-900 mb-2">Keine versteckten Kosten</h4>
              <p className="text-sm text-neutral-600">Transparente Preiskalkulation für alle Services</p>
            </div>
            <div>
              <h4 className="font-black text-neutral-900 mb-2">Mengenrabatte</h4>
              <p className="text-sm text-neutral-600">Besondere Konditionen für regelmäßige Aufträge</p>
            </div>
            <div>
              <h4 className="font-black text-neutral-900 mb-2">Kostenlos Beratung</h4>
              <p className="text-sm text-neutral-600">Wir finden die beste Lösung für Ihre Anforderung</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
