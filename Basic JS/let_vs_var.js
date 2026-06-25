// 1) O var não gera erro quando você redeclara uma variável:
// var nome = "Gabriel";
// var nome = "Alboneti";
// nome = "Gabriel"; // Nunca faça isso -> cria uma variável global

let nome = "Gabriel";
// let nome = "Alboneti"; // gera um erro

console.log(nome);

