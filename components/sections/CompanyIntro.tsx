'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Section, Container } from '@/components/ui'
import { Zap, Shield, Headphones, TrendingUp } from 'lucide-react'

export default function CompanyIntro() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [statsInView, setStatsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setStatsInView(true), 300)
        }
      },
      { threshold: 0.1, rootMargin: '0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    { icon: Zap, text: 'Versichert & Zuverlässig', description: 'Vollständig versichert' },
    { icon: Shield, text: 'Geprüfte Qualität', description: 'Höchste Standards' },
    { icon: Headphones, text: 'Proaktiver Support', description: '24/7 Erreichbar' },
    { icon: TrendingUp, text: 'Transparente Preise', description: 'Ohne versteckte Kosten' }
  ]

  const stats = [
    { value: '15', label: 'Jahre Exzellenz', suffix: '+' },
    { value: '8', label: 'Spezialisierte Services', suffix: '' },
    { value: '4', label: 'von 5 Sternen', suffix: '✓' }
  ]

  return (
    <Section background="white" padding="large">
      <Container size="wide">
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left: Image with Advanced Visual Effects */}
          <div 
            className={`order-2 lg:order-1 transition-all duration-1000 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Floating Accent Element */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-2xl opacity-0 animate-pulse" />
              <div className="absolute -bottom-12 -right-8 w-32 h-32 bg-gradient-to-tl from-secondary/15 to-transparent rounded-full blur-3xl opacity-0 animate-pulse" 
                style={{ animationDelay: '0.5s' }} />
              
              {/* Premium Image Container */}
              <div className="relative h-[480px] md:h-[600px] group">
                {/* Background Gradient Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10 rounded-2xl" />
                
                {/* Main Image */}
                <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/image_bcgroup.png"
                    alt="BC Group professional team - multi-service holding company in Berlin"
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  />
                  
                  {/* Sophisticated Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  
                  {/* Corner Accent Line */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-secondary/60 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-accent/60 rounded-br-2xl" />
                </div>
                
                {/* Premium Stats Badge - Positioned Absolutely */}
                <div className="absolute -bottom-8 left-0 right-0 flex justify-center px-4">
                  <div 
                    className={`glass-dark rounded-2xl p-6 md:p-8 backdrop-blur-2xl border border-white/30 shadow-2xl transition-all duration-700 max-w-[90%] ${
                      statsInView 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div 
                            className={`text-2xl md:text-3xl font-black text-white mb-1 transition-all duration-700 ${
                              statsInView 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-0 scale-75'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                          >
                            <CountUpNumber 
                              end={parseInt(stat.value)} 
                              suffix={stat.suffix}
                              isVisible={statsInView}
                            />
                          </div>
                          <div 
                            className={`text-[11px] md:text-xs text-white/85 uppercase tracking-widest font-semibold transition-all duration-700 ${
                              statsInView 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-3'
                            }`}
                            style={{ transitionDelay: `${index * 150 + 100}ms` }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Premium Content */}
          <div 
            className={`order-1 lg:order-2 space-y-8 transition-all duration-1000 delay-200 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-12'
            }`}
          >
            {/* Refined Eyebrow */}
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-8 bg-gradient-to-b from-secondary to-accent rounded-full" />
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">
                Partnerschaft seit mehr als 15 Jahren
              </span>
            </div>

            {/* Premium Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                <span className="block text-primary">Die Zukunft</span>
                <span className="block gradient-text">
                  professioneller Services
                </span>
              </h2>
              
              {/* Refined Separator */}
              <div className="flex items-center gap-2 pt-2">
                <div className="h-0.5 w-8 bg-secondary rounded-full" />
                <div className="h-0.5 w-6 bg-accent rounded-full" />
              </div>
            </div>
            
            {/* Sophisticated Content */}
            <div className="space-y-6 pt-4">
              <p className="text-lg md:text-xl text-primary font-semibold leading-relaxed">
                BC Group steht für Innovation und Zuverlässigkeit in Berlin.
              </p>
              
              <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-light">
                Unser Versprechen: Ihre Herausforderungen werden von Experten gelöst, 
                die jedes Detail verstehen und meistern. Mit modernster Ausstattung 
                und Leidenschaft für Exzellenz.
              </p>
            </div>

            {/* Elegant Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 py-2">
              {highlights.map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className={`group rounded-lg border border-neutral-100 p-4 transition-all duration-700 hover:border-secondary/30 hover:bg-secondary/5 ${
                      isVisible 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-6'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                      <div>
                        <h3 className="text-sm font-semibold text-primary mb-0.5 group-hover:text-secondary transition-colors">
                          {item.text}
                        </h3>
                        <p className="text-xs text-neutral-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            {/* Premium CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '900ms' }}
            >
              <Link href="/ueber-uns" className="flex-1 sm:flex-none">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 font-semibold"
                >
                  Mehr über uns
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

// Animated Counter Component
function CountUpNumber({ 
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

    const duration = 2500
    const steps = 80
    const increment = end / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [end, isVisible])

  return <>{count}{suffix}</>
}
