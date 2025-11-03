'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { MapPin, Users, TrendingUp, Building, Building2, Zap, Award } from 'lucide-react'

export default function ReinigungAreaShowcase() {
  const reinigungAccent = '#06b6d4'

  const areas = [
    {
      area: 'Charlottenburg',
      coverage: '95%',
      projects: '1200+',
      rating: 4.9,
      icon: Building
    },
    {
      area: 'Mitte',
      coverage: '98%',
      projects: '2100+',
      rating: 4.95,
      icon: Building2
    },
    {
      area: 'Kreuzberg',
      coverage: '92%',
      projects: '850+',
      rating: 4.8,
      icon: Building
    },
    {
      area: 'Prenzlauer Berg',
      coverage: '96%',
      projects: '1500+',
      rating: 4.9,
      icon: Building2
    },
    {
      area: 'Friedrichshain',
      coverage: '93%',
      projects: '950+',
      rating: 4.85,
      icon: Building
    },
    {
      area: 'Tempelhof',
      coverage: '94%',
      projects: '1100+',
      rating: 4.88,
      icon: Building2
    }
  ]

  const stats = [
    { 
      icon: MapPin, 
      label: 'Bezirke abgedeckt', 
      value: '12'
    },
    { 
      icon: Zap, 
      label: 'Tägliche Einsätze', 
      value: '50+'
    },
    { 
      icon: Users, 
      label: 'Fachkräfte', 
      value: '120+'
    },
    { 
      icon: TrendingUp, 
      label: 'Jahre Erfahrung', 
      value: '20+'
    }
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-white via-cyan-50/20 to-white">
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
            Flächendeckend in Berlin
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Überall in Berlin<br />
            <span style={{ color: reinigungAccent }}>für Sie verfügbar</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Mit über 120 Fachkräften versorgen wir alle Berliner Bezirke mit professioneller Gebäudereinigung
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="relative rounded-2xl p-6 bg-gradient-to-br from-white to-cyan-50/50 border border-cyan-100 overflow-hidden group hover:border-cyan-300 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {/* Background animated element */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100" style={{ color: reinigungAccent }}>
                <stat.icon className="w-12 h-12 opacity-5" />
              </div>

              {/* Content */}
              <div className="relative">
                <stat.icon className="w-5 h-5 mb-3" style={{ color: reinigungAccent }} />
                <p className="text-3xl font-black mb-1" style={{ color: reinigungAccent }}>
                  {stat.value}
                </p>
                <p className="text-xs font-semibold text-neutral-600">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Areas Grid - Unique Card Design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {areas.map((area, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative cursor-pointer"
            >
              {/* Card with gradient border effect */}
              <motion.div
                className="relative h-full rounded-2xl overflow-hidden border border-neutral-200 group-hover:border-cyan-300 transition-all duration-300 bg-white shadow-sm hover:shadow-xl"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Top gradient bar - animated entrance */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: `linear-gradient(90deg, ${reinigungAccent}, transparent)` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: idx * 0.08 + 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                />

                {/* Main Content */}
                <div className="p-6 space-y-4">
                  {/* Emoji and Name */}
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.08 + 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div>
                      <h3 className="text-2xl font-black text-neutral-900">{area.area}</h3>
                      <p className="text-xs font-semibold text-neutral-500 mt-1">Berlin</p>
                    </div>
                    <motion.div
                      className="w-10 h-10 flex items-center justify-center"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      style={{ color: reinigungAccent }}
                    >
                      <area.icon className="w-8 h-8" />
                    </motion.div>
                  </motion.div>

                  {/* Stats Row */}
                  <motion.div
                    className="grid grid-cols-2 gap-4 pt-3 border-t border-neutral-100 group-hover:border-cyan-100 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 + 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="space-y-1"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wide">Abdeckung</p>
                      <p className="text-2xl font-black" style={{ color: reinigungAccent }}>
                        {area.coverage}
                      </p>
                    </motion.div>
                    <motion.div
                      className="space-y-1 text-right"
                      whileHover={{ scale: 1.05 }}
                    >
                      <p className="text-xs text-neutral-500 font-semibold uppercase tracking-wide">Projekte</p>
                      <p className="text-2xl font-black text-neutral-900">
                        {area.projects}
                      </p>
                    </motion.div>
                  </motion.div>

                  {/* Rating */}
                  <motion.div
                    className="flex items-center justify-between pt-3 border-t border-neutral-100 group-hover:border-cyan-100 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xs font-semibold text-neutral-600">Kundenbewertung</span>
                    <div className="flex items-center gap-2">
                      <span 
                        className="text-sm font-black"
                        style={{ color: reinigungAccent }}
                      >
                        {area.rating}
                      </span>
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-lg">★</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-100"
        >
          <h3 className="text-2xl font-black text-neutral-900 mb-3">
            Ihr Bezirk nicht aufgeführt?
          </h3>
          <p className="text-neutral-600 mb-6">
            Kontaktieren Sie uns! Wir können auch für weitere Gebiete Berlins tätig werden.
          </p>
          <a href="/kontakt">
            <motion.button
              className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all duration-300"
              style={{ background: `linear-gradient(135deg, ${reinigungAccent}, #0284c7)` }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Unverbindlich anfragen
            </motion.button>
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
