import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { LockKeyhole, CheckCircle, Shield, Calendar, Thermometer, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Lagerlösung Berlin - Sichere Zwischenlagerung für Umzüge | BC Group',
  description: 'Flexible Lagerlösung in Berlin: Sichere, klimatisierte Einlagerung Ihrer Möbel und Gegenstände. Versichert und jederzeit zugänglich für Ihren Umzug.',
  keywords: 'lagerung berlin, möbellagerung, zwischenlagerung umzug, einlagerung möbel, self storage berlin',
}

export default function LagerloesungPage() {
  const accent = '#f97316'

  const benefits = [
    {
      icon: Shield,
      title: 'Vollversichert',
      description: 'Umfassender Versicherungsschutz für alle eingelagerten Gegenstände',
    },
    {
      icon: Calendar,
      title: 'Flexible Laufzeit',
      description: 'Keine Mindestlaufzeit – Sie lagern so lange wie Sie benötigen',
    },
    {
      icon: Thermometer,
      title: 'Klimatisiert',
      description: 'Trockene, saubere und temperaturgeregelte Lagerflächen',
    },
  ]

  const services = [
    'Professionelle Verpackung',
    'Abhol- und Lieferservice',
    'Inventarisierung aller Gegenstände',
    'Klimatisierte Lagerhallen',
    '24/7 Überwachung und Sicherheit',
    'Flexible Ein- und Auslagerung',
    'Kurz- und Langzeitlagerung',
    'Versicherungsschutz inklusive',
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Bedarfsermittlung',
      description: 'Wir ermitteln den benötigten Lagerraum basierend auf Ihrem Umzugsvolumen. Sie erhalten ein transparentes Angebot mit monatlichen Kosten und allen Leistungen.',
    },
    {
      step: '2',
      title: 'Abholung & Einlagerung',
      description: 'Wir holen Ihre Gegenstände ab, verpacken sie professionell und transportieren alles in unser Lager. Jedes Teil wird inventarisiert und sicher eingelagert.',
    },
    {
      step: '3',
      title: 'Sichere Lagerung',
      description: 'Ihre Gegenstände werden in klimatisierten, überwachten Räumen gelagert. Sie haben jederzeit Zugriff und können bei Bedarf einzelne Gegenstände entnehmen.',
    },
    {
      step: '4',
      title: 'Auslieferung',
      description: 'Wenn Sie Ihre Gegenstände benötigen, liefern wir alles zum gewünschten Termin aus – ob komplett oder nur Teile davon.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-orange-50 via-amber-50 to-white">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/5 via-transparent to-amber-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Umzug', href: '/services/umzug' },
              { label: 'Lagerlösung' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-100 border border-orange-200">
              <LockKeyhole className="w-4 h-4 text-orange-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-orange-900">
                Lagerlösung
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Sichere Zwischenlagerung für Ihre Möbel
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              Flexible Umzugsplanung durch professionelle Lagerlösungen: Wir lagern Ihre Möbel und 
              Gegenstände sicher ein – ob für wenige Tage oder mehrere Monate. Klimatisiert, versichert 
              und jederzeit für Sie zugänglich.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Lagerplatz anfragen
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Warum unsere Lagerlösung?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg"
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
      <Section padding="large" className="bg-gradient-to-b from-white to-orange-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unser Lagerservice umfasst
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir bieten einen umfassenden Lagerservice mit Full-Service:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-orange-100 hover:border-orange-300 transition-colors"
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
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
              So funktioniert die Einlagerung
            </h2>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-white border border-orange-100"
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

      {/* Use Cases */}
      <Section padding="large" className="bg-gradient-to-b from-white to-orange-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Wann ist eine Lagerlösung sinnvoll?
            </h2>
            
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Zeitliche Lücke zwischen Aus- und Einzug
                </h3>
                <p className="text-neutral-700">
                  Ihr Mietvertrag endet, aber die neue Wohnung ist noch nicht bezugsfertig? 
                  Wir lagern Ihre Möbel sicher ein, bis Sie einziehen können.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Verkleinerung der Wohnfläche
                </h3>
                <p className="text-neutral-700">
                  Sie ziehen in eine kleinere Wohnung? Lagern Sie Möbel und Gegenstände ein, 
                  die Sie später wieder benötigen oder verkaufen möchten.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Renovierung der Wohnung
                </h3>
                <p className="text-neutral-700">
                  Während umfangreicher Renovierungsarbeiten bieten wir Platz für Ihre Möbel, 
                  damit diese geschützt bleiben und Sie freien Raum zum Arbeiten haben.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-orange-100">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  Auslandsaufenthalt
                </h3>
                <p className="text-neutral-700">
                  Bei vorübergehenden Auslandsaufenthalten lagern wir Ihr Hab und Gut sicher ein – 
                  für Monate oder sogar Jahre.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing Info */}
      <Section padding="large" className="bg-gradient-to-br from-orange-900 to-amber-800 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Flexible Preismodelle
            </h2>
            <p className="text-lg text-orange-100 mb-8 leading-relaxed">
              Die Kosten für die Lagerung richten sich nach dem benötigten Lagerraum und der Lagerdauer. 
              Wir bieten monatliche Abrechnung ohne Mindestlaufzeit. Versicherung und Überwachung sind 
              im Preis enthalten. Kontaktieren Sie uns für ein individuelles Angebot.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-orange-900 bg-white hover:bg-orange-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Jetzt Angebot einholen
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
