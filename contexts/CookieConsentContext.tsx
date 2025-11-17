'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type {
  ConsentState,
  CookieConsentContextType,
  CookieCategory,
} from '@/types/cookies';
import { CONSENT_STORAGE_KEY, CONSENT_EXPIRY_DAYS } from '@/types/cookies';

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(
  undefined
);

export function CookieConsentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load consent from localStorage on mount
  useEffect(() => {
    const loadConsent = () => {
      try {
        const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
        if (stored) {
          const parsed: ConsentState = JSON.parse(stored);
          
          // Check if consent has expired (12 months)
          const expiryDate = new Date(parsed.timestamp);
          expiryDate.setDate(expiryDate.getDate() + CONSENT_EXPIRY_DAYS);
          
          if (new Date() < expiryDate) {
            setConsent(parsed);
            setShowBanner(false);
          } else {
            // Consent expired, show banner again
            localStorage.removeItem(CONSENT_STORAGE_KEY);
            setShowBanner(true);
          }
        } else {
          // No consent stored, show banner after 1 second delay
          setTimeout(() => setShowBanner(true), 1000);
        }
      } catch (error) {
        console.error('Error loading cookie consent:', error);
        setTimeout(() => setShowBanner(true), 1000);
      } finally {
        setIsLoaded(true);
      }
    };

    loadConsent();
  }, []);

  const saveConsent = (newConsent: ConsentState) => {
    setConsent(newConsent);
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(newConsent));
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    const newConsent: ConsentState = {
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: Date.now(),
    };
    saveConsent(newConsent);
  };

  const rejectAll = () => {
    const newConsent: ConsentState = {
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: Date.now(),
    };
    saveConsent(newConsent);
  };

  const savePreferences = (
    preferences: Omit<ConsentState, 'timestamp'>
  ) => {
    const newConsent: ConsentState = {
      ...preferences,
      essential: true, // Always true
      timestamp: Date.now(),
    };
    saveConsent(newConsent);
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const hasConsent = (category: CookieCategory): boolean => {
    if (!consent) return category === 'essential';
    return consent[category] === true;
  };

  const value: CookieConsentContextType = {
    consent,
    showBanner: isLoaded && showBanner,
    showSettings,
    acceptAll,
    rejectAll,
    savePreferences,
    openSettings,
    closeSettings,
    hasConsent,
  };

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error(
      'useCookieConsent must be used within a CookieConsentProvider'
    );
  }
  return context;
}
