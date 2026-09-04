// const verdadeira = true;
let sobrenome = "Alboneti";

console.log(sobrenome);

/*
- Let: escopo de bloco {... bloco};
- Var: 
   - escopo somente de função;
   - utiliza hoisting, ou seja, quando você cria a variável depois de já ter usado-a,
   o interpretador do JavaScript declara a variável no topo do código e vê a declaração
   original como atribuição de valor. 
   PERIGO: Em vez de dar erro, a variável tem como valor undefined até a linha onde
   você a criou!; 

- Funções criadas com function também usam hoisting, porém não é tão grave com funções;
*/

// function falaOi() {
//    if (verdadeira) {
//       let nome = "Gabriel";
//       let sobrenome = "Alboneti";
//       console.log(nome);
//       console.log(sobrenome);
//    }

// }

// falaOi();
// let nome = "Gabriel"; // criando
// var nome2 = "Gabriel"; // criando

// if (verdadeira) {
//    // bloco 1

//    let nome = "Alboneti"; // criando
//    var nome2 = "Rogério"; // redeclarando

//    if (verdadeira) {
//       // bloco 2

//       var nome2 = "Ronaldo"; // redeclarando
//       let nome = "Outra coisa"; // criando

//       // Reference Error, mesmo com outra variável de mesmo nome no escopo global / acima
//       // console.log(nome, nome2);
//       // let nome = "Outra coisa";
//    }
// }

