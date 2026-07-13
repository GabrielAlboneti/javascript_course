let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A

// Solução moderna
[varA, varB, varC] = [varC, varA, varB];

// let vector = [varA, varB, varC];

// varA = vector[1];
// varB = vector[2];
// varC = vector[0];

console.log(varA, varB, varC);

