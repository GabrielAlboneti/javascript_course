function Calculadora() {
   this.display = document.querySelector(".display");

   this.start = () => {
      this.buttonPress();
      this.enterPress();
   };

   this.clearDisplay = () => {
      this.display.value = "";
   };

   this.deleteKey = () => {
      this.display.value = this.display.value.slice(0, -1);
   };

   this.calculateExpression = () => {
      try {
         let result = eval(this.display.value);
         this.display.value = result;

         if (!result) {
            return;
         }
      } catch (err) {
         alert("Conta inválida");
         this.clearDisplay();
         return;
      }
   };

   this.enterPress = () => {
      document.addEventListener("keyup", (e) => {
         // e.keyCode is deprecated. Use e.key instead (uses names instead of numbers)
         if (e.key === "Enter") {
            this.calculateExpression();
         }
      });
   };

   this.buttonPress = () => {
      document.addEventListener("click", (e) => {
         const el = e.target;

         if (el.classList.contains("btn-num")) {
            this.display.value += el.innerText;
         }
         if (el.classList.contains("btn-clear")) {
            this.clearDisplay();
         }
         if (el.classList.contains("btn-del")) {
            this.deleteKey();
         }
         if (el.classList.contains("btn-eq")) {
            return;
         }
      });
   };
}

const calc = new Calculadora();
calc.start();

// function criaCalculadora() {
//    return {
//       display: document.querySelector(".display"),

//       inicia() {
//          this.cliqueBotoes();
//          this.pressionaEnter();
//       },

//       pressionaEnter() {
//          this.display.addEventListener("keyup", (e) => {
//             if (e.keyCode === 13) {
//                this.realizaConta();
//             }
//          });
//       },

//       clearDisplay() {
//          this.display.value = "";
//       },

//       apagaUm() {
//          this.display.value = this.display.value.slice(0, -1);
//       },

//       realizaConta() {
//          let conta = this.display.value;

//          try {
//             // Obs.: eval executa a string como um script. Sempre tenha cuidado ao usá-la
//             // Aqui só é usado para fins educacionais;
//             conta = eval(conta);

//             if (!conta) {
//                alert("Conta inválida");
//                return;
//             }

//             this.display.value = String(conta);
//          } catch (e) {
//             alert("Conta inválida");
//             return;
//          }
//       },

//       cliqueBotoes() {
//          // this -> calculadora
//          document.addEventListener("click", (e) => {
//             const el = e.target;

//             if (el.classList.contains("btn-num")) {
//                this.btnParaDisplay(el.innerText);
//             }

//             if (el.classList.contains("btn-clear")) {
//                this.clearDisplay();
//             }

//             if (el.classList.contains("btn-del")) {
//                this.apagaUm();
//             }

//             if (el.classList.contains("btn-eq")) {
//                this.realizaConta();
//             }
//          });
//       },

//       btnParaDisplay(valor) {
//          this.display.value += valor;
//       },
//    };
// }

// const calculadora = criaCalculadora();

// calculadora.inicia();

