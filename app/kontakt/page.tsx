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
      {/* Hero Section - Compact on Mobile, Full on Desktop */}
      <Section background="white" padding="small" className="relative pb-0 pt-4 md:pt-8 lg:pt-12">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-3 hidden md:block">
              <span className="inline-block text-accent font-bold text-xs uppercase tracking-[0.3em]">
                Kontakt & Beratung
              </span>
            </div>
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-2 md:mb-4 leading-tight">
              <span className="text-accent">Kontakt</span> aufnehmen
            </h1>
            <p className="text-sm md:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              <span className="md:hidden">Formular ausfüllen oder direkt anrufen.</span>
              <span className="hidden md:inline">Füllen Sie das Formular aus oder kontaktieren Sie uns direkt. Unser Team antwortet innerhalb von 10 Minuten – oder sofort per WhatsApp.</span>
            </p>
          </div>
          
          {/* Mobile Quick Contact - Compact Horizontal */}
          <div className="flex gap-2 mt-4 lg:hidden">
            <a
              href="tel:+4917679567083"
              className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-secondary/10 border border-secondary/30 text-secondary font-semibold text-sm"
            >
              <Phone className="w-4 h-4" />
              Anrufen
            </a>
            <a
              href="https://wa.me/4917679567083?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl bg-green-500 text-white font-semibold text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </Container>
      </Section>

      {/* Main Contact Section */}
      <Section background="white" padding="small" className="relative pt-4 md:pt-8 lg:pt-12" id="contact-form">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-16">
            {/* Form First on Mobile */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {/* Card Container */}
              <div className="bg-white border-2 border-secondary/20 rounded-xl md:rounded-2xl shadow-lg p-4 md:p-8 lg:p-12 lg:sticky lg:top-28">
                <div className="mb-4 md:mb-8 hidden md:block">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 mb-2 md:mb-3">
                    Kontaktformular
                  </h2>
                  <p className="text-neutral-600 text-sm md:text-lg">
                    Füllen Sie das Formular aus und erhalten Sie innerhalb von 24 Stunden ein personalisiertes Angebot.
                  </p>
                </div>

                {/* Mobile: simpler form, Desktop: full form */}
                <div className="lg:hidden">
                  <ContactForm showPropertyType={false} showBudget={false} />
                </div>
                <div className="hidden lg:block">
                  <ContactForm showPropertyType={true} showBudget={true} />
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 hidden md:grid grid-cols-2 gap-4 lg:gap-6">
                <div className="bg-gradient-to-br from-secondary/20 to-blue-100 border-2 border-secondary/30 rounded-xl p-4 lg:p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl lg:text-3xl font-black text-secondary mb-1 lg:mb-2">100%</div>
                  <p className="text-xs lg:text-sm font-bold text-neutral-700">Kostenlose Erstberatung</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 border-2 border-green-300 rounded-xl p-4 lg:p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="text-2xl lg:text-3xl font-black text-green-600 mb-1 lg:mb-2">~2h</div>
                  <p className="text-xs lg:text-sm font-bold text-neutral-700">Durchschnittliche Antwortzeit</p>
                </div>
              </div>
            </div>

            {/* Sidebar - Hidden on mobile, shown on desktop */}
            <div className="lg:col-span-1 order-2 lg:order-1 hidden lg:block space-y-8">
              {/* Quick Contact Methods - Desktop only */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-600 mb-6">
                  Schneller Kontakt
                </h3>

                <a
                  href="tel:+4917679567083"
                  className="group flex items-start gap-4 p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 border-2 border-secondary/30 hover:border-secondary/80 hover:shadow-lg"
                >
                  <div className="w-14 h-14 bg-secondary/15 rounded-xl flex items-center justify-center group-hover:bg-secondary/25 transition-colors flex-shrink-0">
                    <Phone className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-[0.1em] text-neutral-600">Telefon</div>
                    <div className="text-lg font-bold text-neutral-900 group-hover:text-secondary transition-colors">+49 176 79567083</div>
                    <div className="text-sm text-neutral-500 mt-1">Mo-Fr 7:00-18:00 Uhr</div>
                  </div>
                </a>

                <a
                  href="mailto:info@bcgroup.berlin"
                  className="group flex items-start gap-4 p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 border-2 border-secondary/30 hover:border-secondary/80 hover:shadow-lg"
                >
                  <div className="w-14 h-14 bg-secondary/15 rounded-xl flex items-center justify-center group-hover:bg-secondary/25 transition-colors flex-shrink-0">
                    <Mail className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-[0.1em] text-neutral-600">E-Mail</div>
                    <div className="text-lg font-bold text-neutral-900 group-hover:text-secondary transition-colors">info@bcgroup.berlin</div>
                    <div className="text-sm text-neutral-500 mt-1">Antwort in 24 Stunden</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/4917679567083?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border-2 border-green-400 hover:border-green-500 shadow-lg hover:shadow-xl"
                >
                  <div className="w-14 h-14 bg-green-500/25 rounded-xl flex items-center justify-center group-hover:bg-green-500/35 transition-colors flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-[0.1em] text-green-700">WhatsApp Chat (24/7)</div>
                    <div className="text-lg font-bold text-green-900">Sofort starten</div>
                    <div className="text-sm text-green-700 mt-1">⏱️ Durchschnitt: 10 Minuten</div>
                  </div>
                </a>
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
      <Section padding="medium" className="relative bg-neutral-900">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary rounded-full blur-[120px]" />
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
              href="https://wa.me/4917679567083"
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
