'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Clock, CheckCircle2, Users, Wrench } from 'lucide-react'

export default function HausmeisterPremiumHero() {
  const hausmeisterPrimary = '#1e1b4b'
  const hausmeisterAccent = '#8b5cf6'

  const serviceHighlights = [
    { label: '24/7 Verfügbar', value: 'Rund um die Uhr' },
    { label: 'Schnelle Response', value: 'Innerhalb 1 Stunde' },
    { label: 'Erfahrenes Team', value: '15+ Jahre Expertise' },
  ]

  return (
    <Section padding="none" className="relative overflow-hidden py-32 md:py-40 lg:py-48 bg-gradient-to-br from-indigo-950 via-slate-900 to-black">
      {/* Premium Background with Animation */}
      <div className="absolute inset-0 -z-10">
        {/* Animated accent elements - Smooth wave patterns */}
        <motion.div
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: `radial-gradient(circle, ${hausmeisterAccent}25, transparent)` }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${hausmeisterAccent}15, transparent)` }}
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.3, 0.15], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, delay: 0.5 }}
        />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-2" style={{
          backgroundImage: `linear-gradient(90deg, ${hausmeisterAccent} 1px, transparent 1px), linear-gradient(${hausmeisterAccent} 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="space-y-10 lg:pr-12"
          >
            {/* Premium Badge with Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 bg-white/5">
                <Clock className="w-5 h-5" style={{ color: hausmeisterAccent }} />
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: hausmeisterAccent }}>
                  Zuverlässigkeit seit 2010
                </span>
              </div>
            </motion.div>

            {/* Main Headline - Bold and Unique */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
            >
              Ihr Gebäude,
              <br />
              <span style={{ color: hausmeisterAccent }} className="inline-block">unser ständiger Dienst</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
            >
              Professionelle Hausmeisterdienste mit 24/7 Verfügbarkeit. Von Wartung bis Notfallservice – wir kümmern uns um Ihr Gebäude wie um unseres.
            </motion.p>

            {/* Key Benefits - Animated List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="space-y-3 pt-4"
            >
              {serviceHighlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-3 h-3 rounded-full" style={{ background: hausmeisterAccent }} />
                  <div className="flex flex-col">
                    <span className="text-xs uppercase font-bold tracking-wider" style={{ color: hausmeisterAccent }}>
                      {highlight.label}
                    </span>
                    <span className="text-sm font-semibold text-white/90">{highlight.value}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <a href="/kontakt" className="group">
                <button
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden"
                  style={{ background: hausmeisterAccent }}
                >
                  <span className="relative z-10">Service anfragen</span>
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    →
                  </motion.span>
                </button>
              </a>
              <button
                className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider border-2 transition-all duration-300 flex items-center justify-center gap-2 text-white"
                style={{ borderColor: hausmeisterAccent, color: hausmeisterAccent }}
              >
                Verfügbarkeit
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Unique Design */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-96 lg:h-[500px] hidden lg:flex items-center justify-center"
          >
            {/* Background glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{ background: `radial-gradient(circle at 50% 50%, ${hausmeisterAccent}15, transparent)` }}
            />

            {/* Main card with statistics */}
            <motion.div
              className="relative w-full h-full rounded-3xl overflow-hidden"
              animate={{ rotateY: [0, 5, 0], rotateX: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `linear-gradient(45deg, white 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />

              <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center">
                {/* Central Icon with Animation */}
                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="mb-8"
                >
                  <div className="w-32 h-32 rounded-full flex items-center justify-center relative" style={{ background: `${hausmeisterAccent}20` }}>
                    <motion.div
                      className="w-24 h-24 rounded-full flex items-center justify-center"
                      style={{ background: `${hausmeisterAccent}40` }}
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Wrench className="w-12 h-12" style={{ color: hausmeisterAccent }} />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Stats Grid */}
                <div className="space-y-6 w-full">
                  <div>
                    <p className="text-sm uppercase font-bold" style={{ color: hausmeisterAccent }}>
                      Gebäude verwaltet
                    </p>
                    <p className="text-4xl font-black text-white mt-2">850+</p>
                  </div>
                  <div className="h-px" style={{ background: `${hausmeisterAccent}30` }} />
                  <div>
                    <p className="text-sm uppercase font-bold" style={{ color: hausmeisterAccent }}>
                      Kundenzufriedenheit
                    </p>
                    <p className="text-4xl font-black text-white mt-2">98%</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating info cards */}
            <motion.div
              className="absolute -left-16 top-1/2 -translate-y-1/2 w-56 rounded-2xl p-6 text-white backdrop-blur-md border border-white/20"
              style={{ background: `${hausmeisterAccent}10` }}
              animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-6 h-6" style={{ color: hausmeisterAccent }} />
                <p className="font-bold">Proaktive Wartung</p>
              </div>
              <p className="text-sm text-white/70">Vorbeugende Instandhaltung für optimale Gebäudeperformance</p>
            </motion.div>

            <motion.div
              className="absolute -right-16 bottom-1/4 w-56 rounded-2xl p-6 text-white backdrop-blur-md border border-white/20"
              style={{ background: `${hausmeisterAccent}10` }}
              animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
              transition={{ duration: 7, repeat: Infinity, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6" style={{ color: hausmeisterAccent }} />
                <p className="font-bold">Expert Team</p>
              </div>
              <p className="text-sm text-white/70">Zertifizierte Fachkräfte mit umfassender Erfahrung</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
