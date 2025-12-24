/**
 * Service color configuration and utility functions
 */

export type ServiceType = 'entruempelung' | 'abriss' | 'reinigung' | 'hausmeisterservice' | 'umzug' | 'kurierdienst'

export const serviceColors: Record<ServiceType, {
  name: string
  german: string
  primary: string
  accent: string
  light: string
  gradient: string
  badgeClass: string
}> = {
  entruempelung: {
    name: 'entruempelung',
    german: 'Entrümpelung',
    primary: '#1a472a',
    accent: '#10b981',
    light: '#d1fae5',
    gradient: 'linear-gradient(135deg, #1a472a 0%, #065f46 50%, #10b981 100%)',
    badgeClass: 'from-emerald-950 to-emerald-600',
  },
  abriss: {
    name: 'abriss',
    german: 'Abriss',
    primary: '#3c2c1f',
    accent: '#d97706',
    light: '#fef3c7',
    gradient: 'linear-gradient(135deg, #3c2c1f 0%, #92400e 50%, #d97706 100%)',
    badgeClass: 'from-amber-900 to-amber-600',
  },
  reinigung: {
    name: 'reinigung',
    german: 'Reinigung',
    primary: '#0f2f51',
    accent: '#06b6d4',
    light: '#cffafe',
    gradient: 'linear-gradient(135deg, #0f2f51 0%, #164e63 50%, #06b6d4 100%)',
    badgeClass: 'from-cyan-950 to-cyan-500',
  },
  hausmeisterservice: {
    name: 'hausmeisterservice',
    german: 'Facility',
    primary: '#1e1b4b',
    accent: '#8b5cf6',
    light: '#f3e8ff',
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #8b5cf6 100%)',
    badgeClass: 'from-indigo-950 to-purple-600',
  },
  umzug: {
    name: 'umzug',
    german: 'Umzug & Transport',
    primary: '#451a03',
    accent: '#f97316',
    light: '#fed7aa',
    gradient: 'linear-gradient(135deg, #451a03 0%, #7c2d12 50%, #f97316 100%)',
    badgeClass: 'from-orange-950 to-orange-600',
  },
  kurierdienst: {
    name: 'kurierdienst',
    german: 'Kurierdienst',
    primary: '#001a33',
    accent: '#00d4ff',
    light: '#ccf0ff',
    gradient: 'linear-gradient(135deg, #001a33 0%, #003d66 50%, #00d4ff 100%)',
    badgeClass: 'from-blue-950 to-cyan-400',
  },
}

export function getServiceColor(service: ServiceType | string | null) {
  if (!service || !serviceColors[service as ServiceType]) {
    return serviceColors.entruempelung
  }
  return serviceColors[service as ServiceType]
}

export function getServiceFromRoute(pathname: string): ServiceType | null {
  const serviceMatch = pathname.match(/\/services\/([^\/]+)/)
  if (serviceMatch && serviceMatch[1]) {
    const service = serviceMatch[1]
    if (service in serviceColors) {
      return service as ServiceType
    }
  }
  return null
}
