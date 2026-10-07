// Declaração normal (function hosting)
falaOi();
function falaOi() {
   console.log("Oi");
}
// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
   console.log("Sou um dado");
};

function executaFuncao(funcao) {
   funcao();
}
executaFuncao(souUmDado);

// Arrow function

const arrowFunction = () => {
   console.log("Sou uma arrow function.");
};
arrowFunction();

// Within an object
const obj = {
   falar() {
      console.log("Estou falando.");
   },
};

obj.falar();

/*
- First-class objects: significa que todas as funções podem ser tratadas como dado 
(Ex.: serem passadas como argumentos, retornadas, etc.)

- function hosting: o JS traz todas as declarações com function para o topo do 
código, assim permitindo que você use a função antes de sua declaração;
*/

