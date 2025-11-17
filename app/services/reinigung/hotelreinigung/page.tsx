import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Hotel, CheckCircle, Clock, Shield, Star, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hotelreinigung Berlin - Premium Service für Hotels | BC Group',
  description: 'Professionelle Hotelreinigung in Berlin. Spezialisierte Reinigung für Hotels mit höchsten Hygiene- und Servicestandards. 24/7 Service, gastorientiert, diskret.',
  keywords: 'hotelreinigung berlin, hotel cleaning, zimmerreinigung, hospitality cleaning, housekeeping service',
}

export default function HotelreinigungPage() {
  const accent = '#06b6d4'

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Verfügbarkeit',
      description: 'Rund um die Uhr im Einsatz - angepasst an Check-in/Check-out Zeiten und Belegung',
    },
    {
      icon: Star,
      title: 'Gastorientiert',
      description: 'Höchste Servicequalität für zufriedene Gäste und positive Bewertungen',
    },
    {
      icon: Shield,
      title: 'Diskret & Schnell',
      description: 'Unauffällige, effiziente Reinigung ohne Störung Ihrer Gäste',
    },
  ]

  const services = [
    'Zimmerreinigung zwischen Check-outs',
    'Tägliche Housekeeping-Services',
    'Badezimmer-Tiefenreinigung',
    'Bettwäsche- und Handtuchwechsel',
    'Öffentliche Bereiche & Lobby',
    'Konferenzräume & Veranstaltungsflächen',
  ]

  const hotelTypes = [
    {
      title: 'Boutique Hotels',
      description: 'Individuelle Reinigung für besondere Designhotels mit hochwertigen Materialien',
      icon: '✨',
    },
    {
      title: 'Business Hotels',
      description: 'Effiziente Zimmerreinigung für Geschäftsreisende mit höchsten Standards',
      icon: '💼',
    },
    {
      title: 'Stadthotels & Hostels',
      description: 'Schnelle Durchlaufzeiten bei hoher Belegung und Gästewechsel',
      icon: '🏨',
    },
    {
      title: 'Aparthotels',
      description: 'Flexible Reinigungsintervalle für Langzeitgäste und Serviced Apartments',
      icon: '🏢',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Bedarfsanalyse & Hotelbesichtigung',
      description: 'Wir erfassen Ihre Anforderungen: Zimmeranzahl, Belegungsrate, besondere Servicestandards und gewünschte Reinigungszeiten.',
    },
    {
      step: '2',
      title: 'Maßgeschneidertes Service-Konzept',
      description: 'Entwicklung eines individuellen Reinigungsplans mit flexiblen Teams für Hochsaison und ruhigere Phasen.',
    },
    {
      step: '3',
      title: 'Team-Training & Integration',
      description: 'Schulung unseres Housekeeping-Teams in Ihren Standards, Abläufen und besonderen Anforderungen Ihres Hotels.',
    },
    {
      step: '4',
      title: 'Kontinuierlicher Service',
      description: 'Zuverlässige tägliche Reinigung mit Qualitätskontrollen und direktem Ansprechpartner für spontane Anforderungen.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 via-transparent to-purple-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Reinigung', href: '/services/reinigung' },
              { label: 'Hotelreinigung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-purple-100 border border-purple-200">
              <Hotel className="w-4 h-4 text-purple-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-purple-900">
                Hotelreinigung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Premium Hotelreinigung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Spezialisierte Reinigung für Hotels mit höchsten Hygiene- und Servicestandards. 24/7 Service, 
              gastorientiert und diskret - für unvergessliche Gästeerlebnisse und Top-Bewertungen.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Kostenlose Beratung
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Warum BC Group für Ihre Hotelreinigung?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${accent}20` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: accent }} />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </Section>

      {/* Hotel Types Grid */}
      <Section padding="large" className="bg-gradient-to-b from-white to-purple-50">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
            Wir reinigen alle Hoteltypen
          </h2>
          
          <p className="text-lg text-neutral-700 mb-12 text-center max-w-2xl mx-auto">
            Von der kleinen Pension bis zum Luxushotel - wir passen unseren Service an Ihre Bedürfnisse an:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {hotelTypes.map((type, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Overview */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unser Hotelreinigungs-Service
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Umfassende Reinigungsleistungen für alle Hotelbereiche:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:border-purple-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-purple-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So starten wir mit Ihrer Hotelreinigung
            </h2>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-white border border-purple-100"
                >
                  <div 
                    className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: accent }}
                  >
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-700 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Feature Highlight */}
      <Section padding="large" className="bg-gradient-to-br from-indigo-900 to-purple-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Users className="w-12 h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Gästezufriedenheit beginnt mit Sauberkeit
              </h2>
            </div>
            <p className="text-lg text-purple-100 mb-6 leading-relaxed text-center">
              Saubere Zimmer sind das Fundament positiver Hotelbewertungen. Mit unserem professionellen Housekeeping-Service 
              schaffen Sie ein Wohlfühlambiente, das Gäste begeistert und zu wiederkehrenden Buchungen führt. Investieren 
              Sie in erstklassige Reinigung - Ihre Gäste werden es in ihren 5-Sterne-Bewertungen danken!
            </p>
            <div className="text-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-purple-900 bg-white hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Jetzt Partner werden
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
