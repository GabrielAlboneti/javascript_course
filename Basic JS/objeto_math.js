let num1 = 9;
// let num2 = Math.floor(num1); // arredonda para baixo
// let num2 = Math.ceil(num1); // arredonda para cima
// let num2 = Math.round(num1); // arredonda o número normalmente
// let num2 = Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9); // retorna o maior valor de um array
// let num2 = Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9); // retorna o menor valor de um array
// const num2 = Math.random(); // gera um número aleatório entre 0 e 1
// const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
// const num2 = Math.PI; // valor de PI
// const num2 = num1 ** 0.5; // conta manual para raiz quadrada de num1
const num2 = Math.sqrt(num1); // retorna raiz quadrada de num1

// console.log(aleatorio);
console.log(num2);

// Perigo: Divisões por zero não retornam erro em JS e ele vê a conta como válida.
console.log(100 / 0); // retorna Infinity

// Formula para definir o intervalo dos números aleatórios:
// Math.random() * (max - min) + min; (Pode arrendondar também se quiser)
// - Todas as operações matemáticas básicas estão disponíveis no objeto;

