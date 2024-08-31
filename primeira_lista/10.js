/*
10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

const input = require("prompt-sync")();
const number = parseInt(input("Digite um número: "));

for (let i = 0; i < 10; i++) {
  console.log(number);
}
