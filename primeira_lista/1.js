/*
1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/

const input = require("prompt-sync")();
const numero = parseInt(input("Digite um número: "));
numero % 2 === 0 ? console.log("O número é par") : console.log("O número é ímpar");