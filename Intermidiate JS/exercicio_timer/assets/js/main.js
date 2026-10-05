function myScope() {
   const timer = document.querySelector(".timer");
   const start = document.querySelector(".start");
   const stop = document.querySelector(".stop");
   const reset = document.querySelector(".reset");

   let interval;

   const currentTime = { hours: 0, minutes: 0, seconds: 0 };

   function runTimer() {
      if (interval) {
         clearInterval(interval);
      }

      timer.classList.remove("red");

      interval = setInterval(() => {
         progressTimer(currentTime);

         timer.innerHTML = myFormater(
            currentTime.hours,
            currentTime.minutes,
            currentTime.seconds,
         );
      }, 1000);
   }

   function stopTimer() {
      clearInterval(interval);
      timer.classList.add("red");
   }

   start.addEventListener("click", function (event) {
      runTimer();
   });
   stop.addEventListener("click", function (event) {
      stopTimer();
   });
   reset.addEventListener("click", function (event) {
      stopTimer();
      timer.classList.remove("red");
      timer.innerHTML = myFormater(0, 0, 0);

      currentTime.seconds = 0;
      currentTime.minutes = 0;
      currentTime.hours = 0;
   });
}

const myFormater = (hour, min, sec) => {
   return `${addLeftZero(hour)}:${addLeftZero(min)}:${addLeftZero(sec)}`;
};

const addLeftZero = (num) => {
   return num < 10 ? `0${num}` : num;
};

const progressTimer = (time) => {
   time.seconds++;

   if (time.seconds > 59) {
      time.seconds = 0;
      time.minutes += 1;
   }
   if (time.minutes > 59) {
      time.minutes = 0;
      time.hours += 1;
   }

   return time;
};

myScope();

/*
- Para passar argumentos na função dentro do addEventListener, envolva-a em uma função
anônima;
- Se você precisa acessar uma mesma variável em funções diferentes, inicialize-a fora
das funções e somente mude o seu valor;
*/

