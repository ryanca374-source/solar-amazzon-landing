import { CTAButton } from './CTAButton'
import { CompanyLogo } from './CompanyLogo'

type HeaderProps = {
  onPrimaryClick: () => void
}

export const Header = ({ onPrimaryClick }: HeaderProps) => (
  <header className="sticky top-0 z-30 border-b border-white/10 bg-emerald-950/85 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
      <div className="flex items-center gap-3">
        <CompanyLogo className="h-10 w-10 rounded-full border border-white/20" fallbackClassName="h-10 w-10" />
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-lime-200">Solar Amazzon</p>
          <p className="text-xs text-emerald-100/80">A pioneira da região</p>
        </div>
      </div>
      <CTAButton
        label="Quero minha simulação"
        onClick={onPrimaryClick}
        className="px-4 py-2 text-[0.65rem]"
      />
    </div>
  </header>
)
