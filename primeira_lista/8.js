/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/
const input = require("prompt-sync")();

let aux = true;
while (aux) {
  const number = parseInt(input("Digite um número: "));
  const number1 = parseInt(input("Digite outro número: "));

  if (number == number1) {
    console.log("Os números são iguais. Favor digitar números diferentes.");
  } else {
    aux = false;
    if (number < number1) {
      console.log(`Os números em ordem crescente são: ${number}, ${number1}`);
    } else {
      console.log(`Os números em ordem crescente são: ${number1}, ${number}`);
    }
  }
}