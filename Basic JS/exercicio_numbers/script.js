const num = Number(prompt("Digite um número:")); // lembre que prompt sempre retorna uma string
// const texto = document.getElementById("text");
const num_class = document.getElementsByClassName("number");

document.getElementById("sqr-root").innerHTML = Math.sqrt(num);
document.getElementById("bool-integer").innerHTML = Number.isInteger(num);
document.getElementById("bool-nan").innerHTML = Number.isNaN(num);
document.getElementById("round-floor").innerHTML = Math.floor(num);
document.getElementById("round-up").innerHTML = Math.ceil(num);
document.getElementById("two-decimals").innerHTML = num.toFixed(2);

for (let i = 0; i < num_class.length; i++) {
   const element = num_class[i];
   element.innerHTML = `${num}`;
}

// DOM = Document Object Model -> representado pelo objeto document

