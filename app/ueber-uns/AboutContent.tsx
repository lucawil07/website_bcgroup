'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  CheckCircle2,
  Shield,
  Star,
  Clock,
  ArrowRight,
  Phone,
  MapPin,
  Award,
  Zap,
  Users,
  Target,
  Briefcase
} from 'lucide-react'
import { Section, Container, Button, ScrollReveal } from '@/components/ui'

// Counter animation
function AnimatedCounter({ 
  end, 
  suffix = '', 
  isVisible 
}: { 
  end: number
  suffix?: string
  isVisible: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let startTime: number | null = null
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / 1500
      if (progress < 1) {
        setCount(Math.floor(progress * end))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(animate)
  }, [isVisible, end])

  return <span>{count}{suffix}</span>
}

export default function AboutContent() {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true)
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Award, value: '10+', label: 'Jahre', desc: 'Erfahrung' },
    { icon: Users, value: '12+', label: 'Mitarbeiter', desc: 'Spezialisiert' },
    { icon: Zap, value: '8', label: 'Services', desc: 'Portfolio' },
  ]

  const values = [
    { icon: CheckCircle2, title: 'Qualität', desc: 'Höchste Standards bei jedem Auftrag.' },
    { icon: Shield, title: 'Zuverlässigkeit', desc: 'Pünktlich und immer erreichbar.' },
    { icon: Star, title: 'Transparenz', desc: 'Faire Preise, keine versteckten Kosten.' },
    { icon: Clock, title: 'Flexibilität', desc: 'Maßgeschneiderte Lösungen für Sie.' },
  ]

  const timeline = [
    { year: '2014', title: 'Gründung', desc: 'BC Group gegründet als lokales Dienstleistungsunternehmen in Berlin.' },
    { year: '2017', title: 'Expansion', desc: 'Portfolio auf 6 spezialisierte Dienstleistungen erweitert.' },
    { year: '2020', title: 'Digitalisierung', desc: 'Online-Buchungssystem und modernisierte Prozesse implementiert.' },
    { year: '2025', title: 'Heute', desc: 'Zuverlässiger Partner für Berlin mit wachsendem Kundenstamm.' },
  ]

  return (
    <>
      {/* ===== COMPACT HERO ===== */}
      <Section background="dark" padding="large">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide mb-4">
                ✓ Seit 2014 in Berlin
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-black text-white uppercase leading-tight">
              Ihr Servicepartner für <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Berlin</span>
            </h1>

            <p className="text-xl text-white/85 max-w-3xl mx-auto leading-relaxed">
              Mit 10+ Jahren Erfahrung bieten wir professionelle, zuverlässige Dienstleistungen – maßgeschneidert auf Ihre Anforderungen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="#about">
                <Button
                  variant="ghost"
                  size="lg"
                  className="group border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-bold"
                >
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="!bg-white !text-primary hover:!bg-secondary font-bold"
                >
                  Kontaktieren
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* ===== COMPANY STORY (Compact) ===== */}
      <Section background="white" padding="large" id="about">
        <Container size="wide">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                  alt="BC Group Team"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30" />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="right" className="space-y-6">
              <div className="space-y-3">
                <span className="text-secondary font-bold text-sm uppercase tracking-widest">Über BC Group</span>
                <h2 className="text-4xl font-black text-primary uppercase">
                  Professionelle Services aus Leidenschaft
                </h2>
              </div>

              <p className="text-lg text-neutral-700 leading-relaxed">
                BC Group wurde 2014 gegründet mit einer einfachen Mission: Berlin mit zuverlässigen, 
                professionellen Dienstleistungen versorgen. Was klein anfing, ist heute ein etabliertes Team, 
                das Tausende von Kunden vertraut.
              </p>

              {/* Key points */}
              <div className="space-y-3">
                {[
                  'Maßgeschneiderte Lösungen für jede Situation',
                  'Vollständig versichert und zertifiziert',
                  'Flexible Termine und schnelle Reaktionszeiten',
                ].map((point, i) => (
                  <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                    <div className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700 font-medium">{point}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <Link href="/kontakt">
                <Button variant="primary" size="lg" className="group">
                  Anfrage stellen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* ===== COMPACT STATS ===== */}
      <Section background="light" padding="large">
        <Container>
          <motion.div
            ref={statsRef}
            className="grid md:grid-cols-3 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center space-y-2"
              >
                <motion.div
                  className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <div className="text-4xl font-black text-primary">
                    <AnimatedCounter end={parseInt(stat.value)} isVisible={statsVisible} suffix={stat.label.includes('+') ? '+' : ''} />
                  </div>
                  <div className="text-sm text-neutral-600 font-semibold">{stat.label}</div>
                  <div className="text-xs text-neutral-500">{stat.desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* ===== VALUES GRID (Compact) ===== */}
      <Section background="white" padding="large">
        <Container>
          <ScrollReveal direction="up">
            <div className="text-center mb-12 space-y-2">
              <h2 className="text-4xl font-black text-primary uppercase">Unsere Werte</h2>
              <p className="text-neutral-600">Das Fundament unserer Arbeit</p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {values.map((val, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-xl border border-neutral-100 hover:shadow-lg transition-shadow"
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    <val.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-primary mb-2">{val.title}</h3>
                  <p className="text-sm text-neutral-600">{val.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* ===== TIMELINE (Compact Vertical) ===== */}
      <Section background="light" padding="large">
        <Container size="narrow">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 space-y-2">
              <h2 className="text-4xl font-black text-primary uppercase">Unsere Reise</h2>
              <p className="text-neutral-600">Von Anfang bis heute</p>
            </div>
          </ScrollReveal>

          <div className="space-y-6 relative">
            {/* Timeline line */}
            <motion.div
              className="absolute left-[23px] top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 items-start pl-16"
              >
                {/* Dot */}
                <motion.div
                  className="absolute left-0 w-12 h-12 rounded-full bg-white border-4 border-secondary flex items-center justify-center -translate-x-0.5 flex-shrink-0"
                  whileHover={{ scale: 1.2 }}
                >
                  <div className="w-3 h-3 rounded-full bg-secondary" />
                </motion.div>

                {/* Content */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-black text-lg text-secondary">{item.year}</span>
                    <h3 className="font-bold text-primary">{item.title}</h3>
                  </div>
                  <p className="text-sm text-neutral-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ===== WHY CHOOSE US (Compact Grid) ===== */}
      <Section background="white" padding="large">
        <Container size="wide">
          <ScrollReveal direction="up">
            <div className="text-center mb-12 space-y-2">
              <h2 className="text-4xl font-black text-primary uppercase">Warum BC Group?</h2>
              <p className="text-neutral-600">Gegründet auf Vertrauen und Expertise</p>
            </div>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Shield, title: 'Vollständig versichert', desc: 'Umfassende Absicherung für alle Services' },
              { icon: Target, title: 'Spezialisiert', desc: '12+ Profis mit Fachkompetenz' },
              { icon: Star, title: 'Bewährt', desc: 'Tausende zufriedene Kunden in Berlin' },
              { icon: MapPin, title: 'Lokal präsent', desc: 'Wir kennen alle Bezirke Berlins' },
              { icon: Phone, title: '24/7 erreichbar', desc: 'Support rund um die Uhr verfügbar' },
              { icon: CheckCircle2, title: 'Transparente Preise', desc: 'Keine versteckten Kosten' },
            ].map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.05}>
                <div className="bg-gradient-to-br from-neutral-50 to-white p-6 rounded-lg border border-neutral-100 hover:shadow-lg transition-shadow">
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-primary mb-1 text-sm">{item.title}</h3>
                  <p className="text-xs text-neutral-600">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </Container>
      </Section>

      {/* ===== CTA FINAL ===== */}
      <Section background="gradient" padding="large">
        <Container size="narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase">
              Bereit zur Zusammenarbeit?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Kontaktieren Sie uns unverbindlich und erfahren Sie, wie BC Group Ihre Anforderungen erfüllen kann.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/kontakt">
                <Button
                  size="lg"
                  className="!bg-white !text-primary hover:!bg-secondary font-bold"
                >
                  Kontakt aufnehmen
                </Button>
              </Link>
              <a href="tel:+49-30-123456">
                <Button
                  variant="ghost"
                  size="lg"
                  className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-bold group"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Anrufen</span>
                </Button>
              </a>
            </div>

            <div className="flex justify-center gap-6 pt-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Versichert</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Zuverlässig</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                <span>Professionell</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  )
}
