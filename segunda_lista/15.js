/*
Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas.
*/

let transacoes = [
    {tipo: "entrada", valor: 50},
    {tipo: "saída", valor: 20},
    {tipo: "entrada", valor: 100},
    {tipo: "saída", valor: 10},
]

let saldo = 0
transacoes.forEach(element => {
    if (element.tipo === "entrada") {
        saldo += element.valor
    } else {
        saldo -= element.valor
    }
})

console.log(`O saldo final é ${saldo}`)