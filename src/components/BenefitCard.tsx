type BenefitCardProps = {
  title: string
  description: string
}

export const BenefitCard = ({ title, description }: BenefitCardProps) => (
  <article className="group rounded-3xl border border-emerald-200/70 bg-white/90 p-6 shadow-[0_18px_38px_-28px_rgba(5,150,105,0.65)] transition hover:-translate-y-1 hover:border-lime-300 hover:shadow-[0_22px_42px_-24px_rgba(132,204,22,0.55)]">
    <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-lime-400 text-sm font-black text-white">
      ✓
    </span>
    <h3 className="text-lg font-black text-emerald-950">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
  </article>
)
