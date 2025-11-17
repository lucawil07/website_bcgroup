'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Container, Section } from '@/components/ui'
import { useFunnelModal } from './EntruempelungFunnelWrapper'
import { Trash2, Clock, Shield, Leaf, Box, Armchair, Lamp, Sofa } from 'lucide-react'

export default function EntruempelungPremiumHero() {
  const primary = '#1a472a'
  const accent = '#10b981'
  const router = useRouter()
  const { openFunnel } = useFunnelModal()

  return (
    <Section padding="none" className="relative overflow-hidden py-32 md:py-40 lg:py-48 bg-gradient-to-b from-emerald-950 via-emerald-900 to-neutral-950">
      {/* Advanced Background Design */}
      <div className="absolute inset-0 -z-10">
        {/* Flowing gradient orbs - Entrümpelung specific */}
        <motion.div
          className="absolute -top-40 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${accent}30, transparent)` }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-0 -right-32 w-80 h-80 rounded-full blur-3xl"
          style={{ background: `radial-gradient(circle, ${accent}20, transparent)` }}
          animate={{ scale: [1.2, 0.9, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
        
        {/* Hexagon pattern - unique to Entrümpelung */}
        <div className="absolute inset-0 opacity-2" style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${accent} 0px, ${accent} 2px, transparent 2px, transparent 70px), repeating-linear-gradient(0deg, ${accent} 0px, ${accent} 2px, transparent 2px, transparent 70px)`,
          backgroundSize: '70px 70px'
        }} />
      </div>

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Interactive Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 lg:pr-8"
          >
            {/* Premium Badge with Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full backdrop-blur-xl border border-emerald-400/30 bg-emerald-950/40 hover:bg-emerald-950/60 transition-all duration-300">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  className="flex items-center justify-center"
                >
                  <Leaf className="w-4 h-4" style={{ color: accent }} />
                </motion.div>
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: accent }}>
                  100% Nachhaltig & Zertifiziert
                </span>
              </div>
            </motion.div>

            {/* Dynamic Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                Entrümpelung
                <br />
                <span className="inline-block relative">
                  <span style={{ color: accent }} className="relative">
                    Leicht gemacht
                    {/* Animated underline */}
                    <motion.span
                      className="absolute -bottom-2 left-0 h-1 rounded-full"
                      style={{ background: accent }}
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.7, duration: 0.8 }}
                    />
                  </span>
                </span>
                <br />in Berlin
              </h1>
            </motion.div>

            {/* Feature Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-emerald-100 leading-relaxed max-w-xl"
            >
              Schnelle, zuverlässige Entrümpelung mit professioneller Entsorgung. Lassen Sie uns Ihre Räume befreien und gleichzeitig Umwelt und Ressourcen schonen.
            </motion.p>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 py-6 border-y border-emerald-400/20"
            >
              {[
                { value: '2K+', label: 'Räume geleert' },
                { value: '48h', label: 'Durchschnittliche Bearbeitung' },
                { value: '800T', label: 'Material recycelt' }
              ].map((metric, idx) => (
                <div key={idx} className="text-center group cursor-default">
                  <motion.div
                    className="text-2xl md:text-3xl font-black group-hover:scale-110 transition-transform"
                    style={{ color: accent }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ delay: idx * 0.15 }}
                  >
                    {metric.value}
                  </motion.div>
                  <p className="text-xs md:text-sm text-emerald-100 mt-1">{metric.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-3 pt-4"
            >
              {[
                { icon: Clock, text: 'Flexible Termine' },
                { icon: Shield, text: 'Versichert' },
                { icon: Leaf, text: 'Umweltfreundlich' }
              ].map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border border-emerald-400/20 bg-emerald-950/30 hover:bg-emerald-950/60 hover:border-emerald-400/40 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Icon className="w-4 h-4" style={{ color: accent }} />
                    <span className="text-xs md:text-sm font-semibold text-white">{item.text}</span>
                  </motion.div>
                )
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.button
                onClick={openFunnel}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden shadow-lg"
                style={{ background: accent }}
                whileHover={{ scale: 1.05, boxShadow: `0 10px 30px ${accent}40` }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Kostenlos anfragen</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>
              <motion.button
                onClick={() => {
                  router.push('/ratgeber/entruempelung')
                  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100)
                }}
                className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider border-2 transition-all duration-300 flex items-center justify-center gap-2"
                style={{ borderColor: accent, color: accent }}
                whileHover={{ backgroundColor: `${accent}15` }}
              >
                Weitere Infos
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Visual Element - Clearing Animation */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="relative h-96 lg:h-[500px] hidden lg:block"
          >
            {/* Main Container Card */}
            <motion.div
              className="absolute inset-0 rounded-3xl overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${accent}15, transparent)` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
              
              {/* Animated clearing visualization */}
              <div className="w-full h-full flex flex-col items-center justify-center p-8 relative" style={{ perspective: '1000px' }}>
                {/* Animated background grid representing a room */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `linear-gradient(90deg, ${accent} 1px, transparent 1px), linear-gradient(${accent} 1px, transparent 1px)`,
                  backgroundSize: '50px 50px'
                }} />
                
                {/* Animated items being cleared - moving from back to front with depth */}
                {[
                  { delay: 0, duration: 6, startX: -100, startY: -80, startZ: -150, icon: Box, label: 'Box' },
                  { delay: 1, duration: 6.5, startX: 80, startY: -100, startZ: -120, icon: Armchair, label: 'Chair' },
                  { delay: 1.8, duration: 7, startX: -70, startY: 60, startZ: -180, icon: Lamp, label: 'Lamp' },
                ].map((item, idx) => {
                  const ItemIcon = item.icon
                  return (
                    <motion.div
                      key={idx}
                      className="absolute w-16 h-16 rounded-lg border-2 flex items-center justify-center"
                      style={{ 
                        borderColor: accent, 
                        background: `${accent}15`,
                        transformStyle: 'preserve-3d'
                      }}
                      animate={{
                        x: [item.startX, 0],
                        y: [item.startY, 0],
                        z: [item.startZ, 0],
                        opacity: [0.3, 1],
                        scale: [0.5, 1],
                      }}
                      transition={{
                        delay: item.delay,
                        duration: item.duration,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    >
                      <ItemIcon className="w-8 h-8" style={{ color: accent }} />
                    </motion.div>
                  )
                })}
                
                {/* Center clearing symbol - trash bin in front (highest z-index) */}
                <motion.div
                  className="relative z-50 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ background: `${accent}30` }}
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 3.5, repeat: Infinity }}
                  >
                    <Trash2 className="w-12 h-12" style={{ color: accent }} />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Info Card - Top Right */}
            <motion.div
              className="absolute -top-8 -right-4 w-64 h-40 rounded-2xl p-6 text-white shadow-2xl"
              style={{ background: accent }}
              animate={{ y: [0, 15, 0], rotateZ: [5, -2, 5] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
            >
              <div className="space-y-3 text-sm">
                <p className="font-bold uppercase tracking-wider">Unser Prozess</p>
                <ul className="space-y-2 text-white/95">
                  <li className="flex items-center gap-2">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-white"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ delay: 0, duration: 2, repeat: Infinity }}
                    />
                    Besichtigung
                  </li>
                  <li className="flex items-center gap-2">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-white"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ delay: 0.2, duration: 2, repeat: Infinity }}
                    />
                    Entsorgung
                  </li>
                  <li className="flex items-center gap-2">
                    <motion.span
                      className="w-2 h-2 rounded-full bg-white"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ delay: 0.4, duration: 2, repeat: Infinity }}
                    />
                    Recycling
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Floating Badge - Bottom Left */}
            <motion.div
              className="absolute -bottom-4 -left-6 rounded-2xl p-6 text-center"
              style={{ background: `linear-gradient(135deg, ${accent}20, ${accent}40)` }}
              animate={{ y: [-20, 20, -20], rotateZ: [-5, 3, -5] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
            >
              <motion.div
                className="font-black text-2xl mb-1"
                style={{ color: accent }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                24/7
              </motion.div>
              <p className="text-xs text-white font-semibold">Verfügbar</p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
