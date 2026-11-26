import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    const permissao = await Notification.requestPermission();

    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    const registro = await navigator.serviceWorker.ready;

    registro.showNotification("Festival Sabores da Alta Paulista", {
      body: "Lembrete: o Festival Sabores da Alta Paulista está chegando!",
      icon: "/icone-192.png",
    });

    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={ativarLembrete}
        className="text-sm text-stone-500 underline underline-offset-4 decoration-stone-300 hover:text-terracota hover:decoration-terracota transition cursor-pointer"
      >
        🔔 Ativar lembrete do evento
      </button>
      {mensagem && (
        <p role="status" className="text-xs text-stone-600 font-medium bg-verde-erva-light px-3 py-1 rounded-full">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;
