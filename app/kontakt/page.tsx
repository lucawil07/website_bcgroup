import type { Metadata } from 'next'
import { Section, Container } from '@/components/ui'
import ContactForm from '@/components/forms/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt | BC Group Berlin - Ihre Serviceexperten',
  description:
    'Kontaktieren Sie BC Group Berlin für professionelle Services. Persönliche Beratung, schnelle Angebote, 24/7 WhatsApp Support.',
  keywords:
    'Kontakt BC Group, Anfrage Berlin, Service anfragen, Beratung, Angebot',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section background="white" padding="medium" className="relative pb-0">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-3">
              <span className="inline-block text-accent font-bold text-xs uppercase tracking-[0.3em]">
                Kontakt & Beratung
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-3 leading-tight">
              <span className="text-accent">Kontakt</span>
              <br />
              aufnehmen
            </h1>

            <p className="text-base md:text-lg text-neutral-700 leading-relaxed max-w-2xl">
              Füllen Sie das Formular aus oder kontaktieren Sie uns direkt. Unser Team antwortet 
              innerhalb von 10 Minuten – oder sofort per WhatsApp.
            </p>
          </div>
        </Container>
      </Section>

      {/* Main Contact Section */}
      <Section background="white" padding="medium" className="relative">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Sidebar - Contact Info & Quick Links */}
            <div className="lg:col-span-1 space-y-8">
              {/* Quick Contact Methods */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-600 mb-6">
                  Schneller Kontakt
                </h3>

                {/* Phone */}
                <a
                  href="tel:+49301234567"
                  className="group flex items-start gap-4 p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 border-2 border-secondary/30 hover:border-secondary/80 hover:shadow-lg"
                >
                  <div className="w-14 h-14 bg-secondary/15 rounded-xl flex items-center justify-center group-hover:bg-secondary/25 transition-colors flex-shrink-0">
                    <Phone className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-[0.1em] text-neutral-600">
                      Telefon
                    </div>
                    <div className="text-lg font-bold text-neutral-900 group-hover:text-secondary transition-colors">
                      +49 30 123 456 7
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">Mo-Fr 7:00-18:00 Uhr</div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@bcgroup-berlin.de"
                  className="group flex items-start gap-4 p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 border-2 border-secondary/30 hover:border-secondary/80 hover:shadow-lg"
                >
                  <div className="w-14 h-14 bg-secondary/15 rounded-xl flex items-center justify-center group-hover:bg-secondary/25 transition-colors flex-shrink-0">
                    <Mail className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-[0.1em] text-neutral-600">
                      E-Mail
                    </div>
                    <div className="text-lg font-bold text-neutral-900 group-hover:text-secondary transition-colors">
                      info@bcgroup-berlin.de
                    </div>
                    <div className="text-sm text-neutral-500 mt-1">Antwort in 24 Stunden</div>
                  </div>
                </a>

                {/* WhatsApp - Highlighted */}
                <a
                  href="https://wa.me/49301234567?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border-2 border-green-400 hover:border-green-500 shadow-lg hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-green-500/25 rounded-xl flex items-center justify-center group-hover:bg-green-500/35 transition-colors flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-[0.1em] text-green-700">
                      WhatsApp Chat (24/7)
                    </div>
                    <div className="text-lg font-bold text-green-900">Sofort starten</div>
                    <div className="text-sm text-green-700 mt-1">⏱️ Durchschnitt: 10 Minuten</div>
                  </div>
                </a>
              </div>

              {/* Office Info */}
              <div className="space-y-4 pt-8 border-t border-neutral-200">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-600">
                  Bürostandort
                </h3>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <address className="text-neutral-700 not-italic leading-relaxed font-medium">
                      Musterstraße 123
                      <br />
                      10115 Berlin
                      <br />
                      Deutschland
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div className="text-sm text-neutral-700 space-y-1">
                    <p className="font-bold">Öffnungszeiten</p>
                    <p>Mo - Fr: 7:00 - 18:00 Uhr</p>
                    <p>Sa: 8:00 - 14:00 Uhr</p>
                    <p className="text-green-600 font-bold">Sonntag & Notfall: 24/7</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="space-y-4 pt-8 border-t border-neutral-200">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-600">
                  Warum uns wählen?
                </h3>

                <div className="space-y-3">
                {[
                    'Kostenlose Beratung',
                    'Unverbindliche Angebote',
                    'Zertifizierte Profis',
                    '24/7 Erreichbarkeit',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="lg:col-span-2">
              {/* Card Container */}
              <div className="bg-white border-2 border-secondary/20 rounded-2xl shadow-xl p-8 md:p-12 sticky top-28">
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-3">
                    Kontaktformular
                  </h2>
                  <p className="text-neutral-600 text-lg">
                    Füllen Sie das Formular aus und erhalten Sie innerhalb von 24 Stunden ein
                    personalisiertes Angebot.
                  </p>
                </div>

                <ContactForm showPropertyType={true} showBudget={true} />
              </div>

              {/* Additional Info */}
              <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-secondary/20 to-blue-100 border-2 border-secondary/30 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-black text-secondary mb-2">100%</div>
                  <p className="text-sm font-bold text-neutral-700">
                    Kostenlose Erstberatung
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-300 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-black text-green-600 mb-2">~2h</div>
                  <p className="text-sm font-bold text-neutral-700">
                    Durchschnittliche Antwortzeit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Services Overview Section */}
      <Section background="light" padding="medium">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Alle unsere Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Wählen Sie aus unserem breiten Leistungsangebot – oder kombinieren Sie mehrere
              Services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Entrümpelung',
                description: 'Professionelle Entrümpelung von Wohnungen und Gewerberäumen',
              },
              {
                title: 'Abriss',
                description: 'Sichere und fachgerechte Abrissarbeiten mit entsorgung',
              },
              {
                title: 'Reinigung',
                description: 'Gründliche Reinigung von Objekten aller Art',
              },
              {
                title: 'Hausmeisterservice',
                description: 'Zuverlässige Hausmeistertätigkeit und Instandhaltung',
              },
              {
                title: 'Umzug & Transport',
                description: 'Professioneller Umzugsservice mit erfahrenem Team',
              },
              {
                title: 'Kurierdienst',
                description: 'Schnelle und sichere Zustellung in Berlin',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-neutral-200 hover:border-secondary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-xl font-bold text-secondary">{idx + 1}</div>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section background="dark" padding="medium" className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>

        <Container className="relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Noch Fragen? <span className="text-secondary">Wir helfen gerne!</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Nehmen Sie Kontakt mit uns auf und erhalten Sie eine kostenlose Erstberatung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-blue-700 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-secondary/50 uppercase tracking-[0.1em]"
            >
              Kontaktformular ausfüllen
            </a>
            <a
              href="https://wa.me/49301234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 uppercase tracking-[0.1em]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Chat
            </a>
          </div>
        </Container>
      </Section>
    </>
  )
}
