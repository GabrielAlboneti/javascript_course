const hora = NaN;

if (hora < 12 && hora >= 0) {
   console.log("Bom dia");
} else if (12 <= hora && hora <= 17) {
   console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
   console.log("Boa noite");
} else {
   console.log("Olá");
}

/*
- Expressões "x entre y e z" não funcionam no javascript. Sempre use &&; (Ex.: 1 < x < 4)
*/

