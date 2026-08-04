// IMC = peso / altura²

function successMessage(message) {
   return `<p class="success"> ${message} </p>`;
}

function errorMessage(message) {
   return `<p class="error"> ${message} </p>`;
}

function meuEscopo() {
   const form = document.querySelector("form");
   const messageBox = document.querySelector(".message");

   function formEvent(event) {
      event.preventDefault(); // Lembre-se de receber o evento

      const weight = form.querySelector("#weight").value; // .value para receber o input
      const height = form.querySelector("#height").value;

      if (Number.isNaN(weight) || weight <= 0) {
         messageBox.innerHTML = errorMessage(`Peso inválido`);
         return;
      } else if (Number.isNaN(height) || height <= 0) {
         messageBox.innerHTML = errorMessage(`Altura inválida`);
         return;
      }

      const imc = weight / height ** 2;
      let resultado;

      if (imc < 18.5) {
         resultado = "Abaixo do peso";
      } else if (imc >= 18.5 && imc <= 24.9) {
         resultado = "Peso normal";
      } else if (imc >= 25 && imc <= 29.9) {
         resultado = "Sobrepeso";
      } else if (imc >= 30 && imc <= 34.9) {
         resultado = "Obesidade grau 1";
      } else if (imc >= 35 && imc <= 39.9) {
         resultado = "Obesidade grau 2";
      } else {
         resultado = "Obesidade grau 3";
      }

      messageBox.innerHTML = successMessage(
         `Seu IMC é ${imc.toFixed(2)} (${resultado})`,
      );
   }
   form.addEventListener("submit", formEvent);
}

meuEscopo();

