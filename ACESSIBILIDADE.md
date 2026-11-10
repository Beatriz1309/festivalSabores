# Relatório de acessibilidade

## Antes
- Nota do Lighthouse (mobile):
72 / 100 (Acessibilidade) na minha visão e opinião

- Problemas apontados pelo Lighthouse:
1. **Background and foreground colors do not have a sufficient contrast ratio:** O botão de confirmação e os estados de foco utilizavam a cor `--color-tomate` (rosa claro) com texto ou fundo branco, ficando abaixo da proporção de 4,5:1.
2. **Form elements do not have associated labels:** Os campos de input e select no formulário de inscrição não possuíam uma associação clara via atributos id/htmlFor com suas respectivas labels textuais.
3. **Links do not have a discernible name / Interactive elements switch context:** O menu de navegação e ícones decorativos não continham indicações semânticas (como aria-label ou aria-hidden) para leitores de tela.

- Problemas apontados pelo axe:
1. `aria-allowed-attr`: Elementos div de feedback de envio não possuíam papéis de região viva (`role="status"`) para anunciar atualizações dinâmicas aos usuários de tecnologias assistivas.
2. `autocomplete-valid`: Os campos de "Nome" e "E-mail" falhavam por não disponibilizar os atributos de preenchimento automático padrão do navegador (`autoComplete="name"` e `autoComplete="email"`).
3. `heading-order`: Ausência de um link de escape inicial (Skip Link) para pular blocos repetitivos de navegação diretamente para o cabeçalho de conteúdo principal (`<main>`).

- Problemas encontrados no teste do teclado:
1. **Foco Invisível:** Ao navegar usando a tecla `Tab`, os campos do formulário e links do menu não recebiam uma borda ou indicador visual nítido (:focus-visible), impossibilitando saber qual elemento estava selecionado.
2. **Armadilha de Teclado / Falta de Suporte a Animações:** Usuários com preferência de sistema para redução de movimento enfrentavam rolagens bruscas e transições rápidas devido à falta da diretiva `prefers-reduced-motion`.
3. **Inacessibilidade em Elementos Ocultos:** Conteúdos que deveriam estar escondidos continuavam sendo focados pelo teclado por não utilizarem corretamente o atributo nativo `hidden`.
