const pessoa = {
   nome: "Gabriel",
   sobrenome: "Alboneti",
};

for (let chave in pessoa) {
   console.log(chave, pessoa[chave]);
}

// For clássico - Geralmente com iteráveis (array ou string)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

// for (let i = 0; i < nomes.length; i++) {
//    console.log(nomes[i]);
// }

// console.log("######################");

// for (const i in nomes) {
//    console.log(nomes[i]);
// }

// console.log("######################");

// for (let valor of nomes) {
//    console.log(valor);
// }

// console.log("######################");

// nomes.forEach(function (element, i, array) {
//    console.log(element, i, array);
// });

/*
- For of: retorna os valores do array; -> não funciona em objetos 
- array.forEach(function): 
   - executa a função para cada elemento do array;
   - a função deve receber o elemento, e pode ainda receber o índice e o array completo;
*/

