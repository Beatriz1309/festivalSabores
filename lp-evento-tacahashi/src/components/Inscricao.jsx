import { useState } from "react";
import { evento } from "../data/evento";

function Inscricao() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [ingresso, setIngresso] = useState(evento.ingressos[0].tipo);
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nome && email) {
            setEnviado(true);
        }
    };

    return (
        <section id="inscricao" className="bg-white py-16 px-6 border-t border-stone-100 scroll-mt-20">
            <div className="max-w-md mx-auto bg-creme p-8 rounded-2xl shadow-sm border border-orange-100">
                {enviado ? (
                    <div className="text-center py-6 animate-fade-in">
                        <div className="text-4xl mb-4">🎉</div>
                        <h3 className="text-2xl font-bold text-folha mb-2">Inscrição Confirmada!</h3>
                        <p className="text-stone-600">
                            Obrigado, <strong className="text-stone-800">{nome}</strong>! Seu ingresso para{" "}
                            <strong className="text-stone-800">{ingresso}</strong> foi enviado para o e-mail cadastrado.
                        </p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-stone-800 mb-2 text-center">Garanta sua presença</h2>
                        <p className="text-stone-500 text-sm mb-6 text-center">A entrada é gratuita, mas as vagas para as aulas-show com degustação são limitadas!</p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-1">Nome Completo</label>
                                <input
                                    type="text"
                                    required
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                    className="w-full bg-white p-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-folha"
                                    placeholder="Seu nome"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-1">E-mail</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-white p-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-folha"
                                    placeholder="seu@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-stone-700 mb-1">Tipo de Ingresso</label>
                                <select
                                    value={ingresso}
                                    onChange={(e) => setIngresso(e.target.value)}
                                    className="w-full bg-white p-3 rounded-lg border border-stone-200 focus:outline-none focus:ring-2 focus:ring-folha"
                                >
                                    {evento.ingressos.map((ing, index) => (
                                        <option key={index} value={ing.tipo}>
                                            {ing.tipo} — ({ing.preco})
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button type="submit" className="w-full bg-tomate text-white font-bold p-3 rounded-lg hover:bg-red-700 transition mt-2 shadow">
                                Confirmar Inscrição
                            </button>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
}

export default Inscricao;
