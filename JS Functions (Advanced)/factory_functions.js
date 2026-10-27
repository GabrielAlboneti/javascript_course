function criaPessoa(nome, sobrenome, altura, peso) {
   return {
      nome,
      sobrenome,
      // Getter
      get nomeCompleto() {
         return `${this.nome} ${this.sobrenome}`;
      },

      // Setter
      set nomeCompleto(valor) {
         let newName = valor.split(" ");
         this.nome = newName.shift();
         this.sobrenome = newName.join(" ");
      },

      fala: function (assunto = "nada") {
         return `${this.nome} está falando sobre ${assunto}.`;
      },
      altura,
      peso,
      // Getter
      get imc() {
         const value = this.peso / this.altura ** 2;
         return value.toFixed(2);
      },
   };
}

const p1 = criaPessoa("Gabriel", "Alboneti", 1.8, 70);
const p2 = criaPessoa("João", "Silva", 1.78, 80);
const p3 = criaPessoa("Eduardo", "Ferreiro", 1.9, 85);

p1.nomeCompleto = "Maria Oliveira Santos";

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
/*
- Factory function: função que retorna um objeto;
- this: usado para acessar atributos ou métodos do objeto dentro desse mesmo objeto; 
(self do JavaScript);
- get function(){...}: executa a função e transforma o retorno em um atributo;
- set function(valor){...}: permite receber um valor novo por associação (=), porém você
deve montar a lógica;
- Factory function =! Constructor functions;
*/

