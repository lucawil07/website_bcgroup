'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Section, Container, Button } from '@/components/ui'
import { Users, Target, Award, TrendingUp, Sparkles, Shield, Heart, Zap, ArrowRight, CheckCircle2, Phone, Trophy, Smile, UserCheck, Bolt, Mail } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Unsere Mission',
    description: 'Wir machen das Leben unserer Kunden einfacher durch zuverlässige und professionelle Dienstleistungen.',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-blue-500',
  },
  {
    icon: Award,
    title: 'Qualität',
    description: 'Höchste Qualitätsstandards und kontinuierliche Verbesserung in allen Bereichen.',
    color: 'from-amber-500/20 to-yellow-500/20',
    iconColor: 'text-amber-500',
  },
  {
    icon: Heart,
    title: 'Leidenschaft',
    description: 'Erfahrene und engagierte Mitarbeiter, die mit Leidenschaft bei der Sache sind.',
    color: 'from-rose-500/20 to-pink-500/20',
    iconColor: 'text-rose-500',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Moderne Technik und innovative Lösungen für optimale Ergebnisse.',
    color: 'from-purple-500/20 to-indigo-500/20',
    iconColor: 'text-purple-500',
  },
]

const stats = [
  { value: 10, suffix: '+', label: 'Jahre Erfahrung', icon: Trophy },
  { value: 5000, suffix: '+', label: 'Zufriedene Kunden', icon: Smile },
  { value: 50, suffix: '+', label: 'Mitarbeiter', icon: Users },
  { value: 6, suffix: '', label: 'Servicebereiche', icon: Bolt },
]

const timeline = [
  {
    year: '2014',
    title: 'Gründung',
    description: 'Start als kleines Familienunternehmen in Berlin mit Fokus auf Entrümpelung',
  },
  {
    year: '2017',
    title: 'Expansion',
    description: 'Erweiterung des Service-Portfolios um Reinigung und Umzugsservice',
  },
  {
    year: '2020',
    title: 'Digitalisierung',
    description: 'Einführung moderner Buchungssysteme und digitaler Prozesse',
  },
  {
    year: '2024',
    title: 'Marktführer',
    description: 'Einer der führenden Multi-Service-Anbieter in Berlin',
  },
]

export default function AboutContent() {
  return (
    <>
      {/* Hero with Parallax */}
      <HeroSection />
      
      {/* Company Story */}
      <StorySection />
      
      {/* Animated Stats */}
      <StatsSection />
      
      {/* Timeline */}
      <TimelineSection />
      
      {/* Values Bento Grid */}
      <ValuesSection />
      
      {/* Team Highlight */}
      <TeamSection />
      
      {/* CTA */}
      <CTASection />
    </>
  )
}

// Hero Section with Parallax Effect
function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Parallax Background - Absolute to this container */}
      <div 
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2340&auto=format&fit=crop"
          alt="BC Group Berlin - Professionelle Dienstleistungen"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-secondary/40" />
      </div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse z-10" style={{ animationDelay: '1s' }} />
      
      {/* Content Container */}
      <div className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-8 z-20">
        <div className="text-center max-w-7xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-block animate-slide-in-up">
              <div className="glass-strong px-6 py-3 rounded-full border border-white/20 backdrop-blur-xl">
                <div className="flex items-center gap-2 text-white/90 text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  <span className="uppercase tracking-wider">Seit mehreren Jahren in Berlin</span>
                </div>
              </div>
            </div>
            
            {/* Title */}
            <h1 className="text-hero font-black text-white uppercase tracking-tight leading-[0.9] animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="block">Über</span>
              <span className="block gradient-text bg-gradient-to-r from-white via-secondary-300 to-accent-300">BC GROUP</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white max-w-3xl mx-auto leading-relaxed font-medium animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              Ihr zuverlässiger Partner für professionelle Dienstleistungen in Berlin – 
              <span className="font-bold text-white"> mit Herz, Qualität und Innovation</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
              <Link href="#story">
                <Button variant="glass" size="lg" className="group border-2 border-white/40 hover:border-white/60">
                  <span>Unsere Geschichte</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/kontakt">
                <Button variant="secondary" size="lg" className="!bg-white !text-primary hover:!bg-accent hover:!text-white font-bold">
                  <Phone className="w-5 h-5" />
                  <span>Kontakt aufnehmen</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
        
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}

