import { trackEvent } from '../lib/analytics'

type CTAButtonProps = {
  label: string
  onClick?: () => void
  className?: string
}

export const CTAButton = ({ label, onClick, className = '' }: CTAButtonProps) => {
  const handleClick = () => {
    trackEvent('cta_click', { label })
    onClick?.()
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rounded-full bg-[#ffc107] px-6 py-3 text-sm font-bold uppercase tracking-wide text-[#1b5e20] shadow-md transition hover:-translate-y-0.5 hover:bg-[#ffd54f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b5e20] ${className}`}
    >
      {label}
    </button>
  )
}
