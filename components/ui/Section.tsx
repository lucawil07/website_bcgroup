import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  fullScreen?: boolean
  background?: 'white' | 'light' | 'dark' | 'gradient'
  padding?: 'none' | 'small' | 'medium' | 'large'
}

export default function Section({
  children,
  fullScreen = false,
  background = 'white',
  padding = 'large',
  className,
  ...props
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    light: 'bg-gradient-to-b from-neutral-50 to-white',
    dark: 'bg-gradient-to-br from-primary via-primary-light to-neutral-800 text-white relative overflow-hidden',
    gradient: 'bg-gradient-to-br from-primary via-primary-light to-secondary text-white relative overflow-hidden',
  }

  const paddings = {
    none: '',
    small: 'py-12 md:py-16',
    medium: 'py-16 md:py-24',
    large: 'py-20 md:py-32 lg:py-40',
  }

  return (
    <section
      className={cn(
        backgrounds[background],
        paddings[padding],
        fullScreen && 'min-h-screen flex items-center justify-center',
        className
      )}
      {...props}
    >
      {/* Decorative elements for dark/gradient backgrounds */}
      {(background === 'dark' || background === 'gradient') && (
        <>
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary rounded-full blur-[150px] animate-pulse-subtle" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent rounded-full blur-[120px] animate-pulse-subtle" style={{ animationDelay: '2s' }} />
          </div>
        </>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}
