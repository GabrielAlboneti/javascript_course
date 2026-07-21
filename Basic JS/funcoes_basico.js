// Definição de função normal
// function soma(x = 1, y = 1) {
//    // Você pode definir valores padrões nos argumentos
//    return x + y;
// }

// const resultado = soma(4, 3);
// const resultado = soma(); // Não gera erro! Só retorna NaN

// Previne que a função seja sobrescrita
// const raiz = function (n) {
//    return n ** 0.5;
// };

// Arrow function -> jeito moderno de definir funções
const raiz = (n) => n ** 0.5; // Não precisa de chaves ou return!

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

/*
- Os erros em Javascript são acessados pelas suas respectivas classes (igual ao Python);
Obs.: Em JavaScript as exceções são chamadas de erros (Ex: Error() = BaseException());
- Perigo: o JS não levanta erros se você não passar um argumento obrigatório para a função!
A função simplesmente não vai funcionar;
*/

