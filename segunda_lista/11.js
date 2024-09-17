/*
Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/

let pedidos = [
    {cliente: "Dom", produto: "carro", quantidade: 1},
    {cliente: "Romanoff", produto: "carro", quantidade: 2},
    {cliente: "tej", produto: "carro", quantidade: 3},
    {cliente: "Sean", produto: "carro", quantidade: 4},

]

let total = {}
pedidos.forEach(element => {
    if (total[element.cliente] === undefined) {
        total[element.cliente] = 0
    }
    
    total[element.cliente] += element.quantidade
})

console.log(total)