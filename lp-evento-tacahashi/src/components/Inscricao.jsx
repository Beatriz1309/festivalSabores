import { useState, useId } from "react";
import { evento } from "../data/evento";

function Inscricao() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [ingresso, setIngresso] = useState(evento.ingressos[0].tipo);
    const [enviado, setEnviado] = useState(false);

    const nomeId = useId();
    const emailId = useId();
    const ingressoId = useId();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome && email) {
            setEnviado(true);
        }
    };

    return (
        <section id="inscricao" className="bg-creme-escuro py-20 px-6 scroll-mt-20">
            <div className="max-w-md mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-titulo mb-4">Garanta sua Presença</h2>
                    <span className="separador" aria-hidden="true"></span>
                    <p className="text-stone-500 mt-4 text-sm">
                        A entrada é gratuita — as vagas para as aulas-show com degustação são limitadas!
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
                    {enviado ? (
                        <div role="status" className="text-center py-6 animar-entrada">
                            <span className="text-5xl mb-4 block" aria-hidden="true">🎉</span>
                            <h3 className="text-2xl font-bold text-verde-erva mb-2">Inscrição Confirmada!</h3>
                            <p className="text-stone-600">
                                Obrigado, <strong className="text-titulo">{nome}</strong>! Seu ingresso para{" "}
                                <strong className="text-titulo">{ingresso}</strong> foi enviado para o e-mail cadastrado.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor={nomeId} className="block text-sm font-semibold text-titulo mb-1.5">
                                    Nome Completo
                                </label>
                                <input
                                    id={nomeId}
                                    type="text"
                                    required
                                    autoComplete="name"
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    className="w-full bg-creme p-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-terracota/40 focus:border-terracota transition"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label htmlFor={emailId} className="block text-sm font-semibold text-titulo mb-1.5">
                                    E-mail
                                </label>
                                <input
                                    id={emailId}
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-creme p-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-terracota/40 focus:border-terracota transition"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor={ingressoId} className="block text-sm font-semibold text-titulo mb-1.5">
                                    Tipo de Ingresso
                                </label>
                                <select
                                    id={ingressoId}
                                    value={ingresso}
                                    onChange={(e) => setIngresso(e.target.value)}
                                    className="w-full bg-creme p-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-terracota/40 focus:border-terracota transition"
                                >
                                    {evento.ingressos.map((ing, index) => (
                                        <option key={index} value={ing.tipo}>
                                            {ing.tipo} — ({ing.preco})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-terracota text-white font-bold p-3.5 rounded-lg hover:bg-orange-800 transition mt-1 shadow-sm"
                            >
                                Confirmar Inscrição
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Inscricao;
