/*
Valores falsos (falsy values): 
false
0
"" '' ``
null / undefined
NaN

Valores verdadeiros: qualquer oura coisa;
*/
// const corUsuario = "vermelho";
// const corSite = corUsuario || "preto"; // Evita a construção de um if-else
const a = 0;
const b = null;
const c = "false";
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

// console.log(vaiExecutar && falaOi()); // funciona igual a if vaiExecutar: falaOi()

/*
- &&: Avalia a expressão até achar um valor falso ou chegar no fim da expressão:
   - Caso haja valores falsos, ela retornará o primeiro valor falso que foi encontrado 
   (false, 0, NaN, etc.) na expressão;
   - Caso não haja valores falsos, ela retornará o último valor da expressão;
   Ex.:
   - "algo" && NaN && "outra coisa" -> retorna NaN, já que NaN é falso;
   - "Gabriel" && true && "Maria" -> retorna "Maria", pois é o último valor da expressão;

- ||: Avalia a expressão até achar um valor verdadeiro ou chegar no fim da expressão:
   - Caso haja valores verdadeiros, ela retornará o primeiro valor verdadeiro que foi 
   encontrado na expressão;
   - Caso não haja valores verdadeiros, ela retornará o último valor da expressão;
   Ex.:
   - "algo" || NaN || "outra coisa" -> retorna NaN, já que NaN é falso;
   - "Gabriel" || true || "Maria" -> retorna "Maria", pois é o último valor da expressão;
*/

