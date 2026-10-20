function criaMultiplicador(multiplicador) {
   // retorna uma lambda
   return function (n) {
      return n * multiplicador;
   };
}

const duplica = criaMultiplicador(2); // função closure
const triplica = criaMultiplicador(3);
const quadruplica = criaMultiplicador(4);

console.log(duplica(3));
console.log(triplica(3));
console.log(quadruplica(10));

/*
- Uma função pode retornar desde tipos primitivos até objetos e até mesmo funções;
*/

