import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BenefitCard } from '../components/BenefitCard'
import { CTAButton } from '../components/CTAButton'
import { CompanyLogo } from '../components/CompanyLogo'
import { Header } from '../components/Header'
import { LeadForm } from '../components/LeadForm'
import { SectionTitle } from '../components/SectionTitle'
import { instagramHandle } from '../config'
import { initTrackers } from '../lib/analytics'

const benefits = [
  {
    title: 'Economia na conta de energia',
    description: 'Tenha mais controle dos custos de energia do seu imóvel.',
  },
  {
    title: 'Energia limpa e sustentável',
    description: 'Produza energia renovável e reduza impactos ambientais.',
  },
  {
    title: 'Atendimento personalizado',
    description: 'Equipe preparada para entender seu perfil e sua necessidade.',
  },
  {
    title: 'Projeto sob medida',
    description: 'Dimensionamento alinhado ao consumo da sua residência ou empresa.',
  },
  {
    title: 'Instalação profissional',
    description: 'Execução organizada com foco em segurança e desempenho.',
  },
  {
    title: 'Empresa pioneira da região',
    description: 'Soluções solares com experiência local e suporte dedicado.',
  },
]

const proofItems = [
  'Projetos residenciais entregues',
  'Instalações comerciais concluídas',
  'Soluções para propriedades rurais',
  'Equipe técnica especializada',
]

export const HomePage = () => {
  const formSectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    initTrackers()
  }, [])

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f3d2a_0%,_#061c14_42%,_#020b08_100%)] text-slate-100">
      <Header onPrimaryClick={scrollToForm} />

      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 pt-12 md:grid-cols-2 md:px-6 md:pt-16">
          <div className="space-y-6">
            <p className="inline-flex rounded-full border border-lime-300/35 bg-lime-300/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-lime-200">
              Solar Amazzon — A pioneira da região
            </p>
            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
              Um novo padrão visual para sua energia começar agora.
            </h1>
            <p className="max-w-xl text-base text-emerald-100/80 md:text-lg">
              Descubra o potencial de economia da sua casa ou empresa com energia solar e receba
              uma proposta personalizada da Solar Amazzon.
            </p>
            <CTAButton label="Quero minha simulação gratuita" onClick={scrollToForm} />
            <div className="grid max-w-md grid-cols-3 gap-3 pt-1">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                <p className="text-2xl font-black text-lime-200">+300</p>
                <p className="text-xs uppercase tracking-wider text-emerald-100/70">Projetos</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                <p className="text-2xl font-black text-lime-200">Até 95%</p>
                <p className="text-xs uppercase tracking-wider text-emerald-100/70">Economia</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center">
                <p className="text-2xl font-black text-lime-200">100%</p>
                <p className="text-xs uppercase tracking-wider text-emerald-100/70">Suporte</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid aspect-video place-items-center rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-500/15 to-lime-200/10 p-6 text-center shadow-[0_30px_50px_-34px_rgba(132,204,22,0.8)] backdrop-blur">
              <p className="text-sm font-semibold text-emerald-100">
                Área premium para vídeo de apresentação da Solar Amazzon
              </p>
            </div>
            <div className="grid h-44 place-items-center rounded-3xl border border-lime-200/20 bg-gradient-to-br from-lime-300/30 via-emerald-400/25 to-transparent p-6 text-center text-white">
              <p className="font-semibold text-emerald-50">Imagem de destaque: painéis em operação</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <SectionTitle
            eyebrow="Benefícios"
            title="Por que escolher energia solar com a Solar Amazzon"
            subtitle="Soluções pensadas para economia, segurança e atendimento próximo."
            align="center"
            tone="dark"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </section>

        <section
          ref={formSectionRef}
          className="mx-auto max-w-6xl px-4 py-14 md:px-6"
          id="formulario"
        >
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-2 md:p-8">
            <div>
              <SectionTitle
                eyebrow="Simulação personalizada"
                title="Preencha seus dados e fale com um consultor"
                subtitle="Coletamos os dados somente para contato comercial sobre energia solar, conforme LGPD."
                tone="dark"
              />
            </div>
            <LeadForm />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <div className="mx-auto max-w-3xl">
            <SectionTitle
              eyebrow="Prova de confiança"
              title="Sua marca com presença forte e profissional"
              subtitle="Use estes espaços para fotos reais das instalações e resultados entregues."
              align="center"
              tone="dark"
            />
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {proofItems.map((item) => (
              <div
                key={item}
                className="grid h-48 place-items-center rounded-3xl border border-dashed border-lime-200/35 bg-white/5 text-center text-sm font-semibold text-lime-100/90 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-4 mb-14 rounded-[2rem] border border-lime-200/15 bg-gradient-to-r from-emerald-600/20 via-lime-300/20 to-yellow-200/20 py-14 backdrop-blur md:mx-auto md:max-w-6xl">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="text-3xl font-black text-white md:text-4xl">
              Está pagando caro na conta de energia?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-emerald-50/90">
              Fale com a Solar Amazzon e descubra o potencial de economia do seu imóvel.
            </p>
            <CTAButton
              label="Quero minha simulação gratuita"
              onClick={scrollToForm}
              className="mt-6"
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/30 py-10 text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 md:px-6">
          <div>
            <CompanyLogo
              className="h-12 w-auto rounded-md border border-white/15 bg-white/10 p-1"
              fallbackClassName="h-12 w-12"
            />
            <p className="text-xl font-black text-lime-200">Solar Amazzon Energia Solar</p>
            <p className="mt-1 text-sm text-emerald-100/80">A pioneira da região</p>
            <p className="mt-4 text-sm text-emerald-100/80">Região de atendimento: sob consulta.</p>
            <p className="mt-1 text-sm text-emerald-100/80">
              WhatsApp comercial: configurável via ambiente (VITE_WHATSAPP_NUMBER)
            </p>
            <p className="mt-1 text-sm text-emerald-100/80">Instagram: {instagramHandle}</p>
          </div>
          <div className="text-sm text-emerald-100/80">
            <p>
              Tratamos seus dados pessoais para contato comercial e apresentação de proposta de
              energia solar, conforme sua autorização.
            </p>
            <Link className="mt-3 inline-block font-semibold text-lime-200 underline" to="/politica-de-privacidade">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
