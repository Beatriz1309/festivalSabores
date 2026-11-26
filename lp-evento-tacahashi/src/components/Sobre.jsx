import { evento } from "../data/evento";

function Sobre() {
    return (
        <section id="sobre" className="py-20 px-6 scroll-mt-20">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-titulo mb-4">Sobre o Evento</h2>
                    <span className="separador" aria-hidden="true"></span>
                </div>

                <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-14 leading-relaxed text-center">
                    {evento.sobre}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {evento.numeros.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl border border-stone-100 text-center hover:shadow-md transition group"
                        >
                            <span className="block text-5xl font-black text-terracota mb-2 group-hover:scale-105 transition-transform">
                                {item.valor}
                            </span>
                            <span className="text-stone-500 font-medium uppercase tracking-widest text-xs">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sobre;
