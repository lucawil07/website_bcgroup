'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { ArrowRight, Building2, Zap, Shield, Wrench } from 'lucide-react'

export default function AbrissPremiumHero() {
  const abrissprimary = '#3c2c1f'
  const abrissaccent = '#d97706'

  return (
    <Section padding="none" className="relative overflow-hidden py-32 md:py-40 lg:py-48 bg-gradient-to-br from-amber-950 via-neutral-900 to-black">
      {/* Premium Background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated accent elements - positioned with more breathing space */}
        <motion.div
          className="absolute top-1/4 -right-32 w-[500px] h-[500px] rounded-full"
          style={{ background: `radial-gradient(circle, ${abrissaccent}25, transparent)` }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${abrissaccent}15, transparent)` }}
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, delay: 0.5 }}
        />
        
        {/* Grid pattern overlay - more subtle */}
        <div className="absolute inset-0 opacity-3" style={{
          backgroundImage: `linear-gradient(90deg, ${abrissaccent} 1px, transparent 1px), linear-gradient(${abrissaccent} 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
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
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 bg-white/5">
                <Zap className="w-5 h-5" style={{ color: abrissaccent }} />
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: abrissaccent }}>
                  Aus der Region – für die Region
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
            >
              Professioneller
              <br />
              <span style={{ color: abrissaccent }} className="inline-block">Gebäudeabriss</span>
              {' '}in Berlin
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
            >
              Professioneller Gebäudeabriss mit modernster Technologie, vollständiger Entsorgung und allen erforderlichen Genehmigungen. Vertrauen Sie auf unsere Experten für sichere und nachhaltige Lösungen.
            </motion.p>

            {/* Feature Dots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {[
                { icon: Building2, text: 'Professionelle Abwicklung' },
                { icon: Zap, text: 'Schnelle Durchführung' },
                { icon: Shield, text: 'Sichere Verfahren' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: abrissaccent }} />
                  <span className="text-sm md:text-base font-semibold text-white/90">{item.text}</span>
                </div>
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
                  style={{ background: abrissaccent }}
                >
                  <span className="relative z-10">Angebot anfordern</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="/ratgeber/abriss-berlin" className="inline-block">
                <button
                  className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider border-2 transition-all duration-300 flex items-center justify-center gap-2 text-white hover:bg-amber-900/20"
                  style={{ borderColor: abrissaccent, color: abrissaccent }}
                >
                  Mehr Info
                </button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-96 lg:h-[500px] hidden lg:block"
          >
            {/* Animated Icons Grid */}
            <div className="absolute inset-0 grid grid-cols-2 gap-6 p-8">
              {[
                { Icon: Building2, delay: 0 },
                { Icon: Wrench, delay: 0.2 },
                { Icon: Shield, delay: 0.4 },
                { Icon: Zap, delay: 0.6 }
              ].map((item, idx) => {
                const IconComponent = item.Icon
                return (
                  <motion.div
                    key={idx}
                    className="rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    style={{ background: `${abrissaccent}20` }}
                    animate={{ 
                      y: [0, -15, 0],
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 4 + idx, 
                      repeat: Infinity,
                      delay: item.delay
                    }}
                  >
                    <IconComponent className="w-16 h-16" style={{ color: abrissaccent }} />
                  </motion.div>
                )
              })}
            </div>

            {/* Floating Info Card */}
            <motion.div
              className="absolute -right-12 -bottom-12 w-64 h-64 rounded-2xl p-6 text-white"
              style={{ background: abrissaccent }}
              animate={{ y: [20, -20, 20] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            >
              <div className="space-y-4">
                <p className="text-sm font-bold uppercase">Leistungen</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Alle Gebäudetypen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Schnelle Abwicklung
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Umweltgerecht
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
