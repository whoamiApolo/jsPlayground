/*
Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média.
*/

let alunos = [
    {nome: "Batman", nota1: 10, nota2: 9},
    {nome: "Superman", nota1: 10, nota2: 10},
    {nome: "Mulher Maravilha", nota1: 9, nota2: 8},
    {nome: "Flash", nota1: 8, nota2: 7},
    {nome: "Aquaman", nota1: 7, nota2: 6},
    {nome: "Ciborgue", nota1: 6, nota2: 5},
    {nome: "Lanterna Verde", nota1: 5, nota2: 4},

]

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`O aluno ${aluno.nome} tem média ${media}`);
}