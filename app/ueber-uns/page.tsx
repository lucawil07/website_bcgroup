'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Section, Container, Button } from '@/components/ui'
import { PartnerSection } from '@/components/sections'
import { 
  Zap, Shield, Headphones, TrendingUp, Star, Users, Award, 
  CheckCircle2, ArrowRight, Phone, Lightbulb, Handshake, Lock 
} from 'lucide-react'

// Hero Section
function AboutHero() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Section background="white" padding="none">
      <div 
        ref={heroRef}
        className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
            alt="BC Group Berlin - Professionelle Services mit Tradition"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-white/80 text-sm uppercase tracking-widest font-semibold mb-6">
              Seit 2014 in Berlin tätig
            </p>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              BC Group <span className="text-secondary">Berlin</span>
            </h1>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl mx-auto">
              Komplexität durch Klarheit ersetzen. Mit innovativem, nachhaltigem Ansatz und ganzheitlichen Lösungen schaffen wir schnelle, präzise Ergebnisse – immer mit persönlicher Betreuung.
            </p>
          </div>

            {/* Rating Badge */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="inline-block glass-dark rounded-full px-6 py-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-white text-sm font-semibold">5 von 5 • 300+ Bewertungen</span>
                </div>
              </div>
            </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mt-12 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Link href="/kontakt">
              <Button 
                variant="primary"
                size="lg"
                className="font-bold text-lg px-8"
              >
                Anfrage stellen
              </Button>
            </Link>
            <button className="px-8 py-3 rounded-lg border-2 border-white/40 text-white font-bold hover:border-white/60 hover:bg-white/10 transition-all duration-300">
              Mehr erfahren
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <p className="text-white text-sm opacity-60">Nach unten scrollen</p>
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </Section>
  )
}

// Stats Section
function StatsSection() {
  const [countsVisible, setCountsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

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

  const stats = [
    { number: 1800, label: 'Projekte erfolgreich umgesetzt', icon: TrendingUp, suffix: '+' },
    { number: 6, label: 'Service-Bereiche', icon: Zap, suffix: '' },
    { number: 100, label: 'Digitalisierte Prozesse %', icon: Award, suffix: '%' },
    { number: 15, label: 'Jahre Erfahrung', icon: Users, suffix: '+' },
  ]

  return (
    <Section background="white" padding="large">
      <Container>
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div 
                key={index}
                className={`group p-8 rounded-2xl border-2 border-neutral-200 bg-white hover:border-secondary/60 hover:shadow-xl hover:from-white hover:to-secondary/5 transition-all duration-700 ${
                  countsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-all duration-300" />
                  <Icon className="w-8 h-8 text-secondary mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                </div>
                <div className="text-4xl font-black text-secondary mb-2">
                  {countsVisible ? stat.number : 0}{stat.suffix}
                </div>
                <p className="text-neutral-600 font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

// Company Story Section
function CompanyStory() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Section background="light" padding="large">
      <Container>
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
                alt="BC Group Team - Professionelle Expertise"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Right: Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6">
              Unsere Geschichte
            </h2>
            
            <div className="space-y-4 mb-8 text-neutral-700">
              <p className="text-lg leading-relaxed">
                Die BC Group wurde gegründet, um Komplexität durch Klarheit zu ersetzen. Mit einem innovativen, nachhaltigen Ansatz und ganzheitlichen Lösungen schaffen wir schnelle, präzise Ergebnisse – immer mit persönlicher Betreuung.
              </p>
              <p className="text-lg leading-relaxed">
                Seit 2014 vertrauen uns hunderte von Kunden in Berlin und Brandenburg. Regional verwurzelt, digital ausgestattet und immer persönlich erreichbar – das ist BC Group.
              </p>
            </div>

            <div className="space-y-3">
              {[
                'Sichere Daten & transparente Preise',
                'Innovative Komplettlösungen – persönlich & digital',
                'Direkter Ansprechpartner für alle Herausforderungen'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0" />
                  <span className="text-neutral-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

// Values Section - New Messaging
function ValuesSection() {
  const [visibleIndices, setVisibleIndices] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleIndices([0, 1, 2, 3])
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      title: 'Regional mit Verantwortung',
      description: 'Berlin und Brandenburg sind unsere Heimat. Wir tragen Verantwortung für jedes Projekt vor Ort.',
      icon: Handshake,
    },
    {
      title: 'Zuverlässigkeit in jeder Situation',
      description: 'Jeder Kunde genießt persönliche Betreuung und einen direkten Ansprechpartner für alle Herausforderungen.',
      icon: Shield,
    },
    {
      title: 'Digital gedacht. Persönlich gemacht.',
      description: 'Moderne Lösungen kombiniert mit persönlicher Beratung und direktem Ansprechpartner.',
      icon: Lightbulb,
    },
    {
      title: 'Sichere Daten & transparente Preise',
      description: 'Vertrauen durch Transparenz: Keine versteckten Kosten, klare Kommunikation.',
      icon: Lock,
    },
  ]

  return (
    <Section background="white" padding="large">
      <Container>
        <div ref={sectionRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Unsere Werte
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Das macht BC Group zu deinem idealen Partner in Berlin und Brandenburg
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl border-2 border-neutral-200 bg-white hover:border-secondary/60 hover:shadow-lg hover:from-white hover:to-secondary/5 transition-all duration-700 h-full ${
                  visibleIndices.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-secondary/5 rounded-full group-hover:bg-secondary/10 transition-colors duration-300" />
                <div className="relative z-10 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                  {value.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

// Services Grid Section
function ServiceGrid() {
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
    <Section background="light" padding="large">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-primary mb-4">
            Unsere Services
          </h2>
          <p className="text-xl text-neutral-600">
            Komplette Lösungen für Berlin und Brandenburg
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.iconKey as keyof typeof serviceIcons]
            return (
            <Link key={index} href={service.href}>
              <div className="group p-8 rounded-2xl border-2 border-neutral-200 hover:border-secondary/50 bg-white hover:bg-secondary/5 transition-all duration-300 cursor-pointer h-full">
                <Icon className="w-10 h-10 text-secondary mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {service.name}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                  Mehr erfahren <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          )
          })}
        </div>
      </Container>
    </Section>
  )
}

// Final CTA
function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ctaRef.current) {
      observer.observe(ctaRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Section background="dark" padding="large">
      <Container>
        <div 
          ref={ctaRef}
          className={`text-center max-w-3xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-secondary mb-6">
            Bereit für die Zusammenarbeit?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Kontaktieren Sie uns noch heute und lassen Sie sich von unseren Experten beraten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/kontakt" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-10 py-4 rounded-lg bg-secondary text-white font-bold hover:bg-[#004fa8] hover:shadow-2xl transition-all duration-300 shadow-lg">
                Kontakt aufnehmen
              </button>
            </Link>
            <a href="tel:+493012345678" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-10 py-4 rounded-lg border-2 border-secondary/60 text-white font-bold hover:border-secondary hover:bg-secondary/10 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                <Phone className="w-5 h-5" />
                Anrufen
              </button>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}

// Main Page Component
export default function UeberUnsPage() {
  return (
    <>
      <AboutHero />
      <StatsSection />
      <CompanyStory />
      <ValuesSection />
      <PartnerSection />
      <ServiceGrid />
      <FinalCTA />
    </>
  )
}
