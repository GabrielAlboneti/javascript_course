// Função que recebe um número e retorna:
// - Fizz, se numero for divisível por tres;
// - Buzz, se numero for divisível por cinco;
// - FizzBuzz, se numero for divisível por tres e cinco;
// - O numero, se não for divisível por tres ou cinco;
// Deve checar se o argumento é um numero
// Use a função com números de 0 a 100

const fizzBuzz = (number) => {
   // Use diferente de (!==) em vez de negar a expressão toda
   if (typeof number !== "number") {
      console.log(`Error: argument "${number}" is not a number.`);
      return number;
   }

   const multipleOfThree = number % 3 === 0;
   const multipleOfFive = number % 5 === 0;

   if (multipleOfThree && multipleOfFive) {
      return "FizzBuzz";
   } else if (multipleOfThree) {
      return "Fizz";
   } else if (multipleOfFive) {
      return "Buzz";
   }

   return number;
};

for (let i = 0; i <= 100; i++) {
   console.log(i, fizzBuzz(i));
}

console.log(fizzBuzz("abc"));

