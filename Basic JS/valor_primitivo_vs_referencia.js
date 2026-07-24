/*
Primitivos (imutáveis) - string, number, boolean, undefined, null, bigint e symbol;
Referência (mutável) - array, object, function;
*/

const a = {
   nome: "Gabriel",
   sobrenome: "Alboneti",
};

const b = { ...a };
a.nome = "Mário";
console.log(b);

/*
- str[0] = "A" não funciona pois strings são imutáveis;
- Para copiar um array, use a_copy = [...array]. Funciona com objetos também: 
copy = {...obj};

*/
// let a = [1, 2, 3];
// let b = a; // referência ao valor (mesmo endereço de memória -> não é uma cópia)
// let b = [...a]; // cópia real de a

