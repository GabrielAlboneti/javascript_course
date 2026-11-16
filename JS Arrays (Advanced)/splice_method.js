const nomes = ["Maria", "João", "Eduardo", "Gabriel", "Júlia"];

// array.splice(índice atual, n_delete, elem1, elem2, elem3, ...)
const removidos = nomes.splice(3, 2, "Luiz", "Otávio");

// pop
// const removidos = nomes.splice(-1, 1);
// shift
// const removidos = nomes.splice(0, 1);
// push
// nomes.splice(nomes.length, 0, "Luiz", "Otávio");
// unshift
// nomes.splice(0, 0, "Luiz", "Otávio");

console.log(nomes, removidos);

/*
array.splice(
   index -> índice a partir do qual as mudanças serão aplicadas;
   deleteCount -> número de elementos que serão deletados a partir do índice;
   ...items -> elementos que serão adicionados no índice;
)
- Number.MAX_VALUE: representa o maior número possível;
*/

