'use client'

import React from 'react'
import { serviceColors, type ServiceType } from '@/lib/service-colors'
import { cn } from '@/lib/utils'

interface ServiceLogoProps {
  service?: ServiceType | null
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'full' | 'icon' | 'horizontal'
  className?: string
  showBackground?: boolean
}

const sizeConfig = {
  sm: { width: 120, height: 60, iconSize: 32, fontSize: 10, subtitleSize: 6, bcSize: 12 },
  md: { width: 180, height: 90, iconSize: 48, fontSize: 14, subtitleSize: 8, bcSize: 16 },
  lg: { width: 240, height: 120, iconSize: 64, fontSize: 18, subtitleSize: 10, bcSize: 22 },
  xl: { width: 320, height: 160, iconSize: 80, fontSize: 24, subtitleSize: 14, bcSize: 28 },
}

export default function ServiceLogo({
  service = null,
  size = 'md',
  variant = 'full',
  className,
  showBackground = true,
}: ServiceLogoProps) {
  const colors = service ? serviceColors[service] : null
  const config = sizeConfig[size]
  
  const brandName = service && colors
    ? `BC ${colors.german.toUpperCase()}`
    : 'BC GROUP'
  
  const bgColor = colors?.primary || '#1f1f1f'
  const accentColor = colors?.accent || '#ffffff'
  const badgeColor = colors?.primary || '#0066CC'
  
  // Icon-only variant
  if (variant === 'icon') {
    return (
      <svg
        width={config.iconSize}
        height={config.iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('', className)}
      >
        <rect
          x="0"
          y="0"
          width="48"
          height="48"
          rx="12"
          fill={badgeColor}
        />
        <text
          x="24"
          y="30"
          textAnchor="middle"
          fill={accentColor}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="18"
          fontWeight="900"
        >
          BC
        </text>
      </svg>
    )
  }

  // Full logo variant (stacked)
  if (variant === 'full') {
    const viewBoxWidth = 200
    const viewBoxHeight = 100
    
    return (
      <svg
        width={config.width}
        height={config.height}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn('', className)}
      >
        {/* Background */}
        {showBackground && (
          <rect
            x="0"
            y="0"
            width={viewBoxWidth}
            height={viewBoxHeight}
            rx="16"
            fill={bgColor}
          />
        )}
        
        {/* BC Badge */}
        <rect
          x="20"
          y="20"
          width="50"
          height="50"
          rx="14"
          fill={badgeColor}
          stroke={accentColor}
          strokeWidth="0.5"
          strokeOpacity="0.3"
        />
        <text
          x="45"
          y="52"
          textAnchor="middle"
          fill={accentColor}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="18"
          fontWeight="900"
        >
          BC
        </text>
        
        {/* Brand Name */}
        <text
          x="82"
          y="42"
          textAnchor="start"
          fill="#ffffff"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="16"
          fontWeight="800"
          letterSpacing="0.5"
        >
          {service && colors ? `BC ${colors.german.toUpperCase()}` : 'BC GROUP'}
        </text>
        
        {/* Subtitle */}
        <text
          x="82"
          y="60"
          textAnchor="start"
          fill={accentColor}
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="10"
          fontWeight="500"
          letterSpacing="2"
          opacity="0.9"
        >
          SERVICE PARTNER
        </text>
      </svg>
    )
  }

  // Horizontal variant
  return (
    <svg
      width={config.width * 1.5}
      height={config.height * 0.6}
      viewBox="0 0 300 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('', className)}
    >
      {/* Background */}
      {showBackground && (
        <rect
          x="0"
          y="0"
          width="300"
          height="60"
          rx="12"
          fill={bgColor}
        />
      )}
      
      {/* BC Badge */}
      <rect
        x="10"
        y="8"
        width="44"
        height="44"
        rx="12"
        fill={badgeColor}
        stroke={accentColor}
        strokeWidth="0.5"
        strokeOpacity="0.3"
      />
      <text
        x="32"
        y="37"
        textAnchor="middle"
        fill={accentColor}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="16"
        fontWeight="900"
      >
        BC
      </text>
      
      {/* Brand Name */}
      <text
        x="66"
        y="32"
        textAnchor="start"
        fill="#ffffff"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="16"
        fontWeight="800"
        letterSpacing="0.5"
      >
        {service && colors ? `BC ${colors.german.toUpperCase()}` : 'BC GROUP'}
      </text>
      
      {/* Subtitle */}
      <text
        x="66"
        y="48"
        textAnchor="start"
        fill={accentColor}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="9"
        fontWeight="500"
        letterSpacing="2"
        opacity="0.9"
      >
        SERVICE PARTNER
      </text>
    </svg>
  )
}

