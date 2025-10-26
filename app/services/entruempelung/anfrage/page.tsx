'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui'
import EntruempelungFunnelForm from '@/components/forms/EntruempelungFunnelForm'

export default function EntruempelungAnfragePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-10 shadow-sm">
        <Container size="wide">
          <div className="py-4 flex items-center justify-between">
            <Link 
              href="/services/entruempelung"
              className="flex items-center gap-2 text-neutral-600 hover:text-secondary transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Zurück</span>
            </Link>
            <div className="text-center">
              <h1 className="text-xl md:text-2xl font-black text-primary uppercase">
                BC Group Berlin
              </h1>
              <p className="text-xs text-neutral-600">Entrümpelung Anfrage</p>
            </div>
            <div className="w-24" />
          </div>
        </Container>
      </div>

      {/* Main Content */}
      <div className="py-8 md:py-12">
        <Container size="wide">
          <div className="max-w-5xl mx-auto">
            {/* Info Banner */}
            <div className="mb-8 bg-gradient-to-r from-secondary to-accent text-white rounded-2xl p-6 md:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Kostenlos & Unverbindlich</h2>
                  <p className="text-white/90">
                    Erhalten Sie in nur 8 Schritten Ihr persönliches Festpreis-Angebot. 
                    Keine versteckten Kosten, keine Verpflichtungen.
                  </p>
                </div>
                <div className="flex-shrink-0 flex gap-4 text-center">
                  <div>
                    <div className="text-3xl font-black">2h</div>
                    <div className="text-xs text-white/80">Antwortzeit</div>
                  </div>
                  <div className="w-px bg-white/30" />
                  <div>
                    <div className="text-3xl font-black">4.9★</div>
                    <div className="text-xs text-white/80">Bewertung</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12">
              <EntruempelungFunnelForm onClose={() => router.push('/services/entruempelung')} />
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">100% kostenlos</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Sichere Übertragung</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Antwort in 2h</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
