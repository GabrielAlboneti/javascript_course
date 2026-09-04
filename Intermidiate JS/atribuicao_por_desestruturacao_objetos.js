const pessoa = {
   nome: "Gabriel",
   sobrenome: "Alboneti",
   idade: 30,
   endereco: {
      rua: "Coronel Buldogue",
      numero: 8000,
   },
};
// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;

console.log(nome, resto);

/*
- Para desestruturar o objeto, passe o nome da chave seguido pelo nome da variável;
Ex.: const { chave1: var1 = "default", chave2: var2 = 0 }

- Se a variável tem o mesmo nome que o valor no objeto, você pode escrever uma vez e
vai funcionar do mesmo jeito;
Ex.: { nome } = { nome: nome }

- Você pode definir um valor padrão para o caso da chave não ser encontrada (se não, 
o retorno será undefined);

- O ... também funciona para objetos;

- Para obter dados de objetos dentro do objeto, use a chave que contém o objeto e abra
outro par de chaves para escolher as chaves de dentro do objeto;
Ex.: const { endereco: { rua: r = 12345, numero } }
*/

