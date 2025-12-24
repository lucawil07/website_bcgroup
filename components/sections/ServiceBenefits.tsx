'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { serviceColors, type ServiceType } from '@/lib/service-colors'
import { CheckCircle2 } from 'lucide-react'

interface ServiceBenefitsProps {
  service: ServiceType
  benefits: Array<{
    title: string
    description: string
    icon?: React.ReactNode
  }>
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function ServiceBenefits({
  service,
  benefits,
}: ServiceBenefitsProps) {
  const colors = serviceColors[service]

  return (
    <Section padding="large" background="dark" className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ background: colors.gradient }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-900 to-black" />

      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Warum unseren Service wählen?
              </h2>
              <p className="text-lg text-white/70">
                Wir bieten professionelle Lösungen mit Fokus auf Qualität, Zuverlässigkeit und Kundenzufriedenheit.
              </p>
            </div>

            {/* Benefits List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={itemVariants} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {benefit.icon ? (
                      <div className="w-6 h-6" style={{ color: colors.accent }}>
                        {benefit.icon}
                      </div>
                    ) : (
                      <CheckCircle2
                        className="w-6 h-6"
                        style={{ color: colors.accent }}
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-white/60">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-3xl overflow-hidden"
          >
            <div
              className="absolute inset-0"
              style={{ background: colors.gradient }}
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
            <div className="relative h-full flex items-center justify-center">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="text-center"
              >
                <div
                  className="w-32 h-32 rounded-3xl mx-auto mb-6 flex items-center justify-center"
                  style={{ background: `${colors.accent}20` }}
                >
                  <div
                    className="text-6xl font-black"
                    style={{ color: colors.accent }}
                  >
                    ✓
                  </div>
                </div>
                <p className="text-xl font-bold text-white">
                  Professionelle Qualität garantiert
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
