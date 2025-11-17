import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Truck, CheckCircle, Shield, Building2, Package, TrendingDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Geschäftskunden-Logistik Berlin - B2B Kurierlösungen | BC Group',
  description: 'Individuelle Logistiklösungen für Büros, Filialen und Produktionsstandorte in Berlin. Planbare Touren, kostenoptimiert, dokumentiert und versichert.',
  keywords: 'b2b kurier berlin, geschäftskunden logistik, firmenkurier berlin, business logistik, unternehmenskurier, filiallogistik berlin',
}

export default function GeschaeftskundenLogistikPage() {
  const accent = '#00d4ff'

  const benefits = [
    {
      icon: Building2,
      title: 'Multi-Standort-Logistik',
      description: 'Effiziente Verbindung mehrerer Büros, Filialen oder Produktionsstandorte',
    },
    {
      icon: TrendingDown,
      title: 'Kostenoptimierung',
      description: 'Bündelung von Transporten und optimierte Routen senken Ihre Logistikkosten',
    },
    {
      icon: Shield,
      title: 'Versichert & Dokumentiert',
      description: 'Lückenlose Sendungsverfolgung und Versicherungsschutz für Ihre Waren',
    },
  ]

  const services = [
    'Filialbelieferung mit Same-Day-Delivery',
    'Just-in-Time Lieferungen für Produktion',
    'Lager-zu-Büro Expressversand',
    'Warenrücknahme und Retouren-Management',
    'Muster- und Prototypentransport',
    'Ersatzteilversorgung im Notfall',
  ]

  const industries = [
    {
      title: 'Einzelhandel & E-Commerce',
      description: 'Schnelle Nachbelieferung von Filialen, Abholung von Online-Bestellungen aus Lagern, Same-Day-Delivery für Kunden',
      features: ['Express-Nachschub', 'Retouren-Abholung', 'Last-Mile für Online-Bestellungen'],
    },
    {
      title: 'Produktion & Fertigung',
      description: 'Just-in-Time Lieferung von Kleinteilen und Komponenten, Eillieferung bei Maschinenstillstand, Musterbeschaffung',
      features: ['Notfall-Express', 'Produktionsversorgung', 'Prototypen-Transport'],
    },
    {
      title: 'Büros & Verwaltung',
      description: 'Dokumentenaustausch zwischen Standorten, Verteilung von Büromaterial, Transport von IT-Equipment',
      features: ['Interoffice-Mail', 'Büroausstattung', 'IT-Hardware-Express'],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-cyan-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Kurierdienst', href: '/services/kurierdienst' },
              { label: 'Geschäftskunden-Logistik' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200">
              <Truck className="w-4 h-4 text-cyan-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-900">
                B2B Logistik
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Geschäftskunden-Logistik<br />
              <span style={{ color: accent }}>individuell & zuverlässig</span>
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Maßgeschneiderte Logistiklösungen für Büros, Filialen und Produktionsstandorte. 
              Wir verbinden Ihre Standorte mit planbaren Touren, kostenoptimierten Routen 
              und lückenloser Dokumentation – überall in Berlin und Brandenburg.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Logistiklösung anfragen
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Warum Geschäftskunden auf uns setzen
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-cyan-200 transition-all duration-300 hover:shadow-lg"
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

      {/* Services Overview */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unsere Logistik-Dienstleistungen
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Von der täglichen Filialbelieferung bis zum Notfall-Express – 
              wir bieten flexible Lösungen für jeden Geschäftsbedarf:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-cyan-100 hover:border-cyan-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Industries Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              Branchen & Einsatzgebiete
            </h2>

            <div className="space-y-6">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-cyan-50 to-white border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300"
                >
                  <h3 className="text-2xl font-bold text-neutral-900 mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {industry.features.map((feature, fidx) => (
                      <div 
                        key={fidx}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold"
                        style={{ backgroundColor: `${accent}15`, color: accent }}
                      >
                        <Package className="w-4 h-4" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So entwickeln wir Ihre Logistiklösung
            </h2>

            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Anforderungsanalyse',
                  description: 'Wir verstehen Ihre Geschäftsprozesse: Standorte, Volumina, Zeitfenster, Besonderheiten. Gemeinsam definieren wir Anforderungen.',
                },
                {
                  step: '2',
                  title: 'Konzept & Angebot',
                  description: 'Sie erhalten ein maßgeschneidertes Logistikkonzept mit transparenter Preisgestaltung und SLA-Vereinbarungen.',
                },
                {
                  step: '3',
                  title: 'Pilotphase',
                  description: 'Wir starten mit einer Testphase, lernen Ihre Prozesse kennen und optimieren die Abläufe kontinuierlich.',
                },
                {
                  step: '4',
                  title: 'Rollout & Support',
                  description: 'Nach erfolgreicher Pilotphase erfolgt der volle Rollout. Ein fester Ansprechpartner betreut Sie laufend.',
                },
              ].map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-white border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300"
                >
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg"
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

      {/* Pricing Info */}
      <Section padding="large" className="bg-gradient-to-br from-cyan-900 to-blue-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transparente & Faire Preisgestaltung
            </h2>
            <p className="text-lg text-cyan-100 mb-8 leading-relaxed">
              Die Kosten für Ihre Geschäftskunden-Logistik berechnen sich aus Anzahl der Standorte, 
              Lieferfrequenz, Sendungsvolumen und besonderen Anforderungen. Durch optimierte Touren 
              und Bündelung bieten wir Ihnen beste Konditionen. Fordern Sie ein individuelles Angebot an.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-lg"
              style={{ color: accent }}
            >
              Individuelle Beratung
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
