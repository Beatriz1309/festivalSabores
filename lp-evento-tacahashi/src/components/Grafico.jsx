import { useEffect, useRef } from "react";

const dados = [
  // 3 itens do seu evento
  { rotulo: "Aulas-show", valor: 120 },
  { rotulo: "Degustação", valor: 80 },
  { rotulo: "Almoço Caipira", valor: 45 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const maior = Math.max(...dados.map((d) => d.valor));

    // Configuração do texto
    ctx.font = "14px sans-serif";
    ctx.textBaseline = "middle";

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220; // a maior barra tem 220px
      const y = 20 + i * 50; // cada barra 50px abaixo da anterior
      const alturaBarra = 30;

      // 1. escolha a cor da barra (use a cor do seu evento)
      ctx.fillStyle = "#ea580c"; // Tom alaranjado / cor do evento

      // 2. desenhe a barra com fillRect, começando em x = 110
      ctx.fillRect(110, y, largura, alturaBarra);

      // 3. troque a cor para escuro e escreva o rótulo em x = 10
      ctx.fillStyle = "#292524"; // Escuro para legibilidade
      ctx.fillText(item.rotulo, 10, y + alturaBarra / 2);

      // 4. escreva o valor logo depois do fim da barra
      ctx.fillText(item.valor, 110 + largura + 10, y + alturaBarra / 2);
    });
  }, []);

  return (
    <section className="px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-stone-800">Inscrições por Atividade</h2>
      <canvas
        ref={canvasRef}
        width={380}
        height={170}
        role="img"
        aria-label="Gráfico de barras: Aulas-show 120 inscrições, Degustação 80 inscrições e Almoço Caipira 45 inscrições."
        className="mt-6 max-w-full mx-auto"
      />
    </section>
  );
}

export default Grafico;
