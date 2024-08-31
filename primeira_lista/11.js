/*
11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/

const input = require("prompt-sync")();
let sum = 0;
let count = 0;

// for (let i = 0; i < 5; i++) {}

while (count < 5) {
  sum += parseInt(input("Digite um número: "));
  count++;
}

console.log(`A soma dos números é: ${sum}`);
