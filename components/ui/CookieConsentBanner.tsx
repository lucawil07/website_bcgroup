'use client';

import React, { useEffect, useState } from 'react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import Button from './Button';
import Link from 'next/link';
import { Cookie, Settings } from 'lucide-react';

export function CookieConsentBanner() {
  const { showBanner, acceptAll, rejectAll, openSettings } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showBanner) {
      // Small delay for smooth animation
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [showBanner]);

  if (!showBanner) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-neutral-900/25 backdrop-blur-md z-50 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      />

      {/* Banner */}
      <div
        className={`fixed left-4 right-4 sm:left-6 sm:right-6 z-50 transition-all duration-700 ease-out-quart ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ 
          bottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))',
          paddingBottom: 'env(safe-area-inset-bottom, 0px)'
        }}
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        <div className="mx-auto max-w-6xl">
          <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200/80 overflow-hidden max-h-[85vh] overflow-y-auto">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary-700 flex items-center justify-center shadow-lg">
                        <Cookie className="w-5 h-5 text-white" />
                      </div>
                      <h2
                        id="cookie-banner-title"
                        className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight"
                      >
                        Wir respektieren Ihre Privatsphäre
                      </h2>
                    </div>
                    <div>
                      <p
                        id="cookie-banner-description"
                        className="text-sm sm:text-base text-neutral-700 leading-relaxed"
                      >
                        Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                        Einige Cookies sind für den Betrieb der Website notwendig, während andere uns helfen, 
                        die Website und Ihre Erfahrung zu verbessern.{' '}
                        <Link
                          href="/datenschutz"
                          className="text-secondary hover:text-secondary-700 underline underline-offset-2 font-bold transition-colors"
                        >
                          Mehr erfahren
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0 lg:min-w-fit">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={openSettings}
                    className="order-2 sm:order-1 group border-2 border-neutral-300 hover:border-secondary hover:text-secondary bg-white text-neutral-800 font-semibold"
                  >
                    <Settings className="w-4 h-4 transition-transform group-hover:rotate-90" />
                    Einstellungen
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={rejectAll}
                    className="order-3 sm:order-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 font-semibold bg-transparent border-0"
                  >
                    Ablehnen
                  </Button>

                  <Button
                    variant="primary"
                    size="lg"
                    onClick={acceptAll}
                    className="order-1 sm:order-3 bg-gradient-to-br from-secondary via-secondary-600 to-secondary-700 hover:from-secondary-600 hover:via-secondary-700 hover:to-secondary-800 text-white font-bold shadow-lg hover:shadow-2xl hover:shadow-secondary/30 transition-all"
                  >
                    Alle akzeptieren
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
