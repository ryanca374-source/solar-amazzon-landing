import { useState } from 'react'

type CompanyLogoProps = {
  className?: string
  fallbackClassName?: string
}

const LOGO_PATH = '/assets/solar-amazzon-logo.png'

export const CompanyLogo = ({
  className = 'h-10 w-10',
  fallbackClassName = 'h-10 w-10',
}: CompanyLogoProps) => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div
        className={`grid place-items-center rounded-full bg-[#1b5e20] text-lg font-bold text-[#ffc107] ${fallbackClassName}`}
      >
        SA
      </div>
    )
  }

  return (
    <img
      src={LOGO_PATH}
      alt="Logo Solar Amazzon"
      className={`object-contain ${className}`}
      onError={() => setHasError(true)}
      loading="eager"
      decoding="async"
    />
  )
}
