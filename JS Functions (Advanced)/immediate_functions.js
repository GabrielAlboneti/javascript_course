// IIFE -> Immediatly Invoked Function Expression

(function (idade, peso, altura) {
   const sobrenome = "Alboneti";
   function criaNome(nome) {
      return nome + " " + sobrenome;
   }

   function falaNome() {
      console.log(criaNome("Gabriel"));
   }

   falaNome();
   console.log(idade, peso, altura);
})(30, 70, 1.8); // Você pode passar argumentos normalmente

/*
- Funções imediatas: funcões anônimas que são chamadas imediatamente após a criação;
Ex.: (function(){...})(); -> o segundo parênteses executa a função;
- Bom para separar seu script do escopo global;

*/

