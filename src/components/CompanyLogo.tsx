import { useState } from 'react'

type CompanyLogoProps = {
  className?: string
  fallbackClassName?: string
}

const LOGO_PATHS = [
  '/assets/solar-amazzon-logo.png',
  'https://github.com/user-attachments/assets/6a5ff717-44a3-46d4-a63c-5c786c35760f',
]

export const CompanyLogo = ({
  className = 'h-10 w-10',
  fallbackClassName = 'h-10 w-10',
}: CompanyLogoProps) => {
  const [logoIndex, setLogoIndex] = useState(0)
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
      src={LOGO_PATHS[logoIndex]}
      alt="Logo Solar Amazzon"
      className={`object-contain ${className}`}
      onError={() => {
        if (logoIndex < LOGO_PATHS.length - 1) {
          setLogoIndex((current) => current + 1)
          return
        }
        setHasError(true)
      }}
      loading="eager"
      decoding="async"
    />
  )
}
