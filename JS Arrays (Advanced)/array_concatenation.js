const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
// const a3 = a1.concat(a2, [7, 8, 9], "Gabriel");
const a3 = [...a1, "Gabriel", ...a2, ...[7, 8, 9]];

console.log(a3);

/*
- array.concat(...items): concatena os items passados ao array;
- Você também pode usar o rest operator (...) para acessar os valores do array;
Obs.: Quando o rest operator é usado para desestruturar um array/objeto, ele é chamado 
de spread operator;
*/

