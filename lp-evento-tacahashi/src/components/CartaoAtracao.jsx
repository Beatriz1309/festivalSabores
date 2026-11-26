const coresEspecialidade = {
    "Cozinha caipira": "bg-terracota/10 text-terracota",
    "Churrasco": "bg-red-100 text-red-700",
    "Confeitaria": "bg-pink-100 text-pink-700",
    "Produtor rural": "bg-verde-erva-light text-verde-erva",
    "Culinária japonesa": "bg-sky-100 text-sky-700",
    "Culinária italiana": "bg-amber-100 text-amber-700",
    "Bebidas": "bg-purple-100 text-purple-700",
    "Música ao vivo": "bg-indigo-100 text-indigo-700",
    "Dança": "bg-fuchsia-100 text-fuchsia-700",
    "Culinária internacional": "bg-teal-100 text-teal-700",
    "Culinária de rua": "bg-orange-100 text-orange-700",
    "Workshop": "bg-cyan-100 text-cyan-700",
    "Artesanato": "bg-lime-100 text-lime-700",
    "Inovação": "bg-violet-100 text-violet-700",
    "Culinária vegana": "bg-emerald-100 text-emerald-700",
    "Culinária de fusão": "bg-rose-100 text-rose-700",
    "Culinária regional": "bg-yellow-100 text-yellow-700",
};

const iniciais = (nome) => {
    const partes = nome.split(" ");
    if (partes.length >= 2) return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
    return nome.slice(0, 2).toUpperCase();
};

function CartaoAtracao({ nome, especialidade, descricao }) {
    const corTag = coresEspecialidade[especialidade] || "bg-stone-100 text-stone-600";

    return (
        <div className="bg-white p-5 rounded-xl border border-stone-100 flex gap-4 items-start hover:shadow-md hover:border-stone-200 transition group">
            {/* Avatar com iniciais */}
            <div className="shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-terracota to-mostarda flex items-center justify-center text-white text-sm font-bold shadow-sm">
                {iniciais(nome)}
            </div>

            <div className="min-w-0">
                <span className={`inline-block text-[11px] font-bold px-2 py-0.5 rounded-full mb-2 ${corTag}`}>
                    {especialidade}
                </span>
                <h3 className="text-base font-bold text-titulo mb-1 leading-snug">{nome}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{descricao}</p>
            </div>
        </div>
    );
}

export default CartaoAtracao;
