const ONLY_DIGITS_REGEX = /\D/g

export const normalizeWhatsappNumber = (rawPhone: string) => {
  const digits = rawPhone.replace(ONLY_DIGITS_REGEX, '')
  if (!digits) {
    return ''
  }

  return digits.startsWith('55') ? digits : `55${digits}`
}

export const isValidWhatsappNumber = (rawPhone: string) => {
  const normalized = normalizeWhatsappNumber(rawPhone)
  return normalized.length >= 12 && normalized.length <= 13
}

export const formatWhatsappDisplay = (rawPhone: string) => {
  const normalized = normalizeWhatsappNumber(rawPhone)
  return normalized ? `+${normalized}` : ''
}

export const createLeadMessage = (lead: {
  name: string
  whatsapp: string
  city: string
  energyBillRange: string
  installationType: string
}) => `☀️ NOVO LEAD — SOLAR AMAZZON
Novo cliente interessado em energia solar!

👤 Nome: ${lead.name}
📱 WhatsApp: ${lead.whatsapp}
📍 Cidade: ${lead.city}
💰 Conta de energia: ${lead.energyBillRange}
🏠 Tipo de instalação: ${lead.installationType}

Entre em contato com o cliente para realizar a simulação e apresentar uma proposta.`

export const createWhatsappLink = (phone: string, message: string) =>
  `https://wa.me/${phone.replace(ONLY_DIGITS_REGEX, '')}?text=${encodeURIComponent(message)}`
