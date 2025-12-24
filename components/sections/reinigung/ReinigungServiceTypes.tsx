'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Briefcase, Building2, Home, Stethoscope, ArrowUpRight, Wrench, Clock, Hotel, Film, HardHat, HomeIcon, Trash2, CalendarCheck } from 'lucide-react'

export default function ReinigungServiceTypes() {
  const reinigungAccent = '#06b6d4'

  const serviceTypes = [
    {
      icon: Briefcase,
      title: 'Büroreinigung',
      description: 'Tägliche und wöchentliche Reinigung von Büroflächen für optimale Hygiene und Produktivität',
      features: ['Tägliche Wartung', 'Ergonomische Arbeitsweise', 'Diskrete Durchführung'],
      color: 'from-blue-500 to-cyan-500',
      link: '/services/reinigung/bueroreinigung'
    },
    {
      icon: Building2,
      title: 'Gebäudereinigung',
      description: 'Professionelle Außen- und Innenfassadenreinigung sowie Fensterreinigung',
      features: ['Zuverlässig & termintreu', 'Moderne Technologie', '100 % sicher'],
      color: 'from-cyan-500 to-teal-500',
      link: '/services/reinigung/gebaeudereinigung'
    },
    {
      icon: Home,
      title: 'Grundreinigung',
      description: 'Intensive Tiefenreinigung für Wohnungen, Häuser und Gewerberäume',
      features: ['Gründliche Reinigung', 'Alle Oberflächen', 'ECO-Produkte'],
      color: 'from-teal-500 to-emerald-500',
      link: '/services/reinigung/grundreinigung'
    },
    {
      icon: Stethoscope,
      title: 'Praxisreinigung',
      description: 'Spezielle Hygieneanforderungen für medizinische und zahnmedizinische Praxen',
      features: ['Zuverlässigkeit – 365 Tage im Jahr', 'Fachgerechte Verfahren', 'Hygienestandards'],
      color: 'from-emerald-500 to-cyan-500',
      link: '/services/reinigung/praxisreinigung'
    },
    {
      icon: ArrowUpRight,
      title: 'Treppenhausreinigung',
      description: 'Regelmäßige und gründliche Reinigung von Treppenhäusern und Gemeinschaftsbereichen',
      features: ['Wöchentlich buchbar', 'Diskret & effizient', 'Zuverlässig'],
      color: 'from-cyan-500 to-blue-500',
      link: '/services/reinigung/treppenhausreinigung'
    },
    {
      icon: Clock,
      title: 'Unterhaltsreinigung',
      description: 'Regelmäßige professionelle Reinigung für langfristig gepflegte Räumlichkeiten',
      features: ['Flexibel planbar', 'Kontinuierliche Qualität', 'Kosteneffizient'],
      color: 'from-blue-500 to-indigo-500',
      link: '/services/reinigung/unterhaltsreinigung'
    },
    {
      icon: Hotel,
      title: 'Hotelreinigung',
      description: 'Spezialisierte Reinigung für Hotels mit höchsten Hygiene- und Servicestandards',
      features: ['24/7 Service', 'Gastorientiert', 'Diskret & schnell'],
      color: 'from-indigo-500 to-purple-500',
      link: '/services/reinigung/hotelreinigung'
    },
    {
      icon: Film,
      title: 'Kinoreinigung',
      description: 'Professionelle Kinosaalreinigung zwischen Vorstellungen und Tiefenreinigung',
      features: ['Zeiteffizient', 'Gründliche Säuberung', 'Erfahrenes Team'],
      color: 'from-purple-500 to-pink-500',
      link: '/services/reinigung/kinoreinigung'
    },
    {
      icon: HardHat,
      title: 'Baureinigung',
      description: 'Gründliche Endreinigung nach Bau- und Renovierungsarbeiten',
      features: ['Baustaubenfernung', 'Feinreinigung', 'Abnahmebereit'],
      color: 'from-orange-500 to-red-500',
      link: '/services/reinigung/baureinigung'
    },
    {
      icon: HomeIcon,
      title: 'Wohnungsreinigung',
      description: 'Professionelle Reinigung von Wohnungen und Apartments nach Ihren Wünschen',
      features: ['Individuell anpassbar', 'Zuverlässig', 'Vertrauensvoll'],
      color: 'from-green-500 to-teal-500',
      link: '/services/reinigung/wohnungsreinigung'
    },
    {
      icon: Trash2,
      title: 'Mülltonnenreinigung',
      description: 'Hygienische Reinigung und Desinfektion von Mülltonnen und Abfallbehältern',
      features: ['Geruchsneutral', 'Desinfiziert', 'Umweltfreundlich'],
      color: 'from-lime-500 to-green-500',
      link: '/services/reinigung/muelltonnenreinigung'
    },
    {
      icon: Wrench,
      title: 'Spezialreinigung',
      description: 'Maßgeschneiderte Reinigungslösungen für individuelle Anforderungen',
      features: ['Flexibel einsetzbar', 'Anfrage-basiert', 'Professionell'],
      color: 'from-slate-500 to-gray-500',
      link: '/services/reinigung/spezialreinigung'
    }
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-slate-50 via-white to-cyan-50/30">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: reinigungAccent }}
          >
            <span className="w-2 h-2 rounded-full" style={{ background: reinigungAccent }} />
            Umfassende Leistungen
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Reinigung für jeden Bedarf
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Spezialisierte Reinigungslösungen für Büros, Gebäude, Wohnungen und spezielle Anforderungen
          </p>
        </motion.div>

        {/* Interactive 3x2 Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceTypes.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full rounded-2xl overflow-hidden border border-neutral-200 hover:border-cyan-300 transition-all duration-300 bg-white shadow-sm hover:shadow-xl">
                {/* Gradient Background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Top accent bar */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1.5 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                  style={{ background: `linear-gradient(90deg, ${reinigungAccent}, transparent)` }}
                />

                {/* Content */}
                <div className="relative p-8 space-y-5 h-full flex flex-col">
                  {/* Icon with animated background */}
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${reinigungAccent}10, ${reinigungAccent}5)`,
                      border: `2px solid ${reinigungAccent}20`,
                      color: reinigungAccent
                    }}
                  >
                    <service.icon className="w-8 h-8" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-neutral-900 group-hover:text-cyan-900 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Feature List */}
                  <div className="space-y-3 pt-4 border-t border-neutral-100 group-hover:border-cyan-100 transition-colors">
                    {service.features.map((feature, fidx) => (
                      <motion.div
                        key={fidx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + fidx * 0.08 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: reinigungAccent }}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: fidx * 0.1 }}
                        />
                        <span className="text-sm text-neutral-700 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Link */}
                  <motion.a
                    href={service.link}
                    className="mt-6 inline-flex items-center gap-2 font-semibold transition-all group/link hover:gap-3"
                    style={{ color: reinigungAccent }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-sm">Details anschauen</span>
                    <span>→</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-neutral-600 mb-6">
            Ihre Anforderung nicht dabei? Wir haben für alles eine Lösung!
          </p>
          <a href="/kontakt">
            <motion.button
              className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${reinigungAccent}, #0284c7)` }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Jetzt Anfrage stellen
            </motion.button>
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
