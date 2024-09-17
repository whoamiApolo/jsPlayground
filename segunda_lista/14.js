/*
Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.
*/

let empresa = {
  departamentos: [
    {
      nome: "TI",
      funcionarios: ["Thor", "Loki", "Odin", "Frigga", "Heimdall", "Sif"],
    },
    {
      nome: "RH",
      funcionarios: ["Tony Stark", "Pepper Potts", "Happy Hogan"],
    },
    {
      nome: "Financeiro",
      funcionarios: ["Bruce Wayne", "Alfred Pennyworth"],
    },
  ],
};

for (const indiceDepartamento in empresa.departamentos) {
  const departamento = empresa.departamentos[indiceDepartamento];
  console.log(`\nDepartamento: ${departamento.nome}`);

  for (const funcionario of departamento.funcionarios) {
    console.log(`- ${funcionario}`);
  }
}
