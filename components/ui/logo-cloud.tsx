'use client'

import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { cn } from '@/lib/utils'

type Logo = {
  src: string
  alt: string
  width?: number
  height?: number
}

type LogoCloudProps = React.ComponentProps<'div'> & {
  logos: Logo[]
  speed?: number
  speedOnHover?: number
  gap?: number
  reverse?: boolean
}

export function LogoCloud({ 
  className, 
  logos, 
  speed = 80, 
  speedOnHover = 25,
  gap = 42,
  reverse = false,
  ...props 
}: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        'overflow-hidden py-4 mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]',
        className
      )}
    >
      <InfiniteSlider gap={gap} reverse={reverse} speed={speed} speedOnHover={speedOnHover}>
        {logos.map((logo, index) => (
          <img
            alt={logo.alt}
            className="pointer-events-none h-8 select-none opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 md:h-10"
            height={logo.height || 'auto'}
            key={`logo-${logo.alt}-${index}`}
            loading="lazy"
            src={logo.src}
            width={logo.width || 'auto'}
          />
        ))}
      </InfiniteSlider>
    </div>
  )
}
