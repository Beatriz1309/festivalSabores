export const evento = {
    nome: "Festival Sabores da Alta Paulista",
    slogan: "Três dias para provar o melhor da cozinha da região.",
    data: "4 a 6 de junho de 2027",
    horario: "Das 11h às 22h",
    local: "Recinto de Exposições — Osvaldo Cruz/SP",
    sobre: "Vinte barracas de restaurantes, produtores rurais e cozinheiros da região, com aulas-show e uma competição de pratos feitos com ingredientes locais. A entrada é gratuita; os ingressos são só para as aulas-show com degustação.",
    numeros: [
        { label: "Barracas", valor: "20" },
        { label: "Aulas-show", valor: "9" },
        { label: "Dias de Festival", valor: "3" }
    ],
    programacao: [
        { id: 1, dia: "Sex", horario: "18h", atividade: "Abertura com música ao vivo" },
        { id: 2, dia: "Sáb", horario: "11h", atividade: "Aula-show: pamonha e curau de milho verde" },
        { id: 3, dia: "Sáb", horario: "15h", atividade: "Aula-show: doces de leite e de abóbora" },
        { id: 4, dia: "Sáb", horario: "19h", atividade: "Competição de pratos com ingredientes locais" },
        { id: 5, dia: "Dom", horario: "12h", atividade: "Almoço caipira coletivo" },
        { id: 6, dia: "Dom", horario: "17h", atividade: "Premiação e encerramento" }
    ],
    atracoes: [
        { id: 1, nome: "Dona Cida", especialidade: "Cozinha caipira", descricao: "Cozinheira há 40 anos, famosa pelo frango com quiabo." },
        { id: 2, nome: "Chef Marcos Lima", especialidade: "Churrasco", descricao: "Especialista em cortes e assados no fogo de chão." },
        { id: 3, nome: "Júlia Tanaka", especialidade: "Confeitaria", descricao: "Doces que misturam receitas japonesas e caipiras." },
        { id: 4, nome: "Sítio Boa Vista", especialidade: "Produtor rural", descricao: "Queijos e doces artesanais feitos pela família." }
    ],
    ingressos: [
        { tipo: "Entrada Gratuita", preco: "R$ 0" },
        { tipo: "Aula-show com degustação", preco: "R$ 90" }
    ]
};
