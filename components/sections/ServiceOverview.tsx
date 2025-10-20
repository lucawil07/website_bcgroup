'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Card, CardContent, CardDescription, Section, Container, ScrollReveal, StaggerContainer, StaggerItem, MagneticElement } from '@/components/ui'
import { ArrowRight, Star, Sparkles, CheckCircle2 } from 'lucide-react'

interface Service {
  name: string
  description: string
  image: string
  href: string
  features: string[]
  rating: number
  popular?: boolean
}

const services: Service[] = [
  {
    name: 'ENTRÜMPELUNG',
    description: 'Professionelle Entrümpelung und Entsorgung für Wohnungen, Häuser und Gewerbe mit nachhaltiger Verwertung',
    image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1200&auto=format&fit=crop',
    href: '/services/entruempelung',
    features: ['Komplette Entrümpelung', 'Fachgerechte Entsorgung', 'Wertstoff-Recycling'],
    rating: 4.9,
    popular: true,
  },
  {
    name: 'ABRISS',
    description: 'Fachgerechter Abriss und Entkernung von Gebäuden und Objekten mit modernster Technik',
    image: 'https://images.unsplash.com/photo-1590496793907-4e3c6e66ce3e?q=80&w=1200&auto=format&fit=crop',
    href: '/services/abriss',
    features: ['Präzise Abrissarbeiten', 'Sicherer Schutt-Transport', 'Umweltgerechte Entsorgung'],
    rating: 4.8,
  },
  {
    name: 'REINIGUNG',
    description: 'Professionelle Gebäudereinigung für Büros, Wohnungen und Gewerbeflächen mit Qualitätsgarantie',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=1200&auto=format&fit=crop',
    href: '/services/reinigung',
    features: ['Büroreinigung', 'Grundreinigung', 'Fensterreinigung'],
    rating: 4.9,
  },
  {
    name: 'HAUSMEISTER',
    description: 'Zuverlässiger Hausmeisterservice für Ihre Immobilie mit 24/7 Notdienst-Bereitschaft',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop',
    href: '/services/hausmeisterservice',
    features: ['Wartung & Instandhaltung', '24/7 Notdienst', 'Grünpflege'],
    rating: 4.7,
  },
  {
    name: 'UMZUG & TRANSPORT',
    description: 'Stressfreie Umzüge und sichere Transporte in Berlin und Umgebung mit Vollservice-Betreuung',
    image: 'https://images.unsplash.com/photo-1464082354059-27db6ce50048?q=80&w=1200&auto=format&fit=crop',
    href: '/services/umzug',
    features: ['Komplettumzüge', 'Möbeltransport', 'Ein- & Auspackservice'],
    rating: 4.8,
    popular: true,
  },
  {
    name: 'KURIER',
    description: 'Schnelle und zuverlässige Kurierdienste für Ihr Business mit Same-Day-Delivery',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    href: '/services/kurierdienst',
    features: ['Same-Day Delivery', 'Express-Zustellung', 'Tracking-System'],
    rating: 4.6,
  },
]

