'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Card, CardContent, CardDescription, Section, Container, ScrollReveal, StaggerContainer, StaggerItem, MagneticElement } from '@/components/ui'
import { ArrowRight, Star, Zap, CheckCircle } from 'lucide-react'

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
    description: 'Professionelle Entrümpelung mit fachgerechter Entsorgung und nachhaltiger Wertstoff-Verwertung',
    image: '/images/services/image_entrümplung.png',
    href: '/services/entruempelung',
    features: ['Komplette Entrümpelung', 'Fachgerechte Entsorgung', 'Wertstoff-Recycling'],
    rating: 4.9,
    popular: true,
  },
  {
    name: 'ABRISS',
    description: 'Fachgerechter Abriss mit modernster Technik und umweltgerechter Entsorgung',
    image: '/images/services/image_abriss.png',
    href: '/services/abriss',
    features: ['Präzise Abrissarbeiten', 'Sicherer Schutt-Transport', 'Umweltgerechte Entsorgung'],
    rating: 4.8,
  },
  {
    name: 'REINIGUNG',
    description: 'Professionelle Gebäudereinigung für alle Flächen mit garantierter Qualität',
    image: '/images/services/image_cleanout.png',
    href: '/services/reinigung',
    features: ['Büroreinigung', 'Grundreinigung', 'Fensterreinigung'],
    rating: 4.9,
  },
  {
    name: 'HAUSMEISTER',
    description: 'Zuverlässiger Hausmeisterservice mit 24/7 Notdienst und Vollservice-Betreuung',
    image: '/images/services/image_hausmeister.png',
    href: '/services/hausmeisterservice',
    features: ['Wartung & Instandhaltung', '24/7 Notdienst', 'Grünpflege'],
    rating: 4.7,
  },
  {
    name: 'UMZUG & TRANSPORT',
    description: 'Stressfreie Umzüge mit professionellem Team und vollständigem Service',
    image: '/images/services/image_moving.png',
    href: '/services/umzug',
    features: ['Komplettumzüge', 'Möbeltransport', 'Ein- & Auspackservice'],
    rating: 4.8,
    popular: true,
  },
  {
    name: 'KURIER',
    description: 'Schnelle und zuverlässige Kurierdienste mit Same-Day-Delivery Option',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    href: '/services/kurierdienst',
    features: ['Same-Day Delivery', 'Express-Zustellung', 'Tracking-System'],
    rating: 4.6,
  },
]

export default function ServiceOverview() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <Section id="content-start" background="light" padding="medium" className="relative overflow-hidden">
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/8 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl opacity-40" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Premium Header Section */}
        <ScrollReveal direction="up" className="text-center mb-20 lg:mb-28">
          {/* Refined Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="flex items-center gap-4">
              <div className="h-px w-6 bg-gradient-to-r from-transparent to-secondary/50" />
              <span className="text-secondary font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-secondary/20 bg-secondary/5">
                Unsere Expertise
              </span>
              <div className="h-px w-6 bg-gradient-to-l from-transparent to-secondary/50" />
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.08] tracking-tight">
            <span className="block text-primary mb-2">Sechs Services.</span>
            <span className="block gradient-text">Ein zuverlässiger Partner.</span>
          </h2>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-light">
            Umfassende Servicelösungen aus einer Hand – professionell, transparent und genau auf 
            Ihre Anforderungen zugeschnitten.
          </p>
        </ScrollReveal>

        {/* Service Grid with Enhanced Layout */}
        <StaggerContainer 
          delay={0.1} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <StaggerItem key={service.name}>
              <MagneticElement strength={0.25}>
                <Link 
                  href={service.href} 
                  className="group block h-full"
                >
                  <Card 
                    variant="elevated" 
                    className="h-full relative overflow-hidden transition-all duration-700 border border-neutral-200/60 group-hover:border-secondary/30 will-change-transform"
                    style={{
                      transform: hoveredCard === index 
                        ? 'translateY(-16px) scale(1.02)' 
                        : 'translateY(0) scale(1)',
                    }}
                  >
                    {/* Image Section with Enhanced Effects */}
                    <div className="relative h-72 md:h-80 lg:h-96 bg-neutral-100 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={`${service.name} Service`}
                        fill
                        loading="lazy"
                        className="object-cover transition-transform duration-1000 group-hover:scale-115"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Sophisticated Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-85 group-hover:opacity-75 transition-opacity duration-500" />
                      
                      {/* Service Name and Description Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                        <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                          {service.name}
                        </h3>
                        <div className="w-10 h-1 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full" />
                      </div>
                      
                      {/* Hover Action Button */}
                      <div className="absolute top-1/2 right-6 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        <div className="w-12 h-12 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/25 transition-all duration-300 shadow-xl border border-white/20">
                          <ArrowRight className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent padding="lg" className="flex-1 flex flex-col justify-between space-y-6 bg-gradient-to-b from-white/60 to-white/40 backdrop-blur-sm">
                      {/* Description */}
                      <p className="text-sm md:text-base text-neutral-700 leading-relaxed group-hover:text-neutral-900 transition-colors">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 mb-4">
                          <Zap className="w-4 h-4 text-secondary" />
                          <span className="text-xs font-bold text-primary uppercase tracking-widest">Leistungen</span>
                        </div>
                        <ul className="space-y-2.5">
                          {service.features.map((feature, idx) => (
                            <li 
                              key={idx}
                              className="flex items-start gap-3 text-sm text-neutral-600 group-hover:text-neutral-800 transition-all duration-300"
                              style={{
                                transform: hoveredCard === index ? 'translateX(4px)' : 'translateX(0)'
                              }}
                            >
                              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Footer */}
                      <div className="flex items-center justify-between pt-5 border-t border-neutral-200/60 group-hover:border-secondary/30 transition-colors">
                        <span className="text-secondary font-bold text-xs uppercase tracking-widest group-hover:text-accent transition-colors">
                          Zum Service
                        </span>
                        <div className="relative">
                          <div className="absolute inset-0 bg-secondary/15 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="relative w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500 shadow-md group-hover:shadow-lg">
                            <ArrowRight className="w-4 h-4 text-secondary group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
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
      </Container>
    </Section>
  )
}
