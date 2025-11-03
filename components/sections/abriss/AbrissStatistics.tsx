'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { TrendingUp, Award, Users, Zap } from 'lucide-react'

export default function AbrissStatistics() {
  const abrissaccent = '#d97706'
  
  const stats = [
    {
      number: '500+',
      label: 'Erfolgreiche Projekte',
      icon: TrendingUp,
      detail: 'Seit 2010 durchgeführt'
    },
    {
      number: '100%',
      label: 'Zufriedenheitsrate',
      icon: Award,
      detail: 'Bestätigt durch Kundenbewertungen'
    },
    {
      number: '95%',
      label: 'Recyclingquote',
      icon: Zap,
      detail: 'Umweltgerechte Verwertung'
    },
    {
      number: '24/7',
      label: 'Erreichbar',
      icon: Users,
      detail: 'Schnelle Problemlösung'
    }
  ]

  return (
    <Section padding="large" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 to-black" />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${abrissaccent}30, transparent)` }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <Container size="wide">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Card */}
                <div
                  className="relative p-8 rounded-2xl backdrop-blur-md border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden"
                  style={{ background: 'rgba(255, 255, 255, 0.03)' }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                    style={{ background: `radial-gradient(circle, ${abrissaccent}20, transparent)` }}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: `${abrissaccent}20` }}
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <Icon className="w-6 h-6" style={{ color: abrissaccent }} />
                    </motion.div>

                    {/* Number */}
                    <motion.div
                      className="text-4xl font-black text-white"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.div>

                    {/* Label */}
                    <h3 className="text-lg font-bold text-white">{stat.label}</h3>

                    {/* Detail */}
                    <p className="text-sm text-white/60">{stat.detail}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
