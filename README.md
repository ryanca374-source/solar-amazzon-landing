# Solar Amazzon Landing Page

Landing page de captação de leads para a Solar Amazzon, desenvolvida com **React + Vite + TypeScript + Tailwind CSS**.

## Requisitos

- Node.js 20+
- npm 10+

## Executar localmente

```bash
npm install
cp .env.example .env
npm run dev
```

Abra `http://localhost:5173`.

## Configuração de ambiente

Preencha no arquivo `.env`:

- `VITE_WHATSAPP_NUMBER`: número comercial no formato internacional, sem `+` (ex.: `5592999999999`)
- `VITE_GA_MEASUREMENT_ID`: ID real do Google Analytics (opcional)
- `VITE_META_PIXEL_ID`: ID real do Meta Pixel (opcional)

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura principal

- `src/pages/HomePage.tsx`: landing page com as 8 seções
- `src/components/LeadForm.tsx`: formulário, validação e envio para WhatsApp
- `src/pages/PrivacyPolicyPage.tsx`: Política de Privacidade (LGPD)
- `src/lib/analytics.ts`: estrutura de eventos para GA/Meta Pixel

## Deploy

### GitHub Pages

1. Rode `npm run build`
2. Publique o conteúdo de `dist/` no branch de publicação (ou use GitHub Actions)
3. Como o app usa `BrowserRouter`, configure fallback SPA (ex.: copiar `index.html` para `404.html` no deploy do Pages)

### Vercel

- Importar repositório
- Definir variáveis de ambiente no painel
- Build command: `npm run build`
- Output directory: `dist`

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Definir variáveis de ambiente no painel

## Observações

- Não é coletado CPF no formulário inicial.
- O envio gera link direto para WhatsApp com mensagem pré-preenchida.
- Se o WhatsApp comercial não estiver configurado, o formulário exibe erro e preserva os dados digitados.
- Para usar a logo oficial, adicione o arquivo em `public/assets/solar-amazzon-logo.png`.
