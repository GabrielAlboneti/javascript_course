const numeros = [
   [1, 2, 3],
   [4, 5, 6],
   [7, 8, 9],
];

const [, [, cinco]] = numeros;
const [lista1, lista2, lista3] = numeros; // Também é melhor

console.log(lista2[1]);
console.log(cinco);
console.log(numeros[1][1]); // mais simples e legível

/*
- As variáveis são atribuídas os valores na ordem em que são criadas;
- Você pode atribuir menos variáveis que o número de elementos no array;
- ... (Rest operator): serve para obter o resto dos elementos do array;
Ex.: const [var1, var2, ...resto] = array;
- Para pular elementos na desestruturação, deixe um espaço em branco entre as vírgulas;
EX.: const [um, , tres, , cinco, , sete] = numeros;
- Também funciona com matrizes:
Ex.: const [, [, , seis]] = numeros; -> jeito mais complicado de fazer numeros[1][2]
*/

