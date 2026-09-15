type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: SectionTitleProps) => (
  <div className={align === 'center' ? 'text-center' : 'text-left'}>
    {eyebrow ? (
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#4caf50]">
        {eyebrow}
      </p>
    ) : null}
    <h2 className="text-2xl font-extrabold text-[#1b5e20] md:text-3xl">{title}</h2>
    {subtitle ? <p className="mt-3 text-sm text-slate-600 md:text-base">{subtitle}</p> : null}
  </div>
)
