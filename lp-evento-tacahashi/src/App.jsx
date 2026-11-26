import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Programacao from "./components/Programacao";
import Atracoes from "./components/Atracoes";
import Inscricao from "./components/Inscricao";
import Rodape from "./components/Rodape";

function App() {
  const [openFaq, setOpenFaq] = useState({
    p1: false,
    p2: false,
    p3: false,
  });

  const toggleFaq = (id) => {
    setOpenFaq((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const perguntas = [
    {
      id: "p1",
      pergunta: "Como faço para garantir minha vaga na degustação?",
      resposta:
        "As vagas para as aulas-show com degustação são limitadas e preenchidas por ordem de chegada no dia do evento. Garanta seu ingresso geral no formulário acima para ter acesso ao pavilhão.",
    },
    {
      id: "p2",
      pergunta: "O evento emite certificado de participação?",
      resposta:
        "Sim, todos os participantes que confirmarem presença na entrada do evento receberão um certificado digital em até 7 dias úteis por e-mail.",
    },
    {
      id: "p3",
      pergunta: "Menores de idade podem participar?",
      resposta:
        "A entrada é livre para todas as idades, porém a participação nas aulas de degustação de bebidas alcoólicas é estritamente restrita a maiores de 18 anos mediante apresentação de documento original.",
    },
  ];

  return (
    <div className="bg-creme min-h-screen text-texto scroll-smooth">
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>

      <Cabecalho />

      <main id="main-content">
        <Hero />
        <Sobre />
        <Programacao />
        <Atracoes />
        <Inscricao />

        {/* FAQ */}
        <section id="faq" className="py-20 px-6 scroll-mt-20">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-titulo mb-4">
                Perguntas Frequentes
              </h2>
              <span className="separador" aria-hidden="true"></span>
            </div>

            <div className="space-y-3">
              {perguntas.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg border border-stone-100 overflow-hidden"
                >
                  <h3>
                    <button
                      type="button"
                      aria-expanded={openFaq[faq.id]}
                      aria-controls={`answer-${faq.id}`}
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left flex justify-between items-center p-5 font-semibold text-titulo hover:text-terracota transition"
                    >
                      <span>{faq.pergunta}</span>
                      <span
                        aria-hidden="true"
                        className={`ml-3 text-stone-400 transition-transform ${openFaq[faq.id] ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`answer-${faq.id}`}
                    hidden={!openFaq[faq.id]}
                    className="px-5 pb-5 text-stone-600 leading-relaxed text-sm"
                  >
                    {faq.resposta}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

export default App;
