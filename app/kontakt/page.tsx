import type { Metadata } from 'next'
import { Section, Container } from '@/components/ui'
import ContactForm from '@/components/forms/ContactForm'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Kontakt | BC Group Berlin',
  description: 'Kontaktieren Sie die BC Group für alle Ihre Serviceanfragen in Berlin. Telefon, E-Mail, WhatsApp oder Kontaktformular.',
  keywords: 'Kontakt BC Group, Anfrage Berlin, Service anfragen',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <Section background="dark" padding="medium" className="pt-32">
        <Container className="text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase mb-4">
            KONTAKT
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Wir sind für Sie da – persönlich, telefonisch oder per E-Mail
          </p>
        </Container>
      </Section>

      {/* Contact Info & Form */}
      <Section background="white" padding="large">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Kontaktinformationen</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Telefon</h3>
                      <a
                        href="tel:+49301234567"
                        className="text-neutral-600 hover:text-secondary transition-colors"
                      >
                        +49 30 123 456 7
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">E-Mail</h3>
                      <a
                        href="mailto:info@bcgroup-berlin.de"
                        className="text-neutral-600 hover:text-secondary transition-colors"
                      >
                        info@bcgroup-berlin.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/49301234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-600 hover:text-secondary transition-colors"
                      >
                        +49 30 123 456 7
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold mb-1">Adresse</h3>
                      <address className="text-neutral-600 not-italic">
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
                    <div>
                      <h3 className="font-bold mb-1">Öffnungszeiten</h3>
                      <div className="text-neutral-600 space-y-1">
                        <p>Mo - Fr: 07:00 - 18:00 Uhr</p>
                        <p>Sa: 08:00 - 14:00 Uhr</p>
                        <p>So: Geschlossen</p>
                        <p className="text-sm mt-2">Notdienst nach Vereinbarung</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-[#25D366] text-white rounded-sm p-6">
                <MessageCircle className="w-10 h-10 mb-3" />
                <h3 className="text-xl font-bold mb-2">Schnelle Antwort per WhatsApp</h3>
                <p className="text-sm mb-4 opacity-90">
                  Chatten Sie direkt mit uns und erhalten Sie schnelle Antworten auf Ihre Fragen.
                </p>
                <a
                  href="https://wa.me/49301234567?text=Hallo,%20ich%20habe%20eine%20Frage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#25D366] font-bold px-6 py-3 rounded-sm hover:bg-neutral-100 transition-colors"
                >
                  Chat starten
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-sm p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-2">Schreiben Sie uns</h2>
                <p className="text-neutral-600 mb-8">
                  Füllen Sie das Formular aus und wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Map Section */}
      <Section background="light" padding="large">
        <Container size="wide">
          <h2 className="text-3xl font-bold text-center mb-8">So finden Sie uns</h2>
          <div className="aspect-video bg-neutral-300 rounded-sm overflow-hidden">
            {/* Placeholder for map - in production, use Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center text-neutral-600">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Musterstraße 123, 10115 Berlin</p>
                <p className="text-sm mt-2">
                  Google Maps Integration wird hier angezeigt
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
