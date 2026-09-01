function getWeekDayName(weekDay) {
   switch (weekDay) {
      case 0:
         return "domingo";

      case 1:
         return "segunda-feira";

      case 2:
         return "terça-feira";

      case 3:
         return "quarta-feira";

      case 4:
         return "quinta-feira";

      case 5:
         return "sexta-feira";
      case 6:
         return "sábado";

      default:
         break;
   }
}
function getMonthName(month) {
   switch (month) {
      case 0:
         return "janeiro";

      case 1:
         return "fevereiro";

      case 2:
         return "março";

      case 3:
         return "abril";

      case 4:
         return "maio";

      case 5:
         return "junho";

      case 6:
         return "julho";

      case 7:
         return "agosto";

      case 8:
         return "setembro";

      case 9:
         return "outubro";

      case 10:
         return "novembro";

      case 11:
         return "dezembro";

      default:
         break;
   }
}

function addLeftZero(num) {
   return num < 10 ? `0${num}` : num;
}

function formatDate(date) {
   const weekDay = getWeekDayName(date.getDay());
   const day = addLeftZero(date.getDate());
   const month = getMonthName(date.getMonth());
   const year = date.getFullYear();
   const hour = addLeftZero(date.getHours());
   const min = addLeftZero(date.getMinutes());

   return `${weekDay}, ${day} de ${month} de ${year} ${hour}:${min}`;
}

function myScope() {
   const section = document.querySelector(".container");
   const h1 = section.querySelector("h1");

   const currentDate = new Date();

   h1.innerText = formatDate(currentDate);
}

myScope();

