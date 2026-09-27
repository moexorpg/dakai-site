// Liga cada botão de plano ao formulário de cadastro e guarda qual plano foi escolhido.
document.querySelectorAll(".btn-plan").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const plano = btn.dataset.plan || "";
    const planoField = document.getElementById("plano-field");
    if (planoField) planoField.value = plano;

    document.getElementById("cadastro").scrollIntoView({ behavior: "smooth" });

    // TROQUE este bloco pelo redirecionamento para o seu link de pagamento
    // (Mercado Pago / Stripe) depois que o cadastro for enviado.
    // Por enquanto, ele só leva a pessoa até o formulário.
  });
});

// Envia o formulário sem recarregar a página e mostra uma mensagem de status.
const form = document.getElementById("signup-form");
const status = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.textContent = "Enviando...";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        status.textContent = "Cadastro enviado! Agora escolha seu plano acima para finalizar o pagamento.";
        form.reset();
      } else {
        status.textContent = "Não foi possível enviar. Verifique os campos e tente novamente.";
      }
    } catch (err) {
      status.textContent = "Erro de conexão. Tente novamente em instantes.";
    }
  });
}
