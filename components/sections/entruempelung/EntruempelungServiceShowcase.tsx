'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Container, Section } from '@/components/ui'
import { useFunnelModal } from './EntruempelungFunnelWrapper'
import { Home, Warehouse, Building2, Leaf, Users, Clock } from 'lucide-react'

export default function EntruempelungServiceShowcase() {
  const accent = '#10b981'
  const router = useRouter()
  const { openFunnel } = useFunnelModal()
  
  const services = [
    {
      icon: Home,
      title: 'Wohnungsauflösung',
      description: 'Von der Single-Wohnung bis zum Palazzo – von geringem Füllstand zu Extremfällen – wir räumen professionell leer',
      features: ['Schnelle Räumung', 'Schonung der Wände', 'Vollständige Entsorgung'],
      size: 'large',
      color: '#065f46',
      link: '/services/entruempelung/wohnungsaufloesung'
    },
    {
      icon: Warehouse,
      title: 'Kellerbereiche',
      description: 'Überfüllte Keller komplett geleert und gesäubert',
      features: ['Tiefgaragen', 'Lagerkeller', 'Überbau-Kammern'],
      size: 'small',
      color: '#047857',
      link: '/services/entruempelung/kellerbereiche'
    },
    {
      icon: Building2,
      title: 'Baustellen',
      description: 'Professionelle Baustellenräumung und Schuttentsorgung',
      features: ['Sichere Arbeitsweise', 'Fachgerechte Entsorgung', 'Schnelle Abwicklung'],
      size: 'small',
      color: '#059669',
      link: '/services/entruempelung/baustellen'
    },
    {
      icon: Leaf,
      title: 'Nachlassverwaltung',
      description: 'Sensible Hausräumung mit taktvollem Umgang',
      features: ['Wertschätzender Service', 'Schnelle Abwicklung', 'Entlastung für Familien'],
      size: 'large',
      color: '#10b981',
      link: '/services/entruempelung/nachlassverwaltung'
    },
    {
      icon: Users,
      title: 'Gewerbliche Räumung',
      description: 'Komplette Leerung von Büros, Läden und Lagerhallen',
      features: ['Flexible Zeitfenster', 'Diskrete Abwicklung', 'Große Mengen'],
      size: 'small',
      color: '#34d399',
      link: '/services/entruempelung/gewerbliche-raeumung'
    },
    {
      icon: Clock,
      title: 'Express-Service',
      description: 'Notfall-Entrümpelung innerhalb von 48 Stunden',
      features: ['Sofort verfügbar', 'Kurze Termine', 'Flexible Planung'],
      size: 'small',
      color: '#6ee7b7',
      link: '/services/entruempelung/express-service'
    }
  ]

  // Create asymmetric layout
  const layoutConfigs = [
    { gridClass: 'lg:col-span-2 lg:row-span-1' }, // Large
    { gridClass: 'lg:col-span-1' }, // Small
    { gridClass: 'lg:col-span-1' }, // Small
    { gridClass: 'lg:col-span-2 lg:row-span-1' }, // Large
    { gridClass: 'lg:col-span-1' }, // Small
    { gridClass: 'lg:col-span-1' }, // Small
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-white to-emerald-50">
      <Container size="wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-emerald-900">Leistungsspektrum</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Für jede Entrümpelung die richtige Lösung
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Ob Wohnung, Gewerbe oder Nachlass - wir haben spezialisierte Services für alle Anforderungen
          </p>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
          {services.map((service, index) => {
            const Icon = service.icon
            const layout = layoutConfigs[index]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
                className={`${layout.gridClass} group relative rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 h-full min-h-64 cursor-default`}
              >
                {/* Background gradient based on service */}
                <div 
                  className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${service.color}50, ${service.color}20)` }}
                />

                {/* Border */}
                <div className="absolute inset-0 border border-white/30 group-hover:border-white/50 transition-colors rounded-3xl" />

                {/* Animated accent bar */}
                <motion.div
                  className="absolute top-0 left-0 h-1 rounded-t-3xl"
                  style={{ background: accent }}
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ background: `${accent}20` }}
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <Icon className="w-8 h-8" style={{ color: accent }} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-emerald-700 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-700 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom Section - Features */}
                  <div className="space-y-2 pt-6 border-t border-white/20 group-hover:border-white/40 transition-colors mt-4">
                    {service.features.map((feature, fidx) => (
                      <motion.div
                        key={fidx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + fidx * 0.05, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-neutral-700"
                      >
                        <motion.span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: accent }}
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ delay: index * 0.1, duration: 2, repeat: Infinity }}
                        />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Arrow CTA */}
                  <motion.div
                    onClick={() => router.push(service.link)}
                    className="mt-6 flex items-center gap-2 font-semibold transition-all group-hover:translate-x-2 cursor-pointer"
                    style={{ color: accent }}
                  >
                    <span className="text-sm">Erfahren Sie mehr</span>
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      →
                    </motion.span>
                  </motion.div>
                </div>

                {/* Corner accent */}
                <motion.div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-3xl opacity-0 group-hover:opacity-10 transition-opacity"
                  style={{ background: accent }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-neutral-600 mb-6">
            Ihre Entrümpelung ist anders? Kein Problem!
          </p>
          <motion.button
            onClick={openFunnel}
            className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all duration-300 shadow-lg"
            style={{ background: accent }}
            whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${accent}40` }}
            whileTap={{ scale: 0.95 }}
          >
            Kostenlose Beratung
          </motion.button>
        </motion.div>
      </Container>
    </Section>
  )
}
