const pessoa1 = {
   nome: "Gabriel",
   sobrenome: "Alboneti",
   idade: 18,

   fala() {
      console.log(`A minha idade atual é ${this.idade}`); // = self.nome
   },

   incrementaIdade() {
      this.idade++;
   },
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

/*
- Objeto é diferente de dicionário!;
- Função fábrica (factory) = função que cria objetos;
- Para criar objetos, é só abrir chaves e colocar os atributos e os métodos;
- this: modo de referenciar o objeto em si. Igual a self;
- Se o nome do item no dicionário será o mesmo que o nome da variável, você pode 
simplesmente escrever o nome da variável que o javascript automaticamente criará o resto
da estrutura;
Ex.: {nome: nome} = {nome} -> JS cria o item e o preenche com a variável de mesmo nome
*/
// function criaPessoa(nome, sobrenome, idade) {
//    return { nome, sobrenome, idade }; // = {nome: nome, sobrenome: sobrenome, idade: idade}
// }

