import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    // 1. Se o navegador não tiver 'Notification' em window,
    //    mostre a mensagem "Este navegador não aceita notificações." e pare (return)
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    // 2. Peça a permissão e guarde a resposta numa constante
    //    (lembre: requestPermission devolve uma Promise, use await)
    const permissao = await Notification.requestPermission();

    // 3. Se a resposta for diferente de 'granted',
    //    mostre "Você não permitiu as notificações." e pare
    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    // 4. Espere o Service Worker ficar pronto e guarde em 'registro'
    const registro = await navigator.serviceWorker.ready;

    // 5. Mostre a notificação com registro.showNotification(...)
    //    título: nome do seu evento
    //    body: uma frase de lembrete
    //    icon: '/icone-192.png'
    registro.showNotification("Festival Sabores da Alta Paulista", {
      body: "Lembrete: o Festival Sabores da Alta Paulista está chegando!",
      icon: "/icone-192.png",
    });

    // 6. Mostre na tela a mensagem "Lembrete ativado!"
    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="mt-4 flex flex-col items-center">
      <button
        type="button"
        onClick={ativarLembrete}
        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 px-6 rounded-xl shadow transition duration-200 cursor-pointer text-base"
      >
        Me lembre do evento
      </button>
      {mensagem && (
        <p role="status" className="mt-2 text-stone-700 font-medium text-sm">
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;