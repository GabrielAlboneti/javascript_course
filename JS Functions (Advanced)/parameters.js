const conta = (operador, acumulador, ...args) => {
   for (let numero of args) {
      if (operador === "+") acumulador += numero;
      if (operador === "-") acumulador -= numero;
      if (operador === "*") acumulador *= numero;
      if (operador === "/") acumulador /= numero;
   }

   console.log(acumulador);
};

conta("+", 1, 20, 30, 40, 50);

/*
- Sempre use o rest operator em vez de arguments;
- Funções definidas com function:
   - arguments: array que guarda todos os argumentos enviados; -> até argumentos não definidos!
   - Argumentos que não são passados retornam undefined por padrão;
   - O único jeito de forçar o argumento a usar seu valor padrão é passá-lo como 
   undefined; -> Não recomendado (má prática)

- Você pode definir os campos de um objeto como argumentos;
Ex.: function funcao({nome, sobrenome, idade}) -> recebe um objeto e procura esses campos;
- Você pode usar o operador rest (...) para pegar o resto dos argumentos;
*/

