import { evento } from "../data/evento";
import BotaoLembrete from "./BotaoLembrete";

function Hero() {
    return (
        <section className="relative overflow-hidden py-24 md:py-32 px-6">
            {/* Fundo decorativo */}
            <div className="absolute inset-0 bg-gradient-to-br from-terracota-light via-creme to-mostarda-light opacity-60" aria-hidden="true" />
            <div className="absolute top-10 right-10 w-72 h-72 bg-terracota/5 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute bottom-10 left-10 w-56 h-56 bg-mostarda/5 rounded-full blur-3xl" aria-hidden="true" />

            <div className="relative max-w-3xl mx-auto text-center">
                <span className="inline-block text-sm font-semibold tracking-widest uppercase text-terracota mb-4 bg-terracota/10 px-4 py-1.5 rounded-full">
                    {evento.data}
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-titulo mb-6 leading-[1.1] tracking-tight">
                    {evento.nome}
                </h1>

                <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    {evento.slogan}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <div className="flex items-center gap-2 text-stone-600">
                        <span aria-hidden="true">📍</span>
                        <span className="text-sm font-medium">{evento.local}</span>
                    </div>
                    <span className="hidden sm:block text-stone-300">|</span>
                    <div className="flex items-center gap-2 text-stone-600">
                        <span aria-hidden="true">🕐</span>
                        <span className="text-sm font-medium">{evento.horario}</span>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="#inscricao"
                        className="inline-block bg-terracota text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg shadow-terracota/20 hover:bg-orange-800 transition hover:-translate-y-0.5"
                    >
                        Inscreva-se Agora
                    </a>
                    <a
                        href="#programacao"
                        className="inline-block border-2 border-stone-300 text-stone-700 font-semibold text-base px-8 py-3.5 rounded-lg hover:border-terracota hover:text-terracota transition"
                    >
                        Ver Programação
                    </a>
                </div>

                <div className="mt-6">
                    <BotaoLembrete />
                </div>
            </div>
        </section>
    );
}

export default Hero;
