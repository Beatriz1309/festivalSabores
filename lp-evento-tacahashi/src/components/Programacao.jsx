import { evento } from "../data/evento";

function Programacao() {
    return (
        <section id="programacao" className="bg-white py-16 px-6 scroll-mt-20">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-stone-800 mb-10">Programação Completa</h2>
                <div className="space-y-4">
                    {evento.programacao.map((atividade) => (
                        <div key={atividade.id} className="flex flex-col sm:flex-row items-start sm:items-center bg-creme p-4 rounded-xl border-l-4 border-folha gap-2 sm:gap-6">
                            <span className="bg-folha text-white text-xs font-bold px-2.5 py-1 rounded-md uppercase w-12 text-center">
                                {atividade.dia}
                            </span>
                            <span className="font-bold text-stone-700 min-w-[60px]">
                                {atividade.horario}
                            </span>
                            <p className="text-stone-600 font-medium">
                                {atividade.atividade}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Programacao;
