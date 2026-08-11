// Nota: é sempre boa prática você criar uma função para servir de escopo. Aqui foi só
// por conveniência;
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
   e.preventDefault();
   const inputPeso = e.target.querySelector("#weight");
   const inputAltura = e.target.querySelector("#height");

   const peso = Number(inputPeso.value);
   const altura = Number(inputAltura.value);

   if (!peso) {
      setResultado("Peso inválido", false);
      return;
   }
   if (!altura) {
      setResultado("Altura inválido", false);
      return;
   }

   const imc = getIMC(peso, altura);
   const resultadoImc = getImcResult(imc);

   const msg = `Seu IMC é ${imc} (${resultadoImc})`;

   setResultado(msg, true);
});

function getImcResult(imc) {
   const result = [
      "Abaixo do peso",
      "Peso normal",
      "Sobrepeso",
      "Obesidade grau 1",
      "Obesidade grau 2",
      "Obesidade grau 3",
   ];

   // Faça o if do maior valor para o menor -> evita ANDs desnecessários
   // if (imc >= 39.9) return result[5]; // -> funciona
   if (imc >= 39.9) {
      return result[5];
   }
   if (imc >= 34.9) {
      return result[4];
   }
   if (imc >= 29.9) {
      return result[3];
   }
   if (imc >= 24.9) {
      return result[2];
   }
   if (imc >= 18.5) {
      return result[1];
   }
   return result[0];
}

function getIMC(peso, altura) {
   const imc = peso / altura ** 2;
   return imc.toFixed(2);
}

function criaP() {
   const p = document.createElement("p");
   return p;
}

function setResultado(msg, isValid) {
   const resultado = document.querySelector(".message");
   resultado.innerHTML = ""; // Esvazia a caixa de mensagem

   const p = criaP();

   if (isValid) {
      p.classList.add("success");
   } else {
      p.classList.add("error");
   }

   p.innerHTML = msg;
   resultado.appendChild(p);
}

/*
- document.createElement('tagName'): cria o elemento HTML que você passar;
- element.classList: retorna a lista de classes do elemento;
- element.appendChild(x): adiciona um elemento x dentro de element;
- event.target: retorna o objeto que ativou o evento; 
(Ex.: o fomulário, o elemento que foi clicado, etc.)
*/

