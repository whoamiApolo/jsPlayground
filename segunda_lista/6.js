/*
Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
*/

let funcionarios = [
    {nome: "Tony Stark", cargo: "CEO", salario: 1000000},
    {nome: "Steve Rogers", cargo: "Soldado", salario: 50000},
    {nome: "Natasha Romanoff", cargo: "Agente", salario: 70000},
    {nome: "Bruce Banner", cargo: "Cientista", salario: 80000},
    {nome: "Clint Barton", cargo: "Atirador", salario: 60000},
    {nome: "Thor", cargo: "Deus", salario: 90000},
    {nome: "Nick Fury", cargo: "Diretor", salario: 120000},
]

for (let funcionario of funcionarios) {
    if (funcionario.salario > 80000) {
        console.log(funcionario);
    }
}

