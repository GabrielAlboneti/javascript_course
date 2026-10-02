const retornaHora = (data = new Date()) => {
   if (!(data instanceof Date)) {
      throw new TypeError("Esperando instância de Date");
   }

   // Retorna a data já formatada (Lembre-se desse método)
   return data.toLocaleTimeString("pt-BR", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
   });
};

try {
   const data = new Date("01-01-1970 12:58:12");

   const hora = retornaHora();
   console.log(hora);
} catch (e) {
   // Tratar erro
} finally {
   console.log("Tenha um bom dia");
}

/*
- finally: executa quer o código gere um erro quer não;
- instanceof: checa se a variável é uma instância da classe;
*/

