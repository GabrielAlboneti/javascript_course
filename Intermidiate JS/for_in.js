const pessoa = {
   nome: "Gabriel",
   sobrenome: "Alboneti",
   idade: 30,
};

for (let chave in pessoa) {
   console.log(chave, pessoa[chave]);
}

// const frutas = ["Pêra", "Maçã", "Uva"];

// for (let indice in frutas) {
//    console.log(frutas[indice]);
// }

/*
- For in -> lê os índices do array ou as chaves do objeto;
*/

