/*
14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.
*/
const input = require("prompt-sync")();

const fatorial = (element) => {
  if (element === 0 || e === 1) {
    return 1;
  }

  while(e > 1) {
    return element * fatorial(e - 1);
  }
};

const inFatorial = parseInt(input("Digite um número: "));
console.log(fatorial(inFatorial));