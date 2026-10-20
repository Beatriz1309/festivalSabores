import { evento } from "../data/evento";

function Hero() {
    return (
        <section className="bg-gradient-to-b from-orange-50 to-creme py-20 px-6 text-center border-b border-orange-100">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-tomate mb-4 leading-tight">
                    {evento.nome}
                </h1>
                <p className="text-xl md:text-2xl text-folha font-semibold mb-8">
                    {evento.slogan}
                </p>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 inline-block mb-8 text-left">
                    <p className="mb-2">📅 <strong className="text-stone-700">{evento.data}</strong> — {evento.horario}</p>
                    <p>📍 <strong>{evento.local}</strong></p>
                </div>
                <div>
                    <a href="#inscricao" className="inline-block bg-tomate text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:bg-red-700 transition transform hover:-translate-y-0.5">
                        Inscreva-se Agora
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
