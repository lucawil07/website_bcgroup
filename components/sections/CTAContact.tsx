import Link from 'next/link'
import { Button, Section, Container } from '@/components/ui'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'

export default function CTAContact() {
  return (
    <Section background="white" padding="medium" className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Premium CTA Container - Compact & Professional */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-xl border border-neutral-100">
          {/* Left side - Contact Form CTA */}
          <div
            className="relative p-6 md:p-8 lg:p-10 flex flex-col justify-center overflow-hidden min-h-[450px] sm:min-h-[400px]"
            style={{
              background: 'linear-gradient(135deg, #0a1929 0%, #0f2f51 25%, #164e63 50%, #0066CC 100%)',
            }}
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-subtle" />
              <div
                className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300 rounded-full blur-3xl animate-pulse-subtle"
                style={{ animationDelay: '1.5s' }}
              />
            </div>

            <div className="relative z-10 space-y-4 md:space-y-5">
              <div className="inline-block">
                <span className="glass-dark px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider inline-block">
                  Kostenloses Angebot
                </span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 leading-tight">
                  Bereit für Ihr <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-200">Projekt?</span>
                </h2>
              </div>

              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-lg">
                Schildern Sie Ihre Anforderungen und erhalten Sie innerhalb von 2 Stunden ein
                personalisiertes, unverbindliches Angebot.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-white/90">
                  <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full" />
                  <span className="text-sm">✓ 100% kostenlose Beratung</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/90">
                  <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full" />
                  <span className="text-sm">✓ Unverbindliche Angebote</span>
                </div>
                <div className="flex items-center gap-2.5 text-white/90">
                  <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full" />
                  <span className="text-sm">✓ Zertifizierte Profis</span>
                </div>
              </div>

              <div className="pt-3">
                <Link href="/kontakt" className="block sm:inline-block">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto hover:bg-white/20 border-2 border-white hover:border-cyan-300 transition-all duration-300"
                    style={{ color: '#ffffff' }}
                    icon={<ArrowRight className="w-5 h-5" />}
                    iconPosition="right"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-bold">ZUM KONTAKTFORMULAR</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - WhatsApp Quick Contact */}
          <div className="relative bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 p-6 md:p-8 lg:p-10 flex flex-col justify-center overflow-hidden min-h-[450px] sm:min-h-[400px] border-t lg:border-t-0 lg:border-l border-white/10">
            {/* Animated overlay pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse-subtle" />
            </div>

            <div className="relative z-10 space-y-4 md:space-y-5">
              <div className="inline-block">
                <span className="bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-white text-xs font-bold uppercase tracking-wider">
                  Sofort erreichbar
                </span>
              </div>

              <div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-3">
                  WhatsApp <span className="block sm:inline">Direktchat</span>
                </h3>
              </div>

              <p className="text-base md:text-lg text-white/95 leading-relaxed max-w-md">
                Chatten Sie mit unserem Team und erhalten Sie Antworten in durchschnittlich 10 Minuten.
                Verfügbar 24/7.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-white">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span className="text-sm">✓ Schnelle Antworten</span>
                </div>
                <div className="flex items-center gap-2.5 text-white">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span className="text-sm">✓ 24/7 verfügbar</span>
                </div>
                <div className="flex items-center gap-2.5 text-white">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span className="text-sm">✓ Persönliche Beratung</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="https://wa.me/4930123456?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Start WhatsApp chat with BC Group (opens in new window)"
                  className="block sm:inline-block"
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto hover:bg-white/20 border-2 border-white hover:border-green-100 transition-all duration-300"
                    style={{ backgroundColor: '#ffffff', color: '#16a34a' }}
                    icon={<MessageCircle className="w-5 h-5" />}
                    iconPosition="left"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-bold">CHAT STARTEN</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators - Compact */}
        <div className="mt-10 md:mt-12">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">
              Warum uns vertrauen?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Trust Item 1 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl mb-3">
                <span className="text-2xl md:text-3xl font-black text-blue-600">1</span>
              </div>
              <h4 className="font-bold text-neutral-900 text-base md:text-lg mb-1.5">
                Schnelle Antworten
              </h4>
              <p className="text-neutral-600 text-sm">
                Durchschnittliche Antwortzeit: 10 Minuten
              </p>
            </div>

            {/* Trust Item 2 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl mb-3">
                <span className="text-2xl md:text-3xl font-black text-green-600">2</span>
              </div>
              <h4 className="font-bold text-neutral-900 text-base md:text-lg mb-1.5">
                Zertifiziert & Professionell
              </h4>
              <p className="text-neutral-600 text-sm">
                Über 10 Jahre Erfahrung in Berlin
              </p>
            </div>

            {/* Trust Item 3 */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl mb-3">
                <span className="text-2xl md:text-3xl font-black text-orange-600">3</span>
              </div>
              <h4 className="font-bold text-neutral-900 text-base md:text-lg mb-1.5">
                Transparent & Fair
              </h4>
              <p className="text-neutral-600 text-sm">
                Keine versteckten Kosten, faire Preise
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
