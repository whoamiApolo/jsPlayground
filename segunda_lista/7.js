/*
Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/

let produtos = [
    {nome: "Ração para cachorro", preco: 100, desconto: 10},
    {nome: "Ração para gato", preco: 80, desconto: 8},
    {nome: "Ração para peixe", preco: 50, desconto: 5},
    {nome: "Ração para pássaro", preco: 30, desconto: 3},
    {nome: "Ração para tartaruga", preco: 20, desconto: 2},

]

produtos.forEach(element => {
    let value = element.preco - element.desconto
    console.log(`O produto ${element.nome} com desconto de ${element.desconto}% custa ${value}`)
})