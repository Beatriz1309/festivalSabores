function CartaoAtracao({ nome, especialidade, descricao }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-between hover:shadow-md transition">
      <div>
        <span className="inline-block bg-orange-100 text-tomate text-xs font-bold px-2.5 py-1 rounded-full mb-3">
          {especialidade}
        </span>
        <h3 className="text-xl font-bold text-stone-800 mb-2">{nome}</h3>
        <p className="text-stone-600 text-sm leading-relaxed">{descricao}</p>
      </div>
    </div>
  );
}

export default CartaoAtracao;
