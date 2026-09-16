import { Link } from 'react-router-dom'

export const PrivacyPolicyPage = () => (
  <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#0f3d2a_0%,_#061c14_42%,_#020b08_100%)] px-4 py-10 text-slate-100 md:px-6">
    <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/95 p-6 text-slate-800 shadow-[0_22px_42px_-26px_rgba(15,23,42,0.7)] md:p-10">
      <Link to="/" className="text-sm font-semibold text-emerald-800 underline">
        ← Voltar para a página inicial
      </Link>
      <h1 className="mt-4 text-3xl font-black text-emerald-950">Política de Privacidade</h1>

      <div className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
        <p>
          A Solar Amazzon Energia Solar respeita sua privacidade e protege os dados pessoais
          coletados nesta landing page, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </p>

        <section>
          <h2 className="text-lg font-bold text-emerald-900">1. Quais dados coletamos</h2>
          <p>
            Coletamos apenas os dados informados voluntariamente no formulário: nome completo,
            WhatsApp, cidade, faixa aproximada da conta de energia e tipo de instalação.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-emerald-900">2. Finalidade do tratamento</h2>
          <p>
            Os dados são usados para contato comercial, simulação de proposta de energia solar e
            envio de informações sobre nossos serviços, mediante consentimento do titular.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-emerald-900">3. Compartilhamento de dados</h2>
          <p>
            Os dados não são vendidos. O compartilhamento poderá ocorrer somente com fornecedores
            técnicos necessários para operação da página e atendimento comercial, respeitando a LGPD.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-emerald-900">4. Armazenamento e segurança</h2>
          <p>
            O formulário inicial não solicita CPF. A arquitetura está preparada para futura integração
            segura com backend e banco de dados protegido.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-emerald-900">5. Direitos do titular</h2>
          <p>
            Você pode solicitar confirmação de tratamento, acesso, correção ou exclusão dos dados
            pessoais, conforme os direitos previstos na LGPD.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-emerald-900">6. Contato</h2>
          <p>
            Para dúvidas sobre privacidade e tratamento de dados, entre em contato pelos canais
            oficiais da Solar Amazzon.
          </p>
        </section>
      </div>
    </div>
  </main>
)
