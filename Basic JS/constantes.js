/* eslint-disable no-unused-vars, no-useless-assignment */
// 🔼 Ignores unused vars and unused assignments (when you assign a new value to
// the variable)
// Mesmas regras das variáveis se aplicam;

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(typeof primeiroNumero); // Não precisa de parênteses!!
// A menos que você queira avaliar uma expresão
console.log(typeof (primeiroNumero + segundoNumero));

