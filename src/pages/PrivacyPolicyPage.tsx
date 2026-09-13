import { Link } from 'react-router-dom'

export const PrivacyPolicyPage = () => (
  <main className="min-h-screen bg-[#f8fff9] px-4 py-10 text-slate-800 md:px-6">
    <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm md:p-10">
      <Link to="/" className="text-sm font-semibold text-[#1b5e20] underline">
        ← Voltar para a página inicial
      </Link>
      <h1 className="mt-4 text-3xl font-black text-[#1b5e20]">Política de Privacidade</h1>

      <div className="mt-6 space-y-4 text-sm leading-6 text-slate-700">
        <p>
          A Solar Amazzon Energia Solar respeita sua privacidade e protege os dados pessoais
          coletados nesta landing page, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </p>

        <section>
          <h2 className="text-lg font-bold text-[#1b5e20]">1. Quais dados coletamos</h2>
          <p>
            Coletamos apenas os dados informados voluntariamente no formulário: nome completo,
            WhatsApp, cidade, faixa aproximada da conta de energia e tipo de instalação.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#1b5e20]">2. Finalidade do tratamento</h2>
          <p>
            Os dados são usados para contato comercial, simulação de proposta de energia solar e
            envio de informações sobre nossos serviços, mediante consentimento do titular.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#1b5e20]">3. Compartilhamento de dados</h2>
          <p>
            Os dados não são vendidos. O compartilhamento poderá ocorrer somente com fornecedores
            técnicos necessários para operação da página e atendimento comercial, respeitando a LGPD.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#1b5e20]">4. Armazenamento e segurança</h2>
          <p>
            O formulário inicial não solicita CPF. A arquitetura está preparada para futura integração
            segura com backend e banco de dados protegido.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#1b5e20]">5. Direitos do titular</h2>
          <p>
            Você pode solicitar confirmação de tratamento, acesso, correção ou exclusão dos dados
            pessoais, conforme os direitos previstos na LGPD.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-[#1b5e20]">6. Contato</h2>
          <p>
            Para dúvidas sobre privacidade e tratamento de dados, entre em contato pelos canais
            oficiais da Solar Amazzon.
          </p>
        </section>
      </div>
    </div>
  </main>
)
