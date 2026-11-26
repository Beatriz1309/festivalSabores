import { useEffect, useRef } from "react";

const dados = [
  { rotulo: "Aulas-show", valor: 120 },
  { rotulo: "Degustação", valor: 80 },
  { rotulo: "Almoço Caipira", valor: 45 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const maior = Math.max(...dados.map((d) => d.valor));

    // Limpar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.textBaseline = "middle";

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 200;
      const y = 24 + i * 50;
      const alturaBarra = 28;

      // Barra com gradiente
      const grad = ctx.createLinearGradient(110, y, 110 + largura, y);
      grad.addColorStop(0, "#c2410c");
      grad.addColorStop(1, "#ca8a04");
      ctx.fillStyle = grad;

      // Barra com cantos arredondados
      ctx.beginPath();
      ctx.roundRect(110, y, largura, alturaBarra, 4);
      ctx.fill();

      // Rótulo
      ctx.fillStyle = "#1c1917";
      ctx.font = "600 13px Segoe UI, system-ui, sans-serif";
      ctx.fillText(item.rotulo, 8, y + alturaBarra / 2);

      // Valor
      ctx.fillStyle = "#57534e";
      ctx.font = "700 13px Segoe UI, system-ui, sans-serif";
      ctx.fillText(item.valor, 110 + largura + 8, y + alturaBarra / 2);
    });
  }, []);

  return (
    <section className="px-6 py-16 text-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-titulo mb-2">Inscrições por Atividade</h2>
        <span className="separador mb-8" aria-hidden="true"></span>
        <canvas
          ref={canvasRef}
          width={380}
          height={170}
          role="img"
          aria-label="Gráfico de barras: Aulas-show 120 inscrições, Degustação 80 inscrições e Almoço Caipira 45 inscrições."
          className="mt-6 max-w-full mx-auto"
        />
      </div>
    </section>
  );
}

export default Grafico;
