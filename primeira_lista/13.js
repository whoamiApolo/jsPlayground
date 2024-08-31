/*
13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/

const input = require("prompt-sync")();
let sum = 0;
let media = 0;
let aux = true;

while (aux) {
  const user = parseFloat(input("Digite um número decimal: "));

  if (user == 0 || isNaN(user)) {
    aux = false;
  }

  sum += user;
  media++;
}

let resultado = sum / (media - 1);
console.log(`A média aritmética dos números é: ${resultado}`);