'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Zap, Package, Truck, Clock, MapPin, BarChart3 } from 'lucide-react'

export default function KurierdienslServices() {
  const accent = '#00d4ff'

  const services = [
    {
      icon: Clock,
      title: 'Same-Day Delivery',
      description: 'Lieferung am selben Tag - perfekt für dringende Aufträge in ganz Berlin',
      features: ['Flexible Abholung', 'Schnelle Route', 'Live Tracking'],
      delay: 0,
    },
    {
      icon: Zap,
      title: 'Express-Kurier',
      description: 'Ultra-schnelle Lieferung in bis zu 1-2 Stunden für zeitkritische Sendungen',
      features: ['1-2 Std. Garantie', 'Direktfahrt', 'Versichert'],
      delay: 0.1,
    },
    {
      icon: Package,
      title: 'Sperrguttransport',
      description: 'Sichere Beförderung von Möbeln, Geräten und großen Paketen',
      features: ['Bis 1 Tonne', 'Professionelle Handhabung', 'Versichert'],
      delay: 0.2,
    },
    {
      icon: Truck,
      title: 'Großtransporte',
      description: 'Spezialisierte Transporte für Baustoffe, Geräte und Maschinen',
      features: ['Spezialfahrzeuge', 'Fachpersonal', 'Dokumentiert'],
      delay: 0.3,
    },
    {
      icon: MapPin,
      title: 'Dokumententransport',
      description: 'Sichere Beförderung von wichtigen Dokumenten und Unterlagen',
      features: ['Quittung', 'Vertraulichkeit', 'Tracking'],
      delay: 0.4,
    },
    {
      icon: BarChart3,
      title: 'Business-Logistik',
      description: 'Regelmäßige Auslieferungstouren für Geschäftskunden',
      features: ['Vertragskonditionen', 'Kostenoptimiert', 'Zuverlässig'],
      delay: 0.5,
    },
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-white via-white to-blue-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
          style={{ background: `${accent}08` }}
          animate={{ scale: [1, 1.2, 1] }}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
            <span className="text-sm font-bold uppercase tracking-wider" style={{ color: accent }}>
              Unsere Services
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Alle Kurierdienste<br />
            <span style={{ color: accent }}>unter einem Dach</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Von Express-Lieferungen bis zu Sperrguttransporten – wir bieten die komplette Palette an Kurierdiensten
          </p>
        </motion.div>

        {/* Services Grid - Unique staggered layout */}
        <div className="space-y-8">
          {/* Row 1 - 3 Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} service={service} accent={accent} index={index} />
            ))}
          </div>

          {/* Row 2 - 3 Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.slice(3, 6).map((service, index) => (
              <ServiceCard key={index + 3} service={service} accent={accent} index={index + 3} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

interface ServiceCardProps {
  service: {
    icon: React.ComponentType<any>
    title: string
    description: string
    features: string[]
    delay: number
  }
  accent: string
  index: number
}

function ServiceCard({ service, accent, index }: ServiceCardProps) {
  const Icon = service.icon
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: service.delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <motion.div
        className="relative p-8 rounded-2xl border-2 border-neutral-200 bg-white transition-all duration-300 h-full hover:border-cyan-300 flex flex-col"
        whileHover={{
          scale: 1.03,
          boxShadow: `0 20px 50px ${accent}15`,
          borderColor: accent,
        }}
      >
        {/* Accent bar on top - animated on hover */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300"
          style={{ background: accent }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon circle */}
        <motion.div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
          style={{ background: `${accent}15` }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="w-8 h-8" style={{ color: accent }} />
        </motion.div>

        {/* Content */}
        <div className="flex-grow">
          {/* Title */}
          <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-950 transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 text-sm leading-relaxed mb-6">
            {service.description}
          </p>
        </div>

        {/* Features - Bottom */}
        <div className="space-y-2 pt-6 border-t border-neutral-200 group-hover:border-cyan-200 transition-colors">
          {service.features.map((feature, fidx) => (
            <motion.div
              key={fidx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + fidx * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-sm text-neutral-700"
            >
              <motion.span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: accent }}
                whileHover={{ scale: 1.5 }}
              />
              {feature}
            </motion.div>
          ))}
        </div>

        {/* Arrow indicator */}
        <motion.div
          className="mt-6 flex items-center gap-2 font-semibold transition-all pt-6 border-t border-neutral-200 group-hover:border-cyan-200"
          style={{ color: accent }}
        >
          <span className="text-sm">Erfahren Sie mehr</span>
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            →
          </motion.span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
