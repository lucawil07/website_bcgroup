import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glass' | 'neomorph' | 'gradient' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  isLoading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      children,
      icon,
      iconPosition = 'left',
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      relative inline-flex items-center justify-center gap-2 font-bold uppercase tracking-wider 
      transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed 
      overflow-hidden group focus-ring whitespace-nowrap
    `

    const variants = {
      primary: `
        bg-[#1a1a1a] text-white 
        hover:scale-105 hover:shadow-2xl active:scale-98
        hover:bg-[#0066CC]
        shadow-lg hover:shadow-xl
      `,
      secondary: `
        bg-white text-[#1a1a1a] border-2 border-[#1a1a1a]
        hover:bg-[#1a1a1a] hover:text-white hover:scale-105 hover:shadow-xl 
        active:scale-98 hover:border-[#1a1a1a]
        shadow-md hover:shadow-lg
      `,
      ghost: `
        bg-black/40 backdrop-blur-md text-white border-2 border-white/30 
        hover:bg-white hover:text-[#1a1a1a] hover:scale-105 hover:shadow-2xl 
        active:scale-98 hover:border-white
        shadow-lg hover:shadow-xl
      `,
      glass: `
        bg-white/10 backdrop-blur-md text-white border border-white/20 
        hover:bg-white/20 hover:border-white/40 hover:scale-102 
        active:scale-98
        shadow-lg hover:shadow-xl
      `,
      neomorph: `
        bg-gray-200 text-[#1a1a1a] border-none
        shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff]
        hover:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]
        active:shadow-[inset_8px_8px_16px_#bebebe,inset_-8px_-8px_16px_#ffffff]
        transition-all duration-200
      `,
      gradient: `
        bg-[#FF6B35] text-white 
        hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] active:scale-98
        shadow-lg hover:shadow-xl
      `,
      outline: `
        bg-white text-[#1a1a1a] border-2 border-[#1a1a1a]
        hover:border-[#0066CC] hover:text-white hover:bg-[#0066CC]
        hover:scale-105 active:scale-98
        shadow-md hover:shadow-xl
      `
    }

    const sizes = {
      sm: 'h-10 px-6 text-xs rounded-lg',
      md: 'h-12 px-8 text-sm rounded-xl',
      lg: 'h-14 px-10 text-base rounded-2xl',
      xl: 'h-16 px-12 text-lg rounded-2xl',
    }

    const LoadingSpinner = () => (
      <svg
        className="animate-spin h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    )

    const ButtonContent = () => (
      <span className="relative z-10 flex items-center gap-2">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          icon && iconPosition === 'left' && (
            <span className="flex-shrink-0">{icon}</span>
          )
        )}
        {children && <span>{children}</span>}
        {!isLoading && icon && iconPosition === 'right' && (
          <span className="flex-shrink-0 group-hover:translate-x-1 transition-transform duration-300">
            {icon}
          </span>
        )}
      </span>
    )

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <ButtonContent />
        
        {/* Shine effect for primary variants */}
        {(variant === 'primary' || variant === 'gradient') && (
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full rounded-inherit" />
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
