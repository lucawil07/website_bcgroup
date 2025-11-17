export type CookieCategory = 'essential' | 'analytics' | 'marketing';

export interface CookieCategoryInfo {
  id: CookieCategory;
  name: string;
  description: string;
  examples: string;
  required: boolean;
}

export interface ConsentState {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export interface CookieConsentContextType {
  consent: ConsentState | null;
  showBanner: boolean;
  showSettings: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: Omit<ConsentState, 'timestamp'>) => void;
  openSettings: () => void;
  closeSettings: () => void;
  hasConsent: (category: CookieCategory) => boolean;
}

export const COOKIE_CATEGORIES: CookieCategoryInfo[] = [
  {
    id: 'essential',
    name: 'Essentiell',
    description: 'Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden. Sie speichern Ihre Cookie-Einstellungen und Session-Informationen.',
    examples: 'Cookie-Einstellungen, Session-Cookies',
    required: true,
  },
  {
    id: 'analytics',
    name: 'Analyse',
    description: 'Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, indem Informationen anonym gesammelt und gemeldet werden. Dies ermöglicht es uns, die Website kontinuierlich zu verbessern.',
    examples: 'Google Analytics, Besucherstatistiken',
    required: false,
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Diese Cookies werden verwendet, um Ihnen relevante Werbung zu zeigen und die Effektivität unserer Werbekampagnen zu messen. Sie können auch verwendet werden, um Ihre Interessen zu verfolgen.',
    examples: 'Google Ads, Facebook Pixel, Remarketing',
    required: false,
  },
];

export const CONSENT_STORAGE_KEY = 'bcgroup_cookie_consent';
export const CONSENT_EXPIRY_DAYS = 365; // 12 months
