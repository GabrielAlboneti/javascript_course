// Escopo global
const nome = "Gabriel";

function falaNome() {
   // Escopo falaNome
   console.log(nome);
}

function usaFalaNome() {
   // Escopo usaFalaNome -> não altera o escopo de funções vizinhas
   const nome = "Alboneti";
   falaNome();
}

usaFalaNome();

