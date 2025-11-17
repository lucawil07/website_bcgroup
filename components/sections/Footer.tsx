'use client';

import Link from 'next/link'
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { openSettings } = useCookieConsent()

  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary to-secondary rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-secondary to-accent rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Brand Section - Larger on left */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center font-black text-xl shadow-xl">
                  BC
                </div>
                <span className="text-2xl font-black">BC GROUP</span>
              </div>
              <p className="text-lg text-white/90 leading-relaxed max-w-md font-medium">
                Ihr zuverlässiger Partner für professionelle Dienstleistungen in Berlin. 
                Seit über 10 Jahren setzen wir auf Qualität, Transparenz und Zuverlässigkeit.
              </p>
              
              {/* Contact Cards */}
              <div className="space-y-3 pt-4">
                <a
                  href="tel:+4930123456"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-sm border border-white/[0.15] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-white/70 uppercase tracking-wider font-bold">Telefon</div>
                    <div className="text-lg font-bold text-white">+49 30 123 456</div>
                  </div>
                </a>
                
                <a
                  href="mailto:info@bcgroup-berlin.de"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.08] hover:bg-white/[0.12] backdrop-blur-sm border border-white/[0.15] transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/70 uppercase tracking-wider font-bold">E-Mail</div>
                    <div className="text-sm font-bold text-white">info@bcgroup-berlin.de</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-white">
                  Services
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Entrümpelung', slug: 'entruempelung' },
                    { label: 'Abriss', slug: 'abriss' },
                    { label: 'Reinigung', slug: 'reinigung' },
                    { label: 'Hausmeister', slug: 'hausmeisterservice' },
                    { label: 'Umzug', slug: 'umzug' },
                    { label: 'Kurier', slug: 'kurierdienst' },
                  ].map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${item.slug}`}
                        className="text-white/90 hover:text-white font-medium transition-colors hover:translate-x-1 inline-block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-white">
                  Company
                </h3>
                <ul className="space-y-3">
                  {[
                    { label: 'Über uns', href: '/ueber-uns' },
                    { label: 'Karriere', href: '/karriere' },
                    { label: 'News', href: '/ratgeber' },
                    { label: 'Kontakt', href: '/kontakt' },
                  ].map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-white/90 hover:text-white font-medium transition-colors hover:translate-x-1 inline-block"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Öffnungszeiten & Zertifikate */}
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-sm font-black uppercase tracking-[0.2em] mb-6 text-white">
                  Erreichbarkeit
                </h3>
                <div className="space-y-3 text-sm text-white/90 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-accent font-bold text-lg">24/7 Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Copyright */}
              <div className="text-white text-sm font-medium">
                <p>&copy; {currentYear} BC Group Berlin. Alle Rechte vorbehalten.</p>
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                {[
                  { label: 'Impressum', href: '/impressum' },
                  { label: 'Datenschutz', href: '/datenschutz' },
                  { label: 'AGB', href: '/agb' },
                ].map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-white/80 hover:text-white font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={openSettings}
                  className="text-white/80 hover:text-white font-medium transition-colors"
                >
                  Cookie-Einstellungen
                </button>
              </div>

              {/* Social Media */}
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
                  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-white/[0.08] hover:bg-secondary backdrop-blur-sm border border-white/[0.15] flex items-center justify-center transition-all hover:scale-110 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
