/*
Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/

let filmes = [
    {titulo: "Vingadores: Ultimato", diretor: "Anthony Russo", anoLancamento: 2019},
    {titulo: "Vingadores: Guerra Infinita", diretor: "Anthony Russo", anoLancamento: 2018},
    {titulo: "Pantera Negra", diretor: "Ryan Coogler", anoLancamento: 2018},
    {titulo: "Homem-Aranha: Longe de Casa", diretor: "Jon Watts", anoLancamento: 2019}, 
    {titulo: "Batman: O Cavaleiro das Trevas", diretor: "Christopher Nolan", anoLancamento: 2008},
    
]

let arr = []
filmes.forEach(element => {
    arr.push(element.titulo)
})

console.log(arr)