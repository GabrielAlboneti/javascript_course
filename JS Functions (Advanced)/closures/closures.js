function retornaFuncao(nome) {
   return function () {
      return nome;
   };
}

const funcao = retornaFuncao("Gabriel");
const funcao2 = retornaFuncao("João");
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());

/*
- closure: habilidade de uma função acessar o seu escopo léxico (escopo pai);
- console.dir: igual ao console.log, exceto quando usado no navegador, neste caso 
mostra uma descrição mais detalhada da função/objeto;
*/

