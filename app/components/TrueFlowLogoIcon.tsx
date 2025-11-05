import Image from 'next/image'

interface TrueFlowLogoIconProps {
  className?: string
  size?: number
}

export default function TrueFlowLogoIcon({ className = '', size = 24 }: TrueFlowLogoIconProps) {
  return (
    <div style={{ 
      width: size, 
      height: size,
      filter: 'brightness(0) invert(1)',
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