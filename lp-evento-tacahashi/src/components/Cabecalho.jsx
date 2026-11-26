import { evento } from "../data/evento";
import { useState } from "react";

function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="sticky top-0 bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center gap-2 group">
                    <span className="text-2xl" aria-hidden="true">🍊</span>
                    <span className="font-bold text-terracota text-lg tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
                        {evento.nome.split(" ").slice(0, 2).join(" ")}
                    </span>
                </a>

                {/* Botão menu mobile */}
                <button
                    type="button"
                    className="md:hidden p-2 text-stone-600 hover:text-terracota transition"
                    onClick={() => setMenuAberto(!menuAberto)}
                    aria-expanded={menuAberto}
                    aria-label="Abrir menu de navegação"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        {menuAberto ? (
                            <>
                                <line x1="6" y1="6" x2="18" y2="18" />
                                <line x1="6" y1="18" x2="18" y2="6" />
                            </>
                        ) : (
                            <>
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </>
                        )}
                    </svg>
                </button>

                <nav aria-label="Menu principal" className={`${menuAberto ? "flex" : "hidden"} md:flex absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent border-b md:border-0 border-stone-200 flex-col md:flex-row items-stretch md:items-center`}>
                    <ul className="flex flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-6 p-4 md:p-0 font-medium text-sm">
                        <li><a href="#sobre" onClick={() => setMenuAberto(false)} className="block py-2 md:py-0 text-stone-600 hover:text-terracota transition">Sobre</a></li>
                        <li><a href="#programacao" onClick={() => setMenuAberto(false)} className="block py-2 md:py-0 text-stone-600 hover:text-terracota transition">Programação</a></li>
                        <li><a href="#atracoes" onClick={() => setMenuAberto(false)} className="block py-2 md:py-0 text-stone-600 hover:text-terracota transition">Atrações</a></li>
                        <li><a href="#faq" onClick={() => setMenuAberto(false)} className="block py-2 md:py-0 text-stone-600 hover:text-terracota transition">Dúvidas</a></li>
                        <li>
                            <a
                                href="#inscricao"
                                onClick={() => setMenuAberto(false)}
                                className="block mt-2 md:mt-0 bg-terracota text-white text-center px-5 py-2 rounded-lg font-semibold hover:bg-orange-800 transition"
                            >
                                Garantir Ingresso
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Cabecalho;