// Story Section with Reveal Animation
function StorySection() {
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
    <Section id="story" background="white" padding="large">
      <Container size="wide">
        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Section Label */}
            <div className="inline-block">
              <span className="text-white font-bold text-sm uppercase tracking-[0.3em] bg-secondary px-6 py-2.5 rounded-full shadow-lg">
                Unsere Geschichte
              </span>
            </div>
            
            <h2 className="text-section font-black uppercase leading-tight">
              <span className="block text-[#1a1a1a]">Die</span>
              <span className="block" style={{ color: '#0066CC' }}>BC Group</span>
            </h2>
            
            <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-secondary to-accent" />
            
            <div className="space-y-6">
              <p className="text-xl md:text-2xl text-primary font-semibold leading-snug">
                Seit über 10 Jahren ist die BC Group Ihr verlässlicher Partner für 
                umfassende Serviceleistungen in Berlin.
              </p>
              
              <p className="text-base md:text-lg text-neutral-800 leading-relaxed">
                Was als kleines Unternehmen begann, hat sich zu einem der führenden Anbieter 
                für Entrümpelung, Reinigung, Umzug und weitere Dienstleistungen entwickelt.
              </p>
              
              <p className="text-base md:text-lg text-neutral-800 leading-relaxed">
                Unser Erfolg basiert auf drei Säulen: <span className="font-bold text-[#1a1a1a]">Qualität, Zuverlässigkeit und Kundenzufriedenheit</span>. 
                Mit einem Team von über 50 erfahrenen Mitarbeitern und modernster Ausstattung meistern wir jede Herausforderung.
              </p>
              
              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  'Zertifiziert & Versichert',
                  'Faire Preise',
                  'Schnelle Reaktion',
                  'Persönlicher Service',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center group-hover:bg-secondary-600 transition-colors shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-semibold text-neutral-900">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image with Modern Effects */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop"
                alt="BC Group Team Berlin"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/30 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 glass-strong px-6 py-4 rounded-2xl border border-white/20 backdrop-blur-xl">
                <div className="text-center">
                  <div className="text-3xl font-black text-white mb-1">5000+</div>
                  <div className="text-xs text-white/90 uppercase tracking-wider">Kunden</div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl blur-2xl" />
          </div>
        </div>
      </Container>
    </Section>
  )
}

// Animated Stats Section
function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <Section background="white" padding="large" className="bg-gradient-to-b from-white to-neutral-50">
      <Container>
        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

