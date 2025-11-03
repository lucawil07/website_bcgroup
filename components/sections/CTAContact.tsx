import Link from 'next/link'
import { Button, Section, Container } from '@/components/ui'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'

export default function CTAContact() {
  return (
    <Section background="white" padding="large" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Premium CTA Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl border border-neutral-100">
          {/* Left side - Contact Form CTA */}
          <div
            className="relative p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)',
            }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-subtle" />
              <div
                className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-subtle"
                style={{ animationDelay: '1.5s' }}
              />
            </div>

            <div className="relative z-10 space-y-6 md:space-y-8">
              <div className="inline-block">
                <span className="glass-dark px-4 py-2 md:px-6 md:py-3 rounded-full text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] inline-block">
                  Kostenloses Angebot
                </span>
              </div>

              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
                  Bereit für Ihr <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">Projekt?</span>
                </h2>
              </div>

              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-lg">
                Schildern Sie Ihre Anforderungen und erhalten Sie innerhalb von 2 Stunden ein
                personalisiertes, unverbindliches Angebot.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm md:text-base">✓ 100% kostenlose Beratung</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm md:text-base">✓ Unverbindliche Angebote</span>
                </div>
                <div className="flex items-center gap-3 text-white/90">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm md:text-base">✓ Zertifizierte Profis</span>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/kontakt">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="hover:bg-white/20 min-w-fit border-2 border-white hover:border-secondary"
                    style={{ color: '#ffffff' }}
                    icon={<ArrowRight className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    ZUM KONTAKTFORMULAR
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - WhatsApp Quick Contact */}
          <div className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden">
            {/* Animated overlay pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-subtle" />
            </div>

            <div className="relative z-10 space-y-6 md:space-y-8">
              <div className="inline-block">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 md:px-6 md:py-3 rounded-full text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                  Sofort erreichbar
                </span>
              </div>

              <div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                  WhatsApp <span className="block">Direktchat</span>
                </h3>
              </div>

              <p className="text-lg md:text-xl text-white/95 leading-relaxed max-w-md">
                Chatten Sie mit unserem Team und erhalten Sie Antworten in durchschnittlich 2 Minuten.
                Verfügbar 24/7.
              </p>

              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm md:text-base">✓ Schnelle Antworten</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm md:text-base">✓ 24/7 verfügbar</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span className="text-sm md:text-base">✓ Persönliche Beratung</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/4930123456?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Start WhatsApp chat with BC Group (opens in new window)"
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className="hover:bg-white/20 min-w-fit border-2 border-white hover:border-gray-100"
                    style={{ backgroundColor: '#ffffff', color: '#16a34a' }}
                    icon={<MessageCircle className="w-5 h-5" />}
                    iconPosition="left"
                  >
                    CHAT STARTEN
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 md:mt-20">
          <div className="text-center mb-12">
            <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-neutral-600">
              Warum uns vertrauen?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Trust Item 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl mb-4">
                <span className="text-3xl md:text-4xl font-black text-blue-600">1</span>
              </div>
              <h4 className="font-bold text-neutral-900 text-lg md:text-xl mb-2">
                Schnelle Antworten
              </h4>
              <p className="text-neutral-600 text-sm md:text-base">
                Durchschnittliche Antwortzeit: 2 Stunden
              </p>
            </div>

            {/* Trust Item 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl mb-4">
                <span className="text-3xl md:text-4xl font-black text-green-600">2</span>
              </div>
              <h4 className="font-bold text-neutral-900 text-lg md:text-xl mb-2">
                Zertifiziert & Professionell
              </h4>
              <p className="text-neutral-600 text-sm md:text-base">
                Über 10 Jahre Erfahrung in Berlin
              </p>
            </div>

            {/* Trust Item 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl mb-4">
                <span className="text-3xl md:text-4xl font-black text-orange-600">3</span>
              </div>
              <h4 className="font-bold text-neutral-900 text-lg md:text-xl mb-2">
                Transparent & Fair
              </h4>
              <p className="text-neutral-600 text-sm md:text-base">
                Keine versteckten Kosten, faire Preise
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
