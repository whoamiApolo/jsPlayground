/*
12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/

const input = require("prompt-sync")();
const tabuada = parseInt(input("Digite um número: "));

if (tabuada >= 1 && tabuada <= 10) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
  }
} else {
  console.log("Digite um número entre 1 e 10");
}
