import { evento } from "../data/evento";

function Sobre() {
    return (
        <section id="sobre" className="py-16 px-6 max-w-5xl mx-auto text-center scroll-mt-20">
            <h2 className="text-3xl font-bold text-stone-800 mb-6">Sobre o Evento</h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                {evento.sobre}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {evento.numeros.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                        <span className="block text-4xl font-black text-folha mb-2">{item.valor}</span>
                        <span className="text-stone-500 font-medium uppercase tracking-wider text-sm">{item.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Sobre;
