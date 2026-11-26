import { evento } from "../data/evento";
import CartaoAtracao from "./CartaoAtracao";

function Atracoes() {
    return (
        <section id="atracoes" className="py-20 px-6 scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-titulo mb-4">
                        Quem Participa
                    </h2>
                    <span className="separador" aria-hidden="true"></span>
                    <p className="text-stone-500 mt-4 max-w-xl mx-auto">
                        Cozinheiros, produtores rurais, artistas e músicos que fazem o festival acontecer.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {evento.atracoes.map((atracao) => (
                        <CartaoAtracao
                            key={atracao.id}
                            nome={atracao.nome}
                            especialidade={atracao.especialidade}
                            descricao={atracao.descricao}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Atracoes;
