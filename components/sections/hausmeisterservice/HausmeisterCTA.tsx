'use client'

import Link from 'next/link'
import { Button, Section, Container } from '@/components/ui'
import { ArrowRight, FileText } from 'lucide-react'

export default function HausmeisterCTA() {
  const hausmeisterAccent = '#8b5cf6'
  const hausmeisterPrimary = '#1e1b4b'

  return (
    <Section background="white" padding="large" className="relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-10"
          style={{ background: `radial-gradient(circle, ${hausmeisterAccent}, transparent)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: `radial-gradient(circle, ${hausmeisterPrimary}, transparent)` }}
        />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Main CTA Container */}
        <div className="max-w-5xl mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Interessiert an unserem Hausmeisterservice{' '}
              <span 
                className="inline-block"
                style={{ color: hausmeisterAccent }}
              >
                in Berlin?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Lassen Sie sich jetzt ein unverbindliches Angebot erstellen oder entdecken Sie weitere Informationen zu unseren Leistungen.
            </p>
          </div>

          {/* CTA Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            {/* Primary CTA Button - Angebot */}
            <Link href="/kontakt" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="xl"
                className="w-full sm:w-auto shadow-lg hover:shadow-2xl transition-all duration-300 border-0"
                style={{
                  background: `linear-gradient(135deg, ${hausmeisterPrimary} 0%, ${hausmeisterAccent} 100%)`,
                  color: '#ffffff',
                }}
                icon={<ArrowRight className="w-6 h-6" />}
                iconPosition="right"
              >
                Jetzt Angebot einholen
              </Button>
            </Link>

            {/* Secondary CTA Button - More Info */}
            <Link href="#hausmeisterservice-leistungen" className="w-full sm:w-auto scroll-smooth">
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto border-2 transition-all duration-300 hover:shadow-lg"
                style={{
                  borderColor: hausmeisterAccent,
                  color: hausmeisterAccent,
                }}
                icon={<FileText className="w-6 h-6" />}
                iconPosition="right"
              >
                Mehr über Hausmeisterservice
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-neutral-200">
            {/* Feature 1 */}
            <div className="text-center space-y-3">
              <div 
                className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${hausmeisterAccent}15` }}
              >
                <svg className="w-7 h-7" style={{ color: hausmeisterAccent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900">Kostenlose Beratung</h3>
              <p className="text-sm text-neutral-600">Unverbindlich & transparent</p>
            </div>

            {/* Feature 2 */}
            <div className="text-center space-y-3">
              <div 
                className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${hausmeisterAccent}15` }}
              >
                <svg className="w-7 h-7" style={{ color: hausmeisterAccent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900">Schnelle Reaktion</h3>
              <p className="text-sm text-neutral-600">Antwort innerhalb von 2 Stunden</p>
            </div>

            {/* Feature 3 */}
            <div className="text-center space-y-3">
              <div 
                className="w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-3"
                style={{ background: `${hausmeisterAccent}15` }}
              >
                <svg className="w-7 h-7" style={{ color: hausmeisterAccent }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-neutral-900">Professionell & Zuverlässig</h3>
              <p className="text-sm text-neutral-600">Über 10 Jahre Erfahrung</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
