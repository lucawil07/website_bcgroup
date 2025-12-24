import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'glass' | 'neomorph' | 'gradient' | 'minimal' | 'elevated'
  hover?: boolean
  interactive?: boolean
}

export function Card({ 
  children, 
  variant = 'default',
  hover = true, 
  interactive = false,
  className, 
  ...props 
}: CardProps) {
  const variants = {
    default: 'card-modern',
    glass: 'card-glass',
    neomorph: 'card-neomorph',
    gradient: 'bg-gradient-to-br from-white to-neutral-50 border border-neutral-100',
    minimal: 'bg-white border border-neutral-200 rounded-2xl',
    elevated: 'bg-white shadow-2xl border border-neutral-100 rounded-3xl'
  }

  const hoverEffects = hover ? {
    default: 'hover:shadow-2xl hover:-translate-y-3 hover:scale-102',
    glass: 'hover:bg-glass-strong hover:scale-102',
    neomorph: 'hover:shadow-neomorph-inset',
    gradient: 'hover:shadow-xl hover:-translate-y-2 hover:scale-102',
    minimal: 'hover:shadow-lg hover:-translate-y-1 hover:border-neutral-300',
    elevated: 'hover:shadow-brutal hover:-translate-y-2'
  } : {}

  return (
    <div
      className={cn(
        'overflow-hidden transition-all duration-500 ease-out-quart',
        variants[variant],
        hover && hoverEffects[variant],
        interactive && 'cursor-pointer focus-ring',
        className
      )}
      {...props}
    >
      {children}
      
      {/* Subtle shine effect overlay */}
      {variant !== 'neomorph' && (
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
        </div>
      )}
    </div>
  )
}

export interface CardImageProps extends HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  zoom?: boolean
  overlay?: boolean
  aspectRatio?: 'square' | 'video' | 'wide' | 'tall' | 'auto'
}

export function CardImage({ 
  src, 
  alt, 
  zoom = true, 
  overlay = false,
  aspectRatio = 'auto',
  className, 
  ...props 
}: CardImageProps) {
  const aspectRatios = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
    tall: 'aspect-[3/4]',
    auto: ''
  }

  return (
    <div 
      className={cn(
        'relative overflow-hidden group',
        aspectRatios[aspectRatio],
        className
      )} 
      {...props}
    >
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full h-full object-cover transition-all duration-700 ease-out-quart',
          zoom && 'group-hover:scale-110'
        )}
      />
      
      {/* Modern gradient overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

export function CardContent({ 
  children, 
  padding = 'md',
  className, 
  ...props 
}: CardContentProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10'
  }

  return (
    <div 
      className={cn(
        'relative',
        paddingClasses[padding], 
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  gradient?: boolean
}

export function CardTitle({
  children,
  as: Component = 'h3',
  gradient = false,
  className,
  ...props
}: CardTitleProps) {
  return (
    <Component
      className={cn(
        'text-2xl font-bold text-primary-950 mb-3 leading-tight',
        gradient && 'gradient-text',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode
  truncate?: boolean
}

export function CardDescription({ 
  children, 
  truncate = false,
  className, 
  ...props 
}: CardDescriptionProps) {
  return (
    <p 
      className={cn(
        'text-neutral-600 leading-relaxed text-pretty',
        truncate && 'line-clamp-3',
        className
      )} 
      {...props}
    >
      {children}
    </p>
  )
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div className={cn('space-y-2', className)} {...props}>
      {children}
    </div>
  )
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  justify?: 'start' | 'center' | 'end' | 'between'
}

export function CardFooter({ 
  children, 
  justify = 'start',
  className, 
  ...props 
}: CardFooterProps) {
  const justifyClasses = {
    start: 'justify-start',
    center: 'justify-center', 
    end: 'justify-end',
    between: 'justify-between'
  }

  return (
    <div 
      className={cn(
        'flex items-center gap-4 pt-4 border-t border-neutral-100',
        justifyClasses[justify],
        className
      )} 
      {...props}
    >
      {children}
    </div>
  )
}

export interface CardBadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

export function CardBadge({
  children,
  variant = 'default',
  position = 'top-right',
  className,
  ...props
}: CardBadgeProps) {
  const variants = {
    default: 'bg-primary-950 text-white',
    secondary: 'bg-secondary text-white',
    accent: 'bg-accent text-white',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-black',
    error: 'bg-red-500 text-white'
  }

  const positions = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4'
  }

  return (
    <div
      className={cn(
        'absolute z-10 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full',
        variants[variant],
        positions[position],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
