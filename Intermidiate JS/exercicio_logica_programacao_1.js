// Função que retorna o maior entre dois números

const max = (x, y) => {
   if (!(typeof x === "number")) {
      return `Error: value of x (${x}) is not a number.`;
   } else if (!(typeof y === "number")) {
      return `Error: value of y (${y}) is not a number.`;
   }

   if (x === y) {
      return `Both values are equal to ${x}`;
   }

   return x > y ? x : y;
};

console.log(max(1, 2));
console.log(max(5, 4));
console.log(max(4.5, 4));
console.log(max(4, 4));

