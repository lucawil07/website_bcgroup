'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Section, Container } from '@/components/ui'
import { LogoCloud } from '@/components/ui/logo-cloud'
import { 
  Zap, Headphones, TrendingUp, Star, Users, Award, 
  CheckCircle2, ArrowRight, Phone, Lightbulb, Lock,
  MapPin, Rocket, Cpu
} from 'lucide-react'

// Partner Logos Section - Same as starting page
function PartnerLogosSection() {
  const partnerLogos = [
    {
      src: '/images/partner_logos/contipark_logo.png',
      alt: 'Contipark',
      width: 120,
      height: 60,
    },
    {
      src: '/images/partner_logos/koca_bau_logo.png',
      alt: 'KOCA Bau Berlin',
      width: 120,
      height: 60,
    },
    {
      src: '/images/partner_logos/sauberkraft_logo.png',
      alt: 'Sauberkraft Berlin',
      width: 120,
      height: 60,
    },
    {
      src: '/images/partner_logos/ckdental_logo.png',
      alt: 'CK Dental',
      width: 120,
      height: 60,
    },
    {
      src: '/images/partner_logos/sbu_logo.png',
      alt: 'SBU',
      width: 120,
      height: 60,
    },
    {
      src: '/images/partner_logos/partner_iscreen_1.jpg',
      alt: 'Partner 1',
      width: 120,
      height: 60,
    },
    {
      src: '/images/partner_logos/partner_iscreen_2.jpg',
      alt: 'Partner 2',
      width: 120,
      height: 60,
    },
    {
      src: '/images/partner_logos/partner_iscreen_3.jpg',
      alt: 'Partner 3',
      width: 120,
      height: 60,
    },
    {
      src: '/images/partner_logos/partner_logo_4.jpg',
      alt: 'Partner 4',
      width: 120,
      height: 60,
    },
    {
      src: '/images/partner_logos/unknown_logo.png',
      alt: 'Partner',
      width: 120,
      height: 60,
    },
  ]

  return (
    <Section background="white" padding="small">
      <Container>
        <div className="text-center mb-6">
          <p className="text-xs md:text-sm font-semibold text-neutral-500 uppercase tracking-wider">
            Vertrauen durch Qualität & Zuverlässigkeit
          </p>
        </div>
        <LogoCloud 
          logos={partnerLogos} 
          speed={60}
          speedOnHover={20}
          gap={40}
          className="py-4"
        />
      </Container>
    </Section>
  )
}

