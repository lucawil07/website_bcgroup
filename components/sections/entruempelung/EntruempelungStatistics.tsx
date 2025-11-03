'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'

export default function EntruempelungStatistics() {
  const accent = '#10b981'

  const stats = [
    {
      number: '10K+',
      label: 'Zufriedene Kunden',
      icon: '👥'
    },
    {
      number: '500T',
      label: 'Tonnen Material recycelt',
      icon: '♻️'
    },
    {
      number: '48h',
      label: 'Durchschn. Bearbeitungszeit',
      icon: '⚡'
    },
    {
      number: '100%',
      label: 'Kundenzufriedenheit',
      icon: '⭐'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-white to-emerald-50">
      <Container size="wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Card */}
              <div
                className="p-8 rounded-3xl text-center backdrop-blur-sm border-2 border-emerald-200 group-hover:border-emerald-400 transition-all duration-300 relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${accent}08, transparent)` }}
              >
                {/* Background accent */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity rounded-3xl"
                  style={{ background: accent }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="text-5xl mb-4"
                    animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Counter animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl md:text-5xl font-black mb-2" style={{ color: accent }}>
                      {stat.number}
                    </div>
                    <p className="text-neutral-600 font-semibold">{stat.label}</p>
                  </motion.div>
                </div>

                {/* Top accent bar */}
                <motion.div
                  className="absolute top-0 left-0 h-1 rounded-t-3xl"
                  style={{ background: accent }}
                  initial={{ width: '0%' }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
