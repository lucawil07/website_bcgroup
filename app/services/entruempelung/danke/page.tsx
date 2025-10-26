import type { Metadata } from 'next'
import Link from 'next/link'
import { Section, Container, Button } from '@/components/ui'
import { CheckCircle2, Clock, Calendar, FileCheck, Phone, MessageCircle, Mail, ArrowRight, Sparkles, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anfrage erfolgreich gesendet | BC Group Berlin',
  description: 'Vielen Dank für Ihre Entrümpelung Anfrage. Wir melden uns schnellstmöglich bei Ihnen.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DankePage() {
  return (
    <>
      {/* Success Hero */}
      <Section background="gradient" padding="large">
        <Container size="default">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-2xl animate-scale-in">
              <CheckCircle2 className="w-14 h-14 text-green-500" strokeWidth={2.5} />
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-white uppercase">
                Vielen Dank für<br />
                <span className="gradient-text bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Ihre Anfrage!</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Wir haben Ihre Anfrage erfolgreich erhalten und werden uns <strong className="text-accent">schnellstmöglich</strong> bei Ihnen melden.
              </p>
            </div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 text-white">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="font-bold text-sm">Kostenlos & Unverbindlich</span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Timeline Section */}
      <Section background="white" padding="large">
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
                Was passiert jetzt?
              </h2>
              <p className="text-lg text-neutral-600">
                Ihr Weg zum Festpreis-Angebot in nur 3 Schritten
              </p>
            </div>

            {/* Timeline Steps */}
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="relative flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <div className="inline-block bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full mb-3">
                    ⚡ Innerhalb von 2 Stunden
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    1. Prüfung Ihrer Anfrage
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Wir prüfen Ihre Angaben sorgfältig und bereiten Ihr individuelles Angebot vor. 
                    Falls wir noch Rückfragen haben, melden wir uns telefonisch oder per E-Mail bei Ihnen.
                  </p>
                </div>
              </div>

              <div className="ml-8 w-1 h-12 bg-gradient-to-b from-secondary to-accent rounded-full" />

              {/* Step 2 */}
              <div className="relative flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <div className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-3">
                    💡 Kostenlos & unverbindlich
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    2. Besichtigungstermin vereinbaren
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Für ein verbindliches Festpreis-Angebot empfehlen wir einen <strong>kostenlosen Besichtigungstermin</strong>. 
                    So können wir den Aufwand genau einschätzen und Ihnen ein faires, transparentes Angebot erstellen.
                  </p>
                  <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
                    <p className="text-sm text-blue-900">
                      <strong>➡️ Keine Sorge:</strong> Der Termin ist völlig unverbindlich und kostenlos. 
                      Sie gehen keinerlei Verpflichtungen ein.
                    </p>
                  </div>
                </div>
              </div>

              <div className="ml-8 w-1 h-12 bg-gradient-to-b from-accent to-green-500 rounded-full" />

              {/* Step 3 */}
              <div className="relative flex gap-6 items-start group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <FileCheck className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 pt-1">
                  <div className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full mb-3">
                    🔒 Festpreis-Garantie
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    3. Ihr Festpreis-Angebot
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Sie erhalten ein <strong>transparentes Festpreis-Angebot</strong> ohne versteckte Kosten. 
                    Was wir Ihnen anbieten, ist genau das, was Sie auch bezahlen – garantiert!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* WhatsApp Quick Contact */}
      <Section background="light" padding="large">
        <Container size="default">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-[#25D366] to-[#20BA5A] rounded-3xl p-8 md:p-12 text-center shadow-2xl text-white">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Noch schneller per WhatsApp
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Sie möchten noch schneller eine Antwort? Schreiben Sie uns direkt per WhatsApp – 
                wir antworten in der Regel innerhalb weniger Minuten!
              </p>

              <a
                href="https://wa.me/49301234567?text=Hallo,%20ich%20habe%20gerade%20eine%20Anfrage%20für%20eine%20Entrümpelung%20gesendet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  variant="ghost" 
                  size="lg"
                  className="!bg-white !text-[#25D366] hover:!bg-white/90 font-bold text-lg px-8 py-6 shadow-2xl"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  WhatsApp Direktkontakt
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </a>

              <p className="text-sm text-white/80 mt-6">
                Tipp: Sie können auch Fotos direkt per WhatsApp senden!
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Options */}
      <Section background="white" padding="large">
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
                So erreichen Sie uns
              </h2>
              <p className="text-lg text-neutral-600">
                Wir sind für Sie da – kontaktieren Sie uns auf Ihrem bevorzugten Weg
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phone */}
              <a
                href="tel:+49301234567"
                className="group p-8 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border-2 border-neutral-200 hover:border-secondary hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">Telefon</h3>
                <p className="text-secondary font-bold text-lg">+49 30 123 456</p>
                <p className="text-sm text-neutral-600 mt-2">Mo–Fr: 8–18 Uhr<br />Sa: 9–14 Uhr</p>
              </a>

              {/* Email */}
              <a
                href="mailto:info@bcgroup-berlin.de"
                className="group p-8 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border-2 border-neutral-200 hover:border-accent hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">E-Mail</h3>
                <p className="text-accent font-bold text-lg break-all">info@bcgroup-berlin.de</p>
                <p className="text-sm text-neutral-600 mt-2">Antwort innerhalb<br />von 2 Stunden</p>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/49301234567"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-8 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border-2 border-neutral-200 hover:border-[#25D366] hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-[#25D366]" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">WhatsApp</h3>
                <p className="text-[#25D366] font-bold text-lg">+49 30 123 456</p>
                <p className="text-sm text-neutral-600 mt-2">Schnellste<br />Antwortzeit</p>
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* Trust Badges */}
      <Section background="light" padding="large">
        <Container size="default">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <Shield className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">Festpreisgarantie</h3>
                <p className="text-sm text-neutral-600">Keine versteckten Kosten</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">Kostenlos & unverbindlich</h3>
                <p className="text-sm text-neutral-600">Keine Verpflichtungen</p>
              </div>
              <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                <Sparkles className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">10+ Jahre Erfahrung</h3>
                <p className="text-sm text-neutral-600">Über 5000 zufriedene Kunden</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Back to Service Page */}
      <Section background="white" padding="large">
        <Container size="default">
          <div className="text-center">
            <Link href="/services/entruempelung">
              <Button variant="secondary" size="lg">
                <ArrowRight className="w-5 h-5 mr-2 rotate-180" />
                Zurück zur Entrümpelung Seite
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
