/*
Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.
*/

let vendas = [
    {produto: "cadeira ergonômica", quantidade: 10, valor: 500},
    {produto: "mesa de escritório", quantidade: 5, valor: 800},
    {produto: "computador", quantidade: 2, valor: 3000},
    {produto: "impressora", quantidade: 1, valor: 500},
    {produto: "mouse", quantidade: 5, valor: 50},
]

let valorTotal = 0
vendas.forEach(element => {
    valorTotal += element.quantidade * element.valor
})

console.log(`O valor total de vendas é ${valorTotal}`)