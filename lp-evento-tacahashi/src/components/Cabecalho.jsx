import { evento } from "../data/evento";

function Cabecalho() {
    return (
        <header className="sticky top-0 bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center border-b-4 border-tomate">
            <span className="font-bold text-tomate text-lg sm:text-xl">{evento.nome}</span>
            <nav aria-label="Menu principal">
                <ul className="flex items-center gap-4 md:gap-6 font-medium text-sm sm:text-base">
                    <li><a href="#sobre" className="hover:text-folha transition">Sobre</a></li>
                    <li><a href="#programacao" className="hover:text-folha transition">Programação</a></li>
                    <li><a href="#atracoes" className="hover:text-folha transition">Atrações</a></li>
                    {/* Novo link exigido no Passo 3 */}
                    <li><a href="#faq" className="hover:text-folha transition">Dúvidas</a></li>
                    <li>
                        <a 
                            href="#inscricao" 
                            className="bg-folha text-white px-3 py-1.5 rounded shadow hover:bg-emerald-700 transition"
                        >
                            Garantir Ingresso
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Cabecalho;
