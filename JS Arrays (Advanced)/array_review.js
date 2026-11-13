// const nomes = ["Eduardo", "Maria", "Joana", "William", "Rosana"];
// const novo = nomes.slice(1, -2);
// console.log(novo);

// const nome = "Gabriel Alboneti";
// const nomes = nome.split(" ");
const nomes = ["Gabriel", "Alboneti"];
const nome = nomes.join(" ");

console.log(nome);

/*
- Revisão:
   - delete array[i]: deleta o elemento sem alterar a estrutura do array;
   - a2 = a1; -> valor por referência = mesmo array
   - a2 = [...a1] -> copia os elementos = arrays diferentes
   - pop / shift: removem elementos do fim / início do array; 
   - push / unshift: adicionam elementos ao fim / início do array;
   - array.slice(i, j): returns an array with the elements from index i to j 
   (j not included);

- Você pode criar arrays usando o construtor Array; -> pouco utilizado
Ex.: const nomes = new Array("Eduardo", "Maria", "Joana")
*/

