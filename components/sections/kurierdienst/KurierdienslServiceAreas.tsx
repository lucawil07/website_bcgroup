'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { MapPin, Zap, TrendingUp, Package } from 'lucide-react'

export default function KurierdienslServiceAreas() {
  const accent = '#00d4ff'

  const districts = [
    { name: 'Mitte', status: 'Express', time: '15-20 min' },
    { name: 'Tiergarten', status: 'Express', time: '15-25 min' },
    { name: 'Wedding', status: 'Express', time: '20-30 min' },
    { name: 'Charlottenburg', status: 'Express', time: '25-35 min' },
    { name: 'Spandau', status: 'Express', time: '30-40 min' },
    { name: 'Kreuzberg', status: 'Express', time: '15-25 min' },
    { name: 'Tempelhof', status: 'Express', time: '20-30 min' },
    { name: 'Neukölln', status: 'Express', time: '20-30 min' },
    { name: 'Treptow', status: 'Express', time: '25-35 min' },
    { name: 'Köpenick', status: 'Standard', time: '35-45 min' },
    { name: 'Lichtenberg', status: 'Standard', time: '30-40 min' },
    { name: 'Hellersdorf', status: 'Standard', time: '35-45 min' },
  ]

  const stats = [
    { number: '12', label: 'Bezirke in Berlin', icon: MapPin },
    { number: '30+', label: 'km Lieferradius', icon: TrendingUp },
    { number: '100%', label: 'Flächendeckung', icon: Zap },
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${accent}08, transparent)` }}
          animate={{ scale: [1, 1.1, 1] }}
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Einsatzgebiete &
            <br />
            <span style={{ color: accent }}>Lieferzonen</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Wir liefern schnell und zuverlässig in ganz Berlin und bis zu 50 km ins Umland
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl border-2 border-neutral-200 p-8 text-center"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 flex-shrink-0"
                  style={{ background: `${accent}20` }}
                >
                  <Icon className="w-6 h-6" style={{ color: accent }} />
                </div>
                <p className="text-3xl font-black text-neutral-900 mb-2">{stat.number}</p>
                <p className="text-sm text-neutral-600">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Districts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white via-white to-cyan-50 rounded-3xl border-2 border-neutral-200 p-8 md:p-12 backdrop-blur-sm"
        >
          {/* Header */}
          <div className="mb-10">
            <h3 className="text-2xl font-black text-neutral-900 mb-2">Bezirksabdeckung Berlin</h3>
            <p className="text-neutral-600">Alle Bezirke sind erreichbar – mit unterschiedlichen Lieferzeitgarantien</p>
          </div>

          {/* Districts Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {districts.map((district, index) => {
              const isExpress = district.status === 'Express'
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <motion.div
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      isExpress
                        ? `border-cyan-300 bg-gradient-to-br from-cyan-50 to-transparent`
                        : 'border-neutral-200 bg-white hover:border-cyan-200'
                    }`}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 10px 25px ${accent}15`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-grow">
                        <h4 className="font-bold text-neutral-900 mb-1">{district.name}</h4>
                        <p className="text-xs text-neutral-600">{district.time}</p>
                      </div>
                      <div
                        className="px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap flex-shrink-0 flex items-center gap-1"
                        style={{
                          background: isExpress ? `${accent}20` : '#f3f4f6',
                          color: isExpress ? accent : '#6b7280'
                        }}
                      >
                        {isExpress ? (
                          <>
                            <Zap className="w-3 h-3" />
                            <span>Express</span>
                          </>
                        ) : (
                          <>
                            <Package className="w-3 h-3" />
                            <span>Standard</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Delivery status indicator */}
                    <div
                      className="mt-3 h-1 rounded-full"
                      style={{ background: isExpress ? accent : '#10b981' }}
                    />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 pt-10 border-t-2 border-neutral-200"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-black text-neutral-900 mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: accent }} />
                  Express-Zone (15-40 min)
                </h4>
                <p className="text-sm text-neutral-600">Alle innerstädtischen Bezirke mit garantierten Lieferterminen</p>
              </div>
              <div>
                <h4 className="font-black text-neutral-900 mb-2 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: '#10b981' }} />
                  Standard-Zone (30-50 min)
                </h4>
                <p className="text-sm text-neutral-600">Äußere Bezirke und Umland mit zuverlässigen Terminen</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-neutral-600 mb-6">Nicht sicher, ob wir Ihre Zone abdecken?</p>
          <motion.a
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all duration-300"
            style={{ background: accent }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lieferfähigkeit prüfen
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </Container>
    </Section>
  )
}
