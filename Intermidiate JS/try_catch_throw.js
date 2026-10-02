function soma(x, y) {
   if (typeof x !== "number" || typeof y !== "number") {
      throw new ReferenceError("x e y precisam ser números");
   }

   return x + y;
}
try {
   console.log(soma(1, 2));
   console.log(soma("1", 2));
} catch (error) {
   console.log(error);
   console.log("Alguma coisa mais amigável pro usuário.");
}
/*
- throw: lança um erro (raise);
- new Error(msg): cria um novo tipo de erro com a msg; -> pode ser com qualquer tipo de 
erro
*/

