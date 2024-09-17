/*
Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.
*/

let livro = {
  titulo: "Código Limpo",
  autor: "Robert C. Martin",
  anoPublicacao: 2008,
  genero: "Tecnologia",
};

console.log(
  `
${livro.editora}
${!livro.hasOwnProperty("editora")}
${livro.hasOwnProperty("titulo")}
`
);

for (let key in livro) {
  if (livro.hasOwnProperty("editora")) {
    console.log("Propriedade editora já existe no objeto livro");
    break;
  }
  
  livro.editora = "Alta Books";
  console.log(`${JSON.stringify(livro)}`);
  break;
}

/*
console.log(livro)
console.log(`${livro}`); // [object Object]
*/
