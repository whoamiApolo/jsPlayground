/*
Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/

let carrinho = {
  itens: [
    { nome: "cadeira ergonômica", quantidade: 1, precoUnitario: 500 },
    { nome: "mesa de escritório", quantidade: 1, precoUnitario: 800 },
    { nome: "computador", quantidade: 1, precoUnitario: 3000 },
    { nome: "impressora", quantidade: 1, precoUnitario: 500 },
    { nome: "mouse", quantidade: 1, precoUnitario: 50 },
  ],
};

let valorTotal = 0;
carrinho.itens.forEach((element) => {
  valorTotal += element.quantidade * element.precoUnitario;
});

console.log(`O valor total do carrinho é ${valorTotal}`);