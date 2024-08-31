/*
2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

const input = require("prompt-sync")();
const idade = parseInt(input("Digite a idade: "));

idade < 12
  ? console.log("Criança")
  : idade < 18
  ? console.log("Adolescente")
  : idade <= 59
  ? console.log("Adulto")
  : console.log("Idoso");
