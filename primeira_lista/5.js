/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

const input = require("prompt-sync")();
const altura = parseFloat(input("Digite a altura (m): "));
const peso = parseFloat(input("Digite o peso (kg): "));

const imc = peso / Math.pow(altura, 2);

if (imc <= 18.4) {
  console.log("Baixo peso");
} else if (imc > 18.5 && imc <= 24.9) {
  console.log("Peso normal");
} else if (imc > 25 && imc <= 29.9) {
  console.log("Sobrepeso");
} else {
  console.log("Obesidade");
}

console.log(`IMC: ${imc.toFixed(2)}`);
