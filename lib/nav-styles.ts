/**
 * Navigation Styling Configuration
 * Single source of truth for all navigation-related styles
 * Eliminates code duplication and improves maintainability
 */

import { cn } from '@/lib/utils'

export const navScrollState = {
  scrolled: {
    text: 'text-primary-950',
    textHover: 'hover:text-secondary',
    description: 'text-neutral-600',
    icon: 'text-primary-950'
  },
  default: {
    text: 'text-white',
    textHover: 'hover:text-white',
    description: 'text-white/70',
    icon: 'text-white'
  }
}

/**
 * Get combined text and hover classes based on scroll state
 */
export function getNavTextClass(isScrolled: boolean, useDarkText: boolean): string {
  const isDark = isScrolled || useDarkText
  const state = isDark ? navScrollState.scrolled : navScrollState.default
  return cn(state.text, state.textHover)
}

/**
 * Get description text classes
 */
export function getDescriptionClass(isScrolled: boolean, useDarkText: boolean): string {
  const isDark = isScrolled || useDarkText
  return isDark ? navScrollState.scrolled.description : navScrollState.default.description
}

/**
 * Get icon color classes
 */
export function getIconClass(isScrolled: boolean, useDarkText: boolean): string {
  const isDark = isScrolled || useDarkText
  return isDark ? navScrollState.scrolled.icon : navScrollState.default.icon
}

/**
 * Reusable nav item class configurations
 */
export const navItemClasses = {
  // Desktop navigation link
  link: 'px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-white/10 relative overflow-hidden group',
  
  // Dropdown toggle button
  toggle: 'flex items-center gap-2 px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:bg-white/10 relative overflow-hidden group',
  
  // Dropdown menu item
  dropdownItem: 'block p-4 rounded-2xl transition-all duration-200 group hover:bg-white/10 border border-transparent hover:border-white/20',
  
  // Mobile menu item
  mobileItem: 'block px-6 py-4 text-xl font-black transition-colors rounded-2xl hover:bg-white/5',
  
  // Mobile dropdown toggle
  mobileToggle: 'flex items-center justify-between w-full px-6 py-4 text-xl font-black transition-colors rounded-2xl hover:bg-white/5',
  
  // Mobile sub-item
  mobileSubItem: 'block px-6 py-3 text-base font-semibold transition-colors rounded-xl hover:bg-white/5',
  
  // Contact info link
  contactLink: 'flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 hover:bg-white/10',
  
  // CTA button - Enhanced with stronger visual hierarchy
  ctaButton: 'relative group overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95'
}

/**
 * Dark pages where white text is visible
 * These are pages with dark hero images or colored backgrounds
 */
export const DARK_BACKGROUND_PAGES = [
  '/', // Homepage with hero carousel
  '/ueber-uns', // About page with hero image
  '/services/entruempelung',
  '/services/abriss',
  '/services/reinigung',
  '/services/hausmeisterservice',
  '/services/umzug',
  '/services/kurierdienst'
] as const

/**
 * Light/White background pages where dark text is required for readability
 * These pages have white or very light backgrounds
 */
export const LIGHT_BACKGROUND_PAGES = [
  '/kontakt', // Contact page
  '/karriere', // Career page
  '/ratgeber', // Blog/Guide pages
  '/ratgeber/entruempelung-richtig-planen',
  '/ratgeber/bueroreinigung-tipps',
  '/ratgeber/entruempelung-kosten',
  '/ratgeber/abriss-genehmigung',
  '/ratgeber/umzug-checkliste',
  '/ratgeber/grundreinigung-wohnung',
  '/ratgeber/hausmeisterservice-aufgaben',
  '/ratgeber/kurierdienst-berlin',
  '/service-gebiete', // Service areas page
  '/impressum', // Imprint page
  '/datenschutz', // Privacy page
] as const

/**
 * Check if page has dark background
 */
export function isDarkBackgroundPage(pathname: string): boolean {
  return DARK_BACKGROUND_PAGES.includes(pathname as any)
}

/**
 * Check if page has light background
 */
export function isLightBackgroundPage(pathname: string): boolean {
  // Check exact matches first
  if (LIGHT_BACKGROUND_PAGES.includes(pathname as any)) {
    return true
  }
  
  // Check if pathname starts with any light background page prefix
  return LIGHT_BACKGROUND_PAGES.some(page => {
    return pathname.startsWith(page + '/') || pathname === page
  })
}

/**
 * Determine if dark text should be used
 * Returns true when:
 * 1. Page is scrolled (header shows glassmorphic background)
 * 2. Page is a light background page (requires dark text for contrast)
 */
export function shouldUseDarkText(isScrolled: boolean, hasDarkBackground: boolean, isLightBackground?: boolean): boolean {
  // If scrolled, always use dark text on the glass background
  if (isScrolled) return true
  
  // If on a light background page, use dark text for readability
  if (isLightBackground) return true
  
  // On dark pages without scroll, use white text
  return false
}
