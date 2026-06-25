/*eslint-disable no-unused-vars*/
// Tipos primitivos: string, number, undefined, null, boolean e symbol
// Strings
const nome = "Gabriel";
const nome2 = `Gabriel`;

// Numbers
const num1 = 10;
const num2 = 10.52;

// Undefined (Obs.: não se pode inicializar uma constante vazia)
let nomeAluno; // Cria uma variável sem valor definido. (tipo o C)

// Null
let sobrenomeAluno = null; // None -> Usado para limpar o valor de uma variável

// Boolean
const aprovado = true;

// Exemplo
const a = [1, 2];
const b = a; // Aponta para o mesmo valor na memória (só funciona com arrays?)

console.log(a, b);

b.push(3); // Afeta a também (push = append)
console.log(a, b);

// console.log(typeof nome, nome);
// console.log(typeof num1, num1);
// console.log(typeof nomeAluno, nomeAluno);
// console.log(typeof sobrenomeAluno, sobrenomeAluno);
// console.log(typeof aprovado, aprovado);

