let num1 = 0.7;
let num2 = 0.1;

num1 += num2 * 3; // sempre retorna várias casas decimais em vez do número "certo" (Ex.: 0.799999...)
// num1 = (num1 * 10 + num2 * 10) / 10; // outra solução é não trabalhar com floats (melhor usar Number(num))

num1 = Number(num1.toFixed(2)); // parseFloat e Number consertam o problema

console.log(num1);
console.log("Variable: ", Number.isInteger(num1));

// console.log(num1.toString() + num2);
// console.log(num1.toString(27));
// console.log(num1.toFixed(2));
// console.log(Number.isInteger(num1));

/*
Funções:
Obs.: todas as funções assumem uma variável number antes (Ex.: num1.toString())

- toString(number): converte o número para uma string. Você pode também especificar uma 
base numérica para o número ser convertido;
- toFixed(number): arredonda o número para n casas decimais;
- Number.isInteger(your_number): verifica se o número é um inteiro;
- Number.isNaN(your_number): verifica se o número é um número válido (nan=not a number);
*/

