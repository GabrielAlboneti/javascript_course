// Função ePaisagem que recebe largura e altura e retorna true se a imagem esiver no
// modo paisagem

const ePaisagem = (width, height) => {
   if (!(typeof width === "number") || !(typeof height === "number")) {
      return "Error: passed non numeric arguments.";
   }
   return width > height;
};

console.log(ePaisagem(1920, 1080));
console.log(ePaisagem(1080, 1920));

