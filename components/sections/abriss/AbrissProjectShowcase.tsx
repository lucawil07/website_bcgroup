'use client'

import { motion } from 'framer-motion'
import { Container, Section } from '@/components/ui'
import { Star, MapPin, Calendar } from 'lucide-react'

export default function AbrissProjectShowcase() {
  const abrissaccent = '#d97706'

  const projects = [
    {
      id: 1,
      title: 'Kurfürstendamm Bürogebäude',
      location: 'Charlottenburg, Berlin',
      year: '2024',
      size: '8-stöckig',
      challenge: 'Innerstädtischer Abriss mit minimalen Vibrationen',
      image: 'bg-gradient-to-br from-amber-600 to-orange-700',
      featured: true
    },
    {
      id: 2,
      title: 'Industrieanlage Wedding',
      location: 'Wedding, Berlin',
      year: '2024',
      size: '5000 m²',
      challenge: 'Schadstoffsanierung vor Abriss',
      image: 'bg-gradient-to-br from-amber-700 to-yellow-600',
      featured: false
    },
    {
      id: 3,
      title: 'Altes Wohnhaus Kreuzberg',
      location: 'Kreuzberg, Berlin',
      year: '2023',
      size: '4-stöckig',
      challenge: 'Denkmalschutz-konforme Demontage',
      image: 'bg-gradient-to-br from-orange-600 to-amber-600',
      featured: false
    },
    {
      id: 4,
      title: 'Gewerbegebäude Adlershof',
      location: 'Köpenick, Berlin',
      year: '2023',
      size: '6000 m²',
      challenge: 'Schnelle Abwicklung, großflächiger Abriss',
      image: 'bg-gradient-to-br from-yellow-600 to-amber-500',
      featured: false
    }
  ]

  return (
    <Section padding="large" className="relative bg-gradient-to-b from-white to-amber-50">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -bottom-96 -right-96 w-96 h-96 rounded-full"
          style={{ background: `radial-gradient(circle, ${abrissaccent}15, transparent)` }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
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
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
            Referenzprojekte
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Einblick in unsere erfolgreich abgeschlossenen Großprojekte in Berlin
          </p>
        </motion.div>

        {/* Featured Project - Large */}
        {projects.filter(p => p.featured).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 rounded-3xl overflow-hidden group cursor-pointer"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white border-2 border-neutral-200 hover:border-amber-300 transition-all duration-300 rounded-3xl overflow-hidden">
              {/* Image Side */}
              <div className={`relative h-96 lg:h-full min-h-96 ${project.image} overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 w-fit">
                  <div className="w-3 h-3 rounded-full" style={{ background: abrissaccent }} />
                  <span className="text-sm font-bold uppercase" style={{ color: abrissaccent }}>
                    Referenzprojekt
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-black text-neutral-900">
                  {project.title}
                </h3>

                {/* Info Grid */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs uppercase font-bold text-neutral-500 mb-1">Ort</p>
                    <p className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                      <MapPin className="w-4 h-4" style={{ color: abrissaccent }} />
                      {project.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-neutral-500 mb-1">Jahr</p>
                    <p className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
                      <Calendar className="w-4 h-4" style={{ color: abrissaccent }} />
                      {project.year}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase font-bold text-neutral-500 mb-1">Größe</p>
                    <p className="text-sm font-semibold text-neutral-900">{project.size}</p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="p-4 rounded-xl border-l-4" style={{ borderColor: abrissaccent, background: `${abrissaccent}05` }}>
                  <p className="text-xs uppercase font-bold text-neutral-500 mb-2">Herausforderung</p>
                  <p className="text-neutral-700">{project.challenge}</p>
                </div>

                {/* Arrow */}
                <motion.div
                  className="flex items-center gap-2 font-semibold pt-4"
                  style={{ color: abrissaccent }}
                >
                  <span>Fallstudie ansehen</span>
                  <motion.span animate={{ x: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    →
                  </motion.span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Other Projects - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group rounded-2xl overflow-hidden border border-neutral-200 hover:border-amber-300 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className={`relative h-56 ${project.image} overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-black/20"
                  animate={{ opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <motion.div
                    className="text-white text-sm font-semibold flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                  >
                    Projekt ansehen →
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                {/* Title */}
                <h4 className="font-bold text-neutral-900 group-hover:text-amber-900 transition-colors line-clamp-2">
                  {project.title}
                </h4>

                {/* Meta info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-neutral-600">
                    <MapPin className="w-4 h-4" style={{ color: abrissaccent }} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-600">
                    <Calendar className="w-4 h-4" style={{ color: abrissaccent }} />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Challenge preview */}
                <p className="text-xs text-neutral-600 line-clamp-2 border-t border-neutral-200 pt-3">
                  {project.challenge}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 mb-6">Weitere Projekte in unserem Portfolio</p>
          <a href="/kontakt" className="inline-block">
            <button
              className="px-8 py-4 rounded-xl font-bold uppercase tracking-wider text-white transition-all duration-300"
              style={{ background: abrissaccent }}
            >
              Projektdetails anfragen
            </button>
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}
