import Link from 'next/link'
import { Button, Section, Container } from '@/components/ui'
import { Phone, MessageCircle } from 'lucide-react'

export default function CTAContact() {
  return (
    <Section background="light" padding="large" className="bg-gradient-to-b from-neutral-50 to-white">
      <Container size="wide">
        {/* Modern split CTA design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Left side - Main CTA */}
          <div className="relative bg-gradient-to-br from-primary via-primary to-primary-light p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-subtle" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: '1.5s' }} />
            </div>
            
            <div className="relative z-10 space-y-6 md:space-y-8 animate-slide-in-left">
              <div className="inline-block">
                <span className="glass-dark px-4 py-2 md:px-6 md:py-3 rounded-full text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em]">
                  Kontakt
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white uppercase leading-tight">
                BEREIT FÜR<br />
                IHR PROJEKT?
              </h2>
              
              <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-lg">
                Lassen Sie uns über Ihre Anforderungen sprechen. Wir erstellen Ihnen 
                ein individuelles Angebot – kostenlos und unverbindlich.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/kontakt">
                  <Button 
                    variant="ghost" 
                    size="lg" 
                    className="w-full sm:w-auto min-w-[200px] hover:bg-white/90"
                    style={{ backgroundColor: '#ffffff', color: '#1a1a1a', border: '2px solid #ffffff' }}
                  >
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    ANGEBOT ANFORDERN
                  </Button>
                </Link>
                
                <a
                  href="tel:+4930123456"
                  className="inline-block"
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto min-w-[200px] hover:bg-white/90"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', color: '#ffffff', border: '2px solid rgba(255, 255, 255, 0.5)' }}
                  >
                    <Phone className="w-5 h-5" />
                    030 123 456
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - WhatsApp CTA */}
          <div className="relative bg-gradient-to-br from-[#25D366] via-[#22C55E] to-[#20BA5A] p-8 md:p-12 lg:p-16 flex flex-col justify-center overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-subtle" />
            </div>
            
            <div className="relative z-10 space-y-6 md:space-y-8 animate-slide-in-right">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase leading-tight">
                SCHNELLE<br />
                BERATUNG<br />
                PER WHATSAPP
              </h3>
              
              <p className="text-base md:text-lg text-white/95 leading-relaxed max-w-md">
                Senden Sie uns eine Nachricht und erhalten Sie innerhalb von Minuten 
                eine Antwort von unserem Team.
              </p>

              <a
                href="https://wa.me/4930123456?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20Dienstleistungen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
                aria-label="Start WhatsApp chat with BC Group (opens in new window)"
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="hover:bg-white/90 min-w-[240px]"
                  style={{ backgroundColor: '#ffffff', color: '#25D366', border: '2px solid #ffffff' }}
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  CHAT STARTEN
                </Button>
              </a>

              <div className="pt-2 md:pt-4 flex items-center gap-2 md:gap-3 text-white/90 text-xs md:text-sm">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span>Durchschnittliche Antwortzeit: 5 Minuten</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 md:mt-16 text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <p className="text-neutral-600 text-xs md:text-sm mb-6 md:mb-8 uppercase tracking-[0.2em] font-semibold">
            Erreichbar
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12 text-neutral-700">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold">Mo-Fr</div>
                <div className="text-sm text-neutral-500">07:00-18:00 Uhr</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="font-bold">Samstag</div>
                <div className="text-sm text-neutral-500">08:00-14:00 Uhr</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-secondary" />
              </div>
              <div className="text-left">
                <div className="font-bold">WhatsApp</div>
                <div className="text-sm text-neutral-500">24/7 verfügbar</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
