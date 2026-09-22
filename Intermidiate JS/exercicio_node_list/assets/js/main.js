function meuEscopo() {
   const paragrafos = document.querySelector("div.paragrafos");
   const ps = paragrafos.querySelectorAll("p");

   const estilosBody = getComputedStyle(document.body);
   const backgroundColorBody = estilosBody.backgroundColor;

   for (const element of ps) {
      element.style.backgroundColor = backgroundColorBody;
      element.style.color = "#FFF"; // Sempre coloque o valor dentro de strings
   }
}

meuEscopo();

/*
- O NodeList é um objeto DOM, embora se comporte igual a um array;
- Os atibutos CSS são strings!;

- querySelectorAll(): retorna um NodeList contendo os elementos encontrados;
- getComputedStyle(elemento): retorna um objeto contendo todos os atributos CSS do 
elemento;
*/

