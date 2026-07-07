// Principais Operadores (os mesmos do Python)
// + -> adiçao / concatenação (strings);
// - -> subtração;
// * -> multiplicação;
// / -> divisão;
// ** -> potenciação;
// % -> resto da divisão;
// ++ -> incremento;
// -- -> decremento;
// += -> atalho para var = var + valor
// *= -> atalho para var = var * valor
// **= -> atalho para var = var ** valor
let contador = 2;

contador **= 10; // multiplica a variável pelo valor após o igual
console.log(contador);

// parseInt -> converte str para inteiro
// parseFloat -> converte str para decimal
// Number -> converte automaticamente para decimal ou inteiro

const num1 = 10;
const num2 = Number("5");
// Ás vezes, o javascript faz a conversão automática para que a conta seja possível
// console.log(num1 * num2); // converteu
console.log(num1 + num2); // não converteu

// contador++; // Sempre deixe separado para melhor organização do código
// console.log(contador);

// ++contador; // Adiciona um à variável (tipo no C)
// ++contador; // Funciona antes da variável também

// console.log(--contador); // mesma coisa do ++, só que com subtração
// console.log(--contador);

// Detalhe: quando o ++ é posicionado depois da variável, ele executa a ação que usa
// a variável antes de somar um à variável. Se ele vier antes, a soma ocorre antes da
// variável ser usada.
// console.log(contador++); // Primeiro mostra a variável para depois somar
// console.log(++contador); // Soma antes de mostrar a variável

