import { evento } from "../data/evento";

const coresDia = {
    "Sex": { bg: "bg-vinho", text: "text-white" },
    "Sáb": { bg: "bg-terracota", text: "text-white" },
    "Dom": { bg: "bg-mostarda", text: "text-white" },
};

function Programacao() {
    return (
        <section id="programacao" className="bg-creme-escuro py-20 px-6 scroll-mt-20">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-titulo mb-4">Programação Completa</h2>
                    <span className="separador" aria-hidden="true"></span>
                </div>

                <div className="space-y-3">
                    {evento.programacao.map((atividade) => {
                        const cores = coresDia[atividade.dia] || { bg: "bg-stone-700", text: "text-white" };
                        return (
                            <div
                                key={atividade.id}
                                className="flex flex-col sm:flex-row items-start sm:items-center bg-white p-4 sm:p-5 rounded-lg border border-stone-100 gap-3 sm:gap-5 hover:shadow-sm transition"
                            >
                                <span className={`${cores.bg} ${cores.text} text-xs font-bold px-3 py-1 rounded uppercase tracking-wide min-w-[48px] text-center`}>
                                    {atividade.dia}
                                </span>
                                <span className="font-bold text-titulo min-w-[52px] tabular-nums">
                                    {atividade.horario}
                                </span>
                                <p className="text-stone-600">
                                    {atividade.atividade}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Programacao;
