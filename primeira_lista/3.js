/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

const input = require("prompt-sync")();
const nota = parseFloat(input("Digite a nota: "));

nota < 5
  ? console.log("Reprovado")
  : nota < 7
  ? console.log("Recuperação")
  : console.log("Aprovado");
