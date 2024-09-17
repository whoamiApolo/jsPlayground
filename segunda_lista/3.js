/*
Objetivo: Dado um objeto produto com várias propriedades, crie uma
função que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.
*/

/*
let piscina = {
  formato: "Retangular",
  comprimento: 10,
  largura: 5,
  profundidade: 2,
  peso: 0.5,
  preco: 150,

  volume() {
    return this.comprimento * this.largura * this.profundidade;
  },

  encher: function () {
    console.log(`Enchendo a piscina`);
  },

  esvaziar: function () {
    console.log(`A piscina foi esvaziada`);
  },

  limpar: function () {
    console.log(`A piscina foi limpa`);
  },
};

const produto = (element, value) => {
  let newProduto = {};
  for (let key in element) {
    !isNaN(element[key]) && element[key] > value
      ? (newProduto[key] = element[key])
      : `aaa`;
  }

  return newProduto;
};

console.log(produto(piscina, 1));
console.log(produto(piscina, 4));
console.log(produto(piscina, 15));
console.log('--------------------------------------')
console.log("Volume da piscina:", piscina.volume(), "metros cúbicos");
console.log("Formato da piscina:", piscina.formato)
console.log('--------------------------------------')
produto(piscina.encher());
produto(piscina.limpar());
produto(piscina.esvaziar());
*/

let fibonacci = {
    a: 0,
    b: 1,
    c: 1,
    d: 2,
    e: 3,
    f: 5,
    g: 8,
    h: 13,
    i: 21,
    j: 34,
    k: 55,
    l: 89,
    m: 144,
}

const produto = (element, value) => {
    let newProduto = {};
    for (let key in element) {
        !isNaN(element[key]) && element[key] > value
            ? (newProduto[key] = element[key])
            : console.log(`O valor da propriedade ${key} é menor que ${value}`);
          }
          
    return newProduto;
}

console.log(produto(fibonacci, 10));