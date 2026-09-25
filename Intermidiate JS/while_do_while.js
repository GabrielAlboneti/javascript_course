function random(min, max) {
   const r = Math.floor(Math.random() * (max - min) + min);

   return r;
}

const min = 1;
const max = 50;

// let rand = random(min, max);
let rand = 10;
let attempts = 0;

while (rand !== 10) {
   // rand = random(min, max);
   console.log(rand);
   attempts++;
}
console.log("############################");

attempts = 0;

do {
   // Executa pelo menos uma vez
   // rand = random(min, max);
   console.log(rand);
   attempts++;
} while (rand !== 10);

console.log(`Number of attemps ${attempts}`);

