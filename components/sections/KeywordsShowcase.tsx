'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { serviceColors, type ServiceType } from '@/lib/service-colors'

interface KeywordsShowcaseProps {
  service: ServiceType
  keywords: string[]
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
}

export default function KeywordsShowcase({
  service,
  keywords,
}: KeywordsShowcaseProps) {
  const colors = serviceColors[service]

  return (
    <Section padding="large" background="light" className="bg-gradient-to-b from-white to-neutral-50">
      <Container size="wide">
        <div className="space-y-12">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
              Alle Leistungen & Keywords
            </h2>
            <p className="text-lg text-neutral-600">
              Wir bieten professionelle Services in folgenden Bereichen und Suchbegriffen
            </p>
          </motion.div>

          {/* Keywords Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {keywords.map((keyword, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl"
              >
                <div
                  className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20"
                  style={{ background: colors.gradient }}
                />
                <div className="relative px-4 py-3 md:px-6 md:py-4 backdrop-blur-sm border border-neutral-200 rounded-2xl hover:border-neutral-300 transition-all hover:shadow-lg">
                  <p className="text-sm md:text-base font-semibold text-neutral-800 flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: colors.accent }}
                    />
                    {keyword}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Total Keywords Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-sm text-neutral-500 uppercase tracking-wider font-semibold">
              {keywords.length} Keywords für optimale Sichtbarkeit
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
