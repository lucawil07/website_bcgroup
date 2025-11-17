'use client';

import React, { useState, useEffect } from 'react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import Button from './Button';
import { COOKIE_CATEGORIES } from '@/types/cookies';
import type { ConsentState } from '@/types/cookies';
import { X, Shield, BarChart3, Megaphone, Check } from 'lucide-react';
import Link from 'next/link';

export function CookieSettings() {
  const { showSettings, closeSettings, savePreferences, consent } = useCookieConsent();
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (consent) {
      setPreferences({
        essential: consent.essential,
        analytics: consent.analytics,
        marketing: consent.marketing,
      });
    }
  }, [consent]);

  useEffect(() => {
    if (showSettings) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSettings]);

  if (!showSettings) return null;

  const handleToggle = (category: 'analytics' | 'marketing') => {
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    savePreferences(preferences);
  };

  const handleAcceptAll = () => {
    setPreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
    savePreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const categoryIcons = {
    essential: Shield,
    analytics: BarChart3,
    marketing: Megaphone,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ paddingBottom: 'max(1rem, env(safe-area-inset-bottom, 1rem))' }}
      role="dialog"
      aria-labelledby="cookie-settings-title"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-900/40 backdrop-blur-lg animate-fade-in"
        onClick={closeSettings}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-slide-in-up">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-neutral-200 px-6 sm:px-8 py-6 z-10">
          <div className="flex items-start justify-between">
            <div>
              <h2
                id="cookie-settings-title"
                className="text-2xl sm:text-3xl font-black text-neutral-900 mb-2"
              >
                Cookie-Einstellungen
              </h2>
              <p className="text-base text-neutral-600">
                Verwalten Sie Ihre Cookie-Präferenzen
              </p>
            </div>
            <button
              onClick={closeSettings}
              className="shrink-0 w-10 h-10 rounded-xl hover:bg-neutral-100 flex items-center justify-center transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5 text-neutral-700" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 sm:px-8 py-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          <div className="space-y-6">
            {/* Intro Text */}
            <div className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl p-6 border border-neutral-200/60 shadow-sm">
              <p className="text-neutral-700 leading-relaxed mb-3">
                Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche 
                Erfahrung auf unserer Website zu bieten. Sie können Ihre Einstellungen jederzeit 
                anpassen.
              </p>
              <Link
                href="/datenschutz"
                className="inline-flex items-center text-secondary hover:text-secondary-700 font-bold transition-colors"
              >
                Vollständige Datenschutzerklärung lesen
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Cookie Categories */}
            <div className="space-y-4">
              {COOKIE_CATEGORIES.map((category) => {
                const Icon = categoryIcons[category.id];
                const isEnabled =
                  preferences[category.id as keyof typeof preferences];
                const canToggle = !category.required;

                return (
                  <div
                    key={category.id}
                    className="bg-white border border-neutral-200 rounded-2xl p-6 hover:border-neutral-300 hover:shadow-md transition-all"
                  >
                      <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div
                          className={`shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg ${
                            category.required
                              ? 'bg-gradient-to-br from-neutral-500 to-neutral-700'
                              : 'bg-gradient-to-br from-secondary to-secondary-700'
                          }`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-lg font-black text-neutral-900">
                              {category.name}
                            </h3>
                            {category.required && (
                              <span className="text-xs font-medium px-2 py-1 rounded-md bg-neutral-100 text-neutral-700">
                                Erforderlich
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-neutral-700 leading-relaxed mb-3">
                            {category.description}
                          </p>
                          <p className="text-xs text-neutral-600 font-medium">
                            <span className="font-semibold">Beispiele:</span> {category.examples}
                          </p>
                        </div>
                      </div>

                      {/* Toggle */}
                      <div className="shrink-0">
                        <button
                          onClick={() =>
                            canToggle &&
                            handleToggle(category.id as 'analytics' | 'marketing')
                          }
                          disabled={!canToggle}
                          className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${
                            isEnabled
                              ? 'bg-secondary shadow-glow'
                              : 'bg-neutral-300'
                          } ${
                            !canToggle ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                          }`}
                          aria-label={`${category.name} ${isEnabled ? 'deaktivieren' : 'aktivieren'}`}
                          aria-checked={isEnabled}
                          role="switch"
                        >
                          <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-all ${
                              isEnabled ? 'translate-x-6' : 'translate-x-1'
                            }`}
                          >
                            {isEnabled && (
                              <Check className="w-3 h-3 text-secondary m-auto mt-1" />
                            )}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 bg-white border-t border-neutral-200 px-6 sm:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              size="lg"
              onClick={closeSettings}
              className="order-2 sm:order-1 flex-1 sm:flex-initial border-2 border-neutral-300 hover:border-secondary hover:text-secondary"
            >
              Abbrechen
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={handleAcceptAll}
              className="order-3 sm:order-2 flex-1 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 bg-transparent"
            >
              Alle akzeptieren
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={handleSave}
              className="order-1 sm:order-3 flex-1 bg-gradient-to-br from-secondary via-secondary-600 to-secondary-700 hover:from-secondary-600 hover:via-secondary-700 hover:to-secondary-800 text-white font-bold shadow-lg hover:shadow-2xl hover:shadow-secondary/30"
            >
              Einstellungen speichern
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
