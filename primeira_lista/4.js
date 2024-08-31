/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const input = require("prompt-sync")();
const select = Number(
  input("Digite 1 para opção 1, 2 para opção 2 e 3 para opção 3: ")
);

switch (select) {
  case 1:
    console.log("Back-end");
    break;
  case 2:
    console.log("Front-end");
    break;
  case 3:
    console.log("Full-stack");
    break;
  default:
    console.log("Opção inválida");
}
