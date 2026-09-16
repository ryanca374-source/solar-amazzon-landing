type BenefitCardProps = {
  title: string
  description: string
}

export const BenefitCard = ({ title, description }: BenefitCardProps) => (
  <article className="rounded-2xl border border-[#e8f5e9] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <h3 className="text-lg font-semibold text-[#1b5e20]">{title}</h3>
    <p className="mt-2 text-sm text-slate-600">{description}</p>
  </article>
)
