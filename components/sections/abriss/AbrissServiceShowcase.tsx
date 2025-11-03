'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Building2, Wrench, Recycle, AlertCircle, MapPin } from 'lucide-react'

export default function AbrissServiceShowcase() {
  const abrissaccent = '#d97706'
  const services = [
    {
      icon: Building2,
      title: 'Gebäudeabriss',
      description: 'Kompletter Abriss von Wohnhäusern, Mehrfamilienhäusern und Bürogebäuden',
      features: ['Alle Gebäudetypen', 'Sichere Durchführung', 'Umweltgerecht']
    },
    {
      icon: Wrench,
      title: 'Selektive Demontage',
      description: 'Fachgerechte Demontage mit Rückgewinnung wertvollen Materials',
      features: ['Material-Recycling', 'Ressourcenschonung', 'Optimale Verwertung']
    },
    {
      icon: AlertCircle,
      title: 'Schadstoff-Management',
      description: 'Professionelle Asbestsanierung und Schadstoffentsorgung',
      features: ['Zertifizierte Fachkräfte', 'Komplette Sicherheit', 'Fachgerecht']
    },
    {
      icon: Recycle,
      title: 'Recycling & Entsorgung',
      description: 'Nachhaltige Verwertung von Bauschutt und Materialien',
      features: ['100% nachhaltig', 'Optimale Wiederverwertung', 'Fachgerecht']
    },
    {
      icon: MapPin,
      title: 'Genehmigungen',
      description: 'Komplette Abwicklung aller erforderlichen Behördengenehmigungen',
      features: ['Alle Dokumente', 'Unbürokratisch', 'Komplett betreut']
    }
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-white via-white to-amber-50">
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
            Unsere Abriss-Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Umfassendes Spektrum von Abrissdiensten für jeden Anforderungsgrad und Gebäudetyp
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
          {services.map((service, index) => {
            // Vary heights for masonry effect
            const heights = ['auto', 'auto', 'auto', 'auto', 'auto', 'auto']
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl overflow-hidden border border-neutral-200 hover:border-amber-300 transition-all duration-300 h-full"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transform origin-left group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: abrissaccent }}
                />

                {/* Content */}
                <div className="relative p-8 space-y-5 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${abrissaccent}15` }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <service.icon className="w-7 h-7" style={{ color: abrissaccent }} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-amber-900 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 pt-4 border-t border-neutral-200 group-hover:border-amber-200 transition-colors">
                    {service.features.map((feature, fidx) => (
                      <motion.div
                        key={fidx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + fidx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-neutral-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: abrissaccent }} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Arrow */}
                  <motion.div
                    className="mt-6 flex items-center gap-2 font-semibold transition-all group-hover:translate-x-2"
                    style={{ color: abrissaccent }}
                  >
                    <span className="text-sm">Mehr erfahren</span>
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      →
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
