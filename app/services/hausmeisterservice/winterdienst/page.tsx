import { Metadata } from 'next'
import Link from 'next/link'
import { Container, Section } from '@/components/ui'
import Breadcrumb from '@/components/ui/Breadcrumb'
import { CTAContact } from '@/components/sections'
import { ThermometerSun, CheckCircle, Clock, AlertTriangle, FileText, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Winterdienst Berlin - Schneeräumung & Streudienst 24/7 | BC Group',
  description: 'Professioneller Winterdienst in Berlin: Schneeräumung, Streudienst und 24/7 Rufbereitschaft. Rechtssicher und zuverlässig durch BC Hausmeisterservice.',
  keywords: 'winterdienst berlin, schneeräumung, streudienst, räumpflicht berlin, verkehrssicherungspflicht winter',
}

export default function WinterdienstPage() {
  const accent = '#8b5cf6'

  const benefits = [
    {
      icon: Clock,
      title: '24/7 Rufbereitschaft',
      description: 'Ständige Erreichbarkeit während der gesamten Wintersaison',
    },
    {
      icon: Shield,
      title: 'Rechtssicher',
      description: 'Erfüllung aller Verkehrssicherungspflichten',
    },
    {
      icon: FileText,
      title: 'Dokumentiert',
      description: 'Lückenlose Dokumentation aller Winterdiensteinsätze',
    },
  ]

  const winterServices = [
    'Schneeräumung von Gehwegen & Zufahrten',
    'Streudienst mit zugelassenen Streumitteln',
    'Kontrollfahrten bei Schneefall oder Frost',
    '24/7 Rufbereitschaft in der Wintersaison',
    'Räumung von Parkplätzen & Stellflächen',
    'Eisbeseitigung an kritischen Stellen',
    'Dokumentation aller Einsätze',
    'Erfüllung der Verkehrssicherungspflicht',
  ]

  const legalInfo = [
    {
      title: 'Räumpflicht in Berlin',
      description: 'Grundstückseigentümer sind verpflichtet, Gehwege vor ihrem Objekt von Schnee und Eis zu befreien.',
      time: 'Werktags: 7-20 Uhr | Sonn-/Feiertags: 9-20 Uhr',
    },
    {
      title: 'Streupflicht',
      description: 'Bei Glätte muss gestreut werden. Salzstreuen ist nur in Ausnahmefällen erlaubt.',
      time: 'Abstumpfende Mittel bevorzugen',
    },
    {
      title: 'Haftung',
      description: 'Bei Unfällen durch unterlassene Schneeräumung haften Eigentümer bzw. beauftragte Dienstleister.',
      time: 'Versicherungsschutz wichtig',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <Section padding="large" className="relative overflow-hidden pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-800/5 via-transparent to-cyan-600/5" />
        
        <Container size="default" className="relative z-10">
          <Breadcrumb 
            items={[
              { label: 'Services', href: '/#content-start' },
              { label: 'Hausmeisterservice', href: '/services/hausmeisterservice' },
              { label: 'Winterdienst' },
            ]}
            accentColor={accent}
          />

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-blue-100 border border-blue-200">
              <ThermometerSun className="w-4 h-4 text-blue-700" />
              <span className="text-sm font-bold uppercase tracking-wider text-blue-900">
                Winterdienst
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-neutral-900 leading-tight">
              Winterdienst in Berlin
            </h1>

            <p className="text-xl text-neutral-700 leading-relaxed mb-8">
              BC Hausmeisterservice übernimmt Ihren kompletten Winterdienst in Berlin – pünktlich, 
              gründlich und rechtssicher. Mit 24/7 Rufbereitschaft sind wir für Sie da.
            </p>

            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: accent }}
            >
              Winterdienst anfragen
            </Link>
          </div>
        </Container>
      </Section>

      {/* Benefits Section */}
      <Section padding="large" background="white">
        <Container size="default">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12 text-center">
            Ihr verlässlicher Winterdienst
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div 
                  key={index}
                  className="p-6 rounded-2xl border-2 border-neutral-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg"
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

      {/* Winter Services */}
      <Section padding="large" className="bg-gradient-to-b from-white to-blue-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8 text-center">
              Unsere Winterdienst-Leistungen
            </h2>
            
            <p className="text-lg text-neutral-700 mb-8 text-center">
              Wir sorgen dafür, dass Ihre Immobilie auch im Winter sicher und begehbar bleibt:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {winterServices.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-blue-100 hover:border-blue-300 transition-colors"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  <span className="text-neutral-800 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Legal Requirements */}
      <Section padding="large" background="white">
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="w-8 h-8" style={{ color: accent }} />
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Gesetzliche Vorgaben in Berlin
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {legalInfo.map((info, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:border-blue-300 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {info.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed mb-4">
                    {info.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold">
                    <Clock className="w-4 h-4" />
                    {info.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Details Section */}
      <Section padding="large" className="bg-gradient-to-b from-white to-blue-50">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-8">
              So funktioniert unser Winterdienst
            </h2>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-white border border-blue-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Wetterkontrolle & Einsatzplanung
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Unser Team überwacht die Wetterlage kontinuierlich. Bei Schneefall oder angekündigtem Frost 
                  werden unsere Winterdienstteams rechtzeitig alarmiert. Durch vorausschauende Planung stellen 
                  wir sicher, dass Ihre Objekte bereits frühmorgens geräumt und gestreut sind.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-blue-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Kontrollfahrten & Nachstreuen
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Bei anhaltendem Schneefall oder starkem Frost führen wir mehrmals täglich Kontrollfahrten durch. 
                  Neuer Schnee wird sofort entfernt, vereiste Stellen werden nachgestreut. So garantieren wir 
                  durchgehende Verkehrssicherheit während der gesamten Winterperiode.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-blue-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Dokumentation & Nachweispflicht
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Jeder Winterdiensteinsatz wird von uns dokumentiert: Datum, Uhrzeit, durchgeführte Arbeiten 
                  und eingesetzte Materialien. Diese lückenlose Dokumentation schützt Sie im Schadensfall und 
                  erfüllt alle rechtlichen Anforderungen zur Nachweisführung.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-blue-100">
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  Streumittel & Umweltschutz
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  Wir verwenden vorrangig abstumpfende, umweltfreundliche Streumittel wie Sand oder Splitt. 
                  Auftausalze setzen wir nur ein, wenn dies zwingend erforderlich ist oder von Ihnen gewünscht wird. 
                  Nach dem Winter entfernen wir Streumittelreste fachgerecht von Ihren Flächen.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section padding="large" className="bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Sicher durch den Winter
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Übertragen Sie uns die Verantwortung für Ihren Winterdienst. Wir sorgen für geräumte Wege, 
              erfüllte Verkehrssicherungspflichten und Ihre rechtliche Absicherung.
            </p>
            <Link 
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-blue-900 bg-white hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Winterdienst buchen
            </Link>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <CTAContact />
    </>
  )
}
