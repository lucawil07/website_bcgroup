/**
 * Ratgeber Category Color System
 * Semantic colors for blog categories with proper contrast ratios
 * Following 2025 design best practices with intentional color meaning
 */

export interface CategoryColor {
  name: string
  primary: string        // Main color for badges and highlights
  hover: string          // Hover state color
  bg: string            // Light background variant
  border: string        // Border color
  text: string          // Text color on light backgrounds
  textOnPrimary: string // Text color on primary background
}

export const ratgeberCategories = {
  'Alle': {
    name: 'Alle',
    primary: 'bg-neutral-900',
    hover: 'hover:bg-neutral-800',
    bg: 'bg-neutral-50',
    border: 'border-neutral-200',
    text: 'text-neutral-700',
    textOnPrimary: 'text-white',
  },
  'Entrümpelung': {
    name: 'Entrümpelung',
    primary: 'bg-emerald-600',
    hover: 'hover:bg-emerald-700',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    text: 'text-emerald-700',
    textOnPrimary: 'text-white',
  },
  'Reinigung': {
    name: 'Reinigung',
    primary: 'bg-cyan-600',
    hover: 'hover:bg-cyan-700',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    text: 'text-cyan-700',
    textOnPrimary: 'text-white',
  },
  'Umzug': {
    name: 'Umzug',
    primary: 'bg-orange-600',
    hover: 'hover:bg-orange-700',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    textOnPrimary: 'text-white',
  },
  'Hausmeisterservice': {
    name: 'Hausmeisterservice',
    primary: 'bg-purple-600',
    hover: 'hover:bg-purple-700',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    textOnPrimary: 'text-white',
  },
  'Abriss': {
    name: 'Abriss',
    primary: 'bg-amber-700',
    hover: 'hover:bg-amber-800',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    text: 'text-amber-800',
    textOnPrimary: 'text-white',
  },
  'Kurierdienst': {
    name: 'Kurierdienst',
    primary: 'bg-pink-600',
    hover: 'hover:bg-pink-700',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'text-pink-700',
    textOnPrimary: 'text-white',
  },
} as const

export type CategoryKey = keyof typeof ratgeberCategories

/**
 * Get category color configuration
 */
export function getCategoryColor(category: string): CategoryColor {
  const categoryKey = category as CategoryKey
  const config = ratgeberCategories[categoryKey] || ratgeberCategories['Alle']
  
  return {
    name: config.name,
    primary: config.primary,
    hover: config.hover,
    bg: config.bg,
    border: config.border,
    text: config.text,
    textOnPrimary: config.textOnPrimary,
  }
}

/**
 * Get category badge classes for active state
 */
export function getActiveCategoryClasses(category: string): string {
  const colors = getCategoryColor(category)
  return `${colors.primary} ${colors.textOnPrimary} shadow-lg`
}

/**
 * Get category badge classes for inactive state
 */
export function getInactiveCategoryClasses(): string {
  return 'bg-white text-neutral-800 border-2 border-neutral-200 hover:border-neutral-300 hover:shadow-md'
}

/**
 * Get article card badge classes based on category
 */
export function getArticleBadgeClasses(category: string): string {
  const colors = getCategoryColor(category)
  return `${colors.primary} ${colors.textOnPrimary}`
}