// Export individual service logos as named exports
export function EntruempelungLogo(props: Omit<ServiceLogoProps, 'service'>) {
  return <ServiceLogo service="entruempelung" {...props} />
}

export function AbrissLogo(props: Omit<ServiceLogoProps, 'service'>) {
  return <ServiceLogo service="abriss" {...props} />
}

export function ReinigungLogo(props: Omit<ServiceLogoProps, 'service'>) {
  return <ServiceLogo service="reinigung" {...props} />
}

export function HausmeisterserviceLogo(props: Omit<ServiceLogoProps, 'service'>) {
  return <ServiceLogo service="hausmeisterservice" {...props} />
}

export function UmzugLogo(props: Omit<ServiceLogoProps, 'service'>) {
  return <ServiceLogo service="umzug" {...props} />
}

export function KurierdienstLogo(props: Omit<ServiceLogoProps, 'service'>) {
  return <ServiceLogo service="kurierdienst" {...props} />
}

export function BCGroupLogo(props: Omit<ServiceLogoProps, 'service'>) {
  return <ServiceLogo service={null} {...props} />
}

// Raw SVG string generator for download/export purposes
export function generateServiceLogoSVG(
  service: ServiceType | null = null,
  variant: 'full' | 'icon' | 'horizontal' = 'full'
): string {
  const colors = service ? serviceColors[service] : null
  const bgColor = colors?.primary || '#1f1f1f'
  const accentColor = colors?.accent || '#ffffff'
  const badgeColor = colors?.primary || '#0066CC'
  const brandName = service && colors
    ? `BC ${colors.german.toUpperCase()}`
    : 'BC GROUP'

  if (variant === 'icon') {
    return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="48" height="48" rx="12" fill="${badgeColor}"/>
  <text x="24" y="30" text-anchor="middle" fill="${accentColor}" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900">BC</text>
</svg>`
  }

  if (variant === 'horizontal') {
    return `<svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="300" height="60" rx="12" fill="${bgColor}"/>
  <rect x="10" y="8" width="44" height="44" rx="12" fill="${badgeColor}" stroke="${accentColor}" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="32" y="37" text-anchor="middle" fill="${accentColor}" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="900">BC</text>
  <text x="66" y="32" text-anchor="start" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" letter-spacing="0.5">${brandName}</text>
  <text x="66" y="48" text-anchor="start" fill="${accentColor}" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="500" letter-spacing="2" opacity="0.9">SERVICE PARTNER</text>
</svg>`
  }

  // Full variant
  return `<svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="200" height="100" rx="16" fill="${bgColor}"/>
  <rect x="20" y="20" width="50" height="50" rx="14" fill="${badgeColor}" stroke="${accentColor}" stroke-width="0.5" stroke-opacity="0.3"/>
  <text x="45" y="52" text-anchor="middle" fill="${accentColor}" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="900">BC</text>
  <text x="82" y="42" text-anchor="start" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" letter-spacing="0.5">${brandName}</text>
  <text x="82" y="60" text-anchor="start" fill="${accentColor}" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="500" letter-spacing="2" opacity="0.9">SERVICE PARTNER</text>
</svg>`
}
