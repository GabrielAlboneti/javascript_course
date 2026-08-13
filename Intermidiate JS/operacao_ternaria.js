// Operador ternário (? :) = if ... else ...
// condition ? value_if_true : value_if_false;
const pontuacaoUsuario = 999;

const nivelUsuario =
   pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuario normal";

const corUsuario = "Verde";
const corPadrao = corUsuario || "preto"; // fallback -> valor padrão

console.log(nivelUsuario, corPadrao);

