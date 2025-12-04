import Image from 'next/image'

interface TrueFlowLogoIconProps {
  className?: string
  size?: number
  isDarkMode?: boolean
}

export default function TrueFlowLogoIcon({ className = '', size = 24, isDarkMode = true }: TrueFlowLogoIconProps) {
  // In dark mode: invert to white
  // In light mode: convert to black (brightness(0) makes it black)
  const filter = isDarkMode ? 'brightness(0) invert(1)' : 'brightness(0)'

  return (
    <div style={{
      width: size,
      height: size,
      filter,
      display: 'inline-block'
    }}>
      <Image
        src="/true-flow-icon.png"
        alt="TrueFlow"
        width={size}
        height={size}
        className={className}
        style={{ display: 'block' }}
      />
    </div>
  )
}