// Hero Section - Compact professional design
function AboutHero() {
  const accent = '#f97316'

  return (
    <Section background="white" padding="none">
      <div className="relative min-h-[70vh] md:min-h-[80vh] w-full flex items-center justify-center overflow-hidden py-24 md:py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
            alt="BC Group Berlin - Professionelle Services mit Tradition"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Subtle Background accent */}
        <div className="absolute inset-0 -z-10">
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
            style={{ background: `radial-gradient(circle, ${accent}30, transparent)` }}
          />
        </div>

        {/* Content */}
        <Container size="wide">
          <div className="relative z-10 max-w-3xl mx-auto lg:mx-0 text-center lg:text-left">
            {/* Rating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 md:px-5 md:py-2.5 mb-6 md:mb-8 border border-white/20">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-white text-xs md:text-sm font-semibold">5 von 5 bei über 300 Bewertungen</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
            >
              BC Group <span style={{ color: accent }}>Berlin</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Komplexität durch Klarheit ersetzen. Mit innovativem, nachhaltigem Ansatz und ganzheitlichen Lösungen schaffen wir schnelle, präzise Ergebnisse – immer mit persönlicher Betreuung.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link href="/kontakt" className="group w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 hover:opacity-90"
                  style={{ background: accent }}
                >
                  <span className="text-sm">Anfrage stellen</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a href="tel:+4917663213253" className="w-full sm:w-auto">
                <button
                  className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold border border-white/30 text-white transition-all duration-200 flex items-center justify-center gap-2 hover:bg-white/10"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Jetzt anrufen</span>
                </button>
              </a>
            </motion.div>
          </div>
        </Container>

      </div>
    </Section>
  )
}

// Stats Section - Clean professional design
function StatsSection() {
  const [countsVisible, setCountsVisible] = useState(false)
  const [animatedNumbers, setAnimatedNumbers] = useState<number[]>([0, 0, 0])
  const statsRef = useRef<HTMLDivElement>(null)

  const stats = [
    { number: 1800, label: 'Projekte', icon: TrendingUp, suffix: '+' },
    { number: 6, label: 'Services', icon: Zap, suffix: '' },
    { number: 100, label: 'Digital', icon: Cpu, suffix: '%' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (countsVisible) {
      stats.forEach((stat, index) => {
        const duration = 1500
        const steps = 40
        const increment = stat.number / steps
        let current = 0
        
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.number) {
            current = stat.number
            clearInterval(timer)
          }
          setAnimatedNumbers(prev => {
            const newNumbers = [...prev]
            newNumbers[index] = Math.floor(current)
            return newNumbers
          })
        }, duration / steps)
      })
    }
  }, [countsVisible])

  return (
    <Section background="white" padding="medium">
      <Container>
        <div ref={statsRef} className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={countsVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="text-center"
              >
                <div className="inline-flex w-10 h-10 md:w-12 md:h-12 rounded-lg bg-secondary/10 items-center justify-center mb-3">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                </div>
                <div className="text-2xl md:text-4xl font-black text-primary mb-1">
                  {animatedNumbers[index]}{stat.suffix}
                </div>
                <p className="text-neutral-500 text-xs md:text-sm font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

// Company Story Section - Clean professional design
function CompanyStory() {
  const accent = '#f97316'

  return (
    <Section background="light" padding="medium">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="BC Group Team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-6 md:-right-6 z-10">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-neutral-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: accent }}>
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-neutral-800">Seit 2014</p>
                    <p className="text-xs text-neutral-500">Ihr Partner in Berlin</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-semibold text-xs uppercase tracking-widest mb-3" style={{ color: accent }}>
              Über BC Group
            </p>
            
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
              Digital gedacht. <span style={{ color: accent }}>Persönlich gemacht.</span>
            </h2>
            
            <div className="space-y-3 mb-6 text-neutral-600 text-sm md:text-base">
              <p>
                Die BC Group wurde gegründet, um Komplexität durch Klarheit zu ersetzen. Mit einem innovativen, nachhaltigen Ansatz schaffen wir schnelle, präzise Ergebnisse – immer mit persönlicher Betreuung.
              </p>
              <p>
                Seit 2014 vertrauen uns hunderte von Kunden in Berlin und Brandenburg. Regional verwurzelt, digital ausgestattet und immer persönlich erreichbar.
              </p>
            </div>

            <div className="space-y-2">
              {[
                'Sichere Daten & transparente Preise',
                'Innovative Komplettlösungen',
                'Direkter Ansprechpartner',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: accent }} />
                  <span className="text-neutral-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}

// Values Section - Clean professional design
function ValuesSection() {
  const accent = '#f97316'

  const values = [
    { title: 'Regional', description: 'Berlin und Brandenburg sind unsere Heimat.', icon: MapPin },
    { title: 'Persönlich', description: 'Direkter Ansprechpartner für alle Anliegen.', icon: Users },
    { title: 'Digital', description: 'Moderne Lösungen mit persönlicher Beratung.', icon: Lightbulb },
    { title: 'Transparent', description: 'Keine versteckten Kosten, klare Kommunikation.', icon: Lock },
  ]

  return (
    <Section background="white" padding="medium">
      <Container>
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-semibold text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>
            Unsere Werte
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-primary">
            Was uns auszeichnet
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="group text-center p-4 md:p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-secondary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex w-10 h-10 md:w-12 md:h-12 rounded-lg items-center justify-center mb-3" style={{ background: `${accent}10` }}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: accent }} />
                </div>
                <h3 className="text-sm md:text-base font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                  {value.title}
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

// Why BC Group Section - Clean dark design
function WhyBCGroup() {
  const accent = '#f97316'

  const reasons = [
    { icon: Award, title: 'Bewährt', description: 'Hunderte zufriedene Kunden vertrauen auf unsere Expertise.' },
    { icon: Users, title: 'Persönlich', description: 'Direkter Ansprechpartner für alle Ihre Anliegen.' },
    { icon: Rocket, title: 'Innovativ', description: 'Digitale Prozesse für optimale Ergebnisse.' },
  ]

  return (
    <section className="relative py-12 md:py-16 bg-neutral-900">
      <Container>
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-semibold text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>
            Ihre Vorteile
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white">
            Warum BC Group?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-secondary/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="inline-flex w-12 h-12 rounded-lg items-center justify-center mb-4" style={{ background: `${accent}20` }}>
                  <Icon className="w-6 h-6" style={{ color: accent }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-white/60 text-sm">
                  {reason.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

// Services Grid Section - Clean professional cards
function ServiceGrid() {
  const accent = '#f97316'
  
  const serviceIcons = {
    entruempelung: Zap,
    abriss: TrendingUp,
    reinigung: Star,
    hausmeisterservice: Headphones,
    umzug: Users,
    kurierdienst: Award,
  }

  const services = [
    { name: 'Entrümpelung', href: '/services/entruempelung', iconKey: 'entruempelung' },
    { name: 'Abriss', href: '/services/abriss', iconKey: 'abriss' },
    { name: 'Reinigung', href: '/services/reinigung', iconKey: 'reinigung' },
    { name: 'Hausmeisterservice', href: '/services/hausmeisterservice', iconKey: 'hausmeisterservice' },
    { name: 'Umzug & Transport', href: '/services/umzug', iconKey: 'umzug' },
    { name: 'Kurierdienst', href: '/services/kurierdienst', iconKey: 'kurierdienst' },
  ]

  return (
    <Section background="light" padding="medium">
      <Container>
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="font-semibold text-xs uppercase tracking-widest mb-2" style={{ color: accent }}>
            Unsere Leistungen
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-primary">
            Unsere Services
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.iconKey as keyof typeof serviceIcons]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <Link href={service.href}>
                  <div className="group p-4 md:p-6 rounded-xl border border-neutral-200 bg-white hover:border-secondary/40 hover:shadow-md transition-all duration-200 cursor-pointer h-full">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-3" style={{ background: `${accent}10` }}>
                      <Icon className="w-5 h-5" style={{ color: accent }} />
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-primary group-hover:text-secondary transition-colors mb-1">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all" style={{ color: accent }}>
                      <span>Mehr</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

// Final CTA - Clean professional design
function FinalCTA() {
  const accent = '#f97316'

  return (
    <section className="py-12 md:py-16 bg-neutral-900">
      <Container>
        <motion.div 
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
            Bereit für die <span style={{ color: accent }}>Zusammenarbeit?</span>
          </h2>
          <p className="text-white/60 mb-6 text-sm md:text-base">
            Kontaktieren Sie uns und lassen Sie sich beraten.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/kontakt">
              <button 
                className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 hover:opacity-90"
                style={{ background: accent }}
              >
                <span className="text-sm">Kontakt aufnehmen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <a href="tel:+4917663213253">
              <button 
                className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold border border-white/30 text-white transition-all duration-200 flex items-center justify-center gap-2 hover:bg-white/10"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">Jetzt anrufen</span>
              </button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}

// Main Page Component
export default function UeberUnsPage() {
  return (
    <>
      <AboutHero />
      <PartnerLogosSection />
      <StatsSection />
      <CompanyStory />
      <ValuesSection />
      <WhyBCGroup />
      <ServiceGrid />
      <FinalCTA />
    </>
  )
}
