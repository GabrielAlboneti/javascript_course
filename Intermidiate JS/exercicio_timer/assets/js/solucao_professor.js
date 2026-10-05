function relogio() {
   function getTimeFromSeconds(seconds) {
      const data = new Date(seconds * 1000);

      return data.toLocaleTimeString("pt-BR", {
         hour12: false,
         timeZone: "GMT",
      });
   }

   const timerElement = document.querySelector(".timer");
   let seconds = 0;
   let timerInterval;

   const iniciaRelogio = () => {
      timerInterval = setInterval(() => {
         seconds++;
         timerElement.innerHTML = getTimeFromSeconds(seconds);
      }, 1000);
   };

   document.addEventListener("click", function (e) {
      const element = e.target; // retorna o elemento que foi clicado

      // classList.contains: checa se o elemento possui certa classe
      if (element.classList.contains("reset")) {
         clearInterval(timerInterval);
         timerElement.classList.remove("red");

         timerElement.innerHTML = "00:00:00";
         seconds = 0;
      }
      if (element.classList.contains("start")) {
         timerElement.classList.remove("red");
         clearInterval(timerInterval);
         iniciaRelogio();
      }
      if (element.classList.contains("stop")) {
         timerElement.classList.add("red");
         clearInterval(timerInterval);
      }
   });
}

relogio();

/*
- Se o dia, mês e ano da data não importam, você pode usar o padrão (1/1/1970) e só 
passar, em milisegundos, o tempo desejado;
*/

