import { evento } from "../data/evento";

function Rodape() {
    return (
        <footer className="bg-stone-900 text-stone-400 py-12 px-6">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
                    <div className="text-center md:text-left">
                        <p className="font-bold text-white text-lg mb-1" style={{ fontFamily: "var(--font-display)" }}>
                            {evento.nome}
                        </p>
                        <p className="text-sm">{evento.local}</p>
                    </div>
                    <nav aria-label="Links do rodapé">
                        <ul className="flex gap-6 text-sm">
                            <li><a href="#sobre" className="hover:text-white transition">Sobre</a></li>
                            <li><a href="#programacao" className="hover:text-white transition">Programação</a></li>
                            <li><a href="#atracoes" className="hover:text-white transition">Atrações</a></li>
                            <li><a href="#inscricao" className="hover:text-white transition">Inscrição</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="border-t border-stone-800 pt-6 text-center">
                    <p className="text-xs text-stone-500">
                        Evento fictício criado para fins didáticos · {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Rodape;
