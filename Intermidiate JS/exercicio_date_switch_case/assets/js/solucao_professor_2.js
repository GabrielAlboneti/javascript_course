// Melhor solução
const h1 = document.querySelector(".container h1");
const data = new Date();
const opcoes = {
   dateStyle: "full",
   timeStyle: "short",
};

h1.innerHTML = data.toLocaleString("pt-BR", opcoes); // mais eficiente que switch-case

/*
- toLocaleString(lang, options): formats the date and time to the specified language and 
options;
P.S.: Sempre veja na documentação se já não há um método que faz o que você precisa.
*/