export default function ServiceOverview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <Section id="content-start" background="light" padding="large" className="relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Enhanced Header Section */}
        <ScrollReveal direction="up" className="text-center mb-16 lg:mb-24">
              <div className="inline-flex items-center gap-3 mb-6 lg:mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-secondary/50 to-secondary" />
            <div className="relative">
              <Sparkles className="w-5 h-5 absolute -top-2 -left-3 animate-pulse" style={{ color: '#0066CC' }} />
              <span className="text-secondary font-bold text-xs lg:text-sm uppercase tracking-[0.2em] bg-secondary/5 px-6 py-2.5 rounded-full border border-secondary/20 backdrop-blur-sm">
                Unsere Services
              </span>
            </div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent via-secondary/50 to-secondary" />
          </div>          <h2 className="text-section uppercase font-black mb-6 lg:mb-8 leading-[1.1] tracking-tight">
            BEI DER BC GROUP KOMMT
            <br />
            <span className="gradient-text-aurora inline-block mt-2">
              ALLERHAND GUTES ZUSAMMEN
            </span>
          </h2>
          
          <p className="text-body-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Sechs Dienstleistungen, ein Partner. Wir bieten Ihnen umfassende Servicelösungen
            aus einer Hand – professionell, zuverlässig und ganz auf Ihre Bedürfnisse zugeschnitten.
          </p>
        </ScrollReveal>

        {/* Modern Grid Layout with Smooth Animations */}
        <StaggerContainer 
          delay={0.08} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 perspective-2000"
        >
          {services.map((service, index) => (
            <StaggerItem key={service.name}>
              <MagneticElement strength={0.3}>
                <Link 
                  href={service.href} 
                  className="group block h-full" 
                  aria-label={`${service.name} Service ansehen`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <Card 
                    variant="elevated" 
                    className="h-full relative overflow-hidden transition-all duration-700 ease-out-quart group-hover:shadow-2xl border border-neutral-100/50 group-hover:border-secondary/20 will-change-transform"
                    style={{
                      transform: hoveredCard === index 
                        ? 'translateY(-12px) scale(1.02) rotateX(2deg)' 
                        : 'translateY(0) scale(1) rotateX(0deg)',
                    }}
                  >
                    {/* Animated Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30">
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                        style={{ width: '200%' }}
                      />
                    </div>

                    {/* Popular Badge with Pulse */}
                    {service.popular && (
                      <div className="absolute top-4 left-4 z-20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm animate-pulse-subtle" 
                           style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #FF8859 100%)' }}>
                        <span className="flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3" />
                          Beliebt
                        </span>
                      </div>
                    )}

                    {/* Enhanced Image Section with Parallax Effect */}
                    <div className="relative overflow-hidden h-64 lg:h-80 bg-neutral-100">
                      <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out">
                        <Image
                          src={service.image}
                          alt={`${service.name} - Professional service by BC Group Berlin`}
                          fill
                          loading="lazy"
                          className="object-cover transition-all duration-700 group-hover:scale-110 will-change-transform"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      
                      {/* Multi-layer Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                      
                      {/* Floating Rating Badge */}
                      <div className="absolute bottom-4 right-4 z-20 glass-strong text-white px-3 py-2 rounded-xl flex items-center gap-2 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white/25">
                        <Star className="w-4 h-4 fill-yellow-400 drop-shadow-lg" style={{ color: '#facc15' }} />
                        <span className="text-sm font-bold drop-shadow-md">{service.rating}</span>
                      </div>
                      
                      {/* Interactive Arrow Button */}
                      <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out-quart transform translate-y-3 group-hover:translate-y-0">
                        <div className="glass-strong text-white p-3.5 rounded-2xl hover:bg-white/30 transition-all duration-300 backdrop-blur-md shadow-xl">
                          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" style={{ color: '#ffffff' }} />
                        </div>
                      </div>
                      
                      {/* Service Title Overlay - Enhanced Typography */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent z-10">
                        <h3 className="text-xl lg:text-2xl font-black text-white uppercase tracking-wide group-hover:tracking-[0.15em] transition-all duration-500 mb-1 drop-shadow-2xl will-change-transform">
                          {service.name}
                        </h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-secondary to-accent rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out-quart" />
                      </div>
                    </div>
                    
                    {/* Enhanced Content Section with Better Spacing */}
                    <CardContent padding="lg" className="flex-1 flex flex-col space-y-5 bg-white/50 backdrop-blur-sm">
                      <CardDescription className="flex-1 text-sm lg:text-base leading-relaxed text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">
                        {service.description}
                      </CardDescription>
                      
                      {/* Modern Features List with Icons */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-[#1a1a1a] uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
                          <Sparkles className="w-3 h-3" style={{ color: '#0066CC' }} />
                          UNSERE LEISTUNGEN
                        </h4>
                        <ul className="space-y-2.5">
                          {service.features.map((feature, idx) => (
                            <li 
                              key={idx} 
                              className="flex items-start gap-3 text-sm text-neutral-600 group-hover:text-neutral-800 transition-all duration-300"
                              style={{
                                transitionDelay: `${idx * 50}ms`,
                                transform: hoveredCard === index ? 'translateX(4px)' : 'translateX(0)'
                              }}
                            >
                              <div className="w-1.5 h-1.5 bg-gradient-to-br from-secondary to-accent rounded-full flex-shrink-0 mt-1.5 group-hover:scale-125 transition-transform duration-300" />
                              <span className="leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Modern CTA with Enhanced Interaction */}
                      <div className="flex items-center justify-between pt-5 border-t border-neutral-200/70 group-hover:border-secondary/30 transition-colors duration-300">
                        <span className="text-secondary font-bold text-sm uppercase tracking-[0.1em] group-hover:tracking-[0.15em] transition-all duration-300">
                          Details ansehen
                        </span>
                          <div className="relative">
                          <div className="absolute inset-0 bg-secondary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative w-10 h-10 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-secondary group-hover:to-accent transition-all duration-500 shadow-sm group-hover:shadow-lg">
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-all duration-300 group-hover:text-white" style={{ color: '#0066CC' }} />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </MagneticElement>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        {/* Enhanced Bottom Section with Trust Indicators */}
      </Container>
    </Section>
  )
}
