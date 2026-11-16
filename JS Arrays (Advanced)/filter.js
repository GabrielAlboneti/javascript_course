// Filter -> sempre retorna um array com o mesmo número de elementos ou menos;

// Retorne os números maiores de 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Sempre prefira retornar a condição em si em vez de booleanos puros
const numerosFiltrados = numeros.filter((value) => value > 10); // Função reduzida

// console.log(numerosFiltrados);

// Retorna as pessoas cujo nome tem 5 letras ou mais
// Retorna as pessoas com mais de 50 anos
// Retorna as pessoas cujo nome termina com a
const pessoas = [
   { nome: "Gabriel", idade: 18 },
   { nome: "Luiz", idade: 62 },
   { nome: "Maria", idade: 23 },
   { nome: "Eduardo", idade: 55 },
   { nome: "Rosana", idade: 32 },
   { nome: "Letícia", idade: 47 },
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
const pessoasAcimaCinquentaAnos = pessoas.filter((obj) => obj.idade >= 50);
const nomeTerminaComA = pessoas.filter((obj) => {
   return obj.nome.endsWith("a");
});

// console.log(pessoasComNomeGrande);
// console.log(pessoasAcimaCinquentaAnos);
console.log(nomeTerminaComA);

/*
- array.filter(func): filtra o array usando a função passada;
- string.endsWith(): checa se o fim da string é igual ao argumento passado;
- A função:
   - É automaticamente aplicada em todos os valores;
   - Recebe o valor, o index e até o array inteiro; -> index e array são opcionais
   - Deve retornar um booleano (true se o elemento obedece às condições, false caso não)
*/

