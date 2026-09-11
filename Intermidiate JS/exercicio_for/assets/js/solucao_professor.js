const elementos = [
   { tag: "p", texto: "Qualquer texto que você quiser" },
   { tag: "div", texto: "Frase 2" },
   { tag: "footer", texto: "Frase 3" },
   { tag: "section", texto: "Frase 4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
   const { tag, texto } = elementos[i];
   const tagCriada = document.createElement(tag);
   // tagCriada.innerText = texto;
   let textoCriado = document.createTextNode(texto);

   tagCriada.appendChild(textoCriado);

   div.appendChild(tagCriada);
}

container.appendChild(div);

/*
- Outras formas de inserir texto em um elemento:
   - innerText: adiciona o texto sem considerar sintaxe de HTML;
   - document.createTextNode(str): como se criasse um elemento texto. Tem que ser 
   adicionado à uma tag por meio de appendChild();
*/

