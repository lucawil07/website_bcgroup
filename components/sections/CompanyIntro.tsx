'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Section, Container } from '@/components/ui'
import { CheckCircle2, Award, Clock, Users } from 'lucide-react'

export default function CompanyIntro() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [statsInView, setStatsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setStatsInView(true), 400)
        }
      },
      { threshold: 0.15, rootMargin: '0px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    { icon: Award, text: 'Zertifiziert & Versichert', delay: 0 },
    { icon: CheckCircle2, text: 'Faire Preise', delay: 100 },
    { icon: Clock, text: 'Schnelle Reaktion', delay: 200 },
    { icon: Users, text: 'Kundenorientiert', delay: 300 }
  ]

  const stats = [
    { value: '10+', label: 'Jahre Erfahrung', suffix: '' },
    { value: '6', label: 'Services', suffix: '' },
    { value: '100', label: 'Zuverlässig', suffix: '%' }
  ]

  return (
    <Section background="white" padding="large">
      <Container size="wide">
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Image Column */}
          <div 
            className={`order-2 lg:order-1 transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1200&auto=format&fit=crop"
                  alt="BC Group professional team providing services in Berlin"
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
                
                {/* Stats Badge */}
                <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">
                  <div 
                    className={`glass-dark rounded-2xl p-5 md:p-6 backdrop-blur-xl border border-white/20 transition-all duration-700 ${
                      statsInView 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-6'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-6">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center flex-1">
                          <div 
                            className={`text-3xl md:text-4xl font-black text-white mb-1 transition-all duration-500 ${
                              statsInView 
                                ? 'opacity-100 scale-100' 
                                : 'opacity-0 scale-90'
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            <CountUpNumber 
                              end={parseInt(stat.value)} 
                              suffix={stat.suffix}
                              isVisible={statsInView}
                            />
                          </div>
                          <div 
                            className={`text-[10px] md:text-xs text-white/90 uppercase tracking-wider font-semibold transition-all duration-500 ${
                              statsInView 
                                ? 'opacity-100 translate-y-0' 
                                : 'opacity-0 translate-y-2'
                            }`}
                            style={{ transitionDelay: `${index * 100 + 150}ms` }}
                          >
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Blur Element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-3xl blur-3xl opacity-50 pointer-events-none" />
            </div>
          </div>

          {/* Content Column */}
          <div 
            className={`order-1 lg:order-2 space-y-6 transition-all duration-700 delay-150 ease-out ${
              isVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Section Label */}
            <div className="inline-block">
              <span className="text-secondary font-bold text-sm uppercase tracking-[0.2em] bg-secondary/10 px-6 py-2.5 rounded-full inline-block">
                Über uns
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-3">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight uppercase">
                <span className="block text-primary">DIE</span>
                <span className="block text-secondary">BC GROUP</span>
              </h2>
              <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-secondary to-accent" />
            </div>
            
            {/* Content */}
            <div className="space-y-5">
              <p className="text-xl md:text-2xl text-primary font-semibold leading-snug">
                Seit mehreren Jahren ist die BC Group Ihr verlässlicher Partner für 
                professionelle Dienstleistungen in Berlin.
              </p>
              
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                Mit unserem engagierten Team und modernster Ausstattung bieten wir 
                Ihnen Lösungen, die genau auf Ihre Bedürfnisse zugeschnitten sind.
              </p>
              
              <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                Von der Entrümpelung über Gebäudereinigung bis hin zum Umzugsservice – 
                wir decken ein breites Spektrum ab. Unser Anspruch: höchste Qualität, 
                absolute Zuverlässigkeit und faire Preise.
              </p>
            
            </div>
            
            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 pt-4 transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <Link href="/ueber-uns" className="w-full sm:w-auto">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Mehr über uns
                </Button>
              </Link>
              
              <Link href="/kontakt" className="w-full sm:w-auto">
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full sm:w-auto hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  Kontakt aufnehmen
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

    const duration = 2000
    const steps = 60
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
