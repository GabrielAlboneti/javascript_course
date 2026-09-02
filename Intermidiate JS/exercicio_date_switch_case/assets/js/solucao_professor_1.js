const h1 = document.querySelector(".container h1"); // h1 dentro de .container (igual a CSS)
const data = new Date();

h1.textContent = data.toString();

function getDiaSemanaTexto(diaSemana) {
   let diasSemana = [
      "domingo",
      "segunda",
      "terça",
      "quarta",
      "quinta",
      "sexta",
      "sábado",
   ];

   return diasSemana[diaSemana] ? diasSemana[diaSemana] : "";
}

function getNomeMes(numeroMes) {
   // Bem menos complexo que switch case
   let meses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro",
   ];

   return meses[numeroMes] ? meses[numeroMes] : "";
}

function adicionaZeroEsquerda(num) {
   return num < 10 ? `0${num}` : num;
}

function criaData(data) {
   const diaSemana = data.getDay();
   const numeroMes = data.getMonth();

   const nomeDia = getDiaSemanaTexto(diaSemana);
   const nomeMes = getNomeMes(numeroMes);

   return (
      `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ` +
      `${adicionaZeroEsquerda(data.getHours())}:` +
      `${adicionaZeroEsquerda(data.getMinutes())}`
   );
}

h1.innerHTML = criaData(data);

