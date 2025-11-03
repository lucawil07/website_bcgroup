'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { MapPin, Globe, Target, ArrowRight } from 'lucide-react'

export default function UmzugServiceAreas() {
  const umzugAccent = '#f97316'

  const berlinDistricts = [
    'Charlottenburg-Wilmersdorf',
    'Friedrichshain-Kreuzberg',
    'Hellersdorf',
    'Köpenick',
    'Lichtenberg',
    'Marzahn-Hellersdorf',
    'Mitte',
    'Neukölln',
    'Pankow',
    'Prenzlauer Berg',
    'Reinickendorf',
    'Spandau',
    'Steglitz-Zehlendorf',
    'Tempelhof-Schöneberg',
    'Tiergarten',
    'Treptow-Köpenick',
  ]

  const coverageTypes = [
    {
      icon: MapPin,
      title: 'Berlin & Umgebung',
      description: 'Alle Berliner Bezirke und Umlandgemeinden im Raum Berlin-Brandenburg',
      color: 'from-orange-500 to-orange-400',
    },
    {
      icon: Target,
      title: 'Deutschlandweit',
      description: 'Bundesweite Umzugsservices mit Partnernetzwerk in allen Bundesländern',
      color: 'from-amber-500 to-orange-400',
    },
    {
      icon: Globe,
      title: 'International',
      description: 'Europäische Umzüge auf Anfrage mit erfahrenen Partnern im Ausland',
      color: 'from-orange-400 to-yellow-400',
    },
  ]

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
      transition: { duration: 0.4 },
    },
  }

  return (
    <Section padding="none" background="light" className="bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden py-20 md:py-32 lg:py-40">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: `radial-gradient(circle, ${umzugAccent}60, transparent)` }}
        />
      </div>

      <Container size="wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-6">
            Unser
            <br />
            <span style={{ color: umzugAccent }}>Servicegebiet</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600">
            Berlin, Brandenburg und deutschlandweit – wir bringen Sie überall hin
          </p>
        </motion.div>

        {/* Coverage Types Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {coverageTypes.map((type, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl overflow-hidden backdrop-blur-xl border border-neutral-200 bg-gradient-to-br from-white to-neutral-50 p-8 hover:border-neutral-300 transition-all duration-500"
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${umzugAccent}40, transparent)` }}
              />

              {/* Icon */}
              <motion.div
                className="mb-6 inline-flex p-4 rounded-xl"
                style={{ background: `${umzugAccent}15` }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <type.icon className="w-8 h-8" style={{ color: umzugAccent }} />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-black text-neutral-900 mb-3">{type.title}</h3>
              <p className="text-neutral-700 leading-relaxed mb-6">{type.description}</p>

              {/* Action Link */}
              <motion.a
                href="/kontakt"
                className="inline-flex items-center gap-2 font-bold text-sm uppercase tracking-wider group/link"
                whileHover={{ x: 5 }}
              >
                <span style={{ color: umzugAccent }}>Mehr Info</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" style={{ color: umzugAccent }} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Berlin Districts Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="mb-10">
            <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
              Alle Berliner Bezirke
            </h3>
            <p className="text-lg text-neutral-600">
              Egal wo Sie in Berlin sind – wir sind vor Ort und kennen die besten Zufahrtswege und Parkoptionen
            </p>
          </div>

          {/* Districts Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {berlinDistricts.map((district, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 5 }}
                className="group rounded-lg border border-neutral-200 bg-white p-4 hover:border-neutral-300 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: umzugAccent }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: idx * 0.1 }}
                  />
                  <span className="font-semibold text-neutral-900 group-hover:translate-x-1 transition-transform">
                    {district}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Additional Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${umzugAccent}15, ${umzugAccent}5)` }}
        >
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, ${umzugAccent}60, transparent 50%)`
          }} />

          <div className="relative p-12 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
              Noch Fragen?
            </h3>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              Ihr Ziel liegt außerhalb unseres normalen Servicegebiets? Kontaktieren Sie uns – wir finden oft eine Lösung!
            </p>
            <motion.a
              href="/kontakt"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all"
              style={{ background: umzugAccent }}
            >
              Anfrage senden
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 h-96"
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center space-y-4">
              <motion.div
                className="inline-flex p-6 rounded-full"
                style={{ background: `${umzugAccent}20` }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <MapPin className="w-12 h-12" style={{ color: umzugAccent }} />
              </motion.div>
              <div>
                <p className="text-neutral-600 font-semibold">Servicegebiet auf Google Maps</p>
                <p className="text-neutral-500 text-sm">Klicken Sie hier um unser Servicegebiet zu erkunden</p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  )
}
