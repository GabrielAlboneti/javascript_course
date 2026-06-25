const nome = "Gabriel";
const sobrenome = "Alboneti";
const idade = 18;
const pesoKilo = 70;
const alturaEmMetros = 1.8;
let imc = pesoKilo / alturaEmMetros ** 2;
let anoNascimento = 2026 - idade;

// Usa-se crase e ${var} para colocar variáveis em uma string
console.log(
   `${nome} ${sobrenome} tem ${idade} anos, pesa ${pesoKilo} kg,`, // template strings
   `tem ${alturaEmMetros} de altura e seu IMC é de ${imc}.`,
);

console.log(`${nome} nasceu em ${anoNascimento}`);

