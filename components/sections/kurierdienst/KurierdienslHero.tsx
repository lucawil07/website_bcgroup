'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui'
import { Zap, Route, Clock, Truck } from 'lucide-react'

export default function KurierdienslHero() {
  const primary = '#001a33'
  const accent = '#00d4ff'

  // Animated delivery route visualization
  const deliveryPath = [
    { x: 0, y: 0 },
    { x: 150, y: -50 },
    { x: 300, y: 30 },
    { x: 400, y: -20 },
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Premium Gradient Background - Dynamic pink/blue */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full"
          style={{ background: `radial-gradient(circle, ${accent}20, transparent)` }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${accent}15, transparent)` }}
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 14, repeat: Infinity, delay: 0.8 }}
        />
        
        {/* Animated dots grid background - more dynamic */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            backgroundImage: `radial-gradient(circle, ${accent} 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center py-32 md:py-40 lg:py-48">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="space-y-10 lg:pr-12"
          >
            {/* Premium Badge with animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full backdrop-blur-md border border-white/20 bg-white/5">
                <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity }}>
                  <Zap className="w-5 h-5" style={{ color: accent }} />
                </motion.div>
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: accent }}>
                  Express-Lieferungen
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
              Schnelle
              <br />
              <span style={{ color: accent }} className="inline-block">
                Zustellung
              </span>
              {' '}in Berlin
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
            >
              Zuverlässiger Kurierdienst mit Same-Day-Delivery, Express-Optionen und Sperrguttransport. 
              Schnell, professionell und überall in Berlin und Umland.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[
                { icon: Clock, text: 'Schnellste Lieferung' },
                { icon: Route, text: 'Ganz Berlin & Umland' },
                { icon: Truck, text: 'Alle Größen' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
                  whileHover={{ backgroundColor: `${accent}20`, borderColor: accent }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-4 h-4" style={{ color: accent }} />
                  <span className="text-sm md:text-base font-semibold text-white">{item.text}</span>
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
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden shadow-lg"
                  style={{ background: accent }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  <span className="relative z-10">Jetzt anfragen</span>
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1, repeat: Infinity }}>
                    →
                  </motion.span>
                </button>
              </a>
              <button
                className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider border-2 transition-all duration-300 flex items-center justify-center gap-2 text-white hover:bg-white/5"
                style={{ borderColor: accent, color: accent }}
              >
                Preise anzeigen
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Animated Delivery Map */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-96 lg:h-[500px] hidden lg:flex items-center justify-center"
          >
            {/* Main tracking card */}
            <motion.div
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${accent}15, transparent)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              
              {/* Animated route visualization */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke={`${accent}20`} strokeWidth="1"/>
                  </pattern>
                  <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={accent} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={accent} stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <rect width="400" height="300" fill="url(#grid)" />
                
                {/* Animated path */}
                <motion.path
                  d="M 50 150 Q 150 100 250 160 T 370 140"
                  fill="none"
                  stroke="url(#pathGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                />

                {/* Moving truck icon */}
                <motion.g
                  animate={{ 
                    x: [50, 350, 50],
                    y: [150, 100, 150]
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
                >
                  <circle cx="0" cy="0" r="8" fill={accent} />
                  <circle cx="0" cy="0" r="12" fill="none" stroke={accent} strokeWidth="2" opacity="0.3" />
                </motion.g>

                {/* Delivery points */}
                {[
                  { x: 50, y: 150, label: 'Start' },
                  { x: 150, y: 100, label: '' },
                  { x: 250, y: 160, label: '' },
                  { x: 370, y: 140, label: 'Ziel' }
                ].map((point, idx) => (
                  <motion.g key={idx} animate={{ scale: [1, 1.2, 1] }} transition={{ delay: idx * 0.3, duration: 2, repeat: Infinity }}>
                    <circle cx={point.x} cy={point.y} r="6" fill={accent} opacity="0.6" />
                    <circle cx={point.x} cy={point.y} r="10" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.4" />
                  </motion.g>
                ))}
              </svg>
            </motion.div>

            {/* Floating info cards */}
            <motion.div
              className="absolute bottom-0 right-0 w-72 rounded-2xl p-6 text-white backdrop-blur-md border border-white/20 bg-white/5"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: `${accent}30` }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Clock className="w-6 h-6" style={{ color: accent }} />
                  </motion.div>
                  <div>
                    <p className="text-xs font-bold uppercase opacity-70">Schnellste Zeit</p>
                    <p className="text-lg font-black">30 Min</p>
                  </div>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: `${accent}30` }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                  >
                    <Route className="w-6 h-6" style={{ color: accent }} />
                  </motion.div>
                  <div>
                    <p className="text-xs font-bold uppercase opacity-70">Einsatzgebiet</p>
                    <p className="text-lg font-black">Ganz Berlin</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </div>
  )
}
