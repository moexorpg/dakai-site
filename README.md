# Site do Dakai — guia de publicação

Este pacote tem 3 arquivos: `index.html`, `style.css` e `script.js`. Eles já
funcionam juntos — não precisa de nenhum outro arquivo pra publicar.

## 1. Colocar no GitHub Pages

1. Crie um repositório novo no GitHub (pode ser público), ex: `dakai-site`.
2. Suba os 3 arquivos para a raiz do repositório (arrastar e soltar pela
   interface web do GitHub funciona).
3. No repositório, vá em **Settings → Pages**.
4. Em "Source", escolha a branch `main` e a pasta `/ (root)`. Salve.
5. Em alguns minutos o GitHub te dá um link tipo
   `https://seu-usuario.github.io/dakai-site/`. É o seu site no ar.

Qualquer edição futura: edite o arquivo direto no GitHub (ou suba de novo) e
o site atualiza sozinho em 1–2 minutos.

## 2. Por que não dá pra "processar pagamento" direto no site

O GitHub Pages só serve arquivos estáticos (HTML/CSS/JS) — não roda nenhum
código no servidor. Isso é uma coisa boa pra segurança: significa que **nunca**
dá pra pedir número de cartão de crédito direto nesse site, porque não existe
um backend seguro pra guardar isso. A solução (e o padrão do mercado) é usar
um checkout hospedado por quem processa o pagamento pra você. Duas opções
comuns no Brasil:

### Opção A — Mercado Pago (recomendado, mais simples pra CPF/PIX)
1. Crie/acesse sua conta em mercadopago.com.br.
2. No painel, crie um **Link de pagamento** (ou "Checkout Pro") pra cada
   plano (Guerreiro, Super Saiyajin, doação avulsa).
3. Copie o link gerado.
4. No `index.html`, troque o `href="#"` de cada botão `.btn-plan` pelo link
   correspondente.

### Opção B — Stripe Payment Links
Mesma lógica: você cria um "Payment Link" pro produto no painel da Stripe e
cola o link no `href` do botão certo.

Em ambos os casos, quem processa o pagamento (Mercado Pago/Stripe) já cuida
da parte de segurança do cartão — você só precisa do link.

## 3. Coletar Nome, CPF, E-mail e Nick do Minecraft sem banco de dados ainda

O formulário de cadastro (seção "Cadastro do apoiador") já está pronto, mas
ele precisa de um endpoint pra receber os dados. Sem backend, a forma mais
simples é o [Formspree](https://formspree.io) (tem plano grátis):

1. Crie uma conta no Formspree.
2. Crie um novo formulário — ele te dá uma URL tipo
   `https://formspree.io/f/abcd1234`.
3. No `index.html`, ache a linha:
   ```html
   <form id="signup-form" class="signup-form" action="https://formspree.io/f/SEU_ID_AQUI" method="POST">
   ```
   e troque `SEU_ID_AQUI` pelo ID que o Formspree te deu.
4. Pronto: toda vez que alguém preencher o formulário, você recebe os dados
   por e-mail. Dá pra exportar isso depois, quando você tiver um banco de
   dados de verdade.

Quando você tiver hospedagem própria (VPS, etc.), aí sim compensa trocar
esse formulário por um backend real com banco de dados — nesse momento eu
posso te ajudar a montar isso.

## 4. Um ponto de atenção sobre o CPF

Como o site vai coletar CPF (dado sensível pela LGPD), vale:
- Ter uma política de privacidade simples explicando pra que serve o dado
  (vincular pagamento à conta no servidor) e que você não vai
  compartilhar/vender isso.
- Guardar esses dados com cuidado (não deixar planilha/e-mail exposto
  publicamente).
- O checkbox de consentimento no formulário já está no HTML — não tire ele.

## 5. O que ainda é só rascunho

- **Lore**: os textos da seção "Lore" são placeholders com `[Substitua por: ...]`
  — troque pela história real do seu servidor.
- **Preços dos planos**: R$ 15 e R$ 30 são só exemplos, ajuste como quiser.
- **Links de pagamento**: ainda apontam pra `#`, precisam ser trocados
  (passo 2 acima).
