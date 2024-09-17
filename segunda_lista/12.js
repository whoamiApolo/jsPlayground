/*
Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.
*/

let estoque = [
    {produto: "air fryer", quantidade: 10, minimo: 5},
    {produto: "liquidificador", quantidade: 4, minimo: 2},
    {produto: "batedeira", quantidade: 3, minimo: 5},
    {produto: "cafeteira", quantidade: 2, minimo: 6},
    {produto: "torradeira", quantidade: 1, minimo: 2},
]

estoque.forEach(element => {
    if (element.quantidade < element.minimo) {
        element.quantidade *= 2
    }
})

console.log(estoque)