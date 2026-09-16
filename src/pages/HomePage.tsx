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
  'Instalações residenciais',
  'Projetos comerciais',
  'Estruturas para fazendas',
  'Painéis solares em operação',
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
    <div className="min-h-screen bg-[#f8fff9] text-slate-800">
      <Header onPrimaryClick={scrollToForm} />

      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 pt-10 md:grid-cols-2 md:px-6">
          <div className="space-y-5">
            <p className="inline-flex rounded-full bg-[#e8f5e9] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#1b5e20]">
              Solar Amazzon — A pioneira da região
            </p>
            <h1 className="text-4xl font-black leading-tight text-[#1b5e20] md:text-5xl">
              Sua conta de energia pode ficar muito menor.
            </h1>
            <p className="text-base text-slate-600">
              Descubra o potencial de economia da sua casa ou empresa com energia solar e receba
              uma proposta personalizada da Solar Amazzon.
            </p>
            <CTAButton label="Quero minha simulação gratuita" onClick={scrollToForm} />
          </div>

          <div className="space-y-4">
            <div className="grid aspect-video place-items-center rounded-3xl border border-dashed border-[#4caf50] bg-white p-6 text-center shadow-sm">
              <p className="text-sm font-medium text-[#1b5e20]">
                Área preparada para vídeo principal da Solar Amazzon
              </p>
            </div>
            <div className="grid h-44 place-items-center rounded-3xl bg-gradient-to-br from-[#1b5e20] to-[#4caf50] p-6 text-center text-white shadow-lg">
              <p className="font-semibold">Imagem de apoio: painéis solares</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <SectionTitle
            eyebrow="Benefícios"
            title="Por que escolher energia solar com a Solar Amazzon"
            subtitle="Soluções pensadas para economia, segurança e atendimento próximo."
            align="center"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </section>

        <section ref={formSectionRef} className="bg-[#1b5e20] py-14" id="formulario">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2 md:px-6">
            <div>
              <SectionTitle
                eyebrow="Simulação personalizada"
                title="Preencha seus dados e fale com um consultor"
                subtitle="Coletamos os dados somente para contato comercial sobre energia solar, conforme LGPD."
              />
            </div>
            <LeadForm />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 md:px-6">
          <SectionTitle
            eyebrow="Prova de confiança"
            title="Espaço para fotos reais de instalações"
            subtitle="Substitua facilmente os blocos abaixo por imagens reais da Solar Amazzon."
            align="center"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {proofItems.map((item) => (
              <div
                key={item}
                className="grid h-48 place-items-center rounded-2xl border border-dashed border-[#4caf50] bg-white text-center text-sm font-medium text-[#1b5e20]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#e8f5e9] py-14">
          <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
            <h2 className="text-3xl font-black text-[#1b5e20] md:text-4xl">
              Está pagando caro na conta de energia?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-700">
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

      <footer className="bg-[#0d3b14] py-10 text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2 md:px-6">
          <div>
            <CompanyLogo
              className="h-12 w-auto rounded-md bg-white/10 p-1"
              fallbackClassName="h-12 w-12"
            />
            <p className="text-xl font-bold">Solar Amazzon Energia Solar</p>
            <p className="mt-1 text-sm text-green-100">A pioneira da região</p>
            <p className="mt-4 text-sm text-green-100">Região de atendimento: sob consulta.</p>
            <p className="mt-1 text-sm text-green-100">
              WhatsApp comercial: configurável via ambiente (VITE_WHATSAPP_NUMBER)
            </p>
            <p className="mt-1 text-sm text-green-100">Instagram: {instagramHandle}</p>
          </div>
          <div className="text-sm text-green-100">
            <p>
              Tratamos seus dados pessoais para contato comercial e apresentação de proposta de
              energia solar, conforme sua autorização.
            </p>
            <Link className="mt-3 inline-block font-semibold text-[#ffc107] underline" to="/politica-de-privacidade">
              Política de Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
