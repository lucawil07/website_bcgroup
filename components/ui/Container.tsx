import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  size?: 'default' | 'narrow' | 'wide' | 'full'
}

export default function Container({
  children,
  size = 'default',
  className,
  ...props
}: ContainerProps) {
  const sizes = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1400px]',
    full: 'max-w-full',
  }

  return (
    <div
      className={cn('mx-auto px-6 md:px-8 lg:px-12', sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  )
}
