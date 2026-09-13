import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { appConfig } from '../config'
import { trackEvent } from '../lib/analytics'
import {
  createLeadMessage,
  createWhatsappLink,
  formatWhatsappDisplay,
  isValidWhatsappNumber,
} from '../lib/whatsapp'

type LeadFormState = {
  name: string
  whatsapp: string
  city: string
  energyBillRange: string
  installationType: string
  consent: boolean
}

const INITIAL_STATE: LeadFormState = {
  name: '',
  whatsapp: '',
  city: '',
  energyBillRange: '',
  installationType: '',
  consent: false,
}

export const LeadForm = () => {
  const [form, setForm] = useState<LeadFormState>(INITIAL_STATE)
  const [statusMessage, setStatusMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage('')
    setStatusMessage('')

    if (
      !form.name.trim() ||
      !form.whatsapp.trim() ||
      !form.city.trim() ||
      !form.energyBillRange ||
      !form.installationType
    ) {
      setErrorMessage('Preencha todos os campos obrigatórios para continuar.')
      return
    }

    if (!form.consent) {
      setErrorMessage('Você precisa autorizar o contato para enviar o formulário.')
      return
    }

    if (!isValidWhatsappNumber(form.whatsapp)) {
      setErrorMessage('Informe um WhatsApp válido com DDD.')
      return
    }

    if (!appConfig.whatsappNumber) {
      setErrorMessage(
        'Configuração de WhatsApp comercial ausente. Defina VITE_WHATSAPP_NUMBER no ambiente.',
      )
      return
    }

    try {
      const message = createLeadMessage({
        name: form.name.trim(),
        whatsapp: formatWhatsappDisplay(form.whatsapp),
        city: form.city.trim(),
        energyBillRange: form.energyBillRange,
        installationType: form.installationType,
      })

      const whatsappLink = createWhatsappLink(appConfig.whatsappNumber, message)

      trackEvent('lead_form_submit', {
        city: form.city.trim(),
        installationType: form.installationType,
        energyBillRange: form.energyBillRange,
      })
      trackEvent('whatsapp_click', { source: 'lead_form' })

      window.open(whatsappLink, '_blank', 'noopener,noreferrer')
      setStatusMessage(
        'Dados enviados! O WhatsApp foi aberto com sua mensagem preenchida para a Solar Amazzon.',
      )
      setForm(INITIAL_STATE)
    } catch {
      setErrorMessage('Não foi possível abrir o WhatsApp agora. Tente novamente em instantes.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl bg-white p-6 shadow-lg">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium text-[#1b5e20]">
          Nome completo*
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#4caf50] focus:outline-none"
          placeholder="Digite seu nome"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="whatsapp" className="text-sm font-medium text-[#1b5e20]">
          WhatsApp*
        </label>
        <input
          id="whatsapp"
          type="tel"
          value={form.whatsapp}
          onChange={(event) => setForm((current) => ({ ...current, whatsapp: event.target.value }))}
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#4caf50] focus:outline-none"
          placeholder="(92) 99999-9999"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="city" className="text-sm font-medium text-[#1b5e20]">
          Cidade*
        </label>
        <input
          id="city"
          type="text"
          value={form.city}
          onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))}
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#4caf50] focus:outline-none"
          placeholder="Sua cidade"
          required
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="energyBillRange" className="text-sm font-medium text-[#1b5e20]">
          Valor aproximado da conta de energia*
        </label>
        <select
          id="energyBillRange"
          value={form.energyBillRange}
          onChange={(event) =>
            setForm((current) => ({ ...current, energyBillRange: event.target.value }))
          }
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#4caf50] focus:outline-none"
          required
        >
          <option value="">Selecione uma faixa</option>
          <option>Até R$ 200</option>
          <option>R$ 200 a R$ 400</option>
          <option>R$ 400 a R$ 700</option>
          <option>R$ 700 a R$ 1.000</option>
          <option>Acima de R$ 1.000</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="installationType" className="text-sm font-medium text-[#1b5e20]">
          Tipo de instalação*
        </label>
        <select
          id="installationType"
          value={form.installationType}
          onChange={(event) =>
            setForm((current) => ({ ...current, installationType: event.target.value }))
          }
          className="rounded-xl border border-slate-300 px-4 py-3 text-sm focus:border-[#4caf50] focus:outline-none"
          required
        >
          <option value="">Selecione uma opção</option>
          <option>Casa</option>
          <option>Comércio</option>
          <option>Fazenda</option>
          <option>Outro</option>
        </select>
      </div>

      <label className="mt-2 flex items-start gap-2 text-sm text-slate-700">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))}
          className="mt-0.5"
          required
        />
        <span>
          Autorizo a Solar Amazzon a entrar em contato comigo para apresentar informações e
          proposta de energia solar. Li e concordo com a{' '}
          <Link className="font-semibold text-[#1b5e20] underline" to="/politica-de-privacidade">
            Política de Privacidade
          </Link>
          .
        </span>
      </label>

      {errorMessage ? (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">{errorMessage}</p>
      ) : null}

      {statusMessage ? (
        <p className="rounded-lg bg-green-50 px-3 py-2 text-sm text-green-700">{statusMessage}</p>
      ) : null}

      <button
        type="submit"
        className="mt-2 rounded-full bg-[#1b5e20] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#2e7d32]"
      >
        Quero minha simulação gratuita
      </button>
    </form>
  )
}
