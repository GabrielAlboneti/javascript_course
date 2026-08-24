// 01/01/1970 Timestamp unix (tresHoras para consertar o fuso)
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;
// const data = new Date(tresHoras);
// const data = new Date(1786644315473);
// const data = new Date(2019, 0);
function adicionaZeroAEsquerda(num) {
   return num < 10 ? `0${num}` : num; // condição sempre vem antes
}

function formataData(data) {
   const dia = adicionaZeroAEsquerda(data.getDate());
   const mes = adicionaZeroAEsquerda(data.getMonth() + 1);
   const ano = data.getFullYear();
   const hora = adicionaZeroAEsquerda(data.getHours());
   const min = adicionaZeroAEsquerda(data.getMinutes());
   const sec = adicionaZeroAEsquerda(data.getSeconds());

   return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data = new Date();
const dataBrasil = formataData(data);

console.log(dataBrasil);

/*
- Funções construtoras precisam ser criadas com new (Ex.: new Date());
- A data é calculada em milisegundos;
- Uma data pode ser passada por meio de milisegundos, argumentos ou uma string;
- Os meses começam a partir do 0, igual a índices;
- data.getDate(): retorna o dia da data;
- data.getMonth(): retorna o mês da data;
- data.getFullYear(): retorna o ano da data;
- data.getHours(): retorna as horas da data;
- data.getMinutes(): retorna o os minutos da data;
- data.getSeconds(): retorna os segundos da data;
- data.getMilliseconds(): retorna os milisegundos da data;
- data.getDay(): retorna o dia da semana da data; // 0 = Domingo, 6 = Sábado
- Mais informações: 
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

