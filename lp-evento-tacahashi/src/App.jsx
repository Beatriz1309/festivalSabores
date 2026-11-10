import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Programacao from "./components/Programacao";
import Atracoes from "./components/Atracoes";
import Inscricao from "./components/Inscricao";
import Rodape from "./components/Rodape";

function App() {
  // Controle de estado para abrir/fechar as perguntas de forma independente
  const [openFaq, setOpenFaq] = useState({
    p1: false,
    p2: false,
    p3: false,
  });

  const toggleFaq = (id) => {
    setOpenFaq((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="bg-creme min-h-screen text-stone-800 scroll-smooth">
      {/* Link de pular para o conteúdo (Skip Link) - Aparece no primeiro Tab */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>

      <Cabecalho />
      
      {/* ID de ancoragem adicionado para o Skip Link */}
      <main id="main-content">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Inscricao />

        {/* Passo 3: Seção Perguntas Frequentes adicionada */}
        <section id="faq" className="max-w-3xl mx-auto py-16 px-6 scroll-mt-20">
          <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {/* Pergunta 1 */}
            <div className="border-b border-stone-200 pb-4">
              <h3>
                <button
                  type="button"
                  aria-expanded={openFaq.p1}
                  aria-controls="answer-p1"
                  onClick={() => toggleFaq("p1")}
                  className="w-full text-left flex justify-between items-center py-3 font-semibold text-lg text-stone-800 hover:text-folha transition focus-visible:outline-folha"
                >
                  <span>Como faço para garantir minha vaga na degustação?</span>
                  <span aria-hidden="true" className="ml-2">{openFaq.p1 ? "−" : "+"}</span>
                </button>
              </h3>
              <div
                id="answer-p1"
                hidden={!openFaq.p1}
                className="mt-2 text-stone-600 leading-relaxed"
              >
                As vagas para as aulas-show com degustação são limitadas e preenchidas por ordem de chegada no dia do evento. Garanta seu ingresso geral no formulário acima para ter acesso ao pavilhão.
              </div>
            </div>

            {/* Pergunta 2 */}
            <div className="border-b border-stone-200 pb-4">
              <h3>
                <button
                  type="button"
                  aria-expanded={openFaq.p2}
                  aria-controls="answer-p2"
                  onClick={() => toggleFaq("p2")}
                  className="w-full text-left flex justify-between items-center py-3 font-semibold text-lg text-stone-800 hover:text-folha transition focus-visible:outline-folha"
                >
                  <span>O evento emite certificado de participação?</span>
                  <span aria-hidden="true" className="ml-2">{openFaq.p2 ? "−" : "+"}</span>
                </button>
              </h3>
              <div
                id="answer-p2"
                hidden={!openFaq.p2}
                className="mt-2 text-stone-600 leading-relaxed"
              >
                Sim, todos os participantes que confirmarem presença na entrada do evento receberão um certificado digital em até 7 dias úteis por e-mail.
              </div>
            </div>

            {/* Pergunta 3 */}
            <div className="border-b border-stone-200 pb-4">
              <h3>
                <button
                  type="button"
                  aria-expanded={openFaq.p3}
                  aria-controls="answer-p3"
                  onClick={() => toggleFaq("p3")}
                  className="w-full text-left flex justify-between items-center py-3 font-semibold text-lg text-stone-800 hover:text-folha transition focus-visible:outline-folha"
                >
                  <span>Menores de idade podem participar?</span>
                  <span aria-hidden="true" className="ml-2">{openFaq.p3 ? "−" : "+"}</span>
                </button>
              </h3>
              <div
                id="answer-p3"
                hidden={!openFaq.p3}
                className="mt-2 text-stone-600 leading-relaxed"
              >
                A entrada é livre para todas as idades, porém a participação nas aulas de degustação de bebidas alcoólicas é estritamente restrita a maiores de 18 anos mediante apresentação de documento original.
              </div>
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

export default App;
