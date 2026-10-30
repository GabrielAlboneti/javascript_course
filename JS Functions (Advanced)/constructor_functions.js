// Função construtora -> (new) Pessoa

function Pessoa(nome, sobrenome) {
   // Atributos/métodos privados -> inacessíveis fora da função
   const ID = 1234567;
   const metodoInterno = () => {
      return;
   };

   // Atributos/métodos públicos
   this.nome = nome;
   this.sobrenome = sobrenome;

   this.metodo = () => {
      console.log(this.nome + ": sou um método");
   };
}

const p1 = new Pessoa("Gabriel", "Alboneti");
const p2 = new Pessoa("Maria", "Oliveira");

p2.metodo();

/*
- Funções construtoras: 
   - Os métodos e atributos são criados com this (Ex.: this.metodo = function(){...});
   - Você não precisa retornar o objeto (new já faz isso para você); 
   - São nomeadas usando PascalCase; (Ex.: factory -> criaPessoa, contructor -> Pessoa)
*/

