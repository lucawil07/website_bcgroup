'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Clock, AlertTriangle, Phone, Calendar, Zap, Shield, Smartphone, CheckCircle2, AlertCircle } from 'lucide-react'

export default function HausmeisterContinuousSupport() {
  const hausmeisterAccent = '#8b5cf6'

  const timeSlots = [
    { time: 'Mo-Fr', service: 'Standard Service', icon: Calendar, color: 'from-blue-600 to-blue-400' },
    { time: 'Sa-So', service: 'Weekend Service', icon: Phone, color: 'from-purple-600 to-purple-400' },
    { time: '24/7', service: 'Notfallservice', icon: AlertTriangle, color: 'from-red-600 to-red-400' },
  ]

  const supportFeatures = [
    {
      title: 'Schnelle Reaktion',
      description: 'Notfallreparaturen innerhalb von 1 Stunde verfügbar',
      Icon: Zap,
      stat: '60 Min'
    },
    {
      title: 'Proaktive Wartung',
      description: 'Regelmäßige Inspektionen zur Vermeidung von Problemen',
      Icon: Shield,
      stat: 'Monatlich'
    },
    {
      title: 'Digitale Verwaltung',
      description: 'Online-Portal zur Anforderung und Verfolgung von Services',
      Icon: Smartphone,
      stat: 'Echtzeit'
    },
    {
      title: 'Notfallannahme',
      description: 'Telefonische und digitale Erreichbarkeit rund um die Uhr',
      Icon: Phone,
      stat: '24/7'
    }
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${hausmeisterAccent}15, transparent)` }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <Container size="wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Rund um die Uhr
            <br />
            <span style={{ color: hausmeisterAccent }}>für Sie verfügbar</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Egal wann ein Problem auftritt – unsere Teams sind bereit, schnell zu handeln
          </p>
        </motion.div>

        {/* Time-based Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {timeSlots.map((slot, index) => {
            const Icon = slot.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`relative h-full rounded-3xl overflow-hidden p-8 text-white border-2 border-neutral-200 hover:border-purple-300 transition-all duration-300 backdrop-blur-sm bg-white/50 hover:bg-white/70 ${index === 2 ? `bg-gradient-to-br ${slot.color}` : ''}`}>
                  {index === 2 && (
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`,
                    }} />
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${index === 2 ? 'bg-white/20' : ''}`}
                        style={index !== 2 ? { background: `${hausmeisterAccent}15` } : {}}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                      >
                        <Icon className={`w-7 h-7 ${index === 2 ? 'text-white' : ''}`} style={index !== 2 ? { color: hausmeisterAccent } : {}} />
                      </motion.div>
                      <motion.span
                        className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wider ${index === 2 ? 'text-white' : ''}`}
                        style={index !== 2 ? { color: hausmeisterAccent } : {}}
                      >
                        {index === 2 ? <AlertCircle className="w-5 h-5" /> : <CheckCircle2 className="w-5 h-5" />}
                      </motion.span>
                    </div>

                    <p className={`text-2xl font-black mb-2 ${index === 2 ? 'text-white' : 'text-neutral-900'}`}>
                      {slot.time}
                    </p>
                    <p className={`font-semibold ${index === 2 ? 'text-white/95' : 'text-neutral-700'}`}>
                      {slot.service}
                    </p>

                    {index === 2 && (
                      <motion.div
                        className="mt-4 text-xs font-bold text-white/80 flex items-center gap-2"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className="w-2 h-2 rounded-full bg-white" />
                        Aktiver Status
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Support Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {supportFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative h-full rounded-2xl border-2 border-neutral-200 hover:border-purple-300 transition-all duration-300 p-6 bg-white/50 hover:bg-white/80 overflow-hidden">
                {/* Top accent */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 origin-left"
                  style={{ background: hausmeisterAccent }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4 w-fit">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: `${hausmeisterAccent}15` }}>
                      <feature.Icon className="w-6 h-6" style={{ color: hausmeisterAccent }} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
                    {feature.description}
                  </p>

                  <div className="pt-4 border-t border-neutral-200 group-hover:border-purple-200 transition-colors">
                    <p className="text-sm font-bold" style={{ color: hausmeisterAccent }}>
                      {feature.stat}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-12 lg:p-16 border-2"
          style={{ borderColor: hausmeisterAccent, background: `${hausmeisterAccent}08` }}
        >
          {/* Grid background */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(90deg, ${hausmeisterAccent} 1px, transparent 1px), linear-gradient(${hausmeisterAccent} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <motion.div
                className="text-5xl font-black mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span style={{ color: hausmeisterAccent }}>98%</span>
              </motion.div>
              <p className="text-neutral-700 font-semibold">
                Erste-Kontakt-Lösung
              </p>
              <p className="text-sm text-neutral-600 mt-2">
                Probleme werden sofort am Telefon gelöst
              </p>
            </div>

            <div className="h-px md:h-auto md:w-px" style={{ background: `${hausmeisterAccent}30` }} />

            <div>
              <motion.div
                className="text-5xl font-black mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
              >
                <span style={{ color: hausmeisterAccent }}>24/7</span>
              </motion.div>
              <p className="text-neutral-700 font-semibold">
                Notfallannahme
              </p>
              <p className="text-sm text-neutral-600 mt-2">
                Wir sind immer erreichbar, auch an Wochenenden
              </p>
            </div>

            <div className="h-px md:h-auto md:w-px" style={{ background: `${hausmeisterAccent}30` }} />

            <div>
              <motion.div
                className="text-5xl font-black mb-4"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
              >
                <span style={{ color: hausmeisterAccent }}>1h</span>
              </motion.div>
              <p className="text-neutral-700 font-semibold">
                Response-Zeit
              </p>
              <p className="text-sm text-neutral-600 mt-2">
                Vor Ort bei Notfällen in der Regel innerhalb einer Stunde
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
