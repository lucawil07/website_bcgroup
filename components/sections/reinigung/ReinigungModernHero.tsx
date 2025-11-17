'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Leaf, Zap, CheckCircle } from 'lucide-react'

export default function ReinigungModernHero() {
  const reinigungAccent = '#06b6d4'
  const reinigungPrimary = '#0f2f51'

  return (
    <Section padding="none" className="relative overflow-hidden py-32 md:py-40 lg:py-48 bg-gradient-to-br from-slate-950 via-cyan-950 to-neutral-900">
      {/* Advanced Background with Motion Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated cyan orbs - reduced movement */}
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 rounded-full opacity-20"
          style={{ background: `radial-gradient(circle, ${reinigungAccent}, transparent)` }}
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 right-0 w-96 h-96 rounded-full opacity-15"
          style={{ background: `radial-gradient(circle, ${reinigungAccent}, transparent)` }}
          animate={{ 
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 0.5 }}
        />

        {/* Subtle grid with cyan tint */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, ${reinigungAccent} 1px, transparent 1px), linear-gradient(${reinigungAccent} 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 backdrop-blur-md"
            >
              <Zap className="w-4 h-4" style={{ color: reinigungAccent }} />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest" style={{ color: reinigungAccent }}>
                Professionelle Teams – saubere Ergebnisse
              </span>
            </motion.div>

            {/* Main Headline - Split for dramatic effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-3"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                Strahlende
              </h1>
              <div className="flex flex-col gap-2">
                <span className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span style={{ color: reinigungAccent }}>Sauberkeit</span>
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white/80">
                  für Berlin
                </span>
              </div>
            </motion.div>

            {/* Description with icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4 max-w-xl"
            >
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Professionelle Gebäudereinigung mit modernsten Verfahren und umweltfreundlichen Produkten. 
              </p>
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                Von Büroreinigung bis Grundreinigung – wir machen Ihre Flächen makellos.
              </p>
            </motion.div>

            {/* Three Key Features - Horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {[
                { icon: Leaf, label: 'Ökologisch' },
                { icon: Zap, label: 'Effizient' },
                { icon: CheckCircle, label: 'Gründlich' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-b from-cyan-500/10 to-transparent border border-cyan-400/20"
                  whileHover={{ scale: 1.05, borderColor: reinigungAccent }}
                >
                  <item.icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: reinigungAccent }} />
                  <span className="text-xs md:text-sm font-bold text-white text-center">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a 
                href="/kontakt" 
                className="group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-xl"
                  style={{ background: `linear-gradient(135deg, ${reinigungAccent}, ${reinigungPrimary})` }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Anfrage stellen
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full"
                    transition={{ duration: 0.6 }}
                  />
                </button>
              </motion.a>
              <motion.a
                href="/ratgeber/reinigung-berlin"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-wider border-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-cyan-500/10"
                  style={{ borderColor: reinigungAccent, color: reinigungAccent }}
                >
                  Weitere Infos
                </button>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Visual - Modern Cards Layout */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="relative h-96 lg:h-[500px] hidden lg:block"
          >
            {/* Main Central Card */}
            <motion.div
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${reinigungAccent}10, ${reinigungPrimary}20)`,
                border: `2px solid ${reinigungAccent}30`
              }}
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="w-full h-full flex flex-col items-center justify-center gap-6 p-8">
                <motion.div
                  className="w-32 h-32 rounded-3xl flex items-center justify-center"
                  style={{ background: `${reinigungAccent}20` }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Leaf className="w-16 h-16" style={{ color: reinigungAccent }} />
                </motion.div>
                <p className="text-white font-bold text-2xl text-center">Makellose Sauberkeit</p>
              </div>
            </motion.div>

            {/* Top-right floating card */}
            <motion.div
              className="absolute -top-10 -right-10 w-56 h-56 rounded-2xl p-6 text-white font-semibold backdrop-blur-md"
              style={{ background: `linear-gradient(135deg, ${reinigungAccent}, #0284c7)` }}
              animate={{ y: [0, -40, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.3 }}
            >
              <div className="space-y-3 h-full flex flex-col justify-between">
                <p className="text-xs font-black uppercase tracking-wider opacity-90">Leistungen</p>
                <ul className="space-y-2 text-sm flex-grow">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Büroreinigung
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Gebäudereinigung
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    Grundreinigung
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Bottom-left accent card */}
            <motion.div
              className="absolute -bottom-8 -left-8 w-56 h-56 rounded-2xl p-6 text-white backdrop-blur-md border"
              style={{ background: `${reinigungPrimary}80`, borderColor: `${reinigungAccent}60` }}
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 7, repeat: Infinity, delay: 0.6 }}
            >
              <div className="space-y-4 h-full flex flex-col justify-between">
                <div>
                  <p className="text-4xl font-black" style={{ color: reinigungAccent }}>100%</p>
                  <p className="text-base font-bold mt-2 text-white">Kunden<br />zufriedenheit</p>
                </div>
                <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">Bewertung: 5.0★</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
