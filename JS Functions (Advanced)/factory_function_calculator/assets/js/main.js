function criaCalculadora() {
   return {
      display: document.querySelector(".display"),

      inicia() {
         this.cliqueBotoes();
         this.pressionaEnter();
      },

      pressionaEnter() {
         this.display.addEventListener("keyup", (e) => {
            if (e.keyCode === 13) {
               this.realizaConta();
            }
         });
      },

      clearDisplay() {
         this.display.value = "";
      },

      apagaUm() {
         this.display.value = this.display.value.slice(0, -1);
      },

      realizaConta() {
         let conta = this.display.value;

         try {
            // Obs.: eval executa a string como um script. Sempre tenha cuidado ao usá-la
            // Aqui só é usado para fins educacionais;
            conta = eval(conta);

            if (!conta) {
               alert("Conta inválida");
               return;
            }

            this.display.value = String(conta);
         } catch (e) {
            alert("Conta inválida");
            return;
         }
      },

      cliqueBotoes() {
         // this -> calculadora
         document.addEventListener("click", (e) => {
            const el = e.target;

            if (el.classList.contains("btn-num")) {
               this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains("btn-clear")) {
               this.clearDisplay();
            }

            if (el.classList.contains("btn-del")) {
               this.apagaUm();
            }

            if (el.classList.contains("btn-eq")) {
               this.realizaConta();
            }
         });
      },

      btnParaDisplay(valor) {
         this.display.value += valor;
      },
   };
}

const calculadora = criaCalculadora();

calculadora.inicia();

// function(){}.bind(obj): força o this a referenciar obj;
/*
- Em funções definidas com function, o this muda de acordo com o objeto que chama a 
função;
Ex.: let obj = {
   name: "Gabriel",
   foo(){
      // this se refere a obj
      console.log(this.name); // Gabriel
      document.addEventListener("click", function (e) {
         // this agora se refere a document 
         console.log(this.name) // Error: no variable named name;
      })
   }
}
- Arrow functions travam o this para o objeto em que elas são criadas;
Ex.: let obj2 = {
   name: "Gabriel",
   foo(){
      // this se refere a obj2
      console.log(this.name); // Gabriel
      document.addEventListener("click", function (e) {
         // this ainda se refere a obj2
         console.log(this.name) // Gabriel
      })
   }
}
*/

