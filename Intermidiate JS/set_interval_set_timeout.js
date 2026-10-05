const mostraHora = () => {
   let data = new Date();

   return data.toLocaleTimeString("pt-BR", {
      hour12: false,
   });
};

const timer = setInterval(function () {
   console.log(mostraHora());
}, 1000);

setTimeout(function () {
   clearInterval(timer);
}, 3000);

setTimeout(function () {
   console.log("Olá mundo");
}, 5000);

console.log(mostraHora());

/*
- setInterval(func, t): executa a função recebida a cada t milisegundos; 
Obs.: setInterval pode ser salvo em uma variável para executar depois;

- setTimeout(func, t): executa a função depois de t milisegundos;
- clearInterval(interval): interrompe a execulção do intervalo;
*/

