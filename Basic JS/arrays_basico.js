// Obs.: O const não príbe alteração, mas re-atribuição de uma váriavel
// (Ex.: var = 1; var = 2), portanto podemos alterar os itens dentro dos objetos, mas
// não podemos reatribuir a variável para outro valor;
const alunos = ["Gabriel", "Elis", "Helena"];

alunos.push("Juliano");
alunos.push("Isabel");

// arrays são derivados de um objeto Array, então o retorno é object
console.log(typeof alunos);
console.log(alunos instanceof Array);
/*
- Você pode colocar tipos de dados diferentes num mesmo array, porém não é recomendado;
- Você pode atribuir um valor a um índice inexistente: array[n] = "Valor" -> elemento n 
do array será "Valor";
(Obs.: para evitar a criação de elementos vazios, use array.length como n)
- var instanceof Object: checa se a variável é do tipo Object. Retorna o booleano 
resultante;

Funções de array:
- .length: retorna o tamanho do array (número de elementos);
- .push: adiciona um elemento ao final do array (basicamente append); -> recomendado
- .unshift: adiciona um elemento no começo do array;
- .pop: retorna o último elemento do array e o deleta do array;
- .shift: retorna o primeiro elemento do array e o deleta do array;
- delete array[n]: deleta o elemento do array, deixando um elemento vazio no lugar;
- .slice: retorna os elementos no intervalo dos indices indicados; 
*/

// console.log(alunos.slice(0, -1)); // Lembre que -1 não incluí o último elemento
// console.log(alunos[50]); // Retorna undefined
// alunos[alunos.length] = "Nome";
// alunos[3] = "Nova coisa";

