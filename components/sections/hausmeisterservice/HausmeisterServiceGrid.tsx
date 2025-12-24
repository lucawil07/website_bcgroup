'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Wrench, Zap, AlertCircle, Droplet, Hammer, Lightbulb, Leaf, ThermometerSun } from 'lucide-react'

export default function HausmeisterServiceGrid() {
  const hausmeisterAccent = '#8b5cf6'

  const services = [
    {
      icon: Wrench,
      title: 'Allgemeine Hausmeistertätigkeiten',
      description: 'Unsere Hausmeister übernehmen die tägliche Betreuung Ihrer Immobilie – technisch versiert, aufmerksam und zuverlässig.',
      features: ['Regelmäßige Objektkontrollen innen und außen', 'Kleinreparaturen an Türen, Fenstern, Beleuchtung', 'Wartung technischer Anlagen', 'Schließdienste & Kontrollgänge', 'Ansprechpartner für Mieter und Eigentümer', 'Koordination von Handwerkern'],
      gradient: 'from-purple-600 to-purple-400',
      link: '/services/hausmeisterservice/allgemeine-taetigkeiten'
    },
    {
      icon: Droplet,
      title: 'Reinigung & Pflege',
      description: 'Ein sauberes Objekt ist die Basis für zufriedene Bewohner und Kunden. Unser Reinigungsservice sorgt für dauerhaft gepflegte Bereiche.',
      features: ['Treppenhausreinigung inkl. Beleuchtungskontrolle', 'Keller- und Flurreinigung', 'Fenster- und Glasreinigung', 'Tiefgaragenreinigung', 'Mülltonnenservice – Bereitstellen, Reinigen', 'Fassaden- und Außenreinigung'],
      link: '/services/hausmeisterservice/reinigung-pflege'
    },
    {
      icon: Leaf,
      title: 'Außen- & Gartenpflege',
      description: 'Ein gepflegter Außenbereich ist die Visitenkarte jeder Immobilie. Wir kümmern uns professionell um Grünflächen und Außenanlagen.',
      features: ['Rasen mähen, Hecken schneiden, Unkraut entfernen', 'Bepflanzung, Bewässerung, Laubbeseitigung', 'Pflege von Grünflächen und Spielplätzen', 'Reinigung von Wegen, Terrassen, Parkflächen', 'Beachtung aller Naturschutzbestimmungen', 'Schnittzeiten nach § 39 BNatSchG'],
      link: '/services/hausmeisterservice/gartenpflege'
    },
    {
      icon: ThermometerSun,
      title: 'Winterdienst',
      description: 'BC Hausmeisterservice übernimmt Ihren kompletten Winterdienst in Berlin – pünktlich, gründlich und rechtssicher.',
      features: ['Schneeräumung und Streudienst', 'Kontrollfahrten bei Schneefall oder Frost', '24/7 Rufbereitschaft in der Wintersaison', 'Dokumentation aller Einsätze', 'Erfüllung der Verkehrssicherungspflicht'],
      link: '/services/hausmeisterservice/winterdienst'
    },
    {
      icon: Lightbulb,
      title: 'Objektmanagement & Betreuung',
      description: 'Wir übernehmen nicht nur die Pflege, sondern auch die Verwaltung und technische Betreuung Ihrer Immobilie.',
      features: ['Übergabe und Abnahme von Wohnungen', 'Protokollierung und Meldung von Mängeln', 'Postannahme und Schlüsselausgabe', 'Ansprechpartner für Hausverwaltungen', '24/7 Notdienst und Rufbereitschaft'],
      link: '/services/hausmeisterservice/objektmanagement'
    },
    {
      icon: Hammer,
      title: 'Sonstige Zusatzleistungen',
      description: 'Flexible Zusatzservices – individuell auf Ihre Anforderungen abgestimmt und fachgerecht umgesetzt.',
      features: ['Entrümpelungen & Sperrmüllservice', 'Kleintransporte innerhalb des Objekts', 'Montagearbeiten (Schilder, Möbel, Ausstattung)'],
      link: '/services/hausmeisterservice/zusatzleistungen'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <Section id="hausmeisterservice-leistungen" padding="large" className="relative bg-gradient-to-b from-white via-slate-50 to-white">
      <Container size="wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: hausmeisterAccent }}
          >
            Unsere Leistungen im Überblick
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Komplette Hausmeisterdienste
            <br />
            <span style={{ color: hausmeisterAccent }}>individuell kombinierbar</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Wir bieten komplette Hausmeisterdienste in Berlin – individuell kombinierbar, effizient und rechtssicher ausgeführt
          </p>
        </motion.div>

        {/* Service Grid with Unique Card Design */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            const isTop = index < 4
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
                className="group relative h-full"
              >
                {/* Card Container */}
                <div
                  className="relative h-full rounded-2xl overflow-hidden backdrop-blur-sm border-2 border-neutral-200 hover:border-purple-200 transition-all duration-500 p-6 flex flex-col bg-white/50 hover:bg-white/80"
                >
                  {/* Top accent bar - expands on hover */}
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-1 origin-left"
                    style={{ background: hausmeisterAccent }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon with rotating background */}
                  <motion.div
                    className="mb-5 w-fit"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center" style={{ background: `${hausmeisterAccent}15` }}>
                      <motion.div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: `${hausmeisterAccent}25` }}
                      />
                      <Icon className="w-8 h-8 relative z-10" style={{ color: hausmeisterAccent }} />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-purple-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  {/* Feature Pills */}
                  <div className="space-y-2 pt-4 border-t border-neutral-200 group-hover:border-purple-200 transition-colors">
                    {service.features.map((feature, fidx) => (
                      <motion.div
                        key={fidx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + fidx * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-xs font-semibold text-neutral-700 group-hover:text-neutral-900"
                      >
                        <span className="w-2 h-2 rounded-full" style={{ background: hausmeisterAccent }} />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated Arrow */}
                  <motion.a
                    href={service.link}
                    className="mt-6 flex items-center gap-2 font-semibold transition-all group-hover:translate-x-2"
                    style={{ color: hausmeisterAccent }}
                  >
                    <span className="text-sm">Details ansehen</span>
                    <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      →
                    </motion.span>
                  </motion.a>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10"
                  style={{ background: hausmeisterAccent }}
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-neutral-600 mb-6">
            Alle Services sind flexibel buchbar – täglich, wöchentlich oder nach Bedarf
          </p>
          <a href="/kontakt" className="inline-block">
            <button
              className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105"
              style={{ background: hausmeisterAccent }}
            >
              Beratung vereinbaren
            </button>
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
