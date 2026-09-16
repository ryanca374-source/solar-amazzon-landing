type SectionTitleProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}

export const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'light',
}: SectionTitleProps) => (
  <div className={align === 'center' ? 'text-center' : 'text-left'}>
    {eyebrow ? (
      <p
        className={`mb-2 text-xs font-semibold uppercase tracking-[0.22em] ${
          tone === 'dark' ? 'text-lime-300/90' : 'text-emerald-600'
        }`}
      >
        {eyebrow}
      </p>
    ) : null}
    <h2
      className={`text-2xl font-black md:text-3xl ${
        tone === 'dark' ? 'text-white' : 'text-emerald-950'
      }`}
    >
      {title}
    </h2>
    {subtitle ? (
      <p className={`mt-3 text-sm md:text-base ${tone === 'dark' ? 'text-emerald-100/85' : 'text-slate-600'}`}>
        {subtitle}
      </p>
    ) : null}
  </div>
)
