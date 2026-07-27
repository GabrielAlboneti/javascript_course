function meuEscopo() {
   const form = document.querySelector(".form");
   const resultado = document.querySelector(".resultado");

   const pessoas = [];

   function recebeEventoForm(evento) {
      evento.preventDefault();

      const nome = form.querySelector("#nome");
      const sobrenome = form.querySelector("#sobrenome");
      const peso = form.querySelector("#peso");
      const altura = form.querySelector("#altura");

      pessoas.push({
         nome: nome.value,
         sobrenome: sobrenome.value,
         peso: peso.value,
         altura: altura.value,
      });

      resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;

      console.clear();
      console.log(pessoas);
      // nome.value = ""; // Limpa o fomulário
   }

   form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
/*
- Tudo que acontece no navegador é um evento;
- Sempre evite escrever código no escopo global. Programe o sistema dentro de funções / 
objetos e use eles no script; -> evita colisão entre variáveis e poluição do ambiente;
- A query usa seletores CSS para filtrar os elementos (Ex.: tag1.my_class, #id, etc.)
- Você pode definir um evento usando uma função anônima;
- Para acessar o que foi digitado em um campo form, use campo.value;

Funções
- document.querySelector(): seleciona o primeiro elemento que a query CSS selecionar;
- event.preventDefault(): remove o comportamento padrão do formulário (envio, 
recarregar a página, etc.);
- form.addEventListener(event, function): executa function toda vez que event acontecer;

- Este código é o jeito antigo de adicionar eventos no site. Ele foi substituído por
addEventListener();

// .onaction -> executa a função quando action ocorrer 
// (Ex.: onsubmit = botão tipo submit apertado)
form.onsubmit = function (evento) {
   evento.preventDefault();
   alert(1);
   console.log("Foi enviado!");
};
*/

