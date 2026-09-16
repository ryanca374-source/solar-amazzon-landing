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
      className={`inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 via-lime-300 to-yellow-300 px-6 py-3 text-sm font-black uppercase tracking-[0.14em] text-emerald-950 shadow-[0_12px_28px_-14px_rgba(163,230,53,0.85)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-14px_rgba(163,230,53,0.95)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300 ${className}`}
    >
      {label}
    </button>
  )
}
