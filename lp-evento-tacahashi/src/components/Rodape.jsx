import { evento } from "../data/evento";

function Rodape() {
    return (
        <footer className="bg-stone-900 text-stone-400 text-center py-8 px-6 text-sm border-t-4 border-folha">
            <p className="font-bold text-white mb-1">{evento.nome}</p>
            <p className="mb-4">{evento.local}</p>
            <p className="text-xs text-stone-500 italic">Evento fictício criado para fins didáticos</p>
        </footer>
    );
}

export default Rodape;
