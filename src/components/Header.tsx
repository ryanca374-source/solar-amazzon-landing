import { CTAButton } from './CTAButton'
import { CompanyLogo } from './CompanyLogo'

type HeaderProps = {
  onPrimaryClick: () => void
}

export const Header = ({ onPrimaryClick }: HeaderProps) => (
  <header className="sticky top-0 z-20 border-b border-[#e8f5e9] bg-white/95 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
      <div className="flex items-center gap-3">
        <CompanyLogo className="h-10 w-10 rounded-full" fallbackClassName="h-10 w-10" />
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#1b5e20]">Solar Amazzon</p>
          <p className="text-xs text-slate-600">A pioneira da região</p>
        </div>
      </div>
      <CTAButton label="Quero minha simulação" onClick={onPrimaryClick} className="px-4 py-2 text-xs" />
    </div>
  </header>
)
