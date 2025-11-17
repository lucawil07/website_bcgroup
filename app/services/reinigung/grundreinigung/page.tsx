import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { Home, CheckCircle, Sparkles, Leaf, ShieldCheck, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Grundreinigung Berlin - Tiefenreinigung für Wohnungen & Gewerbe | BC Group',
  description: 'Professionelle Grundreinigung in Berlin. Intensive Tiefenreinigung für Wohnungen, Häuser und Gewerberäume. Gründlich, alle Oberflächen, mit ECO-Produkten.',
  keywords: 'grundreinigung berlin, tiefenreinigung, wohnung grundreinigen, gewerbereinigung, basic cleaning',
}

export default function GrundreinigungPage() {
  const accent = '#06b6d4'

  const benefits = [
    {
      icon: Sparkles,
      title: 'Intensive Tiefenreinigung',
      description: 'Wir erreichen auch schwer zugängliche Bereiche und entfernen hartnäckigen Schmutz gründlich',
    },
    {
      icon: Leaf,
      title: 'Umweltfreundliche Produkte',
      description: 'Einsatz von ECO-zertifizierten Reinigungsmitteln für Ihre Gesundheit und die Umwelt',
    },
    {
      icon: ShieldCheck,
      title: 'Materialschonend',
      description: 'Professionelle Reinigung ohne Beschädigung von Oberflächen, Böden oder Möbeln',
    },
  ]

  const services = [
    'Böden: Intensivreinigung & Versiegelung',
    'Sanitäranlagen: Kalk- & Schmutzentfernung',
    'Küchen: Fett- & Verkrustungslösung',
    'Fenster, Rahmen & Fensterbänke',
    'Heizkörper, Lüftungen & Klimaanlagen',
    'Türen, Zargen & Lichtschalter',
  ]

  const useCases = [
    {
      title: 'Nach Renovierung oder Bau',
      description: 'Entfernung von Baustaub, Farbresten und Handwerkerspuren für eine saubere Übergabe',
      icon: '🏗️',
    },
    {
      title: 'Vor Einzug oder nach Auszug',
      description: 'Grundreinigung für besenreinen Zustand oder frische Basis für neue Mieter',
      icon: '📦',
    },
    {
      title: 'Saisonale Tiefenreinigung',
      description: 'Frühjahrsputz oder Herbstreinigung für Privathaushalte und Gewerbeflächen',
      icon: '🍂',
    },
    {
      title: 'Spezielle Anlässe',
      description: 'Vor Vermietung, Verkauf oder wichtigen Events für perfekten ersten Eindruck',
      icon: '⭐',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Objektbewertung',
      description: 'Wir besichtigen Ihre Räumlichkeiten und erfassen den Reinigungsumfang: Fläche, Verschmutzungsgrad und besondere Anforderungen.',
    },
    {
      step: '2',
      title: 'Individuelles Angebot',
      description: 'Sie erhalten ein detailliertes Festpreisangebot mit allen Leistungen - transparent und ohne versteckte Kosten.',
    },
    {
      step: '3',
      title: 'Professionelle Durchführung',
      description: 'Unser geschultes Team führt die Grundreinigung systematisch und gründlich durch - Raum für Raum mit Checkliste.',
    },
    {
      step: '4',
      title: 'Qualitätskontrolle',
      description: 'Abschließende Endkontrolle und Übergabe. Sie erhalten blitzsaubere Räume in neuem Glanz.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-transparent to-blue-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Reinigung', href: '/services/reinigung' },
              { label: 'Grundreinigung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-200">
              <Home className="w-4 h-4 text-cyan-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-cyan-900">
                Grundreinigung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Professionelle Grundreinigung in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Intensive Tiefenreinigung für Wohnungen, Häuser und Gewerberäume. Wir reinigen gründlich alle Oberflächen 
              und erreichen auch schwer zugängliche Bereiche - mit umweltfreundlichen ECO-Produkten.
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
            Warum BC Group für Ihre Grundreinigung?
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

      {/* Use Cases Grid */}
      <Section padding="large" className="bg-gradient-to-b from-white to-cyan-50">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
            Wann ist eine Grundreinigung sinnvoll?
          </h2>
          
          <p className="text-lg text-neutral-700 mb-12 text-center max-w-2xl mx-auto">
            Eine professionelle Grundreinigung schafft nicht nur Sauberkeit, sondern auch Hygiene und Wohlbefinden:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-white border border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {useCase.description}
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
              Was umfasst unsere Grundreinigung?
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir reinigen systematisch und gründlich jeden Bereich Ihrer Räumlichkeiten:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-white border border-cyan-100 hover:border-cyan-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
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
              So läuft Ihre Grundreinigung ab
            </h2>

            <div className="space-y-6">
              {process.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-white border border-cyan-100"
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

      {/* Feature Highlight */}
      <Section padding="large" className="bg-gradient-to-br from-cyan-900 to-blue-700 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Zap className="w-12 h-12" />
              <h2 className="text-3xl md:text-4xl font-bold">
                Der Unterschied ist sichtbar
              </h2>
            </div>
            <p className="text-lg text-cyan-100 mb-6 leading-relaxed text-center">
              Eine professionelle Grundreinigung geht weit über den normalen Hausputz hinaus. Mit speziellen 
              Reinigungsgeräten und Fachkenntnissen erreichen wir ein Sauberkeitsniveau, das mit herkömmlichen 
              Mitteln nicht möglich ist. Erleben Sie den Unterschied - Ihre Räume werden strahlen!
            </p>
            <div className="text-center">
              <Link 
                href="/kontakt"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-cyan-900 bg-white hover:bg-cyan-50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Jetzt Angebot einholen
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
