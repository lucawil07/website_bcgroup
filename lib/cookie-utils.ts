/**
 * Utility functions for cookie consent management
 */

import { CONSENT_STORAGE_KEY } from '@/types/cookies';

/**
 * Clear cookie consent from localStorage (for testing)
 */
export function clearCookieConsent(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(CONSENT_STORAGE_KEY);
    window.location.reload();
  }
}

/**
 * Check if user has given consent for a specific category
 * Can be used before loading third-party scripts
 */
export function hasConsentForCategory(category: 'analytics' | 'marketing'): boolean {
  if (typeof window === 'undefined') return false;
  
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return false;
    
    const consent = JSON.parse(stored);
    return consent[category] === true;
  } catch {
    return false;
  }
}

/**
 * Load Google Analytics only if user has given consent
 * Example usage in app/layout.tsx or a component
 */
export function loadGoogleAnalytics(measurementId: string): void {
  if (!hasConsentForCategory('analytics')) {
    return;
  }

  // Load GA script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize GA
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', measurementId);
}

/**
 * Load Facebook Pixel only if user has given consent
 */
export function loadFacebookPixel(pixelId: string): void {
  if (!hasConsentForCategory('marketing')) {
    return;
  }

  // Load FB Pixel script
  (function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  (window as any).fbq('init', pixelId);
  (window as any).fbq('track', 'PageView');
}

// Extend window type for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    fbq: any;
    _fbq: any;
  }
}
