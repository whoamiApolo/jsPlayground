/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
*/

const input = require("prompt-sync")();
const a = parseFloat(input("Digite o lado A: "));
const b = parseFloat(input("Digite o lado B: "));
const c = parseFloat(input("Digite o lado C: "));

if (a < b + c && b < c + a && c < a + b) {
  if (a === b && b === c) {
    console.log("Triângulo equilátero");
  } else if (a !== b && b !== c && a !== c) {
    console.log("Triângulo escaleno");
  } else {
    console.log("Triângulo isósceles");
  }
} else {
  console.log("Não é um triângulo");
}