function StatCard({ stat, index, isVisible }: { stat: typeof stats[0]; index: number; isVisible: boolean }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!isVisible) return
    
    const duration = 2000
    const steps = 60
    const increment = stat.value / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += increment
      if (current >= stat.value) {
        setCount(stat.value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    
    return () => clearInterval(timer)
  }, [isVisible, stat.value])
  
  const IconComponent = stat.icon
  
  return (
    <div 
      className={`text-center space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-center mb-2">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
          <IconComponent className="w-8 h-8 text-secondary" strokeWidth={2.5} />
        </div>
      </div>
      <div className="text-5xl md:text-6xl font-black bg-gradient-to-br from-secondary via-secondary-600 to-accent bg-clip-text text-transparent">
        {count}{stat.suffix}
      </div>
      <div className="text-sm md:text-base uppercase tracking-wider font-bold text-[#1a1a1a]">
        {stat.label}
      </div>
    </div>
  )
}

// Timeline Section
function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  
  useEffect(() => {
    const observers = timeline.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...prev, index])
          }
        },
        { threshold: 0.5 }
      )
      
      if (itemRefs.current[index]) {
        observer.observe(itemRefs.current[index]!)
      }
      
      return observer
    })
    
    return () => observers.forEach(observer => observer.disconnect())
  }, [])
  
  return (
    <Section background="white" padding="large">
      <Container size="default">
        <div className="text-center mb-16 space-y-4">
          <span className="text-white font-bold text-sm uppercase tracking-[0.3em] bg-secondary px-6 py-2.5 rounded-full inline-block shadow-lg">
            Unsere Reise
          </span>
          <h2 className="text-section font-black uppercase text-[#1a1a1a]">
            10 Jahre <span style={{ color: '#0066CC' }}>Erfolgsgeschichte</span>
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-secondary-400 to-accent hidden md:block" />
          
          <div className="space-y-12 md:space-y-24">
            {timeline.map((item, index) => (
              <div
                key={index}
                ref={el => { itemRefs.current[index] = el }}
                className={`relative grid md:grid-cols-2 gap-8 items-center transition-all duration-1000 ${
                  visibleItems.includes(index) ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {index % 2 === 0 ? (
                  <>
                    {/* Left Content */}
                    <div className={`md:text-right space-y-3 transition-transform duration-700 ${visibleItems.includes(index) ? 'translate-x-0' : '-translate-x-12'}`}>
                      <div className="inline-block md:float-right bg-secondary/10 px-6 py-3 rounded-2xl border-2 border-secondary shadow-md">
                        <span className="text-4xl font-black text-secondary">{item.year}</span>
                      </div>
                      <div className="clear-both" />
                      <h3 className="text-2xl font-bold" style={{ color: '#0a0a0a' }}>{item.title}</h3>
                      <p className="text-neutral-900 text-base font-medium">{item.description}</p>
                    </div>
                    
                    {/* Center Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-white shadow-lg hidden md:block" />
                    
                    {/* Right Spacer */}
                    <div />
                  </>
                ) : (
                  <>
                    {/* Left Spacer */}
                    <div />
                    
                    {/* Center Dot */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg hidden md:block" />
                    
                    {/* Right Content */}
                    <div className={`space-y-3 transition-transform duration-700 ${visibleItems.includes(index) ? 'translate-x-0' : 'translate-x-12'}`}>
                      <div className="inline-block bg-accent/10 px-6 py-3 rounded-2xl border-2 border-accent shadow-md">
                        <span className="text-4xl font-black text-accent">{item.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold" style={{ color: '#0a0a0a' }}>{item.title}</h3>
                      <p className="text-neutral-900 text-base font-medium">{item.description}</p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

// Values Bento Grid Section
function ValuesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  
  useEffect(() => {
    const observers = values.map((_, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => [...prev, index])
          }
        },
        { threshold: 0.3 }
      )
      
      if (cardRefs.current[index]) {
        observer.observe(cardRefs.current[index]!)
      }
      
      return observer
    })
    
    return () => observers.forEach(observer => observer.disconnect())
  }, [])
  
  return (
    <Section background="white" padding="large" className="bg-gradient-to-b from-neutral-50 to-white">
      <Container size="wide">
        <div className="text-center mb-16 space-y-4">
          <span className="text-white font-bold text-sm uppercase tracking-[0.3em] bg-secondary px-6 py-2.5 rounded-full inline-block shadow-lg">
            Was uns ausmacht
          </span>
          <h2 className="text-section font-black uppercase text-[#1a1a1a]">
            Unsere <span style={{ color: '#0066CC' }}>Werte</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              ref={el => { cardRefs.current[index] = el }}
              className={`group card-modern p-8 space-y-6 hover:shadow-2xl transition-all duration-700 cursor-pointer bg-gradient-to-br ${value.color} ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                <value.icon className={`w-8 h-8 ${value.iconColor}`} strokeWidth={2} />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-black uppercase text-[#1a1a1a] group-hover:text-secondary transition-colors">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-900 leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
              
              <div className="pt-4">
                <div className="h-1 w-12 bg-gradient-to-r from-secondary to-accent rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

// Team Highlight Section
function TeamSection() {
  return (
    <Section background="dark" padding="large">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop"
              alt="BC Group Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/50 to-transparent" />
          </div>
          
          <div className="space-y-6 text-white">
            <span className="text-secondary-300 font-bold text-sm uppercase tracking-[0.3em] bg-secondary/20 px-6 py-2.5 rounded-full inline-block">
              Unser Team
            </span>
            
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              Menschen, die den<br />
              <span className="text-accent">Unterschied machen</span>
            </h2>
            
            <p className="text-lg text-white/80 leading-relaxed">
              Unser Team besteht aus über 50 engagierten Mitarbeitern, die täglich ihr Bestes geben. 
              Mit Erfahrung, Leidenschaft und modernster Ausstattung sorgen wir dafür, dass jeder 
              Auftrag zu Ihrer vollsten Zufriedenheit erledigt wird.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              {['Zertifizierte Fachkräfte', 'Regelmäßige Schulungen', 'Moderne Ausrüstung', 'Persönliche Betreuung'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

// CTA Section
function CTASection() {
  return (
    <Section background="dark" padding="large" className="relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary-950 to-primary">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <Container className="relative z-10">
        <div className="text-center space-y-10 max-w-5xl mx-auto">
          {/* Section Badge */}
          <div className="inline-block animate-slide-in-up">
            <div className="glass-strong px-6 py-3 rounded-full border border-white/30 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Bereit durchzustarten?</span>
              </div>
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase text-white leading-[1.1] tracking-tight">
              Werden Sie Teil<br />
              unserer <span className="bg-gradient-to-r from-accent via-accent-300 to-secondary bg-clip-text text-transparent">Erfolgsgeschichte</span>
            </h2>
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed max-w-3xl mx-auto">
              Kontaktieren Sie uns noch heute und erleben Sie den BC Group Service – 
              <span className="text-accent-200 font-bold"> professionell, zuverlässig und mit Herz</span>
            </p>
          </div>
          
          {/* CTA Buttons - Enhanced */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
            <Link href="/kontakt">
              <Button 
                variant="secondary" 
                size="lg" 
                className="!bg-accent hover:!bg-accent-400 !text-white font-bold shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300 !px-8 !py-6 text-lg group"
              >
                <Phone className="w-6 h-6" />
                <span>Jetzt Kontakt aufnehmen</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
            <Link href="/#services">
              <Button 
                variant="glass" 
                size="lg" 
                className="border-2 border-white hover:border-white !bg-white/10 hover:!bg-white/20 backdrop-blur-xl !text-white font-bold hover:scale-105 transition-all duration-300 !px-8 !py-6 text-lg"
              >
                <span>Unsere Services entdecken</span>
              </Button>
            </Link>
          </div>
          
          {/* Enhanced Trust Indicators */}
          <div className="pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: CheckCircle2, text: 'Kostenlose Beratung', subtext: 'Unverbindlich & transparent' },
                { icon: Shield, text: 'Faire Preise', subtext: 'Keine versteckten Kosten' },
                { icon: Zap, text: 'Schnelle Reaktion', subtext: '24/7 erreichbar' },
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="glass-strong p-6 rounded-2xl border border-white/20 backdrop-blur-xl hover:scale-105 transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                      <item.icon className="w-7 h-7 text-accent" strokeWidth={2.5} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-base mb-1">{item.text}</div>
                      <div className="text-white/70 text-sm font-medium">{item.subtext}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Info Quick Access */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 text-white/90">
            <a href="tel:+4930123456" className="flex items-center gap-2 hover:text-white transition-colors group">
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">+49 30 123 456</span>
            </a>
            <span className="hidden sm:block text-white/40">|</span>
            <a href="mailto:info@bcgroup-berlin.de" className="flex items-center gap-2 hover:text-white transition-colors group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="font-semibold">info@bcgroup-berlin.de</span>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  )
}
