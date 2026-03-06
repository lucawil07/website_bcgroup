import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/sections'
import { CookieConsent, StructuredData, localBusinessSchema } from '@/components/ui'
import { MobileMenuProvider } from '@/contexts/MobileMenuContext'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'

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
  title: {
    default: 'BC Group - Ihr Servicepartner in Berlin',
    template: '%s | BC Group Berlin',
  },
  description: 'Professionelle Dienstleistungen in Berlin: Entrümpelung, Abriss, Reinigung, Hausmeisterservice, Umzug und Kurierdienst. Maßgeschneiderte Lösungen für Privat und Gewerbe.',
  keywords: [
    'Entrümpelung Berlin',
    'Abriss Berlin',
    'Gebäudereinigung Berlin',
    'Hausmeisterservice Berlin',
    'Umzug Berlin',
    'Kurierdienst Berlin',
    'Wohnungsauflösung',
    'Büroreinigung',
    'Winterdienst',
    'Firmenumzug',
  ],
  authors: [{ name: 'BC Group' }],
  creator: 'BC Group',
  publisher: 'BC Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
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
        url: '/images/image_bcgroup.png',
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
    images: ['/images/image_bcgroup.png'],
  },
  category: 'business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} ${inter.variable} antialiased`}>
        <MobileMenuProvider>
          <StructuredData data={localBusinessSchema} />
          <div className="min-h-screen flex flex-col bg-neutral-900">
            <Header />
            <main id="main-content" className="relative flex-1 bg-white">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </div>
          <Analytics />
        </MobileMenuProvider>

        {/* Smooth scrolling script - disabled on mobile to prevent touch scroll issues */}
        <Script id="lenis-init" strategy="afterInteractive">{`
          // Initialize Lenis smooth scrolling only on desktop (no touch devices)
          if (typeof window !== 'undefined' && window.Lenis && !('ontouchstart' in window) && !navigator.maxTouchPoints) {
            const lenis = new Lenis({
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
              smoothWheel: true,
              wheelMultiplier: 1,
            })
            
            function raf(time) {
              lenis.raf(time)
              requestAnimationFrame(raf)
            }
            requestAnimationFrame(raf)
          }
        `}</Script>
      </body>
    </html>
  )
}
