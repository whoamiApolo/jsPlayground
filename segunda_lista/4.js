/*
Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.
*/

let pessoas = [
  {nome: "Thor", idade: 1500, cidade: "Asgard"},
  {nome: "Loki", idade: 1500, cidade: "Asgard"},
  {nome: "Odin", idade: 1500, cidade: "Asgard"},
  {nome: "Frigga", idade: 1500, cidade: "Asgard"},
  {nome: "Heimdall", idade: 1500, cidade: "Asgard"},
  {nome: "Sif", idade: 1500, cidade: "Asgard"},
]

for (let pessoa of pessoas) {
  console.log(pessoa);
}

