'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { serviceColors, type ServiceType } from '@/lib/service-colors'
import { cn } from '@/lib/utils'

interface ServiceHeroProps {
  service: ServiceType
  title: string
  description: string
  keywords: string[]
}

export default function ServiceHero({
  service,
  title,
  description,
  keywords,
}: ServiceHeroProps) {
  const colors = serviceColors[service]

  return (
    <Section padding="large" className="relative overflow-hidden pt-32">
      <div
        className="absolute inset-0 -z-10 opacity-30"
        style={{ background: colors.gradient }}
      />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
          className="space-y-6 max-w-2xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-block"
          >
            <span
              className="px-4 py-2 md:px-6 md:py-3 rounded-full text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] backdrop-blur-sm"
              style={{ backgroundColor: `${colors.accent}20`, color: colors.accent }}
            >
              Unsere Leistung
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight"
          >
            {title}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed max-w-xl"
          >
            {description}
          </motion.p>

          {/* Keywords Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap gap-3 pt-4"
          >
            {keywords.slice(0, 5).map((keyword, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm font-semibold text-white/80 border border-white/20 backdrop-blur-sm hover:border-white/40 transition-colors"
              >
                {keyword}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
