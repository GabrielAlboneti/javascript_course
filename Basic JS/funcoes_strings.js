let umaString = "O rato roeu a roupa do rei de Roma.";

console.log(umaString.split(" ", 2));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
// string.length: retorna o tamanho da string
// console.log(umaString.replace(/[rR]/g, "#"));

/*
Notas:
- O caracter de escape (\) também funciona em JavaScript; (Ex.: "Um \"texto\"")
- As strings possuem índices, igual à listas; (Mesmo comportamento do C)
- Sempre prefira template strings (f strings) sobre concatenação;
- Em JS, as expressões regulares são definidas entre barras: /[a-z0-9]+/
Funções Exclusivas:
Obs.: Todas as funções assumem uma string (string.function);
- charAt(Number): Retorna o caractere no índice;
- indexOf(str, int):
   - Retorna o index onde o texto começa ou -1 se não encontra o texto;
   - Se você enviar um índice, a busca começará a partir do índice;
- lastIndexOf(str, int): igual ao indexOf, porém a busca é feita de trás para a frente;

Funções Iguais no Python:
- concat(str): Junta duas ou mais strings à string original;
- slice(start, end): Retorna o texto entre os índices;
- split(str, int):
   - Retorna um array com a string separada pelo valor dado;
   - Você pode limitar o número de resultados;
Funções RegExp:
- string.match(regex): Retorna os valores que seguem a expressão definida;
- string.search(regex): Tipo o indexOf, mas com expressões regulares;
- string.replace(regex, regex): Substitui na string um texto plelo valor definido
- string.replace(regex):
- string.replace(regex):
*/

