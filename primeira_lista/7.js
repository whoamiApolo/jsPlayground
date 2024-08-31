/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

const input = require("prompt-sync")();
const fruta = parseInt(input("Digite o número de maçãs compradas: "));

if (fruta < 12) {
    console.log(`Valor total da compra: R$ ${(fruta * 0.3).toFixed(2)}`);   
} else {
    console.log(`Valor total da compra: R$ ${(fruta * 0.25).toFixed(2)}`);
}