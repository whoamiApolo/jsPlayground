/*
Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/

let clientes = [
    {nome: "Harry Potter", idade: 30, cidade: "Londres"},
    {nome: "Hermione Granger", idade: 30, cidade: "Londres"},
    {nome: "Ronald Weasley", idade: 30, cidade: "Londres"},
    {nome: "Albus Dumbledore", idade: 150, cidade: "Londres"},
    {nome: "Severo Snape", idade: 40, cidade: "Londres"},
    {nome: "Sirius Black", idade: 40, cidade: "Londres"},
    {nome: "Rúbeo Hagrid", idade: 60, cidade: "Londres"},
]

let i = 0

clientes.forEach(element => {
    if(element.idade > 30)
        i++
})

console.log(i)