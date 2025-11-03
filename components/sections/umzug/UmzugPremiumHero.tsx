'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { ArrowRight, Truck, Lock, Zap, MapPin } from 'lucide-react'

export default function UmzugPremiumHero() {
  const umzugPrimary = '#451a03'
  const umzugAccent = '#f97316'

  // Animated truck path
  const truckVariants = {
    move: {
      x: [0, 100, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear" as const
      }
    }
  }

  // Float animation for side elements
  const floatVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  }

  return (
    <Section padding="none" className="relative overflow-hidden py-32 md:py-40 lg:py-48 bg-gradient-to-br from-orange-950 via-neutral-900 to-black">
      {/* Premium Background with Motion Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated accent orbs - representing movement */}
        <motion.div
          className="absolute top-20 -right-40 w-80 h-80 rounded-full"
          style={{ background: `radial-gradient(circle, ${umzugAccent}25, transparent)` }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${umzugAccent}15, transparent)` }}
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.3, 0.15], x: [-20, 20, -20] }}
          transition={{ duration: 14, repeat: Infinity, delay: 0.5 }}
        />

        {/* Grid pattern overlay - subtle */}
        <div className="absolute inset-0 opacity-2" style={{
          backgroundImage: `linear-gradient(90deg, ${umzugAccent} 1px, transparent 1px), linear-gradient(${umzugAccent} 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />

        {/* Flowing lines representing logistics flow */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={umzugAccent} stopOpacity="0.3" />
              <stop offset="100%" stopColor={umzugAccent} stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M 0,50 Q 250,25 500,50 T 1000,50"
            stroke={umzugAccent}
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,10"
            animate={{ strokeDashoffset: [0, -200] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M 0,150 Q 250,125 500,150 T 1000,150"
            stroke={umzugAccent}
            strokeWidth="2"
            fill="none"
            strokeDasharray="10,10"
            animate={{ strokeDashoffset: [0, -200] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          />
        </svg>
      </div>

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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
                <MapPin className="w-5 h-5" style={{ color: umzugAccent }} />
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: umzugAccent }}>
                  Berlin & bundesweit
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
              Ihr Umzug in
              <br />
              <span style={{ color: umzugAccent }} className="inline-block">sicheren Händen</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl"
            >
              Professionelle Umzugsdienste mit modernster Logistik, sorgfältiger Handhabung und vollständigem Service. Von Privatumzügen bis zu komplexen Firmenumzügen – wir bringen Ihre Habseligkeiten sicher ans Ziel.
            </motion.p>

            {/* Feature Dots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {[
                { icon: Truck, text: 'Moderne Flotte' },
                { icon: Lock, text: 'Volle Versicherung' },
                { icon: Zap, text: 'Termingenau' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: umzugAccent }} />
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
                  style={{ background: umzugAccent }}
                >
                  <span className="relative z-10">Kostenloses Angebot</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <button
                className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider border-2 transition-all duration-300 flex items-center justify-center gap-2 text-white"
                style={{ borderColor: umzugAccent, color: umzugAccent }}
              >
                Leistungen
              </button>
            </motion.div>
          </motion.div>

          {/* Right Visual - Logistics Flow */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-96 lg:h-[500px] hidden lg:block"
          >
            {/* Main Truck Card */}
            <motion.div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${umzugAccent}20, transparent)` }}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="w-full h-full flex flex-col items-center justify-center space-y-6 p-8">
                <motion.div
                  variants={truckVariants}
                  animate="move"
                  className="flex items-center gap-4"
                >
                  <motion.div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center"
                    style={{ background: `${umzugAccent}30` }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Truck className="w-10 h-10" style={{ color: umzugAccent }} />
                  </motion.div>
                  <div>
                    <p className="text-white font-bold text-lg">Sichere Lieferung</p>
                    <p className="text-white/60 text-sm">Deutschlandweit</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Info Cards */}
            <motion.div
              className="absolute -right-16 top-12 w-72 rounded-2xl p-6 text-white backdrop-blur-lg border border-white/10"
              style={{ background: `${umzugAccent}20` }}
              variants={floatVariants}
              animate="float"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ background: umzugAccent }} />
                  <p className="text-sm font-bold uppercase">Zeitpunkt</p>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Flexible Termine
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Same-Day verfügbar
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    Wochenendservice
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              className="absolute -left-12 -bottom-12 w-64 h-48 rounded-2xl p-6 text-white"
              style={{ background: umzugAccent }}
              animate={{ y: [20, -20, 20] }}
              transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            >
              <div className="space-y-6">
                <p className="text-sm font-bold uppercase tracking-wide">Warum BC Umzug?</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-black">✓</span>
                    <span>10+ Jahre Erfahrung</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-black">✓</span>
                    <span>50+ erfolgreiche Umzüge monatlich</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl font-black">✓</span>
                    <span>Versicherungsschutz inbegriffen</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
