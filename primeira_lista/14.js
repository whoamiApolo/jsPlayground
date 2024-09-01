/*
14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/
const input = require("prompt-sync")();

const fatorial = (element) => {
  if (element === 0 || element === 1) {
    return 1;
  }

  while(element > 1) {
    return element * fatorial(element - 1);
  }
};

const inFatorial = parseInt(input("Digite um número: "));
console.log(fatorial(inFatorial));

console.log("Fim do programa");