import Image from 'next/image'

interface TrueFlowLogoIconProps {
  className?: string
  size?: number
}

export default function TrueFlowLogoIcon({ className = '', size = 24 }: TrueFlowLogoIconProps) {
  return (
    <Image
      src="/trueflow-logo-icon.svg"
      alt="TrueFlow"
      width={size}
      height={size}
      className={className}
    />
  )
}