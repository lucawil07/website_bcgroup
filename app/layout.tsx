import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/sections'
import { MobileMenuProvider } from '@/contexts/MobileMenuContext'
import { CookieConsentProvider } from '@/contexts/CookieConsentContext'
import { CookieConsentBanner } from '@/components/ui/CookieConsentBanner'
import { CookieSettings } from '@/components/ui/CookieSettings'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0066CC',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bcgroup.de'),
  title: 'BC Group - Ihr Servicepartner in Berlin',
  description: 'Professionelle Dienstleistungen in Berlin: Entrümpelung, Abriss, Reinigung, Hausmeisterservice, Umzug und Kurierdienst. Maßgeschneiderte Lösungen für Privat und Gewerbe.',
  keywords: 'Entrümpelung Berlin, Abriss Berlin, Gebäudereinigung, Hausmeisterservice, Umzug Berlin, Kurierdienst',
  authors: [{ name: 'BC Group' }],
  robots: 'index, follow',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'BC Group - Ihr Servicepartner in Berlin',
    description: 'Professionelle Dienstleistungen in Berlin - Entrümpelung, Abriss, Reinigung, Hausmeisterservice, Umzug und Kurierdienst',
    url: 'https://bcgroup.de',
    siteName: 'BC Group',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BC Group - Professionelle Dienstleistungen in Berlin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BC Group - Ihr Servicepartner in Berlin',
    description: 'Professionelle Dienstleistungen in Berlin',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-link">
          Zum Hauptinhalt springen
        </a>
        
        <CookieConsentProvider>
          <MobileMenuProvider>
            <div className="min-h-screen">
              <Header />
              <main id="main-content" className="relative">
                {children}
              </main>
              <Footer />
            </div>
          </MobileMenuProvider>

          {/* Cookie Consent Components */}
          <CookieConsentBanner />
          <CookieSettings />
        </CookieConsentProvider>

        {/* Smooth scrolling script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Initialize Lenis smooth scrolling if available
              if (typeof window !== 'undefined' && window.Lenis) {
                const lenis = new Lenis({
                  duration: 1.2,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                  smoothWheel: true,
                  wheelMultiplier: 1,
                  touchMultiplier: 2,
                })
                
                function raf(time) {
                  lenis.raf(time)
                  requestAnimationFrame(raf)
                }
                requestAnimationFrame(raf)
              }
            `,
          }}
        />
      </body>
    </html>
  )
}
