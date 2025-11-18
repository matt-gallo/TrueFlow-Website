import Link from 'next/link'

interface NavAuthButtonsProps {
  variant?: 'desktop' | 'mobile'
  className?: string
  onNavigate?: () => void
}

export function NavAuthButtons({ variant = 'desktop', className = '', onNavigate }: NavAuthButtonsProps) {
  const isMobile = variant === 'mobile'
  const containerClasses = `${isMobile ? 'flex flex-col gap-3 w-full' : 'flex items-center gap-4'} ${className}`.trim()
  const signInClasses = isMobile
    ? 'w-full text-center px-6 py-3 rounded-full border border-white/20 text-white/90 hover:text-white hover:border-white/40 font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black'
    : 'text-white/80 hover:text-white font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black'
  const signUpClasses = `${
    isMobile ? 'w-full px-6 py-3 text-base' : 'px-5 py-2.5 text-sm'
  } inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold shadow-lg shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black`

  return (
    <div className={containerClasses}>
      <Link href="https://login.trueflow.ai" className={signInClasses} onClick={onNavigate}>
        Sign In
      </Link>
      <Link href="/sign-up" className={signUpClasses} onClick={onNavigate}>
        Start 14-Day Trial
      </Link>
    </div>
  )
}
