'use client';

import React, { useEffect, useState } from 'react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import Button from './Button';
import Link from 'next/link';
import { Cookie, Settings } from 'lucide-react';
import { createPortal } from 'react-dom';

export function CookieConsentBanner() {
  const { showBanner, acceptAll, rejectAll, openSettings } = useCookieConsent();
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (showBanner) {
      // Small delay for smooth animation
      const timer = setTimeout(() => setIsVisible(true), 100);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [showBanner]);

  if (!showBanner || !mounted) return null;

  const banner = (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-neutral-900/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Banner - Center of Viewport */}
      <div
        className={`fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 ${
          isVisible ? '' : 'pointer-events-none'
        }`}
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        <div 
          className={`w-full max-w-4xl transition-all duration-700 ease-out-quart ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-neutral-200/80 overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-6">
                {/* Header with Icon and Title */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary to-secondary-700 flex items-center justify-center shadow-lg">
                    <Cookie className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2
                      id="cookie-banner-title"
                      className="text-2xl sm:text-3xl font-black text-neutral-900 tracking-tight mb-2"
                    >
                      Wir respektieren Ihre Privatsphäre
                    </h2>
                    <p
                      id="cookie-banner-description"
                      className="text-base sm:text-lg text-neutral-700 leading-relaxed"
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

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={acceptAll}
                    className="flex-1 bg-gradient-to-br from-secondary via-secondary-600 to-secondary-700 hover:from-secondary-600 hover:via-secondary-700 hover:to-secondary-800 text-white font-bold shadow-lg hover:shadow-2xl hover:shadow-secondary/30 transition-all"
                  >
                    Alle akzeptieren
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={openSettings}
                    className="flex-1 sm:flex-none group border-2 border-neutral-300 hover:border-secondary hover:text-secondary bg-white text-neutral-800 font-semibold"
                  >
                    <Settings className="w-4 h-4 transition-transform group-hover:rotate-90" />
                    Einstellungen
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={rejectAll}
                    className="text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 font-semibold bg-transparent border-0"
                  >
                    Ablehnen
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return createPortal(banner, document.body);
}
