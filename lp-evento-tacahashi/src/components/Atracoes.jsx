import { evento } from "../data/evento";
import CartaoAtracao from "./CartaoAtracao";

function Atracoes() {
    return (
        <section id="atracoes" className="py-16 px-6 max-w-5xl mx-auto scroll-mt-20">
            <h2 className="text-3xl font-bold text-center text-stone-800 mb-10">Cozinheiros e Produtores</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {evento.atracoes.map((atracao) => (
                    <CartaoAtracao
                        key={atracao.id}
                        nome={atracao.nome}
                        especialidade={atracao.especialidade}
                        descricao={atracao.descricao}
                    />
                ))}
            </div>
        </section>
    );
}

export default Atracoes;
